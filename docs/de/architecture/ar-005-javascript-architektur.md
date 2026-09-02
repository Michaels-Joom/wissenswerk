[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-005 JavaScript-Architektur

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

# 1. Zweck

Dieses Dokument beschreibt die Architektur der JavaScript-Dateien innerhalb des WissensWerk-Templates.

Es definiert die organisatorischen Regeln, die Verantwortlichkeiten sowie das Zusammenspiel zwischen externen Bibliotheken und projektspezifischem JavaScript.

Ziel ist eine modulare, übersichtliche und langfristig wartbare JavaScript-Architektur.

---

# 2. Zielsetzung

Die JavaScript-Architektur verfolgt folgende Ziele:

- klare Trennung der Verantwortlichkeiten
- gezielter Einsatz vorhandener Bibliotheken
- möglichst geringe Eigenimplementierung
- modulare Organisation
- nachvollziehbare Abhängigkeiten
- einfache Wartbarkeit
- kontrollierte Erweiterbarkeit
- standardkonforme Einbindung über die Joomla Web Asset API
- Trennung von Quelldateien und produktiven Build-Artefakten

---

# 3. Architekturprinzipien

JavaScript gehört zur Darstellungsschicht des Templates und ergänzt diese um interaktive Funktionen.

Dabei gelten folgende Grundsätze:

- JavaScript wird nur eingesetzt, wenn eine Interaktion technisch erforderlich ist.
- Vorhandene und bewährte Bibliotheken werden genutzt, bevor Funktionen selbst implementiert werden.
- Eigener Code übernimmt nur projektspezifische Aufgaben.
- Jedes Modul besitzt eine klar abgegrenzte Verantwortung.
- Abhängigkeiten werden möglichst gering gehalten.
- JavaScript wird nicht als Ersatz für HTML, CSS oder Joomla-Funktionalität verwendet.
- Die Einbindung erfolgt über die Joomla Web Asset API.
- Quellcode und erzeugte Build-Dateien werden getrennt betrachtet.

---

# 4. Aktuelle Architektur

Die aktuelle JavaScript-Architektur wird insbesondere durch die Navigation geprägt.

```text
Joomla
│
└── Menüstruktur
        │
        ▼
    MetisMenu
        │
        ├── Untermenüs
        ├── Collapse
        └── Menü-Zustände
        │
        ▼
WissensWerk JavaScript
        │
        ├── aktive Pfade
        ├── Sidebar-Verhalten
        └── Header-Verhalten
        │
        ▼
Joomla Web Asset API
        │
        ▼
Browser
```

MetisMenu übernimmt die allgemeine hierarchische Menüinteraktion.

Das WissensWerk-JavaScript bildet die projektspezifische Integrationsschicht.

Damit wird keine vollständige eigene Menülogik parallel zu MetisMenu entwickelt.

---

# 5. Navigation

Die aktuelle Navigationslogik befindet sich im Bereich:

```text
media/templates/site/wissenswerk/js/mod_menu/
```

Die maßgeblichen Dateien sind:

```text
menu-metismenu.js
menu-metismenu.min.js
```

Dabei gilt:

```text
menu-metismenu.js
        │
        ▼
      Terser
        │
        ▼
menu-metismenu.min.js
```

Die nicht minifizierte Datei ist die Entwicklungs- und Quelldatei.

Die minifizierte Datei ist das für die produktive Auslieferung vorgesehene Build-Artefakt.

---

# 6. Zustandslogik der Navigation

Die projektspezifische JavaScript-Logik ergänzt MetisMenu um die Anforderungen des WissensWerk-Templates.

## 6.1 Sidebar

Beim Laden der Seite wird der aktive Menüpfad ermittelt und geöffnet.

Dadurch bleibt die aktuelle Position innerhalb einer hierarchischen Navigation sichtbar.

Vereinfacht:

```text
Menü initialisieren
        ↓
aktiven Menüpunkt ermitteln
        ↓
aktiven Pfad ermitteln
        ↓
Pfad öffnen
        ↓
Sidebar initialisieren
```

---

## 6.2 Header

Der Header startet beim Laden bewusst geschlossen.

Beim Öffnen eines Hauptmenüzweigs wird geprüft, ob dieser Zweig Bestandteil des aktuellen Pfades ist.

Ist dies der Fall, kann der darunterliegende aktive Pfad geöffnet werden.

Beim Schließen eines Hauptmenüzweigs werden untergeordnete Zustände zurückgesetzt.

Dadurch beginnt ein erneutes Öffnen des Zweigs mit einem kontrollierten Zustand.

---

## 6.3 Gemeinsame Grundlage

Header und Sidebar verwenden dieselbe MetisMenu-basierte Menüarchitektur und dieselbe visuelle Menügestaltung.

Sie besitzen jedoch bewusst unterschiedliche Initialisierungs- und Zustandsregeln.

Diese Unterscheidung ist Bestandteil der Architektur und kein Fehler oder Sonderfall.

---

# 7. Verantwortlichkeiten

## Layout

JavaScript für allgemeine Layoutinteraktionen wird nach fachlicher Verantwortung organisiert.

Beispiele können sein:

- Scrollverhalten
- responsive Interaktionen
- Layoutzustände

Nicht jede theoretisch mögliche Funktion wird automatisch als Modul angelegt.

---

## Navigation

Der Navigationsbereich enthält JavaScript für:

- MetisMenu-Integration
- aktive Pfade
- Öffnungs- und Schließzustände
- projektspezifische Menülogik

---

## Komponenten

JavaScript für eigenständige wiederverwendbare UI-Komponenten wird nur bei tatsächlichem Bedarf ergänzt.

Beispiele für mögliche spätere Komponenten:

- Galerie
- Slider
- Tabs
- Akkordeon
- Modal

Diese Funktionen sind nicht automatisch Bestandteil der aktuellen Implementierung.

---

## Formulare

Formularbezogenes JavaScript wird nur bei konkretem Bedarf ergänzt.

Beispiele:

- clientseitige Validierung
- Eingabehilfen
- interaktive Formularelemente

---

## Utilities

Allgemeine Hilfsfunktionen können zentral organisiert werden, sofern eine tatsächliche Wiederverwendung vorliegt.

Eine Utility-Datei soll nicht als Sammelbecken für fachlich unterschiedliche Funktionen verwendet werden.

---

# 8. Modularität

Jedes JavaScript-Modul besitzt eine klar abgegrenzte Verantwortung.

Module sollen:

- möglichst unabhängig sein,
- klar definierte Abhängigkeiten besitzen,
- keine unnötigen globalen Zustände erzeugen,
- nur die tatsächlich benötigte Funktionalität enthalten.

Neue Funktionen werden nicht automatisch in bestehende Dateien integriert. Zunächst wird geprüft, ob sie fachlich zur vorhandenen Verantwortung gehören.

---

# 9. Bibliotheken und Eigenentwicklung

WissensWerk folgt dem Prinzip:

> Bestehende Funktionalität nutzen, statt sie ohne konkreten Mehrwert neu zu entwickeln.

Für die Navigation bedeutet dies:

```text
MetisMenu
    ↓
allgemeines Menüverhalten

WissensWerk JS
    ↓
projektspezifische Zustandslogik
```

Bootstrap übernimmt seine eigenen technischen JavaScript-Funktionen, insbesondere das Offcanvas-Verhalten.

Das WissensWerk-JavaScript soll diese Funktionen nicht duplizieren.

---

# 10. Einbindung

Die Einbindung von JavaScript erfolgt über die Joomla Web Asset API.

Direkte `<script>`-Einbindungen innerhalb der Template-Dateien werden vermieden.

Die Web Asset API übernimmt insbesondere:

- Registrierung
- Abhängigkeiten
- Lade-Reihenfolge
- Einbindung

Die konkrete Asset-Architektur wird in **AR-006 Web Asset API** beschrieben.

---

# 11. Buildprozess

JavaScript-Quelldateien können für die produktive Auslieferung minifiziert werden.

Im aktuellen Projekt wird hierfür Terser eingesetzt.

Der Build erfolgt über npm:

```powershell
npm.cmd run build:js
```

Die konkrete Einrichtung von Node.js und npm ist in den EV-Dokumenten beschrieben.

Der konkrete JavaScript-Buildprozess ist in **DV-010 JavaScript-Buildprozess** dokumentiert.

Der allgemeine Buildprozess des Templates wird in **AR-012 Build-Prozess** beschrieben.

---

# 12. Qualitätssicherung

Vor der Verwendung eines geänderten JavaScript-Stands wird die Syntax geprüft.

Beispiel:

```powershell
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js"
```

Nach dem Build kann auch die erzeugte Datei geprüft werden:

```powershell
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
```

Zusätzlich erfolgt die funktionale Prüfung im Joomla-Frontend.

Insbesondere bei Navigation und Offcanvas werden geprüft:

- Öffnen und Schließen
- aktive Menüpfade
- Tastaturbedienung
- responsive Verhalten
- Touch-Bedienung
- Zusammenspiel von Header, Sidebar und Offcanvas

---

# 13. Erweiterbarkeit

Neue JavaScript-Funktionen werden grundsätzlich als eigenständige, fachlich zugeordnete Module entwickelt.

Bestehende Module werden nur erweitert, wenn die neue Funktion zu ihrer ursprünglichen Verantwortung gehört.

Bei einer neuen externen Bibliothek ist vor der Integration zu prüfen:

- konkreter funktionaler Mehrwert
- zusätzliche Abhängigkeit
- Wartungsaufwand
- Ladeaufwand
- Lizenzierung
- Zusammenspiel mit Joomla und Bootstrap

---

# 14. Verwandte Architekturdokumente

- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-006 Web Asset API](./ar-006-web-asset-api.md)
- [🏗️ AR-007 Bootstrap-Integration](./ar-007-bootstrap-integration.md)
- [🏗️ AR-008 Asset-Management](./ar-008-asset-management.md)

Entwicklungsdokumente:

- DV-007 Navigation
- DV-009 Entwicklung der Offcanvas-Komponente
- DV-010 JavaScript-Buildprozess

---

# 15. Aktueller Stand

Die JavaScript-Architektur ist für die bisher umgesetzten interaktiven Funktionen etabliert.

Insbesondere ist die Navigation produktiv vorbereitet mit:

- MetisMenu
- projektspezifischem WissensWerk-JavaScript
- getrenntem Verhalten von Header und Sidebar
- Offcanvas-Integration über Bootstrap
- minifiziertem JavaScript-Build
- Einbindung über die Joomla Web Asset API

Weitere JavaScript-Komponenten werden erst bei konkretem funktionalem Bedarf ergänzt.

---

# 16. Ergebnis

Die JavaScript-Architektur des WissensWerk-Templates setzt auf eine klare Trennung zwischen Bibliotheksfunktionalität und projektspezifischer Logik.

Das zentrale Prinzip lautet:

```text
Bibliothek
    → allgemeine technische Funktion

WissensWerk JavaScript
    → projektspezifische Integration

Joomla Web Asset API
    → Registrierung und Einbindung

Terser
    → produktionsorientierte Minifizierung
```

Damit bleibt der JavaScript-Bestand übersichtlich und wartbar, ohne vorhandene Funktionen unnötig nachzubauen.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | JavaScript-Architektur an den aktuellen Entwicklungsstand angepasst; MetisMenu-Integration, Header-/Sidebar-Zustandslogik, Bootstrap-Offcanvas, Buildprozess und aktuelle Dateistruktur ergänzt. |
