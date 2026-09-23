# TS-004 Joomla JavaScript-Sprachschlüssel

## Zweck

Dieses Troubleshooting-Dokument beschreibt ein spezifisches Verhalten der Joomla-5-Editor-XTD-Integration von WissensWerk bei der Verwendung von Sprachschlüsseln in JavaScript.

Betroffen ist insbesondere die Kombination aus:

- PHP `Text::script()`
- JavaScript `Joomla.Text._()`
- TinyMCE-Integration
- den Beschriftungen des WissensWerk-Menüs

Das Verhalten ist wichtig, weil ein vermeintlicher JavaScript-Fallback mit `||` in diesem Fall nicht zuverlässig funktioniert.

---

## 1. Symptom

Im TinyMCE-Menü erscheint statt der erwarteten deutschen Beschriftung der eigentliche Sprachschlüssel, zum Beispiel:

```text
PLG_EDITORS-XTD_WISSENSWERK_ARTICLE
```

statt:

```text
WW Article – Split
```

oder:

```text
PLG_EDITORS-XTD_WISSENSWERK_COLUMNS
```

statt:

```text
WW Article – Columns
```

Auf den ersten Blick liegt die Vermutung nahe, dass ein Fallback im JavaScript das Problem auffangen kann.

Beispiel:

```js
window.Joomla?.Text?._('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE')
    || 'WW Article – Split'
```

Das funktioniert in Joomla jedoch nicht so, wie man bei einem normalen Übersetzungsaufruf erwarten würde.

---

## 2. Ursache

Joomla stellt clientseitige Sprachschlüssel über `Text::script()` aus PHP für JavaScript bereit.

Beispiel:

```php
Text::script('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE');
```

Anschließend kann JavaScript den registrierten Schlüssel über `Joomla.Text._()` abrufen:

```js
Joomla.Text._('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE')
```

Entscheidend ist das Verhalten bei einem **nicht registrierten** Schlüssel.

Wenn der Schlüssel nicht über `Text::script()` für JavaScript registriert wurde, liefert `Joomla.Text._()` nicht zwingend einen leeren oder falsy Wert zurück. Stattdessen kann der Schlüssel selbst zurückgegeben werden.

Beispiel:

```js
Joomla.Text._('UNBEKANNTER_SCHLUESSEL')
```

kann ergeben:

```text
UNBEKANNTER_SCHLUESSEL
```

Damit ist der folgende Ausdruck wirkungslos:

```js
Joomla.Text._('UNBEKANNTER_SCHLUESSEL') || 'Fallback'
```

Denn:

```js
'UNBEKANNTER_SCHLUESSEL' || 'Fallback'
```

ergibt weiterhin:

```text
UNBEKANNTER_SCHLUESSEL
```

Der Wert ist ein nichtleerer String und damit in JavaScript **truthy**.

### Konsequenz

Ein klassischer Fallback mit:

```js
translation || fallback
```

ist für diesen Fall **kein zuverlässiger Fallback-Mechanismus**.

Das Problem muss an der Registrierung beziehungsweise Bereitstellung des Sprachschlüssels behoben werden.

---

## 3. Richtige Lösung in WissensWerk

Die benötigten JavaScript-Sprachschlüssel werden im Joomla-Plugin zentral über `Text::script()` registriert.

Für die vier WissensWerk-Editorbausteine:

```php
Text::script('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE');
Text::script('PLG_EDITORS-XTD_WISSENSWERK_COLUMNS');
Text::script('PLG_EDITORS-XTD_WISSENSWERK_ACCORDION');
Text::script('PLG_EDITORS-XTD_WISSENSWERK_DATA_GRID');
```

Damit stehen die Schlüssel anschließend im JavaScript-Kontext zur Verfügung.

Die Beschriftung kann dann beispielsweise so abgerufen werden:

```js
Joomla.Text._('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE')
```

Die eigentliche Übersetzung stammt weiterhin aus der Joomla-Sprachdatei.

---

## 4. Sprachdatei und JavaScript-Registrierung sind zwei unterschiedliche Schritte

Eine vorhandene Übersetzung in der `.ini`-Datei allein reicht für diesen Anwendungsfall nicht aus.

Beispiel:

```ini
PLG_EDITORS-XTD_WISSENSWERK_ARTICLE="WW Article – Split"
```

Dieser Eintrag definiert die Übersetzung.

Damit JavaScript sie über `Joomla.Text._()` verwenden kann, muss der Schlüssel zusätzlich für JavaScript registriert werden:

```php
Text::script('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE');
```

Die beiden Ebenen haben daher unterschiedliche Aufgaben:

| Ebene | Aufgabe |
|---|---|
| `.ini`-Datei | Definition der Übersetzung |
| `Text::script()` | Bereitstellung des Sprachschlüssels für JavaScript |
| `Joomla.Text._()` | Abruf der bereitgestellten Übersetzung in JavaScript |

---

## 5. Typische Fehlerquellen

### 5.1 Sprachschlüssel existiert in der INI-Datei, wurde aber nicht mit `Text::script()` registriert

Beispiel:

```ini
PLG_EDITORS-XTD_WISSENSWERK_ACCORDION="WW Accordion"
```

aber in PHP fehlt:

```php
Text::script('PLG_EDITORS-XTD_WISSENSWERK_ACCORDION');
```

Ergebnis:

```js
Joomla.Text._('PLG_EDITORS-XTD_WISSENSWERK_ACCORDION')
```

kann den Schlüssel selbst zurückgeben.

---

### 5.2 Schreibweise des Sprachschlüssels stimmt nicht überein

PHP:

```php
Text::script('PLG_EDITORS-XTD_WISSENSWERK_DATA_GRID');
```

JavaScript:

```js
Joomla.Text._('PLG_EDITORS-XTD_WISSENSWERK_DATAGRID')
```

Hier handelt es sich um zwei unterschiedliche Schlüssel.

Auch Groß-/Kleinschreibung und Unterstriche sollten deshalb konsequent identisch gehalten werden.

---

### 5.3 Sprache wird im Plugin-Kontext nicht geladen

Vor der Registrierung der Sprachschlüssel sollte die Plugin-Sprache geladen sein:

```php
$this->loadLanguage();
```

Die Registrierung erfolgt anschließend:

```php
$this->loadLanguage();

Text::script('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE');
```

---

### 5.4 Fallback mit `||` wird als Fehlerbehebung eingesetzt

Nicht ausreichend:

```js
const label =
    Joomla.Text._('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE')
    || 'WW Article – Split';
```

Wenn Joomla den nicht registrierten Schlüssel selbst zurückliefert, wird der Fallback nie erreicht.

Der korrekte Ansatz ist, die Registrierung zu prüfen und zu korrigieren.

---

## 6. Diagnose

Bei Problemen mit einer Beschriftung sollte zunächst geprüft werden:

### Schritt 1 – Existiert der Schlüssel in der Sprachdatei?

Beispiel:

```ini
PLG_EDITORS-XTD_WISSENSWERK_ARTICLE="WW Article – Split"
```

### Schritt 2 – Wird der Schlüssel in PHP mit `Text::script()` registriert?

Beispiel:

```php
Text::script('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE');
```

### Schritt 3 – Wird die Plugin-Sprache vorher geladen?

```php
$this->loadLanguage();
```

### Schritt 4 – Ist der Schlüssel im JavaScript identisch?

```js
Joomla.Text._('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE')
```

### Schritt 5 – Browser-Konsole prüfen

Zum Testen kann direkt in der Browser-Konsole ausgeführt werden:

```js
Joomla.Text._('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE')
```

Erwartet:

```text
WW Article – Split
```

Wenn stattdessen:

```text
PLG_EDITORS-XTD_WISSENSWERK_ARTICLE
```

erscheint, ist der Schlüssel im JavaScript-Kontext nicht korrekt bereitgestellt beziehungsweise registriert.

---

## 7. WissensWerk-Regel

Für die WissensWerk-Editor-XTD-Integration gilt:

> **Jeder Sprachschlüssel, der aus JavaScript über `Joomla.Text._()` verwendet wird, muss im PHP-Plugin explizit mit `Text::script()` registriert werden.**

Die Sprachdatei allein genügt nicht.

Für neue Editorbausteine gehört die Registrierung des jeweiligen JavaScript-Sprachschlüssels daher zum vollständigen Implementierungsschritt.

Beispiel für einen neuen Baustein:

```php
Text::script('PLG_EDITORS-XTD_WISSENSWERK_NEUER_BLOCK');
```

und:

```js
Joomla.Text._('PLG_EDITORS-XTD_WISSENSWERK_NEUER_BLOCK')
```

---

## 8. Warum kein künstlicher Fallback eingebaut wird

Ein hartcodierter Fallback kann zwar technisch als letzte Absicherung gegen fehlende Übersetzungen dienen, löst aber das eigentliche Problem nicht.

Bei Joomla ist insbesondere dieser Ansatz problematisch:

```js
Joomla.Text._('KEY') || 'Fallback'
```

weil ein unbekannter Schlüssel als nichtleerer String zurückkommen kann.

WissensWerk verwendet deshalb für die eigenen Editorbeschriftungen die zentrale Joomla-Sprachregistrierung und behebt fehlende Beschriftungen an der Ursache.

Das hält die Integration konsistent und verhindert, dass fehlerhafte Sprachregistrierungen durch scheinbar funktionierende Fallbacks verdeckt werden.

---

## 9. Kurzreferenz

### PHP

```php
$this->loadLanguage();

Text::script('PLG_EDITORS-XTD_WISSENSWERK');
Text::script('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE');
Text::script('PLG_EDITORS-XTD_WISSENSWERK_COLUMNS');
Text::script('PLG_EDITORS-XTD_WISSENSWERK_ACCORDION');
Text::script('PLG_EDITORS-XTD_WISSENSWERK_DATA_GRID');
```

### Sprachdatei

```ini
PLG_EDITORS-XTD_WISSENSWERK_ARTICLE="WW Article – Split"
PLG_EDITORS-XTD_WISSENSWERK_COLUMNS="WW Article – Columns"
PLG_EDITORS-XTD_WISSENSWERK_ACCORDION="WW Accordion"
PLG_EDITORS-XTD_WISSENSWERK_DATA_GRID="WW Data Grid"
```

### JavaScript

```js
Joomla.Text._('PLG_EDITORS-XTD_WISSENSWERK_ARTICLE')
Joomla.Text._('PLG_EDITORS-XTD_WISSENSWERK_COLUMNS')
Joomla.Text._('PLG_EDITORS-XTD_WISSENSWERK_ACCORDION')
Joomla.Text._('PLG_EDITORS-XTD_WISSENSWERK_DATA_GRID')
```

### Merksatz

**INI definiert die Übersetzung – `Text::script()` stellt sie JavaScript bereit – `Joomla.Text._()` ruft sie ab.**

Ein fehlender `Text::script()`-Eintrag kann nicht zuverlässig durch `|| 'Fallback'` abgefangen werden.
