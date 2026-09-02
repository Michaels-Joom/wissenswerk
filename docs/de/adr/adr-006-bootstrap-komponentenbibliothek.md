[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [📐 Architekturentscheidungen (ADR)](./adr-000-architekturentscheidungen.md)

# ADR-006 – Bootstrap als Komponentenbibliothek

**Status:** Angenommen  
**Version:** 2.0  
**Datum:** 02.09.2026  
**Projekt:** WissensWerk

## Kontext

Joomla verwendet Bootstrap als wesentlichen Bestandteil seiner Frontend-Architektur. WissensWerk besitzt gleichzeitig ein eigenständiges Designsystem.

Daraus ergibt sich die Frage, welche Rolle Bootstrap innerhalb des Templates einnehmen soll.

## Entscheidung

Bootstrap wird in WissensWerk als **technische Komponenten- und Layoutbasis** eingesetzt, nicht als gestalterische Autorität.

Bootstrap-Komponenten werden selektiv verwendet, wenn sie einen funktionalen Mehrwert bieten und sich in das WissensWerk-Designsystem integrieren lassen.

Das WissensWerk-Designsystem bestimmt weiterhin Farben, Typografie, Abstände, visuelle Hierarchie und eigene Komponenten.

## Architektur

```text
WissensWerk Designsystem
        │
        ├── Design Tokens
        │
        ▼
Bootstrap-Integration
        │
        ├── Layout / Grid
        ├── ausgewählte Komponenten
        └── Utilities, soweit sinnvoll
        │
        ▼
WissensWerk-Komponenten
        │
        ▼
Joomla Template
```

## Grundsätze

- Bootstrap bestimmt nicht das Corporate Design.
- Bootstrap wird selektiv eingesetzt.
- Eigene Styles sind keine pauschale Korrekturschicht für Bootstrap.
- `!important` wird nicht als reguläres Anpassungsmittel eingesetzt.
- Wenn eine Bootstrap-Komponente nicht sinnvoll integrierbar ist, kann eine eigene WissensWerk-Komponente entstehen.

## Konsequenzen

### Vorteile

- Nutzung bewährter Frontend-Funktionen
- geringere Eigenentwicklung
- klare Trennung von Funktion und Gestaltung
- kontrollierte Abhängigkeit von Bootstrap
- gute Integration in Joomla

### Nachteile

- Bootstrap bleibt eine technische Abhängigkeit
- einzelne Komponenten müssen gegebenenfalls projektspezifisch umgesetzt werden
- Kenntnisse der Bootstrap-Struktur sind erforderlich

## Begründung

Bootstrap liefert bewährte technische Bausteine, während WissensWerk die gestalterische Kontrolle behält.

## Fazit

Bootstrap arbeitet innerhalb von WissensWerk **unter der Regie des eigenen Designsystems**. Es liefert technische Bausteine, bestimmt aber nicht die visuelle Identität des Templates.
