[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md)

---

# EV-000 Entwicklungsumgebung – Übersicht

**Dokumenttyp:** Entwicklungsumgebung  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Die Qualität einer Software entsteht nicht erst durch den geschriebenen Code, sondern beginnt bereits bei der Wahl und Konfiguration der Entwicklungswerkzeuge.

Die Entwicklungsumgebung von WissensWerk wurde so aufgebaut, dass die einzelnen Werkzeuge klar abgegrenzte Aufgaben übernehmen und gemeinsam einen nachvollziehbaren, wartbaren und reproduzierbaren Entwicklungsprozess bilden.

Die Entwicklungsumgebung umfasst derzeit:

- Laragon als lokale Webserver- und PHP-Umgebung
- Visual Studio Code als zentralen Editor
- Git als lokale Versionsverwaltung
- GitHub als Remote-Repository
- Node.js und npm als Entwicklungs- und Buildumgebung für JavaScript
- Live Sass Compiler für die laufende SCSS-Entwicklung
- Terser für die JavaScript-Minifizierung

---

## Architektur der Entwicklungsumgebung

```text
Lokale Entwicklungsumgebung
│
├── Laragon
│   ├── Apache
│   ├── PHP
│   ├── MariaDB
│   └── Node.js
│
├── Visual Studio Code
│   ├── Quellcode
│   ├── SCSS
│   ├── JavaScript
│   └── Dokumentation
│
├── Git
│   └── lokale Versionsverwaltung
│
├── Frontend-Werkzeuge
│   ├── Live Sass Compiler
│   ├── npm
│   └── Terser
│
└── GitHub
    └── Remote-Repository
```

Die Werkzeuge ersetzen einander nicht, sondern bilden eine abgestimmte Werkzeugkette.

---

## Dokumente

- [💻 EV-001 Laragon](./ev-001-laragon.md)
- [💻 EV-002 Visual Studio Code](./ev-002-visual-studio-code.md)
- [💻 EV-003 Git](./ev-003-git.md)
- [💻 EV-004 GitHub](./ev-004-git-hub.md)
- [💻 EV-005 Node.js und npm](./ev-005-nodejs-npm.md)

---

## Verantwortlichkeiten

| Werkzeug | Aufgabe |
|---|---|
| Laragon | lokale Webserver-, PHP- und Datenbankumgebung |
| Visual Studio Code | Entwicklung und Dokumentation |
| Live Sass Compiler | laufende SCSS-Kompilierung während der Entwicklung |
| Node.js | Laufzeitumgebung für Build-Werkzeuge |
| npm | Verwaltung der Node-Abhängigkeiten und Build-Skripte |
| Terser | Minifizierung von JavaScript |
| Git | lokale Versionsverwaltung |
| GitHub | Remote-Repository und zentrale Sicherung |

---

## Entwicklungsprinzip

Die Entwicklungsumgebung folgt grundsätzlich diesem Ablauf:

```text
Entwicklung
    ↓
lokaler Test
    ↓
Build / Qualitätsprüfung
    ↓
Git Commit
    ↓
Git Push
    ↓
GitHub
```

Die produktive Joomla-Umgebung benötigt die Node.js-/npm-Werkzeuge nicht. Sie erhält die bereits erzeugten Assets.

---

## Reproduzierbarkeit

Projektbezogene Konfigurationen werden möglichst im Repository dokumentiert oder versioniert.

Dazu gehören insbesondere:

- `.vscode/`
- `.gitignore`
- `package.json`
- `package-lock.json`
- Dokumentation
- Build-Konfigurationen

Lokale Abhängigkeiten wie `node_modules/` werden dagegen nicht versioniert.

---

## Grundsatz

Jedes Werkzeug soll nur dort eingesetzt werden, wo es einen konkreten technischen Nutzen bietet.

Dadurch wird die Entwicklungsumgebung bewusst schlank gehalten und unnötige Abhängigkeiten werden vermieden.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliche Übersicht erstellt. |
| 2.0 | 02.09.2026 | Entwicklungsumgebung an den aktuellen Stand mit Node.js, npm, Terser und dem bestehenden SCSS-Workflow angepasst. |
