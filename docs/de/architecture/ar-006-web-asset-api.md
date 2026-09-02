[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-006 Web Asset API

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

# 1. Zweck

Dieses Dokument beschreibt die Verwendung der Joomla Web Asset API innerhalb des WissensWerk-Templates.

Ziel ist eine zentrale, standardkonforme und wartbare Verwaltung der CSS- und JavaScript-Ressourcen sowie ihrer Abhängigkeiten und Lade-Reihenfolgen.

Die Web Asset API bildet die Schnittstelle zwischen den im Template vorhandenen Assets und deren Einbindung in Joomla.

---

# 2. Architekturentscheidung

Das Template verwendet die Joomla Web Asset API als zentrale Schnittstelle für die Einbindung eigener CSS- und JavaScript-Assets.

Direkte `<link>`- und `<script>`-Einbindungen innerhalb der Template-Dateien werden vermieden.

Die Asset-Abhängigkeiten werden dort definiert, wo sie für die korrekte Funktion erforderlich sind.

Damit bleibt die Asset-Verwaltung von der konkreten HTML-Struktur einzelner Layoutdateien getrennt.

---

# 3. Ziele

Die Nutzung der Web Asset API verfolgt folgende Ziele:

- Einhaltung der Joomla-Standards
- zentrale Asset-Verwaltung
- nachvollziehbare Abhängigkeiten
- kontrollierte Lade-Reihenfolge
- bessere Wartbarkeit
- klare Trennung zwischen Template-Code und Asset-Einbindung
- kontrollierte Einbindung externer bzw. integrierter Bibliotheken
- bessere Grundlage für zukünftige Anpassungen

---

# 4. Grundsätze

Für die Einbindung von Assets gelten folgende Regeln:

- Assets werden zentral registriert.
- CSS- und JavaScript-Dateien werden über die Web Asset API eingebunden.
- Abhängigkeiten werden über die Asset-Konfiguration definiert.
- Template-Dateien enthalten keine direkten `<link>`- oder `<script>`-Einbindungen für die vom Template verwalteten Assets.
- Assets werden nur geladen, wenn sie für den jeweiligen Funktionsbereich erforderlich sind.
- Vendor-Dateien werden nicht verändert.
- Build-Artefakte werden als solche behandelt und nicht mit Quelldateien vermischt.

---

# 5. Verantwortlichkeiten

Die Web Asset API übernimmt insbesondere:

- Registrierung von Assets
- Verwaltung von Abhängigkeiten
- Steuerung der Lade-Reihenfolge
- Einbindung der Ressourcen in Joomla
- zentrale technische Verwaltung der Asset-Beziehungen

Die Web Asset API übernimmt nicht:

- die visuelle Gestaltung
- die fachliche JavaScript-Logik
- den SCSS-Build
- die JavaScript-Minifizierung

Diese Aufgaben liegen bei den jeweils zuständigen Projektbestandteilen.

---

# 6. Asset-Abhängigkeiten

Die aktuelle Frontend-Architektur besitzt mehrere technische Abhängigkeiten.

Vereinfacht:

```text
Joomla
│
└── Web Asset API
      │
      ├── WissensWerk CSS
      │
      └── WissensWerk JavaScript
             │
             ├── Bootstrap
             │      └── Offcanvas
             │
             └── MetisMenu
                    └── Navigation
```

Die konkrete Reihenfolge und die benötigten Abhängigkeiten werden über die Web Asset API abgebildet.

Dadurch wird vermieden, dass einzelne Template-Dateien selbst für die Reihenfolge der `<script>`- und `<link>`-Elemente verantwortlich sind.

---

# 7. JavaScript

Die Navigation verwendet MetisMenu für die hierarchische Menüinteraktion.

Das projektspezifische JavaScript ergänzt MetisMenu um die Anforderungen des WissensWerk-Templates.

Die maßgeblichen Dateien befinden sich aktuell unter:

```text
media/templates/site/wissenswerk/js/mod_menu/
```

mit:

```text
menu-metismenu.js
menu-metismenu.min.js
```

Die Quelldatei wird entwickelt und anschließend für die produktive Verwendung minifiziert.

Bootstrap-JavaScript wird für die tatsächlich verwendeten Bootstrap-Komponenten eingebunden, insbesondere für das Offcanvas.

---

# 8. CSS und SCSS

SCSS dient als Entwicklungsformat des WissensWerk-Templates.

Die daraus erzeugten CSS-Dateien werden als fertige Assets über die Web Asset API eingebunden.

Die Web Asset API übernimmt dabei die Einbindung, nicht die Kompilierung der SCSS-Dateien.

Die konkrete SCSS-Organisation wird in **AR-004 SCSS-Architektur** beschrieben.

---

# 9. Registrierung und Einbindung

Die Asset-Definitionen gehören zur Template-Architektur und werden zentral gepflegt.

Einzelne Layoutdateien sollen nicht selbständig Assets über HTML einbinden.

Das Prinzip lautet:

```text
Asset-Definition
      │
      ▼
Joomla Web Asset API
      │
      ▼
Layout / Frontend
```

Dadurch bleibt die Asset-Einbindung unabhängig davon, in welchem Template-Layout das Asset verwendet wird.

---

# 10. Abhängigkeiten und Reihenfolge

Abhängigkeiten werden explizit definiert, wenn ein Asset auf ein anderes Asset angewiesen ist.

Beispielhaft:

```text
MetisMenu-Integration
        │
        └── benötigt MetisMenu

Bootstrap-Komponente
        │
        └── benötigt Bootstrap-JavaScript
```

Die genaue Definition der Asset-Namen und Abhängigkeiten ist Bestandteil der Implementierung und sollte nicht in mehreren Template-Dateien dupliziert werden.

---

# 11. Vendor-Code

Vendor-Code wird grundsätzlich nicht verändert.

Das betrifft insbesondere:

- Bootstrap
- MetisMenu

Projektspezifische Anpassungen erfolgen in den WissensWerk-Dateien.

Damit können Bibliotheksupdates getrennt von den eigenen Anpassungen geprüft werden.

---

# 12. Buildprozess

Die Web Asset API arbeitet mit fertigen CSS- und JavaScript-Assets.

Die Erzeugung dieser Dateien ist ein vorgelagerter Entwicklungsschritt.

Für JavaScript wird aktuell Terser eingesetzt:

```text
menu-metismenu.js
        │
        ▼
      Terser
        │
        ▼
menu-metismenu.min.js
        │
        ▼
Web Asset API
```

Der konkrete Buildprozess wird in **DV-010 JavaScript-Buildprozess** beschrieben.

Der allgemeine Buildprozess wird in **AR-012 Build-Prozess** beschrieben.

---

# 13. Wartbarkeit

Die zentrale Asset-Verwaltung reduziert Abhängigkeiten zwischen Layoutdateien und Assets.

Änderungen an einem Asset können damit an einer definierten Stelle nachvollzogen werden.

Bei Änderungen sind insbesondere zu prüfen:

- Abhängigkeiten
- Lade-Reihenfolge
- Verwendung im Frontend
- JavaScript-Konsole
- responsive Verhalten
- mögliche Auswirkungen auf andere Komponenten

---

# 14. Performance

Die Web Asset API bildet die technische Grundlage für eine kontrollierte Einbindung der benötigten Ressourcen.

Für die Performance gelten zusätzlich:

- nur benötigte Assets laden
- unnötige Bibliotheken vermeiden
- Abhängigkeiten nicht doppelt einbinden
- produktionsgeeignete JavaScript-Dateien verwenden
- CSS und JavaScript sinnvoll strukturieren

Die Web Asset API ersetzt dabei keine Optimierungsstrategie, sondern stellt die technische Einbindung dafür bereit.

---

# 15. Abgrenzung

Die Verantwortlichkeiten sind bewusst getrennt:

| Aufgabe | Verantwortlich |
|---|---|
| Asset-Registrierung | Joomla Web Asset API |
| Abhängigkeiten | Joomla Web Asset API |
| HTML-Struktur | Template / Layout |
| visuelle Gestaltung | WissensWerk SCSS / Designsystem |
| Menüinteraktion | MetisMenu |
| Offcanvas-Funktion | Bootstrap |
| projektspezifische JS-Logik | WissensWerk JavaScript |
| JavaScript-Minifizierung | Terser |
| SCSS-Kompilierung | Sass / Buildumgebung |

---

# 16. Verwandte Architekturdokumente

- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-007 Bootstrap-Integration](./ar-007-bootstrap-integration.md)
- [🏗️ AR-008 Asset-Management](./ar-008-asset-management.md)

---

# 17. Aktueller Stand

Die Joomla Web Asset API ist als zentrale Asset-Schnittstelle etabliert.

Der aktuelle Stand umfasst insbesondere:

- zentrale Einbindung der Template-Assets
- definierte Abhängigkeiten
- Bootstrap-Integration
- MetisMenu-Integration
- Einbindung der WissensWerk-JavaScript-Dateien
- Einbindung der erzeugten CSS-Dateien
- Trennung von Asset-Verwaltung und Layoutstruktur
- keine direkte Einbindung der vom Template verwalteten Assets über `<script>` oder `<link>`

---

# 18. Ergebnis

Die Joomla Web Asset API bildet die zentrale technische Schnittstelle zwischen den WissensWerk-Assets und Joomla.

Sie trennt die Asset-Verwaltung von den Layoutdateien und ermöglicht eine nachvollziehbare Definition von Abhängigkeiten und Lade-Reihenfolgen.

Die aktuelle Architektur unterstützt damit die klare Trennung:

```text
SCSS / JavaScript
      │
      ▼
Buildprozess
      │
      ▼
fertige Assets
      │
      ▼
Joomla Web Asset API
      │
      ▼
Frontend
```

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | Web-Asset-Architektur an den aktuellen Entwicklungsstand angepasst; MetisMenu, Bootstrap, Build-Artefakte und Verantwortlichkeiten präzisiert. |
