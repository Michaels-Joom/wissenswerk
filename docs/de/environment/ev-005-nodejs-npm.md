[⋮⋮⋮ Inhaltsverzeichnis](../../table-of-contents.md) [🛠️ Entwicklungsübersicht](../development/dv-000-entwicklunguebersicht.md)

---

# EV-005 Node.js und npm

**Dokumenttyp:** Entwicklungsumgebung  
**Projekt:** WissensWerk Template  
**Status:** Abgeschlossen  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## 1. Zielsetzung

Dieses Dokument beschreibt die Verwendung von Node.js und npm innerhalb der Entwicklungsumgebung des WissensWerk-Templates.

Node.js und npm werden nicht als Laufzeitumgebung für Joomla eingesetzt.

Sie dienen ausschließlich als lokale Werkzeugumgebung für Frontend-Entwicklung und Buildprozesse.

---

## 2. Einordnung

Die aktuelle Entwicklungsumgebung ist grundsätzlich wie folgt aufgebaut:

```text
Entwicklungsumgebung
│
├── Laragon
│   ├── Apache
│   ├── PHP
│   ├── MariaDB
│   └── Node.js
│
├── Visual Studio Code
├── Git
├── GitHub
│
└── Frontend-Werkzeuge
    ├── Live Sass Compiler
    ├── Node.js
    ├── npm
    └── Terser
```

Node.js stellt die Laufzeitumgebung für die verwendeten Build-Werkzeuge bereit.

npm verwaltet die projektbezogenen Node-Abhängigkeiten und Build-Skripte.

---

## 3. Verwendete Versionen

Zum dokumentierten Entwicklungsstand:

| Komponente | Version / Stand |
|---|---|
| Node.js | 22.22.0 |
| npm | 10.9.4 |
| Terser | 5.51.2 |
| Joomla | Joomla 5.x |
| Bootstrap | Bootstrap 5 |
| Betriebssystem | Windows |
| Lokale Umgebung | Laragon |

Die konkrete Paketauflösung wird zusätzlich durch `package-lock.json` festgehalten.

---

## 4. Bereitstellung über Laragon

Node.js ist Bestandteil der vorhandenen Laragon-Installation.

Der aktuell verwendete Pfad lautet:

```text
C:\laragonin
odejs
ode-v22
```

Für eine PowerShell-Sitzung kann der Pfad temporär ergänzt werden:

```powershell
$env:Path = "C:\laragonin
odejs
ode-v22;$env:Path"
```

Anschließend können die Versionen geprüft werden:

```powershell
node --version
npm.cmd --version
```

Erwarteter dokumentierter Stand:

```text
v22.22.0
10.9.4
```

Die temporäre `PATH`-Anpassung verändert die Windows-Systemkonfiguration nicht dauerhaft.

---

## 5. npm unter PowerShell

In der verwendeten PowerShell-Umgebung kann `npm.ps1` durch die Execution Policy blockiert werden.

Für WissensWerk wird deshalb keine globale Änderung der PowerShell-Sicherheitsrichtlinie vorgenommen.

Stattdessen wird verwendet:

```powershell
npm.cmd
```

Beispielsweise:

```powershell
npm.cmd install
```

oder:

```powershell
npm.cmd run build:js
```

---

## 6. Projektkonfiguration

Die npm-Konfiguration befindet sich im Projektstamm:

```text
package.json
package-lock.json
```

`package.json` definiert unter anderem:

- Projektstatus
- npm-Skripte
- Entwicklungsabhängigkeiten

Das Projekt ist als privat gekennzeichnet:

```json
"private": true
```

---

## 7. Terser

Terser wird als Entwicklungsabhängigkeit verwendet.

Aufgabe:

```text
JavaScript-Quelldatei
        ↓
Terser
        ↓
minifizierte Produktionsdatei
```

Die Abhängigkeit wird über npm verwaltet.

Installation:

```powershell
npm.cmd install --save-dev terser
```

Die konkrete installierte Version wird über `package-lock.json` nachvollziehbar gehalten.

---

## 8. JavaScript-Build

Das Projekt verfügt über das npm-Script:

```text
build:js
```

Ausgeführt wird es mit:

```powershell
npm.cmd run build:js
```

Dabei wird die MetisMenu-Quelldatei:

```text
media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js
```

in die Produktionsdatei:

```text
media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js
```

überführt.

Der vollständige Buildprozess ist in [DV-010 JavaScript-Buildprozess](../development/dv-010-javascript-buildprozess.md) dokumentiert.

---

## 9. Syntaxprüfung

Die JavaScript-Quelldatei wird mit Node.js geprüft:

```powershell
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js"
```

Anschließend wird auch die erzeugte Produktionsdatei geprüft:

```powershell
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
```

Bei erfolgreicher Prüfung erfolgt keine zusätzliche Ausgabe.

---

## 10. node_modules

Die lokal installierten Node-Pakete befinden sich in:

```text
node_modules/
```

Das Verzeichnis wird nicht versioniert.

In `.gitignore` ist es entsprechend ausgeschlossen:

```text
node_modules/
```

Nach einem neuen Checkout können die Abhängigkeiten über:

```powershell
npm.cmd install
```

wiederhergestellt werden.

---

## 11. Git

Versioniert werden insbesondere:

```text
package.json
package-lock.json
```

Zusätzlich wird die erzeugte Produktionsdatei `menu-metismenu.min.js` versioniert, da sie Bestandteil der Template-Auslieferung ist.

Nicht versioniert wird:

```text
node_modules/
```

---

## 12. Abgrenzung zu SCSS

Node.js/npm und der Live Sass Compiler haben derzeit unterschiedliche Aufgaben.

```text
SCSS
  ↓
Live Sass Compiler
  ↓
CSS

JavaScript
  ↓
Node.js / npm / Terser
  ↓
minifiziertes JavaScript
```

Eine gemeinsame Asset-Pipeline ist derzeit nicht erforderlich.

---

## 13. Verhältnis zu Joomla

Node.js und npm ersetzen weder Joomla noch dessen Asset-System.

Die Aufgaben sind getrennt:

```text
Node.js / npm
    ↓
erzeugen fertige Assets

Joomla
    ↓
bindet fertige Assets ein
```

Die Joomla Web Asset API bleibt für die Einbindung im Template verantwortlich.

Auf dem Produktivsystem wird keine Node.js-/npm-Laufzeit vorausgesetzt.

---

## 14. Entwicklungsworkflow

Bei Änderungen am JavaScript gilt:

```text
JavaScript bearbeiten
        ↓
Build
        ↓
Syntaxprüfung
        ↓
Browser-Test
        ↓
Git-Prüfung
        ↓
Commit
        ↓
Push
```

Konkret:

```powershell
npm.cmd run build:js
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js"
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
git status
```

---

## 15. Architekturprinzip

Node.js und npm sind bewusst auf Entwicklungs- und Buildaufgaben beschränkt.

Dadurch bleibt die produktive Joomla-Installation unabhängig von:

- Node.js
- npm
- Terser
- `node_modules/`

Ausgeliefert werden die fertigen CSS- und JavaScript-Assets.

---

## 16. Erweiterbarkeit

Die npm-Infrastruktur kann bei Bedarf um weitere Werkzeuge ergänzt werden.

Mögliche Kandidaten wären:

- JavaScript-Linting
- zusätzliche Qualitätsprüfungen
- CSS-Minifizierung
- weitere Build-Skripte

Neue Abhängigkeiten werden jedoch nur aufgenommen, wenn ein konkreter Mehrwert besteht.

---

## 17. Aktueller Stand

Die Node.js-/npm-Umgebung ist eingerichtet und funktionsfähig.

Der aktuelle JavaScript-Build umfasst:

```text
Node.js
   ↓
npm
   ↓
Terser
   ↓
menu-metismenu.min.js
```

Die minifizierte Datei wird als Produktions-Asset verwendet.

---

## 18. Ergebnis

Node.js und npm bilden im WissensWerk-Projekt eine klar abgegrenzte lokale Werkzeugumgebung.

Die Kombination aus Laragon, Node.js, npm und Terser ermöglicht einen reproduzierbaren JavaScript-Build, ohne die Joomla-Laufzeit um Node.js-Abhängigkeiten zu erweitern.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 02.09.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | Dokument an den tatsächlich eingerichteten Node.js-/npm-/Terser-Build und die aktuelle Trennung von SCSS- und JavaScript-Workflow angepasst. |
