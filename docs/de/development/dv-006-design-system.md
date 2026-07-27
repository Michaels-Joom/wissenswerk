# DV-006 Design System

> **Status:** Aktiv  
> **Version:** 1.0  
> **Stand:** 27.07.2026

## Ziel

Das Design System definiert die visuelle Sprache des WissensWerk-Templates unabhängig von Joomla und Bootstrap.

Es stellt eine zentrale Grundlage für sämtliche gestalterischen Entscheidungen dar und sorgt für Konsistenz, Wartbarkeit und Erweiterbarkeit.

Das Design System bildet die einzige Quelle für alle visuellen Eigenschaften des Templates.

## Ziele des Design Systems

Das Design System verfolgt folgende Ziele:

- Einheitliches Erscheinungsbild
- Klare Trennung zwischen Design und technischer Umsetzung
- Zentrale Verwaltung aller Designentscheidungen
- Wiederverwendbarkeit im gesamten Projekt
- Hohe Wartbarkeit
- Vorbereitung auf zukünftige Erweiterungen (z. B. Dark Mode)

## Architektur

Das Design System bildet die Grundlage der gesamten Frontend-Architektur.

```text
Corporate Identity
        │
        ▼
Design System
        │
        ▼
Bootstrap-Integration
        │
        ▼
Basis-Styles
        │
        ▼
Komponenten
        │
        ▼
Layouts
        │
        ▼
Joomla-Template
```

Das Design System definiert ausschließlich das Erscheinungsbild.

Bootstrap übernimmt die technische Umsetzung.

Joomla stellt die Template-Struktur bereit.

## Aufbau des Design Systems

```text
scss/

├── tokens/
│   ├── _colors.scss
│   ├── _spacing.scss
│   ├── _typography.scss
│   ├── _layout.scss
│   └── _index.scss
│
├── base/
│
├── components/
│
├── layout/
│
└── vendors/
```

## Token-Architektur

Das Design System basiert auf zwei Ebenen.

```text
Primitive Tokens
        │
        ▼
Semantische Tokens
        │
        ▼
Komponenten
        │
        ▼
Layouts
```

### Primitive Tokens
Primitive Tokens enthalten ausschließlich die eigentlichen Designwerte.

Beispiele:

- Farben
- Schriftgrößen
- Abstände
- Radien

Primitive Tokens besitzen keine fachliche Bedeutung.

### Semantische Tokens
Semantische Tokens beschreiben die Funktion eines Wertes.

Beispiele:

- Primärfarbe
- Hintergrundfarbe
- Textfarbe
- Standardabstand
- Überschrift H1

Komponenten verwenden ausschließlich semantische Tokens.

## Bestandteile

### Farben
Definiert die komplette Farbwelt.

Beinhaltet unter anderem:

- Markenfarben
- Hintergrundfarben
- Textfarben
- Rahmenfarben
- Statusfarben

### Typografie
Definiert das vollständige Schriftsystem.

Beinhaltet:

- Schriftfamilien
- Schriftgrößen
- Schriftgewichte
- Zeilenhöhen
- Buchstabenabstände
- Typografische Rollen

### Abstände
Definiert das einheitliche Abstandssystem.
Alle Komponenten greifen auf dieselbe Abstandsskala zurück.

### Layout
Definiert globale Layout-Eigenschaften.

Beispielsweise:

- Maximale Containerbreite
- Border Radius
- Schatten
- Transitionen
- Ebenen (Z-Index)

---

## Grundprinzipien

### 1. Farben werden nur einmal definiert

Hexadezimale Farbwerte dürfen ausschließlich in

```text
tokens/_colors.scss
```

definiert werden.

### 2. Komponenten verwenden ausschließlich semantische Farb-Tokens

Richtig

```scss
color: var(--ww-color-primary);
```

Falsch

```scss
color: #B8860B;
```

### 3. Abstände erfolgen ausschließlich über Design Tokens

Richtig

```scss
padding: var(--ww-space-4);
```

Falsch

```scss
padding: 18px;
```

### 4. Typografie ist rollenbasiert

Komponenten definieren keine eigenen Schriftgrößen.

Richtig

```scss
font-size: var(--ww-text-body-font-size);
```

Falsch

```scss
font-size: 1rem;
```

### 5. Bootstrap ist eine Implementierungsschicht
Bootstrap dient ausschließlich als Frontend-Framework.
Bootstrap bestimmt nicht das Erscheinungsbild des Templates.

### 6. Klare Verantwortlichkeiten
Jede Ebene besitzt genau eine Aufgabe.

| Ebene | Verantwortung |
|--------|---------------|
| Corporate Identity | Markenidentität |
| Design System | Gestaltung |
| Bootstrap | Technische Umsetzung |
| Joomla | Template-Struktur |

Dadurch bleiben Design und Implementierung konsequent voneinander getrennt.

## Schriftkonzept
Alle Schriftarten werden lokal eingebunden.

Aktuelle Schriftfamilien:

| Verwendung | Schrift |
|------------|----------|
| Überschriften | Cormorant Garamond |
| Fließtext | Source Sans 3 |
| Code | IBM Plex Mono |

Die Schriftarten werden zentral registriert und ausschließlich über Design Tokens verwendet.

# Erweiterbarkeit
Das Design System wurde von Beginn an auf zukünftige Erweiterungen ausgelegt.

Geplante Möglichkeiten:

- Dark Mode
- Alternative Farbschemata
- Barrierefreie Themes
- Benutzerdefinierte Themes
- Erweiterte Typografieprofile

Diese Erweiterungen können umgesetzt werden, ohne bestehende Komponenten anzupassen.

## Vorteile
Das Design System bietet:

- Einheitliches Erscheinungsbild
- Hohe Wartbarkeit
- Wiederverwendbare Designentscheidungen
- Unabhängigkeit vom verwendeten Framework
- Gute Skalierbarkeit
- Einfache zukünftige Redesigns

Alle gestalterischen Entscheidungen stammen aus einer zentralen Quelle und bilden damit die Grundlage für das gesamte WissensWerk-Template.
