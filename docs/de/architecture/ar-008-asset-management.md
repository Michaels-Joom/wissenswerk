[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-008 Asset-Management

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

# 1. Zweck

Dieses Dokument beschreibt die Organisation und Verwaltung der statischen Ressourcen innerhalb des WissensWerk-Templates.

Assets umfassen alle Ressourcen, die für Darstellung und Interaktion des Frontends benötigt werden.

Das Asset-Management soll Wartbarkeit, Performance, Übersichtlichkeit und eine nachvollziehbare Trennung zwischen Entwicklungsquellen und auslieferbaren Dateien unterstützen.

Die technische Einbindung der Assets wird in **AR-006 Web Asset API** beschrieben.

---

# 2. Asset-Arten

Zum Asset-Bestand des Templates gehören insbesondere:

- CSS
- SCSS
- JavaScript
- Bilder
- SVG-Dateien
- Icons
- Schriftarten
- gegebenenfalls weitere statische Ressourcen

Nicht jede Asset-Art benötigt denselben Build- oder Einbindungsprozess.

---

# 3. Grundprinzipien

Das Asset-Management folgt folgenden Grundsätzen:

- klare Verzeichnisstruktur
- eindeutige Dateinamen
- Trennung von Quell- und Ausgabedateien
- keine unnötigen Duplikate
- Wiederverwendung vorhandener Ressourcen
- keine Änderungen an Vendor-Dateien
- zentrale Asset-Einbindung über die Joomla Web Asset API
- nur tatsächlich benötigte Assets ausliefern
- Build-Artefakte nachvollziehbar erzeugen
- unnötige Abhängigkeiten vermeiden

---

# 4. Verzeichnisstruktur

Die konkrete Projektstruktur ist maßgeblich.

Für die aktuell relevanten Frontend-Assets befindet sich ein Teil der Template-Medien unter:

```text
media/templates/site/wissenswerk/
```

Die JavaScript-Navigation ist beispielsweise organisiert als:

```text
media/templates/site/wissenswerk/js/
└── mod_menu/
    ├── menu-metismenu.js
    └── menu-metismenu.min.js
```

Die SCSS-Dateien werden innerhalb der definierten SCSS-Struktur des Templates organisiert.

Die vollständige Verzeichnisstruktur wird in **AR-003 Verzeichnisstruktur** und die SCSS-Zuständigkeiten in **AR-004 SCSS-Architektur** beschrieben.

---

# 5. SCSS und CSS

SCSS ist das Entwicklungsformat für die Stylesheets des Templates.

Grundprinzip:

```text
SCSS-Quelldateien
        │
        ▼
      Sass
        │
        ▼
fertige CSS-Dateien
        │
        ▼
Joomla Web Asset API
        │
        ▼
Browser
```

Die erzeugten CSS-Dateien sind Ausgabedateien und werden nicht manuell bearbeitet.

Änderungen erfolgen grundsätzlich an den SCSS-Quelldateien.

---

# 6. JavaScript

JavaScript wird fachlich organisiert.

Aktuell besteht unter anderem ein eigener Bereich für die Menüintegration:

```text
js/
└── mod_menu/
```

Die Navigation verwendet:

```text
menu-metismenu.js
```

als Quelldatei.

Daraus wird erzeugt:

```text
menu-metismenu.min.js
```

Die Beziehung lautet:

```text
Quelle
  │
  ▼
menu-metismenu.js
  │
  ▼
Terser
  │
  ▼
menu-metismenu.min.js
```

Die Quelldatei ist maßgeblich für die Entwicklung.

Die minifizierte Datei ist ein Build-Artefakt für die produktive Auslieferung.

Die JavaScript-Architektur wird in **AR-005 JavaScript-Architektur** beschrieben.

---

# 7. Build-Artefakte

Build-Artefakte sind erzeugte Dateien, die aus den Entwicklungsquellen hervorgehen.

Beispiele:

```text
SCSS → CSS
JavaScript → minifiziertes JavaScript
```

Build-Artefakte dürfen nicht als eigenständige Quelle behandelt werden.

Bei einer Änderung am Quellcode muss der zugehörige Build erneut ausgeführt werden.

Für JavaScript wird aktuell Terser verwendet.

Der konkrete Ablauf ist in **DV-010 JavaScript-Buildprozess** dokumentiert.

---

# 8. Node.js und npm

Node.js und npm gehören zur Entwicklungs- und Buildumgebung.

Sie sind keine Voraussetzung für die Laufzeit des produktiven Joomla-Systems.

Aktuell werden sie insbesondere für Frontend-Buildwerkzeuge eingesetzt.

Die projektbezogene npm-Konfiguration befindet sich im Projektstamm:

```text
package.json
package-lock.json
```

Installierte Node-Abhängigkeiten befinden sich lokal in:

```text
node_modules/
```

Dieses Verzeichnis wird nicht versioniert.

Die Entwicklungsumgebung ist in den EV-Dokumenten beschrieben.

---

# 9. Bilder

Bilder werden entsprechend ihrer tatsächlichen Verwendung organisiert.

Mögliche Kategorien sind beispielsweise:

```text
images/
├── logos/
├── icons/
└── backgrounds/
```

Es sollen keine großen unspezifischen Sammelordner entstehen.

Bei Bildern sind insbesondere zu berücksichtigen:

- geeignete Dateiformate
- sinnvolle Auflösung
- Dateigröße
- alternative Texte bei informativen Bildern
- dekorative Behandlung bei rein visuellen Elementen

---

# 10. SVG und Icons

SVG eignet sich insbesondere für:

- Logos
- Icons
- einfache grafische Elemente

Vorteile sind:

- verlustfreie Skalierung
- gute Darstellungsqualität
- flexible Größenanpassung
- Möglichkeit zur CSS-basierten Gestaltung

SVG-Dateien sollen nur dann als Inline-SVG in das HTML übernommen werden, wenn dies funktional oder gestalterisch erforderlich ist.

---

# 11. Schriftarten

Schriftarten sollen nach Möglichkeit lokal und kontrolliert bereitgestellt werden.

Dies bietet insbesondere:

- Kontrolle über die verwendete Version
- bessere Datenschutzbedingungen
- Unabhängigkeit von externen Font-CDNs
- nachvollziehbare Asset-Verwaltung

Externe Font-Dienste werden nicht ohne vorherige Prüfung ihrer technischen und datenschutzrechtlichen Auswirkungen eingesetzt.

---

# 12. Performance

Das Asset-Management unterstützt die Performance des Templates durch eine kontrollierte Ressourcenstruktur.

Dabei gelten:

- unnötige Assets vermeiden
- ungenutztes JavaScript entfernen
- nur benötigte Ressourcen laden
- JavaScript für die produktive Auslieferung minifizieren
- CSS effizient strukturieren
- Bilder optimieren
- SVG für geeignete grafische Elemente bevorzugen
- doppelte Bibliotheken vermeiden

Performance-Optimierung darf dabei nicht zu Lasten von Wartbarkeit oder Barrierefreiheit erfolgen.

---

# 13. Einbindung

Die vom Template verwalteten CSS- und JavaScript-Assets werden über die Joomla Web Asset API eingebunden.

Damit werden Asset-Verwaltung und HTML-Layout voneinander getrennt.

Vereinfacht:

```text
Quelldateien
     │
     ▼
Build
     │
     ▼
fertige Assets
     │
     ▼
Web Asset API
     │
     ▼
Joomla Frontend
```

Die konkrete Einbindungsarchitektur wird in **AR-006 Web Asset API** beschrieben.

---

# 14. Vendor-Code

Externe Bibliotheken werden getrennt vom projektspezifischen Code behandelt.

Insbesondere:

- Bootstrap
- MetisMenu

werden nicht direkt verändert.

Projektspezifische Anpassungen erfolgen über:

- WissensWerk-SCSS
- WissensWerk-JavaScript
- Integrationscode
- Konfiguration

Dadurch bleiben Bibliotheksupdates grundsätzlich getrennt von den eigenen Anpassungen.

---

# 15. Git und Versionierung

Die Build- und Asset-Struktur ist Bestandteil des Git-Repositories.

Insbesondere werden die für den reproduzierbaren Build benötigten Konfigurationsdateien versioniert:

```text
package.json
package-lock.json
```

Das lokale Abhängigkeitsverzeichnis wird dagegen nicht versioniert:

```text
node_modules/
```

Die Versionierung erzeugter Assets richtet sich nach dem aktuellen Projektworkflow. Maßgeblich ist, dass ein im Repository verwendetes Build-Artefakt aus dem dokumentierten Quellstand reproduzierbar erzeugt werden kann.

---

# 16. Wartbarkeit

Eine konsistente Asset-Struktur erleichtert:

- Erweiterungen
- Fehlersuche
- Buildprozesse
- Code-Reviews
- Versionsverwaltung
- Releases
- spätere Migrationen

Besonders wichtig ist die eindeutige Unterscheidung zwischen:

```text
Quelle
  ≠
Build-Artefakt
  ≠
Vendor-Code
```

Diese drei Kategorien sollen nicht vermischt werden.

---

# 17. Verwandte Architekturdokumente

- [🏗️ AR-003 Verzeichnisstruktur](./ar-003-verzeichnisstruktur.md)
- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-006 Web Asset API](./ar-006-web-asset-api.md)
- [🏗️ AR-007 Bootstrap-Integration](./ar-007-bootstrap-integration.md)
- [🏗️ AR-009 Joomla-Overrides](./ar-009-joomla-overrides.md)

Entwicklungsdokumente:

- DV-010 JavaScript-Buildprozess
- EV-005 Node.js und npm

---

# 18. Aktueller Stand

Das Asset-Management ist für die bisher umgesetzten Frontend-Bereiche etabliert.

Der aktuelle Stand umfasst insbesondere:

- zentrale Organisation der Template-Assets
- SCSS als Entwicklungsquelle
- CSS als erzeugtes Auslieferungsformat
- JavaScript-Quelldateien und minifizierte Build-Artefakte
- MetisMenu als integrierte Navigationsbibliothek
- Bootstrap als technische Frontend-Abhängigkeit
- zentrale Einbindung über die Joomla Web Asset API
- Node.js und npm als Entwicklungs- und Buildumgebung
- Terser für die JavaScript-Minifizierung
- Ausschluss von `node_modules/` aus der Git-Versionierung

---

# 19. Ergebnis

Das Asset-Management stellt sicher, dass Ressourcen des WissensWerk-Templates strukturiert organisiert, reproduzierbar erzeugt und kontrolliert in Joomla eingebunden werden.

Die aktuelle Architektur trennt:

```text
Entwicklungsquellen
        │
        ▼
Buildwerkzeuge
        │
        ▼
Build-Artefakte
        │
        ▼
Joomla Web Asset API
        │
        ▼
Frontend
```

Vendor-Code bleibt unverändert und projektspezifische Anpassungen werden ausschließlich innerhalb der WissensWerk-Architektur vorgenommen.

Damit bildet das Asset-Management eine belastbare Grundlage für die weitere Entwicklung und spätere Wartung des Templates.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | Asset-Management an den aktuellen Entwicklungsstand angepasst; tatsächliche JavaScript-Struktur, Build-Artefakte, Node.js/npm, Terser, MetisMenu und Bootstrap-Abgrenzung ergänzt. |
