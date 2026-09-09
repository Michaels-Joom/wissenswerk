# DV-003 -- WissensWerk-Menü im Editor

## 1. Zweck

Dieses Dokument beschreibt das optionale WissensWerk-Menü innerhalb der
Editor-Oberfläche.

Das Menü ist eine **Benutzeroberflächen- und Komfortfunktion**. Es ist
keine Voraussetzung für die Funktion der WissensWerk-Editorblöcke.

Die redaktionellen Funktionen bleiben auch über den normalen
Joomla-Mechanismus **CMS Inhalt** erreichbar.

------------------------------------------------------------------------

## 2. Ausgangspunkt

Joomla stellt Editor-XTD-Buttons zentral über das Menü **CMS Inhalt**
bereit.

Dieser Mechanismus ist für Erweiterungen vorgesehen und bleibt die
grundlegende Zugriffsmöglichkeit für WissensWerk.

Mit zunehmender Anzahl eigener WissensWerk-Komponenten kann eine
zusätzliche Bündelung sinnvoll werden.

Das WissensWerk-Menü schafft hierfür einen eigenen Bereich innerhalb von
TinyMCE.

------------------------------------------------------------------------

## 3. Grundprinzip

Das WissensWerk-Menü ist eine zusätzliche Zugriffsebene:

``` text
Joomla CMS Inhalt
    │
    └── WW-Funktionen

TinyMCE WissensWerk
    │
    └── WW-Funktionen
```

Beide Wege greifen auf dieselben Funktionen zu.

Das Menü dupliziert daher keine redaktionelle Logik.

------------------------------------------------------------------------

## 4. Toolbar

In der TinyMCE-Toolbar wird WissensWerk neben dem vorhandenen
Joomla-Menü dargestellt.

Ziel:

``` text
CMS Inhalt ▼    WissensWerk ▼    B    I    U    ...
```

Die Reihenfolge ist bewusst gewählt:

1.  Joomla-Standardbereich **CMS Inhalt**
2.  eigener Bereich **WissensWerk**
3.  übrige Formatierungs- und Editorwerkzeuge

Dadurch bleibt die vertraute Joomla-Funktion an ihrer gewohnten Stelle
und der zusätzliche WissensWerk-Bereich ist unmittelbar daneben
erreichbar.

------------------------------------------------------------------------

## 5. WissensWerk-Icon

Der Toolbar-Eintrag verwendet das WissensWerk-Symbol.

Das Icon ist ein eigenständiges grafisches Asset und nicht an eine
Icon-Font gebunden.

Aktuelle Referenz:

``` text
50 × 50 px
```

Für die Darstellung in der TinyMCE-Toolbar wird das Asset auf die
erforderliche UI-Größe angepasst.

Das Symbol soll die WissensWerk-Marke sichtbar machen, ohne die übrigen
Toolbar-Elemente optisch zu dominieren.

In der TinyMCE-Menüleiste ist kein Icon erforderlich.

------------------------------------------------------------------------

## 6. Menüleiste

Zusätzlich kann WissensWerk als eigenes Top-Level-Menü in der
TinyMCE-Menüleiste erscheinen:

``` text
Bearbeiten | Einfügen | Ansicht | Format | Tabelle | Werkzeuge | WissensWerk
```

Das Menü kann die gleichen redaktionellen Funktionen anbieten wie das
Toolbar-Menü.

Beispiel:

``` text
WissensWerk
    └── WW Article – Split
```

Mit weiteren WW-Komponenten kann dieses Menü später erweitert werden.

------------------------------------------------------------------------

## 7. Erste Funktion

Der erste exemplarische Menüeintrag ist:

``` text
WW Article – Split
```

Er stellt den strukturierten WissensWerk-Block für einen Artikel bereit.

Der Menüeintrag verwendet dieselbe bestehende Editor-Action wie der
Joomla-XTD-Button.

Damit gilt:

``` text
CMS Inhalt
    └── WW Article – Split
              │
              ▼
        gleiche Action
              ▲
              │
WissensWerk ──┘
    └── WW Article – Split
```

Es gibt somit keine doppelte Blockimplementierung.

------------------------------------------------------------------------

## 8. Erweiterbarkeit

Das WissensWerk-Menü ist von Anfang an so angelegt, dass weitere
redaktionelle Funktionen aufgenommen werden können.

Beispiel:

``` text
WissensWerk
├── WW Article – Split
├── WW Article – Hero
├── WW Article – Teaser
├── WW Article – Hinweis
└── ...
```

Diese Liste ist ausdrücklich **keine Festlegung der späteren
Komponenten**.

Neue Einträge sollen erst dann entstehen, wenn dafür eine konkrete
redaktionelle Funktion und ein nachvollziehbarer Anwendungsfall
vorhanden sind.

Das verhindert eine vorschnelle Sammlung von Werkzeugen ohne klaren
Zweck.

------------------------------------------------------------------------

## 9. Kein Page Builder

Das WissensWerk-Menü ist kein Page Builder.

Es übernimmt insbesondere nicht:

-   freie Seitenkomposition
-   globale Layoutsteuerung
-   Spaltenverwaltung für komplette Seiten
-   visuelle Drag-and-Drop-Bearbeitung
-   Verwaltung einer eigenen Inhaltsdatenbank

Die redaktionelle Arbeit findet weiterhin innerhalb des Joomla-Artikels
statt.

Die WW-Blöcke sind kontrollierte Inhaltsbausteine.

------------------------------------------------------------------------

## 10. CMS Inhalt bleibt erhalten

Das eigene Menü ersetzt **CMS Inhalt** ausdrücklich nicht.

Die gewünschte Architektur lautet:

``` text
CMS Inhalt
    ├── Joomla-Funktionen
    ├── WW Article – Split
    └── weitere XTD-Funktionen

WissensWerk
    ├── WW Article – Split
    └── weitere WW-Funktionen
```

Dadurch bleiben alle WW-Funktionen auch über den normalen Joomla-Weg
erreichbar.

Das eigene Menü ist somit eine zusätzliche Komfortebene und kein
proprietärer Ersatz für Joomla.

------------------------------------------------------------------------

## 11. Warum eine separate Menüebene?

Die Trennung bietet einen praktischen Vorteil.

Die Joomla-Liste **CMS Inhalt** enthält bereits verschiedene
Systemfunktionen:

``` text
Beitrag
Felder
Kontakt
Medien
Menü
Modul
Seitenumbruch
Weiterlesen
...
```

WissensWerk kann dagegen seine eigenen redaktionellen Werkzeuge gezielt
zusammenfassen.

Damit wächst die Zahl der WW-Funktionen nicht automatisch zu einer immer
längeren, unstrukturierten Liste im Joomla-Bereich.

Gleichzeitig bleibt der bestehende Joomla-Zugang erhalten.

------------------------------------------------------------------------

## 12. Optionale UI -- keine harte Architekturvorgabe

Das WissensWerk-Menü ist bewusst als **optionale UI-Schicht** definiert.

Daraus folgt:

> WissensWerk-Editorfunktionen müssen unabhängig vom Vorhandensein
> dieses Menüs funktionieren.

Sollte eine spätere Joomla- oder TinyMCE-Version Änderungen an der
Menüintegration erforderlich machen, können die Editor-XTD-Funktionen
weiterhin über **CMS Inhalt** genutzt werden.

Das erhöht die Robustheit des Gesamtsystems.

------------------------------------------------------------------------

## 13. Wartbarkeit

Das Menü enthält ausschließlich Verweise auf vorhandene redaktionelle
Actions.

Es soll keine eigene Fachlogik enthalten.

Damit bleibt die Verantwortlichkeit klar:

``` text
Editor-XTD
    → Funktion

TinyMCE-Integration
    → technische Integration

WissensWerk-Menü
    → Benutzeroberfläche
```

Diese Trennung erleichtert spätere Änderungen und verhindert, dass
UI-Anpassungen die eigentliche Inhaltsfunktion beeinflussen.

------------------------------------------------------------------------

## 14. Update-Sicherheit

Das WissensWerk-Menü wird ausschließlich über die eigene Erweiterung
umgesetzt.

Joomla-Core-Dateien werden nicht verändert.

Insbesondere wird keine Änderung an der Joomla-Datei vorgenommen, die
die XTD-Buttons des CMS-Inhalt-Menüs zusammenstellt.

Damit bleibt der Joomla-Standardmechanismus unabhängig von der
WissensWerk-Menüintegration.

------------------------------------------------------------------------

## 15. Aktueller Referenzstand

Der aktuelle Referenzstand ist **WissensWerk Editor 0.2.13**.

Er demonstriert:

-   eigenes WissensWerk-Menü in der Toolbar
-   WissensWerk-Menü in der TinyMCE-Menüleiste
-   WissensWerk-Icon in der Toolbar
-   `WW Article – Split` als erster Menüeintrag
-   gemeinsame Action mit dem Joomla-XTD-Button
-   Erhalt des Zugangs über **CMS Inhalt**

Der Referenzstand beschreibt die aktuell getestete Umsetzung und stellt
keine Verpflichtung dar, die spätere Oberfläche unverändert
beizubehalten.

------------------------------------------------------------------------

## 16. Architekturentscheidung

Das WissensWerk-Menü wird als **zusätzliche redaktionelle UI-Schicht**
verstanden.

Die Entscheidung lässt sich zusammenfassen:

``` text
Joomla CMS
    │
    └── Standardzugang zu Editor-XTD-Funktionen
             │
             ▼
       WissensWerk-Funktionen
             ▲
             │
    zusätzliche TinyMCE-UI
             │
             └── WissensWerk-Menü
```

Damit bleibt WissensWerk eng an Joomla orientiert, erhält aber dort eine
eigene Benutzeroberfläche, wo die Anzahl und Eigenständigkeit der
WW-Werkzeuge dies sinnvoll machen.

------------------------------------------------------------------------

## 17. Ergebnis

Das WissensWerk-Menü schafft einen eigenen, klar erkennbaren Bereich für
redaktionelle WW-Werkzeuge.

Es ergänzt Joomla, ersetzt Joomla aber nicht.

Der wichtigste Grundsatz lautet:

> **Die Funktion gehört WissensWerk -- das Menü ist nur ein möglicher
> Zugang zu dieser Funktion.**
