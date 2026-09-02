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
                <?php require __DIR__ . '/brand.php'; ?>
            </div>

            <button
                class="ww-offcanvas__close"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Menü schließen">
            </button>

        </div>
    </div>

    <!-- ==========================================================
         Body
    ========================================================== -->

    <!-- Navigation -->
    <div class="offcanvas-body ww-offcanvas__body">

         <nav class="ww-offcanvas__navigation" aria-label="Mobile Navigation">

            <jdoc:include type="modules" name="menu" style="none" />

        </nav>
    

        <!-- Suche -->    
        <div class="ww-offcanvas__search">

            <button
                class="ww-offcanvas__search-button"
                type="button"
                aria-label="Suche öffnen">

                <span class="bi bi-search"></span>
            </button>

        </div>    

        <!-- CTA -->
        <div class="ww-offcanvas__cta">

            <jdoc:include type="modules" name="header-button" style="none" />

        </div>
    </div>
  
<!-- ==========================================================
         Footer
    ========================================================== -->
    <div class="offcanvas-footer ww-offcanvas__footer">

        <?php if (!empty($logoFile)) : ?>

            <img
                class="ww-offcanvas__footer-logo"
                src="<?= htmlspecialchars($logoFile, ENT_QUOTES, 'UTF-8'); ?>"
                alt="<?= htmlspecialchars($branding, ENT_QUOTES, 'UTF-8'); ?>">

        <?php endif; ?>

        <div class="ww-offcanvas__legal">
            <jdoc:include type="modules" name="offcanvas-legal" style="none" />
        </div>

        <div class="ww-offcanvas__copyright">
            © <?= date('Y'); ?> WissensWerk
        </div>

    </div>
</div>
