# ADR-009 – Umgang mit Kontaktanfragen und personenbezogenen Daten

## Status

**Entschieden / Architekturgrundsatz**

## Kontext

WissensWerk soll eine einfache Möglichkeit bieten, Kontakt aufzunehmen und einen fachlichen Austausch zu ermöglichen.

Das Kontaktformular basiert auf der Joomla-Core-Komponente `com_contact`. Die Anfrage wird per E-Mail an ein dediziertes WissensWerk-Postfach übermittelt. Eine dauerhafte Speicherung der Kontaktanfragen in einer eigenen Joomla-Datenbank oder einem Ticketsystem ist derzeit nicht vorgesehen.

Im Rahmen der Konzeption wurde geprüft, wie eine begrenzte Vorhalte- und Löschfrist technisch zuverlässig umgesetzt werden kann. Dabei zeigte sich, dass bei einer klassischen E-Mail-Kommunikation mehrere technische Ebenen beteiligt sind:

```text
Kontaktformular
      ↓
Joomla / com_contact
      ↓
Mailserver
      ↓
Postfach
      ↓
Mailclient
      ↓
Gesendet / Papierkorb / ggf. weitere Kopien
```

Insbesondere bei IMAP verbleiben Nachrichten grundsätzlich auf dem Mailserver. Das Verschieben in den Papierkorb ist nicht zwangsläufig gleichbedeutend mit einer unmittelbar kontrollierbaren endgültigen Löschung. Zusätzlich können Provider eigene technische Sicherungen und Backups vorhalten.

Damit besteht bei einer reinen E-Mail-Lösung keine vollständige technische Hoheit von WissensWerk über jeden möglichen Speicherort einer Nachricht.

## Fachliche Zielsetzung

WissensWerk verfolgt mit dem Kontaktformular keinen klassischen Geschäftszweck und soll kein dauerhaftes Kunden-, Support- oder Ticketsystem darstellen.

Kontaktanfragen sollen:

1. entgegengenommen,
2. bearbeitet und beantwortet,
3. für einen begrenzten Zeitraum für mögliche Rückfragen vorgehalten und
4. anschließend gelöscht werden.

Als erste konzeptionelle Vorhaltefrist wird eine maximale Dauer von **sieben Tagen nach Abschluss der Bearbeitung** vorgesehen.

Die sieben Tage sind dabei keine pauschale gesetzliche Frist, sondern eine für WissensWerk festzulegende organisatorische Regel, die sich am tatsächlichen Zweck der Kontaktaufnahme orientiert.

## Entscheidung

### 1. Kein eigenes Ticketsystem zum jetzigen Zeitpunkt

WissensWerk führt zunächst **kein eigenes Ticketsystem und keine eigene Kontakt-Datenbank** ein.

Die Einführung eines Ticketsystems wäre technisch zwar geeignet, eine größere Hoheit über Vorgänge, Status und Löschung herzustellen, würde aber gleichzeitig einen erheblichen zusätzlichen Systemumfang erzeugen:

- zusätzliche personenbezogene Datenhaltung,
- Datenbank und Vorgangsverwaltung,
- Rechte- und Benutzerkonzept,
- Lösch- und Aufbewahrungslogik,
- zusätzliche Sicherheits- und Wartungsanforderungen,
- zusätzliche Joomla-Erweiterungen oder eigene Software,
- höhere Komplexität des Gesamtsystems.

Ein solcher Aufwand ist für den derzeit vorgesehenen Umfang von WissensWerk nicht gerechtfertigt.

### 2. E-Mail bleibt zunächst der Kommunikationskanal

Die Kontaktanfrage wird weiterhin über die Joomla-Core-Komponente `com_contact` per E-Mail an ein dediziertes WissensWerk-Postfach übermittelt.

Damit bleibt die Joomla-Architektur schlank und es wird keine zusätzliche Anwendung für einen Anwendungsfall geschaffen, der derzeit nicht besteht.

### 3. Sieben Tage als organisatorische Vorhaltefrist

Nach Abschluss der Bearbeitung werden die betreffenden Nachrichten grundsätzlich noch für maximal sieben Tage vorgehalten, um mögliche Rückfragen zur ursprünglichen Anfrage zu ermöglichen.

Anschließend sollen die Nachrichten im regulären Datenbestand gelöscht werden.

Die Regel bezieht sich auf den von WissensWerk kontrollierten regulären Kommunikationsbestand. Technische Sicherungen oder Backups des eingesetzten Mailproviders sind davon als separate technische Verarbeitungsebene zu betrachten und müssen bei der späteren Providerwahl bzw. Datenschutzprüfung berücksichtigt werden.

### 4. Kein künstlicher Dauerbetrieb

Kontaktanfragen, die innerhalb dieses begrenzten Zeitraums nicht zu einem weiteren Austausch führen, werden abgeschlossen.

Entwickelt sich aus einer Kontaktaufnahme ein längerfristiger gemeinschaftlicher oder privater Austausch, soll dieser nicht automatisch zu einer dauerhaften Speicherung innerhalb von WissensWerk führen.

Ein längerfristiger Austausch kann gegebenenfalls über einen dafür geeigneten, außerhalb des eigentlichen WissensWerk-Kontaktprozesses liegenden Kommunikationsweg erfolgen.

## Datenschutzbezogene Konsequenz

Die Architektur unterscheidet ausdrücklich zwischen:

**Informationspflicht**

Der Nutzer wird beim Kontaktformular darüber informiert, zu welchem Zweck die übermittelten Daten verarbeitet werden und wo die ausführlichen Datenschutzhinweise zu finden sind.

**Einwilligung**

Eine pauschale Einwilligung zur Verarbeitung der Kontaktanfrage wird nicht als technische Voraussetzung vorausgesetzt. Die konkrete Rechtsgrundlage der Verarbeitung ist in der Datenschutzerklärung anhand des tatsächlichen Verarbeitungsvorgangs festzulegen.

Eine Checkbox soll daher nicht mit einer Einwilligung verwechselt werden.

Falls eine Checkbox verwendet wird, soll sie beispielsweise lauten:

> Ich habe die Datenschutzhinweise zur Kenntnis genommen.

Damit wird keine Zustimmung zu einer bestimmten Rechtsgrundlage behauptet.

## Technische Konsequenz

Die Kontaktfunktion soll möglichst vollständig auf Joomla-Core-Funktionalität aufbauen.

Vorgesehen sind:

- Joomla `com_contact`
- Joomla-Formularvalidierung
- Custom Field im Kontext `Mail`, sofern für die gewünschte Checkbox erforderlich
- Template-Override für die visuelle Integration
- keine eigene Kontakt-Datenbank
- kein eigenes Ticketsystem
- keine eigene JavaScript-Lösung für die Formularvalidierung

Die konkrete technische Löschung wird erst nach Festlegung des tatsächlichen Mailproviders abschließend bewertet.

## Abgrenzung

Diese Entscheidung bedeutet nicht, dass ein Ticketsystem grundsätzlich ungeeignet ist.

Ein Ticketsystem wird dann erneut bewertet, wenn ein konkreter Bedarf entsteht, beispielsweise durch:

- größere Anzahl eingehender Anfragen,
- mehrere gleichzeitig zu bearbeitende Vorgänge,
- mehrere Bearbeiter,
- Bedarf an Vorgangsstatus und Zuständigkeiten,
- nachvollziehbare Fristenverwaltung,
- automatisierte Löschung,
- oder einen dauerhaft wachsenden Kommunikationsbestand.

Die Einführung eines Ticketsystems soll **bedarfsgesteuert** erfolgen und nicht allein aus theoretischen Datenschutzüberlegungen.

## Konsequenz für die weitere Planung

Vor der endgültigen Formulierung der Datenschutzerklärung sind noch folgende Punkte zu klären:

1. tatsächlicher Mailprovider,
2. technische Eigenschaften des verwendeten Postfachs,
3. Umgang mit Posteingang, Gesendet und Papierkorb,
4. technische bzw. organisatorische Löschmöglichkeiten,
5. mögliche Provider-Backups und deren Aufbewahrung,
6. endgültige Rechtsgrundlage für die Verarbeitung von Kontaktanfragen,
7. endgültige Formulierung der Speicherdauer.

Erst danach wird die endgültige Datenschutzformulierung in die WissensWerk-Seite übernommen.

## Begründung

Die Entscheidung folgt dem Grundsatz:

> **So wenig technische Infrastruktur wie nötig, aber so viel Kontrolle wie für den tatsächlichen Zweck erforderlich.**

WissensWerk soll keinen künstlichen Support- oder Geschäftsbetrieb aufbauen, nur um einen einfachen Kontaktprozess technisch zu verwalten.

Die Architektur bleibt deshalb zunächst bewusst einfach. Die Grenze dieser Lösung ist bekannt und dokumentiert. Sollte der tatsächliche Kommunikationsumfang später eine höhere Kontrolle über Vorgänge und Löschung erforderlich machen, kann ein Ticketsystem als eigenständige Architekturentscheidung eingeführt werden.