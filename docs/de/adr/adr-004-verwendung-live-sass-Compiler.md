# ADR-004 – Verwendung des Live Sass Compilers

**Status:** Angenommen  
**Version:** 2.0  
**Datum:** 02.09.2026  
**Projekt:** WissensWerk

## Kontext

Für die Entwicklung des WissensWerk-Templates werden SCSS-Dateien verwendet. Für die laufende Entwicklung wird ein Werkzeug benötigt, das Änderungen automatisch in CSS überführt.

Betrachtet wurden unter anderem Live Sass Compiler, Dart Sass CLI, npm-basierte Build-Prozesse, Vite, Webpack und Gulp.

## Entscheidung

Für die laufende SCSS-Entwicklung wird der **Live Sass Compiler von Glenn Marks** innerhalb von Visual Studio Code verwendet.

Die projektbezogene Konfiguration wird über `.vscode/settings.json` festgelegt.

## Begründung

Der Live Sass Compiler integriert sich direkt in die vorhandene Entwicklungsumgebung und bietet für die SCSS-Entwicklung:

- automatische Kompilierung
- Source Maps
- Autoprefixer
- projektbezogene Konfiguration
- Partials
- definierte Ausgabeziele

## Arbeitsweise

Der Compiler wird gezielt auf das SCSS-Verzeichnis des WissensWerk-Templates begrenzt.

Als Einstiegspunkt dient:

```text
template.scss
```

Die übrigen SCSS-Dateien werden als Partials eingebunden.

Damit wird eine zentrale CSS-Ausgabe erzeugt.

## Abgrenzung zum JavaScript-Build

Die Entscheidung für den Live Sass Compiler betrifft ausschließlich die SCSS-Entwicklung.

JavaScript wird separat über Node.js/npm und Terser verarbeitet. Dieser Build ist in DV-010 dokumentiert.

## Konsequenzen

### Vorteile

- geringe Komplexität
- direkte Integration in VS Code
- schnelle Entwicklungszyklen
- projektbezogene Konfiguration

### Nachteile

- Abhängigkeit von einer VS-Code-Erweiterung für den komfortablen Entwicklungsworkflow
- weniger geeignet für komplexe automatisierte Frontend-Buildprozesse

## Überprüfung

Die Entscheidung sollte erneut bewertet werden, wenn mehrere CSS-Bundles, ein automatisierter Release-Build oder ein gemeinsamer Frontend-Build für weitere Asset-Typen erforderlich werden.

## Fazit

Der Live Sass Compiler bleibt für die SCSS-Entwicklung die passende Lösung. Die separate JavaScript-Buildkette widerspricht dieser Entscheidung nicht, da beide Prozesse klar getrennt sind.
