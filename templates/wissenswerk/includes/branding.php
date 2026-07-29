<?php
/**
 * -----------------------------------------------------------------------------
 * Branding-Komponente
 * -----------------------------------------------------------------------------
 * Gemeinsame Markenidentität für Header, Offcanvas und weitere Bereiche.
 *
 * @package WissensWerk
 */

defined('_JEXEC') or die;
?>

<div class="ww-brand">

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

</div>