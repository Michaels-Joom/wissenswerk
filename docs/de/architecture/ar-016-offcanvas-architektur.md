[[[ Inhaltsverzeichnis ]](./../table-of-contents.md)  [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-016 Offcanvas-Architektur

## Dokumentinformationen

| Merkmal | Wert |
|----------|------|
| Dokument | AR-016 |
| Titel | Offcanvas-Architektur |
| Version | 2.0 |
| Status | Aktiv |
| Autor | WissensWerk |
| Gültig ab | Joomla 5.x |
| Stand | 02.09.2026 |

---

# 1. Ziel

Das Offcanvas stellt die mobile und schmale Navigationslösung des WissensWerk-Templates bereit.

Die technische Grundlage bildet die Bootstrap-5-Offcanvas-Komponente. Die hierarchische Navigation innerhalb des Offcanvas wird über MetisMenu realisiert und durch projektspezifisches WissensWerk-JavaScript integriert.

Das visuelle Erscheinungsbild wird vollständig über das WissensWerk-Designsystem und dessen Design Tokens gesteuert.

Ziel ist eine klare Trennung zwischen:

- Joomla als Quelle der Menü- und Modulstruktur,
- Bootstrap als technische Offcanvas-Funktion,
- MetisMenu als Menü- und Collapse-Logik,
- WissensWerk als Integrations-, Layout- und Gestaltungsebene.

---

# 2. Architekturprinzipien

Das Offcanvas folgt den allgemeinen Architekturregeln des Projekts:

- keine Änderungen am Joomla-Core
- keine Änderungen an Bootstrap-Vendor-Dateien
- Nutzung der Bootstrap-Offcanvas-Komponente
- Nutzung von MetisMenu für hierarchische Menüinteraktion
- Trennung von Struktur, Verhalten und Darstellung
- Gestaltung ausschließlich über die WissensWerk-SCSS-Architektur
- Verwendung der Joomla Web Asset API
- Nutzung von Joomla-Modulpositionen für erweiterbare Inhalte
- keine unnötige Eigenimplementierung vorhandener Funktionen
- barrierearme Bedienung
- responsive und touch-geeignete Umsetzung
- klare und lokal begrenzte Verantwortlichkeiten

Bootstrap und MetisMenu werden integriert und nicht durch konkurrierende Eigenentwicklungen ersetzt.

---

# 3. Architekturübersicht

Die aktuelle Architektur lässt sich wie folgt darstellen:

```text
Header
│
└── Toggle Button
        │
        ▼
Bootstrap Offcanvas
        │
        ├── Header
        │     ├── Branding
        │     └── Schließen-Button
        │
        ├── Body
        │     │
        │     ├── Navigation
        │     │      │
        │     │      ▼
        │     │   MetisMenu
        │     │      │
        │     │      └── Untermenüs / Collapse
        │     │
        │     ├── Suche
        │     │
        │     └── CTA
        │
        └── Footer
              ├── Logo
              ├── Joomla-Rechtsmenü
              └── Copyright
```

Bootstrap stellt den Offcanvas-Container und dessen technisches Verhalten bereit.

MetisMenu steuert die hierarchische Navigation innerhalb dieses Containers.

WissensWerk bestimmt Struktur, Layout, Gestaltung und die projektspezifische Integration.

---

# 4. Verantwortlichkeiten

## 4.1 Joomla

Joomla liefert die strukturellen Inhalte.

Dazu gehören insbesondere:

- Menüstruktur
- Menüeinträge
- Modulpositionen
- Module
- Template-System
- Web Asset API

Das Offcanvas enthält keine fest codierte Menüstruktur, soweit diese durch Joomla-Module bereitgestellt werden kann.

Auch rechtliche Links werden über eine Joomla-Modulposition eingebunden.

---

## 4.2 Bootstrap

Bootstrap übernimmt die technische Offcanvas-Funktionalität.

Dazu gehören insbesondere:

- Öffnen und Schließen
- Ein-/Ausblendanimation
- Overlay bzw. Backdrop
- Fokusverwaltung
- Scroll-Lock
- grundlegende Interaktion der Offcanvas-Komponente
- technische Zustände der Offcanvas-Komponente

Bootstrap bestimmt dabei nicht das visuelle Erscheinungsbild des WissensWerk-Offcanvas.

Bootstrap-Dateien werden nicht direkt verändert.

---

## 4.3 MetisMenu

MetisMenu übernimmt die hierarchische Menüinteraktion innerhalb des Offcanvas.

Dazu gehören:

- Öffnen und Schließen von Untermenüs
- Collapse-Verhalten
- Menüebenen
- Zustände geöffneter Bereiche

Die Menüstruktur selbst kommt weiterhin aus Joomla.

---

## 4.4 WissensWerk

WissensWerk übernimmt:

- Integration der beteiligten Systeme
- HTML-Struktur des Offcanvas
- Layout
- visuelle Gestaltung
- Design Tokens
- SCSS
- projektspezifische JavaScript-Logik
- responsive Ausgestaltung
- Abstände und Dimensionierung
- aktive und Fokuszustände

WissensWerk übernimmt damit die Gestaltung und Integration, nicht die erneute Implementierung der technischen Bootstrap- oder MetisMenu-Funktionalität.

---

# 5. Dateistruktur

Die aktuelle Implementierung ist bewusst kompakt aufgebaut.

```text
templates/wissenswerk/
│
├── includes/
│   └── offcanvas.php
│
├── html/
│
└── index.php
```

Die zugehörige SCSS-Struktur umfasst unter anderem:

```text
media/templates/site/wissenswerk/scss/
│
├── components/
│   ├── _offcanvas.scss
│   └── _offcanvas-navigation.scss
│
├── _metismenu.scss
│
└── template.scss
```

Die konkrete Einbindung und Reihenfolge der Assets wird über die Joomla Web Asset API gesteuert.

---

# 6. Offcanvas-Layout

Das Offcanvas verwendet ein flexibles Spaltenlayout.

Die wesentliche Struktur lautet:

```text
Offcanvas
│
├── Header          ← nicht scrollbar
│
├── Body
│   │
│   ├── Navigation  ← scrollbar
│   │
│   ├── Suche       ← nicht scrollbar
│   │
│   └── CTA         ← nicht scrollbar
│
└── Footer          ← nicht scrollbar
```

Der Navigationsbereich ist der zentrale scrollbare Bereich.

Dadurch bleibt der obere Bereich mit Branding und Schließen-Button erreichbar. Suchfunktion und CTA bleiben ebenfalls verfügbar.

Der Footer bleibt am unteren Rand des Offcanvas positioniert.

Horizontales Scrollen wird ausdrücklich vermieden.

Diese Struktur wurde gewählt, um auch bei langen Menüstrukturen und kleinen Bildschirmhöhen eine kontrollierbare Bedienung zu gewährleisten.

---

# 7. Branding

Das Branding wird über die zentrale Brand-Komponente des Templates bereitgestellt.

Im Offcanvas wird das vorhandene Logo verwendet, ohne eine zweite eigenständige Markenimplementierung aufzubauen.

Damit bleibt die Markenidentität zwischen Header, Offcanvas und weiteren Template-Bereichen konsistent.

Die Brand-Komponente kann unter anderem in folgenden Bereichen verwendet werden:

- Header
- Offcanvas
- Footer
- weitere Template-Layouts

---

# 8. Navigation

Die Navigation ist keine eigenständige Offcanvas-Eigenimplementierung.

Das Offcanvas stellt den Container für die Navigation bereit.

Die Menüstruktur wird von Joomla geliefert.

MetisMenu übernimmt das hierarchische Verhalten.

Die visuelle Darstellung wird durch die gemeinsame WissensWerk-Menügestaltung bestimmt.

Dadurch kann die gleiche grundlegende Menükomponente in unterschiedlichen Bereichen verwendet werden:

```text
Joomla Menü
     │
     ▼
MetisMenu
     │
     ├── Header
     ├── Sidebar
     └── Offcanvas
```

Die jeweiligen Bereiche können dabei unterschiedliche Zustandslogiken besitzen.

---

# 9. Zustandslogik

Die gemeinsame Menütechnologie bedeutet nicht, dass Header, Sidebar und Offcanvas identische Initialisierungsregeln benötigen.

Für die Sidebar wird beim Laden der aktive Menüpfad geöffnet und anschließend offen gehalten.

Für den Header startet die Navigation geschlossen. Beim Öffnen eines Hauptmenüzweigs wird geprüft, ob dieser Teil des aktuellen Pfades ist. Gegebenenfalls wird der darunterliegende aktive Pfad geöffnet.

Beim Schließen eines Hauptmenüzweigs werden untergeordnete Zustände zurückgesetzt.

Das Offcanvas verwendet dieselbe MetisMenu-Grundlage und die gemeinsame visuelle Menügestaltung.

Die Zustandslogik bleibt damit konsistent, ohne die unterschiedlichen Anforderungen der einzelnen Layoutbereiche zu vermischen.

---

# 10. Erweiterungsbereiche

Das Offcanvas besitzt bewusst definierte Bereiche für zusätzliche Joomla-Inhalte.

Aktuell vorgesehen bzw. umgesetzt sind insbesondere:

- Navigation
- Suche
- CTA
- Footer
- rechtliche Navigation

Weitere Module können über Joomla-Modulpositionen ergänzt werden, sofern dies für die spätere Website-Struktur erforderlich wird.

Die Grundarchitektur muss dafür nicht verändert werden.

---

# 11. Footer

Der Footer des Offcanvas ist Bestandteil der aktuellen Layoutarchitektur.

Er enthält:

- das WissensWerk-Logo,
- ein Joomla-basiertes Rechts-/Legal-Menü,
- das dynamische Copyright-Jahr.

Das Rechtsmenü wird über eine Joomla-Modulposition eingebunden:

```text
offcanvas-legal
```

Dadurch bleiben die Zielseiten und Menüeinträge im Joomla-Menüsystem verwaltbar.

Das Template enthält keine fest codierten URLs für diese Seiten.

---

# 12. Responsive Verhalten

Das Offcanvas ist für mobile und schmale Bildschirmbereiche vorgesehen.

Die konkrete Umschaltung zwischen horizontaler Header-Navigation und Offcanvas wird durch das Template-Layout und die dafür definierten responsive Regeln gesteuert.

Grundsätzlich gilt:

```text
größere Bildschirmbreite
        │
        ▼
Header-Navigation

kleinere Bildschirmbreite
        │
        ▼
Offcanvas-Navigation
```

Die verwendeten Breakpoints und responsive Regeln sind Bestandteil der allgemeinen Template- und SCSS-Architektur.

---

# 13. Designsystem

Das Offcanvas verwendet das WissensWerk-Designsystem.

Farben, Abstände, Typografie und Zustände werden über die zentralen Design Tokens gesteuert.

Insbesondere werden keine Bootstrap-Farbdefinitionen als visuelle Identität des Offcanvas verwendet.

Das Offcanvas folgt damit der gleichen visuellen Sprache wie:

- Header
- Sidebar
- Navigation
- weitere Template-Komponenten

Die gemeinsame Gestaltung reduziert visuelle Brüche zwischen den unterschiedlichen Navigationsbereichen.

---

# 14. Barrierefreiheit

Bei der Umsetzung werden insbesondere berücksichtigt:

- Tastaturbedienbarkeit
- sichtbare Fokuszustände
- Schließen über die Escape-Taste
- semantische HTML-Strukturen
- korrekte Button-Verwendung
- geeignete ARIA-Zustände
- ausreichende Kontraste
- Touch-geeignete Bedienflächen
- keine ausschließlich Hover-abhängigen Interaktionen

Bootstrap stellt einen Teil des technischen Offcanvas-Verhaltens bereit. Die Verantwortung für die konkrete barrierearme Ausgabe und die Gestaltung verbleibt beim Template.

Die Navigation wird zusätzlich auf eine klare hierarchische Struktur und nachvollziehbare Zustände ausgelegt.

---

# 15. Wartbarkeit und Update-Sicherheit

Die Offcanvas-Implementierung folgt den allgemeinen Wartungsgrundsätzen des Projekts.

Es gelten insbesondere:

- keine Änderungen am Joomla-Core
- keine Änderungen an Bootstrap-Vendor-Dateien
- keine Inline-Styles
- keine Inline-JavaScripts
- Nutzung der Joomla Web Asset API
- zentrale Design Tokens
- klar getrennte Verantwortlichkeiten
- Nutzung vorhandener Bootstrap- und MetisMenu-Funktionalität
- projektspezifischer Code nur dort, wo er tatsächlich erforderlich ist

Dadurch bleiben Updates von Joomla und Bootstrap grundsätzlich von den eigenen Anpassungen getrennt.

Bei Updates müssen jedoch insbesondere die verwendeten Bootstrap-Offcanvas-Schnittstellen und MetisMenu-Schnittstellen geprüft werden.

---

# 16. Typische Entwicklungsprobleme und Lösungen

## 16.1 Zu viel Inhalt im Offcanvas

Bei langen Menüs darf nicht das gesamte Offcanvas scrollen.

Lösung:

```text
Offcanvas
│
├── Header
├── Body
│   └── Navigation → overflow-y: auto
└── Footer
```

Der scrollbare Bereich wird auf die Navigation begrenzt.

---

## 16.2 Horizontales Scrollen

Horizontales Scrollen kann durch zu breite Inhalte oder Menüstrukturen entstehen.

Daher wird der horizontale Überlauf kontrolliert:

```scss
overflow-x: hidden;
```

Der vertikale Überlauf wird gezielt nur am Navigationsbereich zugelassen.

---

## 16.3 Vermischung von Menü- und Offcanvas-Logik

Das Offcanvas soll nicht selbst die komplette Menülogik implementieren.

Die Aufgaben werden getrennt:

```text
Bootstrap → Offcanvas
MetisMenu → Menü
WissensWerk JS → Integration und Zustandslogik
SCSS → Darstellung
```

Diese Trennung verhindert unnötige Kopplungen.

---

# 17. Abgrenzung zu anderen Komponenten

Das Offcanvas ist ein Container und Layoutbereich für die mobile Navigation.

Es ist nicht selbst verantwortlich für:

- die Erstellung der Joomla-Menüstruktur,
- die hierarchische Menülogik,
- die redaktionelle Verwaltung von Menüpunkten,
- die Definition rechtlicher Zielseiten,
- das globale Designsystem.

Diese Aufgaben bleiben bei Joomla, MetisMenu bzw. den zuständigen WissensWerk-Komponenten.

---

# 18. Aktueller Entwicklungsstand

Die Offcanvas-Komponente ist funktional und visuell umgesetzt.

Der aktuelle Stand umfasst:

- Bootstrap-Offcanvas als technische Grundlage
- zentrale Brand-Komponente
- MetisMenu-Navigation
- scrollbarer Navigationsbereich
- fixierter Header
- fixierter Such-/CTA-Bereich
- fixierter Footer
- Joomla-basiertes Legal-Menü
- dynamisches Copyright-Jahr
- keine horizontale Überbreite
- gemeinsame visuelle Menügestaltung mit Header und Sidebar
- responsive und touch-geeignete Bedienung
- Einbindung über die Joomla Web Asset API

Die Komponente ist damit Bestandteil der etablierten Template-Architektur.

---

# 19. Ergebnis

Das Offcanvas ist als klar abgegrenzte Template-Komponente umgesetzt.

Die aktuelle Verantwortungsverteilung lautet:

```text
Joomla
    → Menü- und Modulstruktur

Bootstrap
    → technische Offcanvas-Funktion

MetisMenu
    → hierarchisches Menüverhalten

WissensWerk JavaScript
    → projektspezifische Integration und Zustände

WissensWerk SCSS
    → Layout und visuelle Gestaltung

Designsystem
    → Farben, Typografie, Abstände und Zustände
```

Die Architektur vermeidet damit eine konkurrierende Eigenimplementierung vorhandener Funktionen.

Das Offcanvas kann auf dieser Grundlage erweitert werden, ohne die bestehende Grundarchitektur verändern zu müssen.

---

# 20. Verwandte Dokumente

- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-006 Web Asset API](./ar-006-web-asset-api.md)
- [🏗️ AR-007 Bootstrap-Integration](./ar-007-bootstrap-integration.md)
- [🏗️ AR-008 Asset-Management](./ar-008-asset-management.md)

Entwicklungsdokumente:

- DV-007 Navigation
- DV-009 Entwicklung der Offcanvas-Komponente
- DV-010 JavaScript-Buildprozess

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 02.09.2026 | Ursprüngliche Architekturdefinition erstellt. |
| 2.0 | 02.09.2026 | Architektur an den aktuellen Entwicklungsstand angepasst; Bootstrap, MetisMenu, Joomla und WissensWerk klar getrennt; aktuelles Offcanvas-Layout, Navigation, Footer, Modulpositionen und Zustandslogik dokumentiert. |
