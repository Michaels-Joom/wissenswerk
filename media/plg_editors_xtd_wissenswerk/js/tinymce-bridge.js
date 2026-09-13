/*
 * WissensWerk TinyMCE bridge.
 *
 * Joomla creates the final TinyMCE configuration in setupEditor().
 * We extend that configuration without modifying Joomla core:
 * - add the WissensWerk TinyMCE plugin
 * - add the WissensWerk toolbar menu after CMS Inhalt
 * - add a top-level WissensWerk menu to the TinyMCE menubar
 */
(() => {
    'use strict';

    const pluginName = 'wissenswerk';
    const toolbarButton = 'wissenswerk';
    const topLevelMenu = 'wissenswerk';

    /**
     * Returns the URL of the external WissensWerk TinyMCE plugin.
     *
     * @returns {string}
     */
    const getPluginUrl = () => {
        const paths = window.Joomla?.getOptions?.('system.paths') || {};
        const root = String(paths.root || '').replace(/\/$/, '');

        return `${root}/media/plg_editors_xtd_wissenswerk/js/tinymce-wissenswerk.js`;
    };

    /**
     * Extends Joomla's TinyMCE configuration with the WissensWerk plugin.
     *
     * @param {object} pluginOptions Joomla editor plugin options.
     * @returns {object}
     */
    const enhanceOptions = (pluginOptions) => {
        if (!pluginOptions || typeof pluginOptions !== 'object') {
            return pluginOptions;
        }

        const enhanced = { ...pluginOptions };
        const tinyMce = { ...(pluginOptions.tinyMCE || {}) };
        const defaults = { ...(tinyMce.default || {}) };

        /*
         * --------------------------------------------------------------
         * Toolbar
         * --------------------------------------------------------------
         */

        const toolbar = String(defaults.toolbar || '').trim();

        const toolbarItems = toolbar
            .split(/\s+/)
            .map((item) => item.trim())
            .filter(Boolean);

        /*
         * Prefer the position directly behind Joomla's
         * "CMS Inhalt" button.
         *
         * If Joomla's current toolbar configuration does not contain
         * jxtdbuttons, do not abort the whole enhancement. In that case
         * WissensWerk is appended to the toolbar instead.
         */
        const cmsIndex = toolbarItems.indexOf('jxtdbuttons');

        if (!toolbarItems.includes(toolbarButton)) {
            if (cmsIndex !== -1) {
                toolbarItems.splice(cmsIndex + 1, 0, toolbarButton);
            } else {
                toolbarItems.push(toolbarButton);
            }
        }

        /*
         * --------------------------------------------------------------
         * TinyMCE plugins
         * --------------------------------------------------------------
         */

        const plugins = String(defaults.plugins || '')
            .split(/[\s,]+/)
            .map((item) => item.trim())
            .filter(Boolean);

        if (!plugins.includes(pluginName)) {
            plugins.push(pluginName);
        }

        defaults.plugins = plugins.join(',');

        /*
         * Load the external WissensWerk TinyMCE plugin.
         */
        defaults.external_plugins = {
            ...(defaults.external_plugins || {}),
            [pluginName]: getPluginUrl(),
        };

        defaults.toolbar = toolbarItems.join(' ');

        /*
         * --------------------------------------------------------------
         * TinyMCE top-level menu
         * --------------------------------------------------------------
         *
         * The actual menu items are registered by
         * tinymce-wissenswerk.js.
         */

        const menubar = String(defaults.menubar || '').trim();

        const menubarItems = menubar
            .split(/\s+/)
            .map((item) => item.trim())
            .filter(Boolean);

        if (!menubarItems.includes(topLevelMenu)) {
            menubarItems.push(topLevelMenu);
        }

        defaults.menubar = menubarItems.join(' ');

        defaults.menu = {
            ...(defaults.menu || {}),
            [topLevelMenu]: {
                title: window.Joomla?.Text?._(
                    'PLG_EDITORS-XTD_WISSENSWERK'
                ) || 'WissensWerk',

                items: [
                    'wissenswerk-article',
                    'wissenswerk-columns',
                    'wissenswerk-accordion',
                    'wissenswerk-data-grid',
                ].join(' '),
            },
        };

        tinyMce.default = defaults;
        enhanced.tinyMCE = tinyMce;

        return enhanced;
    };

    /**
     * Installs the Joomla TinyMCE setupEditor bridge.
     *
     * @returns {boolean}
     */
    const install = () => {
        const tinyMce = window.Joomla?.JoomlaTinyMCE;

        if (!tinyMce || typeof tinyMce.setupEditor !== 'function') {
            return false;
        }

        if (window.WissensWerkTinyMceBridgeInstalled) {
            return true;
        }

        const originalSetupEditor = tinyMce.setupEditor;

        tinyMce.setupEditor = (element, pluginOptions) =>
            originalSetupEditor(
                element,
                enhanceOptions(pluginOptions)
            );

        window.WissensWerkTinyMceBridgeInstalled = true;

        return true;
    };

    /*
     * Joomla may load JoomlaTinyMCE before or after this bridge.
     * Therefore try immediately and retry once after DOMContentLoaded.
     */
    if (!install()) {
        document.addEventListener(
            'DOMContentLoaded',
            install,
            { once: true }
        );
    }
})();