[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-002 Template-Architektur

##Zweck
Dieses Dokument beschreibt die grundlegende Architektur des Joomla-Templates. Es definiert den strukturellen Aufbau des Templates sowie das Zusammenspiel seiner zentralen Bestandteile. Ziel ist eine modulare, wartbare und langfristig erweiterbare Template-Architektur.

## Zielsetzung
Die Template-Architektur verfolgt folgende Ziele:

- klare Trennung der Verantwortlichkeiten
- modulare Struktur
- hohe Wartbarkeit
- einfache Erweiterbarkeit
- Nutzung der Joomla-Template-Mechanismen
- möglichst geringe Abhängigkeiten zwischen den einzelnen Bereichen
- 
## Architekturprinzipien
Für die Entwicklung des Templates gelten folgende Grundsätze:

- Das Template bildet ausschließlich die Darstellungsschicht der Website
- Geschäftslogik wird nicht innerhalb des Templates umgesetzt
- Joomla-Kernfunktionen werden nicht verändert
- Erweiterungen erfolgen über die vorgesehenen Joomla-Schnittstellen
- Wiederverwendbare Bestandteile werden zentral organisiert
- Änderungen sollen möglichst lokal erfolgen und keine unnötigen Auswirkungen auf andere Bereiche haben.

Bevorzuge Joomla-konforme und allgemein verständliche Lösungen gegenüber zusätzlichen Abstraktionsschichten, sofern diese keinen deutlichen funktionalen oder wartungstechnischen Vorteil bieten.

## Architekturentwicklung
WissensWerk nutzt bevorzugt die Mechanismen des Joomla-Cores. Eigene Lösungen werden nur dann entwickelt, wenn der Core keine geeignete oder wartbare Möglichkeit bietet.

Die Template-Architektur wird schrittweise entwickelt und anhand praktischer Erfahrungen kontinuierlich überprüft. Architekturentscheidungen werden bewusst getroffen, dokumentiert und im Projekt umgesetzt.

Neue Konzepte werden zunächst im praktischen Einsatz bewertet. Zeigt sich, dass eine Architekturentscheidung den Entwicklungsprozess erschwert oder keinen erkennbaren Mehrwert bietet, wird sie überprüft und gegebenenfalls durch eine neue Architekturentscheidung ersetzt. Änderungen erfolgen nachvollziehbar und werden in der Projektdokumentation festgehalten.

Layoutzonen verwenden dieselbe Bezeichnung für Modulposition, PHP-Variable und CSS-Klasse. Dadurch entsteht eine eindeutige und leicht nachvollziehbare Zuordnung zwischen Templatecode, Modulpositionen und Stylesheet. Zusätzliche Benennungskonzepte werden vermieden, sofern sie keinen funktionalen Mehrwert bieten.

Ziel ist eine verständliche, wartbare und Joomla-konforme Template-Architektur. Architekturentscheidungen dienen der Lösung konkreter Anforderungen und sind kein Selbstzweck.

## Bestandteile des Templates
Das Template besteht aus mehreren logisch getrennten Bereichen.
Dazu gehören unter anderem:

- Template-Grundgerüst
- Layouts
- Modulpositionen
- Template-Overrides
- Komponenten-Layouts
- Medien (CSS, JavaScript, Bilder, Schriftarten)
- Sprachdateien
- Konfigurationsdateien

Jeder Bereich besitzt eine klar definierte Aufgabe innerhalb der Template-Architektur.

## Verantwortlichkeiten
Die einzelnen Bestandteile übernehmen unterschiedliche Aufgaben.

Beispiele:
- Das Template-Grundgerüst definiert den Seitenaufbau
- Layouts strukturieren wiederverwendbare Seitenelemente
- Overrides passen die Ausgabe von Joomla an
- Medien steuern Darstellung und Interaktionen.
- Sprachdateien stellen mehrsprachige Texte bereit
- Konfigurationsdateien beschreiben das Template und seine Einstellungen.

## Erweiterbarkeit
Die Architektur ist darauf ausgelegt, zukünftige Erweiterungen ohne grundlegende Änderungen der bestehenden Struktur zu ermöglichen.

Neue Layouts, Overrides oder Medien können ergänzt werden, ohne die Gesamtarchitektur zu verändern.

## Zusammenarbeit mit Joomla
Das Template nutzt ausschließlich die von Joomla bereitgestellten Erweiterungsmöglichkeiten.

Dazu gehören insbesondere:
- Template-Dateien
- Modulpositionen
- Layouts
- Template-Overrides
- Web Asset API
- Template-Konfiguration

Dadurch bleibt die Kompatibilität mit zukünftigen Joomla-Versionen möglichst erhalten.

## Abgrenzung
Dieses Dokument beschreibt ausschließlich die grundlegende Architektur des Templates.
Die Detailbeschreibungen erfolgen in separaten Architekturdokumenten:

- [🏗️ AR-003 Verzeichnisstruktur](./ar-003-verzeichnisstruktur.md)
- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-006 Web Asset API.md](./ar-006-web-asset-api.md)
- [🏗️ AR-007 Bootstrap-Integration](./ar-007-bootstrap-integration.md)
- [🏗️ AR-009 Joomla-Overrides](./ar-009-joomla-overrides.md)
- [🏗️ AR-010 Template-Overrides](./ar-010-template-overrides.md)
- [🏗️ AR-011 Layout-Architektur](./ar-011-layout-architektur.md)
- [🏗️ AR-012 Komponentenarchitektur](./ar-012-komponentenarchitektur.md)


## Ergebnis
Die Template-Architektur definiert den strukturellen Aufbau des Joomla-Templates sowie die Verantwortlichkeiten seiner zentralen Bestandteile. Sie bildet die konzeptionelle Grundlage für alle weiteren Architekturdokumente und stellt sicher, dass das Template modular, wartbar und langfristig erweiterbar entwickelt werden kann.
