[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-011 UI-Komponenten

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

## 1. Zweck

Dieses Dokument beschreibt die Architektur wiederverwendbarer UI-Komponenten innerhalb des WissensWerk-Templates.

Eine UI-Komponente ist ein eigenständiger visueller oder interaktiver Baustein mit klar definierter Verantwortung.

Nicht jede HTML-Struktur ist automatisch eine UI-Komponente.

## 2. Architekturentscheidung

Wiederverwendbare oder fachlich eigenständige Benutzeroberflächen werden als Komponenten organisiert, wenn dadurch ein konkreter Vorteil für Konsistenz, Wiederverwendung oder Wartbarkeit entsteht.

Vor einer neuen Komponente wird geprüft, ob:

- eine vorhandene Komponente wiederverwendet werden kann,
- Bootstrap bereits eine geeignete technische Komponente bereitstellt,
- ein einfaches Layout ausreichend ist,
- ein Joomla-Modul oder Override die passendere Lösung darstellt.

Damit wird eine unnötige Eigenkomponenten-Schicht vermieden.

## 3. Ziele

Die Komponentenarchitektur verfolgt folgende Ziele:

- konsistente Benutzeroberfläche
- Wiederverwendbarkeit
- klare Verantwortlichkeiten
- Vermeidung unnötiger Duplikate
- einfache Wartbarkeit
- kontrollierte Erweiterbarkeit
- gute Barrierefreiheit

## 4. Komponentenaufbau

Eine Komponente kann aus mehreren technischen Teilen bestehen:

```text
UI-Komponente
│
├── HTML / Layout
├── SCSS
├── optional JavaScript
└── optional Joomla-Integration
```

Nicht jede Komponente benötigt alle vier Ebenen.

Eine rein visuelle Komponente benötigt beispielsweise kein eigenes JavaScript.

## 5. Aktuelle Komponenten

Im bisherigen Entwicklungsstand sind insbesondere folgende eigenständige Bereiche vorhanden:

### Branding

Das Branding wird zentral über die Brand-Komponente bereitgestellt.

Beispiel:

```text
ww-brand
```

Die Komponente kann in unterschiedlichen Templatebereichen verwendet werden.

### Offcanvas

Das Offcanvas ist eine eigenständige responsive UI-Komponente.

Es verbindet:

- Bootstrap-Offcanvas
- WissensWerk-Layout
- MetisMenu-Navigation
- WissensWerk-SCSS
- projektspezifische JavaScript-Integration

Die detaillierte Architektur ist in **AR-016 Offcanvas-Architektur** dokumentiert.

### Navigation

Die hierarchische Navigation basiert auf Joomla-Menüstrukturen und MetisMenu.

Sie ist deshalb nicht als vollständig eigenständige WissensWerk-Menüimplementierung zu verstehen.

Die Zuständigkeiten lauten:

```text
Joomla
  → Menüstruktur

MetisMenu
  → Menüverhalten

WissensWerk
  → Integration und Darstellung
```

## 6. Beispiele für zukünftige Komponenten

Je nach den späteren Seiten und Mockups können weitere Komponenten entstehen, beispielsweise:

- Hero
- Card
- Accordion
- Galerie
- Alert
- Badge
- Breadcrumb
- Pagination
- Tabs
- Call-to-Action
- Feature Box
- Timeline

Diese Liste beschreibt mögliche Komponenten und stellt keine Aussage über bereits implementierte Funktionen dar.

## 7. Namenskonventionen

Eigene Komponenten verwenden den WissensWerk-Namensraum:

```text
ww-
```

Beispiele:

```text
ww-brand
ww-offcanvas
ww-sidebar
```

Die vollständige Regelung ist in **AR-017 Namenskonventionen und Namensräume** beschrieben.

## 8. Bootstrap-Komponenten

Bootstrap-Komponenten werden bevorzugt genutzt, wenn sie die benötigte technische Funktion bereits bereitstellen.

Beispiel:

```text
Bootstrap
    → Offcanvas-Funktion

WissensWerk
    → Layout und Gestaltung
```

Eine eigene Komponente wird nicht entwickelt, wenn Bootstrap bereits eine geeignete technische Grundlage bietet und keine zusätzlichen Anforderungen dagegen sprechen.

## 9. MetisMenu

MetisMenu wird als spezialisierte Bibliothek für die hierarchische Navigation verwendet.

Die WissensWerk-Komponente übernimmt nicht dessen allgemeine Collapse-Logik erneut.

WissensWerk ergänzt lediglich:

- visuelle Gestaltung
- projektspezifische Zustände
- Integration in Header, Sidebar und Offcanvas

## 10. Barrierefreiheit

Komponenten müssen grundsätzlich:

- tastaturbedienbar sein,
- sichtbare Fokuszustände besitzen,
- ausreichende Kontraste ermöglichen,
- semantisch sinnvolles HTML verwenden,
- Zustände für assistive Technologien nachvollziehbar machen,
- touch-geeignet sein, wenn sie auf mobilen Geräten eingesetzt werden.

Barrierefreiheit wird als Bestandteil der Komponente betrachtet und nicht nachträglich ergänzt.

## 11. Erweiterbarkeit

Neue Komponenten werden nur bei konkretem Bedarf eingeführt.

Vor der Erstellung wird geprüft:

1. Existiert bereits eine geeignete Komponente?
2. Kann Bootstrap genutzt werden?
3. Reicht ein Layout?
4. Wird eigenes JavaScript benötigt?
5. Welche Asset-Abhängigkeiten entstehen?
6. Ist die Komponente wirklich wiederverwendbar?

## 12. Verwandte Dokumente

- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-007 Bootstrap-Integration](./ar-007-bootstrap-integration.md)
- [🏗️ AR-010 Layout-Architektur](./ar-010-layout-architektur.md)
- [🏗️ AR-016 Offcanvas-Architektur](./ar-016-offcanvas-architektur.md)
- [🏗️ AR-017 Namenskonventionen und Namensräume](./ar-017-namenskonventionen-namensraeume.md)

## 13. Ergebnis

Die UI-Komponentenarchitektur stellt wiederverwendbare und klar abgegrenzte Bausteine bereit.

Dabei gilt:

```text
Bootstrap
  → vorhandene technische Komponenten nutzen

WissensWerk
  → Gestaltung und projektspezifische Erweiterung

Joomla
  → Inhalte und Strukturen bereitstellen
```

Dadurch bleibt die Komponentenarchitektur schlank und vermeidet unnötige Eigenentwicklungen.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | Komponentenarchitektur an den aktuellen Stand angepasst; Branding, Offcanvas, MetisMenu und Bootstrap-Abgrenzung ergänzt. |
