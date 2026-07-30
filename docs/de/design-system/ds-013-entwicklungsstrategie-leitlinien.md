
# DS-009 – Entwicklungsstrategie und Leitlinien

> **Status:** Gültig
> **Version:** 1.0
> **Stand:** Juli 2026

# Ziel
Dieses Dokument beschreibt die grundlegenden Leitlinien für die Entwicklung des WissensWerk-Designsystems.

Es dient als gemeinsame Grundlage für Architektur-, Design- und Entwicklungsentscheidungen und bildet den roten Faden für die weitere Umsetzung.

# Ausgangssituation
Die Entwicklung von WissensWerk begann als klassisches Joomla-Template.

Während der Umsetzung wurde deutlich, dass nicht das Template selbst die eigentliche Herausforderung darstellt, sondern die Entwicklung einer konsistenten, wartbaren und nachvollziehbaren Designsprache.

Das Projekt entwickelte sich dadurch schrittweise von einem Template zu einem Designsystem.

# Entwicklungsweg
Die heutige Architektur ist das Ergebnis eines iterativen Entwicklungsprozesses.

```text
WordPress

↓

Joomla Cassiopeia

↓

Cassiopeia Child

↓

Custom Joomla Template

↓

WissensWerk Design System
```

Jede Entwicklungsstufe löste Probleme der vorherigen Lösung.

Die aktuelle Architektur entstand nicht durch einen einmaligen Entwurf, sondern durch kontinuierliches Entwickeln, Bewerten und Verbessern.

# Leitprinzipien

## 1. Keep it simple

Für WissensWerk bedeutet **Keep it simple** in erster Linie eine hohe Benutzerfreundlichkeit.
Der Benutzer soll die Website ohne Erklärung verstehen können.
Navigation, Inhalte und Interaktionen müssen klar, konsistent und vorhersehbar sein.
Eine gute Gestaltung unterstützt den Inhalt, ohne sich selbst in den Vordergrund zu stellen.
Der Besucher soll niemals überlegen müssen, was als Nächstes zu tun ist.
Das Design führt den Benutzer intuitiv durch die Inhalte.

## 2. Konsistenz durch zentrale Definitionen
Die technische Umsetzung folgt einem zweiten Grundprinzip.

Das Designsystem basiert auf wenigen zentralen Definitionen.

Änderungen erfolgen an einer Stelle und wirken sich kontrolliert auf das gesamte Erscheinungsbild aus.

Beispiele:

- Änderung einer Primärfarbe verändert die gesamte Farbsprache.
- Änderung eines Radius verändert die gesamte Formsprache.
- Änderung des Spacings verändert die räumliche Wirkung der gesamten Website.

Das Ziel ist nicht maximale Konfigurierbarkeit, sondern maximale Konsistenz.

# Designsystem
Das Designsystem basiert vollständig auf semantischen Design Tokens.

Aktuelle Ebenen:

- Farben
- Typografie
- Spacing
- Radius
- Borders
- Shadows
- Layout
- Komponenten

Direkte Farbwerte oder Pixelangaben sollen außerhalb der Token-Dateien möglichst vermieden werden.

# Verantwortlichkeiten

## Joomla
Joomla verwaltet:

- Beiträge
- Kategorien
- Module
- Menüs
- Routing
- Benutzer
- Custom Fields
- Inhalte

Joomla entscheidet, **welche Inhalte** auf einer Seite erscheinen.

## Designsystem
Das Designsystem definiert:

- Farben
- Typografie
- Komponenten
- Layout
- Responsive Verhalten
- Designsprache

Das Designsystem entscheidet, **wie Inhalte dargestellt werden**.

# Template

Das Template ersetzt Joomla nicht.
Es erweitert Joomla um eine konsistente Gestaltungsschicht.
Das CMS liefert Inhalte.
Das Template gestaltet diese Inhalte.
Die Verantwortlichkeiten bleiben klar getrennt.

# Layout
Das Layout verfolgt das Ziel einer klaren Informationsarchitektur.
Die Struktur entsteht durch:

- klare Hierarchien
- großzügigen Weißraum
- wiederkehrende Komponenten
- konsistente Abstände
- nachvollziehbare Navigation

Zusätzliche Steuerungsebenen werden nur eingeführt, wenn sie einen nachweisbaren Mehrwert bieten.

# Responsive Design
Die Entwicklung erfolgt **Desktop First**.
Desktop dient als Referenzlayout.
Erst nach Fertigstellung der Referenz erfolgt die mobile Optimierung.
Die mobile Version ist keine verkleinerte Desktop-Version.
Sie besitzt eine eigene Informationshierarchie.

Dabei gilt:

- Hauptinformationen bleiben erhalten.
- Unterstützende Informationen können verschoben werden.
- Nebeninformationen dürfen reduziert oder ausgeblendet werden.
- Jede Entscheidung orientiert sich an der Benutzerführung.

# Komponenten
Komponenten werden ausschließlich auf Basis der Design Tokens aufgebaut.

Eigene Farben, feste Pixelwerte oder individuelle Abstände innerhalb einzelner Komponenten sollen möglichst vermieden werden.

Komponenten bilden die gemeinsame Designsprache der gesamten Website.

# Redaktion
Die Redaktion beschreibt Inhalte.
Nicht Gestaltung.

Verwendet werden semantische Begriffe wie beispielsweise:

- Hero
- Highlight
- Projekt
- Download
- Hinweis
- Definition
- Best Practice
- Zitat

Die visuelle Darstellung übernimmt ausschließlich das Designsystem.

# Dokumentation
Dokumentation ist Bestandteil der Entwicklung.
Architektur, Design und technische Umsetzung werden gleichwertig dokumentiert.

Entscheidungen sollen jederzeit nachvollziehbar bleiben.

# Entwicklungsprozess
Neue Ideen entstehen während der praktischen Entwicklung.
Jede Idee wird anhand folgender Fragen bewertet:

1. Verbessert sie die Benutzerfreundlichkeit?
2. Passt sie zur Architektur von Joomla?
3. Macht sie das Designsystem einfacher?
4. Verbessert sie Wartbarkeit und Konsistenz?
5. Ist die Lösung langfristig nachvollziehbar?

Nur wenn diese Fragen überwiegend positiv beantwortet werden können, wird eine Idee übernommen.

# Zukunft
Erweiterungen entstehen ausschließlich aus praktischem Bedarf.

Mögliche zukünftige Entwicklungen:

- Joomla-Plugin zur Unterstützung definierter Seitentypen
- Layout-Vorlagen für redaktionelle Inhalte
- Erweiterte Backend-Unterstützung
- Komfortfunktionen für Redakteure

Diese Funktionen werden erst entwickelt, wenn sich ihr Nutzen im praktischen Einsatz bestätigt.

# Fazit
WissensWerk entwickelt kein gewöhnliches Joomla-Template.
WissensWerk entwickelt eine konsistente Designsprache für Joomla.
Das Template bildet die technische Umsetzung dieser Designsprache.
Joomla bleibt für Inhalte verantwortlich.
Das Designsystem sorgt für Konsistenz, Wiedererkennbarkeit und eine hohe Benutzerfreundlichkeit.
Die Grundlage jeder Entscheidung ist nicht technische Komplexität, sondern Verständlichkeit – sowohl für Besucher als auch für Entwickler und Redakteure.