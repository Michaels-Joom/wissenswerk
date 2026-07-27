[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md)  [🎨 Designübersicht](./ds-000-designprinzipenuebersicht.md)

---

# DS-011 Dark Mode (optional)

## Ziel

Der Dark Mode bietet eine alternative Darstellung für Umgebungen mit geringer Umgebungshelligkeit oder individuelle Benutzerpräferenzen. Lesbarkeit, Kontrast und Informationshierarchie bleiben dabei erhalten.

## Architekturprinzip

Der Dark Mode basiert auf denselben Design Tokens wie das Standarddesign. Die Gestaltung erfolgt durch alternative Tokenwerte und nicht durch separate Komponenten oder Layouts.

## Gestaltungsprinzipien
- Der Dark Mode ist eine alternative Darstellung des bestehenden Designs
- Informationsstruktur und Bedienung bleiben unverändert
- Farben werden ausschließlich über Design Tokens angepasst
- Kontraste erfüllen die Anforderungen an eine gute Lesbarkeit
- Komponenten verhalten sich in beiden Darstellungsmodi identisch
- Der Dark Mode bleibt optional

## Wirkung des Dark Mode
| Bereich                | gewünschte Wirkung         |
|------------------------|----------------------------|
| Erscheinungsbild       | ruhig und ausgewogen       |
| Lesbarkeit             | kontrastreich und angenehm |
| Orientierung           | unverändert                |
| Informationshierarchie | eindeutig                  |
| Benutzererlebnis       | konsistent                 |


## Dark-Mode-Rollen
| Rolle      | Design Token  |
|------------|---------------|
| Background | ds-background |
| Surface    | ds-surface    |
| Text       | ds-text       |
| Border     | ds-border     |
| Primary    | ds-primary    |
| Secondary  | ds-secondary  |
| Success    | ds-success    |
| Warning    | ds-warning    |
| Error      | ds-error      |

## Dark-Mode-Prinzipien
- Der Dark Mode verwendet dieselben Komponenten wie das Standarddesign
- Farben werden ausschließlich über alternative Design Tokens bereitgestellt
- Inhalte und Funktionen bleiben vollständig erhalten
- Ein Wechsel zwischen den Darstellungsmodi verändert weder Struktur noch Bedienung
- Die Aktivierung des Dark Mode ist optional
