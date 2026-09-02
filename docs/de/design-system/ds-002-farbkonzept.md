[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipien-uebersicht.md)

---

# DS-002 Farbkonzept

**Dokumenttyp:** Designsystem  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Das Farbkonzept definiert die visuelle Identität von WissensWerk.

Farben dienen nicht ausschließlich der Gestaltung, sondern unterstützen Orientierung, Lesbarkeit, Hierarchie und die inhaltliche Wirkung der Website.

Das Erscheinungsbild soll ruhig, warm, zeitlos und hochwertig wirken.

---

## Grundprinzip

Das Designsystem besitzt die Kontrolle über die visuelle Farbgestaltung.

Bootstrap stellt technische Grundlagen bereit. Die WissensWerk-Komponenten greifen für ihre visuelle Gestaltung auf die eigenen Design Tokens zurück.

Das aktuelle SCSS verwendet dafür projektspezifische Custom Properties mit dem Präfix `--ww-`.

Beispiele aus der aktuellen Umsetzung sind:

```scss
var(--ww-color-background)
var(--ww-color-text)
var(--ww-color-border)
var(--ww-color-secondary)
var(--ww-color-surface-alt)
var(--ww-color-surface-hover)
```

Die konkrete Tokenbasis ist in **DS-012 Design Tokens** und den SCSS-Dateien definiert.

---

## Gestaltungsprinzipien

- Lesbarkeit hat Vorrang vor dekorativen Effekten.
- Farben unterstützen Inhalte und Orientierung.
- Das Farbsystem verwendet wenige bewusst gewählte Grundfarben.
- Akzentfarben werden gezielt eingesetzt.
- Zustände müssen eindeutig erkennbar sein.
- Kontraste werden unter Berücksichtigung der Barrierefreiheit gewählt.
- Bootstrap-Farben werden nicht als Ersatz für die WissensWerk-Farbrollen verwendet.

---

## Farbrollen

Die tatsächlichen WissensWerk-Tokens werden nach ihrer semantischen Rolle verwendet.

| Farbrolle | Beispielhafte aktuelle Verwendung |
|---|---|
| Background | `--ww-color-background` |
| Surface | `--ww-color-surface-alt` |
| Text | `--ww-color-text` |
| Border | `--ww-color-border` |
| Secondary / Akzent | `--ww-color-secondary` |
| Hover Surface | `--ww-color-surface-hover` |
| Fokus | projektspezifischer Fokus-Token bzw. definierter Fokuszustand |

Die Tabelle beschreibt Rollen und Beispiele, nicht eine vollständige Tokenliste.

---

## Farbwirkung

| Bereich | gewünschte Wirkung |
|---|---|
| Hintergrund | ruhig, warm, zurückhaltend |
| Text | klar und kontrastreich |
| Akzent | hochwertig und gezielt |
| Navigation | eindeutig und hierarchisch |
| Hover | wahrnehmbar, aber zurückhaltend |
| Aktiver Zustand | eindeutig erkennbar |
| Fokus | deutlich sichtbar |
| Oberfläche | klar vom Hintergrund unterscheidbar |

---

## Bootstrap und Farbsystem

Bootstrap wird technisch integriert, ohne die visuelle Identität von WissensWerk zu bestimmen.

Das Prinzip lautet:

```text
Bootstrap
    → technische Komponenten

WissensWerk Tokens
    → Farben und visuelle Zustände
```

Dadurch bleiben die Bootstrap-Funktionalität und die visuelle Gestaltung voneinander getrennt.

---

## Barrierefreiheit

Farbkombinationen müssen ausreichende Kontraste bieten.

Informationen dürfen nicht ausschließlich über Farbe vermittelt werden.

Insbesondere aktive, aktuelle und Fokuszustände müssen auch über weitere visuelle Merkmale erkennbar bleiben.

---

## Erweiterbarkeit

Neue Farbrollen werden nur eingeführt, wenn eine bestehende semantische Rolle nicht ausreicht.

Einzelne Hex-Werte sollen nicht als Ersatz für einen vorhandenen Design Token direkt in Komponenten verteilt werden.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprüngliches Farbkonzept erstellt. |
| 2.0 | 02.09.2026 | Farbkonzept an die aktuelle `--ww-color-*`-Tokenstruktur und die tatsächliche Bootstrap-/WissensWerk-Trennung angepasst. |
