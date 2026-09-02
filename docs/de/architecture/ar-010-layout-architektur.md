[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-010 Layout-Architektur

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

# 1. Zweck

Dieses Dokument beschreibt die Architektur der Layouts und strukturellen Seitenbereiche innerhalb des WissensWerk-Templates.

Ziel ist eine klare Trennung zwischen dem zentralen Seitenlayout, wiederverwendbaren Layoutbausteinen und eigenständigen UI-Komponenten.

---

# 2. Architekturentscheidung

Das Template unterscheidet grundsätzlich zwischen:

1. Seitenlayout
2. wiederverwendbaren Layoutbausteinen
3. UI-Komponenten

Das zentrale Seitenlayout wird durch die Template-Struktur definiert.

Wiederkehrende HTML-Strukturen werden nur dann als eigenständige Layouts ausgelagert, wenn dadurch eine sinnvolle Wiederverwendung oder klare Verantwortlichkeit entsteht.

Layouts enthalten ausschließlich Darstellungslogik.

---

# 3. Ziele

Die Layout-Architektur verfolgt folgende Ziele:

- konsistenter Seitenaufbau
- Wiederverwendbarkeit
- Vermeidung unnötiger Duplikate
- klare Verantwortlichkeiten
- Entkopplung von Inhalt und Darstellung
- einfache Wartbarkeit
- kontrollierte Erweiterbarkeit
- responsive Umsetzung

---

# 4. Seitenlayout

Das zentrale Seitenlayout wird durch `index.php` definiert.

Die bisher entwickelte Struktur umfasst insbesondere:

```text
Template
│
├── Header
│   ├── Branding
│   ├── Navigation
│   └── weitere Header-Bereiche
│
├── Main
│   ├── Sidebar optional
│   └── Content
│
└── Footer
```

Das Offcanvas ist eine eigenständige mobile bzw. schmale Navigationskomponente und wird technisch vom Bootstrap-Offcanvas bereitgestellt.

---

# 5. Layouttechnologien

Für den strukturellen Seitenaufbau werden CSS Grid und Flexbox eingesetzt.

Grundsätzlich gilt:

- Grid für übergeordnete Seiten- und Spaltenstrukturen
- Flexbox für die Ausrichtung innerhalb einzelner Bereiche
- Bootstrap-Grid dort, wo dessen technische Grundlage sinnvoll genutzt werden kann
- WissensWerk-SCSS für projektspezifische Layoutregeln

Die visuelle Ausgestaltung wird über das WissensWerk-Designsystem gesteuert.

---

# 6. Header

Der Header ist ein eigenständiger struktureller Bereich des Templates.

Er kann insbesondere enthalten:

- Branding
- Hauptnavigation
- Suche
- CTA
- responsive Umschaltung auf die Offcanvas-Navigation

Die Header-Navigation verwendet die gemeinsame MetisMenu-basierte Menüarchitektur.

Die Zustandslogik der Header-Navigation wird durch das projektspezifische JavaScript gesteuert.

---

# 7. Hauptbereich

Der Hauptbereich bildet den zentralen Inhaltsbereich der Website.

Er kann abhängig von der Joomla-Konfiguration beispielsweise enthalten:

```text
Main
│
├── Sidebar links optional
│
└── Content
```

Die genaue Darstellung der Inhalte wird nicht durch das Layout vorweggenommen.

Welche Module oder Komponenten ausgegeben werden, wird durch Joomla bestimmt.

---

# 8. Sidebar

Die Sidebar ist ein optionaler Layoutbereich.

Sie kann insbesondere eine hierarchische Navigation enthalten.

Die Sidebar verwendet dieselbe MetisMenu-basierte Menütechnologie wie Header und Offcanvas.

Sie unterscheidet sich jedoch bewusst in der Zustandslogik:

```text
Sidebar
    → aktiven Pfad beim Laden öffnen
```

Die visuelle Gestaltung bleibt Teil der gemeinsamen WissensWerk-Navigationsarchitektur.

---

# 9. Offcanvas

Das Offcanvas ist kein zweites vollständig unabhängiges Seitenlayout, sondern ein eigenständiger responsiver UI-Bereich.

Die aktuelle Struktur lautet:

```text
Offcanvas
│
├── Header
│   ├── Branding
│   └── Schließen
│
├── Body
│   ├── Navigation
│   ├── Suche
│   └── CTA
│
└── Footer
    ├── Logo
    ├── Joomla-Rechtsmenü
    └── Copyright
```

Nur der Navigationsbereich des Offcanvas ist vertikal scrollbar.

Header, Suche/CTA und Footer bleiben innerhalb der definierten Struktur erreichbar.

Die detaillierte Architektur ist in **AR-016 Offcanvas-Architektur** beschrieben.

---

# 10. Modulpositionen

Modulpositionen sind Integrationspunkte zwischen Joomla und dem Template.

Das Template stellt Positionen bereit, während Joomla entscheidet, welche Module dort veröffentlicht werden.

Beispiele können sein:

- Header
- Hero
- Content-Top
- Content-Bottom
- Sidebar
- Footer
- Offcanvas-Bereiche

Die konkrete Benennung und Anzahl der Positionen wird durch die Template-Konfiguration festgelegt.

Das Layout soll keine unnötigen Annahmen über den Inhalt eines Moduls treffen.

---

# 11. Layouts

Wiederverwendbare HTML-Strukturen können als eigenständige Layouts umgesetzt werden.

Ein Layout:

- übernimmt genau eine Darstellungsaufgabe,
- enthält keine Geschäftslogik,
- verarbeitet keine eigenständige Datenlogik,
- kann aus mehreren Template-Bereichen verwendet werden,
- soll möglichst unabhängig von konkreten Inhalten bleiben.

Nicht jede wiederkehrende Struktur benötigt automatisch eine eigene Layoutdatei.

---

# 12. Komponenten

Komponenten sind eigenständige UI-Bausteine mit einer klar definierten visuellen oder funktionalen Aufgabe.

Beispiele können sein:

- Karten
- Buttons
- Formularelemente
- Navigationselemente
- weitere wiederverwendbare UI-Bausteine

Die Komponentenarchitektur wird in **AR-011 UI-Komponenten** beschrieben.

---

# 13. Verantwortungsgrenzen

Die Layout-Architektur übernimmt:

- Seitenstruktur
- Platzierung von Bereichen
- Ausgabe wiederverwendbarer Layoutbausteine
- responsive strukturelle Vorgaben

Nicht Aufgabe der Layouts sind:

- Geschäftslogik
- Datenverarbeitung
- redaktionelle Inhaltsverwaltung
- Modulverwaltung
- eigenständige Menülogik
- globale Asset-Verwaltung

Diese Aufgaben liegen bei Joomla, den zuständigen Komponenten oder den jeweiligen Architekturbausteinen.

---

# 14. Navigation und Layout

Die Navigation ist ein gutes Beispiel für die Trennung der Verantwortlichkeiten:

```text
Joomla
    → Menüstruktur

MetisMenu
    → Menüverhalten

WissensWerk JavaScript
    → Zustandslogik

WissensWerk SCSS
    → Darstellung

Layout
    → Positionierung
```

Damit wird verhindert, dass das Layout selbst die fachliche Menülogik übernehmen muss.

---

# 15. Responsive Verhalten

Das Layout wird für unterschiedliche Bildschirmgrößen entwickelt.

Grundsätzlich gilt:

```text
größere Bildschirmbreite
    → Header-Navigation

kleinere Bildschirmbreite
    → Offcanvas-Navigation
```

Die konkrete Umschaltung wird über die responsive Layout- und CSS-Regeln des Templates gesteuert.

Dabei werden insbesondere berücksichtigt:

- verfügbare Breite
- Touch-Bedienung
- horizontales Überlaufen
- Lesbarkeit
- Bedienbarkeit der Navigation

---

# 16. Erweiterbarkeit

Neue Layoutbereiche werden nur eingeführt, wenn eine eigenständige strukturelle Aufgabe besteht.

Bei neuen Anforderungen wird zunächst geprüft:

1. Kann ein bestehender Layoutbereich verwendet werden?
2. Kann ein vorhandenes Layout wiederverwendet werden?
3. Ist eine neue Komponente geeigneter?
4. Muss eine neue Modulposition geschaffen werden?

Damit wird verhindert, dass für jede neue Inhaltsvariante ein eigener struktureller Bereich entsteht.

---

# 17. Verwandte Architekturdokumente

- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-003 Verzeichnisstruktur](./ar-003-verzeichnisstruktur.md)
- [🏗️ AR-009 Joomla-Overrides](./ar-009-joomla-overrides.md)
- [🏗️ AR-011 UI-Komponenten](./ar-011-ui-komponenten.md)
- [🏗️ AR-016 Offcanvas-Architektur](./ar-016-offcanvas-architektur.md)

---

# 18. Aktueller Stand

Die grundlegende Layoutarchitektur ist durch die bisherige Umsetzung von Header, Main-Bereich, Sidebar, Footer und Offcanvas konkretisiert.

Insbesondere ist inzwischen klar definiert:

- Header und Sidebar besitzen unterschiedliche Navigationszustände.
- Offcanvas ist ein eigenständiger responsiver Bereich.
- Navigation, Layout und Menülogik sind getrennt.
- Modulpositionen bleiben durch Joomla konfigurierbar.
- CSS Grid und Flexbox bilden die strukturellen Layoutgrundlagen.
- Bootstrap wird dort genutzt, wo es technische Layoutgrundlagen bereitstellt.
- Die visuelle Gestaltung erfolgt über WissensWerk-SCSS und Design Tokens.

---

# 19. Ergebnis

Die Layout-Architektur stellt die strukturelle Grundlage des Templates bereit.

```text
Seitenlayout
    │
    ├── Header
    ├── Main
    │   ├── Sidebar
    │   └── Content
    └── Footer

Responsive Navigation
    │
    └── Offcanvas
```

Durch die klare Trennung zwischen Struktur, Komponenten, Navigation und Inhalt bleibt das Layout wartbar und kann mit den kommenden Seiten und Mockups weiterentwickelt werden, ohne die Grundarchitektur unnötig zu verändern.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | Layoutarchitektur an den aktuellen Entwicklungsstand angepasst; Header, Sidebar, Offcanvas, Navigation, Modulpositionen und Verantwortungsgrenzen präzisiert. |
