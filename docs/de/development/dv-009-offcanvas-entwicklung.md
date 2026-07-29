[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md)  [🛠️ Entwicklungsübersicht](./dv-000-entwicklungsuebersicht.md)

---

# DV-009 – Entwicklung der Offcanvas-Komponente

## Dokumentinformationen

| Merkmal | Wert |
|----------|------|
| Dokument | DV-009 |
| Titel | Entwicklung der Offcanvas-Komponente |
| Projekt | WissensWerk |
| Status | Abgeschlossen |
| Version | 1.0 |
| Letzte Aktualisierung | 29.07.2026 |

---

# Ziel

Ziel war die Entwicklung einer vollständig eigenen Offcanvas-Navigation für das WissensWerk-Template.

Dabei sollte bewusst auf Joomla-Erweiterungen verzichtet werden.

Als technische Grundlage dient ausschließlich die Bootstrap-Offcanvas-Komponente. Sämtliche Gestaltung und Komponenten stammen aus dem WissensWerk-Designsystem.

---

# Ausgangssituation

Bootstrap stellt eine technisch ausgereifte Offcanvas-Komponente bereit.

Während der Entwicklung zeigte sich jedoch schnell, dass die eigentliche Herausforderung nicht Bootstrap selbst, sondern die Integration in Joomla sowie die Einbindung in die eigene Komponentenarchitektur war.

Die Entwicklung begann daher als Mobile-Menü und entwickelte sich Schritt für Schritt zu einer grundlegenden Überarbeitung des gesamten Header-Konzepts.

---

# Entwicklungsverlauf

## Phase 1 – Integration des Bootstrap-Offcanvas

Die Bootstrap-Komponente ließ sich problemlos integrieren.

Probleme entstanden nicht durch Bootstrap, sondern durch die Einbindung des Joomla-Menüs sowie durch die zunächst unklare Trennung zwischen Komponenten und Layout.

Bereits in dieser Phase wurde deutlich:

Bootstrap übernimmt lediglich die technische Funktion des Offcanvas.

Die eigentliche Templatearchitektur muss vollständig durch das Template selbst entwickelt werden.

---

## Phase 2 – Menüintegration

Die erste Herausforderung bestand darin, das Joomla-Menü korrekt innerhalb des Offcanvas darzustellen.

Mehrere Versuche führten zunächst zu keinem Ergebnis.

Erst nach genauer Analyse wurde deutlich:

Nicht Bootstrap verhinderte die Darstellung des Menüs.

Die Ursache lag in der Art und Weise, wie Joomla Module rendert und in das Template einbindet.

Diese Erkenntnis stellte den ersten wichtigen Wendepunkt der Entwicklung dar.

---

## Phase 3 – Komponentenarchitektur

Im weiteren Verlauf zeigte sich, dass nicht das Offcanvas selbst überarbeitet werden musste.

Vielmehr entstand während der Entwicklung eine neue Komponentenarchitektur.

Aus dem ursprünglichen Header entwickelten sich eigenständige Komponenten.

Hierzu gehören:

- Branding
- Balance
- Toggle
- Navigation

Diese Komponenten werden heute sowohl im Header als auch im Offcanvas wiederverwendet.

---

# Die wichtigste Erkenntnis

Während der Entwicklung zeigte sich, dass nahezu sämtliche Probleme nicht durch CSS entstanden.

Die eigentliche Ursache lag fast immer in einer unklaren Verantwortungsverteilung.

Aus dieser Erfahrung entstand ein grundlegendes Architekturprinzip.

> Jede CSS-Eigenschaft besitzt genau einen Verantwortlichen.

Dadurch werden Überschreibungen vermieden.

---

# Komponenten besitzen keine Layoutverantwortung

Komponenten beschreiben ausschließlich ihr eigenes Erscheinungsbild.

Sie entscheiden nicht,

- wann sie sichtbar sind,
- wo sie erscheinen,
- wie groß sie dargestellt werden,
- oder wie sie positioniert werden.

Diese Entscheidungen trifft ausschließlich das jeweilige Layout.

---

# Beispiel Toggle

Anfangs enthielt die Toggle-Komponente

```scss
display: none;
```

Später musste diese Eigenschaft an anderer Stelle wieder überschrieben werden.

Dies führte zu unnötigen Abhängigkeiten zwischen Komponenten und Layout.

Nach der Überarbeitung entscheidet ausschließlich der Header darüber,

- wann der Toggle sichtbar ist,
- wann das Desktop-Menü verschwindet,
- wann das Branding ausgeblendet wird.

Die Toggle-Komponente beschreibt heute lediglich ihr eigenes Erscheinungsbild.

---

# Beispiel Branding

Die Branding-Komponente definiert ausschließlich

- Farben
- Typografie
- Aufbau
- Markenidentität

Nicht Bestandteil der Komponente sind

- Schriftgröße
- Position
- Responsive Verhalten
- Ausrichtung

Diese Eigenschaften werden durch Header oder Offcanvas festgelegt.

Dadurch kann dieselbe Branding-Komponente an mehreren Stellen wiederverwendet werden.

---

# Beispiel Balance

Auch die Balance folgt diesem Prinzip.

Die Komponente beschreibt ausschließlich

- Linien
- Punkt
- Farben

Nicht Bestandteil der Komponente sind

- Linienlänge
- Position
- Abstände

Diese Eigenschaften werden ebenfalls durch das jeweilige Layout definiert.

---

# Zusammengesetzte Komponenten

Während der Entwicklung entstand eine weitere wichtige Erkenntnis.

Branding und Balance bilden gemeinsam die Markenidentität.

Hieraus entstand die zusammengesetzte Komponente

```
ww-brand
```

Sie wird heute sowohl im Header als auch im Offcanvas verwendet.

Dadurch existiert nur noch eine zentrale Definition der Markenidentität.

---

# Bootstrap als technische Bibliothek

Während der Entwicklung wurde deutlich, dass Bootstrap nicht bekämpft werden sollte.

Bootstrap liefert bereits sämtliche technischen Funktionen.

Das WissensWerk-Template ergänzt lediglich die Gestaltung.

Ein Beispiel hierfür ist die Verwendung der Bootstrap-CSS-Variablen.

Anstatt Bootstrap-Regeln zu überschreiben, werden vorhandene Variablen genutzt.

Beispielsweise:

```scss
--bs-offcanvas-bg
```

Damit bleibt Bootstrap vollständig updatefähig.

---

# Typische Fehler während der Entwicklung

## CSS überschreiben

Mehrfach wurde versucht, Probleme ausschließlich über zusätzliche CSS-Regeln zu lösen.

Dies führte zu immer komplexeren Selektoren.

Erst die konsequente Zuordnung der Verantwortlichkeiten führte zu einer stabilen Lösung.

---

## Verschachtelte Selektoren

Während der Entwicklung entstand versehentlich folgender Selektor:

```scss
.ww-offcanvas {

    .ww-offcanvas {

    }

}
```

Dieser erzeugte

```css
.ww-offcanvas .ww-offcanvas
```

Da ein entsprechendes HTML-Element nicht existierte, konnten die Regeln niemals greifen.

Die Ursache lag somit nicht bei Bootstrap, sondern in einer fehlerhaften SCSS-Verschachtelung.

---

## Bootstrap überschreiben

Mehrfach wurde versucht, Bootstrap-Regeln direkt zu überschreiben.

Später zeigte sich, dass Bootstrap hierfür bereits eigene Variablen bereitstellt.

Die Verwendung dieser Variablen führte zu einer deutlich saubereren Integration.

---

# Gestaltung

Das Offcanvas orientiert sich bewusst am Desktop-Header.

Es verwendet dieselbe Markenidentität.

Der Aufbau gliedert sich in drei Bereiche.

- Header
- Navigation
- Footer

Der Footer dient ausschließlich als visueller Abschluss.

Das Logo bildet den letzten Blickpunkt innerhalb des Menüs.

Auf zusätzliche Informationen oder Navigationselemente wird bewusst verzichtet.

---

# Erfahrungen

Während der Entwicklung entstand eine wichtige Erkenntnis.

Ein erfolgreich integriertes Framework tritt im fertigen Template in den Hintergrund.

Bootstrap übernimmt die technische Funktion.

Das Erscheinungsbild entsteht vollständig durch das WissensWerk-Designsystem.

Am Ende der Entwicklung war Bootstrap im fertigen Template kaum noch sichtbar.

Genau dieses Ziel sollte erreicht werden.

---

# Fazit

Die Entwicklung des Offcanvas führte nicht nur zu einer mobilen Navigation.

Sie führte zur Entwicklung einer konsistenten Komponentenarchitektur für das gesamte Template.

Die während dieser Entwicklung entstandenen Regeln bilden heute die Grundlage sämtlicher weiterer Template-Komponenten.

Die Offcanvas-Komponente markiert damit einen wesentlichen Meilenstein innerhalb der Templateentwicklung.