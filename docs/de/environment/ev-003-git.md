[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [💻 Entwicklungsumgebung – Übersicht](./ev-000-entwicklungsumgebung-uebersicht.md)

---

# EV-003 Git

**Dokumenttyp:** Entwicklungsumgebung  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## 1. Ziel

Dieses Dokument beschreibt den Einsatz von Git als lokales Versionsverwaltungssystem im Projekt WissensWerk.

Git stellt die Grundlage für eine nachvollziehbare Historie von Quellcode, Konfiguration und Dokumentation dar.

---

## 2. Architekturentscheidung

Git wird lokal auf dem Entwicklungsrechner eingesetzt.

Die Auswahl erfolgt insbesondere aufgrund der:

- verteilten Versionsverwaltung
- lokalen Arbeitsweise
- Integration mit Visual Studio Code
- Integration mit GitHub
- Möglichkeit zur Wiederherstellung früherer Stände

Git und GitHub erfüllen dabei unterschiedliche Aufgaben:

```text
Git
→ lokale Versionsverwaltung

GitHub
→ Remote-Repository
```

---

## 3. Installation

Nach der Installation kann die Version geprüft werden:

```bash
git --version
```

Die einmalige Benutzerkonfiguration erfolgt beispielsweise über:

```bash
git config --global user.name "Vorname Nachname"
git config --global user.email "mail@example.de"
```

Die tatsächlichen Zugangsdaten werden nicht in der Projektdokumentation gespeichert.

---

## 4. Repository

Das WissensWerk-Projekt wird als Git-Repository verwaltet.

Initialisierung eines neuen Projekts:

```bash
git init
```

Im bereits eingerichteten Projekt wird das bestehende Repository weiterverwendet.

---

## 5. Versionierte Projektbestandteile

Versioniert werden grundsätzlich die für Entwicklung und Auslieferung erforderlichen Projektdateien, insbesondere:

- Templatequellcode
- SCSS
- JavaScript-Quelldateien
- erzeugte Produktions-Assets, sofern sie Bestandteil der Auslieferung sind
- Dokumentation
- Konfigurationsdateien
- `package.json`
- `package-lock.json`
- `.gitignore`

Damit wird ausdrücklich auch die minifizierte `menu-metismenu.min.js` versioniert, da sie als Produktions-Asset ausgeliefert wird.

---

## 6. Nicht versionierte Dateien

Nicht versioniert werden insbesondere:

- `node_modules/`
- temporäre Dateien
- lokale Cache-Dateien
- Logdateien
- lokale Zugangsdaten
- Datenbank-Backups
- sonstige Entwicklungsartefakte

Die konkrete Ausschlussliste wird über `.gitignore` gesteuert.

---

## 7. Git-Workflow

Der aktuelle Entwicklungsworkflow lautet:

```text
Änderung
   ↓
lokaler Test
   ↓
Build / Qualitätsprüfung
   ↓
git status
   ↓
git diff
   ↓
git add
   ↓
git status
   ↓
git commit
   ↓
git push
```

Der ausführliche Ablauf ist in [DV-004 Git Workflow](../development/dv-004-git-workflow.md) dokumentiert.

---

## 8. Conventional Commits

WissensWerk verwendet Conventional Commits.

Beispiele:

```text
feat(navigation): finalize MetisMenu navigation

fix(offcanvas): prevent horizontal overflow

docs(build): document JavaScript build process

build(js): regenerate minified menu script

refactor(scss): simplify navigation styles
```

Die Commit-Nachricht soll die Art und den betroffenen Bereich der Änderung erkennen lassen.

---

## 9. Qualitätskontrolle

Vor einem Commit werden Änderungen geprüft.

Je nach Änderung gehören dazu:

- `git status`
- `git diff`
- SCSS-Kompilierung
- JavaScript-Build
- JavaScript-Syntaxprüfung
- Browser-Test
- Prüfung der erzeugten Produktionsdateien

Beispiel für JavaScript:

```powershell
npm.cmd run build:js
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js"
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
```

---

## 10. Branch

Der aktuelle Entwicklungsworkflow arbeitet mit:

```text
main
```

Änderungen werden nach erfolgreicher lokaler Prüfung in abgeschlossenen Commits auf `main` übernommen und anschließend nach GitHub übertragen.

Ein komplexes Branching-Modell wird für den aktuellen Projektumfang nicht benötigt.

---

## 11. Best Practices

- Kleine, thematisch abgeschlossene Commits erstellen.
- Vor jedem Commit `git status` prüfen.
- Änderungen mit `git diff` kontrollieren.
- Build-Artefakte vor dem Commit aktualisieren.
- Keine sensiblen Daten versionieren.
- Commit-Nachrichten nach Conventional Commits formulieren.
- Erst nach erfolgreichem Test pushen.

---

## 12. Bezugsquellen

- [Git](https://git-scm.com/)
- [Git Dokumentation](https://git-scm.com/doc)

---

## 13. Ergebnis

Git bildet die lokale Grundlage der Versionsverwaltung von WissensWerk.

Zusammen mit dem definierten Commit- und Build-Workflow ermöglicht Git eine nachvollziehbare Entwicklung und stellt sicher, dass abgeschlossene Arbeitsschritte reproduzierbar dokumentiert werden.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliche Git-Dokumentation erstellt. |
| 2.0 | 02.09.2026 | Versionierung von Produktions-Build-Artefakten, aktueller JavaScript-Build, `main`-Workflow und Conventional Commits ergänzt. |
