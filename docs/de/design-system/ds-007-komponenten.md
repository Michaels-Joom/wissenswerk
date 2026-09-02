[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipien-uebersicht.md)

---

# DS-007 Komponenten

**Dokumenttyp:** Designsystem  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Komponenten bilden die wiederverwendbaren Bausteine des WissensWerk-Designsystems.

Sie sorgen für ein einheitliches Erscheinungsbild, konsistente Zustände und eine effiziente Weiterentwicklung.

---

## Architekturprinzip

Komponenten besitzen eine klar definierte visuelle oder funktionale Verantwortung.

Sie greifen auf die zentralen Design Tokens zurück und sollen nicht unabhängig ein zweites Gestaltungssystem aufbauen.

Dabei gilt:

```text
Design Tokens
      ↓
Komponente
      ↓
Layout
```

Eine Komponente ist nicht automatisch an ein bestimmtes Seitenlayout gebunden.

---

## Gestaltungsprinzipien

- Komponenten erfüllen eine klar definierte Aufgabe.
- Komponenten sind möglichst wiederverwendbar.
- Komponenten verwenden vorhandene Design Tokens.
- Komponenten besitzen konsistente Zustände.
- Komponenten berücksichtigen Responsive Design.
- Komponenten berücksichtigen Barrierefreiheit.
- Bestehende technische Framework-Komponenten werden bevorzugt genutzt.
- Neue Komponenten entstehen nur bei einem konkreten Bedarf.

---

## Aktuell konkretisierte Komponenten

Durch die bisherige Entwicklung sind insbesondere folgende Bereiche konkret geworden:

### Branding

Die zentrale Brand-Komponente stellt Logo und Markenbezeichnung bereit.

Sie kann in unterschiedlichen Templatebereichen wiederverwendet werden.

### Navigation

Die Navigation ist eine eigenständige UI-Struktur und wird in Header, Sidebar und Offcanvas eingesetzt.

Die technische hierarchische Interaktion erfolgt über MetisMenu.

### Offcanvas

Das Offcanvas ist eine eigenständige responsive UI-Komponente.

Bootstrap übernimmt die technische Offcanvas-Funktion, während WissensWerk Layout und Gestaltung bestimmt.

### Header und Footer

Header und Footer sind strukturelle Templatebereiche. Sie können Komponenten wie Branding, Navigation und Module aufnehmen.

---

## Komponentenrollen

| Rolle | Beschreibung |
|---|---|
| Navigation | Erschließt Inhalte und Funktionen |
| Inhalt | Stellt Informationen dar |
| Formular | Erfasst Benutzereingaben |
| Aktion | Löst Funktionen aus |
| Feedback | Informiert über Zustände oder Ergebnisse |
| Layout | Strukturiert den Seitenaufbau |

Die Rollen beschreiben Funktionen und stellen keine vollständige Liste bereits implementierter Komponenten dar.

---

## Varianten

Varianten sollen nicht durch vollständig getrennte Komponenten mit dupliziertem Code entstehen.

Bevorzugt werden:

- Design Tokens
- definierte Zustände
- Bootstrap-Mechanismen
- klar begrenzte Modifier

Eine Variante ist nur dann sinnvoll, wenn sie eine tatsächlich unterschiedliche Darstellungs- oder Interaktionsanforderung erfüllt.

---

## Komponenten und Layout

Komponenten und Layoutbereiche werden getrennt betrachtet.

```text
Layout
  → Position und Seitenstruktur

Komponente
  → wiederverwendbare Darstellung / Funktion
```

Eine Komponente soll nicht die Verantwortung für den gesamten Seitenaufbau übernehmen.

---

## Wartbarkeit

Bei neuen Anforderungen wird zunächst geprüft:

1. Gibt es bereits eine passende Komponente?
2. Kann eine vorhandene Komponente erweitert werden?
3. Kann eine bestehende Bootstrap-Komponente verwendet werden?
4. Ist eine neue Komponente tatsächlich erforderlich?

Damit wird die Zahl paralleler Implementierungen begrenzt.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprüngliche Komponentenregeln erstellt. |
| 2.0 | 02.09.2026 | Komponentenarchitektur an den aktuellen Stand angepasst und Branding, Navigation sowie Offcanvas als konkretisierte Bereiche ergänzt. |
