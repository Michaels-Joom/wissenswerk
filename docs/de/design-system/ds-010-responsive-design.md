[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipien-uebersicht.md)

---

# DS-010 Responsive Design

**Dokumenttyp:** Designsystem  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Responsive Design stellt sicher, dass WissensWerk auf unterschiedlichen Bildschirmgrößen eine konsistente, gut lesbare und benutzerfreundliche Darstellung bietet.

Responsive Design wird nicht als nachträgliche Anpassung verstanden, sondern als Bestandteil der Gestaltung.

---

## Architekturprinzip

Layout, Komponenten und Navigation reagieren auf die verfügbare Bildschirmfläche.

Dabei können sich Position, Anordnung oder Bedienform verändern, ohne dass die grundlegende Informationsarchitektur verloren geht.

Grundprinzip:

```text
Desktop
  ↓
Tablet
  ↓
Smartphone
```

Die konkreten Layoutwechsel werden über definierte Breakpoints und responsive CSS-Regeln umgesetzt.

---

## Gestaltungsprinzipien

- Inhalte stehen im Mittelpunkt.
- Lesbarkeit besitzt Vorrang vor Informationsdichte.
- Komponenten bleiben funktional nutzbar.
- Navigation passt sich dem verfügbaren Platz an.
- Responsive Anpassungen dienen der Benutzerführung.
- Horizontale Überläufe werden vermieden.
- Touch-Bedienung wird berücksichtigt.
- Layoutwechsel sollen nachvollziehbar und konsistent sein.

---

## Aktuelle Navigation

Die responsive Navigation ist inzwischen konkret umgesetzt.

```text
größere Breite
    → Header-Navigation

kleinere Breite
    → Offcanvas
```

Die genaue Umschaltung richtet sich nach dem Template-Layout und den definierten Breakpoints.

Die Offcanvas-Navigation besitzt einen eigenen vertikal scrollbar ausgelegten Navigationsbereich.

---

## Tablet und Zwischenbreiten

Zwischen Desktop und Smartphone stehen Bildschirmgrößen zur Verfügung, bei denen ein Desktop-Flyout nicht immer sinnvoll funktioniert.

Die Navigation berücksichtigt deshalb insbesondere begrenzte horizontale Breiten.

Tiefere Untermenüs werden bei Bedarf im normalen vertikalen Fluss dargestellt, statt seitlich über den verfügbaren Raum hinauszulaufen.

---

## Responsive Rollen

| Rolle | Aufgabe |
|---|---|
| Breakpoints | definieren Layoutwechsel |
| Grid | strukturiert verfügbare Breite |
| Komponenten | reagieren auf verfügbare Fläche |
| Typografie | unterstützt Lesbarkeit |
| Abstände | unterstützen die räumliche Hierarchie |
| Navigation | passt Bedienform und Struktur an |

---

## Informationshierarchie

Responsive Design bedeutet nicht, sämtliche Elemente einfach proportional zu verkleinern.

Je nach verfügbarer Fläche können:

- Bereiche umgeordnet,
- Nebeninformationen reduziert,
- Navigation anders dargestellt,
- Inhalte anders angeordnet

werden.

Wesentliche Informationen und Funktionen bleiben dabei erhalten, soweit dies für die jeweilige Seite erforderlich ist.

---

## Barrierefreiheit

Responsive Layouts müssen auch bei:

- Tastaturbedienung
- Touch-Bedienung
- vergrößerter Darstellung
- unterschiedlichen Bildschirmhöhen

bedienbar und lesbar bleiben.

---

## Aktueller Entwicklungsstand

Header, Sidebar und Offcanvas sind inzwischen konkrete Bestandteile des responsiven Systems.

Die weitere Entwicklung der Inhaltsseiten wird zeigen, welche zusätzlichen responsive Regeln für Hero, Content, Karten, Tabellen und Formulare erforderlich werden.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprüngliche Responsive-Design-Regeln erstellt. |
| 2.0 | 02.09.2026 | Responsive-Konzept an die praktische Umsetzung von Header, Sidebar und Offcanvas sowie an Erfahrungen mit Zwischenbreiten angepasst. |
