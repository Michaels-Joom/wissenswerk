# DV-016 – WW Article – Columns

**Dokumenttyp:** Entwicklungsdokumentation  
**Bereich:** Editor-XTD / Redaktionelle Komponenten  
**Komponente:** WW Article – Columns  
**Status:** Implementiert und abgeschlossen  
**Zielplattform:** Joomla 5.x

---

## 1. Zweck

`WW Article – Columns` ist ein redaktioneller WissensWerk-Baustein zur Erstellung mehrerer eigenständiger Inhaltskarten innerhalb eines gemeinsamen responsiven Grid-Bereichs.

Die Komponente ermöglicht wiederkehrende Kartenlayouts, ohne dass Redakteure HTML-Strukturen oder CSS-Klassen manuell pflegen müssen.

Der Editor erzeugt das semantische HTML-Markup. Die visuelle Gestaltung wird durch das WissensWerk-Template und dessen SCSS bestimmt.

---

## 2. Einsatzbereich

Der Baustein eignet sich insbesondere für:

- zeitliche Stationen
- kurze Wissens- oder Informationskarten
- mehrere gleichartige Inhalte
- Icon-gestützte Kurztexte
- kompakte Übersichten
- Karten mit optionalem internen Link

Die Anzahl der Karten wird nicht fest vorgegeben.

Die Standardkarte ist auf eine Mindestbreite von **250 px** ausgelegt. Das Grid verteilt die vorhandenen Karten automatisch innerhalb des verfügbaren Platzes.

Sonderfälle mit deutlich kleineren Karten sind kein Bestandteil des allgemeinen Standardlayouts. Falls ein konkretes Seitendesign dies erfordert, kann es gezielt über beitrags- oder seitenbezogenes SCSS gelöst werden.

---

## 3. Redaktioneller Workflow

Der Baustein arbeitet nach dem Prinzip einer fortlaufenden Kartenerfassung.

### Nächste Karte

Mit **Nächste Karte** werden die aktuell eingegebenen Daten als eine Karte übernommen.

Anschließend werden die Eingabefelder für die nächste Karte zurückgesetzt und der Dialog bleibt geöffnet.

### Fertig

**Fertig** beendet die Erfassung.

Wenn noch Daten für eine aktuelle Karte vorhanden sind, wird diese Karte vor dem Schließen ebenfalls übernommen.

Wurde zuvor bereits mindestens eine Karte angelegt und sind keine neuen Daten vorhanden, wird lediglich der Dialog beendet.

### Verwerfen

**Verwerfen** beendet die aktuelle Erfassung.

Bereits erzeugte Karten bleiben erhalten. Nur die noch nicht übernommene aktuelle Karte wird verworfen.

Es gibt bewusst keine Rückrollfunktion für bereits eingefügte Karten.

---

## 4. Aufbau einer Karte

Eine `WW Article – Columns`-Karte kann folgende Inhalte enthalten:

### Icon

Das Icon wird über den Joomla Media Manager ausgewählt.

Vorgabe für die Ausgangsdatei:

- Format: PNG
- Ausgangsgröße: 50 × 50 px

Die Darstellung erfolgt über CSS:

| Größe | Darstellung |
|---|---:|
| S | 12 px |
| M | 24 px |
| L | 36 px |
| XL | 48 px |

Die Ausgangsgröße von 50 × 50 px ist eine redaktionelle Vorgabe. Die tatsächliche Darstellungsgröße wird durch das SCSS bestimmt.

### Icon-Position

Es stehen drei Positionen zur Verfügung:

- Center
- Left
- Right

Bei `Center` steht das Icon oberhalb des Karteninhalts.

Bei `Left` bzw. `Right` wird das Icon neben dem Karteninhalt angeordnet und am oberen Bereich ausgerichtet.

### Überschrift

Die Karte kann eine Überschrift enthalten.

### Untertitel

Für Columns-Karten wird bewusst eine eigene Klasse verwendet:

```text
ww-article-column-subtitel
```

Damit kann die Typografie unabhängig vom allgemeinen `ww-article-subtitel` des `WW Article – Split` gestaltet werden.

### Inhalt

Der eigentliche Karteninhalt wird als redaktioneller Text ausgegeben.

### Link

Eine Karte kann optional einen internen Joomla-Beitrag verlinken.

Der Link besteht aus:

- Linktext
- ausgewähltem Beitrag

Die URL wird über das vorhandene WissensWerk-Routing (`wissenswerkroute`) als Joomla-SEF-URL erzeugt.

Das generierte Markup verwendet:

```html
<a class="ww-article-column__link" href="...">Linktext</a>
```

Linktext und Zieladresse werden als zusammengehörige Angaben behandelt.

---

## 5. Farben und Border

Die Gestaltung verwendet semantische Klassen:

```text
ww-article-column--color-1
ww-article-column--color-2
ww-article-column--color-3
ww-article-column--color-4
ww-article-column--transparent
```

Optional kann eine Karte einen Border erhalten:

```text
ww-article-column--border
```

Die konkreten Farbwerte werden nicht durch das Editor-JavaScript vorgegeben.

Das JavaScript beschreibt lediglich die gewünschte semantische Variante. Die tatsächliche Farbgestaltung gehört in das Template-SCSS.

Dadurch können die Farben später zentral oder für einzelne Seiten angepasst werden.

Der aktuelle Border-Standard ist bewusst einfach:

```css
border: 1px grey;
```

Die endgültige Gestaltung wird am konkreten Seitendesign festgelegt.

---

## 6. Generiertes HTML-Markup

Beispiel:

```html
<section class="ww-article-columns">
    <article class="ww-article-column ww-article-column--icon-center ww-article-column--color-1 ww-article-column--border">
        <figure class="ww-article-column__media ww-article-column__media--m">
            <img
                src="images/icon/icon-computer.png"
                alt=""
                width="50"
                height="49"
                loading="lazy"
            >
        </figure>

        <div class="ww-article-column__content">
            <h3>Beispiel</h3>

            <p class="ww-article-column-subtitel">
                Ein kurzer Untertitel
            </p>

            <p>
                Der redaktionelle Inhalt der Karte.
            </p>

            <a class="ww-article-column__link" href="...">
                Weiterlesen
            </a>
        </div>
    </article>
</section>
```

Das Markup bleibt bewusst semantisch und enthält keine konkreten Farbwerte oder Layoutdefinitionen.

---

## 7. CSS-Klassen

### Container

```text
ww-article-columns
```

### Karte

```text
ww-article-column
```

### Icon-Position

```text
ww-article-column--icon-center
ww-article-column--icon-left
ww-article-column--icon-right
```

### Farbe

```text
ww-article-column--color-1
ww-article-column--color-2
ww-article-column--color-3
ww-article-column--color-4
ww-article-column--transparent
```

### Border

```text
ww-article-column--border
```

### Medien

```text
ww-article-column__media
ww-article-column__media--s
ww-article-column__media--m
ww-article-column__media--l
ww-article-column__media--xl
```

### Inhalt

```text
ww-article-column__content
ww-article-column-subtitel
ww-article-column__link
```

---

## 8. Responsive Verhalten

Der Container verwendet CSS Grid.

Grundprinzip:

```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

Damit wird die Anzahl der tatsächlich dargestellten Spalten automatisch aus dem verfügbaren Platz bestimmt.

Es gibt keine fest programmierte Logik für eine bestimmte Kartenanzahl.

Die Standardkarte bleibt auf **250 px** ausgelegt.

Falls ein konkretes Layout eine andere Kartenbreite benötigt, kann dies gezielt im Beitrag oder über seitenbezogenes SCSS angepasst werden.

---

## 9. Verantwortlichkeiten

### Editor-XTD

Das Editor-XTD-Plugin ist verantwortlich für:

- Dialog
- Eingabe der redaktionellen Daten
- Validierung
- Auswahl von Medien
- Auswahl interner Beiträge
- Erzeugung des HTML-Markups
- Vergabe semantischer CSS-Klassen

### Template

Das WissensWerk-Template ist verantwortlich für:

- Layout
- Farben
- Abstände
- Typografie
- Bordergestaltung
- responsive Darstellung
- visuelle Zustände

Die Frontend-Darstellung liegt in:

```text
media/templates/site/wissenswerk/scss/components/_editor-xtd.scss
```

### Routing

Die Erzeugung interner Joomla-SEF-URLs erfolgt über das separate Plugin:

```text
plugins/ajax/wissenswerkroute/
```

Die Columns-Komponente implementiert kein eigenes Routing.

---

## 10. Bewusste Einschränkungen

Folgende Funktionen gehören bewusst nicht zum Standardbaustein:

- keine 125-px-Standardkarten
- keine feste maximale Kartenanzahl
- keine automatische XS-Kartenlogik
- keine Farbwerte im JavaScript
- kein eigenes Routing
- keine eigene Media-Manager-Implementierung
- kein Pagebuilder
- keine komplexe Undo-/Rollback-Funktion für bereits eingefügte Karten

Diese Einschränkungen dienen der Wartbarkeit und verhindern, dass die Komponente mit selten benötigten Sonderfällen überladen wird.

---

## 11. Pagebuilder

Ein möglicher späterer Pagebuilder bleibt eine eigenständige Zukunftsoption.

Für die aktuelle WissensWerk-Architektur wird kein Pagebuilder entwickelt.

Die redaktionellen Joomla-Artikel und die WissensWerk-Editor-XTD-Komponenten sollen unabhängig davon funktionieren.

Ein späterer Pagebuilder müsste daher ergänzend integriert werden und darf den normalen Joomla-Redaktionsweg nicht ersetzen.

---

## 12. Technischer Status

`WW Article – Columns` ist implementiert und als erster wiederholbarer redaktioneller Baustein getestet.

Der Baustein ergänzt damit `WW Article – Split`.

Die beiden Komponenten dienen gleichzeitig als Referenz für die weitere Entwicklung des WissensWerk-Editors.

---

## 13. Weiterentwicklung

Vor der Implementierung weiterer komplexer Bausteine soll die JavaScript-Architektur überprüft werden.

Der aktuelle `editor.js` enthält inzwischen ungefähr 1.000 Zeilen für die bisher implementierten Bausteine.

Geplant ist deshalb eine mögliche Modularisierung, beispielsweise:

```text
media/plg_editors_xtd_wissenswerk/js/

editor.js
tinymce-bridge.js
tinymce-wissenswerk.js

blocks/
    article.js
    columns.js
    accordion.js
    data-grid.js
```

Die Modularisierung soll nicht als Selbstzweck erfolgen.

Zunächst wird geprüft, welche Funktionen tatsächlich gemeinsame Infrastruktur darstellen und welche ausschließlich zu einem einzelnen Baustein gehören.

Die bestehende Funktionalität von `WW Article – Split` und `WW Article – Columns` muss dabei unverändert erhalten bleiben.

Erst danach wird der nächste komplexere Baustein – voraussichtlich `WW Article – Accordion` – implementiert.

---

## 14. Architekturprinzip

`WW Article – Columns` folgt dem zentralen WissensWerk-Prinzip:

> **Der Editor beschreibt den Inhalt und seine semantischen Varianten. Das Template bestimmt dessen visuelle Darstellung.**

Dadurch bleibt die redaktionelle Komponente unabhängig vom konkreten Design und kann innerhalb des WissensWerk-Templates weiterentwickelt werden.
