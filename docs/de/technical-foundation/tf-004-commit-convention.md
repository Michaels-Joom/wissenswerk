[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [⚙️ Technische Grundlagen](tf-000-technische-grundlagen.md)

---

# TF-004 Commit Convention

## Ziel
Commits dokumentieren die Entwicklung des Projekts. Sie bilden eine nachvollziehbare Historie aller Änderungen und ermöglichen es, Entscheidungen sowie Entwicklungsschritte jederzeit nachzuvollziehen.

Jeder Commit sollte genau eine abgeschlossene Änderung beschreiben.

# Grundprinzip
Ein Commit beantwortet die Frage:

> **Was wurde geändert?**

Nicht:

> **Warum wurde gearbeitet?**

Der Hintergrund einer Änderung wird im zugehörigen Issue dokumentiert.

# Commit-Regeln

Für WissensWerk gelten folgende Grundregeln.

- Ein Commit beschreibt genau eine abgeschlossene Änderung.
- Commits werden in englischer Sprache geschrieben.
- Die Commit-Nachricht beginnt mit einem Verb.
- Die Beschreibung ist kurz und präzise.
- Mehrere unterschiedliche Änderungen werden nicht in einem Commit zusammengefasst.

# Schreibweise
Die Commit-Nachricht besteht aus einer kurzen Beschreibung.
Empfohlene Form:

```text
Verb + Objekt
```

Beispiele:

```text
Add design token variables

Create template skeleton

Implement responsive grid

Update documentation links

Rename documentation directories

Refactor SCSS architecture

Remove unused assets

Fix mobile navigation
```

# Commit-Typen
Zur besseren Strukturierung werden folgende Verben verwendet.

| Verb | Verwendung |
|------|------------|
| Add | Neue Inhalte hinzufügen |
| Create | Neue Dateien oder Strukturen erstellen |
| Implement | Funktionalität umsetzen |
| Update | Bestehende Inhalte ändern |
| Rename | Dateien oder Verzeichnisse umbenennen |
| Refactor | Struktur verbessern, ohne Verhalten zu ändern |
| Fix | Fehler beheben |
| Remove | Nicht mehr benötigte Inhalte entfernen |
| Improve | Bestehende Lösung optimieren |

# Gute Commits

```text
Add Bootstrap asset registration
Create SCSS folder structure
Update README
Rename architecture directory
Fix responsive navigation
Refactor JavaScript modules
```

# Schlechte Commits

```text
Changes
Update
Fix
Misc
Test
Final
Stuff
```

Diese Commit-Nachrichten beschreiben die Änderung nicht ausreichend und erschweren die Nachvollziehbarkeit.

# Commit-Größe
Ein Commit sollte möglichst klein bleiben.
Ideal ist eine logisch abgeschlossene Änderung.

Beispiele:

✔ Dokumentation aktualisiert

✔ Eine neue Komponente erstellt

✔ Einen Fehler behoben

Nicht empfehlenswert:

✖ Dokumentation aktualisiert, Navigation geändert und Design angepasst.

# Beziehung zu Issues
Jeder Commit gehört zu einem bestehenden Issue.
Das Issue beschreibt

- Ziel
- Hintergrund
- Entscheidungen

Der Commit dokumentiert ausschließlich die technische Umsetzung.

# Vorteile
Eine einheitliche Commit-Konvention

- verbessert die Lesbarkeit der Projekthistorie,
- erleichtert die Fehlersuche,
- unterstützt die Nachvollziehbarkeit,
- vereinfacht spätere Releases,
- schafft eine konsistente Projektstruktur.

# Grundregeln

Für WissensWerk gilt:

- Ein Commit dokumentiert genau eine abgeschlossene Änderung.
- Commit-Nachrichten werden in englischer Sprache verfasst.
- Die Beschreibung beginnt mit einem Verb.
- Commit-Nachrichten sind kurz, eindeutig und aussagekräftig.
- Der Hintergrund einer Änderung gehört in das Issue, nicht in den Commit.

# Verwandte Dokumente

- [⚙️ TF-001 Github-Workflows](./tf-001-github-workflow.md)
- [⚙️ TF-002 Issue Management](./tf-002-issue-management.md)
- [⚙️ TF-006 Release Management.md](./tf-006-release-management.md)
- [TF-004 Commit Convention](./../development/dv-004-git-workflow.md)

