[[[ Inhaltsverzeichnis ]](./../table-of-contents.md)

---

# TF-000 Technische Grundlagen

**Dokumenttyp:** Technische Grundlage  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Zweck

Dieser Bereich dokumentiert die technischen Grundlagen des WissensWerk-Projekts.

Er beschreibt die Werkzeuge, Plattformen und Entwicklungsprozesse, auf denen das Projekt aufbaut.

Die technische Grundlage soll nachvollziehbar, wartbar und möglichst unabhängig von einzelnen Entwicklungsrechnern sein.

---

## Technische Basis

WissensWerk wird als Joomla-5-Template entwickelt.

Die aktuelle technische Grundlage besteht aus:

- Joomla 5.x
- Bootstrap 5
- Joomla Web Asset API
- SCSS / Sass
- JavaScript
- MetisMenu
- Node.js
- npm
- Terser
- Git
- GitHub

---

## Verantwortlichkeiten

### Joomla

Joomla stellt die CMS-Funktionen und die redaktionelle Infrastruktur bereit.

Dazu gehören insbesondere:

- Inhalte
- Menüs
- Module
- Routing
- Benutzerverwaltung
- Custom Fields
- Template-Mechanismen

### Bootstrap

Bootstrap stellt technische Grundlagen für:

- Grid
- Responsive Layouts
- Offcanvas
- Standardkomponenten
- Utilities

bereit.

Bootstrap-Core-Dateien werden nicht verändert.

### MetisMenu

MetisMenu übernimmt die hierarchische Menüinteraktion.

WissensWerk verwendet MetisMenu für:

- Öffnen und Schließen von Untermenüs
- hierarchische Zustände
- Collapse-Verhalten

Die visuelle Gestaltung bleibt Aufgabe des WissensWerk-Designsystems.

### WissensWerk

Das Template übernimmt:

- Layout
- Integration
- Design Tokens
- SCSS
- projektspezifisches JavaScript
- Template-Overrides
- Modulpositionen
- visuelle Gestaltung

---

## Asset-Verwaltung

Assets werden über die Joomla Web Asset API eingebunden.

Dadurch bleiben Abhängigkeiten zwischen CSS und JavaScript nachvollziehbar.

Die konkreten Regeln sind in den Architektur- und Entwicklungsdokumenten beschrieben.

---

## Build-System

SCSS und JavaScript werden getrennt entwickelt und gebaut.

JavaScript wird aktuell über Node.js, npm und Terser minifiziert.

Der Buildprozess erfolgt über das im Projekt definierte npm-Script.

Beispiel:

```text
npm.cmd run build:js
```

Der generierte Minified-Bestandteil wird anschließend im Template verwendet.

---

## Versionsverwaltung

Git bildet die lokale Versionsverwaltung.

GitHub dient als zentrale Remote-Ablage und Projekthistorie.

Der derzeitige Entwicklungsworkflow arbeitet direkt mit `main`.

Branching und Pull Requests sind als spätere Erweiterungen dokumentiert, aber derzeit nicht Bestandteil des aktiven Workflows.

---

## Entwicklungsumgebung

Die Entwicklung erfolgt unter anderem mit:

- Laragon
- Visual Studio Code
- Git
- Node.js / npm

Die konkrete Einrichtung der lokalen Umgebung wird im Bereich `environment` dokumentiert.

---

## Grundprinzipien

- Joomla-Core-Dateien werden nicht verändert.
- Bootstrap-Core-Dateien werden nicht verändert.
- Eigene Funktionen werden möglichst über vorgesehene Schnittstellen integriert.
- Assets werden über die Joomla Web Asset API verwaltet.
- Wiederverwendbare Designwerte werden über WissensWerk-Tokens gesteuert.
- Build-Artefakte werden reproduzierbar erzeugt.
- Änderungen werden über Git nachvollziehbar dokumentiert.

---

## Verwandte Dokumente

- [⚙️ TF-001 GitHub Workflow](./tf-001-github-workflow.md)
- [⚙️ TF-002 Issue Management](./tf-002-issue-management.md)
- [⚙️ TF-003 Branching Strategy](./tf-003-branching-strategy.md)
- [⚙️ TF-004 Commit Convention](./tf-004-commit-convention.md)
- [⚙️ TF-005 Pull Request Process](./tf-005-pull-request-process.md)
- [⚙️ TF-006 Release Management](./tf-006-release-management.md)
- [⚙️ TF-007 Versionierung](./tf-007-versionierung.md)

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliche technische Übersicht erstellt. |
| 2.0 | 02.09.2026 | Technische Grundlagen an die aktuelle Joomla-, Bootstrap-, MetisMenu-, Asset- und Buildarchitektur angepasst. |
