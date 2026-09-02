[[[ Inhaltsverzeichnis ]](./../table-of-contents.md)  [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-007 Bootstrap-Integration

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

# 1. Zweck

Dieses Dokument beschreibt die Integration von Bootstrap innerhalb des WissensWerk-Templates.

Es definiert die Rolle von Bootstrap innerhalb der Gesamtarchitektur, die Abgrenzung zu Joomla und MetisMenu sowie die Grundsätze für den Einsatz von Bootstrap-Komponenten, Styles und JavaScript.

Ziel ist eine kontrollierte und wartbare Nutzung von Bootstrap, ohne die visuelle Eigenständigkeit des WissensWerk-Designsystems aufzugeben.

Weitere Informationen zur grundlegenden Integrationsentscheidung:

[📐 Bootstrap wird über Tokens gesteuert](../adr/adr-001-bootstrap-integration.md)

---

# 2. Architekturentscheidung

WissensWerk verwendet Bootstrap 5 als technische Grundlage ausgewählter Frontend-Funktionen.

Bootstrap wird nicht als vollständiges visuelles Designsystem des Templates verstanden. Das Framework stellt technische Grundlagen bereit, während das Erscheinungsbild durch das WissensWerk-Designsystem und dessen Design Tokens definiert wird.

Bootstrap-Core-Dateien werden nicht verändert.

Eigene Anpassungen erfolgen ausschließlich über die dafür vorgesehenen WissensWerk-Dateien und die definierte SCSS-Architektur.

Die aktuelle Architektur unterscheidet bewusst zwischen den Verantwortlichkeiten von Joomla, MetisMenu, Bootstrap und WissensWerk.

```text
Joomla
│
├── Seitenstruktur
├── Menüstruktur
├── Module
└── Template-System
        │
        ▼
WissensWerk
│
├── Layout
├── Designsystem
├── SCSS
└── projektspezifisches JavaScript
        │
        ├───────────────┐
        ▼               ▼
   MetisMenu        Bootstrap
   Menüverhalten    technische UI
                   insbesondere Offcanvas
```

---

# 3. Ziele

Die Bootstrap-Integration verfolgt folgende Ziele:

- Nutzung bewährter technischer Komponenten
- Reduzierung unnötiger Eigenentwicklungen
- zuverlässige responsive Grundlagen
- konsistente technische Layoutstrukturen
- klare Trennung zwischen Framework und Template
- einfache Wartbarkeit
- möglichst geringe Abhängigkeit von Bootstrap-internen Implementierungsdetails
- Erleichterung zukünftiger Updates

Bootstrap soll dort eingesetzt werden, wo seine vorhandenen Funktionen einen konkreten technischen Mehrwert bieten.

---

# 4. Grundsätze

Für den Einsatz von Bootstrap gelten folgende Regeln:

- Bootstrap-Core-Dateien werden nicht verändert.
- Eigene Anpassungen erfolgen ausschließlich außerhalb des Framework-Cores.
- Das visuelle Erscheinungsbild wird über das WissensWerk-Designsystem gesteuert.
- Farben, Typografie, Abstände und weitere Designelemente werden über Design Tokens definiert.
- Bootstrap-Standardwerte werden nicht ungeprüft zur visuellen Gestaltung des Templates übernommen.
- Eigene Komponenten können Bootstrap technisch ergänzen, ohne dessen Kernfunktionen unnötig zu duplizieren.
- Bestehende Bootstrap-Funktionen werden genutzt, bevor vergleichbare Eigenentwicklungen vorgenommen werden.
- Bootstrap-interne Implementierungsdetails werden möglichst nicht zur festen Voraussetzung für projektspezifische Funktionen gemacht.

---

# 5. Verantwortlichkeiten

Die Verantwortlichkeiten sind klar getrennt.

## 5.1 Bootstrap übernimmt

Bootstrap stellt insbesondere folgende technische Grundlagen bereit:

- Grid-System
- responsive Layout-Grundlagen
- Utility-Klassen
- ausgewählte UI-Komponenten
- Offcanvas-Funktionalität
- technische JavaScript-Unterstützung für die verwendeten Bootstrap-Komponenten

Bootstrap ist damit eine technische Grundlage, nicht das visuelle Designsystem von WissensWerk.

---

## 5.2 Joomla übernimmt

Joomla bleibt verantwortlich für:

- Menüstruktur
- Menüeinträge
- Modulverwaltung
- Template-System
- Komponenten
- Layoutmechanismen
- Web Asset API

Bootstrap ersetzt keine Joomla-Funktionalität.

---

## 5.3 MetisMenu übernimmt

MetisMenu wird für die hierarchische Menüinteraktion eingesetzt.

Dazu gehören insbesondere:

- Öffnen und Schließen von Untermenüs
- Collapse-Verhalten
- Zustände hierarchischer Menüebenen
- Verwaltung der geöffneten Menübereiche

Die Menülogik wird dadurch nicht als eigene vollständige Implementierung in WissensWerk neu entwickelt.

---

## 5.4 WissensWerk übernimmt

WissensWerk ist verantwortlich für:

- individuelles Design
- Design Tokens
- Corporate Design
- Layout und visuelle Hierarchie
- Template-spezifische Komponenten
- SCSS-Erweiterungen
- responsive Gestaltung auf Template-Ebene
- projektspezifische JavaScript-Integration
- Integration von MetisMenu und Bootstrap in das Template

Damit bleibt die visuelle und gestalterische Kontrolle vollständig beim WissensWerk-Designsystem.

---

# 6. Bootstrap und Navigation

Bootstrap ist nicht die alleinige technische Grundlage der WissensWerk-Navigation.

Die Verantwortlichkeiten sind getrennt:

```text
Joomla
    │
    └── liefert die Menüstruktur
             │
             ▼
         MetisMenu
             │
             └── Menüinteraktion
                     │
                     ▼
              WissensWerk JS
                     │
                     └── projektspezifische Zustandslogik
```

Die Navigation verwendet damit eine vorhandene, spezialisierte Menükomponente anstelle einer vollständigen Eigenimplementierung.

Bootstrap wird für die Navigation nicht als Ersatz für MetisMenu eingesetzt.

---

# 7. Bootstrap und Offcanvas

Das Offcanvas ist die wichtigste aktuell eingesetzte Bootstrap-Komponente innerhalb der Navigation.

Bootstrap stellt die technische Offcanvas-Funktion bereit.

WissensWerk definiert dagegen:

- Aufbau
- Positionierung
- Abstände
- Farben
- Typografie
- Navigation
- Suchbereich
- CTA-Bereich
- Footer
- responsive Ausgestaltung

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

Der Navigationsbereich ist vertikal scrollbar.

Header, Such-/CTA-Bereich und Footer bleiben innerhalb des Offcanvas-Layouts fixiert.

Horizontales Scrollen wird vermieden.

Die rechtlichen Links werden über eine Joomla-Modulposition eingebunden und nicht als feste URLs in Bootstrap oder im Template hinterlegt.

---

# 8. Bootstrap und Designsystem

Bootstrap stellt technische Grundlagen bereit, bestimmt jedoch nicht die visuelle Identität von WissensWerk.

Das WissensWerk-Designsystem definiert insbesondere:

- Farben
- Typografie
- Abstände
- Komponentenstile
- Zustände
- responsive Gestaltung
- visuelle Hierarchie

Design Tokens bilden dabei die zentrale Schnittstelle zwischen Designsystem und SCSS.

Vereinfacht:

```text
WissensWerk Design Tokens
          │
          ▼
       SCSS
          │
          ├── eigene Komponenten
          │
          └── Bootstrap-Integration
                    │
                    ▼
              fertige Darstellung
```

Bootstrap wird damit technisch genutzt, ohne dessen Standardgestaltung zum verbindlichen Erscheinungsbild des Templates zu machen.

---

# 9. SCSS-Integration

Bootstrap wird in die bestehende SCSS-Architektur des Templates integriert.

Eigene Anpassungen werden in WissensWerk-Dateien vorgenommen.

Die Zuständigkeiten der SCSS-Dateien werden in

```text
AR-004 SCSS-Architektur
```

beschrieben.

Grundsätzlich gilt:

```text
Bootstrap
   │
   └── technische Grundlage
            │
            ▼
WissensWerk SCSS
   │
   ├── Design Tokens
   ├── Komponenten
   ├── Layout
   └── responsive Anpassungen
```

Bootstrap-Vendor-Dateien bleiben unverändert.

---

# 10. JavaScript-Integration

Bootstrap-JavaScript wird nur für die tatsächlich verwendeten Bootstrap-Komponenten benötigt.

Im aktuellen Entwicklungsstand betrifft dies insbesondere das Offcanvas.

Die hierarchische Menüinteraktion wird dagegen über MetisMenu realisiert.

Das projektspezifische WissensWerk-JavaScript ergänzt diese Bibliotheken dort, wo template-spezifische Zustandslogik erforderlich ist.

Damit entsteht keine konkurrierende Eigenimplementierung der Bootstrap- oder MetisMenu-Funktionalität.

Die konkrete JavaScript-Architektur wird in

```text
AR-005 JavaScript-Architektur
```

beschrieben.

Der JavaScript-Buildprozess wird in

```text
DV-010 JavaScript-Buildprozess
```

dokumentiert.

---

# 11. Asset-Einbindung

Bootstrap und die übrigen Frontend-Assets werden über die Joomla Web Asset API eingebunden.

Dadurch bleiben die Abhängigkeiten und Ladebeziehungen innerhalb des Joomla-Asset-Systems nachvollziehbar.

Die konkrete technische Umsetzung wird in

```text
AR-006 Web Asset API
```

beschrieben.

---

# 12. Responsive Verhalten

Bootstrap stellt die technische Grundlage für das responsive Grid und weitere responsive Mechanismen bereit.

WissensWerk ergänzt diese Grundlagen durch eigene Layout- und Komponentenregeln.

Dabei wird nicht versucht, Bootstrap vollständig zu ersetzen.

Stattdessen werden vorhandene Bootstrap-Funktionen genutzt und dort ergänzt, wo die Anforderungen des WissensWerk-Designsystems darüber hinausgehen.

---

# 13. Barrierefreiheit

Die Verwendung von Bootstrap ersetzt nicht die Verantwortung des Templates für eine barrierearme Ausgabe.

Bei der Integration werden insbesondere berücksichtigt:

- semantische HTML-Strukturen
- Tastaturbedienbarkeit
- sichtbare Fokuszustände
- ausreichende Kontraste
- verständliche Beschriftungen
- sinnvolle ARIA-Zustände
- Touch-Bedienbarkeit
- keine ausschließlich Hover-abhängigen Funktionen

Bootstrap-Komponenten werden nicht ungeprüft übernommen, sondern in den Kontext des WissensWerk-Designsystems integriert.

---

# 14. Update- und Wartungssicherheit

Bootstrap-Core-Dateien werden nicht verändert.

Eigene Anpassungen liegen ausschließlich in den WissensWerk-Dateien.

Dadurch können Bootstrap-Updates grundsätzlich getrennt von den projektspezifischen Anpassungen betrachtet werden.

Eine vollständige Kompatibilität mit jeder zukünftigen Bootstrap-Version wird nicht garantiert.

Stattdessen wird die Abhängigkeit von Bootstrap-internen Implementierungsdetails möglichst gering gehalten.

Bei einem Bootstrap-Update sind insbesondere verwendete Komponenten, Klassen, JavaScript-Schnittstellen und SCSS-Abhängigkeiten zu prüfen.

---

# 15. Abgrenzung zu anderen Technologien

Die Technologien übernehmen bewusst unterschiedliche Aufgaben:

| Technologie | Hauptaufgabe |
|------------|--------------|
| Joomla | Plattform, Struktur, Inhalte, Module, Menüsystem |
| Bootstrap | Grid, responsive Grundlagen, Offcanvas und ausgewählte UI-Funktionen |
| MetisMenu | hierarchische Menüinteraktion |
| WissensWerk SCSS | visuelle Gestaltung und Komponenten |
| WissensWerk JavaScript | projektspezifische Interaktions- und Zustandslogik |
| Design Tokens | zentrale Designwerte |
| Joomla Web Asset API | Asset-Registrierung und Einbindung |
| Node.js / npm / Terser | Entwicklungs- und Buildumgebung |

Diese Trennung verhindert, dass einzelne Systeme Aufgaben übernehmen, für die sie nicht vorgesehen sind.

---

# 16. Verwandte Architekturdokumente

- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-006 Web Asset API](./ar-006-web-asset-api.md)
- [🏗️ AR-008 Asset-Management](./ar-008-asset-management.md)

Weitere relevante Entwicklungsdokumente:

- DV-007 Navigation
- DV-009 Entwicklung der Offcanvas-Komponente
- DV-010 JavaScript-Buildprozess

---

# 17. Aktueller Stand

Die Bootstrap-Integration ist im aktuellen Entwicklungsstand etabliert.

Bootstrap wird gezielt für technische Grundlagen eingesetzt.

Insbesondere:

- Bootstrap 5 bildet die technische Basis des Grid-Systems.
- Bootstrap unterstützt das responsive Layout.
- Bootstrap stellt das technische Offcanvas-Verhalten bereit.
- MetisMenu übernimmt die hierarchische Menüinteraktion.
- WissensWerk steuert Layout und visuelle Gestaltung.
- Design Tokens bilden die Grundlage der visuellen Anpassungen.
- Bootstrap-Core-Dateien werden nicht verändert.
- Die Einbindung erfolgt über die Joomla Web Asset API.

Die praktische Umsetzung der Navigation und des Offcanvas bestätigt diese Aufgabentrennung.

---

# 18. Ergebnis

Bootstrap ist innerhalb von WissensWerk eine technische Grundlage, aber nicht das visuelle oder architektonische Zentrum des Templates.

Die aktuelle Verantwortungsverteilung lautet:

```text
Joomla
    → Struktur und Inhalte

MetisMenu
    → hierarchisches Menüverhalten

Bootstrap
    → technische UI-Funktionen, insbesondere Offcanvas

WissensWerk
    → Integration, Layout und projektspezifische Interaktion

Designsystem
    → visuelle Identität
```

Diese Trennung ermöglicht es, bewährte Framework-Funktionen zu verwenden, ohne die Eigenständigkeit des WissensWerk-Templates aufzugeben.

Gleichzeitig werden unnötige Eigenentwicklungen vermieden und die Wartbarkeit der Gesamtarchitektur verbessert.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | Bootstrap-Integration an den aktuellen Entwicklungsstand angepasst; Verantwortlichkeiten von Joomla, Bootstrap, MetisMenu und WissensWerk präzisiert; Navigation, Offcanvas, Designsystem, JavaScript und Abhängigkeiten aktualisiert. |
