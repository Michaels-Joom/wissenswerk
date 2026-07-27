[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipenuebersicht.md)

---

# DS-003 Typografie

## Ziel

Die Typografie definiert die visuelle Sprache von WissensWerk. Sie sorgt für Lesbarkeit, Orientierung und eine klare Informationshierarchie.

Ziel ist ein ruhiges, zeitloses und gut lesbares Schriftbild, das längeres Lesen unterstützt und den dokumentarischen Charakter des Projektes unterstreicht.

## Architekturprinzip

> Die Typografie wird ausschließlich über Design Tokens gesteuert. Konkrete Schriftgrößen, Schriftfamilien und
> Zeilenabstände werden nicht direkt in Komponenten definiert, sondern zentral über das Designsystem bereitgestellt.

## Gestaltungsprinzipien
- Lesbarkeit hat Vorrang vor dekorativen Schriften.
- Typografie unterstützt die Informationshierarchie.
- Schriftgrößen folgen einem konsistenten System.
- Zeilenlängen und Zeilenabstände fördern ruhiges Lesen.
- Schriftstärken werden gezielt und sparsam eingesetzt.
- Typografie soll zeitlos wirken und nicht kurzlebigen Trends folgen.
- Das Schriftbild muss auf Desktop, Tablet und Smartphone gleichermaßen gut lesbar sein.
  
## Typografische Wirkung

| Bereich       | gewünschte Wirkung         |
|---------------|----------------------------|
| Fließtext     | ruhig, angenehm lesbar     |
| Überschriften | klar, strukturiert         |
| Navigation    | eindeutig, unaufdringlich  |
| Hinweise      | dezent, aber gut erkennbar |
| Quellcode     | technisch, präzise         |
| Tabellen      | übersichtlich und kompakt  |

## Typografische Rollen

| Rolle          | Design Token        |
|----------------|---------------------|
| Primary Font   | ds-font-primary     |
| Secondary Font | ds-font-secondary   |
| Monospace      | ds-font-monospace   |
| Base Size      | ds-font-base-size   |
| Small          | ds-font-size-sm     |
| Large          | ds-font-size-lg     |
| Heading 1      | ds-font-h1          |
| Heading 2      | ds-font-h2          |
| Heading 3      | ds-font-h3          |
| Line Height    | ds-line-height-base |

## Typografische Hierarchie

- **H1** kennzeichnet den Einstieg in ein Dokument.
- **H2** strukturiert Hauptkapitel.
- **H3** untergliedert Kapitel.
- Fließtext bildet die primäre Leseebene.
- Hinweise und Randinformationen treten optisch zurück.
- Code und technische Beispiele verwenden eine Monospace-Schrift.
