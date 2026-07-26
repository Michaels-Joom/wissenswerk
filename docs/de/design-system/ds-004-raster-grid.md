[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [🎨 Designübersicht](./ds-000-designprinzipenuebersicht.md)

---

# DS-004 Raster / Grid

## Ziel

Das Raster bildet die Grundlage für den strukturierten Seitenaufbau von WissensWerk. Es sorgt für eine konsistente Anordnung aller Inhalte und unterstützt eine ruhige, ausgewogene Gestaltung auf allen Bildschirmgrößen.

## Architekturprinzip

> Das Layout basiert auf einem zentralen Grid-System. Alle Seitenbereiche orientieren sich an diesem Raster. Individuelle Layouts entstehen durch die Kombination definierter Grid-Komponenten und nicht durch frei platzierte Elemente.

## Gestaltungsprinzipien
- Das Grid bestimmt die horizontale Struktur aller Seiten
- Inhalte werden konsequent am Raster ausgerichtet
- Das Layout folgt dem Prinzip Content First
- Weißraum ist Bestandteil des Layouts
- Das Raster unterstützt alle definierten Breakpoints
- Das Grid bildet die Grundlage für Komponenten und Module

## Wirkung des Rasters

| Bereich           | gewünschte Wirkung           |
|-------------------|------------------------------|
| Seitenaufbau      | ruhig, ausgewogen            |
| Inhalte           | klar strukturiert            |
| Navigation        | eindeutig positioniert       |
| Weißraum          | großzügig, unterstützend     |
| Responsive Layout | konsistent auf allen Geräten |

## Rasterrollen

| Rolle           | Design Token       |
|-----------------|--------------------|
| Container Width | ds-container-width |
| Grid Columns    | ds-grid-columns    |
| Column Gap	     | ds-grid-gap       |
| Section Spacing | ds-section-spacing |
| Content Width   | ds-content-width   |
| Sidebar Width   | ds-sidebar-width   |

## Rasterhierarchie
- Der Seitenaufbau beginnt immer mit dem Grid
- Container definieren den verfügbaren Inhaltsbereich
- Komponenten orientieren sich an den Grid-Spalten
- Abstände entstehen durch definierte Spacing-Tokens
- Responsive Anpassungen erfolgen ausschließlich über Breakpoints
