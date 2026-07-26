[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [⚙️ Technische Grundlagen](tf-000-technische-grundlagen.md)

---

# TF-006 Release Management

## Ziel
Releases kennzeichnen wichtige Entwicklungsstände des Projekts. Sie schaffen nachvollziehbare Meilensteine und ermöglichen es, den Fortschritt sowie den Funktionsumfang einzelner Projektversionen jederzeit nachzuvollziehen.

Ein Release beschreibt einen abgeschlossenen Entwicklungsstand und bildet die Grundlage für Versionierung und Dokumentation.

# Grundprinzip
Nicht jede Änderung führt zu einem Release.
Ein Release fasst mehrere abgeschlossene Änderungen zu einem nachvollziehbaren Entwicklungsstand zusammen.

Typische Anlässe sind

- neue Funktionen,
- größere Architekturänderungen,
- abgeschlossene Dokumentationsabschnitte,
- veröffentlichungsreife Versionen.

# Versionierung

WissensWerk verwendet eine fortlaufende Versionsnummer.

Beispiele:

```text
v0.1.0
v0.2.0
v0.3.0
v1.0.0
```

Die Versionsnummer beschreibt den Entwicklungsstand des Projekts.

# Inhalt eines Releases

Ein Release sollte dokumentieren

- neue Funktionen,
- behobene Fehler,
- Architekturänderungen,
- Dokumentationsänderungen,
- bekannte Einschränkungen (falls vorhanden).

Beispiel:

```text
Version 0.2.0

New

- Design System erweitert
- GitHub Workflow dokumentiert
- Technical Foundation eingeführt

Changed

- Dokumentationsstruktur überarbeitet
- Verzeichnisstruktur vereinheitlicht

Fixed

- Interne Dokumentationslinks korrigiert
```

# Release-Zeitpunkt
Ein Release wird erstellt, wenn

- ein definierter Meilenstein erreicht wurde,
- mehrere zusammengehörende Änderungen abgeschlossen sind,
- das Projekt einen stabilen Entwicklungsstand erreicht hat.

Kleine Einzeländerungen führen in der Regel nicht zu einem eigenen Release.

# Changelog
Jedes Release sollte durch ein Changelog begleitet werden.
Das Changelog beschreibt ausschließlich Änderungen gegenüber der vorherigen Version.
Es dient als Übersicht für

- neue Funktionen,
- Verbesserungen,
- Fehlerkorrekturen,
- strukturelle Änderungen.

# Grundregeln
Für WissensWerk gelten folgende Regeln.

- Releases kennzeichnen abgeschlossene Entwicklungsstände.
- Jedes Release erhält eine eindeutige Versionsnummer.
- Größere Änderungen werden im Changelog dokumentiert.
- Releases sollen nachvollziehbar und reproduzierbar sein.
- Ein Release beschreibt immer einen stabilen Projektstand.

# Vorteile
Ein strukturiertes Release Management

- dokumentiert den Projektfortschritt,
- schafft nachvollziehbare Meilensteine,
- erleichtert die Versionierung,
- unterstützt die langfristige Wartung,
- verbessert die Transparenz der Entwicklung.

# Verwandte Dokumente

- [⚙️ TF-001 Github-Workflows](./tf-001-github-workflow.md)
- [⚙️ TF-002 Issue Management](./tf-002-issue-management.md)
- [⚙️ TF-004 Commit Cconvention](./tf-004-commit-convention.md)
- [TF-004 Commit Convention](./../development/dv-004-git-workflow.md)


