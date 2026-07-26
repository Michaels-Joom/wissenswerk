[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-014 Deployment

## Zweck
Dieses Dokument beschreibt den Deployment-Prozess des Templates. Es definiert die Vorgehensweise zur Bereitstellung neuer Versionen sowie die Grundsätze für Installation und Aktualisierung.

# 1. Architekturentscheidung
Das Deployment erfolgt manuell über die von Joomla bereitgestellten Installations- und Aktualisierungsmechanismen.
Automatisierte Deployment-Prozesse sind nicht Bestandteil des Projekts.

# 2. Ziele
Das Deployment verfolgt folgende Ziele:

* standardkonforme Installation
* einfache Aktualisierung
* reproduzierbare Bereitstellung
* hohe Kompatibilität mit Joomla

# 3. Grundsätze
Für das Deployment gelten folgende Regeln:

* Das Template wird als Joomla-Erweiterung bereitgestellt.
* Installation und Aktualisierung erfolgen über den Joomla-Erweiterungsmanager.
* Template-Dateien werden nicht manuell auf dem Zielsystem verändert.
* Neue Versionen werden über den vorgesehenen Joomla-Installationsprozess eingespielt.

# 4. Verwandte Architekturdokumente

- [🏗️ AR-001 Projektstruktur](./ar-001-projektstruktur.md)
- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-013 Entwicklungsumgebung](./ar-013-entwicklungsumgebung.md)

# Ergebnis
Das Deployment orientiert sich an den Standardmechanismen von Joomla. Dadurch bleibt die Installation und Aktualisierung des Templates einfach, nachvollziehbar und kompatibel mit zukünftigen Joomla-Versionen.
