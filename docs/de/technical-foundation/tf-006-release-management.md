[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [⚙️ Technische Grundlagen](./tf-000-technische-grundlagen.md)

---

# TF-006 Release Management

**Dokumenttyp:** Technische Grundlage  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Releases kennzeichnen definierte Entwicklungsstände des WissensWerk-Projekts.

Sie schaffen nachvollziehbare Meilensteine und fassen zusammengehörende Änderungen zu einem dokumentierten Projektstand zusammen.

---

## Grundprinzip

Nicht jeder Commit und nicht jede Dokumentationsänderung erzeugt ein Release.

Ein Release wird für einen bewusst definierten Projektstand erstellt.

Typische Anlässe sind:

- abgeschlossene Entwicklungsabschnitte
- wesentliche neue Funktionen
- größere Architekturänderungen
- stabile Meilensteine
- veröffentlichungsreife Projektstände

---

## Release und Version

Projektversion und Dokumentversion werden getrennt betrachtet.

```text
Dokumentversion
  → Version eines einzelnen Dokuments

Projektversion
  → Version des WissensWerk-Projekts

Release
  → definierter Projektstand
```

Eine Änderung an einem einzelnen Dokument führt daher nicht automatisch zu einer neuen Projektversion.

---

## Release-Inhalt

Ein Release sollte mindestens nachvollziehbar machen:

- Version
- Entwicklungsstand
- neue Funktionen
- Änderungen
- Fehlerkorrekturen
- wesentliche Architekturänderungen
- bekannte Einschränkungen, sofern vorhanden

---

## Beispiel

```text
Version 0.5.0

Added
- Navigation mit MetisMenu fertiggestellt
- Offcanvas-Navigation integriert

Changed
- Navigation visuell an das Designsystem angepasst
- Dokumentation aktualisiert

Fixed
- horizontales Überlaufen des Offcanvas beseitigt
```

---

## Release-Zeitpunkt

Ein Release wird erstellt, wenn ein sinnvoller Entwicklungsmeilenstein erreicht wurde.

Kleine Einzeländerungen werden nicht künstlich zu Releases zusammengefasst.

---

## GitHub

GitHub dient als zentrale Ablage der Projektversionierung.

Releases können dort anhand definierter Projektstände dokumentiert werden.

Die konkrete Release-Erstellung erfolgt erst, wenn ein entsprechender Meilenstein erreicht wurde.

---

## Aktueller Entwicklungsstand

WissensWerk befindet sich weiterhin in aktiver Entwicklung.

Die bisher erstellten Git-Commits dokumentieren den laufenden Entwicklungsprozess.

Ein stabiler Release-Zyklus wird erst dann verbindlich eingeführt, wenn die dafür erforderlichen Projektmeilensteine definiert sind.

---

## Verwandte Dokumente

- [⚙️ TF-001 GitHub Workflow](./tf-001-github-workflow.md)
- [⚙️ TF-002 Issue Management](./tf-002-issue-management.md)
- [⚙️ TF-004 Commit Convention](./tf-004-commit-convention.md)
- [⚙️ TF-007 Versionierung](./tf-007-versionierung.md)

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliches Release-Konzept erstellt. |
| 2.0 | 02.09.2026 | Release- und Projektversionierung klar voneinander getrennt und an den aktuellen Entwicklungsstand angepasst. |
