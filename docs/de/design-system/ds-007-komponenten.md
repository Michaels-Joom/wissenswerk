[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipenuebersicht.md)

---

# DS-007 Komponenten

## Ziel

Komponenten bilden die wiederverwendbaren Bausteine des Designsystems. Sie sorgen für ein einheitliches Erscheinungsbild, konsistentes Verhalten und eine effiziente Entwicklung.

# Architekturprinzip

> Alle Komponenten basieren auf den Design Tokens des Designsystems. Eigene Farb-, Typografie- oder Abstandswerte innerhalb einer Komponente werden vermieden.

## Gestaltungsprinzipien
- Komponenten sind wiederverwendbar
- Komponenten erfüllen eine klar definierte Aufgabe
- Komponenten verwenden ausschließlich Design Tokens
- Komponenten verhalten sich konsistent
- Komponenten sind responsive
- Komponenten berücksichtigen Barrierefreiheit.

## Wirkung der Komponenten

| Bereich          | gewünschte Wirkung |
|------------------|--------------------|
| Bedienung        | intuitiv           |
| Erscheinungsbild | einheitlich        |
| Interaktion      | konsistent         |
| Wiedererkennung  | hoch               |
| Wartbarkeit      | nachhaltig         |

## Komponentenrollen
| Rolle      | Beschreibung                             |
|------------|------------------------------------------|
| Navigation | Erschließt Inhalte und Funktionen        |
| Inhalt     | Stellt Informationen dar                 |
| Formular   | Erfasst Benutzereingaben                 |
| Aktion     | Löst Funktionen aus                      |
| Feedback   | Informiert über Zustände oder Ergebnisse |
| Layout     | Strukturiert den Seitenaufbau            |

## Komponentenprinzipien

- Komponenten werden zentral entwickelt und gepflegt
- Komponenten dürfen nicht mehrfach mit unterschiedlichem Verhalten implementiert werden
- Varianten entstehen durch Design Tokens und definierte Optionen
- Komponenten bleiben unabhängig von konkreten Seitenlayouts
- Neue Komponenten entstehen nur, wenn bestehende Komponenten die Anforderung nicht sinnvoll erfüllen
