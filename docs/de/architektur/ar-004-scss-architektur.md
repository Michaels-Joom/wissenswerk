[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-004 SCSS-Architektur

## Zielsetzung
Die SCSS-Architektur verfolgt folgende Ziele:

- klare Trennung der Verantwortlichkeiten
- modulare Organisation
- hohe Wiederverwendbarkeit
- einfache Wartbarkeit
- gute Erweiterbarkeit
- einheitliche Struktur

## Architekturprinzipien
Die Organisation der SCSS-Dateien erfolgt nach ihrer fachlichen Verantwortung.

Eine Datei wird nicht danach eingeordnet, welche CSS-Eigenschaften sie enthält, sondern welche Aufgabe sie innerhalb des Templates übernimmt.

Jede SCSS-Datei besitzt genau einen fachlichen Verantwortungsbereich.

## Strukturierungsprinzip

Die SCSS-Dateien werden thematisch nach Verantwortungsbereichen aufgebaut. Innerhalb einer Datei werden zusammengehörige Selektoren bewusst verschachtelt, um die Beziehung der Elemente sichtbar zu machen, die Lesbarkeit zu erhöhen und templateeigene Styles gezielt gegenüber Bootstrap zu positionieren. Ziel ist eine zusammenhängende Organisation der Styles eines Bereichs an einer zentralen Stelle.

## Organisationsprinzip
Die Verzeichnisstruktur orientiert sich an der Aufgabe der jeweiligen Styles.

Beispiele:
- Design
- Layout
- Komponenten
- Basisdefinitionen
- Hilfsklassen
- Design Tokens

Innerhalb dieser Bereiche werden thematisch zusammengehörige Dateien organisiert.

## Verantwortlichkeiten
Jeder Ordner besitzt eine klar definierte Aufgabe.

### Design
Enthält Styles zur Gestaltung fester Bereiche des Templates.
Beispiele:
- Header
- Footer
- Navigation
- Breadcrumbs
- Sidebar
  
## Komponenten
Enthält wiederverwendbare Benutzeroberflächen.
Beispiele:
- Galerie
- Karten
- Akkordeon
- Slider
- Buttons

## Layout
Definiert den strukturellen Seitenaufbau.
Beispiele:
 - Container
 - Grid
 - Bereiche
 - Spalten
 - Abstände
 - 
## Base
Grundlegende Styles des Projekts.
Beispiele:
- HTML-Grundelemente
- Typografie
- Resets

### Utilities
Hilfsklassen und technische Styles.

### Tokens
Enthält sämtliche Design Tokens
Beispiele:
- Farben
- Schriftgrößen
- Abstände
- Breakpoints
- Schatten
  
## Modularität

Jede SCSS-Datei beschreibt genau ein Thema.
Dateien sollen möglichst unabhängig voneinander entwickelt und gepflegt werden.
Abhängigkeiten zwischen einzelnen Bereichen sind auf das notwendige Maß zu reduzieren.

## Erweiterbarkeit
Neue Styles werden grundsätzlich dem fachlich passenden Bereich zugeordnet.
Bestehende Dateien werden nur erweitert, wenn dies ihrer ursprünglichen Verantwortung entspricht.

## Zusammenspiel mit weiteren Architekturdokumenten
Die SCSS-Architektur wird ergänzt durch:

- [🏗️ AR-007 Bootstrap-Integration](./ar-007-bootstrap-integration.md)
- [🏗️ AR-008 Asset-Management](./ar-008-asset-management.md)
- [🏗️ AR-013 Build-Prozess](./ar-013-build-prozess.md)

## Ergebnis
Die SCSS-Architektur organisiert sämtliche Styles nach ihrer fachlichen Verantwortung. Dadurch entsteht eine klare, modulare und langfristig wartbare Struktur, die unabhängig von der Größe des Projekts erweitert werden kann.
