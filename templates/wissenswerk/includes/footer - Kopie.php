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

$baseurl             = $this->baseurl;
$logoFile            = $this->params->get('logoFile');

$brandingFirst       = $this->params->get('branding_first');
$brandingSecond      = $this->params->get('branding_second');

$brandingFooterClaim = $this->params->get('branding_footer_claim');

$branding = trim($brandingFirst . ' ' . $brandingSecond);

?>

<footer class="ww-footer" role="contentinfo">

    <div class="ww-container">

        <div class="ww-footer__inner">

            <div class="row gy-5">

                <!-- ==========================================================
                    Branding
                =========================================================== -->

                <div class="col-12 col-lg-4">

                    <section class="ww-footer__branding">

                        <?php if (!empty($logoFile)) : ?>

                            <a class="ww-footer__logo"
                            href="<?= htmlspecialchars($baseurl, ENT_QUOTES, 'UTF-8'); ?>/">

                                <img
                                    src="<?= htmlspecialchars($logoFile, ENT_QUOTES, 'UTF-8'); ?>"
                                    alt="<?= htmlspecialchars($branding, ENT_QUOTES, 'UTF-8'); ?>">
                            </a>

                        <?php endif; ?>

                        <?php if (!empty($brandingFooterClaim)) : ?>

                            <p class="ww-footer__claim">

                                <?= nl2br(htmlspecialchars($brandingFooterClaim)); ?>

                            </p>

                        <?php endif; ?>

                        <div class="ww-footer__social">

                            <jdoc:include 
                                type="modules"
                                name="footer-social"
                                style="none" />

                        </div>

                    </section>

                </div>

                <!-- ==========================================================
                    Navigation
                =========================================================== -->

                <div class="col-6 col-lg-2">

                    <section class="ww-footer__section">

                        <h2 class="ww-footer__title">Navigation</h2>

                        <jdoc:include type="modules" name="footer-navigation" style="none" />

                    </section>

                </div>


                <!-- ==========================================================
                    Wissen
                =========================================================== -->

                <div class="col-6 col-lg-2">

                    <section class="ww-footer__section">

                        <h2 class="ww-footer__title">Wissen</h2>

                        <jdoc:include type="modules" name="footer-knowledge" style="none" />

                    </section>

                </div>


                <!-- ==========================================================
                    Rechtliches
                =========================================================== -->

                <div class="col-6 col-lg-2">

                    <section class="ww-footer__section">

                        <h2 class="ww-footer__title">Rechtliches</h2>

                        <jdoc:include type="modules" name="footer-legal" style="none" />

                    </section>

                </div>


                <!-- ==========================================================
                    Kontakt
                =========================================================== -->

                <div class="col-6 col-lg-2">

                    <section class="ww-footer__section">

                        <h2 class="ww-footer__title">Kontakt</h2>

                        <address class="ww-footer__address">

                            <jdoc:include type="modules" name="footer-contact" style="none" />

                        </address>

                    </section>

                </div>

            </div>

</div>

    </div>


    <!-- ==============================================================
         Footer Bottom
    ============================================================== -->

    <div class="ww-footer__bottom">

        <div class="ww-container">

            <div class="row align-items-center gy-3">

                <div class="col-12 col-lg-6">

                    <p class="ww-footer__copyright">

                        &copy; <?= date('Y'); ?>

                        <?= htmlspecialchars($branding, ENT_QUOTES, 'UTF-8'); ?>

                    </p>

                </div>


                <div class="col-12 col-lg-6">

                    <nav class="ww-footer__legal"
                         aria-label="Rechtliche Informationen">

                        <jdoc:include
                            type="modules"
                            name="footerbottom-legal"
                            style="none" />

                    </nav>

                </div>

            </div>

        </div>

    </div>

</footer>