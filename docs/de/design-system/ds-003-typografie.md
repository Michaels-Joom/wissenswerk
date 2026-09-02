[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipien-uebersicht.md)

---

# DS-003 Typografie

**Dokumenttyp:** Designsystem  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Die Typografie definiert die visuelle Sprache von WissensWerk.

Sie sorgt für Lesbarkeit, Orientierung und eine klare Informationshierarchie.

Das Schriftbild soll ruhig, zeitlos und für längere Inhalte geeignet sein.

---

## Architekturprinzip

Typografische Grundwerte werden zentral über Design Tokens gesteuert.

Komponenten sollen konkrete Schriftfamilien und zentrale Schriftgrößen nicht unabhängig voneinander definieren.

Die aktuelle Implementierung verwendet projektspezifische `--ww-font-*`-Custom-Properties.

Beispiele:

```scss
var(--ww-font-family-body)
var(--ww-font-size-base)
var(--ww-font-size-lg)
```

Die vollständige Tokenbasis wird in **DS-012 Design Tokens** und den SCSS-Quellen gepflegt.

---

## Gestaltungsprinzipien

- Lesbarkeit hat Vorrang vor dekorativen Schriften.
- Typografie unterstützt die Informationshierarchie.
- Schriftgrößen folgen einem konsistenten System.
- Zeilenlängen und Zeilenabstände fördern ruhiges Lesen.
- Schriftstärken werden gezielt eingesetzt.
- Typografie bleibt unabhängig von kurzfristigen Trends.
- Das Schriftbild muss auf Desktop, Tablet und Smartphone funktionieren.

---

## Typografische Rollen

| Rolle | Zweck |
|---|---|
| Body | Fließtext und allgemeine Inhalte |
| Heading | Überschriftenhierarchie |
| Navigation | Menüeinträge und Navigation |
| Meta / Muted | ergänzende Informationen |
| Code | technische Beispiele und Quelltext |

Die konkreten Werte werden zentral über Tokens festgelegt.

---

## Typografische Hierarchie

- **H1** kennzeichnet den Einstieg in eine Seite bzw. ein Dokument.
- **H2** strukturiert Hauptbereiche.
- **H3** untergliedert diese Bereiche.
- Fließtext bildet die primäre Leseebene.
- Hinweise und Metainformationen treten optisch zurück.
- Code und technische Beispiele verwenden eine Monospace-Schrift.

---

## Navigation

Die Navigation verwendet dieselbe typografische Grundsprache wie die übrigen Template-Bereiche.

Die visuelle Gewichtung aktiver und aktueller Einträge wird nicht allein über Schriftgröße erzeugt, sondern über das Zusammenspiel von Typografie, Farbe, Zustand und Positionierung.

---

## Responsive Typografie

Typografie muss unabhängig von der Bildschirmgröße lesbar bleiben.

Responsive Anpassungen werden nur dort vorgenommen, wo sie für Lesbarkeit oder verfügbare Fläche erforderlich sind.

---

## Bootstrap

Bootstrap kann technische Typografie-Grundlagen bereitstellen.

Die konkrete visuelle Typografie von WissensWerk wird jedoch durch die eigenen Design Tokens und SCSS-Regeln bestimmt.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprüngliche Typografie-Regeln erstellt. |
| 2.0 | 02.09.2026 | Typografie an die aktuelle `--ww-font-*`-Tokenstruktur und die tatsächliche Komponenten-/Navigationsgestaltung angepasst. |
