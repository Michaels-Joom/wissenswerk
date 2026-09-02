[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-009 Joomla-Overrides

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

## 1. Zweck

Dieses Dokument beschreibt den Einsatz von Joomla-Overrides innerhalb des WissensWerk-Templates.

Ziel ist die standardkonforme Anpassung der Ausgabe von Joomla-Komponenten und Modulen, ohne Änderungen am Joomla-Core vorzunehmen.

Overrides sind dabei ausschließlich ein Werkzeug für die Ausgabeanpassung. Sie ersetzen weder die Template-Architektur noch die Joomla-Funktionalität.

## 2. Architekturentscheidung

Anpassungen an der Ausgabe von Joomla-Komponenten und Modulen erfolgen bevorzugt über das Joomla-Override-System.

Der Joomla-Core wird nicht verändert.

Ein Override wird nur angelegt, wenn die gewünschte Ausgabe nicht bereits über Template-Layouts, Modulkonfiguration oder vorhandene Joomla-Mechanismen sinnvoll erreicht werden kann.

## 3. Grundsätze

Für Joomla-Overrides gelten:

- Overrides liegen innerhalb des vorgesehenen Template-Override-Bereichs.
- Der Joomla-Core wird nicht verändert.
- Overrides enthalten primär Ausgabelogik.
- Geschäftslogik gehört nicht in Overrides.
- Wiederverwendbare Strukturen werden nach Möglichkeit über Layouts organisiert.
- Projektspezifische Gestaltung erfolgt über WissensWerk-SCSS.
- JavaScript wird nicht unnötig direkt in Overrides eingebettet.
- Assets werden über die Joomla Web Asset API eingebunden.
- Bestehende Joomla-Ausgaben werden nur so weit überschrieben, wie es für das gewünschte Ergebnis erforderlich ist.

## 4. Typische Einsatzbereiche

Overrides können beispielsweise verwendet werden für:

- Module
- Komponenten
- Listen
- Bloglayouts
- Pagination
- Breadcrumbs
- Suchausgaben
- weitere Joomla-Ausgaben

Die konkrete Verwendung richtet sich nach der jeweiligen funktionalen Anforderung.

## 5. Abgrenzung

Ein Override übernimmt:

- Anpassung des HTML-Markups
- Einbindung vorhandener Layoutstrukturen
- Anpassung an das WissensWerk-Designsystem
- Darstellung von Joomla-Daten

Ein Override übernimmt nicht:

- Geschäftslogik
- eigenständige Datenverarbeitung
- Änderungen an Joomla-Core-Dateien
- globale Asset-Verwaltung
- vollständige JavaScript-Komponenten
- eigenständige Menülogik

## 6. Zusammenspiel mit Layouts und Komponenten

Die Ebenen werden getrennt betrachtet:

```text
Joomla
   │
   ▼
Override
   │
   ├── Layout
   │
   └── WissensWerk-Markup
           │
           ▼
      WissensWerk SCSS
```

Nicht jede Ausgabe benötigt ein Override.

Wenn eine wiederverwendbare HTML-Struktur benötigt wird, kann ein Layout die geeignetere Abstraktion sein.

Wenn eine eigenständige UI-Funktion entsteht, ist die Komponentenarchitektur zu prüfen.

## 7. Namenskonventionen

Eigene Klassen innerhalb von Overrides folgen den WissensWerk-Namenskonventionen.

Beispiel:

```html
<div class="ww-card">
```

Joomla-eigene Klassen bleiben erhalten, wenn sie für die Funktion oder Kompatibilität benötigt werden.

Die vollständigen Namenskonventionen sind in **AR-017 Namenskonventionen und Namensräume** beschrieben.

## 8. Update-Sicherheit

Overrides schützen den Joomla-Core vor direkten Änderungen.

Sie sind jedoch nicht automatisch vollständig updatefrei.

Bei Joomla-Updates können sich ändern:

- Datenstrukturen
- Template-Ausgaben
- verfügbare Variablen
- Markup
- Klassen
- Layoutdateien

Overrides müssen deshalb nach relevanten Joomla-Updates funktional geprüft werden.

## 9. Aktueller Stand

Overrides sind Bestandteil der vorgesehenen Architektur, werden aber nur bei konkretem Bedarf angelegt.

Die bisher entwickelte Navigation und das Offcanvas werden nicht durch unnötige Joomla-Overrides realisiert.

Die aktuelle Offcanvas-Struktur befindet sich innerhalb der WissensWerk-Template-Implementierung und nutzt Joomla-Modulpositionen.

## 10. Verwandte Dokumente

- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-003 Verzeichnisstruktur](./ar-003-verzeichnisstruktur.md)
- [🏗️ AR-010 Layout-Architektur](./ar-010-layout-architektur.md)
- [🏗️ AR-011 UI-Komponenten](./ar-011-ui-komponenten.md)
- [🏗️ AR-017 Namenskonventionen und Namensräume](./ar-017-namenskonventionen-namensraeume.md)

## 11. Ergebnis

Joomla-Overrides bleiben ein wichtiges Erweiterungsmittel des WissensWerk-Templates, werden jedoch gezielt eingesetzt.

Die Architektur bevorzugt die jeweils einfachste geeignete Joomla-konforme Lösung:

```text
Joomla-Mechanismus
      ↓
Layout
      ↓
Override
      ↓
eigene Komponente
```

Nicht jede Anforderung benötigt ein Override. Entscheidend ist eine klare Trennung von Ausgabe, Layout, Funktion und Geschäftslogik.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | Override-Architektur präzisiert, aktuelle WissensWerk-Struktur berücksichtigt und fehlerhafte Verweise korrigiert. |
