[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-009 Joomla-Overrides

##Zweck
Dieses Dokument beschreibt den Einsatz von Joomla-Overrides innerhalb des Templates. Ziel ist eine standardkonforme Anpassung der Ausgabe von Joomla-Komponenten und -Modulen, ohne Änderungen am Joomla-Kern vorzunehmen.

## Architekturentscheidung

Anpassungen der Joomla-Ausgabe erfolgen ausschließlich über das Override-System von Joomla.
Der Joomla-Kern wird nicht verändert.

## Ziele
Der Einsatz von Overrides verfolgt folgende Ziele:

- Einhaltung der Joomla-Standards
- Update-Sicherheit
- klare Trennung zwischen Joomla-Kern und Template
- einfache Wartbarkeit
- langfristige Erweiterbarkeit
  
## Grundsätze
Für Joomla-Overrides gelten folgende Regeln:

- Overrides werden ausschließlich im Verzeichnis html/ erstellt
- Änderungen am Joomla-Kern sind nicht zulässig
- Overrides enthalten ausschließlich Anpassungen der Ausgabe
- Overrides dienen ausschließlich der Darstellung
- Funktionale Erweiterungen werden außerhalb des Override-Systems umgesetzt.
  
## Verantwortlichkeiten
### Overrides übernehmen:
- Anpassung des HTML-Markups
- Anpassung der Ausgabe an das Template-Design
- Integration der Template-Layouts

### Nicht Bestandteil von Overrides sind:
- Änderungen an Joomla-Funktionen
- Datenverarbeitung
- Geschäftslogik
 
##  Verwandte Architekturdokumente

- [🏗️ AR-001 Projektstruktur](./ar-001-projektstruktur.md)
- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-010 Template-Overrides](./ar-010-template-overrides.md)
- [🏗️ AR-011 Layout-Architektur](./ar-011-layout-architektur.md)

## Ergebnis

Joomla-Overrides ermöglichen eine flexible und update-sichere Anpassung der Ausgabe von Komponenten und Modulen. Durch die konsequente Nutzung des Override-Systems bleibt der Joomla-Kern unverändert und das Template langfristig wartbar.
