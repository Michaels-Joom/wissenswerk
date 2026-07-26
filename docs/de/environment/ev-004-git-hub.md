[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [💻 Entwicklungs Umgebungs Übersicht](./ev-000-entwicklungsumgebung-uebersicht.md)

---

# EV-004 GitHub

## Ziel

Dieses Dokument beschreibt den Einsatz von GitHub als zentrale Plattform für die Verwaltung und Veröffentlichung des Projekts **WissensWerk**.

Neben der Einrichtung eines GitHub-Kontos werden die Projektorganisation, die Zusammenarbeit mit Git sowie die Veröffentlichung des Quellcodes dokumentiert.

## Hintergrund
Git verwaltet die Versionshistorie eines Projekts lokal auf dem Entwicklungsrechner.

GitHub erweitert diese Funktionen um eine zentrale Plattform zur Speicherung, Sicherung und Zusammenarbeit an Git-Repositories.

Für WissensWerk dient GitHub als zentrales Repository für den Quellcode und die Projektdokumentation.

## Architekturentscheidung
GitHub bildet die zentrale Plattform für die Versionsverwaltung außerhalb der lokalen Entwicklungsumgebung.

Die Auswahl erfolgte aufgrund folgender Eigenschaften.

| Kriterium | Bewertung |
|-----------|-----------|
| Hosting von Git-Repositories | ✔ |
| Kostenlos für öffentliche Projekte | ✔ |
| Versionsverwaltung | ✔ |
| Zusammenarbeit | ✔ |
| Pull Requests | ✔ |
| Issue-Tracking | ✔ |
| GitHub Actions | ✔ |
| Große Community | ✔ |

### Entscheidung

Für WissensWerk wird GitHub als zentrale Plattform für die Verwaltung des Projektrepositories verwendet.
Alle freigegebenen Änderungen werden nach erfolgreichem Test vom lokalen Git-Repository nach GitHub übertragen.

## Bezugsquellen

### Offizielle Webseite

https://github.com

### Dokumentation

https://docs.github.com/

### GitHub Skills

https://skills.github.com/

GitHub Skills bietet interaktive Übungen zum Erlernen von Git und GitHub direkt auf der Plattform.

## Voraussetzungen
Vor der Nutzung von GitHub werden folgende Komponenten benötigt.

- Git
- Visual Studio Code
- GitHub-Konto
- Internetverbindung

## Konto erstellen

Zur Nutzung von GitHub ist ein persönliches Benutzerkonto erforderlich.
Während der Registrierung werden Benutzername, E-Mail-Adresse und Passwort festgelegt.
Nach erfolgreicher Registrierung kann ein neues Repository erstellt oder ein bestehendes Repository verwendet werden.

## Repository erstellen
Für WissensWerk wird ein eigenes Repository angelegt.
Empfohlene Einstellungen:

- Repository-Name: `wissenswerk`
- Sichtbarkeit: Privat (während der Entwicklung)
- README erstellen: Nein
- .gitignore: Nein
- Lizenz: optional

Die Initialisierung erfolgt lokal mit Git.

## Verbindung mit Git
Das lokale Repository wird mit GitHub verbunden.

```bash
git remote add origin https://github.com/<Benutzername>/wissenswerk.git
```

Überprüfung:

```bash
git remote -v
```

## Erster Push
Nach der lokalen Initialisierung wird das Repository erstmals veröffentlicht.

```bash
git push -u origin main
```

Anschließend erfolgen weitere Änderungen über den normalen Git-Workflow.

## Projektstruktur

GitHub verwaltet das gesamte Projekt.

```text
wissenswerk
│
├── administrator
├── media
├── templates
├── docs
├── README.md
├── LICENSE
└── .gitignore
```

## Zusammenarbeit mit Git
Der Entwicklungsprozess folgt dem folgenden Ablauf.

```text
Visual Studio Code

↓

Git

↓

Commit

↓

Push

↓

GitHub
```

GitHub dient dabei als zentrale Sicherung und Veröffentlichungsplattform.

## Einsatz in WissensWerk
GitHub wird im Projekt für folgende Aufgaben verwendet.

- Verwaltung des Quellcodes
- Versionshistorie
- Dokumentation
- Architekturentscheidungen
- Projektverwaltung
- Backup der Entwicklungsstände
- Veröffentlichung des Projekts

Geplant ist darüber hinaus die Nutzung weiterer GitHub-Funktionen wie:

- Issues
- Milestones
- Projects
- Releases
- GitHub Pages (optional)

## Best Practices
Für WissensWerk gelten folgende Empfehlungen.

- Nur getestete Änderungen veröffentlichen.
- Aussagekräftige Commit-Nachrichten verwenden.
- Regelmäßig auf GitHub sichern.
- README aktuell halten.
- Dokumentation gemeinsam mit dem Quellcode versionieren.
- Releases für veröffentlichte Versionen verwenden.
- Keine sensiblen Daten in das Repository übertragen.

## Sicherheit
Folgende Informationen dürfen niemals Bestandteil des Repositories sein.

- Zugangsdaten
- Passwörter
- API-Schlüssel
- Lokale Konfigurationsdateien mit sensiblen Daten
- Datenbank-Backups

Diese Dateien werden über `.gitignore` ausgeschlossen.

## Weiterführende Dokumente

- [💻 EV-001 Laragon](./ev-001-laragon.md)
- [💻 EV-002 Visual Studio Code](./ev-002-visual-studio-code.md)
- [💻 EV-003 Git](./ev-003-git.md)
- DV-001 Template erstellen
- DV-014 Deployment

## Fazit
GitHub ergänzt Git um eine zentrale Plattform für die Verwaltung, Sicherung und Veröffentlichung des Projekts WissensWerk.

Durch die Kombination aus lokaler Versionsverwaltung mit Git und zentralem Repository auf GitHub entsteht ein nachvollziehbarer und reproduzierbarer Entwicklungsprozess. Quellcode, Dokumentation und Architekturentscheidungen werden gemeinsam versioniert und langfristig archiviert.

GitHub bildet damit den Abschluss der Entwicklungsumgebung und schafft die Grundlage für eine strukturierte Weiterentwicklung sowie eine spätere Veröffentlichung des Projekts.
