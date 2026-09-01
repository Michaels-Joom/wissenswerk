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

    /*
     * Sidebar navigation
     *
     * The Joomla menu marks the current item and its parent path.
     * MetisMenu may initially open parent items automatically.
     *
     * For the sidebar we explicitly reset this state and then
     * open the active path sequentially from the top level down.
     */
    const sidebar = menu.closest('.ww-sidebar');

    if (sidebar) {

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
        };

        /**
         * Find the current menu item.
         *
         * Joomla normally provides the "current" class.
         * aria-current is used as a fallback.
         */
        const currentItem =
            menu.querySelector(':scope li.current') ||
            menu.querySelector('li.current') ||
            menu.querySelector('li[aria-current="page"]');

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
        const activePath = [];

        if (currentItem) {

            let item = currentItem.parentElement?.closest('li');

            while (item && menu.contains(item)) {

                if (
                    item.classList.contains('parent') ||
                    item.querySelector(':scope > ul.mm-collapse')
                ) {
                    activePath.unshift(item);
                }

                item = item.parentElement?.closest('li');
            }
        }

        /**
         * Close all currently open submenus in the sidebar.
         *
         * We close them deepest-first so the menu is reset cleanly.
         */
        const openItems = [
            ...menu.querySelectorAll('li.mm-active')
        ].reverse();

        openItems.forEach(item => {

            const submenu = getSubmenu(item);

            if (submenu) {
                mm.hide(submenu);
            }
        });

        /**
         * Open the active path sequentially.
         *
         * Each submenu is opened only after the previous one
         * has finished its MetisMenu transition.
         */
        const openSequentially = async () => {

            for (const item of activePath) {

                const toggler = getToggler(item);
                const submenu = getSubmenu(item);

                if (!toggler || !submenu) {
                    continue;
                }

                /*
                 * If the submenu is already open, there is nothing
                 * to do. This can happen when MetisMenu has opened
                 * the parent automatically during initialization.
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

            /*
             * The menu state is now completely initialized.
             * Visual styling remains the responsibility of CSS.
             */
            sidebar.classList.add('ww-sidebar--initialized');
        };

        openSequentially();
    }

    /*
     * MetisMenu dropdown behaviour for non-sidebar menus.
     *
     * The header and other MetisMenu instances retain their
     * normal dropdown behaviour and are not affected by the
     * sidebar-specific initialization above.
     */
    mm.on('shown.metisMenu', event => {

        function mmClick(e) {

            if (!event.target.contains(e.target)) {

                mm.on('hidden.metisMenu', () => {
                    window.removeEventListener('click', mmClick);
                });

                mm.hide(event.detail.shownElement);
            }
        }

        window.addEventListener('click', mmClick);
    });
});