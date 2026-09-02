[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🛠️ Entwicklungsübersicht](./dv-000-entwicklunguebersicht.md)

---

# DV-008 Bootstrap-Offcanvas-Integration

**Dokumenttyp:** Entwicklungsdokumentation  
**Projekt:** WissensWerk  
**Status:** Abgeschlossen  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## 1. Ziel

Integration der Bootstrap-Offcanvas-Komponente in das WissensWerk-Template für die mobile Navigation.

Bootstrap wird gezielt als technische Komponentenbibliothek eingesetzt.

Das visuelle Erscheinungsbild des Offcanvas wird durch das WissensWerk-Designsystem definiert.

Die Integration erfolgt ohne Änderungen am Bootstrap-Vendor-Code und ohne Übernahme des vollständigen Bootstrap-CSS.

---

## 2. Ausgangssituation

Für die mobile Navigation wird die Offcanvas-Komponente von Bootstrap 5 verwendet.

Eine vollständige Einbindung des Bootstrap-CSS würde unerwünschte globale Einflüsse auf das WissensWerk-Designsystem und Joomla-Ausgaben mit sich bringen.

Daher werden nur die benötigten Bootstrap-Bestandteile für das Offcanvas eingebunden.

---

## 3. Architekturentscheidung

```text
Joomla
   ↓
Menüstruktur

MetisMenu
   ↓
Menüinteraktion

Bootstrap
   ↓
Offcanvas-Funktion

WissensWerk
   ↓
Layout und visuelle Gestaltung
```

Diese Trennung vermeidet eine Vermischung unterschiedlicher Verantwortlichkeiten.

---

## 4. Bootstrap Bridge

Die Bootstrap Bridge stellt die benötigten Bootstrap-Bestandteile für das Offcanvas bereit.

Die Vendor-Dateien werden nicht verändert.

Die konkrete Importstruktur wird durch die aktuelle SCSS-Architektur bestimmt.

Grundsätzlich werden nur die für die verwendete Bootstrap-Komponente erforderlichen Bestandteile eingebunden.

---

## 5. Verzeichnisstruktur

Relevant sind insbesondere:

```text
scss/
├── template.scss
├── bootstrap-offcanvas.scss
├── abstracts/
├── base/
├── components/
├── layout/
├── pages/
├── tokens/
└── vendor/
    └── bootstrap/
```

---

## 6. Bootstrap-Verantwortung

Bootstrap übernimmt insbesondere:

- Öffnen und Schließen des Offcanvas
- Backdrop
- Fokusverhalten
- Scroll-Lock des Hintergrundinhalts
- technische Offcanvas-Zustände

Die visuelle Darstellung wird durch WissensWerk-SCSS gesteuert.

---

## 7. Nicht global übernommene Bootstrap-Bereiche

Es wird bewusst nicht das vollständige Bootstrap-CSS als visuelle Grundlage des Templates verwendet.

Insbesondere globale Bootstrap-Regeln sollen nicht ohne konkreten Bedarf in die WissensWerk-Gestaltung einfließen.

Dazu gehören beispielsweise:

- Reboot
- globale Typografie
- globale Farbdefinitionen
- allgemeine Navigation
- globale Utilities

Bootstrap-Komponenten werden dort eingesetzt, wo sie technisch benötigt werden.

---

## 8. Offcanvas-Navigation

Die Navigation im Offcanvas ist keine separate Menüstruktur.

```text
Joomla Menü
    ↓
MetisMenu
    ↓
WissensWerk Navigation Styling
    ↓
Bootstrap Offcanvas
```

Joomla liefert die Menüstruktur.

MetisMenu übernimmt das hierarchische Verhalten.

WissensWerk definiert die Darstellung.

Bootstrap stellt den Offcanvas-Container und dessen technische Funktion bereit.

---

## 9. Layout des Offcanvas

```text
┌─────────────────────────────┐
│ Header / Branding       [×] │
├─────────────────────────────┤
│                             │
│ Navigation                  │
│   scrollbarer Bereich       │
│                             │
├─────────────────────────────┤
│ Suche                       │
│ Call-to-Action              │
├─────────────────────────────┤
│ Footer / Legal / Copyright  │
└─────────────────────────────┘
```

Nur der Navigationsbereich ist vertikal scrollbar.

Header, Suche, CTA und Footer bleiben außerhalb des scrollbaren Bereichs.

Horizontales Überlaufen wird verhindert.

---

## 10. Visuelle Gestaltung

Das Erscheinungsbild wird über WissensWerk-Design Tokens gesteuert.

Dazu gehören:

- Farben
- Abstände
- Typografie
- Rahmen
- Hover
- Fokus
- Zustände
- Übergänge

Bootstrap-Farben und Bootstrap-Typografie sind nicht die visuelle Grundlage des Templates.

---

## 11. Vendor-Code

```text
vendor/bootstrap/
```

wird nicht manuell verändert.

Individuelle Anpassungen erfolgen ausschließlich außerhalb des Vendor-Codes.

Bei Bootstrap-Updates werden die importierten Bestandteile auf Kompatibilität geprüft.

---

## 12. Wartung

Bei Änderungen an der Darstellung werden ausschließlich WissensWerk-SCSS-Dateien angepasst.

Die Bootstrap-Bridge wird nur verändert, wenn sich die technische Bootstrap-Integration ändert.

Bei einem Bootstrap-Update werden insbesondere die Abhängigkeiten der verwendeten Offcanvas-Komponente geprüft.

---

## 13. Abgrenzung zu MetisMenu

Bootstrap und MetisMenu besitzen unterschiedliche Aufgaben.

### Bootstrap

Technische Offcanvas-Funktion.

### MetisMenu

- Untermenüs
- Collapse-Verhalten
- Öffnen und Schließen
- Menü-Zustände

### WissensWerk

- Farben
- Typografie
- Abstände
- Hierarchie
- visuelle Zustände
- responsive Präsentation

---

## 14. Vorteile

Die Architektur bietet:

- klare Verantwortlichkeiten
- keine Joomla-Core-Änderungen
- keine Bootstrap-Vendor-Änderungen
- kontrolliertes Design
- geringe Bootstrap-CSS-Abhängigkeit
- geringes Konfliktpotenzial
- unabhängige Weiterentwicklung von Menü und Offcanvas
- gute Wartbarkeit

---

## 15. Best Practices

- Vendor-Dateien nicht verändern.
- Bootstrap gezielt einsetzen.
- Offcanvas-Funktion über Bootstrap behandeln.
- Menüinteraktion über MetisMenu behandeln.
- Joomla-Menüstruktur verwenden.
- Gestaltung über WissensWerk-SCSS und Tokens steuern.
- Änderungen nach Framework-Updates prüfen.

---

## 16. Ergebnis

Die Bootstrap-Offcanvas-Integration ist abgeschlossen.

Bootstrap stellt die technische Funktion bereit, MetisMenu die Navigation und WissensWerk die Integration und Gestaltung.

Damit ist die mobile Navigation technisch und gestalterisch in die Templatearchitektur integriert.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprüngliche Offcanvas-Integration dokumentiert. |
| 2.0 | 02.09.2026 | Dokument an die aktuelle Bootstrap-/MetisMenu-/WissensWerk-Architektur und das finale Offcanvas-Layout angepasst. |
