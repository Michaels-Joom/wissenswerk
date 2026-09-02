[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [💻 Entwicklungsumgebung – Übersicht](./ev-000-entwicklungsumgebung-uebersicht.md)

---

# EV-002 Visual Studio Code

**Dokumenttyp:** Entwicklungsumgebung  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## 1. Ziel

Dieses Dokument beschreibt den Einsatz von Visual Studio Code als zentralem Entwicklungswerkzeug für WissensWerk.

Visual Studio Code dient als gemeinsamer Arbeitsplatz für Quellcode, Konfiguration, SCSS, JavaScript und Projektdokumentation.

---

## 2. Unterstützte Technologien

Im Projekt werden unter anderem folgende Dateiformate und Technologien bearbeitet:

- PHP
- HTML
- SCSS
- CSS
- JavaScript
- JSON
- XML
- Markdown

Visual Studio Code bündelt die Bearbeitung dieser Dateien in einer gemeinsamen Entwicklungsumgebung.

---

## 3. Architekturentscheidung

Visual Studio Code wird als zentraler Editor eingesetzt.

Ausschlaggebend sind insbesondere:

| Kriterium | Bewertung |
|---|---|
| Git-Integration | ✔ |
| Integriertes Terminal | ✔ |
| Erweiterbarkeit | ✔ |
| Markdown-Unterstützung | ✔ |
| PHP-Unterstützung | ✔ |
| SCSS-Unterstützung | ✔ |
| JavaScript-Unterstützung | ✔ |
| Windows-Unterstützung | ✔ |

---

## 4. Projekt als Arbeitsbereich

Das vollständige WissensWerk-Projekt wird als Arbeitsbereich geöffnet.

Beispiel:

```text
wissenswerk/
├── administrator/
├── media/
├── templates/
├── docs/
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

Dadurch stehen Suche, Git, Terminal und Editorfunktionen projektweit zur Verfügung.

---

## 5. Integriertes Terminal

Das integrierte Terminal ist ein wichtiger Bestandteil des Entwicklungsworkflows.

Es wird insbesondere für folgende Aufgaben verwendet:

```text
Git
npm
Node.js
Build
Syntaxprüfung
```

Unter Windows wird für npm aufgrund der lokalen PowerShell-Konfiguration die Kommandoform verwendet:

```powershell
npm.cmd
```

Beispiel:

```powershell
npm.cmd run build:js
```

Die Hintergründe sind in [EV-005 Node.js und npm](./ev-005-nodejs-npm.md) beschrieben.

---

## 6. Verwendete Erweiterungen

Die Erweiterungen werden bewusst auf tatsächlich benötigte Funktionen beschränkt.

| Erweiterung / Werkzeug | Zweck |
|---|---|
| PHP Intelephense | PHP-Unterstützung |
| GitLens | zusätzliche Git-Funktionen |
| EditorConfig | einheitliche Formatierung, sofern im Projekt verwendet |
| Markdown All in One | Markdown-Unterstützung |
| XML Tools | XML-Bearbeitung |
| Live Sass Compiler | SCSS-Kompilierung |

> [!NOTE]
> Erweiterungen sind Entwicklungswerkzeuge und keine Laufzeitabhängigkeiten des Joomla-Templates.

---

## 7. SCSS-Workflow

Der Live Sass Compiler wird während der lokalen Entwicklung verwendet.

```text
SCSS bearbeiten
      ↓
Datei speichern
      ↓
Live Sass Compiler
      ↓
CSS aktualisieren
      ↓
Browser testen
```

Die detaillierte SCSS-Konfiguration ist in der Entwicklungsdokumentation beschrieben.

---

## 8. JavaScript-Workflow

JavaScript wird über Node.js, npm und Terser gebaut.

```text
menu-metismenu.js
      ↓
npm.cmd run build:js
      ↓
Terser
      ↓
menu-metismenu.min.js
```

Syntaxprüfungen werden über Node.js durchgeführt.

---

## 9. Git-Integration

Visual Studio Code stellt eine grafische Git-Integration bereit.

Für den WissensWerk-Workflow bleibt die Kontrolle über `git status`, `git diff`, Commit und Push ein zentraler Bestandteil.

Das integrierte Terminal ermöglicht dabei die direkte Verwendung der Git-Befehle.

---

## 10. Dokumentation

Die Projektdokumentation wird ebenfalls in Visual Studio Code erstellt und gepflegt.

Markdown-Dateien werden lokal bearbeitet, geprüft und gemeinsam mit dem Projekt versioniert.

---

## 11. Best Practices

- Das gesamte Projekt als Arbeitsbereich öffnen.
- Nur benötigte Erweiterungen installieren.
- Erweiterungen regelmäßig auf Aktualität prüfen.
- Formatierung konsistent halten.
- Git-Status regelmäßig kontrollieren.
- Buildprozesse über die definierten Projektbefehle ausführen.
- Dokumentation gemeinsam mit dem Quellcode pflegen.

---

## 12. Bezugsquellen

- [Visual Studio Code](https://code.visualstudio.com/)
- [Visual Studio Code Dokumentation](https://code.visualstudio.com/docs)
- [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/)

---

## 13. Ergebnis

Visual Studio Code bildet den zentralen Arbeitsplatz für die Entwicklung von WissensWerk.

Die Kombination aus Editor, integriertem Terminal, Git-Integration und projektspezifischen Erweiterungen ermöglicht die Bearbeitung aller wesentlichen Bestandteile des Templates innerhalb einer gemeinsamen Entwicklungsumgebung.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliche Dokumentation erstellt. |
| 2.0 | 02.09.2026 | Dokumentnummer korrigiert, JavaScript-Build und aktueller Terminal-/SCSS-Workflow ergänzt. |
