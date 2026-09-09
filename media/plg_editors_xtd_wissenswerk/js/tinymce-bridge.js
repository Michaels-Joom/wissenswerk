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

    const getPluginUrl = () => {
        const paths = window.Joomla?.getOptions?.('system.paths') || {};
        const root = String(paths.root || '').replace(/\/$/, '');

        return `${root}/media/plg_editors_xtd_wissenswerk/js/tinymce-wissenswerk.js`;
    };

    const enhanceOptions = (pluginOptions) => {
        if (!pluginOptions || typeof pluginOptions !== 'object') {
            return pluginOptions;
        }

        const enhanced = { ...pluginOptions };
        const tinyMce = { ...(pluginOptions.tinyMCE || {}) };
        const defaults = { ...(tinyMce.default || {}) };

        const toolbar = String(defaults.toolbar || '').trim();
        const toolbarItems = toolbar
            .split(/\s+/)
            .map((item) => item.trim())
            .filter(Boolean);

        // Keep the normal Joomla CMS Inhalt button as the fallback and put
        // WissensWerk directly behind it.
        const cmsIndex = toolbarItems.indexOf('jxtdbuttons');

        if (cmsIndex === -1) {
            return enhanced;
        }

        if (!toolbarItems.includes(toolbarButton)) {
            toolbarItems.splice(cmsIndex + 1, 0, toolbarButton);
        }

        const plugins = String(defaults.plugins || '')
            .split(/[\s,]+/)
            .map((item) => item.trim())
            .filter(Boolean);

        if (!plugins.includes(pluginName)) {
            plugins.push(pluginName);
        }

        defaults.plugins = plugins.join(',');
        defaults.toolbar = toolbarItems.join(' ');
        defaults.external_plugins = {
            ...(defaults.external_plugins || {}),
            [pluginName]: getPluginUrl(),
        };

        // TinyMCE custom top-level menus are configured through `menubar` and
        // `menu`. The actual menu item is registered by our TinyMCE plugin.
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
                title: window.Joomla?.Text?._('PLG_EDITORS-XTD_WISSENSWERK') || 'WissensWerk',
                items: 'wissenswerk-article wissenswerk-columns',
            },
        };

        tinyMce.default = defaults;
        enhanced.tinyMCE = tinyMce;

        return enhanced;
    };

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
            originalSetupEditor(element, enhanceOptions(pluginOptions));

        window.WissensWerkTinyMceBridgeInstalled = true;
        return true;
    };

    if (!install()) {
        document.addEventListener('DOMContentLoaded', install, { once: true });
    }
})();
