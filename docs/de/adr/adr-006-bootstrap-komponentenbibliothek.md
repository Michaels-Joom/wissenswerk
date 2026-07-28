# ADR-006 Bootstrap als Komponentenbibliothek

> **Status:** Accepted  
> **Datum:** 27.07.2026

---

## Kontext
Joomla verwendet Bootstrap als Standard-Frontend-Framework. In vielen Projekten bildet Bootstrap die gestalterische Grundlage, während projektspezifische Styles das Framework nachträglich überschreiben.

Dieser Ansatz führt häufig zu:

- umfangreichen CSS-Überschreibungen
- steigender Verwendung von `!important`
- enger Kopplung an Bootstrap
- erhöhtem Wartungsaufwand bei Bootstrap-Updates
- eingeschränkter Kontrolle über das Design

Für WissensWerk wurde bereits ein eigenständiges Design System entwickelt, das Farben, Typografie, Abstände und Layout unabhängig von Bootstrap definiert.

Damit stellt sich die grundsätzliche Frage, welche Rolle Bootstrap innerhalb der Template-Architektur einnehmen soll.

## Entscheidung
Bootstrap wird innerhalb von WissensWerk **nicht als Grundlage des Frontends** verwendet.
Bootstrap dient ausschließlich als **optionale Komponentenbibliothek**.
Das Design des Templates wird vollständig durch das WissensWerk Design System bestimmt.
Bootstrap-Komponenten werden nur übernommen, wenn sie:

- funktional einen Mehrwert bieten,
- sich ohne grundlegende Änderungen in das Design System integrieren lassen,
- die Wartbarkeit nicht beeinträchtigen.

Komponenten, die diesen Anforderungen nicht entsprechen, werden projektintern entwickelt.

## Architektur

```text
Corporate Identity
        │
        ▼
Design System
        │
        ▼
Base Layer
        │
        ▼
Bootstrap-Komponenten (optional)
        │
        ▼
Eigene Komponenten
        │
        ▼
Layouts
        │
        ▼
Joomla Template
```

Bootstrap befindet sich somit **oberhalb des Base Layers** und **unterhalb des Design Systems**.

## Grundsätze
Für Bootstrap gelten innerhalb von WissensWerk folgende Regeln.

### Bootstrap bestimmt nicht das Design
Farben, Typografie, Abstände und Layout werden ausschließlich durch das Design System definiert.

### Bootstrap wird selektiv eingesetzt
Es werden ausschließlich Komponenten eingebunden, die tatsächlich benötigt werden.
Ein vollständiger Bootstrap-Import ist nicht vorgesehen.

### Keine CSS-Überschreibungen als Standardlösung
Bootstrap-Komponenten sollen möglichst ohne umfangreiche Überschreibungen verwendet werden.
Falls umfangreiche Anpassungen erforderlich sind, wird geprüft, ob eine eigene Implementierung wirtschaftlicher ist.

### Keine `!important`-Strategie
Das Projekt verfolgt ausdrücklich nicht den Ansatz, Bootstrap-Regeln mittels `!important` zu überschreiben.
Das Auftreten von `!important` gilt als Hinweis auf eine fehlerhafte Architektur und soll vermieden werden.

### Bootstrap ist austauschbar
Die Architektur soll so aufgebaut werden, dass Bootstrap zukünftig ersetzt oder aktualisiert werden kann, ohne das Design System grundlegend anzupassen.

## Konsequenzen

### Vorteile

- vollständige Kontrolle über das Erscheinungsbild
- klare Trennung zwischen Design und Framework
- geringere Abhängigkeit von Bootstrap
- einfachere Bootstrap-Updates
- bessere Wartbarkeit
- höhere Wiederverwendbarkeit des Design Systems

### Nachteile

- höherer initialer Entwicklungsaufwand
- einzelne Komponenten müssen gegebenenfalls selbst entwickelt werden
- Bootstrap kann nicht unverändert übernommen werden

## Begründung
WissensWerk versteht Bootstrap als technische Bibliothek und nicht als gestalterische Grundlage.
Das Design System definiert die visuelle Identität des Templates.
Bootstrap ergänzt diese Architektur ausschließlich dort, wo vorhandene Komponenten einen funktionalen Mehrwert bieten.

Dadurch bleibt das Projekt unabhängig vom verwendeten Frontend-Framework und vermeidet langfristig unnötige Komplexität durch umfangreiche CSS-Überschreibungen.

Bootstrap arbeitet unter der Regie des WissensWerk Design Systems – nicht umgekehrt.
