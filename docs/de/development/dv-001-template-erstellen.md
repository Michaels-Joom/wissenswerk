[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🛠️ Entwicklungsübersicht](./dv-000-entwicklunguebersicht.md)

---

# DV-001 Template erstellen

**Dokumenttyp:** Entwicklungsdokumentation  
**Projekt:** WissensWerk  
**Status:** Abgeschlossen  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Erstellung der technischen Grundlage für das WissensWerk-Template.

Das Template bildet die Basis für die weiteren Entwicklungsphasen und orientiert sich an der definierten Architektur des Projekts.

---

## Ausgangssituation

Das Projekt startet mit einer neuen Joomla-Installation und einem eigenständigen Template.

Auf ein Child-Template wird bewusst verzichtet.

> [!NOTE]
> [ADR-002 WissensWerk basiert auf einem eigenständigen Joomla-Template](../adr/adr-002-wissenswerk-eigenständigen-joomla-template.md)

---

## Installationsprinzip

Ziel der Erstinstallation ist eine möglichst vollständige Integration des Templates in Joomla.

Alle zur Installation erforderlichen Dateien, Sprachdateien, Assets und Metadaten werden bereits mit der ersten Version ausgeliefert.

Dadurch soll sichergestellt werden, dass die bei der Installation erforderlichen Strukturen vollständig vorhanden sind.

Nachträgliche Updates dienen der Weiterentwicklung und sollen keine fehlenden grundlegenden Installationsschritte kompensieren.

---

## Entwicklungscheckliste

Vor einer ersten Veröffentlichung bzw. Installation sollte geprüft werden:

```text
✔ templateDetails.xml vollständig
✔ joomla.asset.json vollständig
✔ Sprachdateien vorhanden
✔ Medienstruktur vorhanden
✔ Vorschaugrafik vorhanden
✔ installierte Assets registriert
✔ Modulpositionen definiert
✔ erforderliche Template-Dateien vorhanden
✔ Build-/Entwicklungsdateien nachvollziehbar
```

---

## Verzeichnisstruktur

Die grundlegende Template-Struktur befindet sich unter:

```text
wissenswerk/
│
├── media/
│   └── templates/
│       └── site/
│           └── wissenswerk/
│               ├── css/
│               ├── fonts/
│               ├── images/
│               ├── js/
│               ├── scss/
│               └── joomla.asset.json
│
├── language/
│   └── de-DE/
│
├── administrator/
│   └── language/
│       └── de-DE/
│
└── templates/
    └── wissenswerk/
        ├── html/
        ├── component.php
        ├── error.php
        ├── index.php
        ├── templateDetails.xml
        └── template_preview.png
```

Die projektbezogene Entwicklungsinfrastruktur liegt zusätzlich im Repository, unter anderem:

```text
package.json
package-lock.json
.vscode/
.gitignore
```

`node_modules/` wird nicht versioniert.

---

## Grunddateien

| Datei | Aufgabe |
|---|---|
| `index.php` | Einstiegspunkt des Templates |
| `component.php` | Darstellung ohne vollständigen Template-Chrome |
| `error.php` | Fehlerseiten |
| `templateDetails.xml` | Installation und Metadaten |
| `template_preview.png` | Vorschaugrafik im Backend |
| `joomla.asset.json` | Registrierung der Web Assets |

---

## Entwicklungsgrundsätze

Konfigurationsdateien werden nach funktionalen Bereichen gegliedert und dauerhaft nachvollziehbar gepflegt.

Joomla-Core-Dateien werden nicht verändert.

Bootstrap- und Vendor-Dateien werden nicht verändert.

Eigene Anpassungen erfolgen über:

- Template-Dateien
- SCSS
- JavaScript
- Joomla Web Asset API
- Overrides
- Modulpositionen
- vorgesehene Joomla-Schnittstellen

---

## Ergebnis

Nach Abschluss dieses Schrittes steht ein eigenständiges, lauffähiges Joomla-Template als technische Grundlage für WissensWerk bereit.

Die weitere Entwicklung erfolgt schrittweise auf Basis der Architektur-, Design- und technischen Grundlagen.

---

## Verwandte Dokumente

- [🏗️ AR-002 Template-Architektur](../architecture/ar-002-template-architektur.md)
- [⚙️ TF-000 Technische Grundlagen](../technical-foundation/tf-000-technische-grundlagen.md)
- [🛠️ DV-004 Git Workflow](./dv-004-git-workflow.md)

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliche Template-Grundlage erstellt. |
| 2.0 | 02.09.2026 | Dokument an die aktuelle Template-, Asset- und Entwicklungsstruktur angepasst. |
