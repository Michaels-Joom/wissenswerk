[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [🛠️ Entwicklungsübersicht](./dv-000-entwicklunguebersicht.md)

---

# DV-001 Template erstellen

## Ziel

Erstellung der technischen Grundlage für das WissensWerk-Template. Das Template bildet die Basis für alle weiteren Entwicklungsschritte und orientiert sich an der definierten Architektur des Projekts.

## Installationsprinzip

> Ziel der Erstinstallation ist eine möglichst vollständige Integration des Templates in Joomla. Alle zur Installation erforderlichen Dateien, Sprachdateien, Assets und
> Metadaten werden bereits mit der ersten Version ausgeliefert. Dadurch wird sichergestellt, dass alle während der Installation angelegten Datenbankeinträge vollständig
> erstellt werden. Nachträgliche Updates dienen der Weiterentwicklung und ersetzen keine fehlenden Installationsschritte.

## Für die Entwicklung bedeutet das praktisch
Vor der ersten Veröffentlichung bzw. Installation sollte anhand dieser Checkliste sichergestellt werden, dass alle erforderlichen Bestandteile vollständig integriert sind. Dies vermeidet wiederholte Deinstallationen und reduziert das Risiko manueller Datenbankeingriffe, die aufgrund nachträglich nicht über Updates übertragbarer Installationsdaten erforderlich werden könnten.

```
    ✔ templateDetails.xml vollständig
    ✔ joomla.asset.json vollständig
    ✔ Sprachdateien (Site und Administrator)
    ✔ Medienstruktur (media/templates/...)
    ✔ Vorschaugrafik
    ✔ Alle installierten Assets registriert
    ✔ Alle Positionen definiert
    ✔ Alle erforderlichen Dateien vorhanden
```

## Ausgangssituation
Das Projekt startet mit einer neuen Joomla-Installation und einem eigenständigen Template. Auf ein Child-Template wird bewusst verzichtet.

> [!NOTE]
> [ADR-002 WissensWerk basiert auf einem eigenständigen Joomla-Template](../adr/adr-002-wissenswerk-eigenständigen-joomla-template.md)

## Entwicklungsrichtlinien
Jede XML-Datei (Manifest, Assets, Erweiterungen) wird vollständig und explizit definiert. Auf implizite Standardannahmen wird bewusst verzichtet. Dadurch bleibt das Verhalten bei Installation, Aktualisierung und Deinstallation jederzeit nachvollziehbar.

Konfigurationsdateien werden nach funktionalen Bereichen gegliedert und dauerhaft in dieser Reihenfolge geführt. Neue Einträge werden im passenden Abschnitt ergänzt. Neue Abschnitte werden nur eingeführt, wenn ein funktionaler Bereich entsteht.


## Verzeichnisstruktur
Das Template wird im Joomla-Templateverzeichnis angelegt. 
Die Verzeichnisstruktur folgt der zuvor definierten Projektarchitektur

```
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
|               └── joomla.asset.json
|
│
├── language/
│   └── de-DE/
│       ├── tpl_wissenswerk.ini
│       └── tpl_wissenswerk.sys.ini
│
├── administrator/
│   └── language/
│       └── de-DE/
│           ├── tpl_wissenswerk.ini
│           └── tpl_wissenswerk.sys.ini
│
└── templates/
    └── wissenswerk/
        ├── html/
        │
        ├── component.php
        ├── error.php
        ├── index.php
        ├── templateDetails.xml
        └── template_preview.png
```

## Grunddateien

| Datei                  | BeschreibungKopfzeile            |
|------------------------|----------------------------------|
| index.php	             | Einstiegspunkt des Templates     | 
| component.php          | Darstellung ohne Template-Chrome |
| error.php             |	Fehlerseiten | Fehlerseiten     |
| templateDetails.xml    | Installation und Metadaten       |
| template_preview.png	 | Vorschaugrafik im Backend        |
| joomla.asset.json      | 	Registrierung der Web Assets    |

## Verwandte Dokumente
- [TF-004 Commit Convention](./dv-004-git-workflow.md)

## Ergebnis
Nach Abschluss dieses Schrittes steht ein lauffähiges Joomla-Template als technische Grundlage für WissensWerk bereit. Die weitere Entwicklung erfolgt schrittweise auf Basis der definierten Architektur und des Designsystems.

