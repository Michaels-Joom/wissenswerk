[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md)  [🛠️ Entwicklungsübersicht](./dv-000-entwicklunguebersicht.md)

---

# DV-005 Live Sass Compiler

## Ziel
Der Live Sass Compiler dient der automatischen Kompilierung der SCSS-Dateien des WissensWerk-Templates während der Entwicklung.

Die Konfiguration verfolgt das Ziel, ausschließlich die für das Template relevanten Dateien zu überwachen und eine reproduzierbare Entwicklungsumgebung bereitzustellen.


## Architekturentscheidung
Für WissensWerk wird bewusst der **Live Sass Compiler (Glenn Marks)** verwendet.

Gründe:

- einfache Integration in Visual Studio Code
- keine zusätzliche Node.js- oder npm-Infrastruktur erforderlich
- geringe Einstiegshürde
- zuverlässiger Betrieb während der Templateentwicklung

Der Compiler ist Bestandteil der Entwicklungsumgebung und wird projektbezogen über eine `.vscode/settings.json` konfiguriert.

## Source Maps
Während der Entwicklung bleiben Source Maps bewusst aktiviert.
Dadurch können die Browser-Entwicklertools die kompilierten CSS-Regeln direkt den ursprünglichen SCSS-Dateien und Zeilennummern zuordnen.

Dies erleichtert:

- die Fehlersuche
- die Analyse von Layoutproblemen
- die Navigation zwischen Browser und Quellcode

Source Maps sind ausschließlich für die Entwicklungsumgebung vorgesehen.
Für Release-Versionen erfolgt die Auslieferung ohne Source Maps und mit minifiziertem CSS.

## Projektstruktur

```text
media/
└── templates/
    └── site/
        └── wissenswerk/
            ├── css/
            ├── fonts/
            ├── images/
            ├── js/
            └── scss/
                └── template.scss
```

## Kompilierungsstrategie
WissensWerk verwendet genau **eine Einstiegspunkt-Datei**.

```text
template.scss
```

Alle weiteren SCSS-Dateien werden als Partials eingebunden.

Beispiel:

```scss
@use "abstracts/variables";
@use "layout/header";
@use "components/buttons";
```

Dadurch entsteht ausschließlich

```text
template.css
template.css.map
```

Weitere CSS-Dateien werden nicht erzeugt.

## Einstellungen

Die Konfiguration erfolgt über

```text
.vscode/settings.json
```

Wesentliche Einstellungen:

| Einstellung | Zweck |
|-------------|------|
| forceBaseDirectory | begrenzt die Überwachung auf das Template |
| includeItems | überwacht ausschließlich `template.scss` |
| savePath | schreibt CSS in den Ordner `css` |
| generateMap | erzeugt Source Maps |
| compileOnWatch | automatische Kompilierung beim Speichern |
| autoprefix | automatische Browserpräfixe |

## forceBaseDirectory

```json
"liveSassCompile.settings.forceBaseDirectory":
"/media/templates/site/wissenswerk/scss"
```

Der Compiler durchsucht ausschließlich das SCSS-Verzeichnis des Templates.
Die Joomla-Installation wird dadurch nicht überwacht.

Vorteile:

- höhere Performance
- keine unnötigen Dateiscans
- eindeutiger Arbeitsbereich

---

## includeItems

```json
"/template.scss"
```

Der Compiler überwacht ausschließlich die Einstiegspunkt-Datei.
Partials werden automatisch berücksichtigt.

## savePath

```json
"~/../css"
```

Die Ausgabe erfolgt relativ zur SCSS-Datei.

```
scss/template.scss
        ↓
css/template.css
```

Diese Einstellung ist unabhängig vom Projektnamen.

---

## Source Maps
Source Maps bleiben während der Entwicklung aktiviert.
Dadurch zeigen die Browser-Entwicklertools direkt auf die ursprünglichen SCSS-Dateien.
Dies erleichtert Fehlersuche und Entwicklung erheblich.

## Autoprefixer

Der Autoprefixer ist aktiviert.
Browserpräfixe werden automatisch ergänzt.
Dadurch bleibt der SCSS-Code sauber und wartbar.

## Debugging
Zur Analyse des Compilers können folgende VS-Code-Befehle verwendet werden:

- Live SASS: Get all included files
- Live SASS: Check file will be included
- Live SASS: Open Live Sass Output Window

Für eine detaillierte Analyse empfiehlt sich der Log-Level

```
Trace
```

## Fazit
Die gewählte Konfiguration verfolgt das Ziel, den Live Sass Compiler auf das WissensWerk-Template zu beschränken.

Dadurch werden ausschließlich die relevanten SCSS-Dateien verarbeitet und eine reproduzierbare, wartbare Entwicklungsumgebung geschaffen.
