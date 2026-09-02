[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [⚙️ Technische Grundlagen](./tf-000-technische-grundlagen.md)

---

# TF-004 Commit Convention

**Dokumenttyp:** Technische Grundlage  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Commits dokumentieren die technische Entwicklung des Projekts.

Sie sollen eine klare, lesbare und nachvollziehbare Historie erzeugen.

---

## Grundprinzip

WissensWerk verwendet **Conventional Commits**.

Die Commit-Nachricht beschreibt die Art und den Gegenstand der Änderung.

Grundform:

```text
type(scope): description
```

Beispiel:

```text
feat(navigation): finalize MetisMenu navigation
```

---

## Commit-Typen

| Typ | Verwendung |
|---|---|
| `feat` | neue Funktion |
| `fix` | Fehlerbehebung |
| `docs` | Dokumentation |
| `style` | reine Formatierungs-/Stiländerung ohne Funktionsänderung |
| `refactor` | strukturelle Änderung ohne beabsichtigte Funktionsänderung |
| `build` | Buildsystem oder Abhängigkeiten |
| `chore` | sonstige technische Pflege |

Nicht jeder mögliche Conventional-Commit-Typ muss im Projekt verwendet werden.

---

## Scope

Der Scope grenzt die Änderung thematisch ein.

Beispiele:

```text
feat(navigation): ...
fix(offcanvas): ...
docs(architecture): ...
build(js): ...
```

Der Scope ist optional, bei größeren Bereichen jedoch sinnvoll.

---

## Sprache

Commit-Nachrichten werden auf Englisch verfasst.

---

## Beschreibung

Die Beschreibung soll:

- kurz,
- eindeutig,
- im Imperativ,
- technisch nachvollziehbar

sein.

Beispiele:

```text
feat(navigation): finalize MetisMenu navigation
fix(offcanvas): prevent horizontal overflow
docs(architecture): update template architecture
build(js): minify MetisMenu script
refactor(scss): consolidate navigation styles
```

---

## Gute Commits

```text
feat(navigation): add active path handling
fix(offcanvas): correct footer layout
docs(build): document JavaScript build process
build(js): regenerate minified menu script
refactor(scss): simplify submenu rules
```

## Schlechte Commits

```text
Changes
Update
Fix
Final
Stuff
Misc
```

Diese Nachrichten enthalten zu wenig Information.

---

## Commit-Größe

Ein Commit sollte eine logisch abgeschlossene Änderung enthalten.

Mehrere fachlich unterschiedliche Änderungen sollen nicht ohne Grund in einem Commit vermischt werden.

---

## Beziehung zu Issues

Das Issue beschreibt den fachlichen Zusammenhang.

Der Commit beschreibt die technische Umsetzung.

```text
Issue
  → Ziel, Hintergrund, Akzeptanz

Commit
  → technische Änderung
```

---

## Vor dem Commit

Je nach Änderung sollte geprüft werden:

- Build erfolgreich
- Syntaxprüfung erfolgreich
- Browserprüfung durchgeführt
- responsive Verhalten geprüft
- Dokumentation aktualisiert
- keine unbeabsichtigten Dateien geändert

---

## Verwandte Dokumente

- [⚙️ TF-001 GitHub Workflow](./tf-001-github-workflow.md)
- [⚙️ TF-002 Issue Management](./tf-002-issue-management.md)
- [⚙️ TF-006 Release Management](./tf-006-release-management.md)
- [⚙️ TF-007 Versionierung](./tf-007-versionierung.md)

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliche Commit-Konvention erstellt. |
| 2.0 | 02.09.2026 | Commit-Konvention auf Conventional Commits umgestellt und an die tatsächlich verwendete Schreibweise angepasst. |
