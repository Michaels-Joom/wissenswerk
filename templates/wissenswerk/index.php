<?php
/**
 * @package     Joomla.Site
 * @subpackage  Templates.WissensWerk
 *
 * @copyright   (C) 2026 Michael Laumann
 * @license     GNU General Public License version 3 or later
 */

defined('_JEXEC') or die;

use Joomla\CMS\Factory;

/** @var Joomla\CMS\Document\HtmlDocument $this */

$app = Factory::getApplication();
$wa  = $this->getWebAssetManager();

// ======================================================
// Web Assets
// ======================================================

$wa->useStyle('template.wissenswerk');
$wa->useScript('template.wissenswerk');
//$wa->usePreset('bootstrap');

// ======================================================
// Meta
// ======================================================

$this->setMetaData('viewport', 'width=device-width, initial-scale=1');

// ======================================================
// Templateparameter
// ======================================================

$baseurl         = $this->baseurl;
$logoFile        = $this->params->get('logoFile');
$branding_first  = $this->params->get('branding_first');
$branding_second = $this->params->get('branding_second');
$branding_slogan = $this->params->get('branding_slogan');
$branding = $branding_first . $branding_second;

// ======================================================
// Modulpositionen
// ======================================================

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

$showFooter       = $this->countModules('footer');
$showFooterNav    = $this->countModules('footer-nav');
$showCopyright    = $this->countModules('copyright');

$showDebug        = $this->countModules('debug');

?><!DOCTYPE html>
<html lang="<?= $this->language; ?>" dir="<?= $this->direction; ?>">
    <head>
        <jdoc:include type="metas" />
        <jdoc:include type="styles" />
        <jdoc:include type="scripts" />
    </head>

    <body>

        <header class="ww-header">
            <div class="ww-container">

                <?php if ($showTopbar) : ?>
                <div class="ww-header__topbar">
                    <jdoc:include type="modules" name="topbar" style="none" />
                </div>
                <?php endif; ?>

                <div class="ww-header__main">

                    <div class="ww-header__branding">

                        <?php if (!empty($logoFile)) : ?>
                        <a class="ww-header__logo" href="<?= $baseurl; ?>/">
                            <img src="<?= htmlspecialchars($logoFile); ?>" alt="<?= htmlspecialchars($branding); ?>">
                        </a>
                        <?php endif; ?>

                        <div class="ww-header__site">

                            <div class="ww-branding">
                                <?php if ($branding_first) : ?>      
                                    <span class="ww-branding-primary">
                                        <?= htmlspecialchars($branding_first); ?>
                                    </span>
                                <?php endif; ?>

                                <?php if ($branding_second) : ?>
                                    <span class="ww-branding-secondary">
                                        <?= htmlspecialchars($branding_second); ?>
                                    </span>
                                <?php endif; ?>  
                            </div>      
                            
                            <div class="ww-balance">
                                <span class="ww-balance__dot"></span>
                            </div>

                            <?php if ($branding_slogan) : ?>
                                <p><?= htmlspecialchars($branding_slogan); ?></p>
                            <?php endif; ?>      
                        </div>
                    </div>

                    <?php if ($showMenu || $showSearch) : ?>
                    <div class="ww-header__navigation">

                        <?php if ($showMenu) : ?>
                        <nav class="ww-header__menu">
                            <jdoc:include type="modules" name="menu" style="none" />
                        </nav>
                        <?php endif; ?>

                        <?php if ($showSearch) : ?>
                        <div class="ww-header__search">
                            <jdoc:include type="modules" name="search" style="none" />
                        </div>
                        <?php endif; ?>

                    </div>
                    <?php endif; ?>

                </div>
            </div>
        </header>

        <?php if ($showBanner) : ?>
        <section class="ww-banner">
            <div class="ww-container">
                <jdoc:include type="modules" name="banner" />
            </div>
        </section>
        <?php endif; ?>

        <?php if ($showHero) : ?>
        <section class="ww-hero">
            <div class="ww-container">
                <jdoc:include type="modules" name="hero" />
            </div>
        </section>
        <?php endif; ?>

        <?php if ($showTopA) : ?>
        <section class="ww-top-a">
            <div class="ww-container">
                <jdoc:include type="modules" name="top-a" />
            </div>
        </section>
        <?php endif; ?>

        <?php if ($showTopB) : ?>
        <section class="ww-top-b">
            <div class="ww-container">
                <jdoc:include type="modules" name="top-b" />
            </div>
        </section>
        <?php endif; ?>

        <?php if ($showBreadcrumbs) : ?>
        <nav class="ww-breadcrumbs" aria-label="Breadcrumb">
            <div class="ww-container">
                <jdoc:include type="modules" name="breadcrumbs" style="none" />
            </div>
        </nav>
        <?php endif; ?>

        <?php if ($showMainTop) : ?>
        <section class="ww-main-top">
            <div class="ww-container">
                <jdoc:include type="modules" name="main-top" />
            </div>
        </section>
        <?php endif; ?>

        <main class="ww-main">
            <div class="ww-container">
                <div class="ww-main-grid">

                    <?php if ($showSidebarLeft) : ?>
                    <aside class="ww-sidebar-left">
                        <jdoc:include type="modules" name="sidebar-left" style="html5" />
                    </aside>
                    <?php endif; ?>

                    <section class="ww-content">
                        <jdoc:include type="component" />
                    </section>

                    <?php if ($showSidebarRight) : ?>
                    <aside class="ww-sidebar-right">
                        <jdoc:include type="modules" name="sidebar-right" style="html5" />
                    </aside>
                    <?php endif; ?>

                </div>
            </div>
        </main>

        <?php if ($showMainBottom) : ?>
        <section class="ww-main-bottom">
            <div class="ww-container">
                <jdoc:include type="modules" name="main-bottom" />
            </div>
        </section>
        <?php endif; ?>

        <?php if ($showBottomA) : ?>
        <section class="ww-bottom-a">
            <div class="ww-container">
                <jdoc:include type="modules" name="bottom-a" />
            </div>
        </section>
        <?php endif; ?>

        <?php if ($showBottomB) : ?>
        <section class="ww-bottom-b">
            <div class="ww-container">
                <jdoc:include type="modules" name="bottom-b" />
            </div>
        </section>
        <?php endif; ?>

        <footer class="ww-footer-main">
            <div class="ww-container">

                <div class="ww-footer">

                    <div class="ww-footer__logo">
                        <?php if (!empty($logoFile)) : ?>
                            <a href="<?= $baseurl; ?>/">
                                <img src="<?= htmlspecialchars($logoFile); ?>" alt="<?= htmlspecialchars($branding); ?>">
                            </a>
                        <?php endif; ?>
                    </div>

                    <div class="ww-footer__about">
                        <jdoc:include type="modules" name="footer-about" style="none" />
                    </div>

                    <div class="ww-footer__project">
                        <jdoc:include type="modules" name="footer-project" style="none" />
                    </div>

                    <div class="ww-footer__service">
                        <jdoc:include type="modules" name="footer-service" style="none" />
                    </div>

                </div>

            </div>
        </footer>

        <section class="ww-copyright-main">
            <div class="ww-container">
                <div class="ww-copyright"
                    <?php if ($showCopyright) : ?>
                        <jdoc:include type="modules" name="copyright" style="none" />
                    
                    <?php else : ?>
                            <p>
                                Copyright &copy; <?php echo date('Y'); ?> 
                                <?php echo htmlspecialchars($branding); ?>. 
                                Alle Rechte vorbehalten.
                            </p>
                    <?php endif; ?>
                </div>
            </div>
        </section>            

        <?php if ($showDebug) : ?>
        <div class="ww-debug">
            <div class="ww-container">
                <jdoc:include type="modules" name="debug" style="none" />
            </div>
        </div>
        <?php endif; ?>
    </body>
</html>
