import JoomlaDialog from 'joomla.dialog';
import { JoomlaEditor, JoomlaEditorButton } from 'editor-api';

const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const getValue = (root, selector) => root.querySelector(selector)?.value.trim() || '';

const getCheckedValue = (root, name) =>
    root.querySelector(`input[name="${name}"]:checked`)?.value || null;

const buildDialog = () => {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = `
        <div class="ww-editor-modal" role="dialog" aria-modal="true"
             aria-labelledby="ww-editor-modal-title">
            <div class="ww-editor-modal__backdrop"></div>
            <div class="ww-editor-modal__dialog">
                <div class="ww-editor-modal__header">
                    <h2 id="ww-editor-modal-title">WW Article – Split</h2>
                    <button type="button" class="ww-editor-modal__close"
                            aria-label="Dialog schließen">×</button>
                </div>

                <div class="ww-editor-modal__body">
                    <div class="ww-editor-field">
                        <label for="ww-article-eyebrow">WW Article Eyebrow</label>
                        <input id="ww-article-eyebrow" type="text">
                        <small>Optional</small>
                    </div>

                    <div class="ww-editor-field">
                        <label for="ww-article-heading">Überschrift</label>
                        <input id="ww-article-heading" type="text">
                        <small>Optional</small>
                    </div>

                    <div class="ww-editor-field">
                        <label for="ww-article-heading-level">Überschriftsebene</label>
                        <select id="ww-article-heading-level">
                            <option value="h2">H2</option>
                            <option value="h3" selected>H3</option>
                        </select>
                        <small>Nur relevant, wenn eine Überschrift angegeben wird.</small>
                    </div>

                    <div class="ww-editor-field">
                        <label for="ww-article-subtitle">Subtitel</label>
                        <input id="ww-article-subtitle" type="text">
                        <small>Optional</small>
                    </div>

                    <div class="ww-editor-field">
                        <label for="ww-article-content">Content <span>*</span></label>
                        <textarea id="ww-article-content" rows="6" required></textarea>
                    </div>

                    <fieldset class="ww-editor-field">
                        <legend>Media</legend>

                        <div class="ww-editor-media-row">
                            <input id="ww-article-image" type="text" readonly
                                   placeholder="Kein Bild ausgewählt">
                            <button type="button" class="btn btn-secondary" id="ww-article-select-media">
                                Aus Medien auswählen
                            </button>
                            <button type="button" class="btn btn-outline-secondary" id="ww-article-clear-media">
                                Löschen
                            </button>
                        </div>

                        <div class="ww-editor-field">
                            <label for="ww-article-alt">Alternativtext</label>
                            <input id="ww-article-alt" type="text">
                        </div>

                        <div class="ww-editor-options">
                            <div>
                                <span class="ww-editor-options__label">Position</span>
                                <label><input type="radio" name="ww-position" value="left" checked> links</label>
                                <label><input type="radio" name="ww-position" value="right"> rechts</label>
                            </div>

                            <div>
                                <span class="ww-editor-options__label">Größe</span>
                                <label><input type="radio" name="ww-size" value="s"> S</label>
                                <label><input type="radio" name="ww-size" value="m" checked> M</label>
                                <label><input type="radio" name="ww-size" value="l"> L</label>
                                <label><input type="radio" name="ww-size" value="xl"> XL</label>
                                <label><input type="radio" name="ww-size" value="full"> Full</label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="ww-editor-field">
                        <legend>Button</legend>
                        <label for="ww-article-button-text">Button-Text</label>
                        <input id="ww-article-button-text" type="text">

                        <div class="ww-editor-link-selection">
                            <label>Button-Ziel</label>
                            <div class="ww-editor-link-row">
                                <input id="ww-article-button-url" type="text"
                                       placeholder="URL oder ausgewählten Beitrag verwenden">
                                <button type="button" class="btn btn-secondary" id="ww-article-select">
                                    Beitrag auswählen
                                </button>
                                <button type="button" class="btn btn-outline-secondary" id="ww-article-clear-link">
                                    Löschen
                                </button>
                            </div>
                            <small>Für interne Links kann ein Joomla-Beitrag direkt ausgewählt werden. Eine manuelle URL bleibt ebenfalls möglich.</small>
                            <div id="ww-article-selected-title" class="ww-editor-selected-value" hidden></div>
                        </div>
                    </fieldset>

                    <p class="ww-editor-modal__error" hidden></p>
                </div>

                <div class="ww-editor-modal__footer">
                    <button type="button" class="btn btn-secondary" data-ww-cancel>Abbrechen</button>
                    <button type="button" class="btn btn-primary" data-ww-insert>Einfügen</button>
                </div>
            </div>
        </div>`;

    return wrapper.firstElementChild;
};

const createSectionMarkup = (data) => {
    const eyebrow = data.eyebrow
        ? `<p class="ww-eyebrow">${escapeHtml(data.eyebrow)}</p>\n`
        : '';

    const subtitle = data.subtitle
        ? `<p class="ww-article-subtitel">${escapeHtml(data.subtitle)}</p>\n`
        : '';

    const button = data.buttonText && data.buttonUrl
        ? `<a class="ww-button" href="${escapeHtml(data.buttonUrl)}">${escapeHtml(data.buttonText)}<span class="ww-button__icon" aria-hidden="true">→</span></a>\n`
        : '';

    const media = data.image
        ? `\n<div class="ww-article-split__media">\n<figure class="ww-article-media ww-article-media--${data.mediaSize}">\n<img src="${escapeHtml(data.image)}" alt="${escapeHtml(data.alt)}"${data.width ? ` width="${escapeHtml(data.width)}"` : ''}${data.height ? ` height="${escapeHtml(data.height)}"` : ''} loading="lazy">\n</figure>\n</div>`
        : '';

    const mediaClass = data.image ? ` ww-article-split--media-${data.position}` : '';

    const headingLevel = ['h2', 'h3'].includes(data.headingLevel)
        ? data.headingLevel
        : 'h3';

    const heading = data.heading
        ? `<${headingLevel}>${escapeHtml(data.heading)}</${headingLevel}>\n`
        : '';

    return `<section class="ww-article-split${mediaClass}">\n<div class="ww-article-split__content">\n${eyebrow}${heading}${subtitle}<p>${escapeHtml(data.content)}</p>\n${button}</div>${media}\n</section>`;
};


const buildColumnsDialog = () => {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = `
        <div class="ww-editor-modal" role="dialog" aria-modal="true"
             aria-labelledby="ww-columns-modal-title">
            <div class="ww-editor-modal__backdrop"></div>
            <div class="ww-editor-modal__dialog">
                <div class="ww-editor-modal__header">
                    <h2 id="ww-columns-modal-title">WW Article – Columns</h2>
                    <button type="button" class="ww-editor-modal__close"
                            aria-label="Dialog schließen">×</button>
                </div>

                <div class="ww-editor-modal__body">
                    <div class="ww-editor-field">
                        <label for="ww-columns-heading">Überschrift</label>
                        <input id="ww-columns-heading" type="text">
                        <small>Optional</small>
                    </div>

                    <div class="ww-editor-field">
                        <label for="ww-columns-heading-level">Überschriftsebene</label>
                        <select id="ww-columns-heading-level">
                            <option value="h2">H2</option>
                            <option value="h3" selected>H3</option>
                        </select>
                    </div>

                    <div class="ww-editor-field">
                        <label for="ww-columns-subtitle">Untertitel</label>
                        <input id="ww-columns-subtitle" type="text">
                        <small>Optional</small>
                    </div>

                    <div class="ww-editor-field">
                        <label for="ww-columns-content">Content <span>*</span></label>
                        <textarea id="ww-columns-content" rows="6" required></textarea>
                    </div>

                    <fieldset class="ww-editor-field">
                        <legend>Icon</legend>

                        <div class="ww-editor-media-row">
                            <input id="ww-columns-image" type="text" readonly
                                   placeholder="Kein Icon ausgewählt">
                            <button type="button" class="btn btn-secondary" id="ww-columns-select-media">
                                Aus Medien auswählen
                            </button>
                            <button type="button" class="btn btn-outline-secondary" id="ww-columns-clear-media">
                                Löschen
                            </button>
                        </div>

                        <div class="ww-editor-field">
                            <label for="ww-columns-alt">Alternativtext</label>
                            <input id="ww-columns-alt" type="text">
                            <small>Bei rein dekorativen Icons leer lassen.</small>
                        </div>

                        <div class="ww-editor-options">
                            <div>
                                <span class="ww-editor-options__label">Position</span>
                                <label><input type="radio" name="ww-columns-position" value="left"> links</label>
                                <label><input type="radio" name="ww-columns-position" value="center" checked> mitte</label>
                                <label><input type="radio" name="ww-columns-position" value="right"> rechts</label>
                            </div>

                            <div>
                                <span class="ww-editor-options__label">Größe</span>
                                <label><input type="radio" name="ww-columns-size" value="s"> S</label>
                                <label><input type="radio" name="ww-columns-size" value="m" checked> M</label>
                                <label><input type="radio" name="ww-columns-size" value="l"> L</label>
                                <label><input type="radio" name="ww-columns-size" value="xl"> XL</label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="ww-editor-field">
                        <legend>Farbe</legend>

                        <div class="ww-editor-options">
                            <label><input type="radio" name="ww-columns-color" value="color-1" checked> Farbe 1</label>
                            <label><input type="radio" name="ww-columns-color" value="color-2"> Farbe 2</label>
                            <label><input type="radio" name="ww-columns-color" value="color-3"> Farbe 3</label>
                            <label><input type="radio" name="ww-columns-color" value="color-4"> Farbe 4</label>
                            <label><input type="radio" name="ww-columns-color" value="transparent"> Transparent</label>
                        </div>
                    </fieldset>

                    <fieldset class="ww-editor-field">
                        <legend>Rahmen</legend>

                        <div class="ww-editor-options">
                            <label><input type="radio" name="ww-columns-border" value="no" checked> Nein</label>
                            <label><input type="radio" name="ww-columns-border" value="yes"> Ja</label>
                        </div>
                    </fieldset>

                    <fieldset class="ww-editor-field">
                        <legend>Link</legend>

                        <label for="ww-columns-link-text">Linktext</label>
                        <input id="ww-columns-link-text" type="text">

                        <div class="ww-editor-link-selection">
                            <label>Link-Ziel</label>
                            <div class="ww-editor-link-row">
                                <input id="ww-columns-link-url" type="text"
                                       placeholder="Beitrag auswählen" readonly>
                                <button type="button" class="btn btn-secondary" id="ww-columns-select-article">
                                    Beitrag auswählen
                                </button>
                                <button type="button" class="btn btn-outline-secondary" id="ww-columns-clear-link">
                                    Löschen
                                </button>
                            </div>
                            <small>Der Link führt auf einen ausgewählten Joomla-Beitrag.</small>
                            <div id="ww-columns-selected-title" class="ww-editor-selected-value" hidden></div>
                        </div>
                    </fieldset>

                    <p class="ww-editor-modal__error" hidden></p>
                </div>

                <div class="ww-editor-modal__footer">
                    <button type="button" class="btn btn-secondary" data-ww-columns-cancel>Verwerfen</button>
                    <button type="button" class="btn btn-primary" data-ww-columns-next>Nächste Karte</button>
                    <button type="button" class="btn btn-primary" data-ww-columns-finish>Fertig</button>
                </div>
            </div>
        </div>`;

    return wrapper.firstElementChild;
};

const createColumnCardMarkup = (data) => {
    const headingLevel = ['h2', 'h3'].includes(data.headingLevel)
        ? data.headingLevel
        : 'h3';

    const heading = data.heading
        ? `<${headingLevel}>${escapeHtml(data.heading)}</${headingLevel}>\n`
        : '';

    const subtitle = data.subtitle
        ? `<p class="ww-article-column-subtitel">${escapeHtml(data.subtitle)}</p>\n`
        : '';

    const image = data.image
        ? `<figure class="ww-article-column__media ww-article-column__media--${data.iconSize}">\n<img src="${escapeHtml(data.image)}" alt="${escapeHtml(data.alt)}"${data.width ? ` width="${escapeHtml(data.width)}"` : ''}${data.height ? ` height="${escapeHtml(data.height)}"` : ''} loading="lazy">\n</figure>\n`
        : '';

    const positionClass = ` ww-article-column--icon-${data.position}`;
    const colorClass = data.color === 'transparent'
        ? ' ww-article-column--transparent'
        : ` ww-article-column--${data.color || 'color-1'}`;
    const borderClass = data.border === 'yes'
        ? ' ww-article-column--border'
        : '';

    const link = data.linkText && data.linkUrl
        ? `<a class="ww-article-column__link" href="${escapeHtml(data.linkUrl)}">${escapeHtml(data.linkText)}</a>\n`
        : '';

    return `<article class="ww-article-column${positionClass}${colorClass}${borderClass}">\n${image}<div class="ww-article-column__content">\n${heading}${subtitle}<p>${escapeHtml(data.content)}</p>\n${link}</div>\n</article>`;
};

const createColumnsSectionMarkup = (cardMarkup) =>
    `<section class="ww-article-columns">\n${cardMarkup}\n</section>`;

const appendColumnCard = (editor, sectionMarkup, cardMarkup) => {
    const content = typeof editor.getValue === 'function'
        ? editor.getValue()
        : '';

    if (!sectionMarkup) {
        editor.setValue(createColumnsSectionMarkup(cardMarkup));
        return createColumnsSectionMarkup(cardMarkup);
    }

    const closingTag = '</section>';
    const lastClosingTag = content.lastIndexOf(closingTag);

    if (lastClosingTag === -1) {
        editor.setValue(`${content.trimEnd()}\n${sectionMarkup}`);
        return sectionMarkup;
    }

    const insertAt = lastClosingTag;
    const before = content.slice(0, insertAt).replace(/\s*$/, '');
    const after = content.slice(insertAt).replace(/^\s*/, '');
    const updatedSection = sectionMarkup.replace(/\n<\/section>$/, `\n${cardMarkup}\n</section>`);

    // Replace the section we created in this dialog rather than relying on the
    // editor cursor. The first card therefore establishes the section and all
    // following cards remain inside that same section.
    const sectionStart = content.lastIndexOf('<section class="ww-article-columns">', insertAt);

    if (sectionStart === -1) {
        editor.setValue(`${before}\n${cardMarkup}\n${after}`);
        return sectionMarkup;
    }

    const sectionEnd = lastClosingTag + closingTag.length;
    const existingSection = content.slice(sectionStart, sectionEnd);
    const newSection = existingSection.replace(/\s*<\/section>$/, `\n${cardMarkup}\n</section>`);

    editor.setValue(
        `${content.slice(0, sectionStart)}${newSection}${content.slice(sectionEnd)}`
    );

    return newSection;
};

const openColumnsDialog = (editor, options = {}) => {
    const modal = buildColumnsDialog();
    document.body.append(modal);

    let hasCreatedCard = false;
    let columnsSectionMarkup = '';

    const close = () => modal.remove();

    const resetFields = () => {
        modal.querySelector('#ww-columns-heading').value = '';
        modal.querySelector('#ww-columns-heading-level').value = 'h3';
        modal.querySelector('#ww-columns-subtitle').value = '';
        modal.querySelector('#ww-columns-content').value = '';
        modal.querySelector('#ww-columns-alt').value = '';
        modal.querySelector('#ww-columns-link-text').value = '';
        modal.querySelector('#ww-columns-link-url').value = '';

        const defaultColor = modal.querySelector('input[name="ww-columns-color"][value="color-1"]');
        if (defaultColor) {
            defaultColor.checked = true;
        }

        const defaultBorder = modal.querySelector('input[name="ww-columns-border"][value="no"]');
        if (defaultBorder) {
            defaultBorder.checked = true;
        }

        const selectedTitle = modal.querySelector('#ww-columns-selected-title');
        selectedTitle.textContent = '';
        selectedTitle.hidden = true;

        const image = modal.querySelector('#ww-columns-image');
        image.value = '';
        delete image.dataset.path;
        delete image.dataset.width;
        delete image.dataset.height;

        modal.querySelector('input[name="ww-columns-position"][value="center"]').checked = true;
        modal.querySelector('input[name="ww-columns-size"][value="m"]').checked = true;
        modal.querySelector('.ww-editor-modal__error').hidden = true;
    };

    const getCardData = () => {
        const imageInput = modal.querySelector('#ww-columns-image');

        return {
            heading: getValue(modal, '#ww-columns-heading'),
            headingLevel: getValue(modal, '#ww-columns-heading-level') || 'h3',
            subtitle: getValue(modal, '#ww-columns-subtitle'),
            content: getValue(modal, '#ww-columns-content'),
            image: imageInput.value,
            path: imageInput.dataset.path || imageInput.value,
            width: imageInput.dataset.width || '',
            height: imageInput.dataset.height || '',
            alt: getValue(modal, '#ww-columns-alt'),
            linkText: getValue(modal, '#ww-columns-link-text'),
            linkUrl: getValue(modal, '#ww-columns-link-url'),
            color: getCheckedValue(modal, 'ww-columns-color') || 'color-1',
            border: getCheckedValue(modal, 'ww-columns-border') || 'no',
            position: getCheckedValue(modal, 'ww-columns-position') || 'center',
            iconSize: getCheckedValue(modal, 'ww-columns-size') || 'm',
        };
    };

    const validate = (data) => {
        const error = modal.querySelector('.ww-editor-modal__error');

        if (!data.content) {
            error.textContent = 'Content ist erforderlich.';
            error.hidden = false;
            return false;
        }

        if (data.linkText && !data.linkUrl) {
            error.textContent = 'Für den Linktext muss auch ein Link-Ziel ausgewählt werden.';
            error.hidden = false;
            return false;
        }

        if (data.linkUrl && !data.linkText) {
            error.textContent = 'Für ein Link-Ziel muss auch ein Linktext angegeben werden.';
            error.hidden = false;
            return false;
        }

        error.hidden = true;
        return true;
    };

    const insertNextCard = () => {
        const data = getCardData();

        if (!validate(data)) {
            return;
        }

        const cardMarkup = createColumnCardMarkup(data);

        if (!hasCreatedCard) {
            columnsSectionMarkup = createColumnsSectionMarkup(cardMarkup);
            appendSectionAfterLastSection(editor, columnsSectionMarkup);
            hasCreatedCard = true;
        } else {
            columnsSectionMarkup = appendColumnCard(editor, columnsSectionMarkup, cardMarkup);
        }

        resetFields();
        modal.querySelector('#ww-columns-heading').focus();
    };

    const finish = () => {
        // "Fertig" accepts the card currently entered, if there is one,
        // and then ends the section-building operation.
        const data = getCardData();
        const hasCurrentCardContent = Boolean(
            data.content || data.heading || data.subtitle || data.image
        );

        if (hasCurrentCardContent) {
            if (!validate(data)) {
                return;
            }

            const cardMarkup = createColumnCardMarkup(data);

            if (!hasCreatedCard) {
                columnsSectionMarkup = createColumnsSectionMarkup(cardMarkup);
                appendSectionAfterLastSection(editor, columnsSectionMarkup);
                hasCreatedCard = true;
            } else {
                columnsSectionMarkup = appendColumnCard(editor, columnsSectionMarkup, cardMarkup);
            }
        }

        // The generated section markup is already closed. "Fertig" therefore
        // only ends the current dialog/section-building operation.
        close();
    };

    const discard = () => {
        // The current, not-yet-created card is discarded. Cards that were
        // already created remain untouched. If cards exist, their section
        // markup is already closed in the editor content.
        close();
    };

    modal.querySelector('.ww-editor-modal__close').addEventListener('click', discard);
    modal.querySelector('[data-ww-columns-cancel]').addEventListener('click', discard);
    modal.querySelector('[data-ww-columns-finish]').addEventListener('click', finish);
    modal.querySelector('.ww-editor-modal__backdrop').addEventListener('click', discard);
    modal.querySelector('[data-ww-columns-next]').addEventListener('click', insertNextCard);

    modal.querySelector('#ww-columns-select-media').addEventListener('click', () => {
        openMediaSelector(modal, options.mediaLink, (media) => {
            const image = modal.querySelector('#ww-columns-image');
            image.value = media.url || media.path;
            image.dataset.path = media.path;
            image.dataset.width = media.width || '';
            image.dataset.height = media.height || '';
        });
    });

    modal.querySelector('#ww-columns-clear-media').addEventListener('click', () => {
        const image = modal.querySelector('#ww-columns-image');
        image.value = '';
        delete image.dataset.path;
        delete image.dataset.width;
        delete image.dataset.height;
    });

    modal.querySelector('#ww-columns-select-article').addEventListener('click', () => {
        openArticleSelector(async (data) => {
            const selected = modal.querySelector('#ww-columns-selected-title');
            selected.textContent = data.title || `Beitrag #${data.id}`;
            selected.hidden = false;

            try {
                const response = await fetch(
                    `index.php?option=com_ajax&plugin=wissenswerkroute&format=json&id=${encodeURIComponent(data.id)}`,
                    {
                        method: 'GET',
                        credentials: 'same-origin',
                        headers: {
                            Accept: 'application/json',
                        },
                    }
                );

                const result = await response.json();

                if (!response.ok || !result.success || !result.data) {
                    throw new Error(result.message || 'Die Joomla-URL konnte nicht ermittelt werden.');
                }

                modal.querySelector('#ww-columns-link-url').value = result.data;
            } catch (error) {
                modal.querySelector('#ww-columns-link-url').value = '';
                selected.textContent = `${data.title || `Beitrag #${data.id}`} – URL konnte nicht ermittelt werden`;
                console.error('WissensWerk Routing:', error);
            }
        });
    });

    modal.querySelector('#ww-columns-clear-link').addEventListener('click', () => {
        modal.querySelector('#ww-columns-link-url').value = '';
        const selected = modal.querySelector('#ww-columns-selected-title');
        selected.textContent = '';
        selected.hidden = true;
    });

    modal.querySelector('#ww-columns-content').addEventListener('input', () => {
        modal.querySelector('.ww-editor-modal__error').hidden = true;
    });

    modal.querySelector('#ww-columns-heading').focus();
};

const openMediaSelector = (modal, mediaLink, onSelect) => {
    const dialog = new JoomlaDialog({
        popupType: 'iframe',
        textHeader: Joomla.Text._('PLG_IMAGE_BUTTON_IMAGE') || 'Medien',
        iconHeader: 'icon-pictures',
        src: mediaLink,
        width: '90vw',
        height: '80vh',
        popupButtons: [
            {
                label: Joomla.Text._('JSELECT'),
                className: 'button button-success btn btn-success',
                location: 'header',
                onClick: async () => {
                    const selected = Joomla.selectedMediaFile;

                    if (!selected?.path) {
                        return;
                    }

                    try {
                        let capturedImage = '';

                        // Let Joomla's own media resolver/API process the selected file.
                        // We provide a tiny editor adapter that captures the HTML Joomla
                        // would normally insert into TinyMCE.
                        const captureEditor = {
                            replaceSelection: (html) => {
                                capturedImage = html;
                            },
                        };

                        await Joomla.getMedia(selected, captureEditor);

                        onSelect({
                            path: selected.path,
                            url: Joomla.selectedMediaFile.url || selected.path,
                            width: Joomla.selectedMediaFile.width || 0,
                            height: Joomla.selectedMediaFile.height || 0,
                            html: capturedImage,
                        });

                        dialog.close();
                    } catch (error) {
                        Joomla.renderMessages({
                            error: [Joomla.Text._('JLIB_APPLICATION_ERROR_SERVER')],
                        });
                    } finally {
                        Joomla.selectedMediaFile = {};
                    }
                },
            },
            {
                label: '',
                ariaLabel: Joomla.Text._('JCLOSE'),
                className: 'button-close btn-close',
                data: {
                    buttonClose: '',
                    dialogClose: '',
                },
                location: 'header',
            },
        ],
    });

    dialog.addEventListener('joomla-dialog:close', () => {
        Joomla.Modal.setCurrent(null);
        dialog.destroy();
    }, { once: true });

    Joomla.Modal.setCurrent(dialog);
    dialog.show();
};

const openArticleSelector = (onSelect) => {
    const url = 'index.php?option=com_content&view=articles&tmpl=component&layout=modal';

    const dialog = new JoomlaDialog({
        popupType: 'iframe',
        textHeader: 'Beitrag auswählen',
        src: url,
        width: '90vw',
        height: '80vh',
    });

    const receiveMessage = (event) => {
        if (event.origin !== window.location.origin) {
            return;
        }

        const data = event.data || {};

        if (data.messageType !== 'joomla:content-select' || !data.id) {
            return;
        }

        onSelect(data);
        dialog.close();
        window.removeEventListener('message', receiveMessage);
    };

    window.addEventListener('message', receiveMessage);
    dialog.addEventListener('joomla-dialog:close', () => {
        window.removeEventListener('message', receiveMessage);
    }, { once: true });

    dialog.show();
};

/**
 * Append a WW Article section after the last closing </section> of the
 * current article content.
 *
 * WW Article blocks are independent sections inside a Joomla article.
 * Therefore we deliberately do not use replaceSelection() here: the
 * insertion position must not depend on where the cursor happens to be.
 *
 * @param {object} editor Joomla Editor API instance
 * @param {string} sectionMarkup Generated WW section markup
 * @returns {void}
 */
const appendSectionAfterLastSection = (editor, sectionMarkup) => {
    const content = typeof editor.getValue === 'function'
        ? editor.getValue()
        : '';

    if (!content.trim()) {
        editor.setValue(sectionMarkup);
        return;
    }

    const closingTag = '</section>';
    const lastClosingTag = content.toLowerCase().lastIndexOf(closingTag);

    if (lastClosingTag === -1) {
        editor.setValue(`${content.trimEnd()}\n${sectionMarkup}`);
        return;
    }

    const insertAt = lastClosingTag + closingTag.length;
    const before = content.slice(0, insertAt).replace(/\s*$/, '');
    const after = content.slice(insertAt).replace(/^\s*/, '');

    editor.setValue(
        after
            ? `${before}\n${sectionMarkup}\n${after}`
            : `${before}\n${sectionMarkup}`
    );
};

const openDialog = (editor, options = {}) => {
    const modal = buildDialog();
    document.body.append(modal);

    const close = () => modal.remove();

    modal.querySelector('.ww-editor-modal__close').addEventListener('click', close);
    modal.querySelector('[data-ww-cancel]').addEventListener('click', close);
    modal.querySelector('.ww-editor-modal__backdrop').addEventListener('click', close);

    modal.querySelector('#ww-article-select-media').addEventListener('click', () => {
        openMediaSelector(modal, options.mediaLink, (media) => {
            modal.querySelector('#ww-article-image').value = media.url || media.path;
            modal.querySelector('#ww-article-image').dataset.path = media.path;
            modal.querySelector('#ww-article-image').dataset.width = media.width || '';
            modal.querySelector('#ww-article-image').dataset.height = media.height || '';
        });
    });

    modal.querySelector('#ww-article-clear-media').addEventListener('click', () => {
        const image = modal.querySelector('#ww-article-image');
        image.value = '';
        delete image.dataset.path;
        delete image.dataset.width;
        delete image.dataset.height;
    });

    modal.querySelector('#ww-article-select').addEventListener('click', () => {
        openArticleSelector(async (data) => {
            const selected = modal.querySelector('#ww-article-selected-title');
            selected.textContent = data.title || `Beitrag #${data.id}`;
            selected.hidden = false;

            try {
                const response = await fetch(
                    `index.php?option=com_ajax&plugin=wissenswerkroute&format=json&id=${encodeURIComponent(data.id)}`,
                    {
                        method: 'GET',
                        credentials: 'same-origin',
                        headers: {
                            Accept: 'application/json',
                        },
                    }
                );

                const result = await response.json();

                if (!response.ok || !result.success || !result.data) {
                    throw new Error(result.message || 'Die Joomla-URL konnte nicht ermittelt werden.');
                }

                modal.querySelector('#ww-article-button-url').value = result.data;
            } catch (error) {
                modal.querySelector('#ww-article-button-url').value = '';
                selected.textContent = `${data.title || `Beitrag #${data.id}`} – URL konnte nicht ermittelt werden`;
                console.error('WissensWerk Routing:', error);
            }
        });
    });

    modal.querySelector('#ww-article-clear-link').addEventListener('click', () => {
        modal.querySelector('#ww-article-button-url').value = '';
        const selected = modal.querySelector('#ww-article-selected-title');
        selected.textContent = '';
        selected.hidden = true;
    });

    modal.querySelector('[data-ww-insert]').addEventListener('click', () => {
        const imageInput = modal.querySelector('#ww-article-image');

        const data = {
            eyebrow: getValue(modal, '#ww-article-eyebrow'),
            heading: getValue(modal, '#ww-article-heading'),
            headingLevel: getValue(modal, '#ww-article-heading-level') || 'h3',
            subtitle: getValue(modal, '#ww-article-subtitle'),
            content: getValue(modal, '#ww-article-content'),
            image: imageInput.value,
            path: imageInput.dataset.path || imageInput.value,
            width: imageInput.dataset.width || '',
            height: imageInput.dataset.height || '',
            alt: getValue(modal, '#ww-article-alt'),
            position: getCheckedValue(modal, 'ww-position') || 'left',
            mediaSize: getCheckedValue(modal, 'ww-size') || 'm',
            buttonText: getValue(modal, '#ww-article-button-text'),
            buttonUrl: getValue(modal, '#ww-article-button-url'),
        };

        const error = modal.querySelector('.ww-editor-modal__error');

        if (!data.content) {
            error.textContent = 'Content ist erforderlich.';
            error.hidden = false;
            return;
        }

        if (data.buttonText && !data.buttonUrl) {
            error.textContent = 'Für den Button-Text muss auch ein Button-Ziel angegeben werden.';
            error.hidden = false;
            return;
        }

        if (data.buttonUrl && !data.buttonText) {
            error.textContent = 'Für ein Button-Ziel muss auch ein Button-Text angegeben werden.';
            error.hidden = false;
            return;
        }

        const sectionMarkup = createSectionMarkup(data);
        appendSectionAfterLastSection(editor, sectionMarkup);
        close();
    });

    modal.querySelector('#ww-article-heading').focus();
};

JoomlaEditorButton.registerAction('wissenswerk-insert-article', (editor, options) => {
    openDialog(editor, options);
});

JoomlaEditorButton.registerAction('wissenswerk-insert-columns-card', (editor, options) => {
    openColumnsDialog(editor, options);
});

// TinyMCE external plugins are loaded as classic scripts. This small bridge
// keeps the actual action inside Joomla's editor API while allowing the
// dedicated WissensWerk TinyMCE menu to trigger exactly the same action.
window.WissensWerkEditor = window.WissensWerkEditor || {};
window.WissensWerkEditor.runAction = (editorId, action, options = {}) => {
    JoomlaEditor.setActive(editorId);
    JoomlaEditorButton.runAction(action, options);
};
