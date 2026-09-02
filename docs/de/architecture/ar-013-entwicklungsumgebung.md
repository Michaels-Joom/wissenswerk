[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-013 Entwicklungsumgebung

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

## 1. Zweck

Dieses Dokument beschreibt die Entwicklungsumgebung des WissensWerk-Projekts.

Sie umfasst die lokale Joomla-Umgebung, Entwicklungswerkzeuge, Versionsverwaltung und die Werkzeuge für die Frontend-Buildprozesse.

Ziel ist eine nachvollziehbare und reproduzierbare Entwicklungsumgebung.

## 2. Architekturentscheidung

Die Entwicklung erfolgt lokal und wird über Git versioniert.

Laragon stellt die lokale Webserver- und Entwicklungsumgebung bereit.

Visual Studio Code dient als Entwicklungsumgebung.

Git und GitHub bilden die Grundlage der Versionsverwaltung.

Für Frontend-Buildprozesse werden Node.js, npm, Sass und Terser eingesetzt.

## 3. Bestandteile

| Werkzeug | Aufgabe |
|---|---|
| Laragon | lokale Entwicklungsumgebung |
| Joomla 5.x | Zielplattform |
| Visual Studio Code | Quellcodebearbeitung |
| Git | lokale Versionsverwaltung |
| GitHub | zentrales Repository |
| Node.js | JavaScript-/Build-Laufzeit |
| npm | Verwaltung der Build-Abhängigkeiten und Skripte |
| Sass | SCSS-Kompilierung |
| Terser | JavaScript-Minifizierung |

## 4. Aktueller Node.js-/npm-Stand

In der verwendeten Laragon-Umgebung steht aktuell zur Verfügung:

```text
Node.js  v22.22.0
npm      10.9.4
```

Terser wird als Entwicklungsabhängigkeit über npm verwaltet.

Die konkreten Projektabhängigkeiten werden über:

```text
package.json
package-lock.json
```

festgehalten.

## 5. Lokale Entwicklung

Das Joomla-Projekt wird lokal innerhalb von Laragon betrieben.

Die Entwicklungsumgebung ermöglicht:

- direkte Frontend-Tests
- SCSS-Entwicklung
- JavaScript-Entwicklung
- Buildausführung
- Git-Versionierung
- reproduzierbare lokale Tests

## 6. Buildwerkzeuge

Der Buildprozess verwendet Node.js/npm für die JavaScript-Werkzeuge.

Beispiel:

```powershell
npm.cmd run build:js
```

Für die JavaScript-Minifizierung wird Terser eingesetzt.

Die konkrete Buildarchitektur ist in **AR-012 Build-Prozess** und **DV-010 JavaScript-Buildprozess** dokumentiert.

## 7. PowerShell und npm

In der aktuellen Windows-/Laragon-Umgebung kann die PowerShell-Ausführungsrichtlinie die Verwendung von `npm.ps1` beziehungsweise `npx.ps1` verhindern.

Der dokumentierte Projektworkflow verwendet deshalb:

```text
npm.cmd
npx.cmd
```

anstelle einer Änderung der globalen PowerShell-Ausführungsrichtlinie.

Dies ist eine lokale Entwicklungsbesonderheit und keine Laufzeitabhängigkeit von Joomla.

## 8. Versionsverwaltung

Git wird für alle relevanten Projektänderungen verwendet.

GitHub dient als zentrales Repository.

Versioniert werden insbesondere:

- Template-Code
- SCSS-Quellen
- JavaScript-Quellen
- relevante Build-Artefakte
- `package.json`
- `package-lock.json`
- Projektdokumentation

Das lokale Abhängigkeitsverzeichnis wird nicht versioniert:

```text
node_modules/
```

## 9. Entwicklungsprinzipien

Die Entwicklungsumgebung unterstützt die allgemeinen Projektgrundsätze:

- keine Änderungen am Joomla-Core
- keine Änderungen an Vendor-Dateien
- Entwicklung an Quellcode statt an erzeugten Dateien
- Build nach Änderungen an den entsprechenden Quellen
- Git-Versionierung
- funktionale Prüfung im Joomla-Frontend
- nachvollziehbare Dokumentation von Architekturentscheidungen

## 10. Verwandte Dokumente

- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-012 Build-Prozess](./ar-012-build-prozess.md)
- [🏗️ AR-014 Deployment](./ar-014-deployment.md)

Entwicklungsdokument:

- EV-001 Laragon
- EV-002 Visual Studio Code
- EV-003 Git
- EV-004 GitHub
- EV-005 Node.js und npm
- DV-010 JavaScript-Buildprozess

## 11. Ergebnis

Die Entwicklungsumgebung verbindet Joomla, Laragon, VS Code, Git/GitHub und die Frontend-Buildwerkzeuge zu einem nachvollziehbaren Entwicklungsprozess.

Die Umgebung ist damit nicht mehr ausschließlich auf SCSS ausgerichtet, sondern unterstützt auch den inzwischen etablierten JavaScript-Build.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | Node.js, npm, Terser, aktueller Buildworkflow und Git-/Projektpraxis ergänzt. |
