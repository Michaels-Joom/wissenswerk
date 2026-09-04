# TS-003 – Joomla Template-Parameter im Override werden nicht ausgegeben

## Status

**Abgeschlossen**

Die technische Umsetzung wurde erfolgreich getestet.

- Joomla Core unverändert
- `com_contact` weiterhin als Formularbasis
- redaktioneller Datenschutz-Hinweis als Template-Parameter
- Pflege des Hinweises im Template-Style
- Ausgabe über den `com_contact`-Template-Override
- visuelle Gestaltung über WissensWerk-SCSS

---

## 1. Ausgangssituation

Das WissensWerk-Kontaktformular wurde über den Joomla-Core-Komponent
`com_contact` umgesetzt.

Für die Datenschutzbestätigung existiert bereits ein eigenes Formularfeld
`datenschutz`, das über das Plugin `plg_content_wwcontact` in das
Kontaktformular eingebracht wird.

Zusätzlich sollte oberhalb dieses Feldes ein redaktionell pflegbarer
Datenschutz-Hinweis erscheinen.

Die Anforderungen:

- Der Hinweis soll im Joomla-Backend bearbeitbar sein.
- Der Hinweis soll nicht fest im PHP-Code stehen.
- HTML und Links, beispielsweise zur Datenschutzerklärung, sollen möglich sein.
- Die Ausgabe soll innerhalb des bestehenden `com_contact`-Formulars erfolgen.
- Joomla-Core-Dateien sollen nicht verändert werden.

---

## 2. Lösungsansatz: Template-Parameter

Für den Hinweis wurde ein eigener Template-Parameter angelegt.

Der Parameter wird in `templateDetails.xml` definiert:

```xml
<fieldset
    name="contact"
    label="TPL_WISSENSWERK_FIELDSET_CONTACT">

    <field
        name="contact_privacy_notice"
        type="editor"
        label="TPL_WISSENSWERK_CONTACT_PRIVACY_NOTICE_LABEL"
        description="TPL_WISSENSWERK_CONTACT_PRIVACY_NOTICE_DESC"
        filter="raw"
        buttons="false"
        hide="pagebreak,readmore"
        default=""
    />

</fieldset>
```

Damit steht im Template-Style des WissensWerk-Templates ein eigener
Bereich **Kontakt** mit dem Feld **Datenschutz-Hinweis** zur Verfügung.

Der Inhalt kann dadurch unabhängig vom PHP-Code redaktionell gepflegt
werden.

---

## 3. Problem: Der Parameter wurde zunächst nicht ausgegeben

Der erste Versuch verwendete den aktiven Template-Style direkt:

```php
$app = Factory::getApplication();
$template = $app->getTemplate(true);
$privacyNotice = trim(
    (string) $template->params->get('contact_privacy_notice', '')
);
```

Obwohl der Parameter im Backend vorhanden und gespeichert war, erschien
der Inhalt nicht im Frontend.

Daraufhin wurde zunächst angenommen, dass der Zugriff auf die
Template-Parameter die Ursache sein könnte.

---

## 4. Erste Diagnose: Wird der Override überhaupt geladen?

Bevor weitere Änderungen am Parameterzugriff vorgenommen wurden, wurde
geprüft, ob der betreffende Template-Override tatsächlich ausgeführt
wird.

Dazu wurde vorübergehend folgende Ausgabe in
`default_form.php` eingefügt:

```php
echo '<!-- WW CONTACT FORM OVERRIDE AKTIV -->';
```

Zusätzlich wurde eine sichtbare Testausgabe verwendet:

```text
test 23
```

Die Ausgabe erschien im Kontaktformular.

### Erkenntnis

Der Override

```text
templates/wissenswerk/html/com_contact/contact/default_form.php
```

wird von Joomla verwendet.

Damit konnte die Override-Struktur als Fehlerquelle ausgeschlossen
werden.

---

## 5. Zweite Diagnose: Sind die Template-Parameter verfügbar?

Anschließend wurde der von Joomla im Frontend bereitgestellte
`themeParams`-Wert geprüft.

Verwendet wurde:

```php
$app = Factory::getApplication();
$templateParams = $app->get('themeParams');

$privacyNotice = '';

if ($templateParams) {
    $privacyNotice = trim(
        (string) $templateParams->get('contact_privacy_notice', '')
    );
}
```

Für die Diagnose wurde der Wert zunächst sichtbar ausgegeben:

```php
echo '<div style="padding:10px; background:#ffe8e8; border:1px solid #cc0000;">';
echo 'WW PARAMETER TEST: ';
echo htmlspecialchars($privacyNotice, ENT_QUOTES, 'UTF-8');
echo '</div>';
```

Der Inhalt des im Backend gepflegten Parameters erschien daraufhin
korrekt im Frontend.

Dabei war zu erkennen, dass auch die HTML-Auszeichnung des Editorfeldes
vorhanden war, beispielsweise:

```html
<p>Die von Ihnen übermittelten Daten werden ausschließlich zur
Bearbeitung Ihrer Anfrage verwendet. Weitere Informationen finden Sie
in unserer <a href="index.php?Itemid=127">Datenschutzerklärung</a>.</p>
```

### Erkenntnis

Der Template-Parameter wird korrekt gespeichert und kann im
`com_contact`-Override gelesen werden.

Die Ausgabe von `themeParams` war somit nicht das eigentliche Problem.

---

## 6. Zweites Problem: Das Datenschutzfeld wurde nicht erkannt

Der Hinweis sollte nur unmittelbar vor dem eigenen Feld
`datenschutz` ausgegeben werden.

Der erste Ansatz prüfte:

```php
$field->name === 'datenschutz'
```

Diese Prüfung führte nicht zur gewünschten Ausgabe.

Die entscheidende Änderung bestand darin, das Attribut des zugrunde
liegenden Formularfeldes auszulesen:

```php
$field->getAttribute('name') === 'datenschutz'
```

Damit konnte das von `plg_content_wwcontact` ergänzte Feld eindeutig
identifiziert werden.

---

## 7. Endgültige Lösung

Der relevante Bereich des Overrides lautet:

```php
<?php foreach ($fields as $field) : ?>

    <?php if ($field->getAttribute('name') === 'datenschutz' && $privacyNotice !== '') : ?>
        <div class="ww-contact-privacy-notice">
            <?php echo $privacyNotice; ?>
        </div>
    <?php endif; ?>

    <?php echo $field->renderField(); ?>

<?php endforeach; ?>
```

Der Template-Parameter wird zuvor aus den Theme-Parametern gelesen:

```php
$app = Factory::getApplication();
$templateParams = $app->get('themeParams');

$privacyNotice = '';

if ($templateParams) {
    $privacyNotice = trim(
        (string) $templateParams->get('contact_privacy_notice', '')
    );
}
```

Damit bleibt die Ausgabe an die tatsächliche Existenz des
`datenschutz`-Feldes gekoppelt.

---

## 8. Ergebnis

Der Kontaktbereich zeigt nun vor der Datenschutzbestätigung den im
Backend gepflegten Hinweis:

> Die von Ihnen übermittelten Daten werden ausschließlich zur Bearbeitung
> Ihrer Anfrage verwendet. Weitere Informationen finden Sie in unserer
> Datenschutzerklärung.

Darunter folgt die Datenschutzbestätigung:

```text
☐ Ich habe die Datenschutzhinweise zur Kenntnis genommen. *
```

Der Link zur Datenschutzerklärung wird aus dem redaktionellen
Editorinhalt übernommen.

---

## 9. Warum diese Lösung gewählt wurde

Der Datenschutz-Hinweis wird bewusst als **Template-Parameter** und nicht
als Modulposition umgesetzt.

Der Inhalt gehört funktional unmittelbar zum Kontaktformular. Eine eigene
Modulposition würde für diesen einzelnen Hinweis eine zusätzliche
Layout-Abhängigkeit schaffen.

Der Template-Parameter hält dagegen die Zuständigkeit klar:

- Template-Konfiguration → redaktioneller Hinweis
- Plugin → Ergänzung des Formularfeldes
- `com_contact` → Verarbeitung und Versand des Formulars
- Template-Override → Positionierung und Ausgabe
- SCSS → visuelle Gestaltung

Damit bleiben die Verantwortlichkeiten getrennt und nachvollziehbar.

---

## 10. Diagnoseweg als allgemeine Erkenntnis

Der wichtigste Teil des Troubleshootings war die schrittweise Eingrenzung
des Problems.

Die Prüfung erfolgte in dieser Reihenfolge:

```text
1. Wird der Override geladen?
          ↓
2. Sind die Template-Parameter verfügbar?
          ↓
3. Wird der erwartete Parameter gelesen?
          ↓
4. Wird das gewünschte Formularfeld erkannt?
          ↓
5. Wird der redaktionelle Inhalt an der richtigen Stelle ausgegeben?
```

Dadurch konnte vermieden werden, mehrere mögliche Fehlerquellen
gleichzeitig zu verändern.

### Lessons Learned

Bei Problemen mit Joomla-Template-Overrides sollte zunächst die
Ausführungsebene verifiziert werden.

Erst danach sollte geprüft werden:

- welche Daten tatsächlich verfügbar sind,
- welcher Parameter gelesen wird,
- welches Formularfeld verarbeitet wird,
- und an welcher Stelle die Ausgabe erfolgen soll.

Temporäre Diagnoseausgaben sind dafür sinnvoll, müssen nach Abschluss
der Fehlersuche jedoch vollständig entfernt werden.

---

## 11. Aufräumen nach dem Test

Folgende temporäre Ausgaben wurden nach erfolgreicher Diagnose entfernt:

```php
echo 'test 23';
```

sowie:

```php
echo '<!-- WW CONTACT FORM OVERRIDE AKTIV -->';
```

und die sichtbare Parameter-Diagnose:

```php
echo '<div style="padding:10px; ...">';
echo 'WW PARAMETER TEST: ';
...
echo '</div>';
```

Im produktiven Override bleibt ausschließlich die eigentliche
Implementierung.

---

## 12. Betroffene Dateien

### Template

```text
templates/wissenswerk/templateDetails.xml
```

Enthält den Template-Parameter
`contact_privacy_notice`.

### Template-Override

```text
templates/wissenswerk/html/com_contact/contact/default_form.php
```

Liest den Parameter und gibt ihn unmittelbar vor dem
Datenschutzfeld aus.

### Stylesheet

```text
media/templates/site/wissenswerk/scss/components/_contact-form.scss
```

Übernimmt die visuelle Gestaltung des Datenschutz-Hinweises und der
Datenschutzbestätigung.

---

## 13. Abgrenzung zu TS-002

Dieses Dokument behandelt ausschließlich die Ausgabe eines
redaktionell gepflegten Inhalts aus den Template-Parametern.

Die technische Ergänzung des Datenschutzfeldes `datenschutz` über das
Plugin `plg_content_wwcontact` wird separat in

```text
TS-002-contact-form-custom-field.md
```

dokumentiert.

Die Trennung ist bewusst gewählt, damit einzelne Fehlerursachen und
Lösungswege unabhängig voneinander nachvollziehbar bleiben.
