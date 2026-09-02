[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-012 Build-Prozess

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

# 1. Zweck

Dieses Dokument beschreibt den Build-Prozess des WissensWerk-Templates.

Der Build-Prozess verarbeitet Entwicklungsquellen zu auslieferbaren Frontend-Assets.

Aktuell umfasst der dokumentierte Build insbesondere:

- SCSS → CSS
- JavaScript → minifiziertes JavaScript

Damit ist der Build-Prozess nicht mehr ausschließlich auf SCSS beschränkt.

---

# 2. Architekturentscheidung

Der Build-Prozess ist ein Entwicklungs- und Vorbereitungsschritt.

Er findet nicht auf dem produktiven Joomla-System statt.

Grundprinzip:

```text
Entwicklungsquellen
        │
        ▼
Buildwerkzeuge
        │
        ▼
auslieferbare Assets
        │
        ▼
Joomla Web Asset API
        │
        ▼
Frontend
```

Node.js und npm stellen die technische Umgebung für die entsprechenden Buildwerkzeuge bereit.

---

# 3. Ziele

Der Build-Prozess verfolgt folgende Ziele:

- reproduzierbare Erzeugung der Frontend-Assets
- konsistente Ausgabe
- Trennung von Quelle und Auslieferungsdatei
- einfache Wartbarkeit
- nachvollziehbare Buildschritte
- kontrollierte produktive Assets
- Vermeidung manueller Änderungen an erzeugten Dateien

---

# 4. Buildbereiche

## 4.1 SCSS

SCSS dient als Entwicklungsquelle für die Stylesheets.

```text
SCSS
  │
  ▼
Sass
  │
  ▼
CSS
```

Die erzeugten CSS-Dateien werden anschließend über die Joomla Web Asset API eingebunden.

CSS-Ausgabedateien werden nicht manuell bearbeitet.

---

## 4.2 JavaScript

JavaScript wird aus der Quelldatei in ein produktionsgeeignetes minifiziertes Asset überführt.

Aktuell wird Terser verwendet:

```text
menu-metismenu.js
        │
        ▼
      Terser
        │
        ▼
menu-metismenu.min.js
```

Der Build wird über npm ausgeführt:

```powershell
npm.cmd run build:js
```

Die konkrete npm-Konfiguration und die verwendete Node.js-/npm-Umgebung werden in den EV- und DV-Dokumenten beschrieben.

---

# 5. Grundsätze

Für den Build-Prozess gelten folgende Regeln:

- Änderungen erfolgen grundsätzlich an den Quelldateien.
- Erzeugte CSS- und JavaScript-Dateien werden nicht als primäre Quelle bearbeitet.
- Nach Änderungen an einer Quelle wird der erforderliche Build erneut ausgeführt.
- Buildwerkzeuge gehören zur Entwicklungsumgebung.
- Der Build-Prozess benötigt keine Node.js-Laufzeit auf dem Produktivsystem.
- Buildkonfigurationen werden versioniert.
- lokale Abhängigkeiten wie `node_modules/` werden nicht versioniert.
- Vendor-Dateien werden nicht verändert.

---

# 6. Projektkonfiguration

Die npm-Konfiguration befindet sich im Projektstamm:

```text
package.json
package-lock.json
```

Die Konfiguration definiert unter anderem den JavaScript-Build:

```json
{
  "private": true,
  "scripts": {
    "build:js": "terser media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js -c -m -o media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
  }
}
```

Die tatsächlich installierten Node-Pakete werden über `package-lock.json` nachvollziehbar festgehalten.

---

# 7. Qualitätssicherung

Vor dem Build bzw. nach Änderungen wird der JavaScript-Quellcode syntaktisch geprüft:

```powershell
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js"
```

Nach der Minifizierung kann das erzeugte Asset ebenfalls geprüft werden:

```powershell
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
```

Zusätzlich erfolgt ein funktionaler Test im Joomla-Frontend.

Bei der Navigation werden insbesondere geprüft:

- Öffnen und Schließen
- aktive Pfade
- Header-Zustand
- Sidebar-Zustand
- responsive Verhalten
- Offcanvas-Zusammenspiel
- Tastaturbedienung

---

# 8. Build-Workflow

Der aktuelle JavaScript-Workflow lautet:

```text
1. Quelldatei bearbeiten
        ↓
2. Syntax prüfen
        ↓
3. npm-Build ausführen
        ↓
4. erzeugtes Asset prüfen
        ↓
5. Joomla-Frontend testen
        ↓
6. Git-Status prüfen
        ↓
7. Commit erstellen
```

Beispiel:

```powershell
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js"
npm.cmd run build:js
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
git status
```

---

# 9. Git und Build-Artefakte

Die Build-Konfiguration wird versioniert:

```text
package.json
package-lock.json
```

Das lokale Abhängigkeitsverzeichnis wird nicht versioniert:

```text
node_modules/
```

Erzeugte Assets werden entsprechend dem Projektworkflow behandelt.

Wichtig ist, dass verwendete Build-Artefakte aus dem dokumentierten Quellstand reproduzierbar erzeugt werden können.

---

# 10. Trennung von Entwicklungs- und Laufzeitumgebung

Der Build-Prozess ist keine Laufzeitabhängigkeit des Joomla-Systems.

```text
Entwicklung
│
├── Node.js
├── npm
├── Sass
└── Terser
        │
        ▼
fertige Assets
        │
        ▼
Joomla
        │
        └── Browser
```

Auf dem produktiven Joomla-System wird lediglich das fertige Asset benötigt.

Node.js und npm müssen dort nicht installiert sein.

---

# 11. Erweiterbarkeit

Der Build-Prozess kann bei konkretem Bedarf um weitere Schritte erweitert werden.

Mögliche spätere Ergänzungen sind beispielsweise:

- CSS-Minifizierung
- zusätzliche Qualitätsprüfungen
- JavaScript-Linting
- automatisierte Tests
- weitere Build-Skripte

Neue Werkzeuge sollen jedoch nur aufgenommen werden, wenn sie einen konkreten Nutzen bieten.

Der Buildprozess soll nicht unnötig komplex werden.

---

# 12. Abgrenzung

Die einzelnen Dokumente haben unterschiedliche Aufgaben:

| Dokument | Aufgabe |
|---|---|
| AR-004 | SCSS-Architektur |
| AR-008 | Asset-Management |
| AR-012 | übergeordneter Build-Prozess |
| EV-005 | Node.js und npm |
| DV-010 | konkreter JavaScript-Buildprozess |

Dadurch werden technische Details nicht unnötig mehrfach dokumentiert.

---

# 13. Verwandte Architekturdokumente

- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-006 Web Asset API](./ar-006-web-asset-api.md)
- [🏗️ AR-008 Asset-Management](./ar-008-asset-management.md)
- [🏗️ AR-013 Entwicklungsumgebung](./ar-013-entwicklungsumgebung.md)

Entwicklungsdokument:

- DV-010 JavaScript-Buildprozess

---

# 14. Aktueller Stand

Der Build-Prozess ist für die bisher umgesetzten Frontend-Assets etabliert.

Aktuell umfasst er:

- SCSS-Verarbeitung zu CSS
- JavaScript-Minifizierung mit Terser
- npm-basierte Build-Skripte
- Node.js als Entwicklungsumgebung
- Syntaxprüfung von JavaScript
- reproduzierbare Abhängigkeitsverwaltung über `package-lock.json`
- Trennung von Quelldateien und Build-Artefakten

Der JavaScript-Build wurde praktisch umgesetzt und erfolgreich in den Entwicklungsworkflow integriert.

---

# 15. Ergebnis

Der WissensWerk-Build-Prozess erzeugt aus den Entwicklungsquellen die für Joomla benötigten Frontend-Assets.

```text
SCSS ──────► CSS
               │
               ▼
JavaScript ─► Terser ─► min. JavaScript
               │
               ▼
       Joomla Web Asset API
               │
               ▼
            Frontend
```

Der Build-Prozess bleibt dabei von der produktiven Joomla-Laufzeit getrennt.

Damit sind Entwicklung, Asset-Erzeugung und Auslieferung klar voneinander abgegrenzt und reproduzierbar organisiert.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion; Build ausschließlich für SCSS beschrieben. |
| 2.0 | 02.09.2026 | Build-Prozess an den aktuellen Entwicklungsstand angepasst; JavaScript-Build mit Node.js, npm und Terser ergänzt sowie Quelle/Build-Artefakt und Qualitätssicherung dokumentiert. |
