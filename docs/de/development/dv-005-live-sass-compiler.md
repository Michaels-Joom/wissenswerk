[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🛠️ Entwicklungsübersicht](./dv-000-entwicklunguebersicht.md)

---

# DV-005 Live Sass Compiler

**Dokumenttyp:** Entwicklungsdokumentation  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Der Live Sass Compiler dient der automatischen Kompilierung der SCSS-Dateien des WissensWerk-Templates während der lokalen Entwicklung.

Die Konfiguration beschränkt die Überwachung auf die für das Template relevanten SCSS-Dateien.

---

## Aktuelle Rolle im Projekt

Der Live Sass Compiler bleibt der aktuelle Entwicklungsworkflow für SCSS.

Parallel dazu existiert inzwischen eine Node.js-/npm-Infrastruktur für den JavaScript-Build.

Diese beiden Aufgaben sind bewusst getrennt:

```text
SCSS
  ↓
Live Sass Compiler
  ↓
CSS

JavaScript
  ↓
npm / Terser
  ↓
minifiziertes JavaScript
```

Damit wird nicht unnötig der gesamte Asset-Build auf ein einziges Werkzeug umgestellt.

---

## Architekturentscheidung

Für die laufende SCSS-Entwicklung wird der **Live Sass Compiler für Visual Studio Code** verwendet.

Gründe:

- direkte Integration in Visual Studio Code
- automatische Kompilierung beim Speichern
- Source Maps für die Entwicklung
- geringer zusätzlicher Konfigurationsaufwand
- gute Eignung für die aktuelle Templateentwicklung

Node.js und npm werden inzwischen für den JavaScript-Build verwendet, ersetzen aber den Live Sass Compiler derzeit nicht.

---

## Source Maps

Während der Entwicklung bleiben Source Maps aktiviert.

Dadurch können die Browser-Entwicklertools die kompilierten CSS-Regeln den ursprünglichen SCSS-Dateien und Zeilennummern zuordnen.

Source Maps dienen ausschließlich der Entwicklung.

Für einen späteren Release-Build soll CSS ohne Entwicklungs-Source-Maps und gegebenenfalls minifiziert ausgeliefert werden.

---

## Projektstruktur

```text
media/
└── templates/
    └── site/
        └── wissenswerk/
            ├── css/
            ├── fonts/
            ├── images/
            ├── js/
            └── scss/
                └── template.scss
```

Die SCSS-Architektur selbst ist in den Architektur- und Designsystem-Dokumenten beschrieben.

---

## Kompilierungsstrategie

WissensWerk verwendet einen zentralen SCSS-Einstiegspunkt:

```text
template.scss
```

Weitere SCSS-Dateien werden über die SCSS-Architektur eingebunden.

Beispiel:

```scss
@use "abstracts/variables";
@use "layout/header";
@use "components/buttons";
```

Ziel ist eine kontrollierte Ausgabe in den CSS-Bereich des Templates.

---

## VS-Code-Konfiguration

Die projektbezogene Konfiguration befindet sich in:

```text
.vscode/settings.json
```

Die konkreten Einstellungen für Basisverzeichnis, überwachte Dateien, Ausgabe und Source Maps werden dort zentral gepflegt.

Wichtig ist, dass der Compiler ausschließlich den vorgesehenen WissensWerk-SCSS-Bereich überwacht.

---

## Debugging

Für die Analyse des Live Sass Compilers können die entsprechenden VS-Code-Befehle verwendet werden, insbesondere:

- Live Sass: Get all included files
- Live Sass: Check file will be included
- Live Sass: Open Live Sass Output Window

Bei Problemen kann der Log-Level auf `Trace` erhöht werden.

---

## Entwicklungsworkflow

```text
SCSS-Datei bearbeiten
        ↓
Datei speichern
        ↓
Live Sass Compiler
        ↓
CSS aktualisieren
        ↓
Browser prüfen
        ↓
Layout / Responsive Verhalten prüfen
        ↓
Git
```

---

## Abgrenzung zum JavaScript-Build

Der JavaScript-Build verwendet Node.js, npm und Terser.

Der SCSS-Workflow verwendet weiterhin den Live Sass Compiler.

Damit sind die aktuellen Entwicklungsprozesse:

| Asset | Entwicklungswerkzeug |
|---|---|
| SCSS | Live Sass Compiler |
| JavaScript | Node.js / npm / Terser |

Eine spätere Zusammenführung in einen gemeinsamen Buildprozess ist möglich, aber aktuell nicht erforderlich.

---

## Fazit

Der Live Sass Compiler bleibt ein sinnvoller Bestandteil der lokalen WissensWerk-Entwicklung.

Die inzwischen vorhandene Node.js-/npm-Infrastruktur für JavaScript ändert daran nichts.

Die Trennung der beiden Prozesse hält den aktuellen Entwicklungsworkflow einfach und nachvollziehbar.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprüngliche Live-Sass-Compiler-Dokumentation erstellt. |
| 2.0 | 02.09.2026 | Dokument an die inzwischen vorhandene Node.js-/npm-Infrastruktur angepasst und SCSS- und JavaScript-Build sauber voneinander abgegrenzt. |
