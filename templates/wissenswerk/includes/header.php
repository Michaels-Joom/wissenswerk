<?php
/**
 * @package     Joomla.Site
 * @subpackage  Templates.wissenswerk
 *
 * Header Layout
 */

defined('_JEXEC') or die;

use Joomla\CMS\Factory;

$app = Factory::getApplication();
?>

<header class="ww-header">

    <div class="ww-header__container">

        <!-- Logo -->

         <?php require __DIR__ . '/brand.php'; ?>    

        <!-- Hauptnavigation -->
        <nav class="ww-header__navigation" aria-label="Hauptnavigation">

            <jdoc:include type="modules" name="menu" style="none" />

        </nav>

        <!-- Aktionen -->
        <div class="ww-header__actions">
            <div class="ww-header__actions">
                <button
                    class="ww-header__search"
                    type="button"
                    aria-label="Suche öffnen">
                    <span class="bi bi-search" aria-hidden="true"></span>
                </button>
            </div>

            <div class="ww-header__cta">

                <jdoc:include type="modules" name="header-button" style="none" />

            </div>
        </div>
    </div>
</header>