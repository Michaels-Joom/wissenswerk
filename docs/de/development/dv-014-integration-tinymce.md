# DV-002 -- Integration in TinyMCE

## 1. Zweck

Dieses Dokument beschreibt die Integration der
WissensWerk-Editorfunktionen in den Joomla-Editor TinyMCE.

Die TinyMCE-Integration baut auf dem in **DV-001 -- CMS /
Editor-Buttons** beschriebenen Joomla-Editor-System auf. Sie ersetzt
dieses System nicht und übernimmt auch nicht dessen fachliche Logik.

Ziel ist eine zusätzliche, übersichtliche Zugriffsebene für
WissensWerk-Funktionen innerhalb der TinyMCE-Oberfläche.

------------------------------------------------------------------------

## 2. Grundprinzip

WissensWerk verwendet den Joomla-Mechanismus für `editors-xtd`-Buttons
als funktionale Grundlage.

Die Integration in TinyMCE erfolgt darüber hinaus als eigene
TinyMCE-Erweiterung.

Damit werden zwei Ebenen voneinander getrennt:

``` text
Joomla Editor-Extension
        │
        ├── Editor-Button / Action
        │
        └── fachliche Funktion
                 ▲
                 │
        TinyMCE-Integration
                 │
                 ├── Toolbar
                 └── Menüleiste
```

Die TinyMCE-Oberfläche stellt somit lediglich zusätzliche Zugänge zu
bereits vorhandenen Funktionen bereit.

------------------------------------------------------------------------

## 3. Architektur

Die Integration besteht aus drei funktionalen Teilen:

### 3.1 Joomla `editors-xtd`

Der Joomla-XTD-Pluginmechanismus stellt die redaktionellen Funktionen
bereit.

Dazu gehören insbesondere:

-   Registrierung der Editor-Buttons
-   Registrierung der gemeinsamen Actions
-   Dialoge und Eingabefunktionen
-   Übergabe der erzeugten Inhalte an den Editor

Der bestehende Zugang über **CMS Inhalt** bleibt erhalten.

### 3.2 TinyMCE-Plugin

Für die zusätzliche WissensWerk-Oberfläche wird ein eigenes
TinyMCE-Plugin eingebunden.

Dieses Plugin ist für die TinyMCE-UI verantwortlich, insbesondere für:

-   das WissensWerk-Menü in der Toolbar
-   das WissensWerk-Menü in der Menüleiste
-   die Darstellung des WissensWerk-Icons
-   die Bereitstellung der Menüeinträge

Das TinyMCE-Plugin enthält dagegen nicht die eigentliche Logik des
redaktionellen Blocks.

### 3.3 Gemeinsame Joomla-Action

Der entscheidende Architekturpunkt ist die Wiederverwendung der
bestehenden Joomla-Editor-Action.

Beispiel:

``` text
CMS Inhalt
    └── WW Article – Split
             │
             ▼
      gemeinsame Action
             ▲
             │
WissensWerk
    └── WW Article – Split
```

Dadurch existiert nur eine Implementierung der Funktion.

------------------------------------------------------------------------

## 4. Web Asset API

Die benötigten JavaScript-Dateien werden über die Joomla Web Asset API
in die Anwendung eingebunden.

Die Abhängigkeiten zwischen Joomla TinyMCE, dem Joomla-TinyMCE-Bootstrap
und der WissensWerk-Erweiterung müssen dabei berücksichtigt werden.

Die WissensWerk-Bridge wird so eingebunden, dass sie erst verfügbar ist,
wenn die für die TinyMCE-Initialisierung benötigten Joomla-Objekte
vorhanden sind.

Dadurch wird die Ausführungsreihenfolge nicht dem Zufall der
Browser-Ladezeiten überlassen.

------------------------------------------------------------------------

## 5. TinyMCE-Konfiguration

Die WissensWerk-Integration ergänzt die bestehende TinyMCE-Konfiguration
um die eigene Erweiterung.

Konzeptionell werden dabei drei Informationen benötigt:

``` text
plugins
    → WissensWerk-TinyMCE-Plugin

toolbar
    → WissensWerk-Menü

external_plugins
    → JavaScript-Datei der Erweiterung
```

Die vorhandenen Joomla-TinyMCE-Plugins und Toolbar-Einträge bleiben
erhalten.

Es wird keine Joomla-Core-Datei verändert.

------------------------------------------------------------------------

## 6. Toolbar

Die Toolbar enthält den bestehenden Joomla-Eintrag:

``` text
CMS Inhalt ▼
```

und zusätzlich:

``` text
WissensWerk ▼
```

Die gewünschte Reihenfolge ist:

``` text
CMS Inhalt ▼    WissensWerk ▼    B    I    U    ...
```

Der WissensWerk-Eintrag verwendet das WissensWerk-Symbol als eigenes
TinyMCE-Icon.

Die Iconquelle ist ein separates 50 × 50 px großes WissensWerk-Bild. Für
die Darstellung innerhalb der Toolbar wird es auf eine für die Toolbar
geeignete Größe skaliert.

Das Icon ist Teil der UI und nicht Bestandteil der redaktionellen
Inhaltsdaten.

------------------------------------------------------------------------

## 7. Menüleiste

Zusätzlich zur Toolbar kann WissensWerk als eigenes Top-Level-Menü in
der TinyMCE-Menüleiste erscheinen:

``` text
Bearbeiten | Einfügen | Ansicht | Format | Tabelle | Werkzeuge | WissensWerk
```

Das Menü dient der Bündelung der WissensWerk-Funktionen.

Die Menüleiste benötigt kein zusätzliches Icon.

------------------------------------------------------------------------

## 8. Gemeinsame Actions statt doppelter Logik

Ein zentraler Architekturgrundsatz lautet:

> Eine redaktionelle Funktion wird nur einmal implementiert.

Ein Menüeintrag darf daher nicht eine zweite, davon unabhängige
Implementierung des Blocks erzeugen.

Beide Zugänge verwenden dieselbe Action:

``` text
CMS Inhalt
      │
      └── WW Article – Split
                 │
                 ▼
       JoomlaEditorButton Action
                 ▲
                 │
WissensWerk ─────┘
```

Änderungen an der eigentlichen Blockfunktion müssen dadurch nur an einer
Stelle vorgenommen werden.

------------------------------------------------------------------------

## 9. Abgrenzung

Die TinyMCE-Integration übernimmt nicht:

-   die Definition der Seitenstruktur
-   die Joomla-Menüstruktur
-   das Routing von Seiten
-   die Speicherung eigener Inhaltsdaten außerhalb des Joomla-Artikels
-   die fachliche Definition eines redaktionellen Blocks
-   die Gestaltung des Frontends

Diese Aufgaben bleiben bei Joomla beziehungsweise bei den dafür
vorgesehenen WissensWerk-Komponenten.

------------------------------------------------------------------------

## 10. Fallback

Der Zugang über **CMS Inhalt** bleibt bewusst erhalten.

Damit besteht auch dann ein funktionierender Joomla-Standardzugang, wenn
die zusätzliche WissensWerk-TinyMCE-Oberfläche in einer späteren Joomla-
oder TinyMCE-Version angepasst werden muss.

Das bedeutet:

``` text
Primärer redaktioneller Mechanismus
        │
        └── Joomla editors-xtd

Zusätzliche UI
        │
        └── WissensWerk in TinyMCE
```

Die TinyMCE-Integration ist somit eine Erweiterung und keine technische
Voraussetzung für die Funktion der WW-Editorblöcke.

------------------------------------------------------------------------

## 11. Update-Sicherheit

Die Integration verändert keine Joomla-Core-Dateien.

Insbesondere werden nicht angepasst:

-   Joomla-TinyMCE-Coredateien
-   Joomla-Editor-Coredateien
-   Joomla-Komponenten
-   Joomla-Templates

Eigene JavaScript-Dateien und Konfigurationen liegen innerhalb der
WissensWerk-Erweiterung.

Bei Joomla- oder TinyMCE-Updates ist insbesondere die Kompatibilität der
verwendeten TinyMCE-API und der Joomla-Editor-Integration zu prüfen.

------------------------------------------------------------------------

## 12. Aktueller Referenzstand

Der aktuelle technische Referenzstand dieser Integration ist
**WissensWerk Editor 0.2.13**.

Dieser Stand umfasst exemplarisch:

-   Joomla-XTD-Integration
-   TinyMCE-Toolbar-Integration
-   TinyMCE-Menüleisten-Integration
-   WissensWerk-Icon
-   Wiederverwendung der bestehenden Editor-Action

Der Versionsstand dokumentiert die aktuelle Umsetzung, ist aber keine
Festlegung, dass die spätere WissensWerk-Oberfläche dauerhaft exakt so
aussehen muss.

------------------------------------------------------------------------

## 13. Ergebnis

Die TinyMCE-Integration stellt eine zusätzliche redaktionelle
Zugriffsebene bereit, ohne die Joomla-Editorarchitektur zu ersetzen.

Der entscheidende Architekturvorteil besteht in der Trennung:

``` text
Funktion
    ≠
Benutzeroberfläche
```

Die Funktion bleibt unabhängig von TinyMCE organisiert. TinyMCE stellt
lediglich eine zusätzliche, für die Redaktion komfortable Oberfläche
bereit.
