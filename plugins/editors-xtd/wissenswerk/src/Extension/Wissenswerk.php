<?php

/**
 * @package     Joomla.Plugin
 * @subpackage  EditorsXtd.Wissenswerk
 */

namespace WissensWerk\Plugin\EditorsXtd\Wissenswerk\Extension;

defined('_JEXEC') or die;

use Joomla\CMS\Component\ComponentHelper;
use Joomla\CMS\Editor\Button\Button;
use Joomla\CMS\Event\Editor\EditorButtonsSetupEvent;
use Joomla\CMS\Language\Text;
use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\CMS\Uri\Uri;
use Joomla\Event\SubscriberInterface;

/**
 * WissensWerk Editor Buttons plugin.
 *
 * Provides the first real WissensWerk editor element:
 * WW Article – Split.
 */
final class Wissenswerk extends CMSPlugin implements SubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            'onEditorButtonsSetup' => 'onEditorButtonsSetup',
        ];
    }

    public function onEditorButtonsSetup(EditorButtonsSetupEvent $event): void
    {
        if (in_array('wissenswerk-article', $event->getDisabledButtons(), true)) {
            return;
        }

        $this->loadLanguage();

        $document = $this->getApplication()->getDocument();
        $wa = $document->getWebAssetManager();

        $wa->registerAndUseScript(
            'plg_editors_xtd_wissenswerk.editor',
            'plg_editors_xtd_wissenswerk/editor.js',
            [],
            ['type' => 'module'],
            ['editors', 'joomla.dialog', 'webcomponent.media-select']
        );

        $wa->registerAndUseStyle(
            'plg_editors_xtd_wissenswerk.editor',
            'plg_editors_xtd_wissenswerk/editor.css'
        );

        $this->registerTinyMceBridge();

        // Same Media API options used by Joomla's own image editor button.
        $document->addScriptOptions(
            'media-picker-api',
            ['apiBaseUrl' => Uri::base(true) . '/index.php?option=com_media&format=json']
        );

        if (!$document->getScriptOptions('media-picker')) {
            $params = ComponentHelper::getParams('com_media');

            $document->addScriptOptions('media-picker', [
                'images'    => $this->extensionList($params->get('image_extensions', 'bmp,gif,jpg,jpeg,png,webp')),
                'audios'    => $this->extensionList($params->get('audio_extensions', 'mp3,m4a,mp4a,ogg')),
                'videos'    => $this->extensionList($params->get('video_extensions', 'mp4,mp4v,mpeg,mov,webm')),
                'documents' => $this->extensionList($params->get('doc_extensions', 'doc,odg,odp,ods,odt,pdf,ppt,txt,xcf,xls,csv')),
            ]);
        }

        Text::script('JCLOSE');
        Text::script('JSELECT');
        Text::script('PLG_IMAGE_BUTTON_INSERT');
        Text::script('PLG_EDITORS-XTD_WISSENSWERK');
        Text::script('JLIB_APPLICATION_ERROR_SERVER');

        $asset = $event->getAsset();
        $author = (int) $event->getAuthor();
        $editorId = $event->getEditorId();

        $mediaLink = 'index.php?option=com_media&view=media&tmpl=component'
            . '&e_name=' . rawurlencode($editorId)
            . '&asset=' . rawurlencode($asset)
            . '&mediatypes=0,1,2,3'
            . '&author=' . $author;

        // Keep the editor-specific Media dialog context available to the
        // separate TinyMCE WissensWerk menu. Multiple editors can exist on
        // the same page, therefore the data is indexed by editor ID.
        $editorOptions = $document->getScriptOptions('plg_editors_xtd_wissenswerk', []);
        $editorOptions['mediaLinks'] ??= [];
        $editorOptions['mediaLinks'][$editorId] = $mediaLink;
        $document->addScriptOptions('plg_editors_xtd_wissenswerk', $editorOptions, false);

        $buttonsRegistry = $event->getButtonsRegistry();
        $buttonsRegistry->add(
            new Button(
                'wissenswerk-article',
                [
                    'text'   => Text::_('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE'),
                    'icon'   => 'file-add',
                    'action' => 'wissenswerk-insert-article',
                ],
                [
                    'mediaLink' => $mediaLink,
                ]
            )
        );
    }


    /**
     * Register the small TinyMCE integration script.
     *
     * Joomla creates the final TinyMCE options while the editor field is
     * rendered. Therefore the integration must not try to modify the options
     * during onBeforeCompileHead. The bridge wraps setupEditor in JavaScript
     * immediately before Joomla creates the TinyMCE instance.
     */
    private function registerTinyMceBridge(): void
    {
        $document = $this->getApplication()->getDocument();
        $wa = $document->getWebAssetManager();

        $wa->registerAndUseScript(
            'plg_editors_xtd_wissenswerk.tinymce-bridge',
            'plg_editors_xtd_wissenswerk/tinymce-bridge.js',
            [],
            [],
            ['tinymce', 'plg_editors_tinymce', 'editors']
        );
    }

    private function extensionList(string $value): array
    {
        return array_values(array_filter(array_map('trim', explode(',', $value))));
    }
}
