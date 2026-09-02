[[[ Inhaltsverzeichnis ]](./../table-of-contents.md)  [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-002 Template-Architektur

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

# 1. Zweck

Dieses Dokument beschreibt die grundlegende Architektur des Joomla-Templates WissensWerk.

Es definiert den strukturellen Aufbau des Templates, die Verantwortlichkeiten seiner zentralen Bestandteile sowie das Zusammenspiel zwischen Joomla, externen bzw. integrierten Frontend-Komponenten und der eigenen WissensWerk-Architektur.

Ziel ist eine modulare, wartbare, update-sichere und langfristig erweiterbare Template-Architektur.

Die Architektur wird anhand der praktischen Entwicklung kontinuierlich überprüft und bei Bedarf nachvollziehbar weiterentwickelt.

---

# 2. Zielsetzung

Die Template-Architektur verfolgt folgende Ziele:

- klare Trennung der Verantwortlichkeiten
- modulare Struktur
- hohe Wartbarkeit
- einfache Erweiterbarkeit
- Nutzung der vorgesehenen Joomla-Mechanismen
- möglichst geringe und klar definierte Abhängigkeiten
- update-sichere Erweiterungen
- Trennung von Struktur, Verhalten und visueller Gestaltung
- Wiederverwendung vorhandener und bewährter Komponenten
- Vermeidung unnötiger Eigenentwicklungen

WissensWerk soll vorhandene Joomla- und Frontend-Funktionalitäten nicht ohne konkreten Grund ersetzen. Eigene Lösungen werden dort eingesetzt, wo eine projektspezifische Integration oder Gestaltung erforderlich ist.

---

# 3. Architekturprinzipien

Für die Entwicklung des Templates gelten folgende Grundsätze:

- Das Template bildet grundsätzlich die Darstellungsschicht der Website.
- Geschäftslogik wird nicht innerhalb des Templates umgesetzt.
- Joomla-Core-Dateien werden nicht verändert.
- Erweiterungen erfolgen über vorgesehene Joomla-Schnittstellen.
- Template-Overrides werden gezielt und nachvollziehbar eingesetzt.
- Wiederverwendbare Bestandteile werden zentral organisiert.
- Änderungen sollen möglichst lokal erfolgen und keine unnötigen Auswirkungen auf andere Bereiche haben.
- Verantwortlichkeiten zwischen Joomla, Bibliotheken und WissensWerk werden klar getrennt.
- Bewährte Bibliotheken werden integriert, statt deren Funktionalität unnötig neu zu implementieren.
- Das Designsystem bleibt von technischen Framework-Defaults möglichst unabhängig.
- Zusätzliche Abstraktionsschichten werden nur eingeführt, wenn sie einen konkreten funktionalen oder wartungstechnischen Vorteil bieten.

Bevorzugt werden Joomla-konforme und allgemein verständliche Lösungen gegenüber unnötig komplexen Eigenentwicklungen.

---

# 4. Grundmodell der Architektur

Die aktuelle Template-Architektur lässt sich vereinfacht wie folgt darstellen:

```text
Joomla
│
├── Seitenstruktur
├── Menüstruktur
├── Module
├── Komponenten
└── Template-System
        │
        ▼
   WissensWerk Template
        │
        ├── Layouts
        ├── Overrides
        ├── Komponentenlayouts
        ├── Modulpositionen
        └── Medien
             │
             ├── SCSS / CSS
             ├── JavaScript
             ├── Bilder
             └── Schriftarten
```

Für interaktive Frontend-Funktionen kommen weitere klar abgegrenzte Ebenen hinzu:

```text
Joomla
    │
    ▼
Menüstruktur / Menümodul
    │
    ▼
MetisMenu
    │
    ├── Collapse-Verhalten
    ├── Untermenüs
    └── Menü-Zustände
    │
    ▼
WissensWerk JavaScript
    │
    ├── aktive Pfade
    ├── Header-Verhalten
    └── Sidebar-Verhalten
    │
    ▼
Bootstrap
    │
    └── Offcanvas-Funktionalität
    │
    ▼
WissensWerk Designsystem
    │
    ├── Layout
    ├── Design Tokens
    ├── SCSS
    └── visuelle Zustände
```

Diese Darstellung beschreibt die aktuellen Verantwortlichkeiten und verhindert eine Vermischung der einzelnen Ebenen.

---

# 5. Verantwortlichkeiten der Systeme

## 5.1 Joomla

Joomla stellt die grundlegende Plattform und die redaktionelle Struktur bereit.

Dazu gehören insbesondere:

- Menüstruktur
- Menüeinträge
- Module
- Komponenten
- Template-System
- Layoutmechanismen
- Template-Konfiguration
- Web Asset API

Joomla bleibt die maßgebliche Quelle für die strukturellen Inhalte der Navigation und der Website.

---

## 5.2 MetisMenu

MetisMenu wird gezielt für die hierarchische Menüinteraktion eingesetzt.

MetisMenu übernimmt insbesondere:

- Öffnen und Schließen von Untermenüs
- Collapse-Zustände
- Verwaltung hierarchischer Menüebenen
- Zustandswechsel der Menüelemente

WissensWerk implementiert diese grundlegende Menüfunktionalität nicht erneut.

Stattdessen stellt das Template eine Integrationsschicht bereit, die das Verhalten von MetisMenu an die Anforderungen des Templates anpasst.

---

## 5.3 Bootstrap

Bootstrap wird als technische Grundlage ausgewählter UI-Funktionen verwendet.

Im aktuellen Entwicklungsstand betrifft dies insbesondere das Offcanvas-Verhalten.

Bootstrap stellt damit die technische Funktionalität bereit, während WissensWerk die konkrete Darstellung und Integration bestimmt.

Bootstrap-Vendor-Dateien werden nicht verändert.

---

## 5.4 WissensWerk

WissensWerk ist für die projektspezifische Integration, Gestaltung und Interaktion verantwortlich.

Dazu gehören insbesondere:

- Template-Layout
- Designsystem
- Design Tokens
- SCSS
- visuelle Zustände
- responsive Gestaltung
- Integration von MetisMenu
- projektspezifische JavaScript-Logik
- Zusammenspiel der einzelnen Layoutbereiche

WissensWerk ersetzt die zugrunde liegenden Systeme nicht, sondern integriert sie in eine konsistente Template-Architektur.

---

# 6. Architekturentwicklung

WissensWerk nutzt bevorzugt die Mechanismen des Joomla-Cores. Eigene Lösungen werden nur dann entwickelt, wenn der Core keine geeignete oder wartbare Möglichkeit bietet.

Dasselbe Prinzip gilt für eingesetzte Frontend-Komponenten:

> Vorhandene Funktionalität wird genutzt und integriert, bevor sie selbst neu entwickelt wird.

Die Architektur wird schrittweise anhand praktischer Anforderungen entwickelt.

Neue Konzepte werden zunächst im praktischen Einsatz bewertet. Zeigt sich, dass eine Architekturentscheidung den Entwicklungsprozess erschwert oder keinen erkennbaren Mehrwert bietet, wird sie überprüft und gegebenenfalls durch eine neue Architekturentscheidung ersetzt.

Änderungen erfolgen nachvollziehbar und werden in der Projektdokumentation festgehalten.

Architekturentscheidungen dienen der Lösung konkreter Anforderungen und sind kein Selbstzweck.

---

# 7. Template-Bestandteile

Das Template besteht aus logisch getrennten Bereichen.

Dazu gehören unter anderem:

- Template-Grundgerüst
- Layouts
- Modulpositionen
- Template-Overrides
- Komponentenlayouts
- SCSS und CSS
- JavaScript
- Bilder und weitere Medien
- Schriftarten
- Sprachdateien
- Konfigurationsdateien
- Build-Konfiguration

Jeder Bereich besitzt eine definierte Aufgabe innerhalb der Template-Architektur.

---

# 8. Verantwortlichkeiten innerhalb des Templates

Die einzelnen Bestandteile übernehmen unterschiedliche Aufgaben.

Beispiele:

- Das Template-Grundgerüst definiert den Seitenaufbau.
- Layouts strukturieren wiederverwendbare Seitenelemente.
- Overrides passen die Joomla-Ausgabe gezielt an.
- Komponentenlayouts beeinflussen die Darstellung von Joomla-Komponenten.
- Modulpositionen definieren die Integrationspunkte für Joomla-Module.
- SCSS steuert die visuelle Darstellung.
- JavaScript steuert projektspezifische Interaktionen.
- Sprachdateien stellen übersetzbare Texte bereit.
- Konfigurationsdateien beschreiben das Template und seine Einstellungen.
- Build-Konfigurationen definieren die Verarbeitung von Entwicklungsdateien.

Die Zuständigkeit einer Datei oder Komponente soll möglichst eindeutig bleiben.

---

# 9. Layoutzonen und Modulpositionen

Layoutzonen verwenden nach Möglichkeit dieselbe Bezeichnung für Modulposition, PHP-Variable und CSS-Klasse.

Dadurch entsteht eine nachvollziehbare Zuordnung zwischen:

```text
Joomla-Modulposition
        │
        ▼
Template-Layout
        │
        ▼
PHP-Struktur
        │
        ▼
CSS-Klasse
```

Zusätzliche Benennungskonzepte werden vermieden, sofern sie keinen funktionalen Mehrwert bieten.

Diese Regel unterstützt die Wartbarkeit und erleichtert die Zuordnung innerhalb des Template-Codes.

---

# 10. Navigation als Beispiel der Architektur

Die Navigation zeigt besonders deutlich die Trennung der Verantwortlichkeiten.

```text
Joomla
│
└── Menüstruktur
      │
      ▼
MetisMenu
│
└── hierarchisches Menüverhalten
      │
      ▼
WissensWerk JavaScript
│
└── projektspezifische Zustandslogik
      │
      ▼
WissensWerk SCSS / Designsystem
│
└── visuelle Darstellung
```

Dabei unterscheiden sich die Zustandsmodelle von Header und Sidebar bewusst.

### Sidebar

Beim Laden der Seite wird der aktive Menüpfad ermittelt und geöffnet.

Der aktive Pfad bleibt für die Orientierung des Benutzers geöffnet.

### Header

Die Navigation startet zunächst geschlossen.

Beim Öffnen eines Hauptmenüzweigs wird geprüft, ob dieser Teil des aktuellen Pfades ist. In diesem Fall kann der darunterliegende aktive Pfad geöffnet werden.

Beim Schließen eines Hauptmenüzweigs werden untergeordnete Zustände zurückgesetzt.

Diese unterschiedliche Zustandslogik ist eine bewusste Architekturentscheidung und keine Abweichung vom gemeinsamen Navigationssystem.

---

# 11. Offcanvas-Architektur

Das Offcanvas nutzt Bootstrap als technische Grundlage und wird durch WissensWerk strukturell und visuell integriert.

Die aktuelle Struktur ist:

```text
Offcanvas
│
├── Header
│   ├── Branding
│   └── Schließen
│
├── Body
│   ├── Navigation       ← scrollbar
│   ├── Suche            ← fix
│   └── CTA              ← fix
│
└── Footer               ← fix
    ├── Logo
    ├── Joomla-Menü
    └── Copyright
```

Der zentrale Navigationsbereich ist vertikal scrollbar.

Header, Such-/CTA-Bereich und Footer bleiben innerhalb des Offcanvas-Layouts fixiert.

Horizontales Scrollen wird vermieden.

Die rechtlichen Links werden über eine Joomla-Modulposition eingebunden und nicht als fest codierte URLs in das Template geschrieben.

---

# 12. SCSS und Designsystem

Die visuelle Gestaltung wird über das WissensWerk-Designsystem gesteuert.

Das Designsystem definiert unter anderem:

- Farben
- Abstände
- Typografie
- Komponentenstile
- Zustände
- responsive Regeln

SCSS dient als Entwicklungsformat für die Stylesheets.

Die konkreten SCSS-Strukturen und Zuständigkeiten werden im Dokument

```text
AR-004 SCSS-Architektur
```

beschrieben.

Bootstrap liefert technische Grundlagen, seine Standardgestaltung wird jedoch nicht zum visuellen Designsystem von WissensWerk.

---

# 13. JavaScript-Architektur

JavaScript wird gezielt für interaktive Funktionen eingesetzt.

Die Architektur unterscheidet zwischen:

- eingebundenen Bibliotheken,
- projektspezifischer Integrationslogik,
- fertigen Build-Artefakten.

Für die Navigation wird MetisMenu verwendet. Das projektspezifische JavaScript ergänzt dessen Verhalten um die für WissensWerk erforderliche Zustandslogik.

JavaScript-Quelldateien bleiben die maßgeblichen Entwicklungsdateien.

Für die produktive Auslieferung können daraus minifizierte Dateien erzeugt werden.

Die konkrete JavaScript-Architektur wird in

```text
AR-005 JavaScript-Architektur
```

beschrieben.

Der Buildprozess wird in

```text
DV-010 JavaScript-Buildprozess
```

dokumentiert.

---

# 14. Asset-Management

Assets werden über die Joomla Web Asset API eingebunden.

Dadurch bleiben Stylesheets und JavaScript-Dateien kontrolliert in das Joomla-Template integriert.

Die Web Asset API bildet die Schnittstelle zwischen den im Template vorhandenen Assets und deren Einbindung in Joomla.

Die konkrete Architektur und Registrierung werden in

```text
AR-006 Web Asset API
```

beschrieben.

---

# 15. Erweiterbarkeit

Die Architektur ist darauf ausgelegt, zukünftige Erweiterungen ohne grundlegende Änderungen der bestehenden Struktur zu ermöglichen.

Neue Layouts, Overrides, Komponentenlayouts oder Medien können ergänzt werden, ohne die Gesamtarchitektur unnötig zu verändern.

Neue externe Bibliotheken sollen nur aufgenommen werden, wenn ein konkreter funktionaler oder technischer Mehrwert besteht.

Insbesondere sollen bestehende Funktionen nicht durch eigene Implementierungen ersetzt werden, wenn eine geeignete, wartbare Bibliothekslösung vorhanden ist.

---

# 16. Abhängigkeiten

Die aktuelle Architektur verwendet mehrere klar abgegrenzte technische Abhängigkeiten.

## Laufzeit / Frontend

- Joomla 5.x
- Bootstrap 5
- MetisMenu
- Joomla Web Asset API
- WissensWerk JavaScript und CSS

## Entwicklungs- und Buildumgebung

- Laragon
- Node.js
- npm
- Sass / SCSS
- Terser
- Visual Studio Code
- Git
- GitHub

Entwicklungs- und Buildwerkzeuge sind keine Laufzeitvoraussetzungen des produktiven Joomla-Systems.

Die Entwicklungsumgebung wird in den EV-Dokumenten und der konkrete Buildprozess in den DV-Dokumenten beschrieben.

---

# 17. Update- und Wartungssicherheit

Die Architektur berücksichtigt die Updatefähigkeit von Joomla.

Dazu gelten insbesondere folgende Regeln:

- Joomla-Core-Dateien werden nicht verändert.
- Bootstrap-Vendor-Dateien werden nicht verändert.
- Bibliotheken werden getrennt von projektspezifischem Code behandelt.
- Template-Anpassungen erfolgen über vorgesehene Template-Mechanismen.
- Buildwerkzeuge werden nicht als Laufzeitabhängigkeit auf dem Produktivsystem benötigt.
- Abhängigkeiten werden nachvollziehbar dokumentiert.
- Änderungen an Architekturentscheidungen werden dokumentiert.

Damit bleibt die Wahrscheinlichkeit gering, dass Updates des Joomla-Cores oder einzelner Bibliotheken direkt zu überschriebenen Eigenanpassungen führen.

---

# 18. Abgrenzung

Dieses Dokument beschreibt die übergeordnete Template-Architektur.

Technische Details werden in separaten Architekturdokumenten beschrieben:

- [🏗️ AR-003 Verzeichnisstruktur](./ar-003-verzeichnisstruktur.md)
- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-006 Web Asset API](./ar-006-web-asset-api.md)
- [🏗️ AR-007 Bootstrap-Integration](./ar-007-bootstrap-integration.md)
- [🏗️ AR-009 Joomla-Overrides](./ar-009-joomla-overrides.md)
- [🏗️ AR-010 Template-Overrides](./ar-010-template-overrides.md)
- [🏗️ AR-011 Layout-Architektur](./ar-011-layout-architektur.md)
- [🏗️ AR-012 Komponentenarchitektur](./ar-012-komponentenarchitektur.md)

Die konkrete Entwicklung einzelner Komponenten wird zusätzlich in den zuständigen DV-Dokumenten festgehalten.

---

# 19. Aktueller Stand

Die grundlegende Template-Architektur ist etabliert und durch die Umsetzung der Navigation und des Offcanvas praktisch validiert.

Besonders präzisiert wurden:

- die klare Trennung zwischen Joomla, MetisMenu, Bootstrap und WissensWerk,
- die Integration von MetisMenu anstelle einer eigenen Menüimplementierung,
- die projektspezifische JavaScript-Zustandslogik,
- die unterschiedliche Zustandslogik von Header und Sidebar,
- die Offcanvas-Layoutstruktur,
- die zentrale Steuerung der visuellen Gestaltung über das WissensWerk-Designsystem,
- die Trennung von Entwicklungswerkzeugen und produktiver Joomla-Laufzeit.

Die Architektur bleibt bewusst offen für spätere Erweiterungen, ohne die bisher festgelegten Verantwortlichkeiten unnötig zu verändern.

---

# 20. Ergebnis

Die Template-Architektur definiert einen klar getrennten Verantwortungsbereich für Joomla, technische Frontend-Komponenten und die projektspezifische WissensWerk-Implementierung.

Das zentrale Architekturprinzip lautet:

```text
Joomla liefert die Struktur.
MetisMenu liefert das Menüverhalten.
Bootstrap liefert ausgewählte technische UI-Funktionen.
WissensWerk integriert und gestaltet.
Das Designsystem bestimmt die visuelle Sprache.
```

Dadurch entsteht keine konkurrierende Eigenimplementierung vorhandener Funktionen. Stattdessen werden bestehende Technologien gezielt eingesetzt und durch projektspezifische Integration ergänzt.

Die Architektur bildet damit die konzeptionelle Grundlage für die weitere Entwicklung des Templates und kann auf dieser Basis schrittweise erweitert werden.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | Architektur an den aktuellen Entwicklungsstand angepasst; Verantwortlichkeiten von Joomla, MetisMenu, Bootstrap und WissensWerk präzisiert; Navigation, Offcanvas, JavaScript, Buildumgebung und Abhängigkeiten aktualisiert. |
