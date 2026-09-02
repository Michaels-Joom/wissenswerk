# ADR-003 – Auslieferung der SCSS-Quellen

**Status:** Angenommen  
**Version:** 2.0  
**Datum:** 02.09.2026  
**Projekt:** WissensWerk

## Kontext

WissensWerk verwendet SCSS als zentrale Quelle für die Template-Gestaltung. Für die produktive Nutzung werden daraus CSS-Dateien erzeugt.

## Entscheidung

WissensWerk liefert neben den kompilierten CSS-Dateien auch die vollständigen SCSS-Quelldateien aus.

Die SCSS-Dateien bleiben damit Bestandteil des veröffentlichten Templates und der Dokumentation.

## Begründung

WissensWerk ist nicht nur ein produktives Template, sondern zugleich ein Referenz- und Lernprojekt.

Die Auslieferung der Quellen ermöglicht:

- vollständige Nachvollziehbarkeit der Gestaltung
- Einsicht in die SCSS-Architektur
- einfache Erweiterbarkeit
- individuelle Anpassungen
- bessere Wiederverwendung der Komponenten
- nachvollziehbare Verbindung zwischen Design Tokens und kompiliertem CSS

## Konsequenzen

### Vorteile

- transparente Architektur
- hohe Nachvollziehbarkeit
- einfache Erweiterbarkeit
- bessere Lern- und Referenzwirkung

### Nachteile

- größere Auslieferung als bei ausschließlich kompiliertem CSS
- interne SCSS-Struktur ist Bestandteil des veröffentlichten Projekts

## Abgrenzung

Die Auslieferung der SCSS-Quellen bedeutet nicht, dass SCSS beim produktiven Betrieb kompiliert werden muss.

Die kompilierten CSS-Dateien werden als fertige Assets ausgeliefert. Der SCSS-Build gehört zum Entwicklungs- beziehungsweise Releaseprozess.

## Fazit

Die Auslieferung der SCSS-Quellen entspricht dem Charakter von WissensWerk als Referenz-, Lern- und Entwicklungsprojekt und unterstützt gleichzeitig Wartbarkeit und Erweiterbarkeit.
