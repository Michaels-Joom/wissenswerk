[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [📐 Architekturentscheidungen (ADR)](./adr-000-architekturentscheidungen.md)

# ADR-005 – Konfiguration des Live Sass Compilers

**Status:** Angenommen  
**Version:** 2.0  
**Datum:** 02.09.2026  
**Projekt:** WissensWerk

## Kontext

Bei der Einrichtung des Live Sass Compilers wurden verschiedene Konfigurationsvarianten geprüft. Ziel war eine auf das WissensWerk-Template begrenzte und reproduzierbare SCSS-Kompilierung.

## Entscheidung

Die Compiler-Konfiguration wird projektbezogen in Visual Studio Code hinterlegt.

Der Arbeitsbereich wird auf das SCSS-Verzeichnis des Templates begrenzt:

```json
"liveSassCompile.settings.forceBaseDirectory":
"/media/templates/site/wissenswerk/scss"
```

Dadurch wird nicht die gesamte Joomla-Installation überwacht.

## Einstiegspunkt

Als einziger Einstiegspunkt dient:

```text
template.scss
```

Weitere SCSS-Dateien werden als Partials eingebunden.

Damit wird eine zentrale CSS-Datei erzeugt:

```text
template.css
```

## Relative Ausgabe

Die Ausgabe wird relativ zum SCSS-Verzeichnis definiert:

```json
"savePath": "~/../css"
```

Dadurch bleibt die Konfiguration unabhängig vom konkreten Projektnamen.

## Source Maps

Source Maps bleiben während der Entwicklung aktiviert.

Sie ermöglichen die Zuordnung erzeugter CSS-Regeln zu den ursprünglichen SCSS-Dateien.

## Debugging

Für die Analyse von Konfigurationsproblemen kann der integrierte Trace-Modus verwendet werden. Er ermöglicht insbesondere die Kontrolle von überwachten Dateien, ausgeschlossenen Dateien, Partials, Zielpfaden und Kompilierungsschritten.

## Abgrenzung

Diese Konfiguration betrifft ausschließlich den SCSS-Entwicklungsworkflow.

Der JavaScript-Build über Node.js/npm und Terser ist davon unabhängig.

## Fazit

Die gewählte Konfiguration konzentriert den Live Sass Compiler auf genau den Bereich, für den er im WissensWerk-Projekt eingesetzt wird: die laufende SCSS-Entwicklung.
