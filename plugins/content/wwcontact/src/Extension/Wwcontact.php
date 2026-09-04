<?php

/**
 * @package     WissensWerk
 * @subpackage  plg_content_wwcontact
 */

namespace WissensWerk\Plugin\Content\Wwcontact\Extension;

defined('_JEXEC') or die;

use Joomla\CMS\Event\Model\PrepareFormEvent;
use Joomla\CMS\Plugin\CMSPlugin;
use Joomla\Event\SubscriberInterface;

/**
 * Extends the Joomla contact form with the required
 * privacy acknowledgement checkbox.
 */
final class Wwcontact extends CMSPlugin implements SubscriberInterface
{
    /**
     * Subscribe to the Joomla form preparation event.
     */
    public static function getSubscribedEvents(): array
    {
        return [
            'onContentPrepareForm' => 'addPrivacyField',
        ];
    }

    /**
     * Adds the privacy acknowledgement checkbox
     * to the frontend contact form.
     */
    public function addPrivacyField(PrepareFormEvent $event): void
    {
        // The plugin must only affect the site frontend.
        if (!$this->getApplication()->isClient('site')) {
            return;
        }

        $form = $event->getForm();

        // Only modify the Joomla contact form.
        if ($form->getName() !== 'com_contact.contact') {
            return;
        }

        // Prevent duplicate insertion.
        if ($form->getField('datenschutz')) {
            return;
        }

        $xml = new \SimpleXMLElement(
            '<field
                name="datenschutz"
                type="checkbox"
                label="Ich habe die Datenschutzhinweise zur Kenntnis genommen."
                value="1"
                required="true"
                class="required"
            />'
        );

        // Add the field to the existing contact fieldset.
        $form->setField(
            $xml,
            null,
            false,
            'contact'
        );
    }
}