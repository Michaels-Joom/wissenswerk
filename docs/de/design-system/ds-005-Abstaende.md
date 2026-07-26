[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipenuebersicht.md)

---

# DS-005 Abstände

## Ziel

> Abstände strukturieren Inhalte, schaffen Orientierung und unterstützen die Lesbarkeit. Sie trennen Informationen voneinander und sorgen für ein ruhiges und ausgewogenes Erscheinungsbild.

## Architekturprinzip

Abstände werden ausschließlich über Design Tokens definiert. Direkte Abstandsangaben in Komponenten oder Layouts sollen vermieden werden.

## Gestaltungsprinzipien
- Abstände folgen einem konsistenten System.
- Weißraum ist ein aktives Gestaltungselement.
- Gleiche Situationen erhalten gleiche Abstände.
- Die Hierarchie von Inhalten wird durch Abstände unterstützt.
- Komponenten definieren keine eigenen Abstandswerte.
- Abstände skalieren über alle Breakpoints konsistent.
 
## Wirkung der Abstände

| Bereich     | gewünschte Wirkung            |
|-------------|-------------------------------|
| Abschnitte  | klar voneinander getrennt     |
| Inhalte     | ruhig, ausgewogen             |
| Komponenten | konsistent angeordnet         |
| Formulare   | übersichtlich                 |
| Navigation  | gut erfassbar                 |
| Weißraum    | unterstützend, nicht dominant |

## Abstandsrollen

| Rolle     | Design Token       |
|-----------|--------------------|
| XS        | ds-space-xs        |
| Small     | ds-space-sm        |
| Medium    | ds-space-md        |
| Large     | ds-space-lg        |
| XL        | ds-space-xl        |
| Section   | ds-space-section   |
| Component | ds-space-component |
| Content   | ds-space-content   |

## Abstandshierarchie
- Seitenbereiche verwenden Section-Abstände.
- Komponenten orientieren sich an Component-Abständen.
- Inhalte verwenden Content-Abstände.
- Innen- und Außenabstände folgen demselben Designsystem.
- Neue Abstandswerte werden ausschließlich über Design Tokens eingeführt.
