<?php

/**
 * @package     Joomla.Plugin
 * @subpackage  Ajax.Wissenswerkroute
 */

namespace WissensWerk\Plugin\Ajax\Wissenswerkroute\Extension;

defined('_JEXEC') or die;

use Joomla\CMS\Factory;
use Joomla\CMS\Plugin\Attribute\AllowUnauthorizedAdministratorAccess;
use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\CMS\Router\Route;
use Joomla\Database\DatabaseInterface;
use Joomla\Event\Event;
use Joomla\Event\SubscriberInterface;

/**
 * Provides Joomla site routes for WissensWerk editor blocks.
 */
final class Wissenswerkroute extends CMSPlugin implements SubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            'onAjaxWissenswerkroute' => 'onAjaxWissenswerkroute',
        ];
    }

    /**
     * Build a frontend Joomla URL for a selected com_content article.
     *
     * The administrator-side editor needs a site URL, so Route::link()
     * is used instead of Route::_(). Joomla therefore performs the
     * normal site routing including SEF processing and menu selection.
     */
    #[AllowUnauthorizedAdministratorAccess]
    public function onAjaxWissenswerkroute(Event $event): void
    {
        $application = $this->getApplication();

        $user = $application->getIdentity();

        if (!$user || !$user->id) {
            throw new \RuntimeException('Nicht autorisiert.');
        }

        $id = $application->getInput()->getInt('id');

        if ($id < 1) {
            throw new \InvalidArgumentException('Ungültige Artikel-ID.');
        }

        $db = Factory::getContainer()->get(DatabaseInterface::class);

        $query = $db->getQuery(true)
            ->select([
                $db->quoteName('id'),
                $db->quoteName('catid'),
                $db->quoteName('language'),
            ])
            ->from($db->quoteName('#__content'))
            ->where($db->quoteName('id') . ' = :id')
            ->bind(':id', $id, \Joomla\Database\ParameterType::INTEGER);

        $article = $db->setQuery($query)->loadObject();

        if (!$article) {
            throw new \RuntimeException('Der ausgewählte Artikel wurde nicht gefunden.');
        }

        $internalUrl = 'index.php?option=com_content'
            . '&view=article'
            . '&id=' . (int) $article->id
            . '&catid=' . (int) $article->catid;

        if (!empty($article->language) && $article->language !== '*') {
            $internalUrl .= '&lang=' . rawurlencode($article->language);
        }

        $url = Route::link('site', $internalUrl, false);

        $event->addResult($url);
    }
}
