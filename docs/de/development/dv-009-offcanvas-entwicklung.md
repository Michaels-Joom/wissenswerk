# DV-008 – Entwicklung Offcanvas-Navigation

## Dokumentinformationen

| Merkmal | Wert |
|----------|------|
| Dokument | DV-008 |
| Titel | Entwicklung Offcanvas-Navigation |
| Projekt | WissensWerk |
| Status | In Arbeit |
| Version | 0.1 |
| Letzte Aktualisierung | 29.07.2026 |

---

# Zielsetzung

Ziel war die Entwicklung einer vollständig eigenen Offcanvas-Navigation für das Joomla-Template WissensWerk.

Dabei sollte bewusst auf zusätzliche Joomla-Erweiterungen verzichtet werden. Grundlage bilden ausschließlich:

- Joomla 5
- Bootstrap 5 Offcanvas
- Joomla Web Asset API
- eigene Template-Komponenten

Die Navigation soll vollständig in die Komponentenarchitektur des Templates integriert werden und langfristig wartbar bleiben.

---

# Ausgangssituation

Bootstrap stellt bereits eine leistungsfähige Offcanvas-Komponente bereit.

Dennoch existieren zahlreiche Joomla-Erweiterungen, welche eigene Offcanvas- oder Mobile-Menüs bereitstellen.

Während der Entwicklung wurde deutlich, warum dies häufig der Fall ist:

Bootstrap löst ausschließlich das Verhalten des Offcanvas.

Die Integration in Joomla, das Rendering der Module sowie die Einbindung in eine eigene Templatearchitektur bleiben Aufgabe des Templateentwicklers.

---

# Entwicklungsverlauf

## Phase 1 – Bootstrap-Offcanvas

Zunächst wurde das Bootstrap-Offcanvas direkt in das Template integriert.

Ziele:

- keine zusätzlichen JavaScript-Bibliotheken
- Nutzung der Bootstrap-Komponente
- vollständige Integration in das Template

Die Bootstrap-Komponente erwies sich als stabil und zuverlässig.

Probleme entstanden nicht durch Bootstrap, sondern durch die Integration in Joomla.

---

## Phase 2 – Menüdarstellung

Die erste Herausforderung bestand darin, das Joomla-Menü innerhalb des Offcanvas korrekt darzustellen.

Während der Entwicklung zeigte sich, dass das Verhalten des Modulrenderings zunächst missverstanden wurde.

Nach mehreren Versuchen wurde deutlich:

Nicht das Bootstrap-Offcanvas war die Ursache, sondern die Art und Weise, wie Joomla Module rendert und anschließend in das Offcanvas eingefügt werden.

Diese Erkenntnis war der erste größere Wendepunkt der Entwicklung.

---

## Phase 3 – Komponentenarchitektur

Während der eigentlichen Offcanvas-Entwicklung wurde deutlich, dass sich der Header zunehmend zu einer eigenständigen Komponentenbibliothek entwickelte.

Aus einem klassischen Header entstanden einzelne wiederverwendbare Komponenten.

Hierzu zählen unter anderem:

- Branding
- Balance
- Toggle
- Navigation

Diese Komponenten können unabhängig voneinander verwendet werden.

Die Offcanvas-Entwicklung führte somit direkt zu einer Verbesserung der gesamten Templatearchitektur.

---

# Erkenntnisse

## Komponenten besitzen keine Layoutverantwortung

Eine der wichtigsten Erkenntnisse der Entwicklung war die konsequente Trennung zwischen Komponenten und Layout.

Komponenten beschreiben ausschließlich ihr eigenes Erscheinungsbild.

Sie entscheiden nicht darüber,

- wo sie erscheinen,
- wann sie erscheinen,
- wie groß sie dargestellt werden.

Diese Verantwortung liegt ausschließlich beim jeweiligen Layout.

---

## Beispiel Branding

Die Branding-Komponente definiert:

- Farben
- Schriftbild
- Grundstruktur

Nicht Bestandteil der Komponente sind beispielsweise:

- Schriftgröße
- Ausrichtung
- Positionierung
- Responsive Verhalten

Diese Eigenschaften werden durch den Header oder das Offcanvas bestimmt.

---

## Beispiel Balance

Die Balance definiert:

- Linien
- Punkt
- Farben
- Grundaufbau

Nicht Bestandteil der Balance sind:

- Linienlänge
- Positionierung
- Ausrichtung

Diese Eigenschaften werden ebenfalls durch das Layout bestimmt.

---

## Beispiel Toggle

Besonders deutlich wurde dieses Prinzip beim Toggle.

Anfangs enthielt die Komponente selbst:

display: none;

Dadurch musste der Header die Komponente später wieder überschreiben.

Nach der Überarbeitung wurde diese Verantwortung vollständig in den Header verlagert.

Die Komponente beschreibt seitdem ausschließlich ihr Erscheinungsbild.

Der Header entscheidet,

- wann der Toggle sichtbar ist,
- wann das Desktop-Menü ausgeblendet wird,
- wann das Logo verschwindet.

Dadurch existiert nur noch eine einzige Stelle, an der über die Sichtbarkeit entschieden wird.

---

# Zusammengesetzte Komponenten

Während der Entwicklung entstand eine weitere wichtige Erkenntnis.

Branding und Balance gehören logisch zusammen.

Hieraus entstand die zusammengesetzte Komponente

ww-brand

Sie bildet die eigentliche Markenidentität.

Diese besteht aus

- Schriftzug
- Balance

und kann sowohl im Desktop-Header als auch im Offcanvas wiederverwendet werden.

---

# Architekturprinzipien

Aus der Entwicklung ergeben sich folgende Regeln.

## Komponenten

Komponenten definieren ausschließlich:

- Erscheinungsbild
- Farben
- Typografie
- Animationen
- Eigenes Verhalten

Komponenten treffen keine Entscheidungen über ihre Verwendung.

---

## Layout

Layout-Dateien definieren:

- Position
- Ausrichtung
- Größen
- Responsive Verhalten
- Sichtbarkeit
- Reihenfolge

Damit existiert für jede Entscheidung genau eine Verantwortlichkeit.

---

# Erfahrungen

Während der Entwicklung wurde mehrfach versucht, Probleme ausschließlich über CSS zu lösen.

Im weiteren Verlauf zeigte sich jedoch, dass nahezu alle Schwierigkeiten ihre Ursache nicht im Styling, sondern in der HTML-Struktur oder in einer unklaren Verantwortungsverteilung hatten.

Erst die konsequente Trennung zwischen Komponenten und Layout führte zu einer stabilen und gut wartbaren Architektur.

---

# Fazit

Die Entwicklung des Offcanvas erwies sich nicht als reine Implementierung einer Bootstrap-Komponente.

Vielmehr führte sie zu einer grundlegenden Weiterentwicklung der Templatearchitektur.

Das Ergebnis ist eine Komponentenstruktur, welche künftig nicht nur für das Offcanvas, sondern für sämtliche Bereiche des Templates verwendet werden kann.

Die während dieser Entwicklung gewonnenen Erkenntnisse bilden die Grundlage für alle weiteren Komponenten des Projekts WissensWerk.

---

# Offene Punkte

Dieses Dokument wird während der weiteren Offcanvas-Entwicklung fortlaufend ergänzt.

Insbesondere sollen folgende Themen dokumentiert werden:

- endgültiger Aufbau der Offcanvas-Komponente
- Navigation innerhalb des Offcanvas
- Animationen
- Accessibility
- Tastatursteuerung
- Fokusmanagement
- Performance