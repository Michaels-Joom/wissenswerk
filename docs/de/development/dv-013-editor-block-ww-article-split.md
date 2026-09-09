# DV-001 -- Editor-Block „WW Article -- Split"

## 1. Zweck

Der Editor-Block **„WW Article -- Split"** stellt im Joomla-Editor einen
kontrollierten WissensWerk-Inhaltsbaustein zur Verfügung.

Der Baustein dient dazu, redaktionelle Inhalte innerhalb eines
Joomla-Artikels strukturiert als Split-Section auszugeben. Dabei können
Text, optionale Überschriften, Medien und ein optionaler Button
miteinander kombiniert werden.

Der Baustein ist **kein eigener Artikel, kein Page Builder und kein
Ersatz für die Joomla-Artikelstruktur**.

Joomla bleibt für Artikel, Titel, Kategorien, Routing, Metadaten und
weitere redaktionelle Funktionen verantwortlich.

------------------------------------------------------------------------

## 2. Architekturentscheidung

Der Baustein wurde bewusst als **Inhaltsbaustein innerhalb eines
bestehenden Joomla-Artikels** konzipiert.

Die Verantwortung ist getrennt:

  -----------------------------------------------------------------------
  Ebene                               Verantwortung
  ----------------------------------- -----------------------------------
  Joomla                              Artikel, Titel, Kategorie, Routing,
                                      Metadaten und redaktionelle
                                      Struktur

  Template                            Seitenaufbau, Hero, Grid und
                                      Darstellung des Joomla-Artikels

  Editor-Plugin                       Erzeugung definierter
                                      WissensWerk-Inhaltsbausteine

  SCSS                                Layout und visuelle Gestaltung des
                                      Bausteins

  Joomla Editor                       Normaler redaktioneller Inhalt
  -----------------------------------------------------------------------

Das Plugin soll Joomla **ergänzen**, nicht die vorhandene
Joomla-Struktur ersetzen.

------------------------------------------------------------------------

## 3. Überschriftenhierarchie

Die Überschriftenebene wird nicht global vom Plugin festgelegt.

WissensWerk verwendet unterschiedliche Seitentypen und damit
unterschiedliche Kontexte.

### 3.1 Normale WissensWerk-Seite

Der Hero stellt den Seitentitel als `H1` bereit.

Beispiel:

``` html
<h1>Menschen. Ideen. Lösungen</h1>
```

Ein Split-Abschnitt kann darunter beispielsweise eine eigene `H2`
verwenden:

``` html
<h2>Wer steckt hinter WissensWerk</h2>
```

### 3.2 Blog-Kontext

Im Blog stellt der Hero den übergeordneten Blog-Kontext als `H1` bereit.

Der konkrete Joomla-Artikel erhält darunter seine eigene Überschrift als
`H2`.

Beispiel:

``` html
<h1>Wissenswerk</h1>
<h2>Test 27</h2>
```

Ein darunterliegender Split-Abschnitt kann bei Bedarf eine weitere
Unterüberschrift als `H3` erhalten.

### 3.3 Konsequenz für den Editor-Block

Die Überschrift des Split-Blocks ist daher **optional**.

Wenn eine Überschrift verwendet wird, kann zwischen `H2` und `H3`
gewählt werden.

Zulässige Ebenen:

-   `H2`
-   `H3`

`H1` wird vom Editor-Block bewusst nicht angeboten.

Der Block erzeugt bei leerer Überschrift kein leeres Heading-Element.

------------------------------------------------------------------------

## 4. Felder des Editor-Dialogs

Der aktuelle Funktionsumfang des Blocks umfasst:

  -----------------------------------------------------------------------
  Feld                    Status                  Funktion
  ----------------------- ----------------------- -----------------------
  Eyebrow                 optional                Kurze thematische
                                                  Einordnung

  Überschrift             optional                Abschnittsüberschrift

  Überschriftsebene       optional                `H2` oder `H3`

  Subtitel                optional                Ergänzende Information

  Content                 **Pflichtfeld**         Hauptinhalt des
                                                  Abschnitts

  Bild                    optional                Auswahl über den
                                                  Joomla-Medienmanager

  Bildposition            optional                links oder rechts

  Bildgröße               optional                S, M, L, XL oder Full

  Button                  optional                Verlinkung zu einem
                                                  Joomla-Artikel oder
                                                  einer URL
  -----------------------------------------------------------------------

Die Pflichtigkeit des Contents stellt sicher, dass kein leerer
Split-Baustein erzeugt wird.

------------------------------------------------------------------------

## 5. Ausgabe des Bausteins

Der Editor-Block erzeugt eine eigenständige Section.

Beispiel mit Überschrift:

``` html
<section class="ww-article-split ww-article-split--media-left">
    <div class="ww-article-split__content">
        <p class="ww-eyebrow">Der Auslöser</p>
        <h3>Steampunk eine neue Webseite</h3>
        <p>Der eigentliche redaktionelle Inhalt ...</p>
    </div>

    <div class="ww-article-split__media">
        <figure class="ww-article-media ww-article-media--xl">
            <img src="images/artikel/artikel/wissenswerk-1-1.png"
                 alt=""
                 width="300"
                 height="148"
                 loading="lazy">
        </figure>
    </div>
</section>
```

Beispiel ohne Überschrift:

``` html
<section class="ww-article-split">
    <div class="ww-article-split__content">
        <p class="ww-eyebrow">Hintergrund</p>
        <p>Der eigentliche redaktionelle Inhalt ...</p>
    </div>
</section>
```

Es wird niemals ein leeres `<h2>` oder `<h3>` erzeugt.

------------------------------------------------------------------------

## 6. Mehrere Split-Sections in einem Artikel

Ein Joomla-Artikel kann mehrere `WW Article – Split`-Bausteine
enthalten.

Beim Einfügen eines neuen Blocks wird nicht die aktuelle Cursorposition
als Einfügepunkt verwendet.

Stattdessen sucht das Plugin den **letzten schließenden
`</section>`-Tag** im vorhandenen Artikelinhalt.

Der neue Block wird unmittelbar danach in einer neuen Zeile eingefügt.

Damit entsteht beispielsweise:

``` html
<section class="ww-article-split">
    ...
</section>
<section class="ww-article-split">
    ...
</section>
```

Die Sections bleiben dadurch Geschwisterelemente und werden nicht
versehentlich ineinander verschachtelt.

### Verhalten ohne vorhandene Section

Wenn im Artikel noch keine `</section>` vorhanden ist, wird der neue
Block am Ende des vorhandenen Inhalts eingefügt.

### Architekturentscheidung

Diese Logik ist bewusst einfach gehalten.

Der Editor-Block versucht nicht, den gesamten HTML-Inhalt des Artikels
zu analysieren oder eine eigene DOM-Struktur aufzubauen.

------------------------------------------------------------------------

## 7. Medienauswahl

Die Bildauswahl verwendet den **Joomla-eigenen Medienmanager**.

Das Plugin verwendet hierfür nicht das `joomla-field-media`-Feld als
Ersatzdialog, sondern bindet die vorhandene Joomla-Medienauswahl über
die von Joomla bereitgestellte Editor-/Media-API ein.

Damit bleibt die Medienauswahl an die vorhandene Joomla-Funktionalität
gekoppelt.

Die finale HTML-Ausgabe wird weiterhin vom WissensWerk-Block
kontrolliert.

### Konsequenz

Der Medienmanager ist für die Auswahl des Mediums zuständig.

WissensWerk ist für dessen Darstellung innerhalb des Blocks zuständig.

------------------------------------------------------------------------

## 8. Mediengrößen

Für den Split-Block sind folgende WissensWerk-Größen definiert:

  Größe                        Wert
  ------- -------------------------
  S                          100 px
  M                          200 px
  L                          400 px
  XL                         500 px
  Full      volle verfügbare Breite

Die Größen werden über die vorhandenen Klassen des Designsystems
abgebildet:

``` text
ww-article-media--s
ww-article-media--m
ww-article-media--l
ww-article-media--xl
ww-article-media--full
```

Die konkrete visuelle Umsetzung verbleibt im SCSS des Templates.

------------------------------------------------------------------------

## 9. Link- und Button-Funktion

Der optionale Button kann auf einen Joomla-Artikel oder auf eine manuell
angegebene URL verweisen.

Die Artikelauswahl erfolgt über die Joomla-eigene Content-Auswahl.

Damit wird kein separates WissensWerk-Linksystem aufgebaut.

------------------------------------------------------------------------

## 10. Versionsstand

Aktueller Entwicklungsstand des Editor-Plugins:

**Version 0.2.5**

In dieser Version sind insbesondere folgende Entscheidungen umgesetzt:

1.  `WW Article – Split` als eigenständiger Inhaltsbaustein.
2.  Mehrere Split-Sections innerhalb eines Joomla-Artikels.
3.  Einfügen neuer Sections nach dem letzten `</section>`.
4.  Optionale Überschrift.
5.  Auswahl der Überschriftsebene `H2` oder `H3`.
6.  Kein leeres Heading bei fehlender Überschrift.
7.  Content als einziges Pflichtfeld.
8.  Joomla-Medienmanager für die Bildauswahl.
9.  Optionale Medienposition und Mediengröße.
10. Optionale Button-Verlinkung.

------------------------------------------------------------------------

## 11. Nicht Bestandteil des Blocks

Folgende Aufgaben gehören ausdrücklich **nicht** zum
`WW Article – Split`:

-   Erzeugung eines Joomla-Artikels
-   Verwaltung des Joomla-Artikeltitels
-   Definition des Seitentyps
-   Definition des Hero-Bereichs
-   globale Steuerung der Überschriftenhierarchie
-   eigenes Routing
-   eigenes Medienmanagement
-   Page-Builder-Funktionalität
-   Änderung von Joomla-Core-Dateien

Damit bleibt der Baustein klar abgegrenzt und wartbar.

------------------------------------------------------------------------

## 12. Wartbarkeit und Update-Sicherheit

Die Umsetzung folgt den Grundsätzen des WissensWerk-Projekts:

-   keine Änderungen am Joomla-Core
-   Verwendung von Joomla-APIs
-   Verwendung des Joomla Web Asset Systems
-   Nutzung vorhandener Joomla-Funktionen statt eigener Ersatzlösungen
-   visuelle Gestaltung ausschließlich über Template/SCSS
-   keine unnötige Abhängigkeit von einem Page Builder
-   klar definierter Verantwortungsbereich des Plugins

Dadurch kann der Baustein unabhängig vom Joomla-Core weiterentwickelt
werden.

------------------------------------------------------------------------

## 13. Ergebnis

Mit Version 0.2.5 ist der erste WissensWerk-Editor-Baustein
konzeptionell und funktional ausreichend definiert.

Die wichtigste Architekturentscheidung lautet:

> **Der WW Article -- Split ist ein strukturierter Inhaltsbaustein
> innerhalb eines Joomla-Artikels. Er ergänzt Joomla, übernimmt aber
> keine Aufgaben der Joomla-Artikel- oder Seitenstruktur.**

Die optionale Überschrift und die Auswahl zwischen `H2` und `H3`
ermöglichen die Verwendung sowohl auf normalen WissensWerk-Seiten als
auch im Blog-Kontext, ohne die Seitenstruktur künstlich im Editor-Plugin
abzubilden.

Der Baustein kann damit als **Referenz für die Entwicklung weiterer
WissensWerk-Editor-Bausteine** dienen.
