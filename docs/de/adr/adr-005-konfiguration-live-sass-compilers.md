
adr-005 Konfiguration des Live Sass Compilers

# Erkenntnisse

Während der Einrichtung des Live Sass Compilers wurden verschiedene Konfigurationsvarianten untersucht und getestet.

## Begrenzung des Arbeitsbereichs

Die wichtigste Erkenntnis war, den Compiler nicht auf die gesamte Joomla-Installation anzusetzen, sondern den Arbeitsbereich gezielt auf das SCSS-Verzeichnis des Templates zu beschränken.

```json
"liveSassCompile.settings.forceBaseDirectory":
"/media/templates/site/wissenswerk/scss"
```

Dadurch werden ausschließlich die SCSS-Dateien des Templates überwacht.

Vorteile:

- höhere Performance
- geringerer Ressourcenverbrauch
- keine unbeabsichtigte Überwachung anderer Joomla-Verzeichnisse

## Ein Einstiegspunkt
Für WissensWerk wird bewusst nur eine SCSS-Datei kompiliert.

```text
template.scss
```

Alle weiteren Dateien werden als Partials eingebunden.

Dies verhindert die Erzeugung zahlreicher einzelner CSS-Dateien und schafft eine klar definierte Build-Struktur.

## Relative Ausgabe
Anstelle eines absoluten Zielpfades wird eine relative Ausgabe verwendet.

```json
"savePath": "~/../css"
```

Dadurch bleibt die Konfiguration unabhängig vom Projektnamen und kann leichter auf andere Joomla-Templates übertragen werden.

## Source Maps
Source Maps bleiben während der Entwicklung aktiviert.

Sie ermöglichen eine direkte Zuordnung zwischen den erzeugten CSS-Regeln und den ursprünglichen SCSS-Dateien innerhalb der Browser-Entwicklertools.

Dies erleichtert die Fehlersuche und beschleunigt die Entwicklung erheblich.

## Debugging
Für die Analyse des Compilers erwies sich der integrierte Trace-Modus als besonders hilfreich.
Die Ausgabe dokumentiert unter anderem:

- überwachte Dateien
- ausgeschlossene Dateien
- Partials
- Zielpfade
- Kompilierungsschritte

Dadurch lassen sich Konfigurationsfehler gezielt analysieren, ohne auf Vermutungen angewiesen zu sein.

## Projektentscheidung
Die gewählte Konfiguration wurde bewusst für WissensWerk entwickelt.

Ziel war nicht die maximale Anzahl möglicher Optionen, sondern eine einfache, nachvollziehbare und reproduzierbare Entwicklungsumgebung, die sich auf die Anforderungen eines Joomla-Templates konzentriert.
