[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-004 SCSS-Architektur

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

# 1. Zweck

Dieses Dokument beschreibt die Architektur der SCSS-Dateien innerhalb des WissensWerk-Templates.

Ziel ist eine fachlich strukturierte, wartbare und erweiterbare Stylesheet-Architektur, die das WissensWerk-Designsystem mit den technischen Grundlagen von Bootstrap verbindet.

---

# 2. Zielsetzung

Die SCSS-Architektur verfolgt folgende Ziele:

- klare Trennung der Verantwortlichkeiten
- zentrale Steuerung des Designs
- modulare Organisation
- hohe Wiederverwendbarkeit
- einfache Wartbarkeit
- kontrollierte Bootstrap-Integration
- konsistente Gestaltung aller Template-Bereiche
- gute Erweiterbarkeit

---

# 3. Architekturprinzipien

Die Organisation der SCSS-Dateien erfolgt nach ihrer fachlichen Verantwortung.

Eine Datei wird nicht danach eingeordnet, welche CSS-Eigenschaften sie enthält, sondern welche Aufgabe sie innerhalb des Templates übernimmt.

Jede SCSS-Datei besitzt möglichst einen klar abgegrenzten fachlichen Verantwortungsbereich.

Zusammengehörige Selektoren werden innerhalb eines Verantwortungsbereichs gebündelt, damit die Zuständigkeit eines Styles nachvollziehbar bleibt.

Ein wichtiges Projektprinzip lautet:

> Eine CSS-Eigenschaft soll möglichst nur einen klar verantwortlichen Bereich besitzen.

Damit werden konkurrierende Definitionen und schwer nachvollziehbare Überschreibungen vermieden.

---

# 4. Designsystem und Design Tokens

Das visuelle Erscheinungsbild wird durch das WissensWerk-Designsystem bestimmt.

Zentrale Designwerte werden über Design Tokens definiert, insbesondere:

- Farben
- Typografie
- Abstände
- Breakpoints
- Schatten
- weitere wiederkehrende Gestaltungswerte

Komponenten greifen auf diese zentralen Werte zurück, anstatt dieselben Werte an vielen Stellen erneut zu definieren.

Bootstrap stellt technische CSS-Grundlagen bereit, definiert jedoch nicht die visuelle Identität des Templates.

---

# 5. Organisationsprinzip

Die SCSS-Struktur wird nach fachlichen Verantwortlichkeiten organisiert.

Dazu gehören insbesondere:

- Tokens
- Basisdefinitionen
- Layout
- Komponenten
- templateweite Bereiche
- Navigation
- Offcanvas
- Utilities

Die tatsächliche Verzeichnisstruktur wird nur erweitert, wenn ein eigener Verantwortungsbereich entsteht.

---

# 6. Aktuelle Komponentenstruktur

Die aktuelle Entwicklung enthält unter anderem:

```text
scss/
├── components/
│   ├── _offcanvas.scss
│   └── _offcanvas-navigation.scss
│
└── _metismenu.scss
```

Die Dateien übernehmen unterschiedliche Aufgaben.

### `_metismenu.scss`

Enthält die gemeinsame visuelle Gestaltung der MetisMenu-basierten Navigation.

Dazu gehören insbesondere:

- Menüstruktur
- Ebenen
- Untermenüs
- aktive Zustände
- Toggle-Darstellung
- Fokuszustände
- responsive Darstellung

### `_offcanvas.scss`

Enthält das Layout und die Gestaltung des Offcanvas-Bereichs.

Dazu gehören insbesondere:

- Header
- Body
- Navigation-Container
- Such-/CTA-Bereiche
- Footer
- Scrollverhalten
- responsive Ausgestaltung

### `_offcanvas-navigation.scss`

Enthält die spezifische Gestaltung der Navigation innerhalb des Offcanvas.

Damit können gemeinsame MetisMenu-Regeln und Offcanvas-spezifische Regeln voneinander getrennt werden.

---

# 7. Verantwortlichkeiten

## Tokens

Zentrale Designwerte.

## Base

Grundlegende Styles für HTML und allgemeine Elemente.

## Layout

Strukturelle Bereiche wie:

- Container
- Grid
- Seitenbereiche
- Spalten
- Layoutabstände

## Komponenten

Wiederverwendbare UI-Bausteine.

Beispiele:

- Karten
- Buttons
- Formularelemente
- weitere eigenständige Komponenten

## Templatebereiche

Styles für feste Bereiche des Templates.

Beispiele:

- Header
- Footer
- Navigation
- Sidebar
- Offcanvas

## Utilities

Kleine technische Hilfsklassen mit klar abgegrenzter Aufgabe.

---

# 8. Bootstrap-Integration

Bootstrap wird nicht durch ein zweites, konkurrierendes CSS-Framework ersetzt.

Stattdessen werden seine technischen Grundlagen genutzt und über die WissensWerk-SCSS-Architektur ergänzt.

Grundprinzip:

```text
Bootstrap
    │
    └── technische CSS-Grundlagen
             │
             ▼
WissensWerk SCSS
    │
    ├── Design Tokens
    ├── Layout
    ├── Komponenten
    └── Templatebereiche
```

Bootstrap-Core-Dateien werden nicht verändert.

Die konkrete Bootstrap-Integration wird in **AR-007 Bootstrap-Integration** beschrieben.

---

# 9. Navigation

Die Navigation verwendet MetisMenu als technische Grundlage für die hierarchische Menüinteraktion.

Die SCSS-Architektur ist davon getrennt:

```text
MetisMenu
    → Verhalten

WissensWerk SCSS
    → Darstellung
```

Die gemeinsame visuelle Menügestaltung wird in unterschiedlichen Layoutbereichen wiederverwendet.

Dazu gehören insbesondere:

- Header
- Sidebar
- Offcanvas

Die Zustandslogik dieser Bereiche wird durch JavaScript gesteuert und nicht durch SCSS ersetzt.

---

# 10. Responsive Verhalten

Responsive Regeln werden auf den tatsächlichen Layoutbedarf des Templates abgestimmt.

Bootstrap stellt hierfür technische Grundlagen bereit.

WissensWerk ergänzt diese Regeln durch eigene responsive Vorgaben.

Besonders bei Navigation und Offcanvas wird darauf geachtet, dass:

- Inhalte nicht horizontal überlaufen,
- Menübereiche auf kleinen Bildschirmen bedienbar bleiben,
- scrollbare Bereiche gezielt definiert werden,
- Touch-Bedienflächen ausreichend dimensioniert sind.

---

# 11. Modularität

Jede SCSS-Datei soll einen klar definierten fachlichen Zweck besitzen.

Dateien sollen möglichst unabhängig entwickelt und gepflegt werden.

Abhängigkeiten zwischen Bereichen werden auf das notwendige Maß begrenzt.

Neue Styles werden zunächst dem bestehenden Verantwortungsbereich zugeordnet.

Eine neue Datei wird erst angelegt, wenn dadurch eine sinnvolle fachliche Trennung entsteht.

---

# 12. Erweiterbarkeit

Neue Komponenten oder Layoutbereiche werden in den fachlich passenden SCSS-Bereich integriert.

Dabei soll geprüft werden:

- ob ein bestehender Style wiederverwendet werden kann,
- ob ein Design Token bereits vorhanden ist,
- ob Bootstrap-Funktionalität genutzt werden kann,
- ob eine neue Datei tatsächlich notwendig ist.

Damit soll verhindert werden, dass sich im Laufe der Entwicklung parallele oder redundante Styles entwickeln.

---

# 13. Build und Auslieferung

SCSS ist die Entwicklungsquelle.

Die daraus erzeugten CSS-Dateien sind Ausgabedateien.

Grundprinzip:

```text
SCSS
  │
  ▼
Sass / Build
  │
  ▼
CSS
  │
  ▼
Joomla Web Asset API
  │
  ▼
Browser
```

CSS-Ausgabedateien werden nicht manuell bearbeitet.

Der Buildprozess wird in **AR-012 Build-Prozess** und **DV-010 JavaScript-Buildprozess** im jeweils zuständigen Umfang dokumentiert.

---

# 14. Wartbarkeit

Die SCSS-Architektur soll verhindern, dass sich Zuständigkeiten über mehrere Dateien verteilen.

Bei Änderungen ist deshalb zunächst zu klären:

1. Welche Komponente ist betroffen?
2. Wer besitzt die fachliche Verantwortung?
3. Gibt es bereits ein Design Token?
4. Gibt es bereits eine Bootstrap-Regel, die genutzt werden kann?
5. Ist eine neue Regel oder Datei tatsächlich erforderlich?

Diese Vorgehensweise reduziert unnötige Überschreibungen und erleichtert spätere Änderungen.

---

# 15. Verwandte Architekturdokumente

- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-006 Web Asset API](./ar-006-web-asset-api.md)
- [🏗️ AR-007 Bootstrap-Integration](./ar-007-bootstrap-integration.md)
- [🏗️ AR-008 Asset-Management](./ar-008-asset-management.md)
- [🏗️ AR-010 Layout-Architektur](./ar-010-layout-architektur.md)
- [🏗️ AR-015 Design-System](./ar-015-design-system.md)

---

# 16. Aktueller Stand

Die SCSS-Architektur ist für die bisher umgesetzten Templatebereiche etabliert.

Insbesondere sind folgende Verantwortlichkeiten praktisch umgesetzt:

- zentrale Design Tokens
- Bootstrap-Integration
- MetisMenu-Darstellung
- Header-Navigation
- Sidebar-Navigation
- Offcanvas
- Offcanvas-Navigation
- responsive Layoutregeln
- Fokus- und Zustandsdarstellung

Die Architektur bleibt bewusst offen für weitere Komponenten, ohne die bestehende Zuständigkeitsstruktur unnötig zu verändern.

---

# 17. Ergebnis

Die SCSS-Architektur trennt technische Grundlagen und projektspezifische Gestaltung.

```text
Design Tokens
      │
      ▼
WissensWerk SCSS
      │
      ├── Layout
      ├── Navigation
      ├── Offcanvas
      └── Komponenten
      │
      ▼
Bootstrap / Browser
```

Damit bleibt das visuelle Erscheinungsbild zentral steuerbar und gleichzeitig von Bootstrap-Vendor-Code getrennt.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | SCSS-Architektur an den aktuellen Entwicklungsstand angepasst; Design Tokens, MetisMenu, Offcanvas, tatsächliche Komponentenstruktur und Bootstrap-Abgrenzung ergänzt. |
