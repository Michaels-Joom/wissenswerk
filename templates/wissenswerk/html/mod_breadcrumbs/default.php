<?php

/**
 * @package     Joomla.Site
 * @subpackage  mod_breadcrumbs
 *
 * WissensWerk Template Override
 */

defined('_JEXEC') or die;

use Joomla\CMS\HTML\HTMLHelper;
use Joomla\CMS\Router\Route;
use Joomla\CMS\Uri\Uri;
use Joomla\CMS\WebAsset\WebAssetManager;

?>

<nav
    class="ww-breadcrumb"
    aria-label="<?= htmlspecialchars($module->title, ENT_QUOTES, 'UTF-8'); ?>">
    <ol class="ww-breadcrumb__list">
        <?php
        /**
         * Doppelte Breadcrumb-Einträge entfernen
         */
        for ($i = 0; $i < $count; $i++) {
            if (
                $i === 1
                && !empty($list[$i]->link)
                && !empty($list[$i - 1]->link)
                && $list[$i]->link === $list[$i - 1]->link
            ) {
                unset($list[$i]);
            }
        }
        end($list);
        $lastItemKey = key($list);
        $showLast = $params->get('showLast', 1);

        foreach ($list as $key => $item) :
            $isActive = ($key === $lastItemKey);
            if (!$isActive) :
                if (!empty($item->link)) {
                    $breadcrumbItem = HTMLHelper::_(
                        'link',
                        Route::_($item->link),
                        '<span>' . htmlspecialchars($item->name) . '</span>',
                        ['class' => 'ww-breadcrumb__link']
                    );
                } else {
                    $breadcrumbItem = '<span>' . htmlspecialchars($item->name) . '</span>';
                }
                ?>
                <li class="ww-breadcrumb__item">
                    <?= $breadcrumbItem; ?>
                </li>
                <?php
            elseif ($showLast) :
                ?>
                <li
                    class="ww-breadcrumb__item ww-breadcrumb__item--active"
                    aria-current="page">
                    <span><?= htmlspecialchars($item->name); ?></span>
                </li>
                <?php
            endif;
        endforeach;
        ?>
    </ol>
</nav>
<?php

/**
 * -----------------------------------------------------------------------------
 * Schema.org BreadcrumbList
 * -----------------------------------------------------------------------------
 */

$data = [
    '@context'        => 'https://schema.org',
    '@type'           => 'BreadcrumbList',
    '@id'             => Uri::root() . '#/schema/BreadcrumbList/' . (int) $module->id,
    'itemListElement' => [],
];

$position = 0;

if (isset($homeCrumb)) {
    $data['itemListElement'][] = [
        '@type'    => 'ListItem',
        'position' => ++$position,
        'item'     => [
            '@id'  => Route::_($homeCrumb->link, true, Route::TLS_IGNORE, true),
            'name' => $homeCrumb->name,
        ],
    ];
}

foreach ($list as $key => $item) {
    if (!empty($item->link)) {
        $data['itemListElement'][] = [
            '@type'    => 'ListItem',
            'position' => ++$position,
            'item'     => [
                '@id'  => Route::_($item->link, true, Route::TLS_IGNORE, true),
                'name' => $item->name,
            ],
        ];
    } elseif ($key === $lastItemKey) {
        $data['itemListElement'][] = [
            '@type'    => 'ListItem',
            'position' => ++$position,
            'item'     => [
                'name' => $item->name,
            ],
        ];
    }
}

if ($position) {

    /** @var WebAssetManager $wa */
    $wa = $app->getDocument()->getWebAssetManager();
    $wa->addInline(
        'script',
        json_encode(
            $data,
            JSON_UNESCAPED_UNICODE
            | JSON_UNESCAPED_SLASHES
            | (JDEBUG ? JSON_PRETTY_PRINT : 0)
        ),
        ['name' => 'inline.breadcrumb-schema'],
        ['type' => 'application/ld+json']
    );
}