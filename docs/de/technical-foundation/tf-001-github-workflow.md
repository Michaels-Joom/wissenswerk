[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [⚙️ Technische Grundlagen](tf-000-technische-grundlagen.md)

---

# TF-001 GitHub Workflow
## Ziel
Ein strukturierter GitHub-Workflow sorgt dafür, dass Änderungen nachvollziehbar, reproduzierbar und sauber dokumentiert werden. Er bildet die organisatorische Grundlage der Entwicklung und unterstützt einen kontrollierten Entwicklungsprozess.

Der Workflow beschreibt nicht den Umgang mit Git im Detail, sondern legt fest, wie Änderungen innerhalb des Projekts geplant, umgesetzt und dokumentiert werden.

# Grundprinzip
Jede Änderung am Projekt folgt einem definierten Ablauf.

```text
Idee
   │
   ▼
Issue
   │
   ▼
Entwicklung
   │
   ▼
Commit(s)
   │
   ▼
main
```

Dadurch bleibt jederzeit nachvollziehbar,

- warum eine Änderung entstanden ist,
- welche Dateien betroffen sind,
- wann die Änderung durchgeführt wurde,
- welche Entscheidungen dahinter stehen.

> [!NOTE]
>
> WissensWerk orientiert sich am klassischen GitHub-Workflow.
> Da das Projekt derzeit von einer einzelnen Person entwickelt wird,
> wird bewusst ein vereinfachter Workflow verwendet.
>
> Mit zunehmender Projektgröße können weitere Schritte wie Feature Branches,
> Pull Requests, Reviews oder automatisierte Tests ergänzt werden.

---

# Entwicklungsprozess

## 1. Idee oder Anforderung
Neue Funktionen, Verbesserungen oder Fehler werden zunächst als Idee formuliert.
Eine Idee sollte möglichst konkret beschreiben,

- welches Problem besteht,
- welches Ziel erreicht werden soll,
- welche Auswirkungen zu erwarten sind.

## 2. Issue erstellen
Vor Beginn der eigentlichen Entwicklung wird ein GitHub Issue angelegt.

Das Issue dient als zentrale Dokumentation einer Aufgabe.
Es beschreibt

- Ziel
- Hintergrund
- Umfang
- Akzeptanzkriterien

## 3. Entwicklung
Die Umsetzung erfolgt direkt auf Basis des zugehörigen Issues.
Während der Entwicklung können beliebig viele Commits entstehen.
Jeder Commit sollte eine abgeschlossene Änderung dokumentieren.

## 4. Commits
Commits dokumentieren einzelne Arbeitsschritte.
Sie sollen

- verständlich,
- eindeutig,
- möglichst klein
- und in sich abgeschlossen sein.

Beispiele:

```text
Add design token variables
Implement responsive grid
Update documentation links
Fix mobile navigation
Refactor asset loading
```

---

## 5. Integration
Nach erfolgreicher Umsetzung wird die Änderung in den Hauptzweig übernommen.
Dabei wird überprüft,

- ob das Issue vollständig umgesetzt wurde,
- ob die Dokumentation aktualisiert wurde,
- ob die Änderung nachvollziehbar dokumentiert ist.

## 6. Release
Größere Entwicklungsstände werden als Release dokumentiert.
Ein Release beschreibt den jeweiligen Entwicklungsstand und dient als nachvollziehbarer Meilenstein innerhalb des Projekts.

# Zukünftige Erweiterungen
Mit zunehmender Projektgröße kann der Workflow erweitert werden.
Mögliche Ergänzungen sind:
- Feature Branches
- Pull Requests
- Code Reviews
- Automatisierte Tests
- Continuous Integration (CI)
- Continuous Deployment (CD)

Diese Bestandteile werden eingeführt, sobald sie einen praktischen Mehrwert für das Projekt bieten.

# Grundregeln
Für WissensWerk gelten derzeit folgende Regeln:
- Jede Änderung beginnt mit einem Issue.
- Jedes Issue beschreibt eine klar abgegrenzte Aufgabe.
- Commits dokumentieren genau eine abgeschlossene Änderung.
- Dokumentation ist Bestandteil jeder Entwicklung.
- Änderungen müssen jederzeit nachvollziehbar sein.
- Größere Entwicklungsstände werden als Release dokumentiert.

## Vorteile
Der definierte Workflow bietet mehrere Vorteile.
- Änderungen bleiben nachvollziehbar.
- Aufgaben können sauber voneinander getrennt werden.
- Fehler lassen sich einfacher zurückverfolgen.
- Dokumentation und Entwicklung bleiben synchron.
- Der Projektverlauf wird transparent.
- Der Workflow kann mit dem Projekt wachsen.

# Verwandte Dokumente
- [⚙️ TF-002 Issue Management](./tf-002-issue-management.md)
- [⚙️ TF-003 Branching Strategy (geplant)](./tf-003-branching-strategy.md)
- [⚙️ TF-004 Commit Cconvention](./tf-004-commit-convention.md)
- [⚙️ TF-005 Pull Request Process (geplant)](./tf-005-pull-request-process.md)
- [⚙️ TF-006 Release Management.md](./tf-006-release-management.md)

