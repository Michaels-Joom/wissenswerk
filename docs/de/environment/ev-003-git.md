[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [💻 Entwicklungs Umgebungs Übersicht](./ev-000-entwicklungsumgebung-uebersicht.md)

---

# EV-003 Git

## Ziel
Dieses Dokument beschreibt den Einsatz von Git als Versionsverwaltungssystem im Projekt **WissensWerk**.

Es erläutert die Gründe für die Auswahl, die grundlegende Konfiguration sowie die Einbindung in den Entwicklungsprozess. Ziel ist eine nachvollziehbare Historie aller Projektänderungen und eine sichere Verwaltung des Quellcodes.

## Hintergrund
Während der Entwicklung eines Softwareprojekts entstehen fortlaufend Änderungen an Quellcode, Konfigurationsdateien und Dokumentationen.

Eine Versionsverwaltung ermöglicht es,

- Änderungen nachvollziehbar zu dokumentieren,
- frühere Versionen wiederherzustellen,
- Entwicklungsstände zu vergleichen,
- Fehler einfacher zu analysieren,
- parallel an unterschiedlichen Funktionen zu arbeiten.

Für WissensWerk wird hierfür Git eingesetzt.

## Architekturentscheidung
Git bildet die Grundlage der Versionsverwaltung.

Die Auswahl erfolgte aufgrund folgender Eigenschaften.

| Kriterium | Bewertung |
|-----------|-----------|
| De-facto-Standard | ✔ |
| Lokal nutzbar | ✔ |
| Verteilte Versionsverwaltung | ✔ |
| Plattformunabhängig | ✔ |
| Integration in Visual Studio Code | ✔ |
| Unterstützung durch GitHub | ✔ |

### Entscheidung

Für WissensWerk wird Git als lokales Versionsverwaltungssystem verwendet.

Alle Änderungen am Projekt werden versioniert und über Commits dokumentiert.

---

## Bezugsquellen

### Offizielle Webseite

https://git-scm.com/

### Dokumentation

https://git-scm.com/doc

## Installation
Git wird über den offiziellen Installer installiert.
Während der Installation können die Standardoptionen übernommen werden.
Nach der Installation sollte die Git-Version überprüft werden.

```bash
git --version
```

## Grundeinrichtung
Nach der Installation wird Git einmalig konfiguriert.

```bash
git config --global user.name "Vorname Nachname"
git config --global user.email "mail@example.de"
```

Optional:

```bash
git config --global init.defaultBranch main
```

## Projektkonfiguration
Das Joomla-Projekt wird als Git-Repository verwaltet.

```bash
git init
```

Zur Versionsverwaltung gehören unter anderem:

- `.gitignore`
- `README.md`
- Dokumentation
- Templatequellcode

Nicht versioniert werden:

- temporäre Dateien
- Cache
- Logdateien
- Build-Artefakte

## Git-Workflow in WissensWerk
Der Entwicklungsprozess folgt einem einfachen Workflow.

```text
Änderung

↓

Test

↓

Commit

↓

Push nach GitHub
```

Jeder Commit dokumentiert eine abgeschlossene Änderung.

## Commit-Richtlinien
Commits sollten:

- eine abgeschlossene Änderung enthalten
- klar beschrieben sein
- möglichst klein gehalten werden

Beispiele:

```
feat: Bootstrap Grid erweitert

fix: Fehler in Navigation behoben

docs: EV-003 Git ergänzt

refactor: TemplateHelper vereinfacht
```

## Integration in WissensWerk
Git verwaltet sämtliche Projektbestandteile.

- Template
- Dokumentation
- SCSS
- JavaScript
- Konfigurationsdateien

Dadurch bleibt die Entwicklung jederzeit nachvollziehbar.

## Best Practices
Für WissensWerk gelten folgende Empfehlungen.

- Kleine Commits erstellen.
- Aussagekräftige Commit-Nachrichten verwenden.
- Vor jedem Commit testen.
- Keine Binärdateien ohne Grund versionieren.
- `.gitignore` aktuell halten.
- Änderungen regelmäßig sichern.

## Weiterführende Dokumente

- [💻 EV-001 Laragon](./ev-001-laragon.md)
- [💻 EV-002 Visual Studio Code](./ev-002-visual-studio-code.md)
- [💻 EV-004 Git Hub](./ev-004-git-hub.md)
- DV-001 Template erstellen

## Fazit
Git bildet die Grundlage der Versionsverwaltung von WissensWerk.

Durch die lückenlose Dokumentation aller Änderungen unterstützt Git eine strukturierte Entwicklung, erleichtert die Zusammenarbeit und sorgt dafür, dass jeder Entwicklungsstand jederzeit reproduzierbar und nachvollziehbar bleibt.
