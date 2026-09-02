[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🛠️ Entwicklungsübersicht](./dv-000-entwicklunguebersicht.md)

---

# DV-007 Navigation

**Dokumenttyp:** Entwicklungsdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Abgeschlossen  
**Version:** 2.1  
**Stand:** 02.09.2026

---

## 1. Zielsetzung

Dieses Dokument beschreibt die technische Konzeption und die aktuelle Umsetzung der Navigation innerhalb des WissensWerk-Templates.

Die Navigation verbindet das native Joomla-Menüsystem mit MetisMenu, Bootstrap 5 und dem WissensWerk-Designsystem.

Ziel ist eine wartbare, update-sichere und responsive Navigation, bei der Struktur, Verhalten und visuelle Gestaltung klar voneinander getrennt sind.

---

## 2. Aktueller Entwicklungsstand

Die Navigation ist funktional und gestalterisch abgeschlossen.

Umgesetzt sind:

- horizontale Hauptnavigation im Header
- mehrstufige Navigation
- MetisMenu für Collapse-/Expand-Verhalten
- Bootstrap Offcanvas für die mobile Navigation
- gemeinsame visuelle Gestaltung von Header, Sidebar und Offcanvas
- aktive und aktuelle Menüpfade
- unterschiedliche Zustandslogik für Header und Sidebar
- Touch- und Tastaturbedienung
- sichtbare Fokuszustände
- responsive Anpassung
- JavaScript als Quell- und minimierte Produktionsdatei
- Einbindung über die Joomla Web Asset API
- JavaScript-Build über Node.js/npm und Terser

---

## 3. Architektur

```text
Joomla
  → Menüstruktur

MetisMenu
  → hierarchisches Menüverhalten

Bootstrap
  → technische Offcanvas-Funktion

WissensWerk
  → Integration, Layout und Gestaltung
```

Die Navigation wurde bewusst nicht als eigenes Menüsystem neu entwickelt.

---

## 4. Joomla-Integration

Die Menüstruktur wird vollständig durch Joomla bereitgestellt.

Das Joomla-Menümodul liefert die Menüeinträge. Das Template übernimmt Einbindung, Positionierung und Gestaltung.

Die Menüeinträge bleiben echte Joomla-Links.

Einsatzbereiche:

- Header
- Sidebar
- Offcanvas

---

## 5. MetisMenu

MetisMenu übernimmt:

- Öffnen und Schließen von Untermenüs
- Collapse-Verhalten
- Zustandsklassen
- verschachtelte Menüebenen

Die projektspezifische Logik befindet sich unter:

```text
media/templates/site/wissenswerk/js/mod_menu/
├── menu-metismenu.js
└── menu-metismenu.min.js
```

---

## 6. Zustandslogik

### Sidebar

Beim Laden wird der aktive Pfad geöffnet.

```text
Seite laden
  ↓
aktuellen Menüpunkt ermitteln
  ↓
aktiven Pfad bestimmen
  ↓
Pfad öffnen
```

### Header

Der Header startet geschlossen.

Beim Öffnen eines Top-Level-Zweigs wird geprüft, ob dieser zum aktuellen aktiven Pfad gehört.

Falls ja, wird der relevante Unterpfad geöffnet.

Beim Schließen werden geöffnete Unterbereiche des Zweigs zurückgesetzt.

Damit wird verhindert, dass der Header beim Seitenaufruf unnötig mehrere Ebenen geöffnet darstellt.

---

## 7. Responsive Navigation

### Desktop

Horizontale Hauptnavigation im Header.

Die erste Untermenüebene wird unterhalb des Hauptmenüpunkts positioniert.

Tiefere Ebenen werden vertikal innerhalb des Menüs geführt.

Diese Entscheidung vermeidet problematische seitliche Flyouts bei begrenzter Bildschirmbreite.

### Tablet

Die Navigation berücksichtigt die verfügbare horizontale Breite.

### Mobile

Die Navigation wird über das Bootstrap-Offcanvas bereitgestellt.

Die Menüstruktur bleibt identisch mit der Joomla-Menüstruktur.

---

## 8. Offcanvas

Das Offcanvas besitzt:

- festen Header
- scrollbaren Navigationsbereich
- festen Suchbereich
- festen CTA-Bereich
- festen Footer

Nur die Navigation scrollt vertikal.

Horizontales Scrollen wird verhindert.

---

## 9. Gemeinsame Gestaltung

Header, Sidebar und Offcanvas verwenden eine gemeinsame visuelle MetisMenu-Grundlage.

Gemeinsam sind insbesondere:

- Linkdarstellung
- Hover- und Fokuszustände
- aktive/current Zustände
- Untermenükennzeichnung
- hierarchische Einrückung
- Design Tokens

---

## 10. SCSS

Die gemeinsame Menügestaltung befindet sich in:

```text
scss/
└── components/
    └── _metismenu.scss
```

Offcanvas-spezifische Regeln befinden sich in:

```text
scss/
└── components/
    ├── _offcanvas.scss
    └── _offcanvas-navigation.scss
```

Die Verantwortlichkeiten bleiben getrennt.

---

## 11. JavaScript-Build

Das JavaScript wird mit Node.js, npm und Terser gebaut.

```powershell
npm.cmd run build:js
```

Danach werden Quell- und Produktionsdatei geprüft:

```powershell
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js"
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
```

Anschließend erfolgt der Browser-Funktionstest.

---

## 12. Web Asset API

JavaScript und CSS werden über die Joomla Web Asset API eingebunden.

Vendor-Dateien werden nicht verändert.

---

## 13. Barrierefreiheit

Berücksichtigt werden:

- Tastaturbedienung
- sichtbare Fokuszustände
- semantische Links und Buttons
- nachvollziehbare Menüstruktur
- ausreichende Kontraste
- Touch-Bedienung

Die endgültige WCAG-Konformität wird auf Ebene des gesamten Templates bewertet.

---

## 14. SEO

Die Navigation verwendet echte Joomla-Links und eine nachvollziehbare Menüstruktur.

Sie ist nicht ausschließlich von JavaScript abhängig.

---

## 15. Performance

Die Lösung vermeidet unnötige Eigenentwicklung:

- MetisMenu für Menüinteraktion
- Bootstrap für Offcanvas
- Web Asset API für Assets
- minifiziertes Produktions-JavaScript
- gemeinsame SCSS-Struktur

---

## 16. Update-Sicherheit

Es werden keine Joomla-Core-Dateien und keine Vendor-Dateien von Bootstrap oder MetisMenu verändert.

Eigene Anpassungen erfolgen im WissensWerk-Template.

---

## 17. Architekturentscheidungen

### Joomla statt eigener Menüstruktur

Menüstruktur und URLs bleiben in Joomla.

### MetisMenu statt eigener Collapse-Implementierung

Die mehrstufige Menüinteraktion wird nicht vollständig selbst nachgebaut.

### Bootstrap Offcanvas statt eigener Offcanvas-Implementierung

Bootstrap übernimmt die technische Offcanvas-Funktion.

### Gemeinsames Styling

Header, Sidebar und Offcanvas verwenden eine gemeinsame visuelle Navigationsgrundlage.

### Keine tiefen seitlichen Flyouts

Tiefere Ebenen werden vertikal geführt, um Platzprobleme zu vermeiden.

---

## 18. Aktueller Status

Die Navigation ist abgeschlossen und bildet eine stabile Grundlage für die weitere Entwicklung der Inhaltsseiten.

Die bisherige Entwicklung hat insbesondere die Trennung von Joomla-Struktur, MetisMenu-Interaktion, Bootstrap-Funktion und WissensWerk-Gestaltung bestätigt.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | Dokument an den aktuellen Navigationsstand angepasst. |
| 2.1 | 02.09.2026 | JavaScript-Build, gemeinsame SCSS-Struktur und aktuelle Zustandslogik präzisiert. |
