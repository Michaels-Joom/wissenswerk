<?php
/**
 * @package     Joomla.Site
 * @subpackage  Templates.WissensWerk
 *
 * WissensWerk Template
 * index.php
 */

defined('_JEXEC') or die;

use Joomla\CMS\Factory;

/** @var Joomla\CMS\Document\HtmlDocument $this */

$app = Factory::getApplication();
$wa  = $this->getWebAssetManager();

// =============================================================================
// Web Assets
// =============================================================================

$wa->useStyle('bootstrap-icons');
$wa->useStyle('template.wissenswerk');
$wa->useScript('template.wissenswerk');

// =============================================================================
// Meta
// =============================================================================

$this->setMetaData('viewport', 'width=device-width, initial-scale=1');

// =============================================================================
// Templateparameter
// =============================================================================

$baseurl         = $this->baseurl;
$logoFile        = $this->params->get('logoFile');
$branding_first  = $this->params->get('branding_first');
$branding_second = $this->params->get('branding_second');
$branding_slogan = $this->params->get('branding_slogan');

$branding = trim($branding_first . ' ' . $branding_second);

// =============================================================================
// Modulpositionen
// =============================================================================

$showTopbar       = $this->countModules('topbar');
$showMenu         = $this->countModules('menu');
$showSearch       = $this->countModules('search');

$showBanner       = $this->countModules('banner');
$showHero         = $this->countModules('hero');

$showTopA         = $this->countModules('top-a');
$showTopB         = $this->countModules('top-b');

$showBreadcrumbs  = $this->countModules('breadcrumbs');

$showMainTop      = $this->countModules('main-top');
$showSidebarLeft  = $this->countModules('sidebar-left');
$showSidebarRight = $this->countModules('sidebar-right');
$showMainBottom   = $this->countModules('main-bottom');

$showBottomA      = $this->countModules('bottom-a');
$showBottomB      = $this->countModules('bottom-b');

$showDebug        = $this->countModules('debug');

// =============================================================================
// Sidebar-Breiten (Bootstrap)
// =============================================================================

$contentClass = 'col-12';

if ($showSidebarLeft && $showSidebarRight) {

    $contentClass = 'col-lg-6';

} elseif ($showSidebarLeft || $showSidebarRight) {

    $contentClass = 'col-lg-9';

}

?><!DOCTYPE html>
<html lang="<?= $this->language; ?>" dir="<?= $this->direction; ?>">

<head>

    <jdoc:include type="metas" />
    <jdoc:include type="styles" />
    <jdoc:include type="scripts" />

</head>

<body>

    

    


    <!-- ==============================================================
         Banner
    ============================================================== -->

    <?php if ($showBanner) : ?>

        <section class="ww-banner">
            <div class="container">
                <jdoc:include type="modules" name="banner" />
            </div>
        </section>

    <?php endif; ?>


    <!-- ==============================================================
         Hero
    ============================================================== -->

    <?php if ($showHero) : ?>

        <section class="ww-hero">
            <div class="container">
                <jdoc:include type="modules" name="hero" />
            </div>
        </section>

    <?php endif; ?>


    <!-- ==============================================================
         Top A
    ============================================================== -->

    <?php if ($showTopA) : ?>

        <section class="ww-top-a">
            <div class="container">
                <jdoc:include type="modules" name="top-a" />
            </div>
        </section>

    <?php endif; ?>


    <!-- ==============================================================
         Top B
    ============================================================== -->

    <?php if ($showTopB) : ?>

        <section class="ww-top-b">
            <div class="container">
                <jdoc:include type="modules" name="top-b" />
            </div>
        </section>

    <?php endif; ?>


    <!-- ==============================================================
         Breadcrumbs
    ============================================================== -->

    <?php if ($showBreadcrumbs) : ?>

        <nav class="ww-breadcrumbs" aria-label="Breadcrumb">

            <div class="container">

                <jdoc:include
                    type="modules"
                    name="breadcrumbs"
                    style="none" />

            </div>

        </nav>

    <?php endif; ?>


    <!-- ==============================================================
         Main Top
    ============================================================== -->

    <?php if ($showMainTop) : ?>

        <section class="ww-main-top">

            <div class="container">

                <jdoc:include
                    type="modules"
                    name="main-top" />

            </div>

        </section>

    <?php endif; ?>


    <!-- ==============================================================
         Main Content
    ============================================================== -->

    <main class="ww-main">

        <div class="container">

            <div class="row g-5">

                <?php if ($showSidebarLeft) : ?>

                    <aside class="col-12 col-lg-3">

                        <jdoc:include
                            type="modules"
                            name="sidebar-left"
                            style="html5" />

                    </aside>

                <?php endif; ?>


                <section class="<?= $contentClass; ?>">

                    <jdoc:include type="component" />

                </section>


                <?php if ($showSidebarRight) : ?>

                    <aside class="col-12 col-lg-3">

                        <jdoc:include
                            type="modules"
                            name="sidebar-right"
                            style="html5" />

                    </aside>

                <?php endif; ?>

            </div>

        </div>

    </main>


    <!-- ==============================================================
         Main Bottom
    ============================================================== -->

    <?php if ($showMainBottom) : ?>

        <section class="ww-main-bottom">

            <div class="container">

                <jdoc:include
                    type="modules"
                    name="main-bottom" />

            </div>

        </section>

    <?php endif; ?>


    <!-- ==============================================================
         Bottom A
    ============================================================== -->

    <?php if ($showBottomA) : ?>

        <section class="ww-bottom-a">

            <div class="container">

                <jdoc:include
                    type="modules"
                    name="bottom-a" />

            </div>

        </section>

    <?php endif; ?>


    <!-- ==============================================================
         Bottom B
    ============================================================== -->

    <?php if ($showBottomB) : ?>

        <section class="ww-bottom-b">

            <div class="container">

                <jdoc:include
                    type="modules"
                    name="bottom-b" />

            </div>

        </section>

    <?php endif; ?>


    <!-- ==============================================================
         Footer
    ============================================================== -->

    <?php require __DIR__ . '/includes/footer.php'; ?>


    <!-- ==============================================================
         Debug
    ============================================================== -->

    <?php if ($showDebug) : ?>

        <div class="ww-debug">

            <div class="container">

                <jdoc:include
                    type="modules"
                    name="debug"
                    style="none" />

            </div>

        </div>

    <?php endif; ?>

</body>

</html>