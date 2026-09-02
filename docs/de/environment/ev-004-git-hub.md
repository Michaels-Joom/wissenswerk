[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [💻 Entwicklungsumgebung – Übersicht](./ev-000-entwicklungsumgebung-uebersicht.md)

---

# EV-004 GitHub

**Dokumenttyp:** Entwicklungsumgebung  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## 1. Ziel

Dieses Dokument beschreibt den Einsatz von GitHub als Remote-Repository und zentrale Plattform für das WissensWerk-Projekt.

GitHub ergänzt die lokale Versionsverwaltung mit Git um einen zentralen Speicherort für Quellcode und Dokumentation.

---

## 2. Architekturentscheidung

Die Aufgaben sind klar getrennt:

```text
Visual Studio Code
        ↓
Git
        ↓
lokales Repository
        ↓
Push
        ↓
GitHub
        ↓
Remote-Repository
```

Git bleibt für die lokale Versionsverwaltung zuständig.

GitHub übernimmt die zentrale Speicherung und Sicherung des Repositorys.

---

## 3. Repository

Das WissensWerk-Projekt verwendet ein eigenes GitHub-Repository:

```text
wissenswerk
```

Die Entwicklung erfolgt lokal.

Nach erfolgreicher Prüfung werden abgeschlossene Änderungen nach GitHub übertragen.

Der aktuelle Entwicklungsbranch ist:

```text
main
```

---

## 4. Verbindung mit Git

Ein lokales Repository kann mit GitHub verbunden werden über:

```bash
git remote add origin https://github.com/<Benutzername>/wissenswerk.git
```

Die bestehende Verbindung wird geprüft mit:

```bash
git remote -v
```

Für das konkrete Projekt ist die Repository-Konfiguration bereits eingerichtet.

---

## 5. Erster Push

Bei einer neuen lokalen Repository-Verbindung erfolgt der erste Push beispielsweise mit:

```bash
git push -u origin main
```

Danach genügt im normalen Workflow:

```bash
git push
```

---

## 6. Aktueller Workflow

Der praktische Ablauf lautet:

```text
lokale Änderung
      ↓
Test
      ↓
Build / Prüfung
      ↓
Git Commit
      ↓
Git Push
      ↓
GitHub
```

GitHub wird nicht als primärer Editor verwendet.

Die Entwicklung und Dokumentation erfolgen lokal in Visual Studio Code.

---

## 7. GitHub als Sicherung

GitHub dient neben der Veröffentlichung auch als zentrale Sicherung des versionierten Entwicklungsstands.

Dabei ist zu unterscheiden:

```text
lokale Arbeitskopie
        +
lokales Git-Repository
        +
GitHub Remote
```

Ein Push stellt sicher, dass der lokale Commit auch im Remote-Repository vorhanden ist.

---

## 8. Dokumentation

Die Projektdokumentation wird gemeinsam mit dem Quellcode versioniert.

Dazu gehören insbesondere:

- Architektur
- Designsystem
- Entwicklungsdokumentation
- technische Grundlagen
- ADRs
- Projektinformationen

Dadurch bleibt nachvollziehbar, welche Dokumentation zu welchem Entwicklungsstand gehört.

---

## 9. GitHub Web Editor

Der GitHub-Webeditor gehört nicht zum regulären Entwicklungsworkflow.

Die lokale Bearbeitung wird bevorzugt, weil dadurch:

- Änderungen vor dem Commit vollständig geprüft werden können
- mehrere Dateien gemeinsam geändert werden können
- interne Links kontrollierbar bleiben
- Buildprozesse lokal ausgeführt werden können
- Commits thematisch sauber erstellt werden können

Kleine Ausnahmeänderungen direkt auf GitHub sind technisch möglich, gehören aber nicht zum Standardprozess.

---

## 10. Sicherheit

Nicht in das Repository gehören:

- Passwörter
- Zugangsdaten
- API-Schlüssel
- lokale Geheimnisse
- produktive Datenbank-Backups
- lokale Konfigurationsdateien mit vertraulichen Angaben

Diese Informationen müssen außerhalb des Repositorys verwaltet werden.

---

## 11. Geplante GitHub-Funktionen

Je nach weiterer Entwicklung können zusätzlich genutzt werden:

- Issues
- Milestones
- Projects
- Releases
- GitHub Actions
- GitHub Pages

Diese Funktionen sind nicht zwingender Bestandteil des aktuellen Entwicklungsworkflows.

---

## 12. Veröffentlichung

Die Tatsache, dass GitHub als Remote-Repository verwendet wird, bedeutet nicht automatisch, dass das Projekt öffentlich veröffentlicht wird.

Die Sichtbarkeit des Repositorys richtet sich nach dem jeweiligen Projektstand und der späteren Veröffentlichungsentscheidung.

---

## 13. Bezugsquellen

- [GitHub](https://github.com/)
- [GitHub Dokumentation](https://docs.github.com/)
- [GitHub Skills](https://skills.github.com/)

---

## 14. Ergebnis

GitHub bildet die zentrale Remote-Ebene der WissensWerk-Versionsverwaltung.

Zusammen mit Git entsteht ein klarer Workflow:

```text
Entwicklung
   ↓
Git
   ↓
Commit
   ↓
Push
   ↓
GitHub
```

Damit sind Quellcode und Dokumentation zentral gesichert und über die Git-Historie nachvollziehbar versioniert.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliche GitHub-Dokumentation erstellt. |
| 2.0 | 02.09.2026 | Dokument an den aktuellen Git-/GitHub-Workflow angepasst, lokale Entwicklung und Remote-Funktion klar getrennt und veraltete Aussagen zur geplanten Repository-Einrichtung entfernt. |
