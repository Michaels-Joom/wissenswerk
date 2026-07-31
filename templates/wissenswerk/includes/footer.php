<?php
/**
 * @package     Joomla.Site
 * @subpackage  Templates.WissensWerk
 *
 * Footer Include
 */

defined('_JEXEC') or die;

// =============================================================================
// Branding
// =============================================================================

$baseurl               = $this->baseurl;
$logoFile              = $this->params->get('logoFile');

$brandingFirst         = $this->params->get('branding_first');
$brandingSecond        = $this->params->get('branding_second');
$brandingFooterClaim   = $this->params->get('branding_footer_claim');

$branding = trim($brandingFirst . ' ' . $brandingSecond);

?>

<footer class="ww-footer">

    <div class="ww-footer__inner">

        <div class="container">

            <div class="row gy-5">

                <!-- ==========================================================
                     Branding
                =========================================================== -->

                <div class="col-12 col-lg-3">

                    <?php if (!empty($logoFile)) : ?>

                        <a class="ww-footer__logo"
                           href="<?= $baseurl; ?>/">

                            <img
                                src="<?= htmlspecialchars($logoFile); ?>"
                                alt="<?= htmlspecialchars($branding); ?>"
                                class="img-fluid">

                        </a>

                    <?php endif; ?>


                    <?php if (!empty($brandingFooterClaim)) : ?>

                        <p class="ww-footer__claim">

                            <?= nl2br(htmlspecialchars($brandingFooterClaim)); ?>

                        </p>

                    <?php endif; ?>


                    <div class="ww-footer__social">

                        <a href="#"
                           aria-label="GitHub">

                            <i class="bi bi-github"></i>

                        </a>

                        <a href="#"
                           aria-label="LinkedIn">

                            <i class="bi bi-linkedin"></i>

                        </a>

                        <a href="mailto:info@wissenswerk.de"
                           aria-label="E-Mail">

                            <i class="bi bi-envelope-fill"></i>

                        </a>

                    </div>

                </div>


                <!-- ==========================================================
                     Navigation
                =========================================================== -->

                <div class="col-6 col-md-4 col-lg-2">

                    <h3 class="ww-footer__title">
                        Navigation
                    </h3>

                    <ul class="ww-footer__list">

                        <li><a href="#">Startseite</a></li>
                        <li><a href="#">Über uns</a></li>
                        <li><a href="#">Leistungen</a></li>
                        <li><a href="#">Projekte</a></li>
                        <li><a href="#">Wissen</a></li>
                        <li><a href="#">Kontakt</a></li>

                    </ul>

                </div>


                <!-- ==========================================================
                     Wissen
                =========================================================== -->

                <div class="col-6 col-md-4 col-lg-2">

                    <h3 class="ww-footer__title">
                        Wissen
                    </h3>

                    <ul class="ww-footer__list">

                        <li><a href="#">Dokumente</a></li>
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">Design System</a></li>
                        <li><a href="#">Entwicklung</a></li>
                        <li><a href="#">Prozesse</a></li>
                        <li><a href="#">Ressourcen</a></li>

                    </ul>

                </div>


                <!-- ==========================================================
                     Rechtliches
                =========================================================== -->

                <div class="col-6 col-md-4 col-lg-2">

                    <h3 class="ww-footer__title">
                        Rechtliches
                    </h3>

                    <ul class="ww-footer__list">

                        <li><a href="#">Impressum</a></li>
                        <li><a href="#">Datenschutz</a></li>
                        <li><a href="#">Nutzungsbedingungen</a></li>

                    </ul>

                </div>


                <!-- ==========================================================
                     Kontakt
                =========================================================== -->

                <div class="col-12 col-lg-3">

                    <h3 class="ww-footer__title">
                        Kontakt
                    </h3>

                    <address class="ww-footer__address">

                        Musterstraße 12<br>
                        59065 Hamm<br><br>

                        Deutschland<br><br>

                        <a href="mailto:info@wissenswerk.de">

                            info@wissenswerk.de

                        </a>

                        <br>

                        <a href="tel:+49234567890">

                            +49 123 4567890

                        </a>

                    </address>

                </div>

            </div>

        </div>

    </div>


    <!-- ==============================================================
         Footer Bottom
    ============================================================== -->

    <div class="ww-footer-bottom">

        <div class="container">

            <div class="row align-items-center gy-3">

                <div class="col-12 col-md-4">

                    <p class="mb-0">

                        © <?= date('Y'); ?>

                        <?= htmlspecialchars($branding); ?>

                    </p>

                </div>


                <div class="col-12 col-md-4 text-center">

                    <p class="mb-0">

                        WissensWerk · Version 1.0.0

                    </p>

                </div>


                <div class="col-12 col-md-4 text-md-end">

                    <p class="mb-0">

                        Mit
                        <i class="bi bi-heart-fill"></i>
                        in Hamm entwickelt.

                    </p>

                </div>

            </div>

        </div>

    </div>

</footer>