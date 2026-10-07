<?php

/**
 * @package     Joomla.Plugin
 * @subpackage  Content.pagenavigation
 *
 * @copyright   (C) 2013 Open Source Matters, Inc. <https://www.joomla.org>
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

use Joomla\CMS\Language\Text;
use Joomla\CMS\Router\Route;

/**
 * @var \Joomla\Plugin\Content\PageNavigation\Extension\PageNavigation  $this
 */
$this->loadLanguage();
$lang = $this->getLanguage();
?>

<nav class="ww-page-nav" aria-label="Artikelnavigation">

    <?php if (!empty($row->prev)) : ?>
        <a class="ww-page-nav__previous"
           href="<?php echo Route::_($row->prev); ?>">
            <span class="ww-page-nav__label">
                <?php echo htmlspecialchars($row->prev_label, ENT_QUOTES, 'UTF-8'); ?>
            </span>
        </a>
    <?php endif; ?>

    <?php if (!empty($row->next)) : ?>
        <a class="ww-page-nav__next"
           href="<?php echo Route::_($row->next); ?>">
            <span class="ww-page-nav__label">
                <?php echo htmlspecialchars($row->next_label, ENT_QUOTES, 'UTF-8'); ?>
            </span>
        </a>
    <?php endif; ?>

</nav>