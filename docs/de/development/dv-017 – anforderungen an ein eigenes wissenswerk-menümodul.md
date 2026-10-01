# DV-017 – Anforderungen an ein eigenes WissensWerk-Menümodul

## Dokumentinformationen

| Merkmal | Wert |
|---|---|
| Dokument | DV-010 |
| Titel | Anforderungen an ein eigenes WissensWerk-Menümodul |
| Projekt | WissensWerk |
| Status | Offen / Planung |
| Version | 1.0 |
| Stand | 01.10.2026 |

---

## 1. Ausgangssituation

Die bisherige Navigation basiert auf dem Joomla-Menüsystem, dem Joomla-Menümodul, MetisMenu, Bootstrap Offcanvas und dem WissensWerk-Designsystem.

Die praktische Entwicklung hat gezeigt, dass diese Kombination die grundsätzliche Navigation zuverlässig bereitstellt, die Anforderungen von WissensWerk an mehrere getrennte Navigationsbereiche jedoch nur mit zusätzlicher Sonderlogik abbildbar sind.

Die drei wesentlichen Navigationsbereiche verwenden unterschiedliche Ausschnitte desselben Joomla-Menübaums:

```text
Joomla-Menübaum
│
├── Main Menu
│   └── Ebene 1 – Eltern
│
├── Topics
│   └── Ebene 2 – Kinder
│
└── Sidebar
    └── tiefere Ebenen / Kindeskinder
```

Das Offcanvas verwendet einen eigenen Menümodul-Eintrag und benötigt den vollständigen für die mobile Navigation erforderlichen Baum.

Die bisherige Erweiterung des bestehenden MetisMenu-JavaScriptes hat die Grenzen dieses Ansatzes sichtbar gemacht. Insbesondere der aktive Pfad kann nicht zuverlässig aus einem einzelnen, bewusst auf bestimmte Ebenen begrenzten Modul-DOM abgeleitet werden.

Daraus entsteht die Anforderung, die Menüausgabe künftig als eigenes WissensWerk-Menümodul auf Basis der Joomla-Menüstruktur zu entwickeln.

---

# 2. Architekturentscheidung

Es soll **kein weiterer JavaScript-Workaround** für die bestehenden Joomla-Menümodule entstehen.

Insbesondere sollen folgende Ansätze nicht zur dauerhaften Architektur werden:

- Active-Path-Ermittlung über Breadcrumbs
- gegenseitige Synchronisation mehrerer unabhängiger Menü-DOMs
- manuelles Nachsetzen von `active`-Zuständen per Sonder-JavaScript
- Abhängigkeit der Menülogik von zufällig vorhandenen DOM-Strukturen anderer Komponenten

Stattdessen soll ein eigenes WissensWerk-Menümodul entwickelt werden.

Zielarchitektur:

```text
Joomla Menüsystem
        │
        ▼
WW Menu Module
        │
        ├── Joomla Modulparameter
        ├── Menüstruktur
        ├── aktiver Menüpunkt
        ├── aktiver Elternpfad
        └── definierter Ausgabeumfang
        │
        ▼
WW HTML / Menü-Markup
        │
        ▼
MetisMenu
        │
        └── Interaktion / Collapse
        │
        ▼
WissensWerk SCSS
        │
        └── Darstellung
```

Bootstrap bleibt für das technische Offcanvas zuständig.

---

# 3. Grundprinzip

Die Verantwortlichkeiten sollen künftig eindeutig getrennt sein:

### Joomla

Joomla liefert:

- Menüstruktur
- Menüeinträge
- URLs
- Menüzuordnung
- aktive/current Zustände
- Modulkonfiguration
- Start Level
- End Level
- Untermenü-Konfiguration

### WW Menu Module

Das neue Modul entscheidet anhand der Joomla-Daten:

- welche Menüeinträge ausgegeben werden,
- welche Ebenen berücksichtigt werden,
- welche Einträge `current` sind,
- welche Vorfahren zum aktiven Pfad gehören,
- welche Einträge als Eltern bzw. tiefere Ebenen gekennzeichnet werden,
- welches HTML-Markup erzeugt wird.

### MetisMenu

MetisMenu übernimmt ausschließlich die Interaktion:

- Öffnen
- Schließen
- Collapse
- Toggler
- `aria-expanded`
- Zustandsklassen während der Interaktion

### Bootstrap

Bootstrap übernimmt:

- Offcanvas öffnen
- Offcanvas schließen
- Backdrop
- Fokusmanagement
- Scroll-Lock

### WissensWerk

WissensWerk übernimmt:

- HTML-Klassen
- Layout
- Typografie
- Farben
- Abstände
- Icons
- responsive Darstellung

---

# 4. Navigationsmodell

Die Navigation muss den vollständigen Joomla-Menübaum verstehen, auch wenn ein konkretes Modul nur einen Teil davon ausgibt.

Beispiel:

```text
WissensWerk
│
├── Themen
│   ├── Überblick
│   ├── Komponenten
│   ├── Architektur
│   └── Entwicklung
│
├── Wissen
│
├── Wissenswert
│   ├── WissensWerk
│   ├── Das Projekt
│   ├── Über mich
│   └── Mein Beruflicher Weg
│
└── Kontakt
```

Für eine Seite wie:

```text
Wissenswert
└── Mein Beruflicher Weg
```

muss der aktive Pfad logisch lauten:

```text
Kindeskind / aktueller Menüpunkt
        ↓
Kind / übergeordneter Menüpunkt
        ↓
Eltern / übergeordneter Menüpunkt
```

Daraus folgt:

```text
Mein Beruflicher Weg   → current
Wissenswert            → active
```

und gegebenenfalls weitere Vorfahren ebenfalls `active`.

---

# 5. Zustandsmatrix

Die folgenden Zustände bilden die während der Entwicklung herausgearbeiteten Anforderungen ab.

| Nr. | Zustand / Anforderung |
|---:|---|
| 01 | Normaler Top-Level-Eintrag ohne Untermenü wird als einfacher Link ausgegeben. |
| 02 | Top-Level-Eintrag mit Untermenü wird als Parent erkannt. |
| 03 | Ein Menüpunkt kann gleichzeitig Link und Parent sein. |
| 04 | Link und Toggler müssen getrennt bedienbar sein. |
| 05 | Der Link eines Parents navigiert weiterhin zur Elternseite. |
| 06 | Der Toggler öffnet bzw. schließt ausschließlich das Untermenü. |
| 07 | Ein aktueller Endpunkt wird als `current` gekennzeichnet. |
| 08 | Der direkte Parent eines aktuellen Endpunkts wird als aktiver Pfad erkannt. |
| 09 | Auch höhere Vorfahren werden als aktiver Pfad erkannt. |
| 10 | Aktiver Pfad und aktuell geöffnetes Untermenü sind unterschiedliche Zustände. |
| 11 | Ein aktiver Parent muss nicht automatisch als geöffnet dargestellt werden. |
| 12 | Beim Initialisieren der Sidebar soll der aktive Pfad sichtbar sein. |
| 13 | Beim Initialisieren des Headers soll die Hauptnavigation geschlossen bleiben. |
| 14 | Beim Öffnen eines aktiven Header-Zweigs kann der aktive Unterpfad sichtbar werden. |
| 15 | Im Offcanvas soll der aktive Pfad beim Öffnen sichtbar sein. |
| 16 | Eltern- und Kindmenü dürfen gleichzeitig geöffnet sein. |
| 17 | Nur Geschwister eines geöffneten Zweigs sind gegenseitig exklusiv. |
| 18 | Das Öffnen eines neuen Top-Level-Zweigs schließt den vorherigen Geschwisterzweig. |
| 19 | Das Schließen eines Parents darf nicht die Existenz des aktuellen Pfads verändern. |
| 20 | Ein aktiver Endpunkt soll nicht deshalb geöffnet werden, weil er selbst ein Endpunkt ist. |
| 21 | Mehrere Ebenen können gleichzeitig als aktiv markiert sein. |
| 22 | Ein Modul darf nur den durch seine Einstellungen definierten Ebenenbereich ausgeben. |
| 23 | Main Menu, Topics und Sidebar dürfen unterschiedliche Ebenenbereiche desselben Joomla-Menüs ausgeben. |
| 24 | Das Offcanvas darf eine eigene Modulinstanz mit eigenem Ausgabeumfang verwenden. |
| 25 | Der aktive Zustand darf nicht davon abhängen, ob tiefere Ebenen im jeweiligen Modul-DOM gerendert werden. |
| 26 | Die Zustandsinformation muss aus der Joomla-Menüstruktur bzw. dem Modul selbst ableitbar sein. |
| 27 | Breadcrumbs dürfen nicht als technische Quelle für den Menüstatus verwendet werden. |
| 28 | Ein Menümodul darf nicht von einem anderen Menümodul abhängig sein. |
| 29 | MetisMenu darf nicht die Aufgabe übernehmen, Joomla-Menüzustände nachträglich zu rekonstruieren. |
| 30 | Die Joomla-Modulparameter müssen die tatsächliche Ausgabe und den Zustand nachvollziehbar steuern. |

---

# 6. Anforderungen an die Modulparameter

Das neue Modul soll sich grundsätzlich an den bekannten Joomla-Menüparametern orientieren und diese für WissensWerk korrekt umsetzen.

Mindestens erforderlich:

```text
Menü
Start Level
End Level
Untermenüs anzeigen
```

Zusätzlich zu prüfen:

```text
Aktiven Pfad berücksichtigen
Aktiven Pfad markieren
Toggler für Parent-Einträge
MetisMenu aktivieren
```

Die genaue Benennung wird erst während der technischen Konzeption festgelegt.

Wichtig ist nicht die Anzahl eigener Optionen, sondern eine nachvollziehbare Beziehung zwischen Modulparameter und gerendertem HTML.

---

# 7. Erwartete Verwendung

## Main Menu

```text
Start Level: 1
End Level:   1
```

Ausgabe:

```text
Themen
Wissen
Wissenswert
Kontakt
```

Der Menüpunkt `Wissenswert` muss trotzdem als Teil des aktiven Pfades erkannt werden, wenn eine tiefere Seite innerhalb dieses Zweigs aktiv ist.

---

## Topics

Der Topics-Bereich gibt den dafür vorgesehenen mittleren Menübereich aus.

Die genaue Ebenenkonfiguration wird Bestandteil der Modulkonzeption.

---

## Sidebar

Die Sidebar gibt die tieferen Navigationsbereiche aus und kann den aktiven Pfad innerhalb ihres Bereiches unmittelbar darstellen.

---

## Offcanvas

Das Offcanvas verwendet eine eigene Modulinstanz:

```text
Start Level: 1
End Level:   All
```

Damit kann der vollständige mobile Navigationsbaum ausgegeben werden.

Das Offcanvas selbst bleibt eine Bootstrap-Komponente.

---

# 8. HTML-Anforderungen

Das neue Modul soll ein definiertes, stabiles HTML-Markup erzeugen.

Grundstruktur:

```html
<ul class="mod-menu ...">
    <li class="...">
        <a href="...">Titel</a>
        <button class="mm-toggler" ...></button>
        <ul class="mm-collapse">
            ...
        </ul>
    </li>
</ul>
```

Dabei gilt:

- echte Joomla-Links bleiben echte Links,
- Toggler sind eigene Bedienelemente,
- Untermenüs sind echte verschachtelte Listen,
- `current` und aktive Vorfahren werden vom Modul ausgegeben,
- MetisMenu verändert anschließend nur den Interaktionszustand.

---

# 9. Accessibility

Das neue Modul muss die bisher erarbeitete Bedienlogik erhalten.

Erforderlich sind insbesondere:

- semantische Links
- echte Buttons für Toggler
- `aria-expanded`
- `aria-haspopup`, wenn erforderlich
- sichtbare Fokuszustände
- Tastaturbedienung
- keine Navigation ausschließlich über JavaScript
- Links müssen auch ohne MetisMenu grundsätzlich funktionieren

---

# 10. Technischer Entwicklungsansatz

Die Entwicklung soll schrittweise erfolgen.

### Phase 1 – Joomla-Menüstruktur

Ermitteln:

- Joomla Menu API
- Menüeinträge
- Parent-Beziehungen
- Level
- current
- active path
- Modulparameter

### Phase 2 – Renderer

Entwicklung eines kleinen WW-Menürenderers.

Ziel:

```text
Joomla Menu Tree
        ↓
WW Renderer
        ↓
stabiles HTML
```

Noch keine komplexe Interaktionslogik.

### Phase 3 – Zustandsmodell

Definition der Zustände:

```text
current
active
parent
deeper
open
closed
```

Dabei müssen die Zustände voneinander getrennt bleiben.

### Phase 4 – MetisMenu

Erst nachdem das HTML und die Zustandsklassen stabil sind, wird MetisMenu wieder angebunden.

### Phase 5 – Integrationsprüfung

Prüfung mit:

- Main Menu
- Topics
- Sidebar
- Offcanvas

### Phase 6 – Entfernung der Übergangslösung

Erst wenn das neue Modul stabil ist, werden die bisherigen Sonderlösungen in `menu-metismenu.js` schrittweise entfernt.

---

# 11. Nicht-Ziele

Das neue Modul soll zunächst **kein vollständiges eigenes Navigationsframework** werden.

Nicht Bestandteil der ersten Version:

- eigener Menü-Manager außerhalb von Joomla
- eigener URL-Router
- Breadcrumb-Parser
- eigenes Offcanvas-System
- Ersatz für Bootstrap
- Ersatz für MetisMenu
- visuelle Gestaltung innerhalb des PHP-Renderers
- Änderung des Joomla-Core

---

# 12. Abgrenzung zu Breadcrumbs

Breadcrumbs bleiben eine eigenständige Darstellung der aktuellen Position.

Sie werden nicht als technische Quelle verwendet, um Menüeinträge anderer Module zu aktivieren.

Die Menülogik muss aus dem Joomla-Menümodell selbst ableitbar sein.

Damit bleibt die Abhängigkeit:

```text
Joomla Menü
   ├── WW Menu Module
   └── Breadcrumbs
```

und nicht:

```text
Breadcrumbs
      ↓
WW Menu Module
```

---

# 13. Übergang vom bestehenden System

Der bestehende MetisMenu-Code wird zunächst nicht gelöscht.

Der aktuelle Stand bleibt als funktionierende Referenz erhalten.

Die Entwicklung des neuen Moduls erfolgt parallel.

Erst nach erfolgreicher Prüfung werden:

- bestehende Sonderlogik,
- redundante Active-Path-Ermittlung,
- Offcanvas-Sonderfälle

schrittweise entfernt.

---

# 14. Akzeptanzkriterien

Das neue Modul gilt als technisch belastbar, wenn:

- [ ] Joomla-Menüstruktur vollständig korrekt verarbeitet wird.
- [ ] Start Level korrekt berücksichtigt wird.
- [ ] End Level korrekt berücksichtigt wird.
- [ ] Untermenü-Ausgabe korrekt berücksichtigt wird.
- [ ] `current` korrekt ausgegeben wird.
- [ ] aktive Vorfahren korrekt ausgegeben werden.
- [ ] Main Menu ohne gerenderte Unterebenen den korrekten aktiven Elternzustand darstellen kann.
- [ ] Topics den korrekten aktiven Zustand darstellen.
- [ ] Sidebar den korrekten aktiven Zustand darstellen kann.
- [ ] Offcanvas den vollständigen vorgesehenen Menübaum ausgeben kann.
- [ ] Link und Toggler getrennt funktionieren.
- [ ] MetisMenu nur die Interaktion übernimmt.
- [ ] Bootstrap weiterhin ausschließlich das Offcanvas bereitstellt.
- [ ] keine Breadcrumb-Abhängigkeit entsteht.
- [ ] keine gegenseitige Abhängigkeit der Menümodule entsteht.
- [ ] bestehende Joomla-Core-Dateien unverändert bleiben.
- [ ] Bootstrap-Vendor-Dateien unverändert bleiben.
- [ ] Tastatur- und Touch-Bedienung funktionieren.
- [ ] Build erfolgreich ist.
- [ ] bestehende Navigation während der Entwicklung als Referenz erhalten bleibt.
- [ ] Dokumentation nach Abschluss aktualisiert wird.

---

# 15. Offener Entwicklungsstatus

Dieses Dokument beschreibt zunächst die Anforderungen und die geplante Architektur.

Die technische Umsetzung beginnt bewusst noch nicht.

Zunächst sollen die Anforderungen anhand weiterer Inhalte und konkreter Joomla-Menüfälle geprüft und vervollständigt werden.

Die bisher funktionierende Navigation bleibt während dieser Konzeptphase unverändert.

---

## Verwandte Dokumente

- DV-007 – Navigation
- DV-009 – Entwicklung der Offcanvas-Komponente
- DV-000 – Entwicklungsübersicht
- TF-002 – Issue Management

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 01.10.2026 | Anforderungen und Zielarchitektur für ein eigenes WissensWerk-Menümodul aus der bisherigen Navigationsentwicklung abgeleitet. |
