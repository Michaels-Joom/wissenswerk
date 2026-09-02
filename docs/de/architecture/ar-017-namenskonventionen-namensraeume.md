[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-017 Namenskonventionen und Namensräume

| Merkmal | Wert |
|----------|------|
| Dokument | AR-017 |
| Titel | Namenskonventionen und Namensräume |
| Version | 2.0 |
| Status | Verbindlich |
| Gültig ab | WissensWerk |
| Autor | WissensWerk |
| Kategorie | Architektur |
| Stand | 02.09.2026 |

# 1. Ziel

Dieses Dokument definiert die verbindlichen Namenskonventionen für das WissensWerk-Projekt.

Ziel ist eine eindeutige Trennung zwischen Joomla, Bootstrap, Drittanbieter-Bibliotheken und projektspezifischen WissensWerk-Bestandteilen.

Die Namenskonventionen gelten für alle selbst definierten CSS-Klassen, CSS Custom Properties, JavaScript-Namen und projektspezifischen Data-Attribute.

# 2. Architekturprinzip

Für projektspezifische CSS- und HTML-Klassen sowie CSS Custom Properties wird der Namensraum `ww-` beziehungsweise `--ww-` verwendet.

Wichtig ist die Abgrenzung zwischen **Namensraum** und **Framework-/Bibliotheksnamen**:

- Eigene CSS-Klassen: `ww-*`
- Eigene CSS Custom Properties: `--ww-*`
- Eigene projektspezifische Data-Attribute: `data-ww-*`
- Bibliotheksklassen von Bootstrap und MetisMenu bleiben unverändert.
- Joomla-eigene Klassen und Attribute bleiben unverändert.

Nicht jede von WissensWerk verwendete Klasse muss daher mit `ww-` beginnen. Framework- und Joomla-Klassen werden bewusst so verwendet, wie sie von der jeweiligen Plattform oder Bibliothek definiert sind.

# 3. CSS-Klassen

Alle selbst definierten WissensWerk-Klassen beginnen mit:

```text
ww-
```

Beispiele aus der aktuellen Architektur:

```css
.ww-header
.ww-footer
.ww-sidebar
.ww-brand
.ww-offcanvas
.ww-offcanvas__navigation
.ww-offcanvas__footer
```

Für komplexere Komponenten wird eine konsistente BEM-nahe Struktur verwendet:

```text
ww-komponente
ww-komponente__element
ww-komponente--modifier
```

Beispiel:

```text
ww-offcanvas
ww-offcanvas__header
ww-offcanvas__body
ww-offcanvas__navigation
ww-offcanvas__footer
```

# 4. CSS Custom Properties

Alle projektspezifischen Custom Properties verwenden den Präfix:

```text
--ww-
```

Beispiele:

```css
--ww-color-primary
--ww-color-surface
--ww-color-text
--ww-space-4
```

Die Namen werden semantisch vergeben.

Ein semantischer Token wie

```css
--ww-color-primary
```

ist einem konkreten Farbnamen wie

```css
--ww-gold
```

vorzuziehen.

# 5. JavaScript

Für JavaScript gilt eine differenzierte Regel.

Eigene JavaScript-Variablen, Funktionen und Objekte sollen einen eindeutigen fachlichen Namen erhalten. Bei globalen Objekten und bewusst global bereitgestellten APIs wird der Präfix `ww` verwendet.

Beispiel:

```javascript
wwNavigation
wwOffcanvas
```

Lokale Variablen und Funktionen müssen nicht künstlich mit `ww` präfixiert werden, sofern ihr Gültigkeitsbereich eindeutig begrenzt ist.

Die projektbezogene JavaScript-Dateistruktur ist in **AR-005 JavaScript-Architektur** dokumentiert.

# 6. Data-Attribute

Projektspezifische Data-Attribute verwenden:

```text
data-ww-
```

Beispiele:

```html
data-ww-toggle
data-ww-target
```

Standardattribute von Joomla, Bootstrap oder Drittanbieter-Bibliotheken werden nicht umbenannt.

# 7. Utility-Klassen

Eigene Utility-Klassen verwenden ebenfalls den Namensraum:

```text
ww-
```

Beispiele:

```css
.ww-hidden
.ww-visually-hidden
.ww-overflow-hidden
```

Vor der Erstellung einer eigenen Utility-Klasse wird geprüft, ob eine vorhandene Bootstrap-Utility die Aufgabe bereits sinnvoll erfüllt.

Damit werden redundante Utility-Systeme vermieden.

# 8. Bootstrap

Bootstrap-Klassen werden unverändert verwendet.

Beispiele:

```html
container
row
col-lg-6
d-flex
justify-content-center
```

Bootstrap-Klassen werden nicht in `ww-*` umbenannt.

WissensWerk ergänzt Bootstrap dort, wo projektspezifische Gestaltung oder Funktion erforderlich ist.

Bootstrap-Core-Dateien werden nicht verändert.

# 9. MetisMenu

MetisMenu verwendet seine eigene Klassen- und Zustandslogik.

Beispiele:

```text
mm-active
mm-show
mm-collapse
mm-toggler
```

Diese Klassen werden nicht in `ww-*` umbenannt, da sie Bestandteil der Bibliothek sind.

WissensWerk gestaltet diese Zustände über die eigene SCSS-Architektur und integriert die Bibliothek über eigenes JavaScript.

# 10. Joomla

Joomla-eigene Klassen, Attribute und Strukturen bleiben unverändert.

Der Joomla-Core wird niemals verändert.

Eigene Anpassungen erfolgen über:

- Template-Dateien
- Layouts
- Overrides
- eigene Stylesheets
- eigenes JavaScript
- Joomla Web Asset API

# 11. Drittanbieter-Bibliotheken

Klassen und Attribute von Drittanbieter-Bibliotheken werden grundsätzlich nicht umbenannt.

Eigene Anpassungen erfolgen über die definierte Integrationsschicht des Templates.

Dadurch bleibt die Updatefähigkeit der Bibliotheken erhalten.

# 12. Namensgebung von Dateien

Dateinamen werden fachlich eindeutig und konsistent vergeben.

Für JavaScript werden beispielsweise fachliche Bereiche verwendet:

```text
js/
└── mod_menu/
    ├── menu-metismenu.js
    └── menu-metismenu.min.js
```

Build-Artefakte werden durch ihre Endung beziehungsweise Benennung eindeutig von Quelldateien unterschieden.

# 13. Architekturregel

> **Eigene CSS-Klassen, Custom Properties und projektspezifische Data-Attribute gehören zum WissensWerk-Namensraum.**

Gleichzeitig gilt:

> **Externe Klassen und Attribute werden nicht künstlich umbenannt.**

Damit wird die ursprünglich sehr strikt formulierte Regel „alles muss `ww-` verwenden“ präzisiert. Eine solche Regel würde bei Bootstrap, MetisMenu und Joomla zu unnötiger Duplizierung und Integrationsaufwand führen.

# 14. Vorteile

Die Namenskonventionen unterstützen:

- klare Herkunft von eigenem Code
- Vermeidung von Namenskollisionen
- einfacheres Debugging
- sichere Erweiterungen
- kontrollierte Bootstrap- und Bibliotheksintegration
- Wartbarkeit
- zukünftige Child-Templates
- nachvollziehbare Dokumentation

# 15. Verwandte Dokumente

- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-003 Verzeichnisstruktur](./ar-003-verzeichnisstruktur.md)
- [🏗️ AR-004 SCSS-Architektur](./ar-004-scss-architektur.md)
- [🏗️ AR-005 JavaScript-Architektur](./ar-005-javascript-architektur.md)
- [🏗️ AR-007 Bootstrap-Integration](./ar-007-bootstrap-integration.md)

# 16. Ergebnis

Der `ww-`-Namensraum bleibt ein zentrales Architekturmerkmal von WissensWerk.

Die Konvention wird jedoch dort angewendet, wo WissensWerk selbst Namen definiert. Joomla-, Bootstrap- und MetisMenu-Namen bleiben unverändert.

Damit verbindet die Namenskonvention klare Eigenständigkeit mit einer sauberen Integration der verwendeten Frameworks und Bibliotheken.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 27.07.2026 | Ursprüngliche Namensraumdefinition. |
| 2.0 | 02.09.2026 | Dokumentnummer korrigiert; Namenskonvention an die tatsächliche Bootstrap-/MetisMenu-Integration angepasst und die bisherige „keine Ausnahmen“-Regel präzisiert. |
