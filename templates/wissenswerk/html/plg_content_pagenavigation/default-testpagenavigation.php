<?php

/**
 * @package     Joomla.Site
 * @subpackage  Template.wissenswerk
 *
 * Diagnostic override for Joomla Page Navigation.
 *
 * IMPORTANT:
 * This file is temporary and is used only to inspect the
 * values delivered by the PageNavigation plugin.
 */

defined('_JEXEC') or die;

use Joomla\CMS\Language\Text;
use Joomla\CMS\Router\Route;

?>

<div class="ww-pagenav-debug">

    <h2>PageNavigation – Diagnose</h2>

    <h3>Aktueller Artikel</h3>

    <dl>
        <dt>ID</dt>
        <dd><?php echo (int) $row->id; ?></dd>

        <dt>Titel</dt>
        <dd><?php echo htmlspecialchars($row->title, ENT_QUOTES, 'UTF-8'); ?></dd>

        <dt>Kategorie-ID</dt>
        <dd><?php echo (int) $row->catid; ?></dd>

        <dt>Sprache</dt>
        <dd><?php echo htmlspecialchars($row->language, ENT_QUOTES, 'UTF-8'); ?></dd>
    </dl>

    <h3>PageNavigation</h3>

    <dl>
        <dt>Previous vorhanden</dt>
        <dd><?php echo $row->prev ? 'JA' : 'NEIN'; ?></dd>

        <dt>Next vorhanden</dt>
        <dd><?php echo $row->next ? 'JA' : 'NEIN'; ?></dd>

        <dt>Previous Label</dt>
        <dd><?php echo htmlspecialchars($row->prev_label ?? '', ENT_QUOTES, 'UTF-8'); ?></dd>

        <dt>Next Label</dt>
        <dd><?php echo htmlspecialchars($row->next_label ?? '', ENT_QUOTES, 'UTF-8'); ?></dd>
    </dl>

    <?php if (!empty($row->prev)) : ?>
        <p>
            <strong>Zurück:</strong>
            <?php echo htmlspecialchars($row->prev_label, ENT_QUOTES, 'UTF-8'); ?>
        </p>
    <?php endif; ?>

    <?php if (!empty($row->next)) : ?>
        <p>
            <strong>Weiter:</strong>
            <?php echo htmlspecialchars($row->next_label, ENT_QUOTES, 'UTF-8'); ?>
        </p>
    <?php endif; ?>

</div>

<?php if (!empty($row->ww_pagenav_debug)) : ?>

    <h3>Interne PageNavigation-Daten</h3>

    <dl>
        <dt>UID</dt>
        <dd>
            <?php echo (int) $row->ww_pagenav_debug['uid']; ?>
        </dd>

        <dt>Sortiermethode</dt>
        <dd>
            <?php echo htmlspecialchars(
                (string) $row->ww_pagenav_debug['order_method'],
                ENT_QUOTES,
                'UTF-8'
            ); ?>
        </dd>

        <dt>ORDER BY</dt>
        <dd>
            <code>
                <?php echo htmlspecialchars(
                    (string) $row->ww_pagenav_debug['orderby'],
                    ENT_QUOTES,
                    'UTF-8'
                ); ?>
            </code>
        </dd>

        <dt>Artikelreihenfolge</dt>
        <dd>
            <code>
                <?php echo htmlspecialchars(
                    implode(' → ', $row->ww_pagenav_debug['list_keys']),
                    ENT_QUOTES,
                    'UTF-8'
                ); ?>
            </code>
        </dd>
    </dl>

<?php endif; ?>