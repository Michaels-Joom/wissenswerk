[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipien-uebersicht.md)

---

# DS-005 Abstände

**Dokumenttyp:** Designsystem  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

> Abstände strukturieren Inhalte, schaffen Orientierung und unterstützen die Lesbarkeit. Sie trennen Informationen voneinander und sorgen für ein ruhiges und ausgewogenes Erscheinungsbild.

---

## Architekturprinzip

Wiederkehrende Abstände werden über zentrale WissensWerk-Design Tokens gesteuert.

In der aktuellen Implementierung werden dafür Custom Properties mit dem Präfix `--ww-space-*` verwendet.

Beispiele aus der aktuellen Umsetzung:

```scss
var(--ww-space-2)
var(--ww-space-3)
var(--ww-space-4)
var(--ww-space-5)
var(--ww-space-6)
```

Damit werden Abstände nicht an jeder Komponente unabhängig neu erfunden.

Eine direkte Abstandsangabe ist jedoch nicht grundsätzlich verboten. Technisch notwendige oder sehr spezifische Werte können in einer Komponente vorkommen, wenn dafür kein sinnvoller zentraler Token existiert.

Neue wiederkehrende Werte sollen dagegen als Token definiert werden.

---

## Gestaltungsprinzipien

- Abstände folgen einem konsistenten System.
- Weißraum ist ein aktives Gestaltungselement.
- Gleiche Situationen erhalten möglichst gleiche Abstände.
- Die Hierarchie von Inhalten wird durch Abstände unterstützt.
- Komponenten verwenden bevorzugt vorhandene Spacing-Tokens.
- Responsive Anpassungen erfolgen kontrolliert und nachvollziehbar.
- Neue wiederkehrende Abstandswerte werden nicht als isolierte Einzelwerte eingeführt.

---

## Wirkung der Abstände

| Bereich | gewünschte Wirkung |
|---|---|
| Abschnitte | klar voneinander getrennt |
| Inhalte | ruhig und ausgewogen |
| Komponenten | konsistent angeordnet |
| Formulare | übersichtlich |
| Navigation | gut erfassbar |
| Weißraum | unterstützend, nicht dominant |

---

## Aktuelle Verwendung

Die Spacing-Tokens werden bereits in zentralen Templatebereichen verwendet, insbesondere bei:

- Header
- Navigation
- Sidebar
- Offcanvas
- Footer
- Komponenten

Die konkrete Auswahl richtet sich nach der jeweiligen Layoutaufgabe.

---

## Abstandshierarchie

Grundsätzlich gilt:

```text
Seitenbereich
    ↓
Section-Abstand

Komponente
    ↓
Component-Abstand

Inhalt
    ↓
Content-Abstand

Elemente
    ↓
kleinere Spacing-Stufen
```

Diese Hierarchie dient als Gestaltungsregel und ist nicht als starre Zuordnung jedes einzelnen CSS-Werts zu verstehen.

---

## Bootstrap und Abstände

Bootstrap stellt eigene Spacing-Utilities bereit.

Diese können für technische Layoutanforderungen genutzt werden.

Wo ein Abstand Bestandteil der visuellen WissensWerk-Gestaltung ist, soll bevorzugt ein WissensWerk-Token verwendet werden.

Damit wird zwischen:

```text
Bootstrap Utility
    → technische Layoutunterstützung

WissensWerk Token
    → definierte Designentscheidung
```

unterschieden.

---

## Erweiterbarkeit

Neue Spacing-Tokens werden nur eingeführt, wenn ein bestehender Wert die gestalterische Anforderung nicht sinnvoll abbilden kann.

Ziel bleibt ein überschaubares und konsistentes Abstandssystem.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprüngliches Abstandssystem erstellt. |
| 2.0 | 02.09.2026 | Abstandssystem an die aktuelle `--ww-space-*`-Tokenstruktur und die tatsächliche Verwendung in Header, Navigation und Offcanvas angepasst. |
