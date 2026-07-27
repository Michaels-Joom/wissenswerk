[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-012 Build-Prozess

## Zweck

Dieses Dokument beschreibt den Build-Prozess des Templates. Ziel ist die automatisierte Erstellung der CSS-Dateien aus den SCSS-Quellen.

---

## Architekturentscheidung
Der Build-Prozess dient ausschließlich der Kompilierung von SCSS-Dateien zu CSS-Dateien.
Weitere Build-Schritte sind nicht Bestandteil des Projekts.


## Ziele
Der Build-Prozess verfolgt folgende Ziele:

* automatische CSS-Erzeugung
* konsistente Ausgabe
* einfache Wartbarkeit
* reproduzierbare Ergebnisse

## Grundsätze
Für den Build-Prozess gelten folgende Regeln:

* Änderungen erfolgen ausschließlich an den SCSS-Dateien.
* CSS-Dateien werden automatisch erzeugt.
* CSS-Dateien werden nicht manuell bearbeitet.
* Der Build-Prozess beeinflusst keine PHP- oder JavaScript-Dateien.

## Verwandte Architekturdokumente

- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-008 Asset-Management](./ar-008-asset-management.md)
- [🏗️ AR-013 Entwicklungsumgebung](./ar-013-entwicklungsumgebung.md)

## Ergebnis

Der Build-Prozess stellt sicher, dass alle CSS-Dateien reproduzierbar aus den SCSS-Quellen erzeugt werden. Dadurch bleibt die Stylesheet-Architektur konsistent und wartbar.
