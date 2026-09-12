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
        accordion: 'wissenswerk-insert-accordion',
    };

    // WissensWerk toolbar icon.
    // The exact logo is embedded as SVG markup because TinyMCE's custom
    // icon renderer does not reliably resolve external <use> references.
    const icon = `
        <svg
            width="24"
            height="24"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <rect x="13" y="8" width="1" height="1" fill="rgb(235,238,236)"/>
            <rect x="23" y="8" width="1" height="1" fill="rgb(244,246,244)"/>
            <rect x="24" y="8" width="1" height="1" fill="rgb(153,170,152)"/>
            <rect x="25" y="8" width="1" height="1" fill="rgb(192,201,190)"/>
            <rect x="35" y="8" width="1" height="1" fill="rgb(252,250,246)"/>
            <rect x="36" y="8" width="1" height="1" fill="rgb(251,247,241)"/>
            <rect x="12" y="9" width="1" height="1" fill="rgb(192,200,196)"/>
            <rect x="13" y="9" width="1" height="1" fill="rgb(31,92,76)"/>
            <rect x="14" y="9" width="1" height="1" fill="rgb(186,198,192)"/>
            <rect x="23" y="9" width="1" height="1" fill="rgb(218,222,216)"/>
            <rect x="24" y="9" width="1" height="1" fill="rgb(112,140,117)"/>
            <rect x="25" y="9" width="1" height="1" fill="rgb(133,157,135)"/>
            <rect x="34" y="9" width="1" height="1" fill="rgb(253,252,249)"/>
            <rect x="35" y="9" width="1" height="1" fill="rgb(218,184,123)"/>
            <rect x="36" y="9" width="1" height="1" fill="rgb(215,176,105)"/>
            <rect x="37" y="9" width="1" height="1" fill="rgb(252,248,242)"/>
            <rect x="12" y="10" width="1" height="1" fill="rgb(196,202,199)"/>
            <rect x="13" y="10" width="1" height="1" fill="rgb(34,86,75)"/>
            <rect x="14" y="10" width="1" height="1" fill="rgb(154,167,160)"/>
            <rect x="23" y="10" width="1" height="1" fill="rgb(251,252,251)"/>
            <rect x="24" y="10" width="1" height="1" fill="rgb(165,178,164)"/>
            <rect x="25" y="10" width="1" height="1" fill="rgb(219,224,218)"/>
            <rect x="34" y="10" width="1" height="1" fill="rgb(251,247,240)"/>
            <rect x="35" y="10" width="1" height="1" fill="rgb(215,176,99)"/>
            <rect x="36" y="10" width="1" height="1" fill="rgb(219,185,124)"/>
            <rect x="37" y="10" width="1" height="1" fill="rgb(253,250,246)"/>
            <rect x="13" y="11" width="1" height="1" fill="rgb(237,239,238)"/>
            <rect x="14" y="11" width="1" height="1" fill="rgb(186,194,191)"/>
            <rect x="15" y="11" width="1" height="1" fill="rgb(186,193,189)"/>
            <rect x="24" y="11" width="1" height="1" fill="rgb(193,201,191)"/>
            <rect x="25" y="11" width="1" height="1" fill="rgb(239,241,237)"/>
            <rect x="33" y="11" width="1" height="1" fill="rgb(251,247,241)"/>
            <rect x="34" y="11" width="1" height="1" fill="rgb(224,194,145)"/>
            <rect x="35" y="11" width="1" height="1" fill="rgb(246,238,226)"/>
            <rect x="36" y="11" width="1" height="1" fill="rgb(252,250,245)"/>
            <rect x="15" y="12" width="1" height="1" fill="rgb(187,194,191)"/>
            <rect x="16" y="12" width="1" height="1" fill="rgb(182,190,186)"/>
            <rect x="19" y="12" width="1" height="1" fill="rgb(192,202,196)"/>
            <rect x="20" y="12" width="1" height="1" fill="rgb(160,175,166)"/>
            <rect x="21" y="12" width="1" height="1" fill="rgb(252,253,252)"/>
            <rect x="24" y="12" width="1" height="1" fill="rgb(192,199,189)"/>
            <rect x="25" y="12" width="1" height="1" fill="rgb(239,241,237)"/>
            <rect x="28" y="12" width="1" height="1" fill="rgb(241,229,212)"/>
            <rect x="29" y="12" width="1" height="1" fill="rgb(229,205,168)"/>
            <rect x="30" y="12" width="1" height="1" fill="rgb(252,249,244)"/>
            <rect x="32" y="12" width="1" height="1" fill="rgb(250,246,241)"/>
            <rect x="33" y="12" width="1" height="1" fill="rgb(217,188,134)"/>
            <rect x="34" y="12" width="1" height="1" fill="rgb(245,236,223)"/>
            <rect x="16" y="13" width="1" height="1" fill="rgb(189,196,192)"/>
            <rect x="17" y="13" width="1" height="1" fill="rgb(183,191,186)"/>
            <rect x="19" y="13" width="1" height="1" fill="rgb(125,150,139)"/>
            <rect x="20" y="13" width="1" height="1" fill="rgb(90,130,117)"/>
            <rect x="21" y="13" width="1" height="1" fill="rgb(249,249,248)"/>
            <rect x="24" y="13" width="1" height="1" fill="rgb(189,198,186)"/>
            <rect x="25" y="13" width="1" height="1" fill="rgb(239,241,237)"/>
            <rect x="28" y="13" width="1" height="1" fill="rgb(228,207,172)"/>
            <rect x="29" y="13" width="1" height="1" fill="rgb(218,183,116)"/>
            <rect x="30" y="13" width="1" height="1" fill="rgb(245,236,223)"/>
            <rect x="31" y="13" width="1" height="1" fill="rgb(251,247,242)"/>
            <rect x="32" y="13" width="1" height="1" fill="rgb(221,192,139)"/>
            <rect x="33" y="13" width="1" height="1" fill="rgb(246,238,227)"/>
            <rect x="10" y="14" width="1" height="1" fill="rgb(253,252,250)"/>
            <rect x="11" y="14" width="1" height="1" fill="rgb(224,208,174)"/>
            <rect x="12" y="14" width="1" height="1" fill="rgb(216,199,168)"/>
            <rect x="13" y="14" width="1" height="1" fill="rgb(242,235,224)"/>
            <rect x="14" y="14" width="1" height="1" fill="rgb(253,252,251)"/>
            <rect x="17" y="14" width="1" height="1" fill="rgb(193,201,196)"/>
            <rect x="18" y="14" width="1" height="1" fill="rgb(186,195,190)"/>
            <rect x="19" y="14" width="1" height="1" fill="rgb(225,229,227)"/>
            <rect x="20" y="14" width="1" height="1" fill="rgb(187,196,193)"/>
            <rect x="24" y="14" width="1" height="1" fill="rgb(188,196,184)"/>
            <rect x="25" y="14" width="1" height="1" fill="rgb(239,241,237)"/>
            <rect x="28" y="14" width="1" height="1" fill="rgb(248,244,235)"/>
            <rect x="29" y="14" width="1" height="1" fill="rgb(230,210,179)"/>
            <rect x="30" y="14" width="1" height="1" fill="rgb(252,250,246)"/>
            <rect x="31" y="14" width="1" height="1" fill="rgb(219,192,139)"/>
            <rect x="32" y="14" width="1" height="1" fill="rgb(246,238,225)"/>
            <rect x="35" y="14" width="1" height="1" fill="rgb(252,250,246)"/>
            <rect x="36" y="14" width="1" height="1" fill="rgb(235,222,200)"/>
            <rect x="37" y="14" width="1" height="1" fill="rgb(221,198,156)"/>
            <rect x="38" y="14" width="1" height="1" fill="rgb(245,238,227)"/>
            <rect x="8" y="15" width="1" height="1" fill="rgb(237,230,215)"/>
            <rect x="9" y="15" width="1" height="1" fill="rgb(224,211,185)"/>
            <rect x="10" y="15" width="1" height="1" fill="rgb(251,249,245)"/>
            <rect x="11" y="15" width="1" height="1" fill="rgb(254,253,251)"/>
            <rect x="12" y="15" width="1" height="1" fill="rgb(240,234,223)"/>
            <rect x="13" y="15" width="1" height="1" fill="rgb(217,199,165)"/>
            <rect x="14" y="15" width="1" height="1" fill="rgb(213,188,146)"/>
            <rect x="15" y="15" width="1" height="1" fill="rgb(237,226,209)"/>
            <rect x="16" y="15" width="1" height="1" fill="rgb(253,252,250)"/>
            <rect x="18" y="15" width="1" height="1" fill="rgb(185,192,187)"/>
            <rect x="19" y="15" width="1" height="1" fill="rgb(181,192,187)"/>
            <rect x="20" y="15" width="1" height="1" fill="rgb(193,201,199)"/>
            <rect x="24" y="15" width="1" height="1" fill="rgb(190,198,184)"/>
            <rect x="25" y="15" width="1" height="1" fill="rgb(240,242,237)"/>
            <rect x="28" y="15" width="1" height="1" fill="rgb(248,244,236)"/>
            <rect x="29" y="15" width="1" height="1" fill="rgb(228,208,181)"/>
            <rect x="30" y="15" width="1" height="1" fill="rgb(219,192,150)"/>
            <rect x="31" y="15" width="1" height="1" fill="rgb(245,235,222)"/>
            <rect x="33" y="15" width="1" height="1" fill="rgb(252,250,246)"/>
            <rect x="34" y="15" width="1" height="1" fill="rgb(234,219,193)"/>
            <rect x="35" y="15" width="1" height="1" fill="rgb(225,207,170)"/>
            <rect x="36" y="15" width="1" height="1" fill="rgb(237,226,210)"/>
            <rect x="37" y="15" width="1" height="1" fill="rgb(252,249,246)"/>
            <rect x="39" y="15" width="1" height="1" fill="rgb(246,237,223)"/>
            <rect x="40" y="15" width="1" height="1" fill="rgb(235,215,183)"/>
            <rect x="41" y="15" width="1" height="1" fill="rgb(253,250,246)"/>
            <rect x="8" y="16" width="1" height="1" fill="rgb(234,225,207)"/>
            <rect x="9" y="16" width="1" height="1" fill="rgb(200,172,110)"/>
            <rect x="10" y="16" width="1" height="1" fill="rgb(243,238,229)"/>
            <rect x="14" y="16" width="1" height="1" fill="rgb(247,242,235)"/>
            <rect x="15" y="16" width="1" height="1" fill="rgb(228,210,181)"/>
            <rect x="16" y="16" width="1" height="1" fill="rgb(220,195,148)"/>
            <rect x="17" y="16" width="1" height="1" fill="rgb(244,236,224)"/>
            <rect x="18" y="16" width="1" height="1" fill="rgb(234,238,235)"/>
            <rect x="19" y="16" width="1" height="1" fill="rgb(166,182,172)"/>
            <rect x="20" y="16" width="1" height="1" fill="rgb(193,201,198)"/>
            <rect x="24" y="16" width="1" height="1" fill="rgb(197,202,188)"/>
            <rect x="25" y="16" width="1" height="1" fill="rgb(241,243,238)"/>
            <rect x="28" y="16" width="1" height="1" fill="rgb(247,242,234)"/>
            <rect x="29" y="16" width="1" height="1" fill="rgb(219,192,154)"/>
            <rect x="30" y="16" width="1" height="1" fill="rgb(228,200,154)"/>
            <rect x="31" y="16" width="1" height="1" fill="rgb(253,250,247)"/>
            <rect x="32" y="16" width="1" height="1" fill="rgb(233,219,196)"/>
            <rect x="33" y="16" width="1" height="1" fill="rgb(227,208,172)"/>
            <rect x="34" y="16" width="1" height="1" fill="rgb(246,239,228)"/>
            <rect x="39" y="16" width="1" height="1" fill="rgb(235,216,185)"/>
            <rect x="40" y="16" width="1" height="1" fill="rgb(224,192,135)"/>
            <rect x="41" y="16" width="1" height="1" fill="rgb(251,247,240)"/>
            <rect x="6" y="17" width="1" height="1" fill="rgb(253,254,253)"/>
            <rect x="8" y="17" width="1" height="1" fill="rgb(233,222,205)"/>
            <rect x="9" y="17" width="1" height="1" fill="rgb(198,166,99)"/>
            <rect x="10" y="17" width="1" height="1" fill="rgb(239,231,217)"/>
            <rect x="13" y="17" width="1" height="1" fill="rgb(241,244,242)"/>
            <rect x="14" y="17" width="1" height="1" fill="rgb(181,194,187)"/>
            <rect x="15" y="17" width="1" height="1" fill="rgb(240,243,241)"/>
            <rect x="16" y="17" width="1" height="1" fill="rgb(250,247,242)"/>
            <rect x="17" y="17" width="1" height="1" fill="rgb(229,216,192)"/>
            <rect x="18" y="17" width="1" height="1" fill="rgb(215,207,185)"/>
            <rect x="19" y="17" width="1" height="1" fill="rgb(175,187,177)"/>
            <rect x="20" y="17" width="1" height="1" fill="rgb(193,199,197)"/>
            <rect x="21" y="17" width="1" height="1" fill="rgb(231,235,231)"/>
            <rect x="22" y="17" width="1" height="1" fill="rgb(238,241,238)"/>
            <rect x="24" y="17" width="1" height="1" fill="rgb(201,203,187)"/>
            <rect x="25" y="17" width="1" height="1" fill="rgb(243,244,239)"/>
            <rect x="27" y="17" width="1" height="1" fill="rgb(254,253,251)"/>
            <rect x="28" y="17" width="1" height="1" fill="rgb(247,242,233)"/>
            <rect x="29" y="17" width="1" height="1" fill="rgb(223,198,165)"/>
            <rect x="30" y="17" width="1" height="1" fill="rgb(233,208,165)"/>
            <rect x="31" y="17" width="1" height="1" fill="rgb(238,225,203)"/>
            <rect x="32" y="17" width="1" height="1" fill="rgb(244,237,225)"/>
            <rect x="35" y="17" width="1" height="1" fill="rgb(254,252,249)"/>
            <rect x="39" y="17" width="1" height="1" fill="rgb(234,211,176)"/>
            <rect x="40" y="17" width="1" height="1" fill="rgb(223,186,124)"/>
            <rect x="41" y="17" width="1" height="1" fill="rgb(250,245,237)"/>
            <rect x="5" y="18" width="1" height="1" fill="rgb(135,148,143)"/>
            <rect x="6" y="18" width="1" height="1" fill="rgb(83,104,98)"/>
            <rect x="7" y="18" width="1" height="1" fill="rgb(232,235,233)"/>
            <rect x="8" y="18" width="1" height="1" fill="rgb(232,221,204)"/>
            <rect x="9" y="18" width="1" height="1" fill="rgb(197,165,99)"/>
            <rect x="10" y="18" width="1" height="1" fill="rgb(241,234,223)"/>
            <rect x="13" y="18" width="1" height="1" fill="rgb(180,193,186)"/>
            <rect x="14" y="18" width="1" height="1" fill="rgb(79,131,115)"/>
            <rect x="15" y="18" width="1" height="1" fill="rgb(195,206,200)"/>
            <rect x="18" y="18" width="1" height="1" fill="rgb(233,234,229)"/>
            <rect x="19" y="18" width="1" height="1" fill="rgb(169,183,173)"/>
            <rect x="20" y="18" width="1" height="1" fill="rgb(194,199,196)"/>
            <rect x="21" y="18" width="1" height="1" fill="rgb(217,223,218)"/>
            <rect x="22" y="18" width="1" height="1" fill="rgb(195,204,196)"/>
            <rect x="24" y="18" width="1" height="1" fill="rgb(197,199,182)"/>
            <rect x="25" y="18" width="1" height="1" fill="rgb(243,244,238)"/>
            <rect x="27" y="18" width="1" height="1" fill="rgb(248,235,214)"/>
            <rect x="28" y="18" width="1" height="1" fill="rgb(248,243,235)"/>
            <rect x="29" y="18" width="1" height="1" fill="rgb(228,206,174)"/>
            <rect x="30" y="18" width="1" height="1" fill="rgb(229,204,162)"/>
            <rect x="31" y="18" width="1" height="1" fill="rgb(254,254,253)"/>
            <rect x="34" y="18" width="1" height="1" fill="rgb(235,220,196)"/>
            <rect x="35" y="18" width="1" height="1" fill="rgb(218,184,128)"/>
            <rect x="36" y="18" width="1" height="1" fill="rgb(250,244,235)"/>
            <rect x="39" y="18" width="1" height="1" fill="rgb(236,215,182)"/>
            <rect x="40" y="18" width="1" height="1" fill="rgb(225,189,131)"/>
            <rect x="41" y="18" width="1" height="1" fill="rgb(250,245,239)"/>
            <rect x="42" y="18" width="1" height="1" fill="rgb(190,192,188)"/>
            <rect x="43" y="18" width="1" height="1" fill="rgb(94,113,108)"/>
            <rect x="44" y="18" width="1" height="1" fill="rgb(201,206,204)"/>
            <rect x="5" y="19" width="1" height="1" fill="rgb(72,97,93)"/>
            <rect x="6" y="19" width="1" height="1" fill="rgb(14,54,49)"/>
            <rect x="7" y="19" width="1" height="1" fill="rgb(230,233,231)"/>
            <rect x="8" y="19" width="1" height="1" fill="rgb(232,222,204)"/>
            <rect x="9" y="19" width="1" height="1" fill="rgb(197,166,101)"/>
            <rect x="10" y="19" width="1" height="1" fill="rgb(243,237,229)"/>
            <rect x="13" y="19" width="1" height="1" fill="rgb(231,236,233)"/>
            <rect x="14" y="19" width="1" height="1" fill="rgb(148,168,156)"/>
            <rect x="15" y="19" width="1" height="1" fill="rgb(165,183,173)"/>
            <rect x="16" y="19" width="1" height="1" fill="rgb(239,242,240)"/>
            <rect x="18" y="19" width="1" height="1" fill="rgb(245,246,244)"/>
            <rect x="19" y="19" width="1" height="1" fill="rgb(135,157,144)"/>
            <rect x="20" y="19" width="1" height="1" fill="rgb(193,197,195)"/>
            <rect x="21" y="19" width="1" height="1" fill="rgb(244,245,242)"/>
            <rect x="22" y="19" width="1" height="1" fill="rgb(224,226,220)"/>
            <rect x="24" y="19" width="1" height="1" fill="rgb(209,210,198)"/>
            <rect x="25" y="19" width="1" height="1" fill="rgb(249,249,247)"/>
            <rect x="27" y="19" width="1" height="1" fill="rgb(244,223,187)"/>
            <rect x="28" y="19" width="1" height="1" fill="rgb(247,239,227)"/>
            <rect x="29" y="19" width="1" height="1" fill="rgb(230,205,173)"/>
            <rect x="30" y="19" width="1" height="1" fill="rgb(230,205,165)"/>
            <rect x="33" y="19" width="1" height="1" fill="rgb(253,251,248)"/>
            <rect x="34" y="19" width="1" height="1" fill="rgb(224,197,154)"/>
            <rect x="35" y="19" width="1" height="1" fill="rgb(218,184,126)"/>
            <rect x="36" y="19" width="1" height="1" fill="rgb(249,243,233)"/>
            <rect x="39" y="19" width="1" height="1" fill="rgb(236,216,185)"/>
            <rect x="40" y="19" width="1" height="1" fill="rgb(227,193,137)"/>
            <rect x="41" y="19" width="1" height="1" fill="rgb(251,246,241)"/>
            <rect x="42" y="19" width="1" height="1" fill="rgb(181,184,180)"/>
            <rect x="43" y="19" width="1" height="1" fill="rgb(12,60,55)"/>
            <rect x="44" y="19" width="1" height="1" fill="rgb(166,173,169)"/>
            <rect x="5" y="20" width="1" height="1" fill="rgb(72,94,91)"/>
            <rect x="6" y="20" width="1" height="1" fill="rgb(15,56,50)"/>
            <rect x="7" y="20" width="1" height="1" fill="rgb(231,234,232)"/>
            <rect x="8" y="20" width="1" height="1" fill="rgb(232,221,204)"/>
            <rect x="9" y="20" width="1" height="1" fill="rgb(196,165,100)"/>
            <rect x="10" y="20" width="1" height="1" fill="rgb(241,235,225)"/>
            <rect x="15" y="20" width="1" height="1" fill="rgb(241,242,239)"/>
            <rect x="16" y="20" width="1" height="1" fill="rgb(157,173,157)"/>
            <rect x="17" y="20" width="1" height="1" fill="rgb(249,249,248)"/>
            <rect x="19" y="20" width="1" height="1" fill="rgb(200,203,197)"/>
            <rect x="20" y="20" width="1" height="1" fill="rgb(132,142,137)"/>
            <rect x="21" y="20" width="1" height="1" fill="rgb(251,251,251)"/>
            <rect x="24" y="20" width="1" height="1" fill="rgb(213,218,210)"/>
            <rect x="25" y="20" width="1" height="1" fill="rgb(250,251,250)"/>
            <rect x="26" y="20" width="1" height="1" fill="rgb(254,252,250)"/>
            <rect x="27" y="20" width="1" height="1" fill="rgb(253,250,245)"/>
            <rect x="28" y="20" width="1" height="1" fill="rgb(247,240,230)"/>
            <rect x="29" y="20" width="1" height="1" fill="rgb(221,186,131)"/>
            <rect x="30" y="20" width="1" height="1" fill="rgb(248,237,222)"/>
            <rect x="32" y="20" width="1" height="1" fill="rgb(253,252,249)"/>
            <rect x="33" y="20" width="1" height="1" fill="rgb(224,199,157)"/>
            <rect x="34" y="20" width="1" height="1" fill="rgb(241,227,207)"/>
            <rect x="35" y="20" width="1" height="1" fill="rgb(250,246,240)"/>
            <rect x="39" y="20" width="1" height="1" fill="rgb(236,215,183)"/>
            <rect x="40" y="20" width="1" height="1" fill="rgb(226,190,133)"/>
            <rect x="41" y="20" width="1" height="1" fill="rgb(251,246,239)"/>
            <rect x="42" y="20" width="1" height="1" fill="rgb(180,183,179)"/>
            <rect x="43" y="20" width="1" height="1" fill="rgb(12,54,50)"/>
            <rect x="44" y="20" width="1" height="1" fill="rgb(166,173,169)"/>
            <rect x="5" y="21" width="1" height="1" fill="rgb(72,95,91)"/>
            <rect x="6" y="21" width="1" height="1" fill="rgb(15,55,49)"/>
            <rect x="7" y="21" width="1" height="1" fill="rgb(231,234,232)"/>
            <rect x="8" y="21" width="1" height="1" fill="rgb(233,223,206)"/>
            <rect x="9" y="21" width="1" height="1" fill="rgb(199,169,108)"/>
            <rect x="10" y="21" width="1" height="1" fill="rgb(243,238,229)"/>
            <rect x="16" y="21" width="1" height="1" fill="rgb(230,232,227)"/>
            <rect x="17" y="21" width="1" height="1" fill="rgb(167,180,165)"/>
            <rect x="18" y="21" width="1" height="1" fill="rgb(249,250,249)"/>
            <rect x="20" y="21" width="1" height="1" fill="rgb(200,204,200)"/>
            <rect x="21" y="21" width="1" height="1" fill="rgb(158,171,165)"/>
            <rect x="22" y="21" width="1" height="1" fill="rgb(251,252,251)"/>
            <rect x="24" y="21" width="1" height="1" fill="rgb(195,207,197)"/>
            <rect x="25" y="21" width="1" height="1" fill="rgb(242,245,242)"/>
            <rect x="27" y="21" width="1" height="1" fill="rgb(253,249,244)"/>
            <rect x="28" y="21" width="1" height="1" fill="rgb(216,186,136)"/>
            <rect x="29" y="21" width="1" height="1" fill="rgb(243,231,214)"/>
            <rect x="31" y="21" width="1" height="1" fill="rgb(254,252,250)"/>
            <rect x="32" y="21" width="1" height="1" fill="rgb(222,195,149)"/>
            <rect x="33" y="21" width="1" height="1" fill="rgb(240,229,214)"/>
            <rect x="39" y="21" width="1" height="1" fill="rgb(236,217,185)"/>
            <rect x="40" y="21" width="1" height="1" fill="rgb(227,193,136)"/>
            <rect x="41" y="21" width="1" height="1" fill="rgb(251,246,239)"/>
            <rect x="42" y="21" width="1" height="1" fill="rgb(178,181,177)"/>
            <rect x="43" y="21" width="1" height="1" fill="rgb(12,48,44)"/>
            <rect x="44" y="21" width="1" height="1" fill="rgb(167,174,170)"/>
            <rect x="5" y="22" width="1" height="1" fill="rgb(75,101,97)"/>
            <rect x="6" y="22" width="1" height="1" fill="rgb(17,64,57)"/>
            <rect x="7" y="22" width="1" height="1" fill="rgb(231,234,232)"/>
            <rect x="8" y="22" width="1" height="1" fill="rgb(233,223,206)"/>
            <rect x="9" y="22" width="1" height="1" fill="rgb(198,169,107)"/>
            <rect x="10" y="22" width="1" height="1" fill="rgb(242,236,226)"/>
            <rect x="17" y="22" width="1" height="1" fill="rgb(230,232,227)"/>
            <rect x="18" y="22" width="1" height="1" fill="rgb(169,184,169)"/>
            <rect x="19" y="22" width="1" height="1" fill="rgb(249,250,249)"/>
            <rect x="21" y="22" width="1" height="1" fill="rgb(200,206,202)"/>
            <rect x="22" y="22" width="1" height="1" fill="rgb(172,182,177)"/>
            <rect x="24" y="22" width="1" height="1" fill="rgb(190,203,193)"/>
            <rect x="25" y="22" width="1" height="1" fill="rgb(240,243,240)"/>
            <rect x="26" y="22" width="1" height="1" fill="rgb(254,252,250)"/>
            <rect x="27" y="22" width="1" height="1" fill="rgb(220,192,150)"/>
            <rect x="28" y="22" width="1" height="1" fill="rgb(237,224,205)"/>
            <rect x="30" y="22" width="1" height="1" fill="rgb(253,252,250)"/>
            <rect x="31" y="22" width="1" height="1" fill="rgb(222,197,158)"/>
            <rect x="32" y="22" width="1" height="1" fill="rgb(241,229,213)"/>
            <rect x="39" y="22" width="1" height="1" fill="rgb(236,214,180)"/>
            <rect x="40" y="22" width="1" height="1" fill="rgb(226,191,133)"/>
            <rect x="41" y="22" width="1" height="1" fill="rgb(251,246,239)"/>
            <rect x="42" y="22" width="1" height="1" fill="rgb(179,182,178)"/>
            <rect x="43" y="22" width="1" height="1" fill="rgb(13,53,49)"/>
            <rect x="44" y="22" width="1" height="1" fill="rgb(167,174,171)"/>
            <rect x="5" y="23" width="1" height="1" fill="rgb(77,104,100)"/>
            <rect x="6" y="23" width="1" height="1" fill="rgb(17,69,61)"/>
            <rect x="7" y="23" width="1" height="1" fill="rgb(231,234,233)"/>
            <rect x="8" y="23" width="1" height="1" fill="rgb(232,222,205)"/>
            <rect x="9" y="23" width="1" height="1" fill="rgb(196,166,102)"/>
            <rect x="10" y="23" width="1" height="1" fill="rgb(238,229,215)"/>
            <rect x="18" y="23" width="1" height="1" fill="rgb(230,234,230)"/>
            <rect x="19" y="23" width="1" height="1" fill="rgb(126,155,140)"/>
            <rect x="20" y="23" width="1" height="1" fill="rgb(239,242,240)"/>
            <rect x="22" y="23" width="1" height="1" fill="rgb(178,186,181)"/>
            <rect x="23" y="23" width="1" height="1" fill="rgb(180,188,183)"/>
            <rect x="24" y="23" width="1" height="1" fill="rgb(239,241,237)"/>
            <rect x="25" y="23" width="1" height="1" fill="rgb(253,250,247)"/>
            <rect x="26" y="23" width="1" height="1" fill="rgb(222,195,155)"/>
            <rect x="27" y="23" width="1" height="1" fill="rgb(232,214,187)"/>
            <rect x="29" y="23" width="1" height="1" fill="rgb(253,251,247)"/>
            <rect x="30" y="23" width="1" height="1" fill="rgb(222,197,154)"/>
            <rect x="31" y="23" width="1" height="1" fill="rgb(241,230,215)"/>
            <rect x="39" y="23" width="1" height="1" fill="rgb(234,210,171)"/>
            <rect x="40" y="23" width="1" height="1" fill="rgb(226,191,132)"/>
            <rect x="41" y="23" width="1" height="1" fill="rgb(251,246,239)"/>
            <rect x="42" y="23" width="1" height="1" fill="rgb(180,183,179)"/>
            <rect x="43" y="23" width="1" height="1" fill="rgb(13,58,54)"/>
            <rect x="44" y="23" width="1" height="1" fill="rgb(168,175,171)"/>
            <rect x="5" y="24" width="1" height="1" fill="rgb(78,106,102)"/>
            <rect x="6" y="24" width="1" height="1" fill="rgb(16,66,58)"/>
            <rect x="7" y="24" width="1" height="1" fill="rgb(231,234,232)"/>
            <rect x="8" y="24" width="1" height="1" fill="rgb(232,222,205)"/>
            <rect x="9" y="24" width="1" height="1" fill="rgb(197,167,104)"/>
            <rect x="10" y="24" width="1" height="1" fill="rgb(238,229,216)"/>
            <rect x="19" y="24" width="1" height="1" fill="rgb(221,226,223)"/>
            <rect x="20" y="24" width="1" height="1" fill="rgb(137,155,146)"/>
            <rect x="21" y="24" width="1" height="1" fill="rgb(248,249,248)"/>
            <rect x="22" y="24" width="1" height="1" fill="rgb(252,252,252)"/>
            <rect x="23" y="24" width="1" height="1" fill="rgb(136,150,143)"/>
            <rect x="24" y="24" width="1" height="1" fill="rgb(228,232,231)"/>
            <rect x="25" y="24" width="1" height="1" fill="rgb(229,209,179)"/>
            <rect x="26" y="24" width="1" height="1" fill="rgb(232,213,184)"/>
            <rect x="28" y="24" width="1" height="1" fill="rgb(251,247,241)"/>
            <rect x="29" y="24" width="1" height="1" fill="rgb(217,187,131)"/>
            <rect x="30" y="24" width="1" height="1" fill="rgb(242,231,215)"/>
            <rect x="39" y="24" width="1" height="1" fill="rgb(237,216,184)"/>
            <rect x="40" y="24" width="1" height="1" fill="rgb(228,195,139)"/>
            <rect x="41" y="24" width="1" height="1" fill="rgb(251,247,241)"/>
            <rect x="42" y="24" width="1" height="1" fill="rgb(180,183,179)"/>
            <rect x="43" y="24" width="1" height="1" fill="rgb(13,56,52)"/>
            <rect x="44" y="24" width="1" height="1" fill="rgb(168,175,171)"/>
            <rect x="5" y="25" width="1" height="1" fill="rgb(77,103,99)"/>
            <rect x="6" y="25" width="1" height="1" fill="rgb(15,60,53)"/>
            <rect x="7" y="25" width="1" height="1" fill="rgb(230,233,232)"/>
            <rect x="8" y="25" width="1" height="1" fill="rgb(232,222,204)"/>
            <rect x="9" y="25" width="1" height="1" fill="rgb(198,168,104)"/>
            <rect x="10" y="25" width="1" height="1" fill="rgb(239,230,216)"/>
            <rect x="20" y="25" width="1" height="1" fill="rgb(215,220,217)"/>
            <rect x="21" y="25" width="1" height="1" fill="rgb(142,160,152)"/>
            <rect x="22" y="25" width="1" height="1" fill="rgb(248,250,249)"/>
            <rect x="23" y="25" width="1" height="1" fill="rgb(174,185,181)"/>
            <rect x="24" y="25" width="1" height="1" fill="rgb(226,231,230)"/>
            <rect x="25" y="25" width="1" height="1" fill="rgb(225,202,173)"/>
            <rect x="26" y="25" width="1" height="1" fill="rgb(247,239,228)"/>
            <rect x="27" y="25" width="1" height="1" fill="rgb(251,247,241)"/>
            <rect x="28" y="25" width="1" height="1" fill="rgb(218,188,134)"/>
            <rect x="29" y="25" width="1" height="1" fill="rgb(244,234,220)"/>
            <rect x="39" y="25" width="1" height="1" fill="rgb(237,217,186)"/>
            <rect x="40" y="25" width="1" height="1" fill="rgb(229,196,141)"/>
            <rect x="41" y="25" width="1" height="1" fill="rgb(251,248,243)"/>
            <rect x="42" y="25" width="1" height="1" fill="rgb(181,184,181)"/>
            <rect x="43" y="25" width="1" height="1" fill="rgb(12,56,51)"/>
            <rect x="44" y="25" width="1" height="1" fill="rgb(167,174,169)"/>
            <rect x="5" y="26" width="1" height="1" fill="rgb(75,98,93)"/>
            <rect x="6" y="26" width="1" height="1" fill="rgb(15,58,51)"/>
            <rect x="7" y="26" width="1" height="1" fill="rgb(230,233,231)"/>
            <rect x="8" y="26" width="1" height="1" fill="rgb(232,221,204)"/>
            <rect x="9" y="26" width="1" height="1" fill="rgb(196,166,100)"/>
            <rect x="10" y="26" width="1" height="1" fill="rgb(238,229,215)"/>
            <rect x="21" y="26" width="1" height="1" fill="rgb(217,223,220)"/>
            <rect x="22" y="26" width="1" height="1" fill="rgb(150,168,161)"/>
            <rect x="23" y="26" width="1" height="1" fill="rgb(162,177,172)"/>
            <rect x="24" y="26" width="1" height="1" fill="rgb(226,231,230)"/>
            <rect x="25" y="26" width="1" height="1" fill="rgb(225,201,170)"/>
            <rect x="26" y="26" width="1" height="1" fill="rgb(243,230,212)"/>
            <rect x="27" y="26" width="1" height="1" fill="rgb(216,186,133)"/>
            <rect x="28" y="26" width="1" height="1" fill="rgb(245,235,221)"/>
            <rect x="39" y="26" width="1" height="1" fill="rgb(236,215,183)"/>
            <rect x="40" y="26" width="1" height="1" fill="rgb(227,193,136)"/>
            <rect x="41" y="26" width="1" height="1" fill="rgb(251,247,241)"/>
            <rect x="42" y="26" width="1" height="1" fill="rgb(181,184,180)"/>
            <rect x="43" y="26" width="1" height="1" fill="rgb(12,54,50)"/>
            <rect x="44" y="26" width="1" height="1" fill="rgb(167,173,169)"/>
            <rect x="5" y="27" width="1" height="1" fill="rgb(75,97,92)"/>
            <rect x="6" y="27" width="1" height="1" fill="rgb(13,52,45)"/>
            <rect x="7" y="27" width="1" height="1" fill="rgb(229,232,231)"/>
            <rect x="8" y="27" width="1" height="1" fill="rgb(232,221,203)"/>
            <rect x="9" y="27" width="1" height="1" fill="rgb(197,168,104)"/>
            <rect x="10" y="27" width="1" height="1" fill="rgb(241,234,222)"/>
            <rect x="22" y="27" width="1" height="1" fill="rgb(209,215,210)"/>
            <rect x="23" y="27" width="1" height="1" fill="rgb(56,102,92)"/>
            <rect x="24" y="27" width="1" height="1" fill="rgb(226,230,229)"/>
            <rect x="25" y="27" width="1" height="1" fill="rgb(226,200,167)"/>
            <rect x="26" y="27" width="1" height="1" fill="rgb(214,176,111)"/>
            <rect x="27" y="27" width="1" height="1" fill="rgb(246,241,233)"/>
            <rect x="39" y="27" width="1" height="1" fill="rgb(236,215,181)"/>
            <rect x="40" y="27" width="1" height="1" fill="rgb(226,189,128)"/>
            <rect x="41" y="27" width="1" height="1" fill="rgb(251,246,238)"/>
            <rect x="42" y="27" width="1" height="1" fill="rgb(178,181,177)"/>
            <rect x="43" y="27" width="1" height="1" fill="rgb(12,48,45)"/>
            <rect x="44" y="27" width="1" height="1" fill="rgb(167,174,170)"/>
            <rect x="5" y="28" width="1" height="1" fill="rgb(75,96,92)"/>
            <rect x="6" y="28" width="1" height="1" fill="rgb(15,50,44)"/>
            <rect x="7" y="28" width="1" height="1" fill="rgb(230,233,231)"/>
            <rect x="8" y="28" width="1" height="1" fill="rgb(233,223,206)"/>
            <rect x="9" y="28" width="1" height="1" fill="rgb(200,171,112)"/>
            <rect x="10" y="28" width="1" height="1" fill="rgb(240,233,222)"/>
            <rect x="23" y="28" width="1" height="1" fill="rgb(154,167,162)"/>
            <rect x="24" y="28" width="1" height="1" fill="rgb(226,230,229)"/>
            <rect x="25" y="28" width="1" height="1" fill="rgb(227,203,168)"/>
            <rect x="26" y="28" width="1" height="1" fill="rgb(246,235,221)"/>
            <rect x="39" y="28" width="1" height="1" fill="rgb(235,212,174)"/>
            <rect x="40" y="28" width="1" height="1" fill="rgb(226,189,126)"/>
            <rect x="41" y="28" width="1" height="1" fill="rgb(251,246,238)"/>
            <rect x="42" y="28" width="1" height="1" fill="rgb(179,181,177)"/>
            <rect x="43" y="28" width="1" height="1" fill="rgb(12,46,43)"/>
            <rect x="44" y="28" width="1" height="1" fill="rgb(167,173,170)"/>
            <rect x="5" y="29" width="1" height="1" fill="rgb(75,100,95)"/>
            <rect x="6" y="29" width="1" height="1" fill="rgb(17,60,53)"/>
            <rect x="7" y="29" width="1" height="1" fill="rgb(231,234,232)"/>
            <rect x="8" y="29" width="1" height="1" fill="rgb(233,224,208)"/>
            <rect x="9" y="29" width="1" height="1" fill="rgb(199,171,113)"/>
            <rect x="10" y="29" width="1" height="1" fill="rgb(198,172,116)"/>
            <rect x="11" y="29" width="1" height="1" fill="rgb(206,186,144)"/>
            <rect x="12" y="29" width="1" height="1" fill="rgb(225,213,191)"/>
            <rect x="13" y="29" width="1" height="1" fill="rgb(247,243,237)"/>
            <rect x="23" y="29" width="1" height="1" fill="rgb(166,180,175)"/>
            <rect x="24" y="29" width="1" height="1" fill="rgb(226,231,230)"/>
            <rect x="25" y="29" width="1" height="1" fill="rgb(226,202,168)"/>
            <rect x="26" y="29" width="1" height="1" fill="rgb(249,241,229)"/>
            <rect x="35" y="29" width="1" height="1" fill="rgb(254,253,251)"/>
            <rect x="36" y="29" width="1" height="1" fill="rgb(244,233,218)"/>
            <rect x="37" y="29" width="1" height="1" fill="rgb(230,208,172)"/>
            <rect x="38" y="29" width="1" height="1" fill="rgb(220,187,127)"/>
            <rect x="39" y="29" width="1" height="1" fill="rgb(221,185,119)"/>
            <rect x="40" y="29" width="1" height="1" fill="rgb(226,192,131)"/>
            <rect x="41" y="29" width="1" height="1" fill="rgb(252,249,244)"/>
            <rect x="42" y="29" width="1" height="1" fill="rgb(182,184,181)"/>
            <rect x="43" y="29" width="1" height="1" fill="rgb(12,56,52)"/>
            <rect x="44" y="29" width="1" height="1" fill="rgb(167,173,169)"/>
            <rect x="5" y="30" width="1" height="1" fill="rgb(77,105,100)"/>
            <rect x="6" y="30" width="1" height="1" fill="rgb(18,67,58)"/>
            <rect x="7" y="30" width="1" height="1" fill="rgb(231,234,232)"/>
            <rect x="8" y="30" width="1" height="1" fill="rgb(235,227,212)"/>
            <rect x="9" y="30" width="1" height="1" fill="rgb(204,178,128)"/>
            <rect x="10" y="30" width="1" height="1" fill="rgb(197,170,114)"/>
            <rect x="11" y="30" width="1" height="1" fill="rgb(194,167,108)"/>
            <rect x="12" y="30" width="1" height="1" fill="rgb(194,167,106)"/>
            <rect x="13" y="30" width="1" height="1" fill="rgb(194,168,109)"/>
            <rect x="14" y="30" width="1" height="1" fill="rgb(210,191,157)"/>
            <rect x="15" y="30" width="1" height="1" fill="rgb(240,234,224)"/>
            <rect x="23" y="30" width="1" height="1" fill="rgb(163,176,173)"/>
            <rect x="24" y="30" width="1" height="1" fill="rgb(226,230,229)"/>
            <rect x="25" y="30" width="1" height="1" fill="rgb(223,198,164)"/>
            <rect x="26" y="30" width="1" height="1" fill="rgb(249,240,228)"/>
            <rect x="33" y="30" width="1" height="1" fill="rgb(252,250,246)"/>
            <rect x="34" y="30" width="1" height="1" fill="rgb(237,222,197)"/>
            <rect x="35" y="30" width="1" height="1" fill="rgb(221,190,132)"/>
            <rect x="36" y="30" width="2" height="1" fill="rgb(217,181,113)"/>
            <rect x="38" y="30" width="1" height="1" fill="rgb(218,181,113)"/>
            <rect x="39" y="30" width="1" height="1" fill="rgb(220,185,120)"/>
            <rect x="40" y="30" width="1" height="1" fill="rgb(227,194,140)"/>
            <rect x="41" y="30" width="1" height="1" fill="rgb(253,250,247)"/>
            <rect x="42" y="30" width="1" height="1" fill="rgb(182,185,181)"/>
            <rect x="43" y="30" width="1" height="1" fill="rgb(13,59,56)"/>
            <rect x="44" y="30" width="1" height="1" fill="rgb(167,174,170)"/>
            <rect x="5" y="31" width="1" height="1" fill="rgb(77,106,100)"/>
            <rect x="6" y="31" width="1" height="1" fill="rgb(17,66,57)"/>
            <rect x="7" y="31" width="1" height="1" fill="rgb(231,234,233)"/>
            <rect x="9" y="31" width="1" height="1" fill="rgb(254,254,253)"/>
            <rect x="10" y="31" width="1" height="1" fill="rgb(250,247,242)"/>
            <rect x="11" y="31" width="1" height="1" fill="rgb(239,231,220)"/>
            <rect x="12" y="31" width="1" height="1" fill="rgb(222,207,183)"/>
            <rect x="13" y="31" width="1" height="1" fill="rgb(201,175,125)"/>
            <rect x="14" y="31" width="1" height="1" fill="rgb(191,164,102)"/>
            <rect x="15" y="31" width="1" height="1" fill="rgb(192,166,106)"/>
            <rect x="16" y="31" width="1" height="1" fill="rgb(214,197,167)"/>
            <rect x="17" y="31" width="1" height="1" fill="rgb(250,248,244)"/>
            <rect x="23" y="31" width="1" height="1" fill="rgb(161,174,170)"/>
            <rect x="24" y="31" width="1" height="1" fill="rgb(225,229,228)"/>
            <rect x="25" y="31" width="1" height="1" fill="rgb(223,198,164)"/>
            <rect x="26" y="31" width="1" height="1" fill="rgb(249,240,229)"/>
            <rect x="32" y="31" width="1" height="1" fill="rgb(240,228,210)"/>
            <rect x="33" y="31" width="1" height="1" fill="rgb(216,183,120)"/>
            <rect x="34" y="31" width="1" height="1" fill="rgb(213,175,100)"/>
            <rect x="35" y="31" width="1" height="1" fill="rgb(215,178,105)"/>
            <rect x="36" y="31" width="1" height="1" fill="rgb(225,197,149)"/>
            <rect x="37" y="31" width="1" height="1" fill="rgb(236,220,194)"/>
            <rect x="38" y="31" width="1" height="1" fill="rgb(247,240,229)"/>
            <rect x="39" y="31" width="1" height="1" fill="rgb(253,250,246)"/>
            <rect x="42" y="31" width="1" height="1" fill="rgb(179,182,178)"/>
            <rect x="43" y="31" width="1" height="1" fill="rgb(12,50,47)"/>
            <rect x="44" y="31" width="1" height="1" fill="rgb(165,172,168)"/>
            <rect x="5" y="32" width="1" height="1" fill="rgb(77,106,100)"/>
            <rect x="6" y="32" width="1" height="1" fill="rgb(11,69,60)"/>
            <rect x="7" y="32" width="1" height="1" fill="rgb(136,149,145)"/>
            <rect x="8" y="32" width="1" height="1" fill="rgb(168,175,171)"/>
            <rect x="9" y="32" width="1" height="1" fill="rgb(196,200,198)"/>
            <rect x="10" y="32" width="1" height="1" fill="rgb(223,225,223)"/>
            <rect x="11" y="32" width="1" height="1" fill="rgb(247,248,247)"/>
            <rect x="13" y="32" width="1" height="1" fill="rgb(254,252,251)"/>
            <rect x="14" y="32" width="1" height="1" fill="rgb(240,234,224)"/>
            <rect x="15" y="32" width="1" height="1" fill="rgb(213,195,164)"/>
            <rect x="16" y="32" width="1" height="1" fill="rgb(193,166,113)"/>
            <rect x="17" y="32" width="1" height="1" fill="rgb(198,175,133)"/>
            <rect x="18" y="32" width="1" height="1" fill="rgb(241,235,226)"/>
            <rect x="23" y="32" width="1" height="1" fill="rgb(162,176,172)"/>
            <rect x="24" y="32" width="1" height="1" fill="rgb(225,230,229)"/>
            <rect x="25" y="32" width="1" height="1" fill="rgb(224,201,167)"/>
            <rect x="26" y="32" width="1" height="1" fill="rgb(250,242,231)"/>
            <rect x="30" y="32" width="1" height="1" fill="rgb(252,250,247)"/>
            <rect x="31" y="32" width="1" height="1" fill="rgb(227,205,170)"/>
            <rect x="32" y="32" width="1" height="1" fill="rgb(212,174,104)"/>
            <rect x="33" y="32" width="1" height="1" fill="rgb(216,184,126)"/>
            <rect x="34" y="32" width="1" height="1" fill="rgb(235,217,191)"/>
            <rect x="35" y="32" width="1" height="1" fill="rgb(248,242,232)"/>
            <rect x="37" y="32" width="1" height="1" fill="rgb(252,252,251)"/>
            <rect x="38" y="32" width="1" height="1" fill="rgb(233,235,233)"/>
            <rect x="39" y="32" width="1" height="1" fill="rgb(207,210,208)"/>
            <rect x="40" y="32" width="1" height="1" fill="rgb(184,188,185)"/>
            <rect x="41" y="32" width="1" height="1" fill="rgb(157,165,161)"/>
            <rect x="42" y="32" width="1" height="1" fill="rgb(106,121,118)"/>
            <rect x="43" y="32" width="1" height="1" fill="rgb(9,64,59)"/>
            <rect x="44" y="32" width="1" height="1" fill="rgb(167,175,171)"/>
            <rect x="5" y="33" width="1" height="1" fill="rgb(76,102,96)"/>
            <rect x="6" y="33" width="1" height="1" fill="rgb(8,61,52)"/>
            <rect x="7" y="33" width="1" height="1" fill="rgb(7,57,50)"/>
            <rect x="8" y="33" width="1" height="1" fill="rgb(8,54,47)"/>
            <rect x="9" y="33" width="1" height="1" fill="rgb(7,55,49)"/>
            <rect x="10" y="33" width="1" height="1" fill="rgb(13,60,55)"/>
            <rect x="11" y="33" width="1" height="1" fill="rgb(57,88,81)"/>
            <rect x="12" y="33" width="1" height="1" fill="rgb(134,147,141)"/>
            <rect x="13" y="33" width="1" height="1" fill="rgb(197,201,199)"/>
            <rect x="14" y="33" width="1" height="1" fill="rgb(243,244,243)"/>
            <rect x="16" y="33" width="1" height="1" fill="rgb(241,235,227)"/>
            <rect x="17" y="33" width="1" height="1" fill="rgb(205,186,153)"/>
            <rect x="18" y="33" width="1" height="1" fill="rgb(187,162,108)"/>
            <rect x="19" y="33" width="1" height="1" fill="rgb(228,218,201)"/>
            <rect x="23" y="33" width="1" height="1" fill="rgb(162,177,173)"/>
            <rect x="24" y="33" width="1" height="1" fill="rgb(226,230,229)"/>
            <rect x="25" y="33" width="1" height="1" fill="rgb(223,201,167)"/>
            <rect x="26" y="33" width="1" height="1" fill="rgb(251,242,231)"/>
            <rect x="29" y="33" width="1" height="1" fill="rgb(250,245,239)"/>
            <rect x="30" y="33" width="1" height="1" fill="rgb(218,188,134)"/>
            <rect x="31" y="33" width="1" height="1" fill="rgb(212,176,108)"/>
            <rect x="32" y="33" width="1" height="1" fill="rgb(233,217,193)"/>
            <rect x="33" y="33" width="1" height="1" fill="rgb(252,250,247)"/>
            <rect x="34" y="33" width="1" height="1" fill="rgb(251,251,251)"/>
            <rect x="35" y="33" width="1" height="1" fill="rgb(214,219,217)"/>
            <rect x="36" y="33" width="1" height="1" fill="rgb(164,172,170)"/>
            <rect x="37" y="33" width="1" height="1" fill="rgb(88,107,101)"/>
            <rect x="38" y="33" width="1" height="1" fill="rgb(23,64,60)"/>
            <rect x="39" y="33" width="1" height="1" fill="rgb(7,55,50)"/>
            <rect x="40" y="33" width="1" height="1" fill="rgb(7,53,48)"/>
            <rect x="41" y="33" width="1" height="1" fill="rgb(6,52,47)"/>
            <rect x="42" y="33" width="1" height="1" fill="rgb(7,55,50)"/>
            <rect x="43" y="33" width="1" height="1" fill="rgb(9,61,54)"/>
            <rect x="44" y="33" width="1" height="1" fill="rgb(169,176,172)"/>
            <rect x="5" y="34" width="1" height="1" fill="rgb(177,183,179)"/>
            <rect x="6" y="34" width="1" height="1" fill="rgb(162,169,164)"/>
            <rect x="7" y="34" width="1" height="1" fill="rgb(151,158,155)"/>
            <rect x="8" y="34" width="1" height="1" fill="rgb(125,135,129)"/>
            <rect x="9" y="34" width="1" height="1" fill="rgb(83,104,97)"/>
            <rect x="10" y="34" width="1" height="1" fill="rgb(35,75,67)"/>
            <rect x="11" y="34" width="1" height="1" fill="rgb(12,67,59)"/>
            <rect x="12" y="34" width="1" height="1" fill="rgb(6,69,60)"/>
            <rect x="13" y="34" width="1" height="1" fill="rgb(5,70,60)"/>
            <rect x="14" y="34" width="1" height="1" fill="rgb(52,85,79)"/>
            <rect x="15" y="34" width="1" height="1" fill="rgb(155,163,160)"/>
            <rect x="16" y="34" width="1" height="1" fill="rgb(222,226,223)"/>
            <rect x="17" y="34" width="1" height="1" fill="rgb(253,252,251)"/>
            <rect x="18" y="34" width="1" height="1" fill="rgb(229,218,202)"/>
            <rect x="19" y="34" width="1" height="1" fill="rgb(187,162,106)"/>
            <rect x="20" y="34" width="1" height="1" fill="rgb(222,211,190)"/>
            <rect x="23" y="34" width="1" height="1" fill="rgb(163,178,173)"/>
            <rect x="24" y="34" width="1" height="1" fill="rgb(226,231,230)"/>
            <rect x="25" y="34" width="1" height="1" fill="rgb(222,199,167)"/>
            <rect x="26" y="34" width="1" height="1" fill="rgb(251,243,231)"/>
            <rect x="28" y="34" width="1" height="1" fill="rgb(248,242,234)"/>
            <rect x="29" y="34" width="1" height="1" fill="rgb(213,177,110)"/>
            <rect x="30" y="34" width="1" height="1" fill="rgb(221,189,140)"/>
            <rect x="31" y="34" width="1" height="1" fill="rgb(248,242,234)"/>
            <rect x="32" y="34" width="1" height="1" fill="rgb(241,242,241)"/>
            <rect x="33" y="34" width="1" height="1" fill="rgb(181,187,185)"/>
            <rect x="34" y="34" width="1" height="1" fill="rgb(89,104,99)"/>
            <rect x="35" y="34" width="1" height="1" fill="rgb(9,64,58)"/>
            <rect x="36" y="34" width="1" height="1" fill="rgb(6,66,58)"/>
            <rect x="37" y="34" width="1" height="1" fill="rgb(8,64,57)"/>
            <rect x="38" y="34" width="1" height="1" fill="rgb(25,67,60)"/>
            <rect x="39" y="34" width="1" height="1" fill="rgb(62,90,84)"/>
            <rect x="40" y="34" width="1" height="1" fill="rgb(104,120,115)"/>
            <rect x="41" y="34" width="1" height="1" fill="rgb(141,151,147)"/>
            <rect x="42" y="34" width="1" height="1" fill="rgb(157,164,161)"/>
            <rect x="43" y="34" width="1" height="1" fill="rgb(167,173,168)"/>
            <rect x="44" y="34" width="1" height="1" fill="rgb(213,215,212)"/>
            <rect x="9" y="35" width="1" height="1" fill="rgb(253,254,253)"/>
            <rect x="10" y="35" width="1" height="1" fill="rgb(239,240,238)"/>
            <rect x="11" y="35" width="1" height="1" fill="rgb(216,219,217)"/>
            <rect x="12" y="35" width="1" height="1" fill="rgb(181,186,184)"/>
            <rect x="13" y="35" width="1" height="1" fill="rgb(121,133,128)"/>
            <rect x="14" y="35" width="1" height="1" fill="rgb(42,75,68)"/>
            <rect x="15" y="35" width="1" height="1" fill="rgb(7,55,48)"/>
            <rect x="16" y="35" width="1" height="1" fill="rgb(22,57,53)"/>
            <rect x="17" y="35" width="1" height="1" fill="rgb(133,142,137)"/>
            <rect x="18" y="35" width="1" height="1" fill="rgb(227,229,227)"/>
            <rect x="19" y="35" width="1" height="1" fill="rgb(245,240,232)"/>
            <rect x="20" y="35" width="1" height="1" fill="rgb(199,182,147)"/>
            <rect x="21" y="35" width="1" height="1" fill="rgb(226,218,202)"/>
            <rect x="23" y="35" width="1" height="1" fill="rgb(165,179,174)"/>
            <rect x="24" y="35" width="1" height="1" fill="rgb(227,232,231)"/>
            <rect x="25" y="35" width="1" height="1" fill="rgb(223,199,166)"/>
            <rect x="26" y="35" width="1" height="1" fill="rgb(251,243,232)"/>
            <rect x="27" y="35" width="1" height="1" fill="rgb(251,248,242)"/>
            <rect x="28" y="35" width="1" height="1" fill="rgb(219,187,130)"/>
            <rect x="29" y="35" width="1" height="1" fill="rgb(233,212,182)"/>
            <rect x="30" y="35" width="1" height="1" fill="rgb(245,244,241)"/>
            <rect x="31" y="35" width="1" height="1" fill="rgb(181,185,182)"/>
            <rect x="32" y="35" width="1" height="1" fill="rgb(56,73,68)"/>
            <rect x="33" y="35" width="1" height="1" fill="rgb(5,41,38)"/>
            <rect x="34" y="35" width="1" height="1" fill="rgb(19,52,47)"/>
            <rect x="35" y="35" width="1" height="1" fill="rgb(90,103,97)"/>
            <rect x="36" y="35" width="1" height="1" fill="rgb(164,170,166)"/>
            <rect x="37" y="35" width="1" height="1" fill="rgb(204,208,206)"/>
            <rect x="38" y="35" width="1" height="1" fill="rgb(233,235,234)"/>
            <rect x="39" y="35" width="1" height="1" fill="rgb(251,251,251)"/>
            <rect x="14" y="36" width="1" height="1" fill="rgb(240,241,240)"/>
            <rect x="15" y="36" width="1" height="1" fill="rgb(196,200,197)"/>
            <rect x="16" y="36" width="1" height="1" fill="rgb(125,134,128)"/>
            <rect x="17" y="36" width="1" height="1" fill="rgb(34,67,59)"/>
            <rect x="18" y="36" width="1" height="1" fill="rgb(37,76,67)"/>
            <rect x="19" y="36" width="1" height="1" fill="rgb(177,186,182)"/>
            <rect x="20" y="36" width="1" height="1" fill="rgb(247,247,245)"/>
            <rect x="21" y="36" width="1" height="1" fill="rgb(210,196,171)"/>
            <rect x="22" y="36" width="1" height="1" fill="rgb(236,230,221)"/>
            <rect x="23" y="36" width="1" height="1" fill="rgb(167,179,176)"/>
            <rect x="24" y="36" width="1" height="1" fill="rgb(226,231,230)"/>
            <rect x="25" y="36" width="1" height="1" fill="rgb(222,192,161)"/>
            <rect x="26" y="36" width="1" height="1" fill="rgb(249,239,227)"/>
            <rect x="27" y="36" width="1" height="1" fill="rgb(232,201,155)"/>
            <rect x="28" y="36" width="1" height="1" fill="rgb(244,231,213)"/>
            <rect x="29" y="36" width="1" height="1" fill="rgb(217,222,220)"/>
            <rect x="30" y="36" width="1" height="1" fill="rgb(98,114,111)"/>
            <rect x="31" y="36" width="1" height="1" fill="rgb(14,59,56)"/>
            <rect x="32" y="36" width="1" height="1" fill="rgb(92,106,103)"/>
            <rect x="33" y="36" width="1" height="1" fill="rgb(177,182,179)"/>
            <rect x="34" y="36" width="1" height="1" fill="rgb(224,227,224)"/>
            <rect x="35" y="36" width="1" height="1" fill="rgb(251,252,251)"/>
            <rect x="17" y="37" width="1" height="1" fill="rgb(233,235,233)"/>
            <rect x="18" y="37" width="1" height="1" fill="rgb(170,178,174)"/>
            <rect x="19" y="37" width="1" height="1" fill="rgb(65,92,83)"/>
            <rect x="20" y="37" width="1" height="1" fill="rgb(119,133,129)"/>
            <rect x="21" y="37" width="1" height="1" fill="rgb(234,235,233)"/>
            <rect x="22" y="37" width="1" height="1" fill="rgb(219,206,188)"/>
            <rect x="23" y="37" width="1" height="1" fill="rgb(177,184,175)"/>
            <rect x="24" y="37" width="1" height="1" fill="rgb(220,226,225)"/>
            <rect x="25" y="37" width="1" height="1" fill="rgb(225,196,163)"/>
            <rect x="26" y="37" width="1" height="1" fill="rgb(236,217,188)"/>
            <rect x="27" y="37" width="1" height="1" fill="rgb(243,233,219)"/>
            <rect x="28" y="37" width="1" height="1" fill="rgb(181,189,186)"/>
            <rect x="29" y="37" width="1" height="1" fill="rgb(40,67,63)"/>
            <rect x="30" y="37" width="1" height="1" fill="rgb(130,139,136)"/>
            <rect x="31" y="37" width="1" height="1" fill="rgb(215,218,217)"/>
            <rect x="32" y="37" width="1" height="1" fill="rgb(251,251,250)"/>
            <rect x="19" y="38" width="1" height="1" fill="rgb(242,243,242)"/>
            <rect x="20" y="38" width="1" height="1" fill="rgb(175,181,176)"/>
            <rect x="21" y="38" width="1" height="1" fill="rgb(94,106,101)"/>
            <rect x="22" y="38" width="1" height="1" fill="rgb(216,218,215)"/>
            <rect x="23" y="38" width="1" height="1" fill="rgb(218,217,210)"/>
            <rect x="24" y="38" width="1" height="1" fill="rgb(231,234,232)"/>
            <rect x="25" y="38" width="1" height="1" fill="rgb(235,215,193)"/>
            <rect x="26" y="38" width="1" height="1" fill="rgb(246,241,234)"/>
            <rect x="27" y="38" width="1" height="1" fill="rgb(152,161,158)"/>
            <rect x="28" y="38" width="1" height="1" fill="rgb(129,140,136)"/>
            <rect x="29" y="38" width="1" height="1" fill="rgb(220,222,221)"/>
            <rect x="21" y="39" width="1" height="1" fill="rgb(237,239,238)"/>
            <rect x="22" y="39" width="1" height="1" fill="rgb(166,173,170)"/>
            <rect x="23" y="39" width="1" height="1" fill="rgb(208,212,210)"/>
            <rect x="24" y="39" width="1" height="1" fill="rgb(252,253,252)"/>
            <rect x="25" y="39" width="1" height="1" fill="rgb(243,242,239)"/>
            <rect x="26" y="39" width="1" height="1" fill="rgb(165,176,171)"/>
            <rect x="27" y="39" width="1" height="1" fill="rgb(209,213,211)"/>
            <rect x="23" y="40" width="1" height="1" fill="rgb(221,224,221)"/>
            <rect x="24" y="40" width="1" height="1" fill="rgb(235,237,235)"/>
            <rect x="25" y="40" width="1" height="1" fill="rgb(217,220,216)"/>
            <rect x="26" y="40" width="1" height="1" fill="rgb(245,247,246)"/>
        </svg>`;

    const getMediaLink = (editor) => {
        const options = window.Joomla?.getOptions?.(
            'plg_editors_xtd_wissenswerk'
        ) || {};

        return options.mediaLinks?.[editor.id] || '';
    };

    const runAction = (editor, action) => {
        if (typeof window.WissensWerkEditor?.runAction !== 'function') {
            console.error(
                'WissensWerk: Joomla editor action bridge is not available.'
            );

            return;
        }

        window.WissensWerkEditor.runAction(editor.id, action, {
            mediaLink: getMediaLink(editor),
        });
    };

    window.tinymce.PluginManager.add('wissenswerk', (editor) => {
        editor.ui.registry.addIcon('wissenswerk', icon);

        const articleMenuItem = {
            text: window.Joomla?.Text?._(
                'PLG_EDITORS-XTD_WISSENSWERK_ARTICLE'
            ) || 'WW Article – Split',
            icon: 'file-add',
            onAction: () => runAction(editor, actions.article),
        };

        const columnsMenuItem = {
            text: window.Joomla?.Text?._(
                'PLG_EDITORS-XTD_WISSENSWERK_COLUMNS'
            ) || 'WW Article – Columns',
            icon: 'file-add',
            onAction: () => runAction(editor, actions.columns),
        };

        const accordionMenuItem = {
            text: window.Joomla?.Text?._(
                'PLG_EDITORS-XTD_WISSENSWERK_ACCORDION'
            ) || 'WW Accordion',
            icon: 'file-add',
            onAction: () => runAction(editor, actions.accordion),
        };

        editor.ui.registry.addMenuItem(
            'wissenswerk-article',
            articleMenuItem
        );

        editor.ui.registry.addMenuItem(
            'wissenswerk-columns',
            columnsMenuItem
        );

        editor.ui.registry.addMenuItem(
            'wissenswerk-accordion',
            accordionMenuItem
        );

        editor.ui.registry.addMenuButton('wissenswerk', {
            text: window.Joomla?.Text?._(
                'PLG_EDITORS-XTD_WISSENSWERK'
            ) || 'WissensWerk',
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
                    {
                        type: 'menuitem',
                        ...accordionMenuItem,
                    },
                ]);
            },
        });

        return {
            getMetadata: () => ({
                name: 'WissensWerk TinyMCE',
            }),
        };
    });
}());