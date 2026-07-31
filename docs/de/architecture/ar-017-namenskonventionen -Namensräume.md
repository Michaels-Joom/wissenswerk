# AR-016 – Namenskonventionen und Namensräume

| Dokument | AR-016 |
|----------|--------|
| Titel | Namenskonventionen und Namensräume |
| Version | 1.0 |
| Status | Verbindlich |
| Gültig ab | WissensWerk Designsystem 2.0 |
| Autor | WissensWerk |
| Kategorie | Architektur |

# Ziel
Dieses Dokument definiert die verbindlichen Namenskonventionen für das gesamte WissensWerk-Projekt.

Ziel ist eine eindeutige Trennung zwischen

- Joomla Core
- Bootstrap
- Drittanbieter-Erweiterungen
- WissensWerk

Dadurch bleiben Herkunft, Verantwortlichkeit und Zuständigkeit jedes HTML-, CSS- und JavaScript-Elements jederzeit eindeutig erkennbar.

Die Namenskonvention ist Bestandteil der Architektur und gilt projektweit.

# Architekturprinzip
**Alles, was Bestandteil von WissensWerk ist, besitzt den Namensraum `ww-`.**

Diese Regel gilt unabhängig davon, ob es sich um

- CSS-Klassen
- CSS Custom Properties
- JavaScript-Komponenten
- Data-Attribute
- Utility-Klassen
- Layout-Komponenten

handelt.

Die Regel besitzt keine Ausnahmen.

# Grundsätze

## Klare Herkunft
Bereits beim Lesen des Quellcodes muss eindeutig erkennbar sein, woher ein Element stammt.

Beispiel:

```html
<div class="ww-card">
```

Die Herkunft ist unmittelbar ersichtlich.

## Keine Namenskollisionen
Durch den eigenen Namensraum werden Konflikte mit

- Joomla Core
- Bootstrap
- Erweiterungen
- Plugins
- Modulen
- zukünftigen Frameworks

vermieden.

Dies gilt insbesondere für häufig verwendete Klassennamen wie

- card
- button
- footer
- header
- navigation
- sidebar
- search

## Zukunftssicherheit
Die Verwendung eines eigenen Namensraums erleichtert

- Updates
- Refactoring
- Child-Templates
- Anpassungen über `user.css`
- Debugging
- Erweiterungen

ohne unerwartete Seiteneffekte.

# CSS-Klassen
Alle projektspezifischen Klassen beginnen mit

```text
ww-
```

Beispiele:

```css
.ww-header
.ww-footer
.ww-navigation
.ww-sidebar
.ww-button
.ww-card
.ww-search
.ww-breadcrumb
.ww-hero
.ww-teaser
.ww-section
.ww-stack
.ww-cluster
```

# CSS Custom Properties
Alle projektspezifischen Variablen verwenden den Präfix

```text
--ww-
```

Beispiele

```css
--ww-color-primary
--ww-color-secondary
--ww-color-surface
--ww-color-text

--ww-space-xs
--ww-space-s
--ww-space-m
--ww-space-l
--ww-space-xl

--ww-radius-s
--ww-radius-m
--ww-radius-l

--ww-shadow-soft
--ww-shadow-medium
```

Die Variablennamen bleiben semantisch aufgebaut.

Beispiele:

```css
--ww-color-primary
```

anstelle von

```css
--ww-gold
```

# JavaScript
Auch JavaScript verwendet den Namensraum.

Beispiele

```javascript
wwNavigation
wwSearch
wwOffcanvas
wwScrollSpy
wwAccordion
```

Globale Objekte erhalten ebenfalls den Präfix.

# Data-Attribute
Alle projektspezifischen Data-Attribute verwenden den Präfix

```text
data-ww-
```

Beispiele

```html
data-ww-toggle
data-ww-target
data-ww-scroll
data-ww-animation
```

# Utility-Klassen
Auch Hilfsklassen folgen dieser Regel.

Beispiele

```css
.ww-hidden
.ww-visually-hidden
.ww-text-center
.ww-overflow-hidden
```

# Layout-Komponenten
Layout-Komponenten gehören vollständig zum WissensWerk-Framework.

Beispiele

```text
ww-page
ww-layout
ww-section
ww-shell
ww-sidebar
ww-container
ww-content
```

Diese Komponenten bilden die projektspezifische Layout-Architektur.

# Bootstrap
Bootstrap wird unverändert verwendet.

Beispiele

```html
container
container-fluid
row
col
col-lg-6
d-flex
justify-content-center
align-items-center
```

Bootstrap dient ausschließlich als technische Infrastruktur.

Bootstrap-Klassen werden

- nicht umbenannt
- nicht erweitert
- nicht überschrieben

Die Gestaltung erfolgt ausschließlich über WissensWerk-Komponenten.

# Joomla Core
Klassen und Strukturen des Joomla Core bleiben unverändert.
Core-Dateien werden niemals verändert.
Erweiterungen erfolgen ausschließlich über

- Overrides
- Includes
- Plugins
- eigene Komponenten
- eigene Stylesheets

# Drittanbieter-Erweiterungen
Klassen von Erweiterungen werden grundsätzlich nicht verändert.

Eigene Anpassungen erfolgen ausschließlich über

- Wrapper
- Overrides
- eigene Komponenten
- zusätzliche Stylesheets

Dadurch bleibt die Updatefähigkeit erhalten.

# Vorteile

Die konsequente Verwendung eines projektspezifischen Namensraums bietet zahlreiche Vorteile.

## Wartbarkeit

Eigene Komponenten sind jederzeit eindeutig identifizierbar.

## Debugging
Im Browser ist sofort erkennbar, welche Elemente zu WissensWerk gehören.


## Benutzeranpassungen
Eigene Anpassungen über `user.css` können gezielt erfolgen, ohne unbeabsichtigt Core- oder Plugin-Elemente zu verändern.


## Child-Templates
Der eigene Namensraum schafft eine stabile Grundlage für zukünftige Child-Templates.

## Erweiterbarkeit
Neue Komponenten können jederzeit ergänzt werden, ohne bestehende Klassennamen zu gefährden.

## Dokumentation
Alle projektspezifischen Bestandteile folgen einer einzigen, leicht verständlichen Regel.

# Architekturregel
> **Ist ein Element Bestandteil von WissensWerk, beginnt sein Name mit `ww-`.**

Diese Regel gilt projektweit und bildet einen festen Bestandteil der Architektur des WissensWerk-Frameworks.

Ausnahmen sind nicht vorgesehen.

# Fazit
Der Namensraum `ww-` ist ein zentrales Architekturmerkmal des WissensWerk-Frameworks.

Er schafft eine klare Trennung zwischen eigener Entwicklung und externen Abhängigkeiten, erhöht die Wartbarkeit und erleichtert sowohl die Weiterentwicklung als auch die Fehlersuche.

Die konsequente Anwendung dieser Konvention bildet die Grundlage für ein langfristig stabiles, nachvollziehbares und updatefähiges Joomla-Template.