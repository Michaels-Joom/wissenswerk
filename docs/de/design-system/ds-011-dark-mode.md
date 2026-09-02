[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipien-uebersicht.md)

---

# DS-011 Dark Mode

**Dokumenttyp:** Designsystem  
**Projekt:** WissensWerk  
**Status:** Optional / nicht implementiert  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Der Dark Mode beschreibt eine mögliche alternative Darstellung des WissensWerk-Designsystems.

Lesbarkeit, Kontrast und Informationshierarchie sollen dabei erhalten bleiben.

---

## Architekturprinzip

Ein zukünftiger Dark Mode soll auf denselben Komponenten und semantischen Design Tokens basieren wie das Standarddesign.

Es soll kein zweites, unabhängiges Designsystem entstehen.

Grundprinzip:

```text
Komponenten
     │
     ▼
semantische Tokens
     │
     ├── Light-Werte
     └── Dark-Werte
```

---

## Gestaltungsprinzipien

- Der Dark Mode ist eine alternative Darstellung des bestehenden Designs.
- Struktur und Bedienung bleiben grundsätzlich unverändert.
- Farben werden über semantische Tokens angepasst.
- Kontraste müssen ausreichend sein.
- Komponenten sollen in beiden Darstellungen funktionieren.
- Der Dark Mode bleibt optional, solange kein konkreter Umsetzungsbedarf besteht.

---

## Tokenprinzip

Die bisherigen `ds-*`-Tokenbezeichnungen werden nicht als aktuelle technische Implementierung vorausgesetzt.

Das bestehende WissensWerk-System verwendet `--ww-`-Custom-Properties.

Ein zukünftiger Dark Mode würde deshalb auf den tatsächlich verwendeten semantischen WissensWerk-Tokens aufbauen.

---

## Aktueller Stand

Der Dark Mode ist derzeit **nicht Bestandteil der implementierten Oberfläche**.

Es existiert daher aktuell:

- kein produktiver Umschalter,
- keine separate Dark-Mode-Komponente,
- keine vollständige alternative Farbpalette.

Dieses Dokument dient als Architektur- und Gestaltungsgrundlage für eine mögliche spätere Umsetzung.

---

## Entscheidung für die weitere Entwicklung

Ein Dark Mode wird erst umgesetzt, wenn ein konkreter Nutzen für WissensWerk nachgewiesen ist.

Bis dahin wird das Standarddesign nicht durch vorbereitende Sonderlogik unnötig komplex gemacht.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Dark Mode als optionale zukünftige Funktion beschrieben. |
| 2.0 | 02.09.2026 | Status eindeutig als nicht implementiert gekennzeichnet und Tokenstrategie an die aktuelle `--ww-`-Architektur angepasst. |
