[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-010 Layout Architektur

## Zweck
Dieses Dokument beschreibt die Architektur der wiederverwendbaren Layouts innerhalb des Templates. Ziel ist eine modulare Struktur, die eine konsistente Darstellung und eine hohe Wiederverwendbarkeit von Template-Bausteinen ermöglicht.

## Architekturentscheidung
Das Template unterscheidet zwischen drei Ebenen:

- Seitenlayout (Struktur der Seite)
- Layouts (wiederverwendbare HTML-Ausgabebausteine)
- Komponenten (fachliche Benutzeroberfläche)

Wiederkehrende Ausgabestrukturen werden als eigenständige Layouts umgesetzt. Layouts dienen ausschließlich der Darstellung und können an verschiedenen Stellen des Templates, in Overrides oder innerhalb anderer Layouts wiederverwendet werden.

Das eigentliche Seitenlayout wird durch die index.php definiert und anschließend mittels CSS Grid und Flexbox gestaltet.ellen des Templates wiederverwendet werden.

## Ziele
Die Layout-Architektur verfolgt folgende Ziele:

- Wiederverwendbarkeit
- einheitliche Darstellung
- Vermeidung von doppeltem Code
- einfache Wartbarkeit
- klare Trennung der Verantwortlichkeiten
- konsistenter Seitenaufbau
- Entkopplung von Layout und Inhalt


## Grundsätze
Für Layouts gelten folgende Regeln:

- Jedes Layout übernimmt genau eine Aufgabe.
- Layouts enthalten ausschließlich Darstellungslogik.
- Layouts enthalten keine Geschäftslogik.
- Layouts können von Template-Dateien und Overrides gemeinsam genutzt werden.
- Wiederkehrende HTML-Strukturen werden als Layout ausgelagert.
- Layouts dürfen keine Annahmen über den konkreten Inhalt treffen.

## Seitenlayout
Die grundsätzliche Seitenstruktur wird innerhalb der index.php definiert.
Sie besteht aus logisch getrennten Bereichen wie beispielsweise:

- Header
- Hero
- Inhaltsbereiche
- Hauptinhalt
- Footer

Diese Bereiche beschreiben ausschließlich die Struktur der Seite und nicht deren Inhalte.

Die Positionierung erfolgt über CSS Grid, während die Ausrichtung innerhalb der einzelnen Bereiche überwiegend mit Flexbox realisiert wird.

## Modulpositionen
Modulpositionen sind Bestandteil des Seitenlayouts.
Mit Ausnahme spezieller Positionen wie hero beschreiben Modulpositionen grundsätzlich ihre Lage innerhalb des Layouts und nicht den späteren Inhalt.

Beispiele:

- top-a
- top-b
- content-top
- content-bottom
- bottom-a
- bottom-b

Welche Module innerhalb dieser Positionen veröffentlicht werden, entscheidet ausschließlich die Joomla-Konfiguration. Das Template trifft hierzu keine Annahmen.
Dadurch bleibt das Layout flexibel und unabhängig von konkreten Inhalten.

##  Verantwortlichkeiten
Layouts übernehmen beispielsweise:

- Kopfbereiche
Layouts übernehmen beispielsweise:

- Kopfbereiche
- Fußbereiche
- Karten
- Listen
- Navigationselemente
- wiederverwendbare Inhaltsbausteine
- gemeinsame HTML-Strukturen

Nicht Aufgabe der Layouts sind:

- Geschäftslogik
- Datenverarbeitung
- Modulverwaltung
- Layoutsteuerung der gesamten Seite
  
## Verwandte Architekturdokumente
- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-003 Verzeichnisstruktur](./ar-003-verzeichnisstruktur.md)
- [🏗️ AR-009 Joomla-Overrides](./ar-009-joomla-overrides.md)
- [🏗️ AR-011 Komponentenarchitektur](./ar-011-komponentenarchitektur.md)

## Ergebnis
Die Layout-Architektur stellt wiederverwendbare Bausteine für die Darstellung bereit. Durch die konsequente Auslagerung gemeinsamer HTML-Strukturen wird die Wartbarkeit verbessert und doppelter Code vermieden.
