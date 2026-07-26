[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md)  [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-008 Asset Management

> **Status:** Draft
>
> Dieses Dokument beschreibt die Organisation und Verwaltung aller statischen Ressourcen (Assets) innerhalb des Templates.

---

## Ziel
Ein strukturiertes Asset Management verbessert Wartbarkeit, Performance und Erweiterbarkeit des Templates.
Assets umfassen sämtliche statischen Ressourcen, die vom Browser geladen werden.

Dazu gehören unter anderem:
- Stylesheets (CSS)
- Sass-Dateien (SCSS)
- JavaScript
- Schriftarten
- Bilder
- SVG-Dateien
- Icons

Die eigentliche Einbindung der Assets erfolgt über die Joomla Web Asset API und wird in **AR-006 Web Asset API** beschrieben.

## Grundprinzipien
Das Asset Management folgt folgenden Grundsätzen:

- klare Verzeichnisstruktur
- eindeutige Dateinamen
- Trennung von Quell- und Ausgabedateien
- keine doppelten Assets
- möglichst geringe Anzahl benötigter Dateien
- Wiederverwendung vorhandener Ressourcen

## Verzeichnisstruktur

Ein mögliches Template besitzt beispielsweise folgende Struktur:

```text
template/
│
├── css/
├── scss/
├── js/
├── images/
├── fonts/
└── media/
```

Jedes Verzeichnis besitzt einen klar definierten Zweck.

## SCSS als Quelle
SCSS dient ausschließlich der Entwicklung.
Die erzeugten CSS-Dateien stellen das eigentliche Auslieferungsformat dar.

```
scss/
    template.scss
        ↓

css/
    template.css
```

CSS-Dateien werden niemals manuell bearbeitet.

---

## JavaScript
JavaScript-Dateien werden thematisch getrennt.
Beispielsweise:

```text
js/

navigation.js

offcanvas.js

scroll.js

template.js
```

Unabhängige Funktionen bleiben dadurch leichter wartbar.

## Bilder
Bilder werden ausschließlich entsprechend ihres Verwendungszwecks gespeichert.
Beispielsweise:

```text
images/
logos/
icons/
backgrounds/
content/
```

Große Sammelordner sollen vermieden werden.

## Icons
Icons werden möglichst als SVG verwendet.

*Vorteile:*
- verlustfreie Skalierung
- geringe Dateigröße
- einfache Farbänderung per CSS
- hohe Darstellungsqualität

## Schriftarten

Nach Möglichkeit werden lokale Schriftarten verwendet.

Vorteile:
- Datenschutz
- bessere Performance
- vollständige Kontrolle über Versionen

> [!CAUTION]
> 
> Externe Font-CDNs sind aus Datenschutzrechtlichen Gründen nicht erlaubt.
> Hierzu gibt er bereits Urteile der deutschen Gerichte
> 

## Performance
Assets sollen möglichst effizient ausgeliefert werden.

Dabei gelten folgende Grundsätze:
- unnötige Dateien vermeiden
- ungenutztes JavaScript entfernen
- nur tatsächlich benötigte CSS-Dateien laden
- Bilder optimieren
- SVG bevorzugen

## Wartbarkeit
Asset Management bedeutet nicht nur Dateien abzulegen.
Es beschreibt eine langfristige Strategie zur Verwaltung sämtlicher Ressourcen.

Eine konsistente Struktur erleichtert:
- Erweiterungen
- Fehlersuche
- Zusammenarbeit
- Wartung
- zukünftige Releases

## Architekturentscheidung

Das Template trennt konsequent zwischen:

- Quellcode (SCSS)
- erzeugten Dateien (CSS)
- Skripten
- Medien
- Schriftarten

Alle Assets werden eindeutig organisiert und über die Joomla Web Asset API eingebunden.

## Verwandte Dokumente

- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-006 Web Asset API](./ar-006-web-asset-api.md)
- [🏗️ AR-009 Joomla-Overrides](./ar-009-joomla-overrides.md)

