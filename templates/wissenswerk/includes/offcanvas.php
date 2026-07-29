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

        <div class="ww-offcanvas__top">

            <div class="ww-offcanvas__brand">

                <?php require __DIR__ . '/branding.php'; ?>

            </div>

            <button
                type="button"
                class="btn-close ww-offcanvas__close"
                data-bs-dismiss="offcanvas"
                aria-label="Menü schließen">
            </button>

        </div>

    </div>

    <div class="offcanvas-body ww-offcanvas__body">

        <nav
            class="ww-offcanvas__navigation"
            aria-label="Mobile Navigation">

            <?= $offcanvasMenu; ?>

        </nav>

    </div>

    <div class="ww-offcanvas__footer">


    <div class="ww-offcanvas__footer">

        <img
        src="<?= $this->baseurl; ?>/media/templates/site/wissenswerk/images/logo/wissenswerk_logo_main.png"
        class="ww-offcanvas__footer-logo"
        alt="WissensWerk Logo">

    </div>

    </div>

</div>