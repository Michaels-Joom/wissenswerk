# TS-002 – Joomla `com_contact`: Custom Field im Frontend-Kontaktformular

## WissensWerk Design System

**Datei:** `TS-002-contact-form-custom-field.md`  
**Bereich:** Development / Troubleshooting  
**Status:** Gelöst  
**Zielplattform:** Joomla 5.x

---

## 1. Problem

Für das WissensWerk-Kontaktformular sollte eine verpflichtende Datenschutz-Checkbox ergänzt werden:

> Ich habe die Datenschutzhinweise zur Kenntnis genommen.

Der erste Ansatz bestand darin, ein Joomla-Custom-Field für das Kontaktformular anzulegen.

Das Feld wurde im Joomla-Backend korrekt angelegt und war dort sichtbar. Im Frontend-Kontaktformular erschien es jedoch nicht.

Die zentrale Frage war daher:

**Warum existiert das Custom Field in Joomla, ist aber nicht Bestandteil des Frontend-Formulars von `com_contact`?**

---

## 2. Ausgangskonfiguration

Das Custom Field wurde mit folgenden Eigenschaften angelegt:

- Titel: `Datenschutz`
- Name: `datenschutz`
- Feldtyp: Checkbox
- Pflichtfeld: Ja
- Zugriff: Public
- Feldgruppe: `Kontaktformular`
- Checkbox-Text:
  `Ich habe die Datenschutzhinweise zur Kenntnis genommen.`

Das Feld war im Joomla-Kontaktbereich vorhanden und konnte dort angezeigt bzw. bearbeitet werden.

Im Frontend war es trotzdem nicht Bestandteil des Kontaktformulars.

---

## 3. Erste Diagnose

Um festzustellen, welche Felder tatsächlich Bestandteil des Frontend-JForm sind, wurde vorübergehend eine Diagnoseausgabe in:

```text
templates/wissenswerk/html/com_contact/contact/default_form.php
```

eingebaut.

Ausgegeben wurden die geladenen Fieldsets und deren Felder.

### Ergebnis vor der Plugin-Lösung

```text
FIELDSET: contact
FIELD: jform[spacer]
FIELD: jform[contact_name]
FIELD: jform[contact_email]
FIELD: jform[contact_subject]
FIELD: jform[contact_message]

FIELDSET: captcha
```

Das Feld

```text
jform[datenschutz]
```

war nicht vorhanden.

Damit war ausgeschlossen, dass lediglich die Darstellung im Template fehlte.

**Das Feld war bereits auf JForm-Ebene nicht Bestandteil des Frontend-Formulars.**

---

## 4. Untersuchung der Joomla-Formulararchitektur

Die weitere Untersuchung konzentrierte sich auf die Joomla-Core-Struktur von `com_contact`.

### `ContactModel::getForm()`

Das Kontaktmodell lädt das Formular über:

```php
$this->loadForm(
    'com_contact.contact',
    'contact',
    [
        'control'   => 'jform',
        'load_data' => $loadData
    ]
);
```

Damit ist das relevante Frontend-Formular:

```text
com_contact.contact
```

### `forms/contact.xml`

Die Core-Formulardefinition enthält die eigentlichen Kontaktfelder, unter anderem:

```text
contact_name
contact_email
contact_subject
contact_message
captcha
```

Das zuvor angelegte Custom Field `datenschutz` war dort nicht definiert.

---

## 5. Wichtige Erkenntnis

Die Untersuchung zeigte einen wichtigen Unterschied innerhalb von `com_contact`.

Joomla verarbeitet Custom Fields für die Kontakt-Mail zwar beim Versand, aber das bedeutet nicht automatisch, dass ein beliebiges Custom Field Bestandteil des geladenen Frontend-JForm-Objekts `com_contact.contact` wird.

Für die gewünschte Datenschutz-Checkbox benötigen wir aber genau das:

```text
Frontend
    ↓
JForm
    ↓
datenschutz
    ↓
required
    ↓
Validierung
```

Ein bloß vorhandenes Custom Field reicht dafür in diesem Fall nicht aus.

---

## 6. Lösung: eigenes Content-Plugin

Statt die Core-Komponente zu verändern, wurde ein kleines projektbezogenes Joomla-Content-Plugin angelegt:

```text
plg_content_wwcontact
```

Struktur:

```text
plugins/
└── content/
    └── wwcontact/
        ├── services/
        │   └── provider.php
        ├── src/
        │   └── Extension/
        │       └── Wwcontact.php
        └── wwcontact.xml
```

Das Plugin verwendet das Joomla-Event:

```text
onContentPrepareForm
```

---

## 7. Funktionsweise des Plugins

Das Plugin prüft zunächst, ob es sich um das Frontend handelt:

```php
if (!$this->getApplication()->isClient('site')) {
    return;
}
```

Danach wird ausschließlich das Kontaktformular von `com_contact` angesprochen:

```php
if ($form->getName() !== 'com_contact.contact') {
    return;
}
```

Anschließend wird geprüft, ob das Feld bereits vorhanden ist:

```php
if ($form->getField('datenschutz')) {
    return;
}
```

Danach wird ein normales Joomla-JForm-Checkboxfeld dynamisch erzeugt und dem vorhandenen `contact`-Fieldset hinzugefügt.

Grunddefinition:

```xml
<field
    name="datenschutz"
    type="checkbox"
    label="Ich habe die Datenschutzhinweise zur Kenntnis genommen."
    value="1"
    required="true"
    class="required"
/>
```

---

## 8. Ergebnis der zweiten Diagnose

Nach Aktivierung des Plugins wurde die gleiche Diagnose erneut durchgeführt.

Jetzt enthielt das Frontend-JForm zusätzlich:

```text
FIELD: jform[datenschutz]
```

Damit war eindeutig nachgewiesen:

```text
com_contact.contact
        ↓
onContentPrepareForm
        ↓
plg_content_wwcontact
        ↓
datenschutz
        ↓
JForm
```

Das Plugin erweitert also tatsächlich das vom Kontaktformular verwendete JForm.

---

## 9. Zweites Problem: Checkbox wurde als Textfeld dargestellt

Nach erfolgreicher Einbindung des Feldes erschien zunächst kein sichtbares Checkbox-Symbol.

Das Feld sah stattdessen wie ein normales Texteingabefeld aus.

Die Untersuchung mit den Browser-Entwicklertools zeigte jedoch:

```html
<input
    type="checkbox"
    name="jform[datenschutz]"
    id="jform_datenschutz"
    class="form-check-input"
    required
    value="1"
>
```

Damit war klar:

**Joomla erzeugte korrekt eine Checkbox.**

Das Problem lag nicht im Plugin und nicht in JForm.

---

## 10. Ursache: globale Formular-CSS-Regel

Die Ursache wurde in:

```text
media/templates/site/wissenswerk/scss/base/_forms.scss
```

gefunden.

Die ursprüngliche Regel lautete sinngemäß:

```scss
input,
select,
textarea {

    width: 100%;

    padding: var(--ww-space-3);

    border: 1px solid var(--ww-color-border);

    appearance: none;

}
```

Diese Regel traf auch auf:

```html
<input type="checkbox">
```

zu.

Dadurch erhielt die Checkbox unter anderem:

- `width: 100%`
- Padding wie ein Textfeld
- einen Textfeld-Rahmen
- `appearance: none`

Die native bzw. Bootstrap-basierte Checkboxdarstellung wurde dadurch unbeabsichtigt überschrieben.

---

## 11. CSS-Korrektur

Die allgemeine Eingaberegel wurde deshalb auf tatsächliche Text-/Auswahlfelder eingeschränkt:

```scss
input:not([type="checkbox"]):not([type="radio"]),
select,
textarea {

    box-sizing: border-box;

    width: 100%;

    max-width: 100%;

    padding: var(--ww-space-3);

    color: inherit;

    background-color: transparent;

    border: 1px solid var(--ww-color-border);

    border-radius: var(--ww-radius-sm);

    transition:
        border-color var(--ww-transition-fast),
        box-shadow var(--ww-transition-fast);

    appearance: none;

}
```

Checkboxen und Radiobuttons werden damit nicht mehr von der allgemeinen Textfeldregel erfasst.

Die Bootstrap-Klasse:

```text
form-check-input
```

kann dadurch wieder für die Checkboxdarstellung verwendet werden.

---

## 12. Warum kein Core-Hack verwendet wurde

Die Lösung verändert keine Joomla-Core-Dateien.

Nicht verändert werden:

```text
components/com_contact/...
```

Stattdessen werden die vorgesehenen Erweiterungspunkte verwendet:

```text
Joomla Event
    ↓
Content Plugin
    ↓
JForm
```

und:

```text
Template Override
    ↓
Darstellung
```

Das entspricht der WissensWerk-Grundregel:

> Core-Dateien niemals ändern.

---

## 13. Warum das Custom Field nicht die endgültige Lösung ist

Das ursprünglich angelegte Custom Field `Datenschutz` war für den Test hilfreich, ist für die aktuelle technische Lösung aber nicht erforderlich.

Nach erfolgreichem Abschluss der Funktionstests kann es entfernt werden.

Die eigentliche Frontend-Checkbox wird durch:

```text
plg_content_wwcontact
```

bereitgestellt.

Damit gibt es nur noch eine technische Quelle für das Feld und keine doppelte Konfiguration.

---

## 14. Temporäre Diagnose entfernen

Während der Untersuchung wurde `default_form.php` vorübergehend um eine Diagnoseausgabe erweitert.

Diese Ausgabe darf nicht dauerhaft im produktiven Template verbleiben.

Vor dem Abschluss der Kontaktformular-Implementierung muss geprüft werden, dass keine Diagnoseausgabe wie:

```text
FIELDSET:
FIELD:
```

mehr vorhanden ist.

---

## 15. Lessons Learned

### 15.1 Custom Field ist nicht automatisch Frontend-JForm

Ein in Joomla vorhandenes Custom Field muss nicht automatisch Bestandteil des konkreten Frontend-Formulars sein.

Entscheidend ist:

```text
Welches JForm lädt die Komponente?
```

und:

```text
Welche Felder enthält dieses JForm tatsächlich?
```

---

### 15.2 Erst JForm prüfen, dann Template prüfen

Wenn ein Feld im Frontend fehlt, sollte die Diagnose in dieser Reihenfolge erfolgen:

```text
Custom Field vorhanden?
        ↓
Wird es in JForm geladen?
        ↓
Wird es im Template gerendert?
        ↓
Wird es durch CSS korrekt dargestellt?
```

Damit lässt sich die Fehlerquelle systematisch eingrenzen.

---

### 15.3 DOM und JForm sind unterschiedliche Diagnoseebenen

Die JForm-Diagnose zeigte zunächst:

```text
datenschutz fehlt
```

Nach der Plugin-Erweiterung zeigte sie:

```text
datenschutz vorhanden
```

Die anschließende DOM-Prüfung zeigte:

```html
type="checkbox"
```

Damit konnten PHP/JForm und CSS getrennt betrachtet werden.

---

### 15.4 Globale CSS-Regeln für `input` sind gefährlich

Eine Regel wie:

```scss
input {
    width: 100%;
    appearance: none;
}
```

kann unbeabsichtigt auch auf:

- Checkboxen
- Radiobuttons
- andere Custom Controls

wirken.

Bei einem Design System sollten unterschiedliche Eingabetypen deshalb bewusst voneinander getrennt werden.

---

### 15.5 Kleine Anforderungen brauchen nicht automatisch eine große Erweiterung

Für die aktuelle Anforderung reicht:

```text
Joomla com_contact
+
kleines Content-Plugin
+
Template Override
+
Design-System-CSS
```

Ein vollständiges Formular-Framework wäre für diese einzelne Anforderung architektonisch unverhältnismäßig.

---

## 16. Verweise

Technische Umsetzung:

```text
DV012-contact-form.md
```

Architekturentscheidung:

```text
ADR-009 – Umgang mit Kontaktanfragen und personenbezogenen Daten
```

Betroffene Joomla-Dateien im Projekt:

```text
plugins/content/wwcontact/
templates/wissenswerk/html/com_contact/contact/default_form.php
media/templates/site/wissenswerk/scss/base/_forms.scss
```

---

## 17. Status

**Problem gelöst.**

Das Joomla-Frontend-Kontaktformular kann über das projektbezogene Plugin um ein verpflichtendes JForm-Checkboxfeld erweitert werden.

Der nächste technische Schritt ist der praktische Validierungstest:

1. Checkbox nicht auswählen → Formular darf nicht erfolgreich versendet werden.
2. Checkbox auswählen → normale Formularverarbeitung darf fortgesetzt werden.

Erst nach diesem Test wird das ursprüngliche Joomla-Custom-Field entfernt und die Kontaktformular-Implementierung finalisiert.
