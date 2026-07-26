[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-006 Web Asset API

## Zweck

Dieses Dokument beschreibt die Verwendung der Joomla Web Asset API innerhalb des Templates. Ziel ist eine zentrale, standardkonforme und wartbare Verwaltung aller CSS- und JavaScript-Ressourcen.

## Architekturentscheidung

Das Template verwendet ausschließlich die Joomla Web Asset API zur Einbindung von CSS- und JavaScript-Dateien.
Direkte Einbindungen innerhalb von Template-Dateien werden vermieden.

## Ziele
Die Nutzung der Web Asset API verfolgt folgende Ziele:

- Einhaltung der Joomla-Standards
- zentrale Verwaltung aller Assets
- eindeutige Abhängigkeiten zwischen Assets
- bessere Wartbarkeit
- Kompatibilität mit zukünftigen Joomla-Versionen

##  Grundsätze
Für die Einbindung von Assets gelten folgende Regeln:

- Assets werden zentral registriert.
- CSS- und JavaScript-Dateien werden ausschließlich über die Web Asset API geladen.
- Abhängigkeiten zwischen Assets werden über die Web Asset API definiert.
- Template-Dateien enthalten keine direkten <link>- oder <script>-Einbindungen.
  
## Verantwortlichkeiten
Die Web Asset API übernimmt:

- Registrierung der Assets
- Verwaltung von Abhängigkeiten
- Einbindung der Ressourcen
- Steuerung der Lade-Reihenfolge
- 
## Verwandte Architekturdokumente

- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-007 Bootstrap-Integration](./ar-007-bootstrap-integration.md)
- [🏗️ AR-008 Asset-Management](./ar-008-asset-management.md)

## Ergebnis
Die Joomla Web Asset API bildet die zentrale Schnittstelle zur Verwaltung sämtlicher CSS- und JavaScript-Ressourcen des Templates. Durch ihre konsequente Nutzung bleibt die Einbindung der Assets standardkonform, nachvollziehbar und wartbar.
