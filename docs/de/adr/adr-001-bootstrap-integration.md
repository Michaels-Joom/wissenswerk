[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md)

# ADR-001 – Bootstrap wird über Design Tokens gesteuert

**Status:** Angenommen  
**Version:** 2.0  
**Datum:** 02.09.2026  
**Projekt:** WissensWerk

## Kontext

Joomla nutzt Bootstrap als technische Grundlage für zahlreiche Frontend-Komponenten. Eine nachträgliche Anpassung von Bootstrap über umfangreiche CSS-Überschreibungen führt jedoch schnell zu steigender Spezifität und erschwert die Wartung.

WissensWerk verfolgt deshalb einen anderen Ansatz: Das eigene Designsystem definiert das Erscheinungsbild, während Bootstrap dort als technische Grundlage eingesetzt wird, wo es sinnvoll ist.

## Entscheidung

Die visuellen Eigenschaften des WissensWerk-Templates werden zentral über das eigene Designsystem und dessen Design Tokens definiert.

Bootstrap-SCSS-Variablen werden innerhalb der Bootstrap-Integration gezielt mit den projektspezifischen Design Tokens verbunden. Eigene SCSS-Regeln dienen der Umsetzung von WissensWerk-Komponenten und nicht als pauschale Korrekturschicht für Bootstrap.

Projektspezifische CSS Custom Properties verwenden die im Projekt festgelegte Namenskonvention `--ww-*`.

Bootstrap bleibt damit technische Basis, bestimmt aber nicht die visuelle Identität des Templates.

## Architekturprinzip

```text
WissensWerk Designsystem
        │
        ▼
Design Tokens / CSS Custom Properties
        │
        ▼
Bootstrap-Integration
        │
        ▼
Bootstrap-Komponenten und Utilities
        │
        ▼
WissensWerk-Komponenten
        │
        ▼
Template-Ausgabe
```

Das Designsystem definiert die Gestaltung; Bootstrap unterstützt deren technische Umsetzung.

## Grundsätze

- Zentrale Gestaltungswerte werden nicht verstreut im Projekt definiert.
- Bootstrap-Funktionen werden über dessen vorgesehene SCSS-Struktur integriert.
- Umfangreiche nachträgliche Überschreibungen werden vermieden.
- `!important` ist keine reguläre Strategie zur Anpassung von Bootstrap.
- Eigene Komponenten verwenden die WissensWerk-Namenskonvention.
- Joomla- und Bootstrap-Klassen werden nicht ohne technischen Grund umbenannt.

## Konsequenzen

### Vorteile

- zentrale Steuerung der Gestaltung
- konsistentes Erscheinungsbild
- geringere CSS-Spezifitätskonflikte
- bessere Wartbarkeit
- nachvollziehbare Bootstrap-Integration

### Nachteile

- höherer Planungsaufwand
- Kenntnisse der Bootstrap-SCSS-Struktur erforderlich
- Design Tokens müssen konsequent gepflegt werden

## Begründung

Bootstrap ist für WissensWerk ein technisches Werkzeug und nicht die Quelle der visuellen Identität.

Die Gestaltung bleibt damit unter Kontrolle des eigenen Designsystems, während Bootstrap die bewährten technischen Funktionen für Layout und Komponenten bereitstellt.
