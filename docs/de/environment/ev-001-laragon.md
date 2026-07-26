[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [💻 Entwicklungs Umgebungs Übersicht](./ev-000-entwicklungsumgebung-uebersicht.md)

---

# EV-001 Laragon

## Ziel
Dieses Dokument beschreibt die lokale Entwicklungsumgebung des Projekts **WissensWerk** auf Basis von **Laragon**.

Neben der Installation werden die Gründe für die Auswahl, die verwendete Projektkonfiguration sowie die Einbindung in den Entwicklungsprozess dokumentiert. Ziel ist eine reproduzierbare Entwicklungsumgebung, die jederzeit auf einem anderen System identisch eingerichtet werden kann.

## Hintergrund

Für die Entwicklung eines Joomla-Templates wird eine lokale Webserverumgebung benötigt.
Eine lokale Entwicklungsumgebung bietet gegenüber einer direkten Entwicklung auf einem Webserver zahlreiche Vorteile:
- vollständige Kontrolle über die Entwicklungsumgebung
- kurze Entwicklungs- und Testzyklen
- keine Auswirkungen auf produktive Systeme
- einfache Versionsverwaltung
- gefahrloses Experimentieren
- unabhängiges Arbeiten ohne Internetverbindung

Grundsätzlich kommen verschiedene Entwicklungsumgebungen in Betracht:
- Laragon
- XAMPP
- WampServer
- Docker
- DDEV

Für WissensWerk wurde bewusst **Laragon** ausgewählt.

## Architekturentscheidung
Laragon bildet die Grundlage der lokalen Entwicklungsumgebung.
Die Auswahl erfolgte aufgrund folgender Eigenschaften.

| Kriterium | Bewertung |
|-----------|-----------|
| Einfache Installation | ✔ |
| Portable Installation | ✔ |
| Mehrere PHP-Versionen | ✔ |
| Apache und Nginx verfügbar | ✔ |
| MariaDB integriert | ✔ |
| Virtuelle Hosts automatisch | ✔ |
| Composer integriert | ✔ |
| Gute Performance | ✔ |
| Geringer Ressourcenverbrauch | ✔ |

### Entscheidung
Für WissensWerk wird Laragon als Standardentwicklungsumgebung verwendet.

Die Umgebung bildet die Grundlage für sämtliche Entwicklungs-, Test- und Dokumentationsarbeiten.

## Bezugsquellen
Laragon wird ausschließlich aus offiziellen Quellen bezogen.

### Offizielle Webseite
https://laragon.org

Download der aktuellen stabilen Version sowie allgemeine Projektinformationen.

### Dokumentation
https://laragon.org/docs/

Offizielle Dokumentation mit Installations- und Konfigurationshinweisen.

### GitHub
https://github.com/leokhoa/laragon

Quellcode, Änderungsverlauf und Projektinformationen.

> [!NOTE]
> Für WissensWerk wird grundsätzlich die jeweils aktuelle stabile Version verwendet.

## Systemvoraussetzungen

Die Entwicklungsumgebung basiert derzeit auf folgender Plattform.

| Komponente | Version |
|------------|----------|
| Betriebssystem | Windows 11 Pro |
| Laragon | aktuelle stabile Version |
| PHP | siehe Projektkonfiguration |
| Apache | integriert |
| MariaDB | integriert |
| Composer | integriert |

## Installation
Die Installation erfolgt über den Standardinstaller von Laragon.
### Installationsschritte

1. Installationsdatei herunterladen.
2. Installer starten.
3. Zielverzeichnis auswählen.
4. Installation abschließen.
5. Laragon starten.

Während der Installation sind keine besonderen Anpassungen erforderlich.

> [!NOTE]
> Es wird empfohlen, Laragon in das Standardverzeichnis zu installieren.

## Erste Inbetriebnahme
Nach dem ersten Start sollten folgende Komponenten erfolgreich gestartet werden.

- Apache
- MariaDB

Anschließend sollte die Laragon-Startseite im Browser erreichbar sein.
Dadurch wird die erfolgreiche Installation überprüft.

## Projektkonfiguration

### Projektverzeichnis

Alle Projekte befinden sich innerhalb des Laragon-Webverzeichnisses.

```text
C:\Laragon
│
├── bin
├── etc
├── usr
├── www
│   └── WissensWerk
│
└── ...
```

---

### Virtuelle Hosts

Laragon erstellt virtuelle Hosts automatisch.
Für WissensWerk wird ein eigener virtueller Host verwendet.
Beispiel:

```text
http://wissenswerk.test
```

### PHP
Die verwendete PHP-Version richtet sich nach den Systemanforderungen der eingesetzten Joomla-Version.
Bei Bedarf können verschiedene PHP-Versionen für Kompatibilitätstests verwendet werden.

### Datenbank
Für jedes Projekt wird eine eigene MariaDB-Datenbank angelegt.
Dadurch bleiben Projekte vollständig voneinander getrennt.

### Composer
Composer wird über die Laragon-Installation bereitgestellt.
Separate Installationen sind nicht erforderlich.

## Verwendete Konfiguration in WissensWerk

| Einstellung | Wert |
|-------------|------|
| Webserver | Apache |
| Datenbank | MariaDB |
| Virtuelle Hosts | aktiviert |
| Composer | aktiviert |
| PHP | aktuell verwendete Projektversion |
| SSL | lokale Entwicklung |
| Pretty URLs | aktiviert |

## Integration in den Entwicklungsprozess
Laragon bildet die Grundlage der gesamten Entwicklungsumgebung.

```text
Laragon
        │
        ▼
Joomla
        │
        ▼
Visual Studio Code
        │
        ▼
Git
        │
        ▼
GitHub
```

Alle weiteren Werkzeuge bauen auf dieser Entwicklungsumgebung auf.

## Vorteile für WissensWerk
Die Verwendung von Laragon bietet für dieses Projekt insbesondere folgende Vorteile.
- schnelle Einrichtung neuer Projekte
- automatische virtuelle Hosts
- einfache Verwaltung verschiedener PHP-Versionen
- geringe Systembelastung
- vollständige lokale Entwicklung
- problemlose Integration in Visual Studio Code
- direkte Zusammenarbeit mit Git und GitHub

## Best Practices
Für WissensWerk gelten folgende Empfehlungen.
- Entwicklung ausschließlich lokal durchführen.
- Keine Entwicklung direkt auf Produktivsystemen.
- Änderungen zunächst lokal testen.
- Erst nach erfolgreichem Test in Git übernehmen.
- Anschließend auf GitHub veröffentlichen.
- Regelmäßig Sicherungen der lokalen Datenbank erstellen.
- PHP-Versionen dokumentieren.
- Änderungen an der Entwicklungsumgebung nachvollziehbar dokumentieren.

## Weiterführende Dokumente

- [💻 EV-002 Visual Studio Code](./ev-002-visual-studio-code.md)
- [💻 EV-003 Git](./ev-003-git.md)
- [💻 EV-004 Git Hub](./ev-004-git-hub.md)
- DV-001 Template erstellen

## Fazit

Laragon wurde als Entwicklungsumgebung ausgewählt, weil es die Anforderungen des Projekts hinsichtlich Einfachheit, Flexibilität und Wartbarkeit optimal erfüllt.

Als Fundament der lokalen Entwicklungsumgebung bildet Laragon die Basis für alle weiteren Werkzeuge und Prozesse – von der Joomla-Installation über die Templateentwicklung bis hin zur Versionsverwaltung mit Git und GitHub.

Die Dokumentation dieser Architekturentscheidung stellt sicher, dass die Entwicklungsumgebung nicht nur eingerichtet, sondern auch verstanden und langfristig reproduzierbar bleibt. Sie schafft damit eine verlässliche Grundlage für die weitere Entwicklung von WissensWerk.
