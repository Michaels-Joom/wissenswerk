import { JoomlaEditor, JoomlaEditorButton } from 'editor-api';

import { registerArticleAction } from './blocks/article.js';
import { registerColumnsAction } from './blocks/columns.js';

registerArticleAction();
registerColumnsAction();

/*
 * TinyMCE external plugins are loaded as classic scripts.
 * This bridge keeps the actual actions inside Joomla's editor API
 * while allowing the dedicated WissensWerk TinyMCE menu to trigger
 * exactly the same actions.
 */
window.WissensWerkEditor = window.WissensWerkEditor || {};

window.WissensWerkEditor.runAction = (
    editorId,
    action,
    options = {}
) => {
    JoomlaEditor.setActive(editorId);
    JoomlaEditorButton.runAction(action, options);
};