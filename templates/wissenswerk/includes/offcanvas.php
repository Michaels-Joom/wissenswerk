<?php
/**
 * -----------------------------------------------------------------------------
 * Offcanvas-Komponente
 * -----------------------------------------------------------------------------
 * Mobile Navigation
 * -----------------------------------------------------------------------------
 *
 * @package WissensWerk
 */

defined('_JEXEC') or die;
?>

<div
    class="ww-offcanvas offcanvas offcanvas-end"
    tabindex="-1"
    id="wwOffcanvas"
    aria-labelledby="wwOffcanvasLabel">

    <div class="offcanvas-header ww-offcanvas__header">

        <div class="ww-offcanvas__branding">

        <span class="ww-branding-primary">
                Wissens
            </span>

            <span class="ww-branding-secondary">
                Werk
            </span>

        </div>

        <div class="ww-balance">

            <span class="ww-balance__dot"></span>

        </div>

        <button
            type="button"
            class="btn-close ww-offcanvas__close"
            data-bs-dismiss="offcanvas"
            aria-label="Menü schließen">
        </button>

    </div>

    <div class="offcanvas-body ww-offcanvas__body">

        <nav
            class="ww-offcanvas__navigation"
            aria-label="Mobile Navigation">

            <?= $offcanvasMenu; ?>

        </nav>

    </div>

    <div class="ww-offcanvas__footer">

        <!-- Erweiterungen:
             - Social Media
             - Login
             - Suche
             - Copyright
        -->

    </div>

</div>