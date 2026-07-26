[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-001 Projektstruktur

## Zweck

Dieses Dokument beschreibt die grundlegende Organisation des Projekts. Es definiert die übergeordneten Architekturprinzipien sowie die Struktur des Entwicklungsprojekts. Ziel ist eine klare, nachvollziehbare und langfristig wartbare Projektorganisation.

## Zielsetzung

Die Projektstruktur verfolgt folgende Ziele:

- klare Organisation aller Projektbestandteile
- eindeutige Verantwortlichkeiten der Verzeichnisse
- einfache Wartbarkeit und Erweiterbarkeit
- einheitliche Projektstandards
- nachvollziehbare Versionsverwaltung
- übersichtliche Dokumentation

## Architekturprinzipien

Für das gesamte Projekt gelten folgende Grundsätze:

- Das Projekt wird in einem zentralen Entwicklungsverzeichnis gepflegt
- Jede Datei besitzt einen eindeutig definierten Zweck
- Dokumentation, Quellcode und Ressourcen sind logisch voneinander getrennt
- Einheitliche Namenskonventionen sorgen für eine gute Lesbarkeit
- Externe Bibliotheken werden nicht verändert
- Die Projektstruktur soll unabhängig von zukünftigen Joomla-Versionen möglichst stabil bleiben

## Projektorganisation

Das Entwicklungsverzeichnis enthält sämtliche Bestandteile des Projekts.

Dazu gehören unter anderem:
- Template-Dateien
- SCSS-Dateien
- JavaScript-Dateien
- Bilder und Schriftarten
- Sprachdateien
- Dokumentation
- Konfigurationsdateien

Die konkrete Verzeichnisstruktur wird im Dokument [AR-003 Verzeichnisstruktur](./ar-003-verzeichnisstruktur.md) beschrieben.

## Versionsverwaltung

Die gesamte Entwicklung erfolgt innerhalb eines Git-Repositories.
Git dient der lokalen Versionsverwaltung und ermöglicht die vollständige Nachverfolgung aller Änderungen.
GitHub wird als externes Repository zur Sicherung und Verwaltung des Projekts verwendet.

## Entwicklungsworkflow

Die Entwicklung erfolgt ausschließlich innerhalb des zentralen Projektverzeichnisses.
Änderungen werden dort erstellt, getestet und versioniert.
Die Erstellung der CSS-Dateien aus den SCSS-Quellen erfolgt über den definierten Build-Prozess und wird im Dokument AR-013 – Build-Prozess beschrieben.

Die Einrichtung der Entwicklungsumgebung ist Bestandteil des Dokuments AR-014 – Entwicklungsumgebung.

## Namenskonventionen
Für Dateien und Verzeichnisse gelten folgende Regeln:

- ausschließlich Kleinbuchstaben
- Bindestriche als Worttrenner
- keine Leerzeichen
- keine Sonderzeichen
- eindeutige und sprechende Bezeichnungen

Beispiele:
projektstruktur.md, template-architektur.md, layout-default.php, main.scss, navigation.js

## Verwandte Architekturdokumente
Dieses Dokument bildet die Grundlage für die folgenden Architekturdokumente:

- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-003 Verzeichnisstruktur](./ar-003-verzeichnisstruktur.md)
- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-013 Build-Prozess](./ar-013-build-prozess.md)
- [🏗️ AR-014 Entwicklungsumgebung](./ar-014-entwicklungsumgebung.md)
 
## Ergebnis

Die Projektstruktur definiert die grundlegende Organisation des Entwicklungsprojekts. Sie legt die Architekturprinzipien, die Projektorganisation und die Regeln für eine konsistente Entwicklung fest. Detailbeschreibungen einzelner Bereiche werden in den jeweils zuständigen Architekturdokumenten behandelt.
