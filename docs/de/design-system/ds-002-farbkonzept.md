[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [🎨 Designübersicht](./ds-000-designprinzipenuebersicht.md)

---

# DS-002 Farbkonzept

## Ziel

Das Farbkonzept definiert die visuelle Identität von WissensWerk. Farben dienen nicht ausschließlich der Gestaltung, sondern unterstützen Orientierung, Lesbarkeit und die inhaltliche Wirkung der Dokumentation.

Das Ziel ist ein ruhiges, zeitloses und hochwertiges Erscheinungsbild, das den Charakter einer offenen Werkstatt für Wissen und 
Softwareentwicklung widerspiegelt.

## Designprinzip: Das Designsystem besitzt die Kontrolle

Das Farbsystem von WissensWerk definiert alle gestalterischen Grundfarben zentral. Ziel ist es, die vollständige Kontrolle über das Erscheinungsbild des Templates zu behalten.

Bootstrap dient als technisches Framework für Layout, Komponenten und Hilfsklassen. Die visuelle Gestaltung wird jedoch ausschließlich durch das Designsystem von WissensWerk bestimmt.

Farben werden deshalb nicht nachträglich durch CSS-Überschreibungen angepasst, sondern bereits auf Ebene der SCSS-Variablen definiert.

Dadurch entstehen:
- eine konsistente Gestaltung,
- eine bessere Wartbarkeit,
 -weniger CSS-Spezifitätskonflikte,
- kein unnötiger Einsatz von !important.

## Gestaltungsprinzipien
- Lesbarkeit hat Vorrang vor dekorativen Effekten
- Farben unterstützen Inhalte und lenken nicht von ihnen ab
- Das Farbsystem basiert auf wenigen, bewusst gewählten Grundfarben
- Akzentfarben werden gezielt und sparsam eingesetzt
- Kontraste erfüllen die Anforderungen an eine gute Barrierefreiheit
- Das Farbsystem muss sowohl helle als auch zukünftige dunkle Darstellungen unterstützen

## Farbwirkung

|  Bereich	     | gewünschte Wirkung                 |  
|---------------|------------------------------------|
| Hintergrund   |  ruhig, warm, angenehm             |
| Text	         |  klar, kontrastreich, gut lesbar   |
| Akzent	       |  hochwertig, dezent                |
| Links	        |  eindeutig erkennbar               |
| Erfolg	       |  ruhig, positiv                    | 
| Warnung	      |  aufmerksam, aber nicht aggressiv  | 
| Fehler	       |  deutlich, ohne dominant zu wirken |

## Farbrollen

|  Bereich	     | Design Token  | Bootstrap Mapping |
|---------------|---------------|-------------------|
|  Primary      | ds-primary    | primary           |
|  Secondary    | ds-secondary  | secondary         |
|  Surface      | ds-surface    | surface           |
|  Background   | ds-background | background        |
|  Text         | ds-text       | text              |
|  Muted Text   | ds-muted-text | muted-text        |
|  Border       | ds-border     | border            | 
|  Success      | ds-success    | success           |
|  Warning      | ds-warning    | warning           |
|  Error        | ds-error      | error             |
|  Info         | ds-inf        | inf               |
|  Link         | ds-link       | link              |
|  Link Hover   | ds-link-hover | link-hover        |
|  Focus        | ds-focus      | focus             |
|  Visited Link | ds-visited    | visited           |
|  Danger       | ds-danger     | danger            |

> [!IMPORTANT]
> Die hier dargestellten Design Tokens dienen der Beschreibung des zugrunde liegenden Konzepts. Sie stellen keinen
> vollständigen Auszug der tatsächlich verwendeten Tokens dar.
>
> Das Designsystem wird während der Entwicklung kontinuierlich erweitert. Neue Design Tokens werden immer dann eingeführt,
> wenn eine gestalterische Anforderung nicht durch bestehende Tokens abgebildet werden kann.
>
> Die vollständige Implementierung befindet sich in den SCSS-Dateien des Templates.

## Designziele

|  Ziel   	      | Bedeutung                         |  
|----------------|-----------------------------------|
|  Zeitlos	      |  keine trendabhängigen Farben     |
|  Ruhig	        |  geringe Farbsättigung            |
|  Hochwertig	   |  natürliche Farbtöne              |
|  Kontrastreich |  WCAG-konform                     |
|  Wartbar	      |  wenige Grundfarben               |
