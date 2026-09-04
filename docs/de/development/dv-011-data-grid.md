# WissensWerk -- Data Grid

## Dokumentation und redaktionelle Handhabung

**Komponente:** `ww-data-grid`\
**Typ:** Wiederverwendbare SCSS-Komponente\
**Zweck:** Darstellung strukturierter, gleichartiger
Informationsdatensätze\
**Zielplattform:** Joomla 5.x\
**Status:** Arbeitsstand / Master-Komponente

------------------------------------------------------------------------

## 1. Zweck

`ww-data-grid` dient zur Darstellung mehrerer gleichartiger Datensätze
mit wiederkehrenden Eigenschaften.

Geeignete Anwendungsfälle sind zum Beispiel:

-   Cookie-Übersichten
-   Projektübersichten
-   technische Eigenschaften
-   Statusübersichten
-   Vergleichsdaten
-   strukturierte Angaben mit wiederkehrenden Merkmalen

Das Data Grid ist **kein allgemeiner Ersatz für eine semantische
HTML-Tabelle**. Eine echte HTML-Tabelle bleibt dort sinnvoll, wo
tabellarische Datenbeziehungen selbst semantisch relevant sind.

Das Data Grid ist besonders geeignet, wenn eine strukturierte
Desktop-Darstellung auf kleinen Bildschirmen in einzelne
Informationsblöcke überführt werden soll.

------------------------------------------------------------------------

## 2. Grundprinzip

Die Komponente trennt Inhalt, Struktur und Darstellung:

``` text
Redaktioneller Inhalt
        ↓
HTML-Struktur
        ↓
ww-data-grid
        ↓
SCSS-Komponente
        ↓
Desktop-Grid / Mobile-Darstellung
```

Keine Inline-Styles, festen Zellhöhen oder manuellen `<br>`-Umbrüche zur
Steuerung des Layouts.

------------------------------------------------------------------------

## 3. Allgemeine Klassennamen

Die Klassen werden bewusst **nicht auf einen konkreten Anwendungsfall**
zugeschnitten.

Nicht:

``` text
ww-data-grid__cookie
ww-data-grid__cookie-name
ww-data-grid__cookie-type
```

Sondern:

``` text
ww-data-grid__item
ww-data-grid__cell
ww-data-grid__title
ww-data-grid__value
```

### Klassenübersicht

  Klasse                          Aufgabe
  ------------------------------- ------------------------------------------
  `ww-data-grid`                  Block / gesamte Komponente
  `ww-data-grid__header`          Kopfbereich
  `ww-data-grid__heading`         einzelne Spaltenüberschrift
  `ww-data-grid__body`            Bereich der Datensätze
  `ww-data-grid__item`            einzelner Datensatz
  `ww-data-grid__cell`            einzelne Information eines Datensatzes
  `ww-data-grid__cell--primary`   optionale primäre Zelle
  `ww-data-grid__icon`            optionales Icon
  `ww-data-grid__title`           Bezeichnung des Datensatzes
  `data-label`           Feldbezeichnung, insbesondere für Mobile
  `ww-data-grid__value`           zugehöriger Wert

------------------------------------------------------------------------

## 4. SCSS-Struktur

Die Komponente wird als eigenständige SCSS-Datei geführt:

``` text
scss/
└── components/
    └── _data-grid.scss
```

Die Master-Komponente definiert:

-   Grundlayout
-   CSS-Grid-Struktur
-   Zellgestaltung
-   Abstände
-   Rahmen
-   Typografie
-   optionale visuelle Elemente
-   Responsive Verhalten

------------------------------------------------------------------------

## 5. Spaltenaufteilung

Die konkrete Spaltenaufteilung wird über eine CSS Custom Property
gesteuert:

``` scss
--ww-data-grid-columns:
    minmax(0, 1fr)
    minmax(0, 1fr)
    minmax(0, 1fr)
    minmax(0, 1fr);
```

Kopfzeile und Datensätze verwenden dieselbe Variable:

``` scss
grid-template-columns: var(--ww-data-grid-columns);
```

Damit laufen die Spalten über alle Datensätze exakt durch.

### Warum `minmax(0, ...)`?

`minmax(0, 1fr)` verhindert, dass der Eigenbedarf des Inhalts die
gewünschte Verteilung der Grid-Tracks unnötig beeinflusst.

------------------------------------------------------------------------

## 6. Individualisierung

Die Master-Komponente definiert das Verhalten. Ein konkreter
Anwendungsfall kann eine eigene Spaltenverteilung erhalten.

Beispiel:

``` scss
.ww-data-grid--cookies {
    --ww-data-grid-columns:
        minmax(0, 1fr)
        minmax(0, 2fr)
        minmax(0, 0.5fr)
        minmax(0, 0.5fr);
}
```

HTML:

``` html
<div class="ww-data-grid ww-data-grid--cookies">
```

Der Modifier beschreibt dabei einen konkreten Anwendungsfall. Die
eigentliche Komponente wird nicht dupliziert.

Neue Modifier werden nur angelegt, wenn eine konkrete Spaltenaufteilung
tatsächlich benötigt wird oder mehrfach verwendet werden soll.

------------------------------------------------------------------------

## 7. Allgemeingültigkeit der Komponente

Die HTML-Klassen und die SCSS-Struktur dürfen nicht von der ersten
Verwendung abhängig werden.

Die Cookie-Übersicht ist lediglich ein Anwendungsfall:

``` text
Cookie | Zweck | Laufzeit | Art
```

Weitere mögliche Anwendungen:

``` text
Projekt | Status | Technologie | Zeitraum
```

``` text
Komponente | Version | Status | Hinweis
```

``` text
Eigenschaft | Wert | Einheit | Hinweis
```

Die Master-Komponente bleibt für diese Fälle identisch. Nur die konkrete
Spaltenverteilung kann angepasst werden.

------------------------------------------------------------------------

## 8. Beispielstruktur

``` html
<section class="ww-data-grid ww-data-grid--cookies">

    <div class="ww-data-grid__header" aria-hidden="true">

        <div class="ww-data-grid__heading">Cookie</div>
        <div class="ww-data-grid__heading">Zweck</div>
        <div class="ww-data-grid__heading">Laufzeit</div>
        <div class="ww-data-grid__heading">Art</div>

    </div>

    <div class="ww-data-grid__body">

        <article class="ww-data-grid__item">

            <div class="ww-data-grid__cell ww-data-grid__cell--primary">

                <span class="ww-data-grid__icon" aria-hidden="true">
                    <!-- optionales SVG -->
                </span>

                <h3 class="ww-data-grid__title">
                    Notwendige Cookies
                </h3>

            </div>

            <div class="ww-data-grid__cell" data-label="Zweck">

                <span class="ww-data-grid__label">Zweck</span>

                <div class="ww-data-grid__value">
                    Diese Cookies sind für den Betrieb der Website erforderlich.
                </div>

            </div>

            <div class="ww-data-grid__cell" data-label="Laufzeit">

                <span class="ww-data-grid__label">Laufzeit</span>

                <div class="ww-data-grid__value">
                    Session
                </div>

            </div>

            <div class="ww-data-grid__cell" data-label="Art">

                <span class="ww-data-grid__label">Art</span>

                <div class="ww-data-grid__value">
                    Notwendig
                </div>

            </div>

        </article>

    </div>

</section>
```

------------------------------------------------------------------------

## 9. Responsive Verhalten

Auf Desktop wird das Data Grid als CSS Grid dargestellt.

Auf kleinen Bildschirmen wird die Kopfzeile ausgeblendet und jeder
Datensatz kann als eigenständiger Informationsblock dargestellt werden.

Beispiel:

``` text
┌───────────────────────────────┐
│ Notwendige Cookies            │
│                               │
│ Zweck                         │
│ Diese Cookies sind ...        │
│                               │
│ Laufzeit                      │
│ Session                       │
│                               │
│ Art                           │
│ Notwendig                     │
└───────────────────────────────┘
```

Die HTML-Struktur bleibt dabei identisch. Die Umstellung erfolgt
ausschließlich über SCSS.

------------------------------------------------------------------------

## 10. `data-label`

Jede Information, deren Feldbezeichnung im mobilen Layout benötigt wird,
erhält ein `data-label`.

Beispiel:

``` html
<div class="ww-data-grid__cell" data-label="Laufzeit">
```

Damit kann die Komponente die Feldbezeichnung auf Mobile erneut
darstellen, ohne Inhalte doppelt pflegen zu müssen.

------------------------------------------------------------------------

## 11. Redaktionelle Anweisung für Joomla

### Data Grid verwenden, wenn

-   mehrere gleichartige Datensätze vorhanden sind,
-   jeder Datensatz dieselben Eigenschaften besitzt,
-   die Informationen auf Desktop sinnvoll spaltenweise angeordnet
    werden können,
-   eine mobile Einzel-/Kartenansicht sinnvoll ist.

### Nicht verwenden für

-   normalen Fließtext
-   einzelne Informationskarten
-   dekorative Kartenraster
-   beliebige Seitenlayouts
-   echte semantische Tabellen, bei denen eine HTML-Tabelle erforderlich
    ist

Für eigenständige Informationskarten steht die separate Komponente
`ww-info-grid` zur Verfügung.

------------------------------------------------------------------------

## 12. Redaktionsregeln

### Keine automatisch erzeugten Tabellen übernehmen

Keine Word-, Excel- oder Joomla-Editor-Tabellen als Grundlage verwenden.

Die definierte Data-Grid-Struktur wird gezielt erstellt.

### Keine Inline-Styles

Nicht verwenden:

``` html
style="width: 30%;"
```

oder:

``` html
style="height: 83px;"
```

Die Gestaltung erfolgt ausschließlich über SCSS.

### Keine manuellen Umbrüche

Nicht verwenden:

``` html
<br><br>
```

um Spalten oder Zeilen optisch auszurichten.

### Keine festen Höhen

Keine festen Höhen für Datensätze, Zellen oder Textbereiche definieren.

Die Höhe ergibt sich aus dem Inhalt.

### Spalten sinnvoll gewichten

Die längste Information sollte in der Regel die größte Spalte erhalten.

### Inhalte kurz halten

Lange Fließtexte gehören in den normalen Inhaltsbereich und nicht in ein
Data Grid.

------------------------------------------------------------------------

## 13. Icons

Icons sind optional.

Sie sollen die Bedeutung eines Datensatzes unterstützen und nicht
lediglich dekorativ eingesetzt werden.

``` html
<span class="ww-data-grid__icon" aria-hidden="true">
    <!-- SVG -->
</span>
```

Ein rein dekoratives Icon wird mit `aria-hidden="true"` aus der
Accessibility-Struktur entfernt.

Die Komponente muss auch ohne Icons vollständig funktionieren.

------------------------------------------------------------------------

## 14. Accessibility

Bei der Umsetzung sind insbesondere zu beachten:

-   ausreichende Farbkontraste
-   sinnvolle Überschriftenhierarchie
-   keine Information ausschließlich über Farbe vermitteln
-   Inhalte müssen auch ohne CSS verständlich bleiben
-   dekorative Icons mit `aria-hidden="true"`
-   keine festen Höhen, die Inhalte abschneiden
-   vollständige Nutzbarkeit auf kleinen Displays

------------------------------------------------------------------------

## 15. Wartung und Weiterentwicklung

Die Master-Komponente wird zentral in

``` text
scss/components/_data-grid.scss
```

gepflegt.

Allgemeine Änderungen werden dort vorgenommen und wirken sich auf alle
Verwendungen aus.

Anwendungsspezifische Anpassungen dürfen die Master-Komponente nicht
unnötig verkomplizieren.

Neue Varianten werden nur bei einem konkreten, wiederkehrenden Bedarf
ergänzt.

------------------------------------------------------------------------

## 16. Abgrenzung zum Info Grid

Das Data Grid und das Info Grid bleiben bewusst zwei eigenständige
Komponenten.

### Data Grid

Gleichartige Datensätze mit wiederkehrenden Eigenschaften.

``` text
Cookie | Zweck | Laufzeit | Art
```

### Info Grid

Eigenständige Informationskarten mit eigener visueller Einheit.

``` text
┌──────────────┐
│ ICON         │
│ KLARHEIT     │
│ Beschreibung │
└──────────────┘
```

Die Trennung verhindert, dass eine Komponente durch immer mehr
Darstellungsvarianten unnötig komplex wird.

**Grundsatz:**

> Eine Komponente soll eine klar erkennbare Aufgabe besitzen.

------------------------------------------------------------------------

## 17. Kurzreferenz

``` text
Mehrere Datensätze
        +
gleiche Eigenschaften
        +
strukturierte Darstellung
        =
ww-data-grid
```

Vor der Veröffentlichung prüfen:

-   [ ] Sind alle Datensätze nach demselben Schema aufgebaut?
-   [ ] Sind die Spalten sinnvoll gewichtet?
-   [ ] Keine Inline-Styles?
-   [ ] Keine manuellen `<br>`-Umbrüche?
-   [ ] Keine festen Höhen?
-   [ ] Icons sinnvoll und barrierearm?
-   [ ] Desktop geprüft?
-   [ ] Mobile geprüft?
-   [ ] Ist das Data Grid tatsächlich die passende Komponente?

------------------------------------------------------------------------

## 18. Architekturentscheidung

Das `ww-data-grid` ist eine eigenständige, wiederverwendbare
WissensWerk-Komponente.

Die Komponente definiert das allgemeine Verhalten. Die konkrete
Anwendung kann über einen Modifier eine passende Spaltenverteilung
erhalten.

Damit bleiben:

-   HTML-Struktur
-   SCSS
-   redaktionelle Inhalte
-   responsive Verhalten

klar voneinander getrennt.

Die Komponente wird nicht mit dem `ww-info-grid` zusammengeführt. Beide
Komponenten verwenden möglicherweise ähnliche technische Mittel wie CSS
Grid, erfüllen aber unterschiedliche fachliche Aufgaben.

**Leitprinzip: Keep it simple.**
