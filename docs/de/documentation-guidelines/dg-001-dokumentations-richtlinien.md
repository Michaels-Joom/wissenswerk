[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [📖 Dokumentations-Richtlinien Übersicht](./dg-000-richtlinien-uebersicht.md)

---

# DG-001 – Dokumentationsrichtlinien

## 1. Ziel

Dieses Dokument definiert die verbindlichen Richtlinien für die Erstellung und Pflege der Projektdokumentation von WissensWerk.

Ziel ist eine einheitliche Struktur, konsistente Schreibweise und eine langfristig wartbare Dokumentation.

## 2. Grundsätze

Für die gesamte Dokumentation gelten:

- einheitlicher und nachvollziehbarer Aufbau
- technisch präzise Formulierungen
- projektbezogene Inhalte
- Entscheidungen begründen
- relevante Quellen und Referenzen angeben
- Änderungen nachvollziehbar dokumentieren
- Dokumentation gemeinsam mit dem Projekt versionieren
- Dokumentation am tatsächlichen Implementierungsstand ausrichten

Die Dokumentation soll nicht nur beschreiben, **was** umgesetzt wurde, sondern bei relevanten Entscheidungen auch **warum**.

## 3. Verzeichnisstruktur

Die Dokumentation ist sprachabhängig aufgebaut:

```text
docs
├── de
└── en
```

Innerhalb der Sprachbereiche sollen die Verzeichnisstrukturen möglichst identisch bleiben.

Verzeichnisnamen werden grundsätzlich in englischer Sprache geführt, zum Beispiel:

```text
architecture
environment
development
design-system
troubleshooting
adr
```

## 4. Dateinamen

Dateinamen folgen diesen Regeln:

- ausschließlich Kleinbuchstaben
- Bindestriche statt Leerzeichen
- keine Umlaute
- keine Sonderzeichen
- eindeutiges Dokumentpräfix
- fortlaufende Dokumentnummer, sofern der Dokumenttyp eine Nummerierung verwendet

Beispiele:

```text
ev-001-laragon.md
ar-004-scss-architektur.md
dv-003-design-tokens.md
```

## 5. Dokumentpräfixe

| Präfix | Bedeutung |
|---|---|
| AR | Architektur |
| EV | Entwicklungsumgebung |
| DV | Entwicklung |
| DS | Design System |
| TS | Troubleshooting |
| ADR | Architecture Decision Record |
| DG | Dokumentationsrichtlinien |
| RM | Roadmap / Release Management |

Die Präfixe bilden die Dokumenttypen ab und sollen nicht mit Verzeichnisnamen verwechselt werden.

## 6. Dokumentaufbau

Technische Dokumente folgen nach Möglichkeit einer nachvollziehbaren Struktur:

1. Ziel
2. Kontext / Hintergrund
3. Problemstellung
4. Entscheidung oder Architektur
5. Beschreibung / Umsetzung
6. Konfiguration
7. Auswirkungen
8. Best Practices
9. Weiterführende Dokumente
10. Fazit

Nicht jeder Dokumenttyp benötigt alle Kapitel.

Ein ADR folgt insbesondere der Struktur einer begründeten Architekturentscheidung und ist keine Schritt-für-Schritt-Anleitung.

## 7. Markdown-Konventionen

### Überschriften

Es wird ausschließlich die ATX-Syntax verwendet:

```markdown
# Kapitel

## Abschnitt

### Unterabschnitt
```

### Listen

Ungeordnete Listen verwenden den Bindestrich:

```markdown
- Punkt 1
- Punkt 2
- Punkt 3
```

Nummerierte Listen werden verwendet, wenn eine Reihenfolge oder ein Ablauf relevant ist.

### Tabellen

Tabellen werden für strukturierte Informationen verwendet:

```markdown
| Eigenschaft | Beschreibung |
|---|---|
| Name | Beispiel |
```

### Codeblöcke

Quellcode erhält grundsätzlich eine passende Sprachkennung:

```markdown
```php
// Beispiel
```
```

Geeignete Sprachkennungen sind unter anderem:

```text
php
scss
css
javascript
json
bash
xml
markdown
text
```

## 8. Verlinkungen

Dokumente werden innerhalb des Repositorys über relative Markdown-Links miteinander verbunden.

Beispiel:

```markdown
[AR-004 – SCSS-Architektur](../architecture/ar-004-scss-architektur.md)
```

Links sollen auf tatsächlich vorhandene Dokumente zeigen.

Bei Umbenennungen oder Verschiebungen sind abhängige Verweise entsprechend anzupassen.

## 9. Quellcodeformatierung

Quellcode wird grundsätzlich unverändert und in einem passenden Codeblock dargestellt.

Komplexe Beispiele erhalten sinnvolle Kommentare.

Längere Beispiele werden kurz eingeführt und bei Bedarf anschließend erläutert.

Code in der Dokumentation soll dem tatsächlich verwendeten Projektstand entsprechen. Veraltete Beispiele werden aktualisiert oder ausdrücklich als historisch gekennzeichnet.

## 10. Git-Commit-Konventionen

Für Git-Commits werden sprechende Nachrichten nach dem im Projekt verwendeten Conventional-Commits-Prinzip eingesetzt.

Beispiele:

```text
feat(navigation): finalize MetisMenu navigation
fix(header): adjust responsive spacing
docs(ev): update development environment
build(js): add terser build
refactor(sc­ss): reorganize component structure
```

Die Commit-Nachricht soll die Änderung möglichst eindeutig beschreiben.

## 11. Dokumentation pflegen

Neue Erkenntnisse werden zeitnah dokumentiert.

Dokumentationen werden gemeinsam mit dem Quellcode versioniert.

Bei Änderungen soll geprüft werden:

- Ist die Dokumentation noch sachlich korrekt?
- Entsprechen Beispiele dem aktuellen Stand?
- Sind interne Links noch gültig?
- Wurde eine Architekturentscheidung verändert?
- Müssen abhängige Dokumente angepasst werden?

## 12. Qualität

Dokumentation wird nicht nur auf Rechtschreibung geprüft, sondern auch auf technische Konsistenz.

Insbesondere sollen vermieden werden:

- widersprüchliche Aussagen zwischen Dokumenten
- veraltete Statusangaben
- nicht mehr vorhandene Dateien als Referenzen
- unklare Verantwortlichkeiten
- unnötige Wiederholungen

## 13. Sprachkonzept

Die Dokumentation wird zunächst in deutscher Sprache erstellt.

Eine englische Dokumentation kann schrittweise ergänzt werden. Beide Sprachversionen sollen strukturell möglichst identisch bleiben.

Technische Begriffe wie `Template Override`, `Web Asset API`, `SCSS`, `Build` oder `Commit` werden nicht zwanghaft übersetzt, wenn der englische Fachbegriff im Entwicklungsumfeld eindeutig und gebräuchlicher ist.

## 14. Fazit

Eine konsistente Dokumentation ist Bestandteil der Softwareentwicklung von WissensWerk.

Die Richtlinien schaffen einen gemeinsamen Rahmen für Struktur, Sprache, Formatierung und Pflege. Dadurch bleibt die Dokumentation nachvollziehbar, reproduzierbar und gemeinsam mit dem Projekt langfristig wartbar.
