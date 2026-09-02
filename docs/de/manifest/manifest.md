# WissensWerk – Manifest

## Projektidentität

**WissensWerk** ist ein eigenständiges Joomla-5-Template- und Dokumentationsprojekt.

Der Schwerpunkt liegt nicht ausschließlich auf dem fertigen Template, sondern auf der nachvollziehbaren Entwicklung: Architekturentscheidungen, technische Lösungen, Tests, Probleme und gewonnene Erkenntnisse werden als Teil des Projekts dokumentiert.

### Leitgedanke

> **Wissen schaffen. Wissen dokumentieren. Wissen nutzen.**

---

## Projektphilosophie

WissensWerk versteht Softwareentwicklung als kontinuierlichen Prozess des Lernens, Hinterfragens und Verstehens.

Das Projekt soll zeigen:

- wie technische Entscheidungen entstehen,
- warum bestimmte Lösungswege gewählt oder verworfen werden,
- wie Fehler analysiert und behoben werden,
- wie aus praktischer Entwicklung dauerhaft nutzbares Wissen entsteht.

Dokumentation ist deshalb kein nachträglicher Bericht, sondern Bestandteil der Entwicklung.

---

## Technische Zielplattform

- **Joomla 5.x**
- eigenständiges Joomla-Template
- Bootstrap 5 als technische Layout- und Komponentenbasis
- Joomla Web Asset API
- SCSS / Sass
- JavaScript
- MetisMenu für die mehrstufige Navigation
- Bootstrap Offcanvas für die mobile Navigation
- Node.js / npm und Terser für den JavaScript-Build

Joomla-Core-Dateien werden nicht verändert.

---

## Entwicklungsumgebung

Die lokale Entwicklung erfolgt mit:

- Laragon
- Visual Studio Code
- Git
- GitHub
- Live Sass Compiler
- Node.js
- npm
- Terser
- DBeaver / PostgreSQL, soweit für projektbezogene Datenbankarbeiten erforderlich

SCSS und JavaScript besitzen getrennte Buildprozesse.

### SCSS

Der Live Sass Compiler wird während der Entwicklung direkt in Visual Studio Code eingesetzt.

### JavaScript

JavaScript wird über Node.js/npm und Terser gebaut und minifiziert.

Die Entwicklungsquellen und die produktiv ausgelieferten Assets werden dabei klar voneinander unterschieden.

---

## Architekturprinzipien

### Core bleibt unangetastet

Joomla-Core-Dateien werden niemals verändert.

Erweiterungen und Anpassungen erfolgen bevorzugt über:

- eigenständiges Template
- Template-Overrides
- Module
- Plugins
- Joomla-Events
- Web Asset API

### Designsystem vor Framework

Das WissensWerk-Designsystem definiert die visuelle Identität.

Bootstrap stellt technische Funktionen bereit, bestimmt aber nicht das Corporate Design.

### Komponentenorientierung

Eigenständige Templatebereiche werden als klar abgegrenzte Komponenten beziehungsweise Sections entwickelt.

Dazu gehören unter anderem:

- Branding
- Header
- Navigation
- Offcanvas
- Footer
- Breadcrumbs

Komponenten erhalten eine eindeutige WissensWerk-Namensgebung.

### Namenskonventionen

Eigene Klassen und projektspezifische CSS Custom Properties verwenden das Präfix:

```text
ww-
--ww-
```

Bootstrap-, Joomla- und MetisMenu-Klassen bleiben erhalten, wenn sie technisch erforderlich sind.

---

## Navigation

Die Navigation verwendet vorhandene und bewährte Technologien, statt eine eigene Navigationslogik unnötig neu zu entwickeln.

Die Verantwortlichkeiten sind getrennt:

```text
Joomla
  ↓
Menüstruktur
  ↓
MetisMenu
  ↓
mehrstufige Navigation / Zustände
  ↓
Bootstrap
  ↓
Offcanvas-Verhalten
  ↓
WissensWerk
  ↓
Darstellung und Designsystem
```

Header-Navigation, Sidebar und Offcanvas verwenden eine gemeinsame visuelle Grundlage, können aber unterschiedliche Interaktions- und Initialisierungsregeln besitzen.

---

## Accessibility, SEO und Performance

Barrierefreiheit, Suchmaschinenoptimierung und Performance werden nicht als nachträgliche Korrektur verstanden.

Sie werden bereits bei Architektur und Komponentenentwicklung berücksichtigt.

Besondere Aufmerksamkeit gilt:

- semantischem HTML
- Tastaturbedienbarkeit
- sichtbaren Fokuszuständen
- ausreichenden Kontrasten
- responsivem Verhalten
- sinnvollen Touch-Zielen
- sauberer Asset-Auslieferung
- Vermeidung unnötiger Abhängigkeiten

SEO-relevante Joomla-Funktionalität soll nach Möglichkeit erhalten und nicht durch konkurrierende Eigenimplementierungen ersetzt werden.

---

## Dokumentation

Die Projektdokumentation ist strukturiert und nach Verantwortungsbereichen getrennt.

Wesentliche Dokumenttypen sind:

- **AR** – Architektur
- **DS** – Designsystem
- **DV** – Entwicklung
- **EV** – Entwicklungsumgebung
- **ADR** – Architekturentscheidungen
- **RM** – Roadmap und Releaseplanung
- weitere projektspezifische Dokumenttypen nach Bedarf

Ein Dokument behandelt grundsätzlich ein klar abgegrenztes Thema.

Architekturentscheidungen werden nachvollziehbar begründet. Die Dokumentation soll dem tatsächlich implementierten Stand entsprechen.

---

## Künstliche Intelligenz

Künstliche Intelligenz ist Bestandteil des Entwicklungsprozesses und wird als Werkzeug für unter anderem:

- Recherche
- Analyse
- Architektur
- Dokumentation
- Fehlersuche
- Softwareentwicklung

eingesetzt.

KI ersetzt jedoch weder eigenes Verständnis noch praktische Prüfung.

Vorgeschlagene Lösungen werden nachvollzogen, kritisch bewertet und praktisch getestet, bevor sie Bestandteil des Projekts werden.

---

## Qualitätsprinzip

Eine Lösung gilt nicht allein deshalb als geeignet, weil sie technisch plausibel erscheint.

Sie wird möglichst:

1. verstanden,
2. implementiert,
3. praktisch getestet,
4. bewertet,
5. dokumentiert.

Fehler, Fehlversuche und verworfene Ansätze dürfen dokumentiert werden, wenn daraus relevante Erkenntnisse entstehen.

---

## Git und GitHub

Git bildet die Grundlage für die Versionsverwaltung.

Änderungen werden nachvollziehbar über Commits dokumentiert.

Das Projekt verwendet Conventional Commits, soweit dies für die jeweilige Änderung sinnvoll ist.

Das GitHub-Repository dient als zentrale Ablage des Entwicklungsstands und der Projektdokumentation.

---

## Offenheit und Weiterentwicklung

WissensWerk erhebt nicht den Anspruch, von Anfang an die beste oder einzige Lösung zu kennen.

Architekturen dürfen sich weiterentwickeln.

Neue Erkenntnisse können:

- bestehende Annahmen bestätigen,
- eine Implementierung verbessern,
- eine frühere Lösung ersetzen,
- eine Architekturentscheidung zur Neubewertung führen.

Diese Entwicklung ist ausdrücklich Bestandteil des Projekts.

---

## Benutzerorientierung

Technische Entscheidungen dienen letztlich dem Benutzer.

Eine gute Architektur ist kein Selbstzweck.

Sie soll dazu beitragen, Inhalte:

- verständlich,
- konsistent,
- zugänglich,
- intuitiv nutzbar

bereitzustellen.

Gestaltung unterstützt Information – sie ersetzt sie nicht.

---

## Ziel

WissensWerk soll ein technisch sauberes, wartbares und nachvollziehbar entwickeltes Joomla-Template werden.

Gleichzeitig soll das Projekt zeigen, dass Softwareentwicklung selbst eine Quelle von Wissen sein kann.

> **Nicht nur zeigen, was funktioniert – nachvollziehbar machen, warum es funktioniert.**
