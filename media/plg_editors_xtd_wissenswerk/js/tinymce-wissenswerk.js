/*
 * WissensWerk TinyMCE integration.
 *
 * This plugin provides only the TinyMCE UI layer. The actual editor action
 * remains registered through Joomla's editor-api in editor.js, so the
 * standard CMS Inhalt button and the dedicated WissensWerk menu use the
 * same implementation.
 */
(function () {
    'use strict';

    const actions = {
        article: 'wissenswerk-insert-article',
        columns: 'wissenswerk-insert-columns-card',
    };

    // WissensWerk toolbar icon. The supplied brand mark is embedded as a
    // data URI so the TinyMCE icon does not depend on an additional HTTP
    // request and keeps the exact artwork used by WissensWerk.
    const icon = `
        <svg width="50" height="50" viewBox="0 0 50 50"
             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <image href="data:image/png;base64,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"
                   x="0" y="0" width="50" height="50"
                   preserveAspectRatio="xMidYMid meet" />
        </svg>`;

    const getMediaLink = (editor) => {
        const options = window.Joomla?.getOptions?.('plg_editors_xtd_wissenswerk') || {};
        return options.mediaLinks?.[editor.id] || '';
    };

    const runAction = (editor, action) => {
        if (typeof window.WissensWerkEditor?.runAction !== 'function') {
            console.error('WissensWerk: Joomla editor action bridge is not available.');
            return;
        }

        window.WissensWerkEditor.runAction(editor.id, action, {
            mediaLink: getMediaLink(editor),
        });
    };

    window.tinymce.PluginManager.add('wissenswerk', (editor) => {
        editor.ui.registry.addIcon('wissenswerk', icon);

        const articleMenuItem = {
            text: window.Joomla?.Text?._('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE') || 'WW Article – Split',
            icon: 'file-add',
            onAction: () => runAction(editor, actions.article),
        };

        const columnsMenuItem = {
            text: window.Joomla?.Text?._('PLG_EDITORS-XTD_WISSENSWERK_COLUMNS') || 'WW Article – Columns',
            icon: 'file-add',
            onAction: () => runAction(editor, actions.columns),
        };

        editor.ui.registry.addMenuItem('wissenswerk-article', articleMenuItem);
        editor.ui.registry.addMenuItem('wissenswerk-columns', columnsMenuItem);

        editor.ui.registry.addMenuButton('wissenswerk', {
            text: window.Joomla?.Text?._('PLG_EDITORS-XTD_WISSENSWERK') || 'WissensWerk',
            icon: 'wissenswerk',
            fetch: (callback) => {
                callback([
                    {
                        type: 'menuitem',
                        ...articleMenuItem,
                    },
                    {
                        type: 'menuitem',
                        ...columnsMenuItem,
                    },
                ]);
            },
        });

        return {
            getMetadata: () => ({
                name: 'WissensWerk TinyMCE',
                url: 'https://wissenswerk.test/',
            }),
        };
    });
}());
