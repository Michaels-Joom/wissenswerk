[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-007 Bootstrap-Integration

## Zweck
Dieses Dokument beschreibt die Integration von Bootstrap innerhalb des Templates. Es definiert die Grundsätze für den Einsatz des Frameworks sowie den Umgang mit dessen Komponenten und Styles.

## Architekturentscheidung

Das Template nutzt Bootstrap als CSS- und JavaScript-Framework.
Bootstrap wird nicht verändert, sondern über eigene SCSS-Dateien und Design Tokens erweitert bzw. angepasst.

weitere Informationen
[📐 Bootstrap wird über Tokens gesteuert](../adr/adr-001-bootstrap-integration.md)

## Ziele
Die Bootstrap-Integration verfolgt folgende Ziele:

- Nutzung bewährter Standardkomponenten
- Reduzierung des Entwicklungsaufwands
- Einheitliches Responsive Design
- Einfache Wartbarkeit
- Kompatibilität mit zukünftigen Bootstrap-Versionen
  
## Grundsätze
Für den Einsatz von Bootstrap gelten folgende Regeln:

- Bootstrap-Core-Dateien werden nicht verändert.
- Eigene Anpassungen erfolgen ausschließlich außerhalb des Frameworks.
- **Farben, Schriftarten, Abstände und weitere Designelemente werden über Design Tokens gesteuert.**
- Eigene Komponenten ergänzen Bootstrap, ersetzen es jedoch nicht.

## Verantwortlichkeiten

### Bootstrap übernimmt:
- Grid-System
- Responsive Layouts
- Basis-Komponenten
- Utility-Klassen
- JavaScript-Komponenten

### Das Template übernimmt:
- individuelles Design
- Corporate Design
- Template-spezifische Komponenten
- Design Tokens
- SCSS-Erweiterungen

## Verwandte Architekturdokumente

- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-006 Web Asset API.md](./ar-006-web-asset-api.md)
- [🏗️ AR-008 Asset-Management](./ar-008-asset-management.md)
  
## Ergebnis
Bootstrap bildet die technische Grundlage für Layout und Standardkomponenten des Templates. Das individuelle Erscheinungsbild entsteht ausschließlich durch eigene SCSS-Dateien und Design Tokens, wodurch eine klare Trennung zwischen Framework und Template gewährleistet wird.
