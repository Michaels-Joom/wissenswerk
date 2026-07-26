[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [💻 Entwicklungs Umgebungs Übersicht](./ev-000-entwicklungsumgebung-uebersicht.md)

---

# EV-003 Visual Studio Code

## Ziel

Dieses Dokument beschreibt den Einsatz von Visual Studio Code als zentrale Entwicklungsumgebung für das Projekt **WissensWerk**.

Neben der Installation werden die Gründe für die Auswahl, die verwendeten Erweiterungen sowie die projektbezogene Konfiguration dokumentiert. Ziel ist eine einheitliche Entwicklungsumgebung für alle Quelltexte, Konfigurationsdateien und die Projektdokumentation.

## Hintergrund
Die Entwicklung eines Joomla-Templates umfasst verschiedene Technologien und Dateiformate, darunter:

- PHP
- HTML
- SCSS
- CSS
- JavaScript
- JSON
- XML
- Markdown

Ein moderner Quellcode-Editor sollte diese Technologien zuverlässig unterstützen und sich flexibel an unterschiedliche Projektanforderungen anpassen lassen.

Für WissensWerk wurde daher **Visual Studio Code** als Standardeditor ausgewählt.

## Architekturentscheidung
Visual Studio Code bildet die zentrale Entwicklungsumgebung für sämtliche Projektdateien.
Die Auswahl erfolgte aufgrund folgender Eigenschaften.

| Kriterium | Bewertung |
|-----------|-----------|
| Kostenlos | ✔ |
| Plattformübergreifend | ✔ |
| Erweiterbar | ✔ |
| Git-Unterstützung | ✔ |
| Integriertes Terminal | ✔ |
| Große Community | ✔ |
| Markdown-Unterstützung | ✔ |
| Gute PHP-Unterstützung | ✔ |
| SCSS-Unterstützung | ✔ |

### Entscheidung
Für WissensWerk wird Visual Studio Code als Standardeditor verwendet.
Alle Quelltexte und Dokumentationen werden innerhalb dieser Entwicklungsumgebung erstellt und gepflegt.

## Bezugsquellen
Visual Studio Code wird ausschließlich aus offiziellen Quellen bezogen.

### Offizielle Webseite

https://code.visualstudio.com/

### Dokumentation

https://code.visualstudio.com/docs

### Marketplace

https://marketplace.visualstudio.com/vscode

## Installation
- Die Installation erfolgt über den offiziellen Installer.
- Nach der Installation sollte Visual Studio Code einmal gestartet werden.
- Es werden keine projektspezifischen Änderungen während der Installation vorgenommen.

## Grundeinrichtung
Nach der Installation werden folgende Einstellungen empfohlen:
- Automatische Updates aktivieren
- Deutsche Oberfläche (optional)
- Automatisches Speichern aktivieren
- Integriertes Terminal verwenden
- Git-Unterstützung aktivieren

## Projektkonfiguration
Das Projekt wird als Ordner in Visual Studio Code geöffnet.

```text
WissensWerk
│
├── administrator
├── media
├── templates
├── docs
├── .gitignore
└── README.md
```

Visual Studio Code erkennt die Projektstruktur automatisch.

## Verwendete Erweiterungen
Für WissensWerk werden folgende Erweiterungen empfohlen.

| Erweiterung | Zweck |
|--------------|-------|
| PHP Intelephense | PHP-Unterstützung |
| GitLens | Git-Integration |
| EditorConfig | Einheitliche Formatierung |
| Markdown All in One | Dokumentation |
| XML Tools | XML-Dateien |
| JSON | JSON-Unterstützung |
| Live Sass Compiler* | SCSS-Kompilierung |

> [!NOTE]
> Der Einsatz des Live Sass Compilers wird in einem späteren Dokument zur Build-Umgebung näher erläutert.

## Integration in WissensWerk
Visual Studio Code bildet den zentralen Arbeitsplatz für die Entwicklung.

```text
Visual Studio Code
        │
        ├── Joomla
        ├── Git
        ├── GitHub
        ├── SCSS
        ├── Dokumentation
        └── Terminal
```

Alle Änderungen am Projekt erfolgen innerhalb dieser Entwicklungsumgebung.

## Best Practices
Für WissensWerk gelten folgende Empfehlungen:
- Das gesamte Projekt als Arbeitsbereich öffnen.
- Erweiterungen nur bei tatsächlichem Bedarf installieren.
- Formatierung konsistent halten.
- Das integrierte Terminal verwenden.
- Git-Änderungen regelmäßig prüfen.
- Dokumentation und Quellcode gemeinsam pflegen.

## Weiterführende Dokumente

- [💻 EV-001 Laragon](./ev-001-laragon.md)
- [💻 EV-003 Git](./ev-003-git.md)
- [💻 EV-004 Git Hub](./ev-004-git-hub.md)
- DV-001 Template erstellen

## Fazit
Visual Studio Code bildet den zentralen Arbeitsplatz für die Entwicklung von WissensWerk.
Durch seine Erweiterbarkeit, die integrierte Git-Unterstützung und die Unterstützung aller im Projekt verwendeten Technologien bietet der Editor eine einheitliche und leistungsfähige Entwicklungsumgebung.

Die dokumentierte Konfiguration stellt sicher, dass alle Projektbeteiligten unter vergleichbaren Bedingungen arbeiten und die Entwicklungsumgebung jederzeit reproduzierbar eingerichtet werden kann.
