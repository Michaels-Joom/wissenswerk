[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md) [📐 Architektur-Entscheidungen](./adr-000-architekturentscheidungen.md)

---

# ADR-001 – Bootstrap wird über Design Tokens gesteuert
Status Akzeptiert

Kontext

Joomla basiert auf Bootstrap und nutzt dessen Komponenten sowie SCSS-Variablen an vielen Stellen.

In der Praxis werden Bootstrap-Komponenten häufig erst nach der Kompilierung durch eigenes CSS überschrieben. Dies führt im Laufe der Zeit zu einer steigenden CSS-Spezifität, zahlreichen Überschreibungen und häufig zum Einsatz von !important.

**Dadurch entstehen mehrere Nachteile:**

- Das Erscheinungsbild wird nicht mehr zentral gesteuert.
- Bootstrap-Updates werden schwieriger nachvollziehbar.
- Änderungen erfordern häufig zusätzliche CSS-Regeln.
- Die Wartbarkeit nimmt mit zunehmender Projektgröße ab.

Da WissensWerk ein langfristig wartbares Template werden soll, wird dieser Ansatz bewusst vermieden.

## Entscheidung

Das Designsystem von WissensWerk definiert sämtliche gestalterischen Eigenschaften zentral.

Bootstrap wird ausschließlich als technisches Framework für Layout, Komponenten und Utility-Klassen eingesetzt.

Die visuelle Gestaltung wird nicht durch nachträgliche CSS-Überschreibungen bestimmt, sondern bereits während der SCSS-Kompilierung über zentrale Design Tokens und Bootstrap-Variablen festgelegt.

Eigene CSS-Regeln dienen ausschließlich der Umsetzung eigener Komponenten oder Funktionen und nicht der nachträglichen Korrektur von Bootstrap.

> Alle projektspezifischen Design Tokens erhalten den Präfix ds-. Bootstrap-Variablen werden ausschließlich innerhalb der Bootstrap-Integration verwendet. Dadurch bleibt > das Designsystem unabhängig von der Implementierung und kann zukünftig auch mit einem anderen CSS-Framework oder einer eigenen Komponentenbibliothek genutzt werden.

## Architekturprinzip
Die Gestaltung folgt einer eindeutigen Verantwortlichkeit:

> - Designsystem
> - Design Tokens
> - Bootstrap SCSS Variablen
> - Bootstrap Kompilierung
> - Template CSS

Bootstrap übernimmt die technische Umsetzung, das Designsystem definiert das Erscheinungsbild.

## Konsequenzen
### Vorteile
- Zentrale Steuerung aller Designparameter
- Konsistentes Erscheinungsbild
- Hohe Wartbarkeit
- Deutlich weniger CSS-Spezifitätskonflikte
- Verzicht auf umfangreiche !important-Regeln
- Bootstrap bleibt updatefreundlich
- Änderungen erfolgen an einer zentralen Stelle

### Nachteile
- Höherer Planungsaufwand zu Beginn des Projektes
- Gute Kenntnisse der Bootstrap-SCSS-Struktur erforderlich
- Designentscheidungen müssen frühzeitig definiert werden

## Begründung

Das Designsystem ist die maßgebliche Quelle für alle gestalterischen Entscheidungen.
Bootstrap ist ein Werkzeug zur technischen Umsetzung dieser Entscheidungen und bestimmt nicht das Erscheinungsbild des Templates.

Dadurch bleibt die Kontrolle über Farben, Typografie, Abstände, Komponenten und weitere Designelemente jederzeit beim Projekt selbst.
