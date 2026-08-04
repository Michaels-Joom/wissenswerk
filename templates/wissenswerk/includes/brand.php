<?php
/**
 * -----------------------------------------------------------------------------
 * Brand-Komponente
 * -----------------------------------------------------------------------------
 * Stellt die Markenidentität des Templates bereit.
 * Enthält Logo sowie den zweizeiligen Markennamen und kann in
 * Header, Footer, Offline-Seite und weiteren Layouts eingebunden werden.
 *
 * @package     WissensWerk
 */

defined('_JEXEC') or die;
?>

<div class="ww-brand">
    <a
        class="ww-brand__link"
        href="<?= htmlspecialchars($baseurl, ENT_QUOTES, 'UTF-8'); ?>"
        aria-label="Zur Startseite">

        <?php if (!empty($logoFile)) : ?>
            <span class="ww-brand__logo">
                <img
                    src="<?= htmlspecialchars($logoFile, ENT_QUOTES, 'UTF-8'); ?>"
                    alt="<?= htmlspecialchars($branding, ENT_QUOTES, 'UTF-8'); ?>">
            </span>
        <?php endif; ?>

        <span class="ww-brand__title">
            <?php if (!empty($branding_first)) : ?>
                <span class="ww-brand__first">
                    <?= htmlspecialchars($branding_first); ?>
                </span>
            <?php endif; ?>

            <?php if (!empty($branding_second)) : ?>
                <span class="ww-brand__second">
                    <?= htmlspecialchars($branding_second); ?>
                </span>
            <?php endif; ?>
        </span>
    </a>
</div>