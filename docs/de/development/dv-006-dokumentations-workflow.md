[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🛠️ Entwicklungsübersicht](./dv-000-entwicklunguebersicht.md)

---

# DV-006 Dokumentations-Workflow

**Dokumenttyp:** Entwicklungsdokumentation  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Dieses Dokument beschreibt den Workflow zur Erstellung, Pflege und Versionierung der Projektdokumentation.

Ziel ist eine konsistente, nachvollziehbare und wartbare Dokumentation mit einer sauberen Git-Historie.

---

## Grundsatz

Die Projektdokumentation wird lokal innerhalb der Projektstruktur erstellt und gepflegt.

GitHub dient als zentrales Remote-Repository und zur Versionsverwaltung.

Dokumentation wird grundsätzlich wie Quellcode behandelt.

---

## Entwicklungsumgebung

Die Dokumentation wird insbesondere mit folgenden Werkzeugen erstellt:

- Visual Studio Code
- Markdown
- Git
- GitHub

Alle Dokumente befinden sich innerhalb der Projektstruktur.

---

## Dokumentationsstruktur

Die Dokumentation ist thematisch gegliedert, unter anderem in:

```text
docs/
├── adr/
├── architecture/
├── design-system/
├── development/
├── documentation-guidelines/
├── environment/
├── manifest/
├── project-management/
├── project-philosophy/
├── roadmap/
├── technical-foundation/
└── troubleshooting/
```

Die konkrete Struktur wird über die Dokumentationsübersicht und das Inhaltsverzeichnis nachvollziehbar gehalten.

---

## Workflow

### 1. Dokument erstellen oder bearbeiten

Änderungen erfolgen lokal in Visual Studio Code.

Dabei gelten:

- Dokumentationsrichtlinien
- Namenskonventionen
- Verzeichnisstruktur
- Markdown-Konventionen

---

### 2. Inhalt prüfen

Vor dem Commit wird geprüft:

- fachliche Aktualität
- Vollständigkeit
- Markdown-Formatierung
- Dateiname
- Verzeichnis
- interne Verlinkungen
- Versionsstand des Dokuments

---

### 3. Bezug zur tatsächlichen Entwicklung prüfen

Dokumentation soll den tatsächlichen Projektstand beschreiben.

Wenn eine Architekturentscheidung praktisch verändert wurde, müssen die betroffenen Dokumente ebenfalls geprüft werden.

Beispiele:

```text
Implementierung geändert
        ↓
Architektur prüfen
        ↓
Designsystem prüfen
        ↓
Entwicklungsdokumentation prüfen
```

---

### 4. Commit

Zusammengehörige Dokumentationsänderungen werden in einem gemeinsamen Commit zusammengefasst.

Commit-Nachrichten folgen Conventional Commits.

Beispiel:

```text
docs(architecture): update navigation architecture
```

---

### 5. Push

Nach erfolgreichem Commit werden die Änderungen nach GitHub übertragen.

```bash
git push
```

---

## GitHub Web Editor

Der GitHub-Webeditor wird für die reguläre Dokumentation nicht verwendet.

Die lokale Bearbeitung ermöglicht:

- globale Suche
- gleichzeitige Änderungen mehrerer Dokumente
- Prüfung interner Links
- direkte Git-Integration
- konsistente Commits

Ausnahmen sind möglich, beispielsweise bei kleinen Notfallkorrekturen.

---

## Dokumentversionen

Dokumente besitzen eine eigene Versionshistorie.

Eine Dokumentversion beschreibt die Entwicklung des jeweiligen Dokuments.

Sie ist nicht automatisch identisch mit der Projektversion.

---

## Qualitätssicherung

Vor dem Commit sollte geprüft werden:

```text
☐ Inhalt aktuell
☐ Struktur korrekt
☐ Links korrekt
☐ Dateiname korrekt
☐ Version / Stand aktualisiert
☐ keine veralteten Aussagen
☐ Commit-Nachricht korrekt
```

---

## Zusammenhang mit Architekturentscheidungen

Wesentliche Änderungen werden bei Bedarf zusätzlich in ADR-Dokumenten festgehalten.

Die Dokumentation soll dabei nicht widersprüchliche Parallelstände erzeugen.

---

## Zusammenfassung

```text
Dokument erstellen / bearbeiten
            ↓
Inhalt prüfen
            ↓
Projektstand abgleichen
            ↓
Links / Struktur prüfen
            ↓
Git Commit
            ↓
Git Push
            ↓
GitHub
```

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprünglichen Dokumentationsworkflow erstellt. |
| 2.0 | 02.09.2026 | Workflow an die aktuelle Dokumentationsstruktur, Dokumentversionierung und den aktuellen Git-/Conventional-Commit-Prozess angepasst. |
