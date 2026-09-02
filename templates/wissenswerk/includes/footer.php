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

$baseurl = $this->baseurl;
$logoFile = $this->params->get('logoFile');

$brandingFirst  = $this->params->get('branding_first');
$brandingSecond = $this->params->get('branding_second');

$footerSlogan    = $this->params->get('branding_footer_slogan');
$footerVersion   = $this->params->get('footer_version');

$footerDeveloped = $this->params->get('footer_developed');
$footerDevelopedParts = explode('Herz', $footerDeveloped, 2);

$branding = trim($brandingFirst . $brandingSecond);

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
                        <div class="ww-footer__brand">
                            <?php require __DIR__ . '/brand.php'; ?>
                        </div>

                        <?php if (!empty($footerSlogan)) : ?>
                            <p class="ww-footer__claim">
                                <?= nl2br(htmlspecialchars($footerSlogan)); ?>
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
                        <h2 class="ww-footer__title">
                            Navigation
                        </h2>
                        <jdoc:include type="modules" name="footer-navigation" style="none" />
                    </section>
                </div>

                <!-- ==========================================================
                     Wissen
                =========================================================== -->

                <div class="col-6 col-lg-2">
                    <section class="ww-footer__section">
                        <h2 class="ww-footer__title">
                            Wissen
                        </h2>
                        <jdoc:include type="modules" name="footer-knowledge" style="none" />
                    </section>
                </div>
		  <!-- ==========================================================
                     Rechtliches
                =========================================================== -->

                <div class="col-6 col-lg-2">
                    <section class="ww-footer__section">
                        <h2 class="ww-footer__title">
                            Rechtliches
                        </h2>
                        <jdoc:include type="modules" name="footer-legal" style="none" />
                    </section>
                </div>

                <!-- ==========================================================
                     Kontakt
                =========================================================== -->

                <div class="col-6 col-lg-2">
                    <section class="ww-footer__section">
                        <h2 class="ww-footer__title">
                            Kontakt
                        </h2>

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
            <div class="row align-items-center">

                <!-- ======================================================
                     Copyright
                ======================================================= -->
                <div class="col-12 col-lg-4">
                    <p class="ww-footer__copyright">
                        &copy; <?= date('Y'); ?>
                        <?= htmlspecialchars($branding, ENT_QUOTES, 'UTF-8'); ?>.
                        Alle Rechte vorbehalten.
                    </p>
                </div>

                <!-- ======================================================
                     Version
                ======================================================= -->
                <div class="col-12 col-lg-4 text-center">
                    <?php if (!empty($footerVersion)) : ?>
                        <p class="ww-footer__version">
                            Version
                            <?= htmlspecialchars($footerVersion, ENT_QUOTES, 'UTF-8'); ?>
                        </p>
                    <?php endif; ?>
                </div>

                <!-- ======================================================
                     Developed
                ======================================================= -->
                <div class="col-12 col-lg-4 text-lg-end">
                    <?php if (!empty($footerDeveloped)) : ?>
                        <p class="ww-footer__developed">
                            <?= htmlspecialchars($footerDevelopedParts[0], ENT_QUOTES, 'UTF-8'); ?>
                            <i class="bi bi-heart-fill ww-footer__heart" aria-hidden="true"></i>
                            <?= htmlspecialchars($footerDevelopedParts[1], ENT_QUOTES, 'UTF-8'); ?>
                        </p>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</footer>