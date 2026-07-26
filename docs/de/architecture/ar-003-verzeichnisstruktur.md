[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-003 Verzeichnisstruktur

## Zweck
Die Projektstruktur orientiert sich an der Architektur von Joomla 5 und Joomla 6. Das Projekt gliedert sich in ein Template-Verzeichnis für die Template-Dateien sowie ein separates Medienverzeichnis für alle statischen Ressourcen.

Die Struktur orientiert sich an den Vorgaben von Joomla 5 und Joomla 6 und bildet die organisatorische Grundlage für die weitere Entwicklung.

## Zielsetzung
Die Verzeichnisstruktur verfolgt folgende Ziele:

- Einhaltung der Joomla-Standards
- klare Trennung der Verantwortlichkeiten
- übersichtliche Projektorganisation
- einfache Wartbarkeit
- langfristige Erweiterbarkeit

## Architekturprinzip

Joomla trennt die Template-Dateien und die statischen Ressourcen in zwei eigenständige Verzeichnisbereiche. Diese Trennung wird vom Template vollständig übernommen. Die Organisation der Medienressourcen wird in den entsprechenden Architekturdokumenten beschrieben.

### Template-Verzeichnis
Enthält sämtliche PHP-Dateien und Joomla-spezifischen Templatebestandteile.

### Medienverzeichnis
Enthält sämtliche statischen Ressourcen wie CSS, JavaScript, Bilder und Schriftarten.

_Diese Trennung wird vollständig übernommen_

## Template-Verzeichnis
```
templates/
└── dampfchroniken/
    ├── html/
    ├── language/
    ├── layouts/
    ├── index.php
    ├── error.php
    ├── offline.php
    └── templateDetails.xml
```
Dieses Verzeichnis enthält ausschließlich Template-Dateien.

```
**Verantwortlichkeiten**

html/                Joomla-Overrides für Komponenten und Module.
layouts/             Wiederverwendbare Layouts des Templates.
language/            Sprachdateien des Templates.

index.php            Zentrale Template-Datei.
error.php            Darstellung von Fehlerseiten.
offline.php          Darstellung der Offline-Seite.
templateDetails.xml  Joomla Manifest 
```
Installations- und Konfigurationsdatei des Templates.

## Verantwortlichkeiten
Die beiden Hauptbereiche besitzen klar abgegrenzte Aufgaben.

| Bereich               | Aufgabe                                 |
|-----------------------|-----------------------------------------|
| templates/            | Template-Dateien und Joomla-Integration |
| media/templates/site/ | statische Ressourcen                    |

Dadurch bleiben Programmcode und Medienressourcen konsequent voneinander getrennt.

## Erweiterbarkeit
Neue Ressourcen werden ausschließlich innerhalb des Medienverzeichnisses ergänzt.
Neue Layouts, Overrides oder Template-Dateien werden ausschließlich innerhalb des Template-Verzeichnisses angelegt.
Dadurch bleibt die Projektstruktur auch bei zukünftigen Erweiterungen übersichtlich und konsistent.

## Verwandte Architekturdokumente
Dieses Dokument wird ergänzt durch:

- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-006 Web Asset API.md](./ar-006-web-asset-api.md)
- [🏗️ AR-009 Joomla-Overrides](./ar-009-joomla-overrides.md)
- [🏗️ AR-010 Template-Overrides](./ar-010-template-overrides.md)

## Ergebnis
Die Verzeichnisstruktur übernimmt die von Joomla 5 und Joomla 6 vorgesehene Trennung zwischen Template-Dateien und Medienressourcen. Dadurch entsteht eine klare, wartbare und zukunftssichere Projektorganisation, die als Grundlage für alle weiteren Architekturdokumente dient.

