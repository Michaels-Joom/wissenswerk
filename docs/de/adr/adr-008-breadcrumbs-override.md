[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [📐 Architekturentscheidungen (ADR)](./adr-000-architekturentscheidungen.md)

# ADR-008 – Breadcrumb-Override für WissensWerk

**Status:** Angenommen  
**Version:** 2.0  
**Datum:** 02.09.2026  
**Autor:** WissensWerk-Projekt

---

# 1. Zusammenfassung

Für das Joomla-Modul **mod_breadcrumbs** wird ein eigener Template-Override eingesetzt.

Ziel ist die vollständige Integration der Breadcrumb-Navigation in das WissensWerk-Designsystem, ohne die technische Funktionalität des Joomla-Cores zu verändern.

Der Override betrifft ausschließlich die Präsentationsschicht. Joomla bleibt für Routing, Breadcrumb-Ermittlung und die vom Core bereitgestellten semantischen beziehungsweise strukturierten Daten verantwortlich.

Damit folgt die Entscheidung dem zentralen WissensWerk-Prinzip:

> **Funktionalität des CMS erhalten, Präsentation im Template kontrollieren.**

---

# 2. Ausgangssituation

Joomla stellt mit **mod_breadcrumbs** eine fertige Breadcrumb-Funktionalität bereit.

Für WissensWerk soll diese Funktionalität nicht neu implementiert werden. Stattdessen wird die vorhandene Joomla-Ausgabe über einen Template-Override an die Anforderungen des Templates angepasst.

Die Breadcrumbs sollen dabei insbesondere:

- semantisch korrekt ausgegeben werden,
- in das bestehende Layout-Raster integriert werden,
- die WissensWerk-Design Tokens verwenden,
- mit der übrigen Navigation visuell konsistent sein,
- responsiv funktionieren,
- ohne Änderungen am Joomla-Core auskommen.

---

# 3. Problemstellung

Die Standarddarstellung von Joomla passt nicht vollständig zur Komponenten- und Designsystem-Architektur von WissensWerk.

Insbesondere sollen folgende Punkte nicht aus der Standarddarstellung übernommen werden:

## 3.1 Layoutklassen im Markup

Abstände sollen nicht über konkrete Bootstrap-Utility-Klassen im Override-Markup festgelegt werden.

Beispiele wie:

```text
px-3
py-2
```

gehören zur Bootstrap-Gestaltungsebene und widersprechen der im WissensWerk-Template angestrebten Trennung von Struktur und Gestaltung.

Die Abstände werden deshalb im zugehörigen SCSS definiert.

---

## 3.2 Generische Klassen

Die Komponente soll eine eindeutige WissensWerk-Namensgebung erhalten.

Dafür wird das Komponentenpräfix:

```text
ww-breadcrumb
```

verwendet.

Beispiele:

```text
ww-breadcrumb
ww-breadcrumb__list
ww-breadcrumb__item
ww-breadcrumb__link
ww-breadcrumb__item--active
```

Bootstrap- oder Joomla-Klassen werden nur dort übernommen, wo sie technisch erforderlich sind.

---

## 3.3 Reduzierte Benutzerführung

Ein zusätzlicher Hinweis wie:

> Sie sind hier

wird nicht übernommen.

Die Breadcrumb-Navigation ist bereits als Navigation semantisch ausgezeichnet. Eine zusätzliche textuelle Einleitung ist für die Orientierung nicht erforderlich.

Die endgültige Ausgabe muss dennoch die semantischen und barrierefreien Anforderungen des konkreten Joomla-Overrides erfüllen.

---

## 3.4 Dekorative Elemente

Ein rein dekoratives Location-Symbol wird nicht Bestandteil der WissensWerk-Breadcrumb-Komponente.

Die Breadcrumbs sollen dadurch auf ihre eigentliche Funktion als Orientierungshilfe reduziert werden.

---

# 4. Architekturentscheidung

Es wird ein **Template-Override für mod_breadcrumbs** erstellt.

Die Verantwortung wird klar getrennt:

| Ebene | Verantwortung |
|---|---|
| Joomla `mod_breadcrumbs` | Breadcrumb-Daten und technische Funktion |
| Template-Override | HTML-Struktur und Präsentationsklassen |
| SCSS-Komponente | visuelle Gestaltung und Responsive Verhalten |
| WissensWerk Designsystem | Farben, Abstände, Typografie und Tokens |
| Joomla Routing | Ermittlung der Navigationsstruktur |

Der Override enthält keine eigene Breadcrumb-Logik und ersetzt nicht die Joomla-Funktionalität.

---

# 5. Namenskonvention

Die eigene Komponente verwendet das Präfix:

```text
ww-breadcrumb
```

Die Benennung folgt der im Projekt festgelegten Komponentenstruktur.

Beispiel:

```html
<nav class="ww-breadcrumb" aria-label="Breadcrumb">
    <ol class="ww-breadcrumb__list">
        ...
    </ol>
</nav>
```

Die konkrete HTML-Ausgabe richtet sich dabei nach der tatsächlich verwendeten Joomla-Override-Struktur.

---

# 6. Bootstrap und Designsystem

Bootstrap bleibt technische Grundlage des Templates.

Für die Breadcrumb-Komponente gilt jedoch:

- keine direkte Festlegung des WissensWerk-Designs über Bootstrap-Farben,
- keine unnötigen Bootstrap-Utility-Klassen im Override,
- Gestaltung über die WissensWerk Design Tokens,
- Responsive Verhalten über die bestehende CSS-/SCSS-Architektur.

Damit bleibt Bootstrap kompatibel mit dem Projekt, ohne die visuelle Gestaltungshoheit des Designsystems zu übernehmen.

---

# 7. Container und Layout

Die Breadcrumb-Komponente wird in den bestehenden WissensWerk-Contentbereich integriert.

Damit orientiert sie sich am gleichen Inhaltsraster wie die übrigen zentralen Seitenbereiche.

Ziel ist eine gemeinsame visuelle Achse für:

- Header
- Breadcrumbs
- Hauptinhalt
- Footer

Die konkrete Einbindung erfolgt über das bestehende Template-Layout und nicht durch einen zusätzlichen, konkurrierenden Container.

---

# 8. Hintergrundgestaltung

Die Breadcrumbs können als visueller Übergang zwischen Header und Hauptinhalt einen eigenen, dezenten Hintergrund erhalten.

Dafür ist das im WissensWerk-Projekt entwickelte SVG-Pattern vorgesehen.

Das Pattern wird ausschließlich dekorativ eingesetzt:

- geringe visuelle Präsenz,
- ausreichender Kontrast für Text und Links,
- keine Beeinträchtigung der Lesbarkeit,
- keine zusätzliche Information, die nur über das Hintergrundbild vermittelt wird.

Die Entscheidung für das Pattern betrifft ausschließlich die Präsentation und verändert nicht die Breadcrumb-Funktion.

---

# 9. SEO und strukturierte Daten

Die vom Joomla-Modul bereitgestellte Breadcrumb-Funktionalität wird nicht durch eine eigene SEO-Implementierung ersetzt.

Insbesondere werden keine eigenen Breadcrumb-Datenmodelle oder konkurrierenden strukturierten Daten erzeugt.

Soweit der verwendete Joomla-Output strukturierte Daten beziehungsweise Schema.org-Daten bereitstellt, werden diese durch den Override nicht unnötig verändert oder entfernt.

Damit bleibt die SEO-Verantwortung beim Joomla-Modul und dessen vorhandener Implementierung.

---

# 10. Barrierefreiheit

Die Breadcrumb-Komponente behält eine semantische Navigationsstruktur.

Vorgesehen beziehungsweise zu berücksichtigen sind insbesondere:

- semantisches `<nav>`,
- zugängliche Bezeichnung der Navigation,
- geordnete Liste für die hierarchische Reihenfolge,
- korrekte Kennzeichnung der aktuellen Seite,
- ausreichende Kontraste,
- sichtbare Fokuszustände,
- Tastaturbedienbarkeit,
- keine Information ausschließlich über Farbe oder Hintergrundgrafik.

Die konkrete Umsetzung wird anhand des tatsächlich verwendeten Joomla-Outputs geprüft.

---

# 11. Vorteile

| Standarddarstellung | WissensWerk |
|---|---|
| generische Darstellung | eigene Komponentenstruktur |
| Gestaltung teilweise über Markup-Klassen | Gestaltung über SCSS und Design Tokens |
| Joomla-Standardoptik | WissensWerk Corporate Design |
| dekorative Zusatzinformationen möglich | reduzierte, funktionale Darstellung |
| keine Integration in das eigene Pattern | optionales WissensWerk SVG-Pattern |
| CMS-Ausgabe und Template-Gestaltung eng gekoppelt | klare Trennung von Funktion und Präsentation |

---

# 12. Auswirkungen

## Vorteile

- update-sicher gegenüber Joomla-Core-Änderungen,
- keine Änderungen an Core-Dateien,
- konsistente Integration in das WissensWerk-Designsystem,
- klare Komponentenstruktur,
- zentrale Steuerung der Gestaltung,
- gute Wartbarkeit,
- Wiederverwendbarkeit der Gestaltung.

## Unverändert

Die Entscheidung verändert grundsätzlich nicht:

- Joomla-Routing,
- Breadcrumb-Ermittlung,
- Mehrsprachigkeit,
- Modulkonfiguration,
- Joomla-Core-Funktionalität.

---

# 13. Abgrenzung

Der Override ist **keine funktionale Erweiterung** von `mod_breadcrumbs`.

Nicht Bestandteil dieser Architekturentscheidung sind:

- eigene Routing-Logik,
- eigene Breadcrumb-Generierung,
- eigene SEO-Datenmodelle,
- Änderungen am Joomla-Core,
- ein separates Breadcrumb-JavaScript,
- eine konkurrierende Navigationslogik.

---

# 14. Implementierungsfolgen

Für die Umsetzung werden die erforderlichen Änderungen ausschließlich innerhalb des WissensWerk-Templates vorgenommen.

Typischerweise betrifft dies:

```text
html/
└── mod_breadcrumbs/
    └── default.php
```

sowie die zugehörige SCSS-Komponente und deren Einbindung in die bestehende Asset-Architektur.

Die konkrete Verzeichnis- und Asset-Struktur richtet sich nach der im Projekt dokumentierten Template-Architektur.

---

# 15. Fazit

Der Breadcrumb-Override ist eine bewusste Präsentationsentscheidung und keine Neuentwicklung der Joomla-Breadcrumb-Funktion.

Joomla bleibt für die fachliche und technische Funktion verantwortlich. WissensWerk übernimmt die Kontrolle über HTML-Struktur, Komponentenbenennung und visuelle Gestaltung.

Damit entsteht eine saubere Trennung:

**Joomla liefert die Funktion.  
Der Override definiert die Darstellung.  
Das Designsystem definiert das Erscheinungsbild.**

Diese Aufteilung entspricht der angestrebten update-sicheren und wartbaren Architektur des WissensWerk-Templates.
