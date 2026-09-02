[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [⚙️ Technische Grundlagen](./tf-000-technische-grundlagen.md)

---

# TF-007 Versionierung

**Dokumenttyp:** Technische Grundlage  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Eine einheitliche Versionierung ermöglicht es, Entwicklungsstände eindeutig zu kennzeichnen und Änderungen nachvollziehbar zu dokumentieren.

WissensWerk unterscheidet dabei zwischen Dokumentversionen und der Version des Gesamtprojekts.

---

## Semantic Versioning

Für die Projektversion verwendet WissensWerk **Semantic Versioning (SemVer)**:

```text
MAJOR.MINOR.PATCH
```

Beispiel:

```text
1.4.2
```

---

## MAJOR

Die MAJOR-Version erhöht sich bei grundlegenden, nicht kompatiblen Änderungen.

Beispiele:

- grundlegende Architekturänderung
- nicht abwärtskompatible Änderung
- vollständige Neuausrichtung des Templates
- neuer Hauptentwicklungsstand

```text
1.0.0 → 2.0.0
```

---

## MINOR

Die MINOR-Version erhöht sich bei neuen, funktional relevanten Erweiterungen innerhalb der bestehenden Hauptarchitektur.

Beispiele:

- neue Templatefunktion
- neue wesentliche Komponente
- größere funktionale Erweiterung
- abgeschlossener bedeutender Entwicklungsabschnitt

```text
1.2.0 → 1.3.0
```

Eine reine Dokumentationsänderung erzeugt nicht automatisch eine neue MINOR-Version.

---

## PATCH

Die PATCH-Version erhöht sich bei kleinen, rückwärtskompatiblen Korrekturen.

Beispiele:

- Fehlerkorrekturen
- kleinere Optimierungen
- interne Bereinigungen
- kleinere technische Anpassungen

```text
1.3.2 → 1.3.3
```

---

## Entwicklungsphase

Während der aktiven Entwicklung kann WissensWerk eine führende `0` verwenden:

```text
0.1.0
0.2.0
0.3.0
```

Die `0` kennzeichnet einen noch nicht als stabil erklärten Projektstand.

Die erste stabile Projektversion kann mit:

```text
1.0.0
```

beginnen.

---

## Dokumentversionen

Die einzelnen Dokumente besitzen eine eigene Versionshistorie.

Beispiel:

```text
AR-016
Version 2.0
```

Eine Aktualisierung eines Dokuments bedeutet daher nicht automatisch eine Änderung der Gesamtversion des Projekts.

---

## Releases

Eine Projektversion wird im Zusammenhang mit einem definierten Release verwendet.

Grundprinzip:

```text
Änderungen
    ↓
Commits
    ↓
definierter Projektstand
    ↓
Projektversion / Release
```

---

## Changelog

Ein Changelog beschreibt die Änderungen zwischen Projektversionen.

Es kann insbesondere enthalten:

- Added
- Changed
- Fixed
- Removed
- technische oder architektonische Änderungen

Die Dokumentversionen werden zusätzlich in den jeweiligen Dokumenten über ihre Änderungshistorie gepflegt.

---

## Grundregeln

- Projektversionen folgen SemVer.
- Dokumente besitzen eigene Versionsstände.
- Dokumentänderungen führen nicht automatisch zu einer neuen Projektversion.
- Releases kennzeichnen definierte Projektstände.
- MAJOR, MINOR und PATCH werden nach der beschriebenen SemVer-Logik vergeben.
- Änderungen sollen nachvollziehbar dokumentiert werden.

---

## Beispiele

| Version | Bedeutung |
|---|---|
| `0.1.0` | Projektstart |
| `0.2.0` | grundlegende Designsystem-Grundlage |
| `0.3.0` | Template-Skeleton |
| `0.4.0` | Bootstrap-Integration |
| `0.5.0` | wesentliche Navigation / Offcanvas-Entwicklung |
| `1.0.0` | erster stabiler Gesamtstand |

Die Beispiele beschreiben mögliche Entwicklungsstände und sind keine bereits festgelegten historischen Releases.

---

## Verwandte Dokumente

- [⚙️ TF-001 GitHub Workflow](./tf-001-github-workflow.md)
- [⚙️ TF-004 Commit Convention](./tf-004-commit-convention.md)
- [⚙️ TF-006 Release Management](./tf-006-release-management.md)

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliche Versionierungsregeln erstellt. |
| 2.0 | 02.09.2026 | Projekt-, Dokument- und Release-Versionierung getrennt und an den aktuellen Entwicklungsprozess angepasst. |
