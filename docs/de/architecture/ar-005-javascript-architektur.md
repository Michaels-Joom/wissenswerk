[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-005 JavaScript-Architektur

## Zweck
Dieses Dokument beschreibt die Architektur der JavaScript-Dateien innerhalb des Templates. Es definiert die organisatorischen Regeln, die Struktur sowie die Verantwortlichkeiten der einzelnen JavaScript-Module.

Ziel ist eine modulare, übersichtliche und langfristig wartbare JavaScript-Architektur.

# Zielsetzung

Die JavaScript-Architektur verfolgt folgende Ziele:
- klare Trennung der Verantwortlichkeiten
- modulare Organisation
- hohe Wiederverwendbarkeit
- einfache Wartbarkeit
- gute Erweiterbarkeit
- einheitliche Struktur

## Architekturprinzipien
Die Organisation der JavaScript-Dateien erfolgt nach ihrer fachlichen Verantwortung.
Jedes Modul übernimmt genau eine Aufgabe innerhalb des Templates.
JavaScript ergänzt die Benutzeroberfläche um interaktive Funktionen und erweitert die Darstellungsschicht des Templates.

## Organisationsprinzip
Die JavaScript-Dateien werden thematisch organisiert.

Beispiele:
- Layout
- Navigation
- Komponenten
- Formulare
- Hilfsfunktionen

Innerhalb dieser Bereiche werden zusammengehörige Funktionen in eigenständigen Modulen gekapselt.

## Verantwortlichkeiten
Jeder Bereich besitzt eine klar definierte Aufgabe.

### Layout Steuert das Verhalten allgemeiner Layoutbereiche.
Beispiele:
- Sticky Header
- Scrollverhalten
- Offcanvas
- Responsive Navigation
- 
### Komponenten
Enthält JavaScript für wiederverwendbare Benutzeroberflächen.
Beispiele:
- Galerie
- Slider
- Tabs
- Akkordeon
- Modal-Fenster

### Formulare
Enthält Funktionen zur Unterstützung von Formularen.
Beispiele:
- Validierung
- Eingabehilfen
- Interaktive Formularelemente
- 
### Utilities
Enthält allgemeine Hilfsfunktionen.
Beispiele:
- Initialisierung
- Helper-Funktionen
- gemeinsame Werkzeuge

## Modularität
Jedes JavaScript-Modul besitzt eine klar abgegrenzte Verantwortung.
Module sollen möglichst unabhängig voneinander entwickelt und wiederverwendet werden.
Abhängigkeiten zwischen einzelnen Modulen sind auf das notwendige Maß zu beschränken.

## Einbindung
Die Einbindung der JavaScript-Dateien erfolgt über die Joomla Web Asset API.
Direkte Einbindungen innerhalb der Template-Dateien werden vermieden.
Die Verwaltung der Assets wird im Dokument AR-006 – Web Asset API beschrieben.

## Erweiterbarkeit
Neue Funktionen werden grundsätzlich als eigenständige Module entwickelt und dem fachlich passenden Bereich zugeordnet.
Bestehende Module werden nur erweitert, wenn dies ihrer ursprünglichen Verantwortung entspricht.

## Verwandte Architekturdokumente
Dieses Dokument wird ergänzt durch:

- [🏗️ AR-006 Web Asset API](./ar-006-web-asset-api.md)
- [🏗️ AR-008 Asset-Management](./ar-008-asset-management.md)
- [🏗️ AR-013 Build-Prozess](./ar-013-build-prozess.md)

## Ergebnis
Die JavaScript-Architektur organisiert sämtliche JavaScript-Dateien nach ihrer fachlichen Verantwortung. Durch die modulare Struktur bleiben Funktionen übersichtlich, wartbar und langfristig erweiterbar. Die Einbindung erfolgt über die Joomla Web Asset API und orientiert sich an den Architekturprinzipien des Templates.
