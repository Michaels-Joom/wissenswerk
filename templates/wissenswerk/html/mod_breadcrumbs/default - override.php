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
         * Doppelte Breadcrumb-Einträge entfernen.
         *
         * Joomla kann bei mehrsprachigen Seiten doppelte Einträge
         * im Breadcrumb-Pfad erzeugen.
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

        // Letzten Breadcrumb-Eintrag ermitteln.
        end($list);
        $lastItemKey = key($list);

        // Einstellung aus dem Joomla-Breadcrumb-Modul übernehmen.
        $showLast = $params->get('showLast', 1);

        foreach ($list as $key => $item) :
            $isActive = ($key === $lastItemKey);

            if (!$isActive) :
                if (!empty($item->link)) {
                    $breadcrumbItem = HTMLHelper::_(
                        'link',
                        Route::_($item->link),
                        '<span>' . htmlspecialchars(
                            $item->name,
                            ENT_QUOTES,
                            'UTF-8'
                        ) . '</span>',
                        ['class' => 'ww-breadcrumb__link']
                    );
                } else {
                    $breadcrumbItem = '<span>' . htmlspecialchars(
                        $item->name,
                        ENT_QUOTES,
                        'UTF-8'
                    ) . '</span>';
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
                    <span>
                        <?= htmlspecialchars(
                            $item->name,
                            ENT_QUOTES,
                            'UTF-8'
                        ); ?>
                    </span>
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

/**
 * Joomla stellt $homeCrumb bereit, wenn der Startseiten-Eintrag
 * nicht bereits Bestandteil der Breadcrumb-Liste ist.
 */
if (isset($homeCrumb)) {
    $data['itemListElement'][] = [
        '@type'    => 'ListItem',
        'position' => ++$position,
        'item'     => [
            '@id'  => Route::_(
                $homeCrumb->link,
                true,
                Route::TLS_IGNORE,
                true
            ),
            'name' => $homeCrumb->name,
        ],
    ];
}

/**
 * Breadcrumb-Einträge für strukturierte Daten erzeugen.
 *
 * Verlinkte Einträge erhalten eine URL.
 * Der aktuelle Eintrag kann ohne URL ausgegeben werden.
 */
foreach ($list as $key => $item) {
    if (!empty($item->link)) {
        $data['itemListElement'][] = [
            '@type'    => 'ListItem',
            'position' => ++$position,
            'item'     => [
                '@id'  => Route::_(
                    $item->link,
                    true,
                    Route::TLS_IGNORE,
                    true
                ),
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

    $prettyPrint = JDEBUG ? JSON_PRETTY_PRINT : 0;

    /**
     * Die JSON_HEX_* Optionen entsprechen dem aktuellen Joomla-Core.
     * Sie verhindern, dass problematische Zeichen beim Einbetten
     * der JSON-LD-Daten als HTML interpretiert werden können.
     */
    $bitmask = JSON_UNESCAPED_UNICODE
        | JSON_UNESCAPED_SLASHES
        | JSON_HEX_TAG
        | JSON_HEX_AMP
        | JSON_HEX_APOS
        | JSON_HEX_QUOT
        | $prettyPrint;

    $wa->addInline(
        'script',
        json_encode($data, $bitmask),
        ['name' => 'inline.breadcrumbs-schemaorg'],
        ['type' => 'application/ld+json']
    );
}