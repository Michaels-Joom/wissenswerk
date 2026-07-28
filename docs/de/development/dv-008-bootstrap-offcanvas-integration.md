# DV-008 Bootstrap-Offcanvas-Integration

## Ziel

Integration der Bootstrap-Offcanvas-Komponente in das WissensWerk-Template, ohne das Bootstrap-Designsystem zu übernehmen.

---

# Ausgangssituation

Für die mobile Navigation sollte die Bootstrap-Offcanvas-Komponente verwendet werden.

Eine vollständige Einbindung der Bootstrap-CSS führte jedoch zu unerwünschten Nebeneffekten:

- Überschreiben des WissensWerk-Designsystems
- Änderungen an globalen Body-Styles
- Bootstrap-Navigation (.nav) beeinflusste das Joomla-Menü
- Verlust der Kontrolle über Layout und Komponenten

---

# Entscheidung

Bootstrap wird ausschließlich als technische Komponentenbibliothek verwendet.

Das WissensWerk-Designsystem bleibt vollständig eigenständig.

---

# Verzeichnisstruktur

```text
scss/
│
├── template.scss
│
├── bootstrap-offcanvas.scss
│
├── abstracts/
├── base/
├── components/
├── layout/
├── pages/
├── tokens/
│
└── vendor/
    └── bootstrap/
```

---

# Bootstrap Bridge

Die Datei

```text
bootstrap-offcanvas.scss
```

bildet die Brücke zwischen WissensWerk und Bootstrap.

Sie enthält ausschließlich die benötigten Bootstrap-Komponenten.

Beispiel:

```scss
@import "vendor/bootstrap/functions";
@import "vendor/bootstrap/variables";
@import "vendor/bootstrap/variables-dark";
@import "vendor/bootstrap/maps";
@import "vendor/bootstrap/mixins";

@import "vendor/bootstrap/close";
@import "vendor/bootstrap/offcanvas";
```

---

# Designprinzip

Bootstrap liefert ausschließlich:

- Offcanvas
- Close Button
- technische Mixins
- technische Variablen

Nicht verwendet werden:

- Reboot
- Root
- Utilities
- Grid
- Buttons
- Forms
- Navigation
- Typografie
- Farbdefinitionen

Alle visuellen Eigenschaften werden durch das WissensWerk-Designsystem definiert.

---

# Vorteile

- vollständige Kontrolle über das CSS
- keine globalen Bootstrap-Styles
- keine Konflikte mit dem WissensWerk-Designsystem
- Bootstrap bleibt unverändert (Vendor-Code)
- Bootstrap kann einfach aktualisiert werden
- nur tatsächlich benötigte Komponenten werden kompiliert

---

# Wartung

Der Ordner

```text
vendor/bootstrap/
```

wird niemals verändert.

Bei Bootstrap-Updates wird ausschließlich dieser Ordner ersetzt.

Die Bridge-Datei bleibt Bestandteil des WissensWerk-Templates.

---

# Fazit

Bootstrap wird im WissensWerk-Projekt nicht als CSS-Framework verwendet.

Bootstrap dient ausschließlich als technische Bibliothek für JavaScript-Komponenten und deren minimale CSS-Abhängigkeiten.

Das WissensWerk-Designsystem bleibt vollständig unabhängig und kontrolliert sämtliche visuellen Eigenschaften des Templates.
