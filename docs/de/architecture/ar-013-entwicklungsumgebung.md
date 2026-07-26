[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-013 Entwicklungsumgebung

## Zweck

Dieses Dokument beschreibt die Entwicklungsumgebung des Projekts. Es definiert die Werkzeuge und Technologien, die für die Entwicklung, Versionsverwaltung und den Build-Prozess verwendet werden.

# 1. Architekturentscheidung
Für die Entwicklung des Templates wird eine einheitliche Entwicklungsumgebung verwendet.
Alle Entwicklungsarbeiten erfolgen innerhalb dieser Umgebung, um reproduzierbare Ergebnisse und eine konsistente Projektstruktur sicherzustellen.

# 2. Bestandteile
Die Entwicklungsumgebung besteht aus folgenden Werkzeugen:
* Laragon
* Joomla 5 
* Visual Studio Code
* Git
* GitHub
* Sass-Compiler

# 3. Grundsätze

Für die Entwicklungsumgebung gelten folgende Regeln:
* Die Entwicklung erfolgt lokal.
* Änderungen werden über Git versioniert.
* GitHub dient als zentrales Repository.
* CSS-Dateien werden aus den SCSS-Quellen erzeugt.
* Alle Werkzeuge sind Bestandteil des Entwicklungsprozesses.

# 4. Verwandte Architekturdokumente

- [🏗️ AR-001 Projektstruktur](./ar-001-projektstruktur.md)
- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-012 Build-Prozess](./ar-012-build-prozess.md)

# Ergebnis
Die Entwicklungsumgebung stellt eine einheitliche Grundlage für die Entwicklung, den Build-Prozess und die Versionsverwaltung des Templates bereit. Dadurch bleibt der Entwicklungsprozess nachvollziehbar, reproduzierbar und langfristig wartbar.
