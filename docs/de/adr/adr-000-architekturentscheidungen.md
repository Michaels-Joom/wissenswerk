[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md)

# ADR-000 – Architekturentscheidungen

**Status:** Aktiv  
**Version:** 2.0  
**Datum:** 02.09.2026  
**Projekt:** WissensWerk

---

## Zweck

Dieses Dokument dient als zentrale Übersicht aller dokumentierten Architekturentscheidungen (Architecture Decision Records, ADR) des WissensWerk-Projekts.

Ein ADR beschreibt eine bewusst getroffene technische oder gestalterische Entscheidung, deren Hintergründe, Alternativen und Auswirkungen auch zu einem späteren Zeitpunkt nachvollziehbar bleiben sollen.

Die eigentlichen Entscheidungen werden jeweils in einem eigenen ADR dokumentiert.

---

# ADR-Übersicht

| ID | Entscheidung | Status |
|---|---|---|
| [ADR-001](./adr-001-bootstrap-integration.md) | Bootstrap wird über Design Tokens gesteuert | Angenommen |
| [ADR-002](./adr-002-wissenswerk-eigenständigen-joomla-template.md) | WissensWerk basiert auf einem eigenständigen Joomla-Template | Angenommen |
| [ADR-008](./adr-008-breadcrumbs-override.md) | Breadcrumbs werden über einen Template-Override in das WissensWerk-Designsystem integriert | Angenommen |

---

# Grundsätze für Architekturentscheidungen

Architekturentscheidungen des Projekts orientieren sich insbesondere an folgenden Grundsätzen:

- Joomla-Core-Dateien werden niemals verändert.
- Erweiterungen erfolgen bevorzugt über Templates, Template-Overrides, Plugins und Joomla-Events.
- Bootstrap wird als technische Basis verwendet, nicht als verbindliche Gestaltungsebene.
- Das WissensWerk-Designsystem definiert Farben, Abstände, Typografie und visuelle Komponenten.
- Eigene CSS-Klassen und CSS Custom Properties verwenden das Präfix `ww-` beziehungsweise `--ww-`.
- Funktionalität und Präsentation werden soweit sinnvoll voneinander getrennt.
- Drittanbieter-Bibliotheken werden über ihre vorgesehenen Schnittstellen integriert und nicht direkt verändert.
- Architekturentscheidungen werden dokumentiert, sobald sie für Wartbarkeit, Erweiterbarkeit oder spätere Entwicklungsentscheidungen relevant sind.

---

# Dokumentationsprinzip

ADR-Dokumente sind keine allgemeine technische Dokumentation und keine Schritt-für-Schritt-Anleitungen.

Sie beantworten insbesondere:

1. **Welche Entscheidung wurde getroffen?**
2. **Warum wurde sie getroffen?**
3. **Welche Alternativen wurden betrachtet?**
4. **Welche Auswirkungen hat die Entscheidung?**
5. **Welche Projektprinzipien werden dadurch unterstützt?**

Implementierungsdetails gehören dagegen in die entsprechenden Architektur- oder Entwicklungsdokumente.

---

# Pflege

Neue Architekturentscheidungen werden als eigenständige ADR-Datei angelegt und anschließend in dieser Übersicht ergänzt.

Bestehende ADRs werden nicht rückwirkend überschrieben, wenn sich lediglich die Implementierung weiterentwickelt. Ändert sich die eigentliche Architekturentscheidung, wird die bestehende Entscheidung entsprechend dokumentiert oder ein neues ADR angelegt.

---

## Verwandte Dokumentation

Die ADRs stehen im Zusammenhang mit den Architektur- und Entwicklungsdokumenten des WissensWerk-Projekts. Für konkrete Implementierungen sind die jeweiligen AR- und DV-Dokumente maßgeblich.
