# ADR-006 – Header- und Footer- Designkonzept

Status: Accepted
Datum: 28.07.2026

Kontext

Während der Entwicklung des WissensWerk-Templates wurden für Header und Footer mehrere grundlegende Gestaltungs- und Architekturentscheidungen getroffen. Ziel ist eine klare, ruhige und wiedererkennbare Benutzeroberfläche, die sowohl auf Desktop- als auch auf mobilen Geräten funktioniert.
Diese Entscheidungen bilden die Grundlage für alle weiteren Layoutbereiche.

## Entscheidung

## 1. Mobile First
Alle Layouts werden grundsätzlich Mobile First entwickelt.
Desktop-Layouts erweitern die mobile Darstellung und ersetzen sie nicht.
Responsive Anpassungen orientieren sich an den definierten Design-Tokens und Breakpoints.

## 2. Header

Der Header dient ausschließlich der Identität des Projekts.
Er besteht aus:

- Logo
- Wortmarke
- Balance-Element
- Slogan

Navigationselemente gehören nicht zum Branding und werden getrennt behandelt.

## 3. Responsive Branding
Mobile (< Branding-Breakpoint)
Logo wird ausgeblendet.
Die Wortmarke übernimmt die gesamte Markenwirkung.
Das Branding bleibt horizontal zentriert.
Die Balance orientiert sich an der Breite der Wortmarke.
Desktop (≥ Branding-Breakpoint)
Das Logo wird eingeblendet.
Die Logo-Größe bleibt konstant.
Das Branding verschiebt sich optisch nach rechts.
Das Logo skaliert oberhalb des Breakpoints nicht weiter.

## 4. Balance
Das Balance-Element ist Bestandteil der Markenidentität.
Es besteht aus:

- linker Linie
- Mittelpunkt
- rechter Linie

Die Gesamtbreite orientiert sich an der Wortmarke und nicht am Container.
Optische Harmonie besitzt Vorrang gegenüber mathematischer Zentrierung.

## 5. Footer
Der Footer bildet den inhaltlichen Abschluss der Seite.
Er besteht aus vier eigenständigen Bereichen:

- Logo
- Über mich
- Über das Projekt
- Service

Jeder Bereich besitzt eine klar definierte Aufgabe.

## 6. Copyright

Der Copyright-Bereich ist bewusst vom Footer getrennt.
Dadurch entsteht ein klarer Seitenabschluss.
Der Copyright-Bereich wird als eigene Section behandelt.

## 7. Servicebereich

Die Service-Navigation enthält ausschließlich unterstützende Seiten.

Beispiele:

- Kontakt
- Impressum
- Datenschutz
-
- Cookie-Richtlinie

Sie gehört nicht zur Hauptnavigation.

## 8. Mobile Bedienbarkeit

In der Desktopansicht werden Serviceeinträge als klassische Textlinks dargestellt.
In der mobilen Ansicht werden dieselben Einträge als Buttons dargestellt.

Gründe:

- größere Touch-Fläche
- bessere Erreichbarkeit
- höhere Barrierefreiheit
- bessere Bedienbarkeit auf Smartphones

## 9. Section-orientierte Architektur

Header und Footer besitzen jeweils einen eigenen Container und organisieren ihr internes Layout selbst.
Es wird bewusst kein globales Seiten-Grid verwendet.
Jede Section entscheidet unabhängig, ob Flexbox oder CSS Grid eingesetzt wird.
Dadurch bleiben die einzelnen Layoutbereiche unabhängig voneinander.

## Konsequenzen

### Vorteile
- klare Informationsarchitektur
- hohe Wartbarkeit
- konsequente Mobile-First-Strategie
- wiedererkennbare Markenidentität
- einfache Erweiterbarkeit
- saubere Trennung der Layoutbereiche

### Nachteile
- jede Section benötigt ein eigenes Layout
- geringfügig höherer Entwicklungsaufwand als bei einem globalen Seiten-Grid
- Begründung

```
Die gewählte Architektur unterstützt die Ziele von WissensWerk:

- ruhiges Erscheinungsbild
- nachhaltige Wartbarkeit
- klare Trennung der Verantwortlichkeiten
- konsistentes Responsive Design
- eigenständige Designidentität unabhängig vom Cassiopeia-Template
- ein Hinweis

```