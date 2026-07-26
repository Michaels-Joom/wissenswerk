[⋮⋮⋮ Inhaltsverzeichnis](./../inhaltsverzeichnis.md) [📐 Architektur-Entscheidungen](./adr-000-architekturentscheidungen.md)

---

# ADR-002 WissensWerk basiert auf einem eigenständigen Joomla-Template
Status 
Angenommen

## Kontext
Joomla stellt mit Cassiopeia ein modernes Standardtemplate zur Verfügung, das sich über ein Child-Template erweitern lässt. Ein Child-Template übernimmt jedoch die Architektur und die technischen Entscheidungen des Basistemplates.

Im vorherigen Projekt zeigte sich, dass eigene Anforderungen an Design, Architektur und Struktur zunehmend mit den Vorgaben von Cassiopeia kollidierten. Die notwendige Anpassung bestehender Strukturen führte zu einem steigenden Aufwand und erschwerte die konsequente Umsetzung einer eigenständigen Template-Architektur.

## Entscheidung
WissensWerk wird als eigenständiges Joomla-Template entwickelt.
Cassiopeia dient ausschließlich als Referenz für bewährte Lösungsansätze und wird nicht als technische Grundlage des Projekts verwendet.
Bootstrap und die Joomla Web Asset API werden unabhängig davon weiterhin genutzt.

## Begründung
Ein eigenständiges Template ermöglicht eine vollständige Kontrolle über Architektur, Verzeichnisstruktur, Designsystem und Implementierung.
Eigene Architekturentscheidungen können unmittelbar umgesetzt werden, ohne bestehende Strukturen überschreiben oder an die Vorgaben eines Basistemplates anpassen zu müssen.
Die Entwicklung konzentriert sich dadurch auf die Umsetzung eigener Konzepte anstatt auf die Anpassung vorhandener Lösungen.

## Konsequenzen
_Vorteile_
- vollständige Kontrolle über die Template-Architektur
- klare Trennung zwischen Joomla und Projektcode
- konsistente Umsetzung des Designsystems
- keine Abhängigkeit von der Architektur von Cassiopeia
- bessere Nachvollziehbarkeit der eigenen Implementierung
  
_Nachteile_
- höherer initialer Entwicklungsaufwand
- Funktionen des Standardtemplates müssen bei Bedarf selbst umgesetzt werden
- Verantwortung für Wartung und Weiterentwicklung liegt vollständig beim Projekt
- 
## Alternativen
**Cassiopeia Child-Template**
Ein Child-Template wurde aufgrund praktischer Erfahrungen verworfen. Die Abhängigkeit von der bestehenden Template-Architektur führte zu zusätzlichem Anpassungsaufwand und erschwerte die konsequente Umsetzung der eigenen Architekturprinzipien.


Das ist aus meiner Sicht genau der Ton, den ein ADR haben sollte: sachlich, nachvollziehbar und auf Basis konkreter Projekterfahrungen.
