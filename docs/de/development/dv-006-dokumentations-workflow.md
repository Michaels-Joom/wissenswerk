# DV-006 Dokumentations-Workflow

> **Status:** Aktiv  
> **Version:** 1.0  
> **Stand:** 27.07.2026

## Ziel
Dieses Dokument beschreibt den Workflow zur Erstellung, Pflege und Versionierung der Projektdokumentation.
Ziel ist eine konsistente, nachvollziehbare und wartbare Dokumentation mit einer sauberen Git-Historie.

## Grundsatz
Die gesamte Projektdokumentation wird **lokal** innerhalb der Projektstruktur erstellt und gepflegt.
GitHub dient ausschließlich als zentrales Remote-Repository sowie zur Veröffentlichung und Versionsverwaltung.

# Entwicklungsumgebung
Die Dokumentation wird mit folgenden Werkzeugen erstellt:

- Visual Studio Code
- Markdown
- Git
- GitHub

Alle Dokumente befinden sich innerhalb des Projektverzeichnisses.

## Workflow

### 1. Dokument erstellen oder bearbeiten
Neue Dokumente sowie Änderungen an bestehenden Dokumenten erfolgen ausschließlich lokal in Visual Studio Code.
Dabei gelten die projektspezifischen Dokumentationsrichtlinien sowie die definierten Namenskonventionen.

### 2. Änderungen prüfen
Vor jedem Commit werden alle Änderungen überprüft.
Hierzu gehören insbesondere:

- Inhaltliche Vollständigkeit
- Markdown-Formatierung
- Dateinamen
- Verzeichnisstruktur
- Interne Verlinkungen

### 3. Commit erstellen
Zusammengehörige Änderungen werden in einem gemeinsamen Commit zusammengefasst.
Commit-Nachrichten folgen der im Projekt definierten Commit-Convention.

Beispiel:

```text
docs: update design system documentation
```

oder

```text
feat: implement HTML base layer
```

### 4. Push zum Remote Repository
Nach erfolgreichem Commit wird der aktuelle Stand nach GitHub übertragen.

```bash
git push
```

GitHub dient dabei ausschließlich als Remote Repository.

## GitHub Web Editor
Der GitHub-Webeditor wird für die reguläre Projektdokumentation **nicht verwendet**.

## Begründung
Bearbeitungen direkt auf GitHub erzeugen eigenständige Commits im Remote Repository.
Beim anschließenden Abrufen der Änderungen entstehen häufig zusätzliche Merge-Commits, welche die Commit-Historie unnötig erweitern.

Eine lokale Bearbeitung ermöglicht dagegen:

- eine lineare Commit-Historie
- logisch zusammenhängende Commits
- einfachere Nachvollziehbarkeit
- bessere Code- und Dokumentenreviews

## Vorteile des lokalen Workflows
Der lokale Workflow bietet zahlreiche Vorteile:

- komfortables Arbeiten in Visual Studio Code
- globale Suche über die gesamte Dokumentation
- Umbenennen von Dateien und Verzeichnissen
- konsistente Markdown-Unterstützung
- direkte Integration in Git
- keine unnötigen Merge-Commits
- bessere Nachvollziehbarkeit der Projektentwicklung

## Ausnahmefälle
Der GitHub-Webeditor kann in Ausnahmefällen verwendet werden, beispielsweise:

- kurzfristige Korrektur eines Tippfehlers
- Bearbeitung von Dokumenten von einem fremden Rechner
- Notfallkorrekturen ohne lokale Entwicklungsumgebung

Diese Fälle stellen ausdrücklich Ausnahmen dar und gehören nicht zum regulären Entwicklungsprozess.

## Architekturentscheidung
Die Dokumentation ist Bestandteil des Projekts und wird wie der Quellcode behandelt.
Sie unterliegt denselben Grundsätzen hinsichtlich:

- Versionierung
- Nachvollziehbarkeit
- Wartbarkeit
- Qualitätssicherung

## Zusammenfassung
Der Dokumentationsworkflow folgt einem einfachen Prinzip:

```text
Dokument erstellen
        │
        ▼
Lokale Bearbeitung (Visual Studio Code)
        │
        ▼
Überprüfung
        │
        ▼
Git Commit
        │
        ▼
Git Push
        │
        ▼
GitHub
```

GitHub ist das zentrale Remote Repository.

Die eigentliche Dokumentationserstellung erfolgt vollständig innerhalb der lokalen Entwicklungsumgebung.
