[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipien-uebersicht.md)

---

# DS-008 Formulare

**Dokumenttyp:** Designsystem  
**Projekt:** WissensWerk  
**Status:** Aktiv / konzeptionell  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Formulare ermöglichen die strukturierte Erfassung von Informationen.

Sie sollen Benutzer bei der Eingabe unterstützen und eine klare, verständliche und konsistente Interaktion ermöglichen.

---

## Architekturprinzip

Formulare werden auf vorhandenen Joomla- bzw. HTML-Formularstrukturen aufgebaut und durch das WissensWerk-Designsystem gestaltet.

Bootstrap kann für technische Formularstrukturen und Utilities genutzt werden.

Das Designsystem definiert die visuelle Darstellung und Zustände.

---

## Gestaltungsprinzipien

- Formulare sind übersichtlich aufgebaut.
- Eingaben werden logisch gruppiert.
- Beschriftungen sind eindeutig und verständlich.
- Pflichtfelder werden eindeutig gekennzeichnet.
- Rückmeldungen sind verständlich.
- Fehlerzustände werden klar dargestellt.
- Formulare sind vollständig per Tastatur bedienbar.
- Fokuszustände sind sichtbar.
- Eingabeflächen sind für Touch-Bedienung geeignet.
- Validierung unterstützt den Benutzer und ersetzt keine serverseitige Validierung.

---

## Formularrollen

| Rolle | Beschreibung |
|---|---|
| Eingabefeld | Erfasst Benutzereingaben |
| Auswahl | Bietet definierte Optionen |
| Kontrollfeld | Aktiviert oder deaktiviert Optionen |
| Schaltfläche | Führt Aktionen aus |
| Hinweis | Unterstützt die Eingabe |
| Fehlermeldung | Informiert über fehlerhafte Eingaben |
| Erfolgsmeldung | Bestätigt eine erfolgreiche Aktion |

---

## Zustände

Formulare müssen mindestens folgende Zustände unterscheiden können:

- normal
- Fokus
- deaktiviert
- Fehler
- Erfolg
- Hinweis

Die konkrete visuelle Darstellung wird über das Designsystem und seine semantischen Farb- und Zustandsrollen definiert.

---

## Barrierefreiheit

Besonders zu beachten sind:

- korrekt zugeordnete Labels
- verständliche Fehlermeldungen
- Tastaturbedienbarkeit
- sichtbarer Fokus
- ausreichende Kontraste
- keine ausschließlich farbliche Kennzeichnung von Fehlern
- sinnvolle Reihenfolge der Eingabefelder

---

## Aktueller Entwicklungsstand

Formulare sind im bisherigen Entwicklungsstand noch kein zentral umgesetzter Schwerpunkt.

Dieses Dokument definiert deshalb die Gestaltungsgrundlagen, ohne eine konkrete Formularimplementierung vorwegzunehmen.

Die Regeln werden bei der Umsetzung realer Formulare gegen die Joomla-Ausgabe und das bestehende Designsystem geprüft.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 27.07.2026 | Ursprüngliche Formularregeln erstellt. |
| 2.0 | 02.09.2026 | Formularregeln präzisiert und den aktuellen Umsetzungsstand als konzeptionell gekennzeichnet. |
