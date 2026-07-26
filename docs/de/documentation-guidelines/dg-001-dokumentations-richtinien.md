[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [📖 Dokumentations-Richtlinien Übersicht](./dg-000-richtlinien-uebersicht.md)

---

# DG-001 Dokumentationsrichtlinien

## Ziel
Dieses Dokument definiert die verbindlichen Richtlinien für die Erstellung und Pflege der Projektdokumentation von WissensWerk.
Ziel ist eine einheitliche Struktur, konsistente Schreibweise und eine langfristig wartbare Dokumentation.

## Grundsätze
Für die gesamte Dokumentation gelten folgende Grundsätze.

- Einheitlicher Aufbau aller Dokumente
- Klare und nachvollziehbare Struktur
- Technisch präzise Formulierungen
- Projektbezogene Inhalte
- Entscheidungen begründen
- Quellen angeben
- Änderungen versionieren

## Verzeichnisstruktur
Die Dokumentation ist sprachabhängig aufgebaut.

```text
docs
│
├── de
└── en
```

Innerhalb jeder Sprache werden identische Verzeichnisstrukturen verwendet.

## Verzeichnisnamen

Verzeichnisnamen werden grundsätzlich in englischer Sprache angelegt.

Beispiele:

```text
architecture
environment
development
design-system
troubleshooting
adr
```

---

## Dateinamen
Die Dokumente werden zunächst in deutscher Sprache erstellt.
Dateinamen folgen folgenden Regeln.

- ausschließlich Kleinbuchstaben
- Bindestriche statt Leerzeichen
- keine Umlaute
- keine Sonderzeichen

Beispiele:

```text
ev-001-laragon.md

ar-004-scss-architektur.md

dv-003-design-tokens.md
```

## Dokumentpräfixe
Zur besseren Orientierung erhält jedes Dokument ein eindeutiges Präfix.

| Präfix | Bedeutung |
|---------|-----------|
| AR | Architektur |
| EV | Entwicklungsumgebung |
| DV | Entwicklung |
| DS | Design System |
| TS | Troubleshooting |
| ADR | Architecture Decision Record |
| DR | Dokumentationsrichtlinien |

## Dokumentaufbau
Alle technischen Dokumente folgen möglichst einer einheitlichen Struktur.

1. Ziel
2. Hintergrund
3. Architekturentscheidung (falls sinnvoll)
4. Beschreibung
5. Konfiguration oder Umsetzung
6. Best Practices
7. Weiterführende Dokumente
8. Fazit

Je nach Dokumenttyp können einzelne Kapitel entfallen oder ergänzt werden.

## Markdown-Konventionen

### Überschriften
Es wird ausschließlich die ATX-Syntax verwendet.

```markdown
# Kapitel

## Abschnitt

### Unterabschnitt
```

### Listen
Aufzählungen verwenden den Bindestrich.

```markdown
- Punkt 1
- Punkt 2
- Punkt 3
```

Nummerierte Listen werden verwendet, wenn eine Reihenfolge relevant ist.

### Tabellen
Tabellen werden zur strukturierten Darstellung verwendet.

```markdown
| Eigenschaft | Beschreibung |
|-------------|--------------|
| Name | Beispiel |
```

### Codeblöcke
Quellcode wird grundsätzlich mit Sprachkennung ausgezeichnet.

Beispiele:

```
markdown
```

```
php
```

```
scss
```

```
bash
```

```
json
```

```
xml
```

```
 docs
└── de
    └── environment
```
  
## Sprachkonzept
Die Dokumentation wird zunächst in deutscher Sprache erstellt.
Die englische Dokumentation erhält dieselbe Struktur und wird schrittweise ergänzt.
Beide Sprachversionen sollen inhaltlich möglichst identisch sein.

## Quellcodeformatierung
Quellcode wird grundsätzlich unverändert dargestellt.
Komplexe Beispiele werden kommentiert.
Längere Codebeispiele erhalten eine kurze Einleitung und gegebenenfalls eine Erläuterung im Anschluss.

Git-Commit-Konventionen

Für Commits werden sprechende Nachrichten verwendet.

Empfohlene Präfixe:

```
feat:
fix:
docs:
style:
refactor:
test:
build:
chore:
```
  

Beispiele:

docs: ev-001 laragon erstellt

feat: bootstrap-grid erweitert

fix: navigation korrigiert

refactor: helper-klassen überarbeitet  


## Dokumentation pflegen
Neue Erkenntnisse werden zeitnah dokumentiert.
Dokumentationen werden gemeinsam mit dem Quellcode versioniert.
Änderungen sollen nachvollziehbar und konsistent erfolgen.

## Fazit
Eine konsistente Dokumentation ist ein wesentlicher Bestandteil der Softwareentwicklung.
Die in diesem Dokument definierten Richtlinien schaffen einen einheitlichen Rahmen für alle Dokumente innerhalb von WissensWerk. Sie erleichtern die Wartung, verbessern die Lesbarkeit und stellen sicher, dass die Dokumentation langfristig nachvollziehbar und reproduzierbar bleibt.
