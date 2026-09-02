[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipien-uebersicht.md)

---

# DS-004 Raster / Grid

**Dokumenttyp:** Designsystem  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Das Raster bildet die Grundlage für den strukturierten Seitenaufbau von WissensWerk.

Es sorgt für eine konsistente horizontale Ausrichtung und unterstützt ein ruhiges, ausgewogenes Layout auf unterschiedlichen Bildschirmgrößen.

---

## Architekturprinzip

WissensWerk verwendet Bootstrap als technische Grundlage für responsive Layoutstrukturen und ergänzt diese durch eigene Container-, Layout- und Abstandsregeln.

Das Grid ist deshalb nicht als vollständig eigenständiges alternatives Framework zu Bootstrap zu verstehen.

Grundprinzip:

```text
Bootstrap
    → technische Grid- und Responsive-Grundlage

WissensWerk
    → Container, Layoutbereiche, Abstände und konkrete Gestaltung
```

---

## Gestaltungsprinzipien

- Inhalte werden konsequent an gemeinsamen horizontalen Bezugslinien ausgerichtet.
- Container begrenzen die verfügbare Inhaltsbreite.
- Das Layout folgt dem Prinzip Content First.
- Weißraum ist Bestandteil des Rasters.
- Komponenten orientieren sich an den übergeordneten Layoutstrukturen.
- Responsive Anpassungen erfolgen über definierte Breakpoints und Layoutregeln.
- Individuelle Positionierungen werden vermieden, wenn sie durch Grid oder Flexbox sinnvoll abgebildet werden können.

---

## Aktuelle Layoutstruktur

Der bisher umgesetzte Seitenaufbau folgt grundsätzlich:

```text
Seite
│
├── Header
│
├── Main
│   ├── Sidebar optional
│   └── Content
│
└── Footer
```

Der Main-Bereich kann beispielsweise über Bootstrap-Gridklassen in Sidebar und Content aufgeteilt werden.

Die konkrete Template-Layoutarchitektur ist in **AR-010 Layout-Architektur** beschrieben.

---

## Navigation und Raster

Header, Sidebar und Offcanvas besitzen unterschiedliche räumliche Anforderungen.

Die Desktop-Navigation ist Bestandteil des Header-Layouts.

Die Sidebar ist Bestandteil des Main-Layouts.

Das Offcanvas ist ein eigenständiger responsiver Bereich und verwendet kein Desktop-Flyout-Raster.

---

## Rasterrollen

Die ursprünglichen `ds-*`-Bezeichnungen werden nicht mehr als tatsächliche CSS-Variablennamen vorausgesetzt.

Für die Implementierung gilt:

- Layoutwerte werden über die WissensWerk-SCSS-Architektur definiert.
- wiederkehrende Abstände werden über `--ww-space-*`-Tokens gesteuert.
- technische Gridstrukturen können über Bootstrap umgesetzt werden.
- projektspezifische Container- und Layoutregeln gehören zum WissensWerk-Designsystem.

Die vollständige Tokenbasis wird in **DS-012 Design Tokens** dokumentiert.

---

## Responsive Verhalten

Das Raster muss auf unterschiedlichen Bildschirmgrößen funktionieren.

Dabei werden insbesondere berücksichtigt:

- verfügbare Inhaltsbreite
- Sidebar und Content
- Header-Navigation
- Umschaltung auf Offcanvas
- Touch-Bedienung
- Vermeidung horizontaler Überläufe

Das Offcanvas verwendet eine eigene vertikale Layoutstruktur. Nur der Navigationsbereich ist scrollbar.

---

## Wirkung des Rasters

| Bereich | gewünschte Wirkung |
|---|---|
| Seitenaufbau | ruhig und ausgewogen |
| Inhalte | klar strukturiert |
| Navigation | eindeutig positioniert |
| Weißraum | großzügig und unterstützend |
| Responsive Layout | stabil und bedienbar |

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprüngliches Raster-/Grid-Konzept erstellt. |
| 2.0 | 02.09.2026 | Rasterkonzept an die aktuelle Bootstrap-/WissensWerk-Layoutarchitektur sowie Header, Sidebar und Offcanvas angepasst. |
