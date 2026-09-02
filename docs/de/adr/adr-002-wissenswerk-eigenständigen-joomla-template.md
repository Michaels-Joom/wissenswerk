# ADR-002 – WissensWerk basiert auf einem eigenständigen Joomla-Template

**Status:** Angenommen  
**Version:** 2.0  
**Datum:** 02.09.2026  
**Projekt:** WissensWerk

## Kontext

Joomla stellt mit Cassiopeia ein modernes Standardtemplate bereit, das auch als Grundlage für Child-Templates verwendet werden kann.

Für WissensWerk wurden jedoch eigene Anforderungen an Architektur, Verzeichnisstruktur, Designsystem und Komponentenentwicklung definiert. Die bisherigen Erfahrungen zeigten, dass die Übernahme einer bestehenden Template-Architektur zusätzliche Anpassungen erzeugen und die konsequente Umsetzung eigener Architekturprinzipien erschweren kann.

## Entscheidung

WissensWerk wird als **eigenständiges Joomla-Template** entwickelt.

Cassiopeia dient als Referenz für bewährte Joomla-Lösungsansätze, ist aber keine technische Basis des WissensWerk-Templates.

Bootstrap und die Joomla Web Asset API werden unabhängig davon genutzt, soweit sie für die Template-Architektur sinnvoll sind.

## Begründung

Ein eigenständiges Template ermöglicht die vollständige Kontrolle über:

- Template-Architektur
- Verzeichnisstruktur
- Designsystem
- SCSS-Architektur
- JavaScript-Integration
- Komponenten
- Joomla-Overrides
- Asset-Management

## Konsequenzen

### Vorteile

- vollständige Kontrolle über die Template-Architektur
- klare Trennung zwischen Joomla-Core und Projektcode
- konsequente Umsetzung des eigenen Designsystems
- keine technische Abhängigkeit von Cassiopeia
- bessere Nachvollziehbarkeit der eigenen Implementierung

### Nachteile

- höherer initialer Entwicklungsaufwand
- benötigte Template-Funktionen müssen bei Bedarf selbst umgesetzt werden
- vollständige Verantwortung für Wartung und Weiterentwicklung

## Alternative: Cassiopeia Child-Template

Ein Child-Template wurde aufgrund der bisherigen Projekterfahrungen verworfen.

Die Abhängigkeit von der bestehenden Template-Architektur hätte zusätzliche Anpassungen erfordert und die eigenständige Architektur des Projekts eingeschränkt.

## Fazit

Das eigenständige Template ermöglicht WissensWerk eine klare, kontrollierte und langfristig wartbare Architektur, ohne die Vorteile von Joomla, Bootstrap oder der Web Asset API aufzugeben.
