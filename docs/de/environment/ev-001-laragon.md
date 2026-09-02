[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [💻 Entwicklungsumgebung – Übersicht](./ev-000-entwicklungsumgebung-uebersicht.md)

---

# EV-001 Laragon

**Dokumenttyp:** Entwicklungsumgebung  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## 1. Ziel

Dieses Dokument beschreibt die lokale Entwicklungsumgebung des Projekts WissensWerk auf Basis von Laragon.

Neben der Auswahl und Einrichtung werden die für das Projekt relevanten Komponenten sowie die Einbindung in den Entwicklungsprozess dokumentiert.

---

## 2. Hintergrund

Für die Entwicklung eines Joomla-Templates wird eine lokale Webserverumgebung benötigt.

Eine lokale Umgebung ermöglicht:

- kurze Entwicklungs- und Testzyklen
- isolierte Entwicklung ohne Auswirkungen auf ein Produktivsystem
- lokale Datenbanktests
- reproduzierbare Änderungen
- direkte Integration mit Visual Studio Code und Git

Für WissensWerk wird Laragon als lokale Entwicklungsumgebung eingesetzt.

---

## 3. Architekturentscheidung

Laragon bildet die technische Grundlage der lokalen Joomla-Entwicklung.

Die Auswahl erfolgt insbesondere aufgrund der einfachen Verwaltung der lokalen Webserver-, PHP- und Datenbankkomponenten sowie der vorhandenen Node.js-Integration.

| Kriterium | Bewertung |
|---|---|
| Lokale Webentwicklung | ✔ |
| Apache verfügbar | ✔ |
| Mehrere PHP-Versionen | ✔ |
| MariaDB verfügbar | ✔ |
| Virtuelle Hosts | ✔ |
| Composer | ✔ |
| Node.js-Verwaltung | ✔ |
| Integration mit VS Code | ✔ |

---

## 4. Projektumgebung

Das WissensWerk-Projekt befindet sich innerhalb des Laragon-Webverzeichnisses.

Beispiel:

```text
C:\laragon
│
├── bin
├── etc
├── usr
├── www
│   └── wissenswerk
└── ...
```

Die konkrete Groß-/Kleinschreibung des Projektverzeichnisses richtet sich nach der tatsächlichen lokalen Installation.

---

## 5. Virtueller Host

Laragon stellt für das lokale Projekt einen eigenen virtuellen Host bereit.

Beispiel:

```text
http://wissenswerk.test
```

Dadurch kann das Template unter einer realistischen Domainstruktur getestet werden.

---

## 6. Verwendete Komponenten

| Komponente | Aufgabe |
|---|---|
| Apache | lokaler Webserver |
| PHP | Laufzeitumgebung für Joomla |
| MariaDB | Joomla-Datenbank |
| Composer | PHP-Abhängigkeiten, sofern erforderlich |
| Node.js | Frontend-Buildwerkzeuge |
| npm | Node-Paketverwaltung |

Node.js und npm werden dabei ausschließlich für die lokale Entwicklung bzw. den Build eingesetzt.

---

## 7. Node.js über Laragon

Die lokale Laragon-Installation stellt auch Node.js bereit.

Der aktuell verwendete Pfad lautet:

```text
C:\laragonin
odejs
ode-v22
```

Die konkreten Node.js-/npm-Versionen sind im Dokument [EV-005 Node.js und npm](./ev-005-nodejs-npm.md) dokumentiert.

---

## 8. Datenbank

Für WissensWerk wird eine eigene MariaDB-Datenbank verwendet.

Dadurch bleibt die Joomla-Installation unabhängig von anderen lokalen Projekten.

Datenbankzugangsdaten gehören nicht in das Git-Repository.

---

## 9. Integration in den Entwicklungsprozess

```text
Laragon
   ↓
Joomla
   ↓
Visual Studio Code
   ↓
SCSS / JavaScript
   ↓
Git
   ↓
GitHub
```

Laragon stellt dabei die lokale Laufzeitumgebung bereit.

Die eigentliche Versionsverwaltung erfolgt über Git und GitHub.

---

## 10. Best Practices

Für WissensWerk gelten:

- Entwicklung lokal durchführen.
- Produktivsysteme nicht direkt bearbeiten.
- Änderungen zunächst lokal testen.
- Datenbankzugangsdaten nicht versionieren.
- PHP-Versionen bei relevanten Änderungen dokumentieren.
- Entwicklungsumgebung nicht unnötig verändern.
- Änderungen an der Umgebung nachvollziehbar dokumentieren.

---

## 11. Bezugsquellen

- [Laragon](https://laragon.org/)
- [Laragon Dokumentation](https://laragon.org/docs/)
- [Laragon auf GitHub](https://github.com/leokhoa/laragon)

---

## 12. Ergebnis

Laragon stellt die lokale technische Basis für die Joomla-Entwicklung von WissensWerk bereit.

Die Umgebung integriert Webserver, PHP, Datenbank und Node.js in einer für das Projekt geeigneten lokalen Entwicklungsplattform.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliche Laragon-Dokumentation erstellt. |
| 2.0 | 02.09.2026 | Dokument an die aktuelle lokale Umgebung und die Nutzung von Node.js über Laragon angepasst. |
