[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-015 Design System

> **Status:** Aktiv  
> **Version:** 2.0  
> **Stand:** 02.09.2026  
> **Projekt:** WissensWerk Template

## 1. Ziel

Das Designsystem definiert die visuelle Sprache des WissensWerk-Templates.

Es bildet die zentrale Grundlage für Farben, Typografie, Abstände, Zustände und weitere wiederkehrende Gestaltungsentscheidungen.

Joomla und Bootstrap bleiben technische Bestandteile der Gesamtarchitektur. Das Designsystem definiert jedoch die visuelle Identität des Templates.

## 2. Ziele des Designsystems

Das Designsystem verfolgt folgende Ziele:

- einheitliches Erscheinungsbild
- zentrale Verwaltung visueller Entscheidungen
- Wiederverwendbarkeit
- klare Trennung von Design und technischer Implementierung
- hohe Wartbarkeit
- konsistente Komponenten- und Layoutgestaltung
- gute Grundlage für responsive Gestaltung
- Möglichkeit zukünftiger Varianten

## 3. Architektur

Die aktuelle Beziehung der Ebenen lautet:

```text
Corporate Identity
        │
        ▼
WissensWerk Designsystem
        │
        ├── Design Tokens
        │
        ▼
WissensWerk SCSS
        │
        ├── Komponenten
        ├── Layout
        └── Templatebereiche
        │
        ▼
Bootstrap-Integration / Browser
        │
        ▼
Joomla Template
```

Das Designsystem definiert die visuelle Sprache.

Bootstrap liefert technische Grundlagen.

Joomla stellt Struktur und Inhalte bereit.

## 4. Design Tokens

Design Tokens sind die zentrale technische Umsetzung der Designentscheidungen.

Sie definieren wiederkehrende Werte beispielsweise für:

- Farben
- Abstände
- Typografie
- Radien
- Schatten
- Layoutwerte
- Übergänge
- Ebenen

Projektspezifische CSS Custom Properties verwenden den Namensraum:

```text
--ww-
```

## 5. Token-Prinzip

Das Designsystem unterscheidet zwischen konkreten Designwerten und semantischer Verwendung.

Grundprinzip:

```text
Designwert
    ↓
semantischer Token
    ↓
Komponente
    ↓
Layout
```

Komponenten sollen bevorzugt semantische Tokens verwenden.

Beispiel:

```scss
color: var(--ww-color-text);
```

statt einer direkt eingebetteten konkreten Farbe.

Ebenso:

```scss
padding: var(--ww-space-4);
```

statt einer beliebigen lokalen Abstandszahl, wenn der benötigte Abstand bereits durch das Designsystem abgedeckt ist.

## 6. Farben

Die Farbwelt wird zentral über die Design-Tokens definiert.

Dabei werden semantische Rollen gegenüber konkreten Farbnamen bevorzugt.

Beispiele:

```text
Primary
Secondary
Background
Surface
Surface Alt
Text
Border
```

Konkrete Farbwerte gehören in die dafür vorgesehenen Token-Definitionen.

Komponenten sollen keine eigenen, unkoordinierten Farbwerte einführen.

## 7. Typografie

Die Typografie wird zentral definiert.

Aktuell vorgesehene Schriftfamilien:

| Verwendung | Schrift |
|---|---|
| Überschriften | Cormorant Garamond |
| Fließtext | Source Sans 3 |
| Code | IBM Plex Mono |

Schriftgrößen, Gewichte und Zeilenhöhen werden über die typografischen Design-Tokens organisiert.

Komponenten sollen keine konkurrierenden lokalen Typografiesysteme aufbauen.

## 8. Abstände

Das Designsystem stellt eine zentrale Abstandsskala bereit.

Beispiel:

```scss
padding: var(--ww-space-4);
margin-block: var(--ww-space-6);
```

Die Verwendung der bestehenden Token-Skala ist gegenüber frei gewählten Einzelwerten zu bevorzugen.

Das verbessert die visuelle Konsistenz und reduziert spätere Anpassungsarbeit.

## 9. Layout

Globale Layoutwerte gehören zum Designsystem beziehungsweise zur zugehörigen Layoutarchitektur.

Dazu gehören beispielsweise:

- Containerbreiten
- Radien
- Schatten
- Übergänge
- Ebenen
- responsive Grundwerte

Die konkrete Seitenstruktur wird dagegen durch die Layoutarchitektur des Templates definiert.

Damit bleiben Designwerte und Seitenstruktur voneinander getrennt.

## 10. Komponenten

Komponenten verwenden die Design Tokens als zentrale visuelle Grundlage.

Beispiel:

```text
Design Token
      ↓
SCSS-Komponente
      ↓
UI-Komponente
      ↓
Layout
```

Die aktuelle Umsetzung zeigt dies insbesondere bei:

- Branding
- Header
- Navigation
- Sidebar
- Offcanvas

Die Navigation verwendet dabei MetisMenu für das Verhalten, während WissensWerk-SCSS die visuelle Darstellung steuert.

## 11. Bootstrap

Bootstrap ist technische Integrationsschicht und nicht das WissensWerk-Designsystem.

Bootstrap stellt beispielsweise bereit:

- Grid
- responsive Grundlagen
- Utilities
- Offcanvas

WissensWerk bestimmt:

- Farben
- Typografie
- visuelle Hierarchie
- Komponentenstil
- Abstände im Rahmen des Designsystems
- Zustandsdarstellung

Bootstrap-Core-Dateien werden nicht verändert.

## 12. Responsive Design

Das Designsystem berücksichtigt responsive Anforderungen.

Dabei werden nicht nur Breakpoints betrachtet, sondern auch:

- verfügbare Breite
- Lesbarkeit
- Touch-Bedienung
- Fokuszustände
- Menüverhalten
- Abstände

Die technische responsive Umsetzung erfolgt durch das Zusammenspiel von Bootstrap und WissensWerk-SCSS.

## 13. Barrierefreiheit

Barrierefreiheit ist Bestandteil des Designsystems.

Bei visuellen Zuständen werden insbesondere berücksichtigt:

- ausreichender Kontrast
- sichtbare Fokuszustände
- verständliche Zustandsunterscheidung
- ausreichende Bedienflächen
- Lesbarkeit
- responsive Bedienbarkeit

Das Designsystem allein garantiert keine vollständige Barrierefreiheit. Die konkrete Umsetzung muss zusätzlich in HTML, JavaScript und Komponenten geprüft werden.

## 14. Erweiterbarkeit

Das Designsystem ist auf spätere Erweiterungen ausgelegt.

Mögliche Erweiterungen:

- alternative Farbschemata
- Dark Mode
- weitere typografische Rollen
- zusätzliche Komponentenvarianten
- weitere responsive Ausprägungen

Neue Varianten sollen bevorzugt über Tokens und definierte Variantenmechanismen umgesetzt werden, statt bestehende Komponenten durch verstreute Sonderregeln zu verändern.

## 15. Verzeichnisstruktur

Die konkrete Token- und SCSS-Struktur wird in **AR-004 SCSS-Architektur** dokumentiert.

Das Designsystem ist damit nicht auf eine einzelne Datei beschränkt, sondern wird durch die definierte Token- und SCSS-Struktur technisch umgesetzt.

## 16. Verwandte Dokumente

- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-007 Bootstrap-Integration](./ar-007-bootstrap-integration.md)
- [🏗️ AR-010 Layout-Architektur](./ar-010-layout-architektur.md)
- [🏗️ AR-011 UI-Komponenten](./ar-011-ui-komponenten.md)
- [🏗️ AR-017 Namenskonventionen und Namensräume](./ar-017-namenskonventionen-namensraeume.md)

## 17. Aktueller Stand

Das Designsystem ist die Grundlage der bisher umgesetzten visuellen Gestaltung.

Insbesondere die gemeinsame Gestaltung von Header, Sidebar und Offcanvas basiert auf den zentralen Design Tokens.

Die aktuelle Entwicklung hat die Trennung zwischen Designsystem und technischer Funktion bestätigt:

```text
Designsystem
    → visuelle Sprache

SCSS
    → konkrete Gestaltung

Bootstrap
    → technische Grundlage

MetisMenu
    → Menüverhalten

Joomla
    → Struktur und Inhalte
```

## 18. Ergebnis

Das WissensWerk-Designsystem bildet die zentrale visuelle Grundlage des Templates.

Es verhindert, dass Komponenten und Layoutbereiche eigene, voneinander unabhängige Gestaltungssysteme entwickeln.

Durch die Kombination aus Design Tokens, SCSS und klaren Verantwortlichkeiten bleibt das Erscheinungsbild konsistent und kann später kontrolliert erweitert oder verändert werden.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprüngliche Definition des Designsystems. |
| 2.0 | 02.09.2026 | Designsystem an die aktuelle Bootstrap-, MetisMenu-, Offcanvas- und SCSS-Architektur angepasst; Verantwortlichkeiten und Tokenprinzip präzisiert. |
