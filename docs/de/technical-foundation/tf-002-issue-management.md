[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [⚙️ Technische Grundlagen](tf-000-technische-grundlagen.md)

---

# TF-002 Issue Management

## Ziel
Issues bilden die Grundlage der Aufgabenverwaltung innerhalb des Projekts. Sie dokumentieren Änderungen, Verbesserungen, Fehler und neue Funktionen und sorgen dafür, dass jede Entwicklung nachvollziehbar bleibt.

Ein Issue beschreibt immer eine konkrete Aufgabe und dient gleichzeitig als Dokumentation der zugrunde liegenden Entscheidung.

# Grundprinzip
Jede Änderung am Projekt beginnt mit einem Issue.
Das gilt unabhängig davon, ob es sich um

- eine neue Funktion,
- eine Fehlerbehebung,
- eine Dokumentationsänderung,
- ein Refactoring
- oder eine organisatorische Anpassung

handelt.
Dadurch entsteht eine vollständige Historie aller Projektentscheidungen.

# Wann wird ein Issue erstellt?
Ein Issue wird erstellt, wenn

- eine neue Funktion entwickelt werden soll,
- ein Fehler behoben werden muss,
- eine bestehende Funktion verbessert wird,
- Dokumentationen erweitert oder geändert werden,
- Architekturentscheidungen umgesetzt werden,
- technische Schulden abgebaut werden.

Kleine Schreibfehler oder offensichtliche Tippfehler können ohne eigenes Issue korrigiert werden.

# Aufbau eines Issues
Jedes Issue sollte mindestens folgende Informationen enthalten.

## Titel
Der Titel beschreibt die Aufgabe möglichst kurz und eindeutig.

Beispiele:

```text
Rename documentation directories according to DG-001
Implement design token system
Create Joomla template skeleton
Fix mobile navigation
```

---

## Beschreibung
Die Beschreibung erläutert

- Ausgangssituation
- Ziel
- Umfang
- mögliche Auswirkungen

Sie beantwortet die Frage:

> Warum wird diese Änderung durchgeführt?

## Akzeptanzkriterien
Akzeptanzkriterien definieren, wann eine Aufgabe als abgeschlossen gilt.

Beispiel

```markdown
- [ ] Dokumentation erstellt
- [ ] Interne Links geprüft
- [ ] Build erfolgreich
- [ ] Änderungen getestet
```

---

# Labels
Labels dienen der thematischen Einordnung eines Issues.
Empfohlene Kategorien:

| Label | Bedeutung |
|--------|-----------|
| documentation | Dokumentation |
| architecture | Architektur |
| development | Entwicklung |
| bug | Fehler |
| enhancement | Verbesserung |
| refactoring | Umstrukturierung |
| design | Design |
| testing | Tests |

# Bearbeitung
Während der Bearbeitung wird das Issue regelmäßig aktualisiert.
Dazu gehören beispielsweise

- Ergänzungen
- Entscheidungen
- offene Fragen
- Zwischenergebnisse

Das Issue dokumentiert damit nicht nur die Aufgabe, sondern auch deren Entwicklung.

# Abschluss
Ein Issue gilt als abgeschlossen, wenn

- alle Akzeptanzkriterien erfüllt sind,
- die Umsetzung abgeschlossen wurde,
- die Dokumentation aktualisiert wurde,
- die Änderung versioniert wurde.

Anschließend wird das Issue geschlossen.

# Grundregeln
Für WissensWerk gelten folgende Regeln.

- Jede größere Änderung beginnt mit einem Issue.
- Ein Issue beschreibt genau eine Aufgabe.
- Titel sind kurz und eindeutig.
- Die Beschreibung erläutert Ziel und Hintergrund.
- Akzeptanzkriterien definieren den Abschluss.
- Nach Abschluss wird das Issue geschlossen.

# Vorteile

Ein strukturiertes Issue Management

- verbessert die Nachvollziehbarkeit,
- dokumentiert Entscheidungen,
- schafft Transparenz,
- erleichtert die Projektplanung,
- bildet die Grundlage der Projekthistorie.

# Verwandte Dokumente

- [⚙️ TF-001 Github-Workflows](./tf-001-github-workflow.md)
- [⚙️ TF-003 Branching Strategy (geplant)](./tf-003-branching-strategy.md)
- [⚙️ TF-004 Commit Cconvention](./tf-004-commit-convention.md)
- [⚙️ TF-005 Pull Request Process (geplant)](./tf-005-pull-request-process.md)
- [⚙️ TF-006 Release Management.md](./tf-006-release-management.md)

