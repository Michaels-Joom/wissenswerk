[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🛠️ Entwicklungsübersicht](./dv-000-entwicklunguebersicht.md)

---

# DV-004 Git Workflow

**Dokumenttyp:** Entwicklungsdokumentation  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Zweck

Dieses Dokument beschreibt den praktischen Git-Workflow für das WissensWerk-Projekt.

Ziel ist eine nachvollziehbare, saubere und wartbare Versionshistorie.

---

## Grundsätze

- Jeder Commit stellt eine logisch abgeschlossene Änderung dar.
- Commits dokumentieren erreichte Ergebnisse.
- Vor dem Commit wird der Repository-Status geprüft.
- Nur bewusst ausgewählte Dateien werden versioniert.
- Änderungen werden möglichst klein und thematisch zusammenhängend gehalten.
- Commit-Nachrichten folgen Conventional Commits.
- Build-Artefakte werden vor dem Commit aktualisiert, wenn ihre Quelldateien geändert wurden.

---

## 1. Repository-Status prüfen

```bash
git status
```

Dabei werden geänderte, neue und nicht versionierte Dateien kontrolliert.

---

## 2. Änderungen prüfen

Eine einzelne Datei:

```bash
git diff <datei>
```

Alle Änderungen:

```bash
git diff
```

Ziel ist es, unbeabsichtigte Änderungen frühzeitig zu erkennen.

---

## 3. Build und Funktion prüfen

Abhängig von der Änderung werden vor dem Commit die erforderlichen Prüfungen durchgeführt.

Bei JavaScript:

```powershell
npm.cmd run build:js
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js"
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
```

Danach erfolgt der Funktionstest im Browser.

Bei SCSS erfolgt die Kompilierung über die konfigurierte Entwicklungsumgebung.

---

## 4. Änderungen zur Staging Area hinzufügen

Gesamtes Projekt:

```bash
git add .
```

Einzelne Datei:

```bash
git add <datei>
```

Bei größeren Änderungen soll bevorzugt gezielt geprüft werden, welche Dateien tatsächlich versioniert werden sollen.

---

## 5. Status erneut prüfen

```bash
git status
```

Es sollten nur die bewusst zu commitenden Änderungen unter `Changes to be committed` erscheinen.

---

## 6. Commit erstellen

Das Projekt verwendet Conventional Commits.

Beispiel:

```bash
git commit -m "feat(navigation): finalize MetisMenu navigation"
```

Weitere Beispiele:

```text
fix(offcanvas): prevent horizontal overflow
docs(build): document JavaScript build process
build(js): regenerate minified menu script
refactor(scss): simplify navigation styles
```

---

## 7. Commit kontrollieren

```bash
git log --oneline
```

Damit wird geprüft, ob der Commit korrekt erstellt wurde.

---

## 8. Änderungen übertragen

```bash
git push
```

Der aktuelle Entwicklungsworkflow arbeitet direkt mit `main`.

---

## Standardworkflow

```text
Änderung
   ↓
Entwicklung
   ↓
Build / Prüfung
   ↓
Browser-Test
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
git log
   ↓
git push
```

---

## Commit-Regeln

Ein Commit sollte:

- eine abgeschlossene Änderung enthalten
- logisch zusammenhängende Änderungen umfassen
- keine temporären Dateien enthalten
- reproduzierbar sein
- eine aussagekräftige Commit-Nachricht besitzen

Nicht geeignet sind beispielsweise:

```text
Changes
Update
Fix
Final
Stuff
Misc
```

---

## Qualitätskontrolle

Vor jedem Commit sollte geprüft werden:

- Ist der Arbeitsschritt abgeschlossen?
- Enthält der Commit nur zusammengehörige Änderungen?
- Wurde `git status` kontrolliert?
- Wurde `git diff` geprüft?
- Sind keine temporären Dateien enthalten?
- Wurden Build-Artefakte aktualisiert?
- Wurde die Funktion im Browser getestet?
- Ist die Commit-Nachricht korrekt?

---

## Verwandte Dokumente

- [⚙️ TF-001 GitHub Workflow](../technical-foundation/tf-001-github-workflow.md)
- [⚙️ TF-004 Commit Convention](../technical-foundation/tf-004-commit-convention.md)
- [⚙️ TF-006 Release Management](../technical-foundation/tf-006-release-management.md)
- [⚙️ TF-007 Versionierung](../technical-foundation/tf-007-versionierung.md)

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprünglichen Git-Workflow erstellt. |
| 2.0 | 02.09.2026 | Workflow an den aktuellen Build-, Prüf-, Conventional-Commit- und GitHub-Prozess angepasst. |
