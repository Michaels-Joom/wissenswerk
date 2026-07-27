# PM-001HTML Base Layer Matrix

> **Status:** Working Draft  
> **Version:** 1.0  
> **Stand:** 27.07.2026

---

# Ziel

Diese Matrix dient als Entscheidungsgrundlage für den Aufbau des WissensWerk Base Layers.

Sie definiert, welche HTML-Elemente Bestandteil des Base Layers werden, welche Elemente später als Komponenten umgesetzt werden und welche Elemente zunächst unverändert bleiben.

Die Matrix unterstützt dabei, eine klare Trennung zwischen Browser, Base Layer, Komponenten und Layouts einzuhalten.

---

# Entscheidungsregeln

## Base Layer

Ein HTML-Element gehört in den Base Layer, wenn:

- seine Darstellung projektweit einheitlich sein soll,
- es Bestandteil der HTML-Grundstruktur ist,
- es keine eigenständige Komponente darstellt,
- seine Gestaltung ausschließlich über Design Tokens erfolgt.

---

## Komponente

Ein HTML-Element wird als Komponente behandelt, wenn:

- es eigenes Verhalten besitzt,
- mehrere HTML-Elemente zusammengehören,
- Interaktionen erforderlich sind,
- Layout und Funktion eng miteinander verbunden sind.

---

## Später

Elemente in dieser Kategorie werden zunächst nicht angepasst.

Sie werden erst bewertet, wenn ein konkreter Anwendungsfall entsteht.

---

# Matrix

## Dokumentstruktur

| HTML-Element | Base Layer | Komponente | Später | Bemerkung |
|--------------|:---------:|:----------:|:------:|-----------|
| `html` | ✅ | | | Globale Dokumenteigenschaften |
| `body` | ✅ | | | Grundlayout, Farben, Typografie |
| `main` | ✅ | | | Hauptinhalt |
| `header` | | ✅ | | Layout-Komponente |
| `footer` | | ✅ | | Layout-Komponente |
| `section` | | | ✅ | Semantisches Element |
| `article` | | | ✅ | Semantisches Element |
| `aside` | | | ✅ | Semantisches Element |
| `nav` | | ✅ | | Navigation |
| `address` | | | ✅ | Spezialfall |

---

## Überschriften und Text

| HTML-Element | Base Layer | Komponente | Später | Bemerkung |
|--------------|:---------:|:----------:|:------:|-----------|
| `h1` | ✅ | | | Typografie |
| `h2` | ✅ | | | Typografie |
| `h3` | ✅ | | | Typografie |
| `h4` | ✅ | | | Typografie |
| `h5` | ✅ | | | Typografie |
| `h6` | ✅ | | | Typografie |
| `p` | ✅ | | | Fließtext |
| `small` | ✅ | | | Typografie |
| `strong` | ✅ | | | Hervorhebung |
| `em` | ✅ | | | Hervorhebung |
| `mark` | ✅ | | | Markierung |
| `abbr` | ✅ | | | Abkürzungen |
| `cite` | ✅ | | | Quellenangaben |
| `q` | ✅ | | | Kurzzitate |
| `blockquote` | ✅ | | | Zitate |

---

## Listen

| HTML-Element | Base Layer | Komponente | Später | Bemerkung |
|--------------|:---------:|:----------:|:------:|-----------|
| `ul` | ✅ | | | Ungeordnete Listen |
| `ol` | ✅ | | | Geordnete Listen |
| `li` | ✅ | | | Listenelement |
| `dl` | ✅ | | | Definitionsliste |
| `dt` | ✅ | | | Begriff |
| `dd` | ✅ | | | Beschreibung |

---

## Links

| HTML-Element | Base Layer | Komponente | Später | Bemerkung |
|--------------|:---------:|:----------:|:------:|-----------|
| `a` | ✅ | | | Standardlink |

---

## Medien

| HTML-Element | Base Layer | Komponente | Später | Bemerkung |
|--------------|:---------:|:----------:|:------:|-----------|
| `img` | ✅ | | | Responsives Bild |
| `picture` | ✅ | | | Responsive Bilder |
| `figure` | ✅ | | | Mediencontainer |
| `figcaption` | ✅ | | | Bildbeschreibung |
| `svg` | ✅ | | | Vektorgrafiken |
| `video` | | | ✅ | Später bewerten |
| `audio` | | | ✅ | Später bewerten |
| `canvas` | | | ✅ | Spezialfall |

---

## Code

| HTML-Element | Base Layer | Komponente | Später | Bemerkung |
|--------------|:---------:|:----------:|:------:|-----------|
| `code` | ✅ | | | Inline-Code |
| `pre` | ✅ | | | Codeblöcke |
| `kbd` | ✅ | | | Tastatureingaben |
| `samp` | ✅ | | | Konsolenausgabe |

---

## Tabellen

| HTML-Element | Base Layer | Komponente | Später | Bemerkung |
|--------------|:---------:|:----------:|:------:|-----------|
| `table` | ✅ | | | Tabellenbasis |
| `thead` | ✅ | | | Tabellenkopf |
| `tbody` | ✅ | | | Tabelleninhalt |
| `tfoot` | ✅ | | | Tabellenfuß |
| `tr` | ✅ | | | Tabellenzeile |
| `th` | ✅ | | | Tabellenkopf |
| `td` | ✅ | | | Tabellenzelle |
| `caption` | ✅ | | | Tabellenüberschrift |
| `colgroup` | | | ✅ | Spezialfall |
| `col` | | | ✅ | Spezialfall |

---

## Formulare

| HTML-Element | Base Layer | Komponente | Später | Bemerkung |
|--------------|:---------:|:----------:|:------:|-----------|
| `form` | | ✅ | | Formularsystem |
| `fieldset` | | ✅ | | Formularsystem |
| `legend` | | ✅ | | Formularsystem |
| `label` | | ✅ | | Formularsystem |
| `input` | | ✅ | | Formularsystem |
| `textarea` | | ✅ | | Formularsystem |
| `select` | | ✅ | | Formularsystem |
| `option` | | ✅ | | Formularsystem |
| `button` | | ✅ | | Button-Komponente |

---

## Interaktive Elemente

| HTML-Element | Base Layer | Komponente | Später | Bemerkung |
|--------------|:---------:|:----------:|:------:|-----------|
| `details` | | | ✅ | HTML5 |
| `summary` | | | ✅ | HTML5 |
| `dialog` | | ✅ | | Modal-Konzept |

---

## Sonstige Elemente

| HTML-Element | Base Layer | Komponente | Später | Bemerkung |
|--------------|:---------:|:----------:|:------:|-----------|
| `hr` | ✅ | | | Trennelement |
| `br` | | | ✅ | Keine Gestaltung erforderlich |

---

# Hinweise

Diese Matrix ist bewusst als Arbeitsdokument angelegt.

Sie beschreibt den geplanten Aufbau des Base Layers und wird während der Entwicklung kontinuierlich überprüft und erweitert.

Eine Zuordnung in dieser Matrix stellt keine endgültige Architekturentscheidung dar. Änderungen sind ausdrücklich vorgesehen, wenn praktische Erfahrungen während der Implementierung zu einer besseren Lösung führen.

---

# Architekturprinzip

Der Base Layer definiert ausschließlich die Standarddarstellung nativer HTML-Elemente.

Er enthält:

- keine Komponenten
- keine Layouts
- keine Bootstrap-Klassen
- keine Joomla-spezifischen Klassen

Der Base Layer bildet die Grundlage für sämtliche Komponenten des WissensWerk Design Systems und besitzt die gestalterische Hoheit über alle nativen HTML-Elemente.
