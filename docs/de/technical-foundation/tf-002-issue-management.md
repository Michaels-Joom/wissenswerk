[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [⚙️ Technische Grundlagen](./tf-000-technische-grundlagen.md)

---

# TF-002 Issue Management

**Dokumenttyp:** Technische Grundlage  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Issues bilden den organisatorischen Rahmen für größere oder fachlich abgegrenzte Aufgaben.

Sie dokumentieren Ziel, Umfang und Ergebnis einer Änderung und schaffen eine nachvollziehbare Projekthistorie.

---

## Grundprinzip

Ein Issue beschreibt eine konkrete Aufgabe.

Typische Einsatzbereiche sind:

- neue Funktionen
- Fehlerbehebungen
- größere Verbesserungen
- Architekturänderungen
- Designänderungen
- Dokumentationsabschnitte
- technische Aufräumarbeiten

Kleine offensichtliche Korrekturen können ohne eigenes Issue durchgeführt werden.

---

## Aufbau

Ein Issue sollte möglichst folgende Informationen enthalten:

### Titel

Kurz und eindeutig.

### Beschreibung

- Ausgangssituation
- Problem oder Ziel
- Umfang
- mögliche Auswirkungen

### Akzeptanzkriterien

Die Kriterien definieren, wann die Aufgabe als abgeschlossen betrachtet werden kann.

Beispiel:

```markdown
- [ ] Umsetzung abgeschlossen
- [ ] Build erfolgreich
- [ ] Funktion geprüft
- [ ] Dokumentation aktualisiert
- [ ] Commit erstellt
```

---

## Labels

Geeignete Kategorien sind beispielsweise:

| Label | Bedeutung |
|---|---|
| documentation | Dokumentation |
| architecture | Architektur |
| development | Entwicklung |
| bug | Fehler |
| enhancement | Verbesserung |
| refactoring | Umstrukturierung |
| design | Design |
| testing | Tests |
| build | Build / Tooling |

Labels sollen der Orientierung dienen und nicht unnötig verfeinert werden.

---

## Bearbeitung

Während der Umsetzung können relevante Entscheidungen und Ergebnisse im Issue dokumentiert werden.

Das Issue beschreibt den fachlichen Zusammenhang.

Der Commit beschreibt die technische Umsetzung.

---

## Abschluss

Ein Issue kann geschlossen werden, wenn die definierten Anforderungen erfüllt sind.

Dazu gehören je nach Aufgabe:

- Umsetzung
- Prüfung
- Build
- Dokumentation
- Commit

---

## Beziehung zu Commits

Issue und Commit besitzen unterschiedliche Verantwortlichkeiten:

```text
Issue
  → Warum / Was soll erreicht werden?

Commit
  → Was wurde technisch geändert?
```

---

## Verwandte Dokumente

- [⚙️ TF-001 GitHub Workflow](./tf-001-github-workflow.md)
- [⚙️ TF-003 Branching Strategy](./tf-003-branching-strategy.md)
- [⚙️ TF-004 Commit Convention](./tf-004-commit-convention.md)
- [⚙️ TF-006 Release Management](./tf-006-release-management.md)

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliches Issue-Konzept erstellt. |
| 2.0 | 02.09.2026 | Issue-Regeln an den aktuellen Single-Developer-Workflow und den Build-/Prüfprozess angepasst. |
