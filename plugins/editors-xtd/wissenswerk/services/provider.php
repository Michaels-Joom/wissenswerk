<?php

/**
 * @package     Joomla.Plugin
 * @subpackage  EditorsXtd.Wissenswerk
 */

defined('_JEXEC') or die;

use Joomla\CMS\Extension\PluginInterface;
use Joomla\CMS\Factory;
use Joomla\CMS\Plugin\PluginHelper;
use Joomla\DI\Container;
use Joomla\DI\ServiceProviderInterface;
use Joomla\Event\DispatcherInterface;
use WissensWerk\Plugin\EditorsXtd\Wissenswerk\Extension\Wissenswerk;

return new class implements ServiceProviderInterface
{
    public function register(Container $container): void
    {
        $container->set(
            PluginInterface::class,
            function (Container $container) {
                $plugin = new Wissenswerk(
                    $container->get(DispatcherInterface::class),
                    (array) PluginHelper::getPlugin('editors-xtd', 'wissenswerk')
                );

                $plugin->setApplication(Factory::getApplication());

                return $plugin;
            }
        );
    }
};
