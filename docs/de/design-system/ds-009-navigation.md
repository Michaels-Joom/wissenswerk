[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipien-uebersicht.md)

---

# DS-009 Navigation

**Dokumenttyp:** Designsystem  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Die Navigation ermöglicht eine klare Orientierung innerhalb der Website.

Sie unterstützt Benutzer dabei, Inhalte schnell zu finden und den aktuellen Standort innerhalb der Informationsstruktur zu erkennen.

---

## Architekturprinzip

Die Navigation verbindet drei Ebenen:

```text
Joomla
  → Menüstruktur

MetisMenu
  → hierarchisches Verhalten

WissensWerk
  → Darstellung und projektspezifische Zustände
```

Bootstrap stellt für das Offcanvas die technische Containerfunktion bereit.

---

## Gestaltungsprinzipien

- Die Navigation ist einfach und verständlich.
- Die Hierarchie ist visuell nachvollziehbar.
- Der aktuelle Standort ist eindeutig erkennbar.
- Geöffnete Untermenüs sind klar unterscheidbar.
- Interaktionen sind vorhersehbar.
- Navigation ist mit Maus, Tastatur und Touch bedienbar.
- Aktive und aktuelle Zustände werden deutlich dargestellt.
- Die Navigation unterstützt den Inhalt und tritt visuell hinter ihn zurück.

---

## Navigationsbereiche

### Header

Die Desktop-Navigation befindet sich im Header.

Der Header startet geschlossen hinsichtlich seiner Untermenüs.

Beim Öffnen eines Hauptmenüzweigs kann der zum aktuellen Seitenpfad gehörende Unterpfad geöffnet werden.

### Sidebar

Die Sidebar kann eine hierarchische Seitennavigation enthalten.

Beim Laden der Seite wird der aktive Pfad geöffnet, damit die aktuelle Position sichtbar bleibt.

### Offcanvas

Das Offcanvas stellt die Navigation für mobile und schmale Bildschirmbereiche bereit.

Die Navigation befindet sich dort in einem eigenen scrollbaren Bereich.

---

## Gemeinsame visuelle Sprache

Header, Sidebar und Offcanvas verwenden dieselbe grundlegende Navigationsgestaltung.

Gemeinsame Merkmale sind insbesondere:

- Typografie
- Abstände
- aktive Zustände
- Fokuszustände
- Untermenüstruktur
- Toggle-Darstellung

Die unterschiedlichen Layoutbereiche können dennoch unterschiedliche Zustandslogiken besitzen.

---

## Menüebenen

Die Menüstruktur ist hierarchisch aufgebaut.

Die erste Ebene besitzt eine hervorgehobene Hauptfunktion.

Tiefere Ebenen werden durch Einrückung und reduzierte visuelle Gewichtung als Unterstruktur kenntlich gemacht.

Untermenüs werden innerhalb der aktuellen Layoutarchitektur im normalen vertikalen Fluss dargestellt, wenn ein seitliches Flyout für die verfügbare Bildschirmbreite nicht sinnvoll ist.

---

## Aktive und aktuelle Zustände

Der aktuelle Menüpunkt wird eindeutig hervorgehoben.

Elternpunkte des aktuellen Pfades erhalten eine entsprechende visuelle Kennzeichnung.

Geöffnete Zustände werden zusätzlich über die Interaktion des Menüs dargestellt.

Dabei werden Zustand und Position nicht ausschließlich über Farbe vermittelt.

---

## Toggle und Interaktion

Untermenüs werden über eindeutig erkennbare Toggle-Elemente geöffnet und geschlossen.

Der Toggle ist als Bedienelement vom eigentlichen Link unterscheidbar.

Fokuszustände bleiben sichtbar.

---

## Responsive Verhalten

Die Navigation passt sich dem verfügbaren Platz an.

Grundsätzlich gilt:

```text
größere Bildschirmbreite
    → Header-Navigation

kleinere Bildschirmbreite
    → Offcanvas-Navigation
```

Die Sidebar kann abhängig vom Layout zusätzlich vorhanden sein.

Das Offcanvas vermeidet horizontales Überlaufen und besitzt einen ausschließlich vertikal scrollbar ausgelegten Navigationsbereich.

---

## Barrierefreiheit

Die Navigation berücksichtigt:

- Tastaturbedienung
- sichtbare Fokuszustände
- semantische Links und Buttons
- erkennbare Zustände
- Touch-Bedienung
- ausreichende Kontraste
- Escape zum Schließen des Offcanvas über die Bootstrap-Funktion

---

## Technische Abgrenzung

Dieses Dokument beschreibt die Gestaltung und das Verhalten aus Sicht des Designsystems.

Die technische Implementierung wird in folgenden Dokumenten beschrieben:

- AR-005 JavaScript-Architektur
- AR-006 Web Asset API
- AR-007 Bootstrap-Integration
- AR-016 Offcanvas-Architektur
- DV-007 Navigation

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprüngliche Navigationsregeln erstellt. |
| 2.0 | 02.09.2026 | Navigation an die tatsächlich umgesetzte MetisMenu-/Bootstrap-/Joomla-Architektur sowie Header-, Sidebar- und Offcanvas-Zustände angepasst. |
