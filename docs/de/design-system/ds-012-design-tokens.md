[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipien-uebersicht.md)

---

# DS-012 Design Tokens

**Dokumenttyp:** Designsystem  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Design Tokens bilden die zentrale Grundlage des WissensWerk-Designsystems.

Sie definieren wiederverwendbare Gestaltungswerte und unterstützen ein konsistentes Erscheinungsbild über Layouts und Komponenten hinweg.

---

## Architekturprinzip

Design Tokens beschreiben **semantische Gestaltungsrollen**.

Die aktuelle technische Umsetzung verwendet projektspezifische CSS Custom Properties mit dem Präfix:

```text
--ww-
```

Beispiele aus der aktuellen Implementierung:

```scss
--ww-color-background
--ww-color-text
--ww-color-border
--ww-color-secondary
--ww-color-surface-alt
--ww-color-surface-hover

--ww-space-2
--ww-space-3
--ww-space-4
--ww-space-5
--ww-space-6

--ww-font-family-body
--ww-font-size-base
--ww-font-size-lg
```

Die Beispiele stellen keinen vollständigen Tokenkatalog dar.

---

## Tokenrollen

Die aktuellen Tokenbereiche lassen sich insbesondere in folgende semantische Gruppen einteilen:

| Bereich | Beispiele / Rolle |
|---|---|
| Farbe | Background, Surface, Text, Border, Secondary, Hover |
| Typografie | Font Family, Font Size, weitere typografische Rollen |
| Spacing | `--ww-space-*` |
| Layout | projektbezogene Layoutwerte |
| Zustände | Hover, Focus, Active, Current |
| weitere Designwerte | nur bei tatsächlichem Wiederverwendungsbedarf |

---

## Design Tokens und Komponenten

Komponenten verwenden bevorzugt vorhandene Tokens.

Grundprinzip:

```text
Token
  ↓
Komponente
  ↓
Layout
```

Ein einzelner Komponentenwert soll nicht ohne Grund zu einem neuen globalen Token führen.

Umgekehrt soll ein wiederkehrender Gestaltungswert nicht dauerhaft an vielen Stellen als unabhängiger Einzelwert gepflegt werden.

---

## Design Tokens und Bootstrap

Design Tokens sind die WissensWerk-Ebene der visuellen Gestaltung.

Bootstrap stellt technische Grundlagen bereit.

Daher gilt:

```text
Bootstrap
    → technische Funktion / Framework

WissensWerk Tokens
    → visuelle Designentscheidung
```

Bootstrap-Variablen und WissensWerk-Tokens sind nicht grundsätzlich dasselbe und werden nicht vermischt.

---

## Tokenbenennung

Eigene technische Custom Properties verwenden den Namensraum:

```text
--ww-*
```

Beispiele:

```text
--ww-color-*
--ww-space-*
--ww-font-*
```

Dadurch werden eigene Tokens eindeutig von Bootstrap-, Joomla- und Browser-Variablen unterschieden.

---

## Umgang mit neuen Tokens

Ein neues Token wird eingeführt, wenn:

1. ein Gestaltungswert mehrfach benötigt wird,
2. eine semantische Rolle fehlt,
3. ein bestehender Token fachlich nicht passt.

Vor einer Erweiterung wird geprüft, ob ein vorhandener Token wiederverwendet werden kann.

Ziel ist ein überschaubares und verständliches Token-System.

---

## Direkte Werte

Die Aussage „jede CSS-Eigenschaft muss zwingend über einen Token laufen“ wird nicht als technische Zwangsregel verstanden.

Ein einmaliger, technisch begründeter Wert kann direkt in einer Komponente sinnvoll sein.

Für wiederkehrende oder gestalterisch relevante Werte gilt dagegen die Tokenstrategie.

---

## Aktueller Stand

Das Token-System wird parallel zur praktischen Entwicklung weiter konkretisiert.

Insbesondere Farben, Spacing und Typografie werden bereits in den zentralen WissensWerk-SCSS-Bereichen verwendet.

Die vollständige Tokenliste soll erst dann als verbindlicher Katalog dokumentiert werden, wenn die entsprechenden Werte im Projekt stabilisiert sind.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprüngliches Tokenkonzept erstellt. |
| 2.0 | 02.09.2026 | Tokenarchitektur an die tatsächliche `--ww-*`-Custom-Property-Struktur angepasst und zwischen semantischen Tokens, Bootstrap und einmaligen technischen Werten differenziert. |
