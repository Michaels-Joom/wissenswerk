[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [⚙️ Technische Grundlagen](tf-000-technische-grundlagen.md)

---

# TF-007 Versionierung

## Ziel
Eine einheitliche Versionierung ermöglicht es, Entwicklungsstände eindeutig zu kennzeichnen und Änderungen zwischen einzelnen Versionen nachvollziehbar zu dokumentieren.
Versionen dienen nicht nur der Veröffentlichung neuer Softwarestände, sondern dokumentieren den kontinuierlichen Fortschritt des gesamten Projekts.

# Grundprinzip
WissensWerk verwendet **Semantic Versioning (SemVer)**.
Eine Versionsnummer besteht aus drei Bestandteilen.

```text
MAJOR.MINOR.PATCH
```

Beispiel:

```text
1.4.2
```

Jeder Bestandteil besitzt eine eindeutige Bedeutung.

# MAJOR Version
Die erste Zahl erhöht sich bei grundlegenden Änderungen.

Beispiele:

- nicht abwärtskompatible Änderungen
- grundlegende Architekturänderungen
- vollständige Überarbeitung des Templates
- neue Hauptversion

Beispiel:

```text
1.0.0 → 2.0.0
```

# MINOR Version

Die zweite Zahl erhöht sich bei neuen Funktionen oder größeren Erweiterungen.

Beispiele:

- neue Templatefunktionen
- neue Komponenten
- Erweiterung des Design Systems
- neue Dokumentationsbereiche
- größere Architekturentscheidungen

Beispiel:

```text
1.2.0 → 1.3.0
```

# PATCH Version
Die dritte Zahl erhöht sich bei kleineren Änderungen.

Beispiele:

- Fehlerkorrekturen
- Optimierungen
- kleinere Verbesserungen
- Korrekturen an der Dokumentation
- interne Bereinigungen

Beispiel:

```text
1.3.2 → 1.3.3
```

# Projektphasen
Während der Entwicklung befindet sich WissensWerk zunächst im Vorabstatus.

Beispiel:

```text
0.1.0
0.2.0
0.3.0
```

Versionen mit einer führenden **0** kennzeichnen ein Projekt, das sich noch in aktiver Entwicklung befindet.
Die erste stabile Veröffentlichung erhält die Versionsnummer

```text
1.0.0
```

# Versionierung in WissensWerk
Da WissensWerk Softwareentwicklung und Dokumentation als gleichwertige Bestandteile des Projekts betrachtet, können neue Versionen sowohl durch Quellcode als auch durch wesentliche Erweiterungen der Dokumentation entstehen.
Eine neue MINOR-Version kann beispielsweise entstehen durch

- neue Architekturdokumente
- Erweiterungen des Design Systems
- neue Templatefunktionen
- neue Komponenten
- abgeschlossene Entwicklungsabschnitte

PATCH-Versionen werden für kleinere Korrekturen und Optimierungen verwendet.

# Changelog
Jede veröffentlichte Version wird durch ein Changelog begleitet.
Das Changelog dokumentiert ausschließlich Änderungen gegenüber der vorherigen Version.

Es enthält beispielsweise

- neue Funktionen
- Verbesserungen
- Fehlerkorrekturen
- Dokumentationsänderungen

# Grundregeln

Für WissensWerk gelten folgende Regeln.

- Jede veröffentlichte Version erhält eine eindeutige Versionsnummer.
- Die Versionierung erfolgt nach Semantic Versioning.
- Größere Änderungen erhöhen die MINOR-Version.
- Fehlerkorrekturen erhöhen die PATCH-Version.
- Grundlegende Änderungen erhöhen die MAJOR-Version.
- Jede Version wird dokumentiert.

# Vorteile

Eine einheitliche Versionierung

- dokumentiert den Projektfortschritt,
- erleichtert die Nachvollziehbarkeit,
- unterstützt Releases,
- schafft Transparenz,
- verbessert die Wartbarkeit.

# Beispiele

| Version | Bedeutung |
|----------|-----------|
| 0.1.0 | Projektstart |
| 0.2.0 | Design System ergänzt |
| 0.3.0 | Template Skeleton erstellt |
| 0.4.0 | Bootstrap integriert |
| 0.5.0 | Erste Komponenten entwickelt |
| 1.0.0 | Erste stabile Version |

# Verwandte Dokumente

- [⚙️ TF-001 Github-Workflows](./tf-001-github-workflow.md)
- [⚙️ TF-004 Commit Cconvention](./tf-004-commit-convention.md)
- [⚙️ TF-006 Release Management](./tf-006-release-management.md)
