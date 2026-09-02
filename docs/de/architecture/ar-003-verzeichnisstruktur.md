[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-003 Verzeichnisstruktur

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

# 1. Zweck

Dieses Dokument beschreibt die Verzeichnisstruktur des WissensWerk-Templates und die Trennung zwischen Template-Dateien, statischen Medien und Entwicklungsdateien.

Die Struktur orientiert sich an der Joomla-Template-Architektur und wird um die im Projekt tatsächlich verwendeten Frontend- und Buildbereiche ergänzt.

---

# 2. Zielsetzung

Die Verzeichnisstruktur verfolgt folgende Ziele:

- klare Trennung der Verantwortlichkeiten
- nachvollziehbare Organisation des Templates
- Einhaltung der Joomla-Mechanismen
- einfache Wartbarkeit
- kontrollierte Erweiterbarkeit
- klare Trennung von Template-Code, Assets und Buildumgebung

---

# 3. Grundprinzip

Die Projektstruktur trennt insbesondere:

```text
Template-Code
    │
    ├── PHP
    ├── Layouts
    ├── Overrides
    └── Konfiguration

Medien / Frontend-Assets
    │
    ├── CSS
    ├── JavaScript
    ├── Bilder
    └── weitere statische Ressourcen

Entwicklungs- und Builddateien
    │
    ├── package.json
    ├── package-lock.json
    └── weitere Projektkonfiguration
```

Damit werden Laufzeitstruktur und Entwicklungswerkzeuge organisatorisch voneinander getrennt.

---

# 4. Template-Verzeichnis

Das eigentliche Joomla-Template befindet sich unter:

```text
templates/
└── wissenswerk/
```

Dort liegen die Template-Dateien und Joomla-spezifischen Bestandteile.

Beispiele:

```text
templates/wissenswerk/
├── html/
├── language/
├── layouts/
├── includes/
├── index.php
├── error.php
├── offline.php
└── templateDetails.xml
```

Die konkrete Struktur kann im Projektverlauf um weitere fachlich begründete Bereiche ergänzt werden.

---

# 5. Verantwortlichkeiten des Template-Verzeichnisses

| Bereich | Aufgabe |
|---|---|
| `html/` | Joomla-Overrides |
| `language/` | Sprachdateien |
| `layouts/` | wiederverwendbare Layouts |
| `includes/` | klar abgegrenzte Template-Bestandteile |
| `index.php` | zentrales Seitenlayout |
| `error.php` | Fehlerdarstellung |
| `offline.php` | Offline-Darstellung |
| `templateDetails.xml` | Joomla-Manifest und Template-Konfiguration |

Template-Dateien enthalten die für Joomla erforderliche PHP- und Layoutstruktur.

---

# 6. Medienverzeichnis

Statische Frontend-Ressourcen werden im Joomla-Medienbereich des Templates organisiert:

```text
media/
└── templates/
    └── site/
        └── wissenswerk/
```

Dort befinden sich unter anderem:

```text
media/templates/site/wissenswerk/
├── css/
├── js/
├── images/
└── ...
```

Die konkrete Organisation der Assets wird in **AR-008 Asset-Management** beschrieben.

---

# 7. JavaScript-Struktur

Die JavaScript-Dateien werden fachlich organisiert.

Für die Joomla-Menüintegration besteht aktuell:

```text
media/templates/site/wissenswerk/js/
└── mod_menu/
    ├── menu-metismenu.js
    └── menu-metismenu.min.js
```

Dabei gilt:

```text
menu-metismenu.js
        │
        ▼
      Terser
        │
        ▼
menu-metismenu.min.js
```

Die nicht minifizierte Datei ist die Entwicklungsquelle.

Die minifizierte Datei ist das erzeugte Build-Artefakt für die produktive Einbindung.

---

# 8. SCSS-Struktur

Die SCSS-Quellen werden getrennt von den erzeugten CSS-Dateien organisiert.

Die aktuelle Architektur enthält unter anderem:

```text
scss/
├── components/
│   ├── _offcanvas.scss
│   └── _offcanvas-navigation.scss
└── _metismenu.scss
```

Die genaue Struktur und die fachlichen Verantwortlichkeiten der SCSS-Dateien werden in **AR-004 SCSS-Architektur** beschrieben.

---

# 9. Entwicklungs- und Builddateien

Im Projektstamm befinden sich die npm-Konfigurationsdateien:

```text
package.json
package-lock.json
```

Das lokale Abhängigkeitsverzeichnis:

```text
node_modules/
```

wird nicht versioniert.

Diese Dateien gehören zur Entwicklungs- und Buildumgebung und nicht zur Joomla-Laufzeitarchitektur.

---

# 10. Trennung von Quelle, Build und Vendor-Code

Die Struktur unterscheidet bewusst zwischen:

```text
Quellcode
    ↓
Buildprozess
    ↓
Build-Artefakte
```

und:

```text
Vendor-Code
```

Vendor-Dateien wie Bootstrap oder MetisMenu werden nicht als eigene WissensWerk-Quellen behandelt und nicht direkt verändert.

Projektspezifische Anpassungen erfolgen innerhalb der WissensWerk-Struktur.

---

# 11. Erweiterbarkeit

Neue Template-Dateien werden dem fachlich passenden Bereich des Template-Verzeichnisses zugeordnet.

Neue Assets werden dem entsprechenden Medienbereich zugeordnet.

Neue Entwicklungswerkzeuge werden über die Projektkonfiguration verwaltet.

Neue Verzeichnisse sollen nur eingeführt werden, wenn dafür eine eigenständige fachliche Verantwortung besteht.

---

# 12. Verwandte Architekturdokumente

- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-006 Web Asset API](./ar-006-web-asset-api.md)
- [🏗️ AR-008 Asset-Management](./ar-008-asset-management.md)
- [🏗️ AR-010 Layout-Architektur](./ar-010-layout-architektur.md)
- [🏗️ AR-012 Build-Prozess](./ar-012-build-prozess.md)

---

# 13. Aktueller Stand

Die Verzeichnisstruktur entspricht dem aktuellen Entwicklungsstand des WissensWerk-Templates.

Insbesondere berücksichtigt sie:

- `templates/wissenswerk/` als Templatebereich
- `media/templates/site/wissenswerk/` als Medienbereich
- fachlich organisierte JavaScript-Dateien
- MetisMenu-Integration unter `js/mod_menu/`
- getrennte JavaScript-Quelle und Build-Artefakt
- SCSS als Entwicklungsquelle
- npm-Projektdateien im Projektstamm
- Trennung von Projektcode, Assets und Entwicklungswerkzeugen

---

# 14. Ergebnis

Die Verzeichnisstruktur bildet die technische Trennung der WissensWerk-Architektur nachvollziehbar ab.

Sie unterscheidet zwischen:

```text
Joomla Template
        │
        ├── PHP / Layout / Overrides
        │
        ▼
Frontend Assets
        │
        ├── CSS
        ├── JavaScript
        └── Medien

Entwicklungsumgebung
        │
        ├── Node.js / npm
        └── Buildwerkzeuge
```

Dadurch bleibt die Projektstruktur übersichtlich und kann erweitert werden, ohne unterschiedliche Verantwortlichkeiten in gemeinsamen Verzeichnissen zu vermischen.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | Verzeichnisstruktur auf WissensWerk und den aktuellen Frontend-/Buildstand angepasst; MetisMenu, SCSS, npm und die Trennung von Quellen und Build-Artefakten ergänzt. |
