[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-011 UI-Komponenten

## Zweck
Dieses Dokument beschreibt die Architektur der wiederverwendbaren UI-Komponenten innerhalb des Templates. Ziel ist eine modulare Struktur, die eine konsistente Gestaltung sowie die effiziente Wiederverwendung von Benutzeroberflächen ermöglicht.

## Architekturentscheidung
Wiederverwendbare Elemente der Benutzeroberfläche werden als eigenständige UI-Komponenten entwickelt.
Jede UI-Komponente besitzt eine klar definierte Aufgabe und kann unabhängig in verschiedenen Bereichen des Templates eingesetzt werden.

## Ziele
Die Architektur der UI-Komponenten verfolgt folgende Ziele:
- hohe Wiederverwendbarkeit
- konsistente Benutzeroberfläche
- Vermeidung von doppeltem Code
- einfache Wartbarkeit
- modulare Erweiterbarkeit

## Grundsätze

Für UI-Komponenten gelten folgende Regeln:
- Jede Komponente übernimmt genau eine Aufgabe
- Komponenten sind unabhängig voneinander
- Komponenten können mehrfach innerhalb des Templates verwendet werden
- Gestaltung und Funktion einer Komponente bilden eine Einheit

## Beispiele
Typische UI-Komponenten sind:
- Hero
- Card
- Accordion
- Galerie
- Alert
- Badge
- Breadcrumb
- Pagination
- Tabs
- Call-to-Action
- Feature Box
- Timeline

Die konkrete Umsetzung richtet sich nach den Anforderungen des Templates.

## Zusammenspiel
UI-Komponenten können innerhalb von:
- Layouts
- Joomla-Overrides
- Template-Dateien

verwendet werden.
Dadurch entsteht eine konsistente Benutzeroberfläche mit wiederverwendbaren Bausteinen.

** Verwandte Architekturdokumente

- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-010 Layout-Architektur](./ar-010-layout-architektur.md)

## Ergebnis
Die Architektur der UI-Komponenten definiert wiederverwendbare Bausteine für die Benutzeroberfläche. Durch ihre modulare Struktur lassen sich Gestaltung und Funktion konsistent umsetzen und effizient innerhalb des gesamten Templates wiederverwenden.
