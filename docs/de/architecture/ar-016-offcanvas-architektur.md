# AR-016 – Offcanvas-Architektur

## Dokumentinformationen

| Merkmal | Wert |
|----------|------|
| Dokument | AR-016 |
| Titel | Offcanvas-Architektur |
| Version | 1.0 |
| Status | Entwurf |
| Autor | WissensWerk |
| Gültig ab | Joomla 5.x |

## Ziel
Das Offcanvas dient als zentrale Navigation für mobile und schmale Bildschirmgrößen. Die Implementierung basiert auf Bootstrap 5 und wird vollständig in die Architektur des WissensWerk-Templates integriert.

Dabei wird Bootstrap ausschließlich als technische Grundlage verwendet. Das visuelle Erscheinungsbild orientiert sich vollständig am WissensWerk-Designsystem.

## Architekturprinzipien
Das Offcanvas folgt den allgemeinen Architekturregeln des Projekts.

- Keine Änderungen am Joomla-Core
- Nutzung der Bootstrap-Offcanvas-Komponente
- Trennung von Struktur, Darstellung und Verhalten
- Gestaltung ausschließlich über SCSS
- Verwendung der Joomla Web Asset API
- Barrierefreie Bedienung
- Erweiterbarkeit durch Modulpositionen

## Architekturübersicht

```
Header
    │
    ├── Toggle Button
    │
    ▼
Bootstrap Offcanvas
    │
    ├── Kopfbereich
    │      ├── Logo
    │      └── Schließen-Button
    │
    ├── Navigation
    │
    ├── Erweiterungsbereich
    │      ├── Suche
    │      ├── Module
    │      ├── Social Media
    │      └── Zusatzinformationen
    │
    └── Footer
```

## Dateistruktur

```
templates/wissenswerk/
│
├── includes/
│   └── offcanvas.php
│
├── html/
│
└── index.php
```

SCSS

```
media/templates/site/wissenswerk/scss/
│
├── components/
│   └── _offcanvas.scss
│
└── template.scss
```

## Verantwortlichkeiten

### offcanvas.php

Aufgaben

- Aufbau der HTML-Struktur
- Bootstrap-Offcanvas initialisieren
- Joomla-Modulpositionen ausgeben
- Bootstrap-Klassen verwenden
- keine Gestaltung

### _offcanvas.scss

Aufgaben

- Farben
- Typografie
- Abstände
- Animationen
- Responsive Anpassungen
- Hover- und Fokuszustände

### Bootstrap

Bootstrap übernimmt ausschließlich

- Öffnen
- Schließen
- Animation
- Fokusverwaltung
- Scroll-Lock
- Accessibility

Bootstrap definiert nicht das endgültige Erscheinungsbild.

## Designsystem
Alle Farben stammen aus den Design Tokens.

Beispiele

- Oberfläche
- Text
- Primärfarbe
- Rahmen
- Hover
- Fokus

Es werden keine Bootstrap-Farbvariablen für das Design verwendet.

## Komponentenstruktur

```
Offcanvas
│
├── Header
│
├── Navigation
│
├── Content
│
└── Footer
```

Diese Struktur ermöglicht zukünftige Erweiterungen ohne Änderungen an der Grundarchitektur.

## Navigation
Die Navigation ist eine eigenständige Komponente.

Das Offcanvas stellt lediglich den Container bereit.

Dadurch kann dieselbe Navigation verwendet werden

- im Header
- im Offcanvas
- im Footer

## Modulpositionen
Die Architektur berücksichtigt zusätzliche Modulpositionen.

Beispiele

- Suche
- Login
- Social Media
- Eigene Module

Die Implementierung bleibt vollständig Joomla-konform.

## Responsive Verhalten
Desktop

- Navigation im Header
- Offcanvas optional deaktiviert

Tablet

- Offcanvas als Hauptnavigation

Smartphone

- Vollständige Navigation im Offcanvas

## Barrierefreiheit
Das Offcanvas erfüllt folgende Anforderungen

- Tastaturbedienung
- sichtbare Fokuszustände
- Escape schließt das Menü
- ARIA-Attribute
- ausreichende Kontraste

Die Bootstrap-Accessibility wird vollständig übernommen und durch das Designsystem ergänzt.

## Erweiterbarkeit
Folgende Bereiche können zukünftig ergänzt werden.

- Suchfunktion
- Benutzeranmeldung
- Kontaktinformationen
- Social-Media-Links
- Mehrsprachigkeit
- Sprachumschalter
- Schnellzugriffe

Die Grundarchitektur bleibt dabei unverändert.

## Wartbarkeit
Die Implementierung folgt den Projektgrundsätzen.

- klare Trennung der Verantwortlichkeiten
- kleine, übersichtliche Dateien
- keine Inline-Styles
- keine Inline-JavaScripts
- Nutzung der Joomla Web Asset API
- konsequente Verwendung der Design Tokens

## Zusammenfassung
Das Offcanvas bildet die zentrale mobile Navigationskomponente des WissensWerk-Templates. Die Architektur trennt Struktur, Gestaltung und Verhalten konsequent voneinander und orientiert sich vollständig an den Projektstandards. Bootstrap liefert ausschließlich die technische Funktionalität, während das Erscheinungsbild vollständig durch das WissensWerk-Designsystem bestimmt wird.

Die Komponente ist modular aufgebaut, barrierefrei, wartbar und für zukünftige Erweiterungen vorbereitet.