/**
 * @package     Joomla.Site
 * @subpackage  Templates.WissensWerk
 *
 * WissensWerk Template
 *
 * MetisMenu initialization
 *
 * @copyright   (C) 2020 Open Source Matters, Inc.
 * @license     GNU General Public License version 2 or later
 */

document.querySelectorAll('ul.mod-menu_dropdown-metismenu').forEach(menu => {

    const mm = new MetisMenu(menu, {
        triggerElement: 'button.mm-toggler'
    });

    /** Ergänzung */

    /**
     * Keep sibling submenus mutually exclusive.
     *
     * Only sibling branches on the same hierarchy level
     * are affected. Parent and child branches may remain
     * open simultaneously.
     */
    mm.on('shown.metisMenu', event => {

        const submenu = event.detail?.shownElement;

        if (!submenu) {
            return;
        }

        const item = submenu.parentElement;

        if (!item) {
            return;
        }

        closeSiblingSubmenus(item);
    });

    /** Ergänzung Ende */


    // =========================================================================
    // Gemeinsame Hilfsfunktionen
    // =========================================================================

    /**
     * Return the direct submenu belonging to a menu item.
     */
    const getSubmenu = (item) => {

        return item.querySelector(':scope > ul.mm-collapse');
    };


    /**
     * Return the direct toggler belonging to a menu item.
     */

    const getToggler = (item) => {

        return item.querySelector(':scope > button.mm-toggler');

        /**ergänzung */

        /**
         * Close open sibling submenus on the same hierarchy level.
         *
         * Parent and child branches may remain open simultaneously.
         * Only sibling branches are mutually exclusive.
         */
        const closeSiblingSubmenus = (item) => {

            const parentList = item.parentElement;

                if (!parentList) {
                    return;
                }

                [...parentList.children].forEach(sibling => {

                if (sibling === item || !sibling.matches('li')) {
                    return;
                }

                const submenu = getSubmenu(sibling);

                if (!submenu) {
                    return;
                }

                if (sibling.classList.contains('mm-active')) {
                    mm.hide(submenu);
                }
            });
        };

     /**ergänzung ende*/

    };


    /**
     * Find the current menu item.
     *
     * Joomla normally provides the "current" class.
     * aria-current is used as a fallback.
     */
    const getCurrentItem = () => {

        return (
            menu.querySelector(':scope li.current') ||
            menu.querySelector('li.current') ||
            menu.querySelector('li[aria-current="page"]')
        );
    };


    /**
     * Build the parent path from the current item upwards.
     *
     * Example:
     *
     * Projekte
     *   └── Architektur
     *       └── Dritte Ebene
     *
     * becomes:
     *
     * [Projekte, Architektur]
     */
    const getActivePath = () => {

        const currentItem = getCurrentItem();
        const activePath = [];

        if (!currentItem) {
            return activePath;
        }

        let item = currentItem.parentElement?.closest('li');

        while (item && menu.contains(item)) {

            if (
                item.classList.contains('parent') ||
                getSubmenu(item)
            ) {
                activePath.unshift(item);
            }

            item = item.parentElement?.closest('li');
        }

        return activePath;
    };


    /**
     * Close all currently open submenus.
     *
     * The deepest levels are closed first so that the menu
     * can be rebuilt cleanly afterwards.
     */
    const resetMenu = () => {

        const openItems = [
            ...menu.querySelectorAll('li.mm-active')
        ].reverse();

        openItems.forEach(item => {

            const submenu = getSubmenu(item);

            if (submenu) {
                mm.hide(submenu);
            }
        });
    };


    /**
     * Open the active path sequentially.
     *
     * The first level may already be open because the user
     * explicitly opened the header menu.
     *
     * Therefore already-open items are skipped.
     */
    const openActivePath = async () => {

        const activePath = getActivePath();

        for (const item of activePath) {

            const toggler = getToggler(item);
            const submenu = getSubmenu(item);

            if (!toggler || !submenu) {
                continue;
            }

            /*
             * The submenu may already be open.
             *
             * This is especially relevant for the first
             * level of the header menu.
             */
            if (
                item.classList.contains('mm-active') &&
                toggler.getAttribute('aria-expanded') === 'true'
            ) {
                continue;
            }

            await new Promise(resolve => {

                const onShown = event => {

                    if (event.detail?.shownElement === submenu) {

                        menu.removeEventListener(
                            'shown.metisMenu',
                            onShown
                        );

                        resolve();
                    }
                };

                menu.addEventListener(
                    'shown.metisMenu',
                    onShown
                );

                toggler.click();
            });
        }
    };

       /** Ergänzung */

    /**
     * Keep sibling submenus mutually exclusive.
     *
     * Only sibling branches on the same hierarchy level
     * are affected. Parent and child branches may remain
     * open simultaneously.
     */
    mm.on('shown.metisMenu', event => {

        const submenu = event.detail?.shownElement;

        if (!submenu) {
            return;
        }

        const item = submenu.parentElement;

        if (!item) {
            return;
        }

        closeSiblingSubmenus(item);
    });

    /** Ergänzung Ende */

    // =========================================================================
    // Sidebar Navigation
    // =========================================================================
    //
    // Die Sidebar ist eine persistente Navigation.
    //
    // Ablauf:
    //
    // 1. Benutzer wählt z. B. "Dokumente".
    // 2. Die Seite wird neu geladen.
    // 3. Der aktive Pfad wird automatisch geöffnet.
    //
    // =========================================================================

    const sidebar = menu.closest('.ww-sidebar');
    const header = menu.closest('.ww-header');
    const offcanvas = menu.closest('.ww-offcanvas');

    if (sidebar) {

        /*
         * Sidebar zunächst auf einen definierten Zustand zurücksetzen.
         */
        resetMenu();


        /**
         * Open the active path sequentially.
         */
        const openSidebarPath = async () => {

            await openActivePath();

            /*
             * The menu state is now completely initialized.
             * Visual styling remains the responsibility of CSS.
             */
            sidebar.classList.add('ww-sidebar--initialized');
        };



        openSidebarPath();
    }


    // =========================================================================
    // Header Navigation
    // =========================================================================
    //
    // Der Header ist eine temporäre Dropdown-Navigation.
    //
    // Ablauf:
    //
    // 1. Seite wird geladen.
    //    → Menü bleibt geschlossen.
    //
    // 2. Benutzer öffnet einen Top-Level-Zweig.
    //    → Dieser Zweig bleibt geöffnet.
    //
    // 3. Gehört der geöffnete Zweig zum aktuellen Seitenpfad,
    //    → wird der aktive Pfad darunter automatisch geöffnet.
    //
    // 4. Menü wird geschlossen.
    //    → Unterzweige werden zurückgesetzt.
    //
    // 5. Menü wird erneut geöffnet.
    //    → der aktive Pfad wird erneut aufgebaut.
    //
    // =========================================================================

    if (header) {

        /*
         * MetisMenu kann beim Initialisieren aufgrund der Joomla-Klassen
         * bereits einen aktiven Pfad geöffnet haben.
         *
         * Für den Header ist das nicht gewünscht.
         *
         * Deshalb wird der Zustand direkt nach der Initialisierung
         * geschlossen. Es erfolgt hier ausdrücklich KEIN
         * openActivePath().
         */
        resetMenu();


        /*
         * Wird ein Submenu geöffnet, prüfen wir, ob es sich um einen
         * Top-Level-Zweig handelt.
         *
         * Nur beim Öffnen eines Top-Level-Zweigs wird geprüft,
         * ob dieser Teil des aktuellen Seitenpfades ist.
         */
        menu.addEventListener('shown.metisMenu', async event => {

            const submenu = event.detail?.shownElement;

            if (!submenu) {
                return;
            }

            const parentItem = submenu.parentElement;

            if (!parentItem) {
                return;
            }


            /*
             * Nur direkte Top-Level-Menüpunkte lösen die
             * Initialisierung des aktiven Pfades aus.
             */
            const isTopLevel =
                parentItem.parentElement === menu;


            if (!isTopLevel) {
                return;
            }


            /*
             * Ermitteln, ob der geöffnete Top-Level-Zweig
             * zum aktuellen Seitenpfad gehört.
             */
            const activePath = getActivePath();

            if (!activePath.includes(parentItem)) {
                return;
            }


            /*
             * Der Benutzer hat genau den Zweig geöffnet,
             * unter dem sich die aktuelle Seite befindet.
             *
             * Jetzt wird der restliche aktive Pfad aufgebaut.
             */
            await openActivePath();
        });


        /*
         * Wenn ein Top-Level-Zweig geschlossen wird, müssen
         * darunter eventuell noch offene Unterzweige zurückgesetzt
         * werden.
         *
         * Dadurch startet der Zweig beim nächsten Öffnen sauber.
         */
        menu.addEventListener('hidden.metisMenu', event => {

            const submenu = event.detail?.hiddenElement;

            if (!submenu) {
                return;
            }

            const parentItem = submenu.parentElement;

            if (!parentItem) {
                return;
            }


            /*
             * Nur beim Schließen eines Top-Level-Zweigs
             * werden die darunterliegenden Zustände zurückgesetzt.
             */
            const isTopLevel =
                parentItem.parentElement === menu;


            if (!isTopLevel) {
                return;
            }


            /*
             * Alle noch als aktiv markierten Unterzweige
             * dieses Top-Level-Zweigs schließen.
             */
            const openItems = [
                ...submenu.querySelectorAll('li.mm-active')
            ].reverse();

            openItems.forEach(item => {

                const childSubmenu = getSubmenu(item);

                if (childSubmenu) {
                    mm.hide(childSubmenu);
                }
            });
        });
    }


    // =========================================================================
    // Offcanvas Navigation
    // =========================================================================
    //
    // Der Offcanvas verwendet dieselbe Joomla-Menüstruktur wie Header und
    // Sidebar. Verhaltensseitig folgt er bewusst den Sidebar-Regeln:
    //
    // - aktiver Pfad wird geöffnet
    // - notwendige Vorfahren werden geöffnet
    // - Parent und Child dürfen gleichzeitig offen bleiben
    // - nur Geschwister sind exklusiv
    // - kein Outside-Click-Schließen der Untermenüs
    // - beim erneuten Öffnen wird der aktive Pfad wiederhergestellt
    //
    // =========================================================================

    if (offcanvas) {

        /*
         * Beim Öffnen des Bootstrap-Offcanvas wird der Menübaum zunächst
         * zurückgesetzt und anschließend der aktive Pfad aufgebaut.
         *
         * Dadurch startet der Offcanvas bei jedem Öffnen definiert und folgt
         * gleichzeitig den Regeln der persistenten Sidebar-Navigation.
         */
        offcanvas.addEventListener('shown.bs.offcanvas', async () => {
            resetMenu();
            await openActivePath();
            offcanvas.classList.add('ww-offcanvas--initialized');
        });

        /*
         * Beim Schließen bleiben keine offenen Unterzweige für den nächsten
         * Aufruf erhalten. Das eigentliche Schließen des Offcanvas übernimmt
         * weiterhin Bootstrap.
         */
        offcanvas.addEventListener('hidden.bs.offcanvas', () => {
            resetMenu();
            offcanvas.classList.remove('ww-offcanvas--initialized');
        });
    }


    // =========================================================================
    // Dropdown behaviour
    // =========================================================================
    //
    // Header und andere nicht-persistente MetisMenu-Instanzen schließen
    // ihr geöffnetes Dropdown bei einem Klick außerhalb des Menüs.
    //
    // Die Sidebar erhält dieses Verhalten nicht.
    //
    // =========================================================================

    if (!sidebar && !offcanvas) {

        mm.on('shown.metisMenu', event => {

            function mmClick(e) {

                if (!event.target.contains(e.target)) {

                    mm.on('hidden.metisMenu', () => {

                        window.removeEventListener(
                            'click',
                            mmClick
                        );
                    });

                    mm.hide(event.detail.shownElement);
                }
            }

            window.addEventListener('click', mmClick);
        });
    }
});