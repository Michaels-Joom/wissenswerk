[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipien-uebersicht.md)

---

# DS-006 Icons

**Dokumenttyp:** Designsystem  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Icons ergänzen Texte und unterstützen die schnelle Orientierung.

Sie dienen der visuellen Unterstützung und ersetzen keine notwendigen textlichen Informationen.

---

## Architekturprinzip

Icons werden als Bestandteil der jeweiligen UI-Komponente behandelt.

Das Designsystem definiert ihren gestalterischen Einsatz. Die konkrete technische Bereitstellung richtet sich nach dem tatsächlich verwendeten Icon-System und der jeweiligen Komponente.

Eigene Icon-Lösungen werden nicht eingeführt, wenn eine vorhandene technische Lösung den Bedarf bereits sinnvoll abdeckt.

---

## Gestaltungsprinzipien

- Icons unterstützen den Inhalt.
- Icons ersetzen keine notwendigen Beschriftungen.
- Für gleiche Funktionen werden möglichst dieselben Symbole verwendet.
- Icons besitzen innerhalb einer Funktionsgruppe eine einheitliche visuelle Gewichtung.
- Dekorative Icons werden sparsam eingesetzt.
- Informative Icons müssen verständlich und barrierearm eingesetzt werden.
- Interaktive Icons müssen als Bedienmöglichkeit eindeutig erkennbar sein.

---

## Wirkung der Icons

| Bereich | gewünschte Wirkung |
|---|---|
| Navigation | schnell erfassbar |
| Aktionen | eindeutig erkennbar |
| Hinweise | unterstützend |
| Status | verständlich |
| Inhalte | dezent ergänzt |

---

## Iconrollen

Die ursprünglichen `ds-icon-*`-Bezeichnungen sind keine verbindlich nachgewiesenen aktuellen CSS-Variablennamen.

Für die weitere Entwicklung werden Iconrollen semantisch beschrieben:

| Rolle | Zweck |
|---|---|
| Navigation | Orientierung und Menüfunktionen |
| Action | Unterstützung von Aktionen |
| Status | Zustandsdarstellung |
| Decorative | rein visuelle Ergänzung |

Konkrete technische Werte werden nur dann als Design Token angelegt, wenn sie im tatsächlichen Designsystem wiederverwendet werden.

---

## Navigation

In der Navigation werden Icons nur eingesetzt, wenn sie die Orientierung oder Bedienung tatsächlich verbessern.

Das Navigationsverhalten selbst wird nicht durch Icons definiert.

Bei der aktuellen hierarchischen Navigation werden Zustände wie geöffnet, geschlossen, aktiv und aktuell zusätzlich über strukturelle und visuelle Zustände dargestellt.

---

## Barrierefreiheit

Ein Icon darf nicht die einzige Informationsquelle für eine notwendige Funktion sein.

Bei interaktiven Elementen sind insbesondere zu berücksichtigen:

- zugängliche Beschriftung
- sichtbarer Fokus
- ausreichende Größe der Bedienfläche
- ausreichender Kontrast
- eindeutiger Zustand

Rein dekorative Icons dürfen keine zusätzliche Information transportieren.

---

## Erweiterbarkeit

Neue Icons werden nur eingeführt, wenn:

1. eine konkrete Funktion sie sinnvoll benötigt,
2. kein vorhandenes Symbol die Funktion ausreichend vermittelt,
3. die Gestaltung in das bestehende Designsystem passt.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprüngliche Icon-Regeln erstellt. |
| 2.0 | 02.09.2026 | Icon-Konzept an das aktuelle Tokenprinzip und die tatsächliche Komponenten-/Navigationsarchitektur angepasst; nicht belegte `ds-icon-*`-Variablen nicht mehr als konkrete Implementierung vorausgesetzt. |
