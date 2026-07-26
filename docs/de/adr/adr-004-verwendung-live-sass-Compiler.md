
# ADR-004 Verwendung des Live Sass Compilers

| Attribut | Wert |
|----------|------|
| **Status** | Akzeptiert |
| **Datum** | 26.07.2026 |
| **Autor** | WissensWerk |
| **Betrifft** | Entwicklungsumgebung, Build-Prozess |
| **Referenzen** | AR-012 Build-Prozess, AR-013 Entwicklungsumgebung, DV-005 Live Sass Compiler |

## Kontext

Für die Templateentwicklung werden SCSS-Dateien verwendet.

Es musste entschieden werden, mit welchem Werkzeug die SCSS-Dateien während der Entwicklung in CSS kompiliert werden.

Grundsätzlich kommen verschiedene Lösungen infrage:

- Live Sass Compiler (Visual Studio Code)
- Dart Sass (CLI)
- npm Build-Prozess
- Vite
- Webpack
- Gulp

Für WissensWerk stehen jedoch nicht möglichst viele Build-Funktionen im Vordergrund, sondern eine einfache, nachvollziehbare und reproduzierbare Entwicklungsumgebung.

# Entscheidung
Für WissensWerk wird der **Live Sass Compiler (Glenn Marks)** als Standardwerkzeug für die SCSS-Kompilierung verwendet.

Die Konfiguration erfolgt projektbezogen über eine Datei

```text
.vscode/settings.json
```

Dadurch erhält jeder Entwickler innerhalb des Projekts dieselben Compiler-Einstellungen.

# Begründung
Die Entscheidung basiert auf folgenden Kriterien.

## Einfache Entwicklungsumgebung

Der Compiler integriert sich direkt in Visual Studio Code.
Es sind keine zusätzlichen Build-Werkzeuge oder Paketmanager erforderlich.
Dadurch reduziert sich die Komplexität der Entwicklungsumgebung erheblich.

## Geringe Einstiegshürde

Für neue Entwickler genügt:

1. Repository öffnen
2. Erweiterung installieren
3. Watch-Modus starten

Weitere Werkzeuge oder Build-Prozesse müssen nicht eingerichtet werden.

## Ausreichender Funktionsumfang
Der Live Sass Compiler unterstützt alle für WissensWerk erforderlichen Funktionen:

- automatische Kompilierung
- Source Maps
- Autoprefixer
- projektbezogene Konfiguration
- Partials
- individuelle Zielpfade

Damit werden sämtliche Anforderungen des Templates erfüllt.

## Wartbarkeit
Die gesamte Konfiguration befindet sich innerhalb des Projekts.
Persönliche Visual-Studio-Code-Einstellungen bleiben davon unberührt.
Dadurch entsteht eine reproduzierbare Entwicklungsumgebung.

## Verwendete Build-Strategie
Der Compiler wird bewusst auf das Template beschränkt.

## Arbeitsverzeichnis
Die Überwachung erfolgt ausschließlich innerhalb des SCSS-Verzeichnisses.
Dadurch wird verhindert, dass die komplette Joomla-Installation überwacht wird.

## Einstiegspunkt

Es wird ausschließlich

```text
template.scss
```

kompiliert.

Alle weiteren SCSS-Dateien werden als Partials eingebunden.

Dadurch entsteht genau eine CSS-Datei.

```text
template.css
```

## Relative Ausgabe

Die CSS-Dateien werden relativ zum SCSS-Verzeichnis erzeugt.

Dadurch bleibt die Konfiguration unabhängig vom Projektnamen und kann problemlos wiederverwendet werden.

## Source Maps
Während der Entwicklung bleiben Source Maps aktiviert.
Dadurch können Browser-Entwicklertools direkt auf die ursprünglichen SCSS-Dateien verweisen.
Dies erleichtert die Fehlersuche erheblich.

## Autoprefixer
Der integrierte Autoprefixer bleibt aktiviert.
Browserpräfixe werden automatisch ergänzt.
Der SCSS-Code bleibt dadurch übersichtlich und wartbar.

# Betrachtete Alternativen

## Dart Sass (CLI)

### Vorteile

- offizieller Sass-Compiler
- sehr hohe Flexibilität
- unabhängig von Visual Studio Code

### Nachteile

- zusätzliche Installation
- Kommandozeilenwerkzeug
- höherer Einrichtungsaufwand

Für WissensWerk derzeit nicht erforderlich.

## npm Build-Prozess

### Vorteile

- professioneller Standard
- beliebig erweiterbar

### Nachteile

- Node.js erforderlich
- zusätzliche Abhängigkeiten
- komplexere Projektstruktur

Für die Anforderungen des Projekts derzeit nicht notwendig.

## Vite / Webpack

### Vorteile

- moderne Frontend-Toolchains
- umfangreiche Optimierungen

### Nachteile

- deutlich höhere Komplexität
- erheblicher Konfigurationsaufwand
- für ein Joomla-Template überdimensioniert

## Konsequenzen

### Vorteile

- einfache Entwicklungsumgebung
- reproduzierbare Konfiguration
- geringe Einstiegshürde
- keine zusätzlichen Build-Werkzeuge
- vollständige Integration in Visual Studio Code

### Nachteile
- Abhängigkeit von Visual Studio Code
- geringerer Funktionsumfang gegenüber vollständigen Build-Systemen

Diese Nachteile werden für WissensWerk bewusst in Kauf genommen.

## Überprüfung
Die Entscheidung sollte überprüft werden, falls künftig mindestens einer der folgenden Punkte eintritt:

- JavaScript-Build-Prozesse werden erforderlich.
- Mehrere CSS-Bundles müssen erzeugt werden.
- Deployment-Prozesse benötigen automatisierte Build-Schritte.
- Die Projektgröße überschreitet die Möglichkeiten des Live Sass Compilers.

In diesem Fall ist eine erneute Bewertung von Dart Sass oder einer modernen Build-Toolchain sinnvoll.

## Fazit
Der Live Sass Compiler erfüllt die Anforderungen des WissensWerk-Projekts vollständig.

Die Entscheidung unterstützt das Projektziel einer einfachen, verständlichen und wartbaren Joomla-Entwicklungsumgebung und vermeidet bewusst unnötige technische Komplexität.
