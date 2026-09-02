[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipien-uebersicht.md)

---

# DS-013 Entwicklungsstrategie und Leitlinien

**Dokumenttyp:** Designsystem / Entwicklungsleitlinie  
**Projekt:** WissensWerk  
**Status:** Gültig  
**Version:** 2.0  
**Stand:** 02.09.2026

> **Hinweis:** Die hochgeladene Datei `ds-013-entwicklungsstrategie-leitlinien.md` trug im Inhalt noch die Bezeichnung „DS-009“. Diese Dokumentnummer wurde an den tatsächlichen Dateinamen und die aktuelle Dokumentstruktur angepasst.

---

# 1. Ziel

Dieses Dokument beschreibt die grundlegenden Leitlinien für die Entwicklung des WissensWerk-Designsystems.

Es dient als gemeinsame Grundlage für Architektur-, Design- und Entwicklungsentscheidungen und bildet den roten Faden für die weitere Umsetzung.

---

# 2. Ausgangssituation

Die Entwicklung von WissensWerk begann als klassisches Joomla-Template.

Während der Umsetzung wurde deutlich, dass nicht das Template allein die eigentliche Herausforderung darstellt, sondern die Entwicklung einer konsistenten, wartbaren und nachvollziehbaren Designsprache.

Das Projekt entwickelte sich dadurch schrittweise von einem Template zu einer Kombination aus:

- Joomla-Template,
- Designsystem,
- dokumentierter Entwicklungsarchitektur.

---

# 3. Entwicklungsweg

Die heutige Architektur ist das Ergebnis eines iterativen Entwicklungsprozesses.

```text
WordPress
   ↓
Joomla / Cassiopeia
   ↓
Cassiopeia Child
   ↓
Custom Joomla Template
   ↓
WissensWerk Design System
```

Jede Entwicklungsstufe löste Probleme der vorherigen Lösung.

Die aktuelle Architektur entstand nicht durch einen einmaligen Entwurf, sondern durch kontinuierliches Entwickeln, Bewerten und Verbessern.

---

# 4. Leitprinzipien

## 4.1 Keep it simple

Für WissensWerk bedeutet **Keep it simple** in erster Linie hohe Benutzerfreundlichkeit.

Navigation, Inhalte und Interaktionen sollen klar, konsistent und vorhersehbar sein.

Eine gute Gestaltung unterstützt den Inhalt, ohne sich selbst in den Vordergrund zu stellen.

Technisch bedeutet Keep it simple außerdem:

- vorhandene Joomla-Funktionen nutzen,
- vorhandene Framework-Funktionen nutzen,
- keine unnötigen Abstraktionsschichten,
- keine parallelen Eigenimplementierungen,
- nur notwendige Komplexität einführen.

---

## 4.2 Konsistenz durch zentrale Definitionen

Das Designsystem basiert auf zentralen Definitionen.

Änderungen sollen möglichst kontrolliert auf mehrere Bereiche wirken.

Beispiele:

- Farben über semantische Tokens,
- Spacing über zentrale Abstands-Tokens,
- Typografie über zentrale typografische Rollen,
- gemeinsame Navigationsgestaltung.

Das Ziel ist nicht maximale Konfigurierbarkeit, sondern maximale Konsistenz.

---

# 5. Designsystem

Das Designsystem umfasst insbesondere:

- Farben
- Typografie
- Spacing
- Layout
- Komponenten
- Zustände
- Navigation
- Responsive Design

Weitere Token- oder Komponentenbereiche werden nur eingeführt, wenn ein konkreter Bedarf entsteht.

Direkte Einzelwerte sollen dort vermieden werden, wo eine bestehende semantische Definition verwendet werden kann.

---

# 6. Verantwortlichkeiten

## Joomla

Joomla verwaltet unter anderem:

- Beiträge
- Kategorien
- Module
- Menüs
- Routing
- Benutzer
- Custom Fields
- Inhalte

Joomla entscheidet, **welche Inhalte** bereitgestellt werden.

## Template

Das Template bildet die Darstellungsschicht.

Es bestimmt insbesondere:

- Seitenstruktur
- Layout
- Modulpositionen
- Darstellung der Joomla-Ausgabe
- responsive Struktur

## Designsystem

Das Designsystem definiert:

- visuelle Sprache
- Farben
- Typografie
- Komponenten
- Zustände
- responsive Gestaltungsregeln

Das Designsystem entscheidet, **wie Inhalte dargestellt werden**.

---

# 7. Technische Integrationsprinzipien

WissensWerk verwendet vorhandene technische Grundlagen, statt sie unnötig neu zu implementieren.

Aktuell gilt insbesondere:

```text
Joomla
    → Inhalte und Menüstruktur

Bootstrap
    → technische UI-Grundlagen

MetisMenu
    → hierarchisches Menüverhalten

WissensWerk
    → Integration, Layout und visuelle Gestaltung
```

Diese Trennung soll auch bei zukünftigen Erweiterungen erhalten bleiben.

---

# 8. Layout

Das Layout verfolgt das Ziel einer klaren Informationsarchitektur.

Die Struktur entsteht insbesondere durch:

- klare Hierarchien
- kontrollierten Weißraum
- wiederkehrende Komponenten
- konsistente Abstände
- nachvollziehbare Navigation

Zusätzliche Steuerungsebenen werden nur eingeführt, wenn sie einen nachweisbaren Mehrwert bieten.

---

# 9. Responsive Design

Die Entwicklung verwendet Desktop als wichtige Referenz für die Grundstruktur.

Die mobile Darstellung wird jedoch nicht als bloße Verkleinerung des Desktoplayouts verstanden.

Je nach verfügbarer Fläche können:

- Navigation und Bedienform wechseln,
- unterstützende Informationen verschoben werden,
- Nebeninformationen reduziert werden,
- Layoutbereiche neu angeordnet werden.

Die Informationshierarchie bleibt dabei nachvollziehbar.

---

# 10. Komponenten

Komponenten werden auf Basis des Designsystems aufgebaut.

Vor einer neuen Komponente wird geprüft:

1. Gibt es bereits eine passende Komponente?
2. Kann eine vorhandene Komponente erweitert werden?
3. Kann Bootstrap oder eine vorhandene Joomla-Funktion genutzt werden?
4. Ist eine neue Komponente tatsächlich erforderlich?

Ziel ist eine überschaubare und konsistente Komponentenlandschaft.

---

# 11. Redaktion

Die Redaktion beschreibt Inhalte, nicht deren technische Umsetzung.

Semantische Begriffe können beispielsweise sein:

- Hero
- Highlight
- Projekt
- Download
- Hinweis
- Definition
- Best Practice
- Zitat

Die visuelle Darstellung wird durch Template und Designsystem bestimmt.

Redaktionelle Anforderungen sollen nicht durch unnötige Gestaltungssonderfälle im Template gelöst werden.

---

# 12. Dokumentation

Dokumentation ist Bestandteil der Entwicklung.

Architektur, Design und technische Umsetzung werden nachvollziehbar dokumentiert.

Dokumente sollen den tatsächlichen Entwicklungsstand beschreiben und nicht dauerhaft überholte Planungsannahmen festschreiben.

Architekturentscheidungen werden bei wesentlichen Änderungen angepasst oder in entsprechenden ADR-Dokumenten festgehalten.

---

# 13. Entwicklungsprozess

Neue Ideen entstehen während der praktischen Entwicklung.

Jede Idee wird anhand folgender Fragen bewertet:

1. Verbessert sie die Benutzerfreundlichkeit?
2. Passt sie zur Architektur von Joomla?
3. Vereinfacht sie das Designsystem?
4. Verbessert sie Wartbarkeit und Konsistenz?
5. Ist die Lösung langfristig nachvollziehbar?
6. Vermeidet sie unnötige Eigenentwicklung?

Nur wenn der Nutzen den zusätzlichen Aufwand rechtfertigt, wird eine Idee übernommen.

---

# 14. Praktische Validierung

Architektur und Design werden nicht ausschließlich theoretisch entwickelt.

Neue Konzepte werden möglichst früh praktisch umgesetzt und anschließend bewertet.

Ein Beispiel ist die Navigation:

```text
Anforderung
   ↓
MetisMenu prüfen
   ↓
praktische Integration
   ↓
Probleme bei Bildschirmbreiten erkennen
   ↓
Layout / Zustandslogik anpassen
   ↓
Dokumentation aktualisieren
```

Damit entsteht die Architektur aus dem Zusammenspiel von Planung und praktischer Erfahrung.

---

# 15. Zukunft

Erweiterungen entstehen aus praktischem Bedarf.

Mögliche zukünftige Entwicklungen können sein:

- Joomla-Plugin zur Unterstützung definierter Seitentypen
- Layout-Vorlagen für redaktionelle Inhalte
- erweiterte Backend-Unterstützung
- Komfortfunktionen für Redakteure

Diese Funktionen werden erst entwickelt, wenn sich ihr Nutzen im praktischen Einsatz bestätigt.

---

# 16. Fazit

WissensWerk entwickelt nicht nur ein gewöhnliches Joomla-Template.

Das Template bildet die technische Darstellungsschicht einer konsistenten Designsprache.

Joomla bleibt für Inhalte und CMS-Funktionen verantwortlich.

Bootstrap und MetisMenu liefern bewährte technische Grundlagen.

WissensWerk definiert Integration, Layout, Gestaltung und die verbindenden Regeln des Designsystems.

Die Grundlage jeder Entscheidung ist Verständlichkeit:

- für Besucher,
- für Redakteure,
- für Entwickler,
- und für die langfristige Wartung des Projekts.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliche Entwicklungsstrategie erstellt. |
| 2.0 | 02.09.2026 | Entwicklungsstrategie an den aktuellen Stand angepasst; technische Integrationsprinzipien, praktische Validierung, Dokumentationspflicht und aktuelle Verantwortlichkeiten ergänzt. |
