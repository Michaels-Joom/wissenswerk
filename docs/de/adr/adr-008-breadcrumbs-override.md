# ADR-00X – Breadcrumb-Override für WissensWerk

**Status:** Angenommen
**Version:** 1.0
**Datum:** 29.07.2026
**Autor:** WissensWerk-Projekt

---

# 1. Zusammenfassung

Für das Modul **mod_breadcrumbs** wird ein eigener Template-Override entwickelt. Ziel ist die vollständige Integration der Breadcrumb-Navigation in das WissensWerk-Designsystem, ohne dabei die technische Funktionalität des Joomla-Cores zu verändern.

Der Override ersetzt ausschließlich die Darstellungsschicht (HTML und CSS-Klassen). Die zugrunde liegende Joomla-Logik, das Routing, die Mehrsprachigkeit sowie die strukturierte Datenausgabe nach Schema.org bleiben unverändert erhalten.

---

# 2. Ausgangssituation

Joomla liefert mit **mod_breadcrumbs** eine vollständig funktionsfähige Breadcrumb-Navigation aus.

Der Core-Override bietet bereits zahlreiche Vorteile:

* semantisches HTML
* Bootstrap-Integration
* Unterstützung mehrsprachiger Webseiten
* automatische Generierung strukturierter Daten (Schema.org)
* SEO-konforme BreadcrumbList
* vollständige Integration in das Joomla-Routing

Die Standardausgabe orientiert sich jedoch am generischen Joomla-Design und nicht an den Anforderungen des WissensWerk-Templates.

---

# 3. Problemstellung

Das WissensWerk-Template verfolgt einen konsequent komponentenorientierten Ansatz mit einem eigenen Designsystem.

Die Standardausgabe von Joomla weist hierzu mehrere Abweichungen auf.

## 3.1 Bootstrap bestimmt das Erscheinungsbild

Die HTML-Ausgabe enthält Layout-Klassen wie beispielsweise:

```html
px-3 py-2
```

Dadurch werden Abstände unmittelbar im Markup definiert.

Im WissensWerk-Template werden sämtliche Layoutentscheidungen ausschließlich im SCSS getroffen.

---

## 3.2 Uneinheitliche Klassenstruktur

Der Core verwendet Klassen wie beispielsweise:

```text
mod-breadcrumbs
breadcrumb-item
active
```

Diese entsprechen nicht der im Projekt definierten BEM-Namenskonvention.

---

## 3.3 Veraltete Benutzerführung

Optional wird der Text

> Sie sind hier

ausgegeben.

Diese Form der Navigation stammt aus älteren Webdesign-Konzepten und bietet heute keinen funktionalen Mehrwert mehr.

Die Orientierung erfolgt bereits durch:

* die semantische Navigation (`<nav>`)
* das `aria-label`
* die Breadcrumb-Struktur selbst

---

## 3.4 Dekoratives Location-Icon

Das Standardmodul kann zusätzlich ein Standortsymbol darstellen.

Dieses Symbol besitzt keinen funktionalen Nutzen und erzeugt lediglich visuelle Unruhe.

---

## 3.5 Fehlende Integration in die Corporate Identity

Die Standarddarstellung berücksichtigt weder

* das WissensWerk-Farbsystem
* die definierten Design Tokens
* das Corporate Design
* das entwickelte SVG-Hintergrundsmuster.

---

# 4. Architekturentscheidung

Es wird ein vollständiger Template-Override erstellt.

Dabei wird ausschließlich die Präsentationsschicht angepasst.

Die komplette Joomla-Geschäftslogik bleibt unverändert.

---

## 4.1 Eigenes Komponentenpräfix

Die Breadcrumb-Komponente erhält das Präfix

```text
ww-breadcrumb
```

Beispiele:

```text
ww-breadcrumb
ww-breadcrumb__list
ww-breadcrumb__item
ww-breadcrumb__link
ww-breadcrumb__item--active
```

Dadurch besitzen sämtliche Template-Komponenten eine einheitliche Namensgebung.

---

## 4.2 Bootstrap lediglich als Basisschicht

Bootstrap wird weiterhin verwendet.

Bootstrap bestimmt jedoch nicht mehr das Design.

Bootstrap stellt ausschließlich bereit:

* Grundlayout
* Browser-Kompatibilität
* Responsive Verhalten
* Basisklassen

Alle gestalterischen Eigenschaften stammen ausschließlich aus dem WissensWerk-Designsystem.

---

## 4.3 Layout ausschließlich im SCSS

Abstände werden nicht mehr im HTML definiert.

Folgende Klassen entfallen beispielsweise:

```text
px-3
py-2
```

Stattdessen werden sämtliche Abstände zentral über die SCSS-Komponente gesteuert.

Dadurch entsteht eine klare Trennung zwischen Struktur und Gestaltung.

---

## 4.4 Entfernung von „Sie sind hier“

Der Hinweis

> Sie sind hier

wird vollständig entfernt.

Gründe:

* moderne Benutzeroberflächen verzichten darauf
* keine zusätzliche Information
* Screenreader benötigen diesen Hinweis nicht
* das `aria-label` erfüllt denselben Zweck

---

## 4.5 Entfernung des Location-Icons

Das dekorative Standortsymbol wird nicht übernommen.

Gründe:

* keine funktionale Bedeutung
* ruhigeres Erscheinungsbild
* reduzierte visuelle Ablenkung

---

## 4.6 Container-Konzept

Die Breadcrumb-Navigation wird innerhalb des allgemeinen Content-Containers dargestellt.

Dadurch besitzen

* Header
* Breadcrumbs
* Seiteninhalt
* Footer

eine identische Inhaltsbreite.

Dies unterstützt ein ruhiges und konsistentes Seitenlayout.

---

# 5. Hintergrundgestaltung

Die Breadcrumbs bilden den optischen Übergang zwischen Header und Seiteninhalt.

Um diese Trennung dezent hervorzuheben, erhält die Komponente einen eigenen Hintergrund.

Dieser basiert auf dem aus dem WissensWerk-Logo entwickelten SVG-Pattern.

Das Muster wird

* transparent
* sehr kontrastarm
* mit geringer Deckkraft

eingesetzt.

Ziele:

* Wiedererkennung
* Corporate Identity
* hochwertige Anmutung
* visuelle Strukturierung

Das Pattern besitzt ausschließlich dekorativen Charakter und darf die Lesbarkeit niemals beeinträchtigen.

---

# 6. Designsystem

Die Gestaltung orientiert sich vollständig am WissensWerk-Designsystem.

Verwendet werden ausschließlich:

* Design Tokens
* CSS Custom Properties
* SCSS-Komponenten
* zentrale Farbdefinitionen
* definierte Typografie
* einheitliche Abstände

Direkte Bootstrap-Farben oder Inline-Stile werden nicht verwendet.

---

# 7. Suchmaschinenoptimierung

Die strukturierte Datenausgabe nach Schema.org bleibt unverändert erhalten.

Folgende Eigenschaften werden vollständig übernommen:

* BreadcrumbList
* ListItem
* Positionen
* URLs
* Seitentitel

Dadurch entstehen keinerlei Nachteile hinsichtlich SEO.

---

# 8. Barrierefreiheit

Der Override übernimmt die semantische Struktur des Joomla-Cores.

Hierzu gehören insbesondere:

* `<nav>`
* `aria-label`
* geordnete Liste (`<ol>`)
* `aria-current="page"` für die aktuelle Seite

Die Navigation bleibt vollständig mit Tastatur und Screenreader nutzbar.

---

# 9. Vorteile

| Standard Joomla               | WissensWerk                        |
| ----------------------------- | ---------------------------------- |
| Bootstrap bestimmt das Layout | Designsystem bestimmt das Layout   |
| generische Klassen            | eigene BEM-Komponenten             |
| Layout im HTML                | Layout ausschließlich im SCSS      |
| optional „Sie sind hier“      | reduzierte Navigation              |
| dekoratives Location-Icon     | ruhige Gestaltung                  |
| Standarddesign                | Corporate Design                   |
| keine Musterintegration       | SVG-Pattern integriert             |
| Bootstrap-Fokus               | komponentenorientierte Architektur |

---

# 10. Auswirkungen

## Vorteile

* vollständig update-sicher
* keine Änderungen am Joomla-Core
* konsistentes Designsystem
* bessere Wartbarkeit
* bessere Wiederverwendbarkeit
* klare Komponentenarchitektur
* vollständige Integration in die WissensWerk-Designsprache

## Keine Auswirkungen

Unverändert bleiben:

* Joomla-Routing
* Mehrsprachigkeit
* Modulparameter
* SEO
* Schema.org-Ausgabe
* JSON-LD
* Core-Funktionalität

---

# 11. Fazit

Der Breadcrumb-Override ist keine funktionale Erweiterung des Joomla-Moduls, sondern eine bewusste Architekturentscheidung innerhalb des WissensWerk-Templates.

Durch die konsequente Trennung von Funktion und Gestaltung bleibt die bewährte Joomla-Implementierung vollständig erhalten, während die Präsentation vollständig in das WissensWerk-Designsystem integriert wird.

Der Override folgt damit den grundlegenden Projektprinzipien:

* Core niemals verändern
* Design über Komponenten steuern
* Bootstrap als technische Basis nutzen
* Gestaltung ausschließlich über das Designsystem definieren
* Architekturentscheidungen nachvollziehbar dokumentieren
