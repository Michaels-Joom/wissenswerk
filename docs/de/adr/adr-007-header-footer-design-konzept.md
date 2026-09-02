[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [📐 Architekturentscheidungen (ADR)](./adr-000-architekturentscheidungen.md)

# ADR-007 – Header- und Footer-Designkonzept

**Status:** Angenommen  
**Version:** 2.0  
**Datum:** 02.09.2026  
**Projekt:** WissensWerk

## Kontext

Während der Entwicklung des WissensWerk-Templates wurden für Header und Footer grundlegende Gestaltungs- und Architekturentscheidungen getroffen.

Ziel ist eine ruhige, klare und wiedererkennbare Benutzeroberfläche, die auf unterschiedlichen Bildschirmgrößen funktioniert.

## Entscheidung

### 1. Mobile First

Alle Layouts werden grundsätzlich Mobile First entwickelt. Desktop-Darstellungen erweitern die mobile Struktur.

### 2. Header

Der Header bildet Markenidentität und primäre Navigation als getrennte Verantwortungsbereiche ab.

Das Branding umfasst:

- Logo
- Wortmarke
- Balance-Element
- Slogan

Die Navigation ist eine eigenständige Komponente.

### 3. Responsive Branding

Unterhalb des definierten Branding-Breakpoints kann das Logo ausgeblendet werden. Die Wortmarke bleibt als zentrale Markeninformation erhalten.

Ab dem Branding-Breakpoint wird das Logo eingeblendet. Seine Größe bleibt innerhalb des vorgesehenen Bereichs konstant.

Die Balance orientiert sich optisch an der Wortmarke.

### 4. Balance

Das Balance-Element besteht aus linker Linie, Mittelpunkt und rechter Linie. Seine Gesamtbreite orientiert sich an der Wortmarke. Optische Harmonie hat Vorrang vor rein mathematischer Zentrierung.

### 5. Footer

Der Footer bildet den inhaltlichen Abschluss der Seite und besteht aus eigenständigen Bereichen für:

- Logo
- Über mich
- Über das Projekt
- Service

### 6. Copyright

Der Copyright-Bereich ist vom eigentlichen Footer-Inhalt getrennt und wird als eigene Section behandelt.

### 7. Servicebereich

Der Servicebereich enthält unterstützende Seiten und gehört nicht zur Hauptnavigation.

Dazu können insbesondere gehören:

- Kontakt
- Impressum
- Datenschutz
- Cookie-Richtlinie

Die tatsächliche Zusammenstellung wird über die Joomla-Menü- beziehungsweise Modulstruktur gesteuert.

### 8. Mobile Bedienbarkeit

Serviceeinträge werden auf kleinen Bildschirmgrößen so dargestellt, dass ausreichend große Touch-Ziele zur Verfügung stehen. Die zugrunde liegenden Elemente bleiben semantische Links.

### 9. Section-orientierte Architektur

Header und Footer besitzen jeweils eigene Container und organisieren ihr internes Layout selbst.

Es wird bewusst kein globales Seiten-Grid erzwungen. Jede Section entscheidet abhängig von ihrer Aufgabe über Flexbox oder CSS Grid.

## Konsequenzen

### Vorteile

- klare Informationsarchitektur
- konsequente Mobile-First-Strategie
- eigenständige Markenidentität
- gute Wartbarkeit
- unabhängige Weiterentwicklung der Sections
- konsistentes Responsive Design

### Nachteile

- einzelne Sections benötigen eigenes Layout
- etwas höherer Entwicklungsaufwand als bei einem globalen Seiten-Grid
- Responsive Verhalten muss je Section bewusst geplant werden

## Begründung

Die gewählte Architektur unterstützt die zentralen Ziele von WissensWerk:

- ruhiges Erscheinungsbild
- nachhaltige Wartbarkeit
- klare Trennung der Verantwortlichkeiten
- konsistentes Responsive Design
- eigenständige Designidentität unabhängig von Cassiopeia

Header und Footer werden dadurch als eigenständige Layoutbereiche behandelt.
