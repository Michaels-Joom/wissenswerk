[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🛠️ Entwicklungsübersicht](./dv-000-entwicklunguebersicht.md)

---

# DV-009 Entwicklung der Offcanvas-Komponente

## Dokumentinformationen

| Merkmal | Wert |
|----------|------|
| Dokument | DV-009 |
| Titel | Entwicklung der Offcanvas-Komponente |
| Projekt | WissensWerk |
| Status | Abgeschlossen |
| Version | 2.1 |
| Letzte Aktualisierung | 02.09.2026 |

---

# 1. Ziel

Ziel war die Entwicklung einer mobilen Offcanvas-Navigation für das WissensWerk-Template auf Basis der Bootstrap-Offcanvas-Komponente.

Die technische Funktionalität von Bootstrap wird gezielt genutzt.

Joomla stellt die Menüstruktur bereit.

MetisMenu übernimmt die mehrstufige Navigation.

WissensWerk kontrolliert Layout, Gestaltung und Design Tokens.

---

# 2. Architektur

```text
Joomla
   │
   └── Menüstruktur
          │
          ▼
      MetisMenu
          │
          ├── Untermenüs
          ├── Collapse-Verhalten
          └── Menü-Zustände
          │
          ▼
      Bootstrap
          │
          └── Offcanvas-Funktion
          │
          ▼
   WissensWerk
          │
          ├── Layout
          ├── Gestaltung
          ├── Design Tokens
          └── responsive Präsentation
```

---

# 3. Ausgangssituation

Bootstrap stellt eine geeignete technische Offcanvas-Komponente bereit.

Die mobile Navigation sollte nicht als vollständig eigenständige Menülogik entstehen.

Daher wurde die vorhandene Joomla-Menüstruktur weiterverwendet und MetisMenu für die hierarchische Navigation integriert.

---

# 4. Entwicklungsschwerpunkte

Die Entwicklung konzentrierte sich auf:

- Bootstrap-Offcanvas
- Joomla-Menüintegration
- MetisMenu
- responsive Layoutstruktur
- gemeinsame Navigation
- Branding
- Footer
- Accessibility
- Design Tokens
- Vermeidung horizontaler Überläufe

---

# 5. Navigation und Zustandslogik

Die Navigationsbereiche verwenden dieselbe grundlegende MetisMenu-Technologie, besitzen aber unterschiedliche Lebenszyklen.

## Sidebar

Die Sidebar öffnet beim Laden den aktiven Pfad.

## Header

Der Header startet geschlossen.

Beim Öffnen eines Top-Level-Zweigs wird geprüft, ob dieser Teil des aktuellen Pfades ist.

Falls ja, wird der relevante aktive Unterpfad geöffnet.

Beim Schließen werden geöffnete Unterbereiche des Zweigs zurückgesetzt.

## Offcanvas

Das Offcanvas verwendet die gemeinsame Navigation und befindet sich innerhalb des Bootstrap-Offcanvas-Containers.

---

# 6. Offcanvas-Layout

Die aktuelle Struktur ist:

```text
┌─────────────────────────────┐
│ Header / Branding       [×] │
├─────────────────────────────┤
│                             │
│ Navigation                  │
│   scrollbarer Bereich       │
│                             │
├─────────────────────────────┤
│ Suche                       │
│ Call-to-Action              │
├─────────────────────────────┤
│ Footer / Legal / Copyright  │
└─────────────────────────────┘
```

Nur die Navigation scrollt vertikal.

Damit bleiben Suchbereich, CTA und Footer unabhängig von der Länge der Navigation erreichbar.

Horizontales Scrollen wird verhindert.

---

# 7. Komponentenarchitektur

Das Offcanvas nutzt wiederverwendbare Templatebestandteile.

Dazu gehören insbesondere:

- Branding
- Navigation
- Toggle
- Footer
- Joomla-Modulpositionen

Die Branding-Komponente wird auch außerhalb des Offcanvas verwendet.

Positionierung und responsive Verhalten bleiben Aufgabe des jeweiligen Layouts.

---

# 8. Footer

Der Footer enthält:

- WissensWerk-Logo
- rechtliches Joomla-Menü
- Copyright

Das rechtliche Menü wird über eine Joomla-Modulposition eingebunden.

Die Zielseiten werden daher nicht als feste URLs in das Template geschrieben.

Der Copyright-Jahreswert wird dynamisch erzeugt.

---

# 9. Gestaltung

Das Offcanvas verwendet die WissensWerk-Design Tokens für:

- Farben
- Abstände
- Typografie
- Rahmen
- Hover
- Fokus
- Zustände

Header, Sidebar und Offcanvas besitzen eine gemeinsame visuelle Navigationssprache.

---

# 10. Accessibility

Berücksichtigt werden:

- semantische Navigation
- Tastaturbedienung
- sichtbare Fokuszustände
- beschriftete Bedienelemente
- getrennte Bedienung von Link und Toggle
- Touch-Bedienung
- ausreichende Kontraste

Bootstrap unterstützt die technische Offcanvas-Funktion, während die visuelle Fokusdarstellung durch WissensWerk bestimmt wird.

---

# 11. Typische Entwicklungsprobleme

## CSS-Verantwortlichkeiten

Probleme entstanden teilweise durch widersprüchliche oder doppelte CSS-Regeln.

Die Lösung war eine klare Zuordnung der Zuständigkeiten zwischen:

- MetisMenu
- Offcanvas
- Offcanvas-Navigation
- Layout
- Design Tokens

## SCSS-Verschachtelung

Eine fehlerhafte Verschachtelung kann Selektoren erzeugen, die nicht zur tatsächlichen HTML-Struktur passen.

Beispielsweise:

```scss
.ww-offcanvas .ww-offcanvas
```

Solche Fehler werden durch Prüfung der generierten Selektoren vermieden.

## Bootstrap-Regeln

Bootstrap wird nicht durch umfangreiche globale Überschreibungen angepasst.

Stattdessen wird die technische Komponente gezielt integriert und visuell durch WissensWerk-SCSS gestaltet.

---

# 12. Vendor-Code

Bootstrap- und MetisMenu-Vendor-Dateien werden nicht manuell verändert.

Eigene Anpassungen erfolgen ausschließlich im WissensWerk-Template.

---

# 13. Aktueller Stand

Die Offcanvas-Komponente ist funktional abgeschlossen.

Umgesetzt sind:

- Bootstrap-Offcanvas
- Joomla-Menü
- MetisMenu
- mehrstufige Navigation
- scrollbarer Navigationsbereich
- fixer Header
- fixer Suchbereich
- fixer CTA-Bereich
- fixer Footer
- Branding
- rechtliches Menü
- Copyright
- responsive Darstellung
- Fokuszustände
- Touch-Bedienung
- gemeinsame Navigationsgestaltung

---

# 14. Erkenntnisse

Die Entwicklung hat bestätigt, dass vorhandene, spezialisierte Komponenten besser genutzt werden können, als deren Funktionalität vollständig neu zu implementieren.

Die Verantwortlichkeiten sind klar verteilt:

```text
Joomla
→ Struktur

MetisMenu
→ Navigation

Bootstrap
→ Offcanvas

WissensWerk
→ Integration und Gestaltung
```

Diese Trennung reduziert Eigenentwicklung und erleichtert die Wartung.

---

# 15. Fazit

Die Offcanvas-Komponente ist Bestandteil der stabilen Template-Basis.

Die technische Funktion, das responsive Layout und die visuelle Gestaltung sind in die bestehende WissensWerk-Architektur integriert.

Die Entwicklung bildet damit eine belastbare Grundlage für die folgenden Inhaltsseiten.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 2.0 | 02.09.2026 | Dokument an den damals aktuellen Offcanvas-Stand angepasst. |
| 2.1 | 02.09.2026 | Zustandslogik, Komponentenstruktur und finales Layout nochmals mit dem aktuellen Entwicklungsstand abgeglichen. |
