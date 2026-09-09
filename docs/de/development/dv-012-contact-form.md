# DV-012 Kontaktformular

## WissensWerk Design System

### Dokument
**Datei:** `DV-Contact-Form.md`  
**Bereich:** Development / View  
**Status:** Implementiert  
**Zielplattform:** Joomla 5.x

---

## 1. Zweck

Das WissensWerk-Kontaktformular basiert auf der Joomla-Core-Komponente `com_contact`.

Die vorhandene Joomla-Kontaktfunktion wird nicht durch eine zusätzliche Formular-Komponente ersetzt. Das Formular wird stattdessen über einen kleinen projektbezogenen Content-Plugin-Override erweitert.

Ziel der Erweiterung ist die verpflichtende Bestätigung der Datenschutzhinweise vor dem Absenden einer Kontaktanfrage.

---

## 2. Architektur

Die Lösung besteht aus drei klar getrennten Ebenen:

```text
Joomla com_contact
        │
        ▼
JForm
        │
        │ onContentPrepareForm
        ▼
plg_content_wwcontact
        │
        ▼
Datenschutz-Checkbox
        │
        ▼
Joomla Formularvalidierung
        │
        ▼
Kontaktversand
```

### Joomla Core

`com_contact` bleibt für die eigentliche Kontaktfunktion verantwortlich:

- Kontaktformular
- Formularverarbeitung
- Validierung
- CSRF-Schutz
- E-Mail-Versand

Core-Dateien werden nicht verändert.

### Plugin

Das Plugin `plg_content_wwcontact` erweitert das Frontend-Formular über das Joomla-Event `onContentPrepareForm`.

Es fügt das Feld `datenschutz` als normales Joomla-JForm-Feld hinzu.

### Template

Das WissensWerk-Template rendert das Feld über den vorhandenen Formularmechanismus.

Die visuelle Gestaltung erfolgt über das Design-System und nicht über eigene Formularlogik.

---

## 3. Plugin-Struktur

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

### Verantwortlichkeit

`wwcontact.xml`
- Plugin-Manifest
- Namespace-Definition
- Registrierung der Plugin-Dateien

`services/provider.php`
- Joomla Service Provider
- Registrierung der Plugin-Klasse

`src/Extension/Wwcontact.php`
- Event-Subscriber
- Prüfung auf Frontend
- Prüfung auf das Formular `com_contact.contact`
- Hinzufügen des Datenschutzfeldes

---

## 4. Datenschutzfeld

Das Plugin fügt ein Standard-Joomla-Checkboxfeld hinzu:

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

Das Feld wird dem bestehenden Fieldset `contact` hinzugefügt.

Dadurch wird es automatisch über den vorhandenen Formular-Loop des Kontaktformular-Overrides gerendert.

Das Feld ist als Pflichtfeld definiert.

---

## 5. Validierung

Die Checkbox wird nicht über eigenes JavaScript geprüft.

Die Validierung erfolgt über Joomla/JForm.

Der Feldstatus ist Bestandteil des Formulars und wird damit sowohl bei der Darstellung als auch bei der Verarbeitung des Formulars berücksichtigt.

Grundprinzip:

```text
Checkbox nicht gesetzt
        ↓
Pflichtfeld nicht erfüllt
        ↓
Formular wird nicht erfolgreich verarbeitet
```

Bei gesetzter Checkbox kann die normale Joomla-Kontaktverarbeitung fortgesetzt werden.

Die endgültige Prüfung erfolgt im Funktionstest des Kontaktformulars.

---

## 6. Frontend- und Backend-Trennung

Das Plugin prüft zunächst:

```php
if (!$this->getApplication()->isClient('site')) {
    return;
}
```

Damit wird die Erweiterung auf das Frontend begrenzt.

Anschließend wird ausschließlich das Formular

```text
com_contact.contact
```

verändert.

Andere Joomla-Formulare werden nicht beeinflusst.

---

## 7. Warum kein Custom Field verwendet wird

Ein zunächst angelegtes Joomla-Custom-Field mit dem Namen `datenschutz` wurde für die Frontend-Kontaktformularerweiterung nicht weiterverwendet.

Der Grund:

Das Custom Field war zwar im Joomla-Kontaktbereich vorhanden, wurde aber nicht Bestandteil des von `com_contact` geladenen Frontend-JForm-Objekts.

Die Diagnose des Formulars zeigte zunächst nur:

```text
jform[contact_name]
jform[contact_email]
jform[contact_subject]
jform[contact_message]
```

Nach Aktivierung des Plugins wurde zusätzlich:

```text
jform[datenschutz]
```

in das Frontend-Formular aufgenommen.

Damit ist die Plugin-Lösung für den vorgesehenen Anwendungsfall eindeutig geeigneter.

Das ursprünglich angelegte Custom Field bleibt bis zum Abschluss der Funktionstests bestehen und kann danach entfernt werden.

---

## 8. Formular-Override

Der bestehende Override befindet sich unter:

```text
templates/wissenswerk/html/com_contact/contact/default_form.php
```

Der Override verwendet weiterhin den Joomla-Formularmechanismus:

```php
$field->renderField();
```

Es wird keine eigene Formularstruktur für das Datenschutzfeld erzeugt.

Damit bleibt das Formular mit der Joomla-Core-Logik verbunden und ist gegenüber Änderungen innerhalb des Template-Designs wartbar.

---

## 9. WissensWerk Form-CSS

Die globale Formularregel in `_forms.scss` wurde so eingeschränkt, dass Checkboxen und Radiobuttons nicht wie Textfelder behandelt werden.

Verwendet wird:

```scss
input:not([type="checkbox"]):not([type="radio"]),
select,
textarea {
    ...
}
```

Checkboxen und Radiobuttons werden damit nicht mehr durch die allgemeinen Regeln für Texteingaben beeinflusst.

Insbesondere werden folgende Eigenschaften nicht mehr ungewollt auf Checkboxen angewendet:

- `width: 100%`
- `padding`
- `border`
- `appearance: none`

Die Bootstrap-Klasse

```text
.form-check-input
```

bleibt für die Checkboxdarstellung zuständig.

---

## 10. Technischer Funktionstest

Der Funktionstest muss mindestens folgende Fälle abdecken.

### Test 1 – Pflichtfeld nicht gesetzt

1. Name ausfüllen
2. E-Mail ausfüllen
3. Betreff ausfüllen
4. Nachricht ausfüllen
5. Datenschutz-Checkbox nicht auswählen
6. Formular absenden

Erwartung:

```text
Formular wird nicht erfolgreich versendet.
Die Pflichtfeldvalidierung greift.
```

### Test 2 – Pflichtfeld gesetzt

1. Alle erforderlichen Felder ausfüllen
2. Datenschutz-Checkbox auswählen
3. Formular absenden

Erwartung:

```text
Normale Joomla-Kontaktverarbeitung wird ausgeführt.
```

Der E-Mail-Versand wird zunächst mit einer eigenen Testadresse geprüft.

---

## 11. Temporäre Diagnose

Während der Entwicklung wurde in `default_form.php` vorübergehend eine Diagnoseausgabe der geladenen Fieldsets und Felder verwendet.

Beispiel:

```text
FIELDSET: contact
FIELD: jform[contact_name]
FIELD: jform[contact_email]
FIELD: jform[contact_subject]
FIELD: jform[contact_message]
FIELD: jform[datenschutz]
FIELDSET: captcha
```

Diese Diagnoseausgabe ist ausschließlich für die Entwicklung bestimmt und muss vor dem Abschluss des Commits aus dem Template-Override entfernt werden.

---

## 12. Aktueller Stand

### Erledigt

- Joomla `com_contact` als Basis festgelegt
- eigenes Formular-Plugin angelegt
- Plugin in die Joomla-Architektur integriert
- Datenschutzfeld dynamisch in das Frontend-JForm eingefügt
- Pflichtfelddefinition umgesetzt
- keine Core-Dateien verändert
- Formular-Override weiterverwendet
- CSS-Konflikt mit globaler Input-Regel behoben
- Checkbox wird als Checkbox gerendert

### Noch offen

- Pflichtfeldvalidierung praktisch testen
- Diagnosecode entfernen
- ursprüngliches Joomla-Custom-Field `Datenschutz` nach erfolgreichem Test entfernen
- endgültige Formulierung und Verlinkung der Datenschutzhinweise prüfen
- Kontaktformular visuell finalisieren
- tatsächlichen E-Mail-Versand testen

---

## 13. Architekturentscheidung

Für das WissensWerk-Kontaktformular wird bewusst keine zusätzliche Formularerweiterung eingesetzt.

Die Entscheidung basiert auf folgenden Punkten:

- Der Funktionsumfang von `com_contact` reicht für die aktuelle Anforderung aus.
- Die Datenschutz-Checkbox benötigt nur eine kleine Erweiterung.
- Joomla stellt mit `onContentPrepareForm` einen geeigneten Erweiterungspunkt bereit.
- Die Formularvalidierung bleibt Bestandteil der Joomla-Formulararchitektur.
- Es entsteht kein eigenes Formularsystem.
- Die Lösung bleibt überschaubar und wartbar.

Ein Wechsel zu einer umfangreichen Formularerweiterung wird erst dann geprüft, wenn reale Anforderungen entstehen, die mit `com_contact` und projektbezogenen Plugins nicht sinnvoll abbildbar sind.

---

## 14. Bezug zu ADR-009

Die technische Umsetzung steht im Zusammenhang mit:

**ADR-009 – Umgang mit Kontaktanfragen und personenbezogenen Daten**

ADR-009 beschreibt den organisatorischen Umgang mit Kontaktanfragen und die vorgesehene begrenzte Vorhaltefrist.

Dieses Dokument beschreibt ausschließlich die technische Umsetzung des Kontaktformulars.

Die endgültige rechtliche Bewertung der Formulierung und der konkreten Rechtsgrundlage ist davon getrennt zu betrachten.
