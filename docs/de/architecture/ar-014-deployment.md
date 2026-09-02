[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🏗️ Architektur Übersicht](./ar-000-architektur-uebersicht.md)

---

# AR-014 Deployment

**Dokumenttyp:** Architekturdokumentation  
**Projekt:** WissensWerk Template  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

## 1. Zweck

Dieses Dokument beschreibt die geplante Bereitstellung und Aktualisierung des WissensWerk-Templates.

Das Deployment orientiert sich an den von Joomla bereitgestellten Installations- und Aktualisierungsmechanismen.

## 2. Architekturentscheidung

Das Template wird als Joomla-Erweiterung bereitgestellt.

Die Installation und Aktualisierung erfolgen über die vorgesehenen Joomla-Mechanismen.

Ein automatisierter CI/CD-Deploymentprozess ist aktuell nicht Bestandteil des Projekts.

Die Entwicklungsumgebung und der Buildprozess sind vom produktiven Joomla-System getrennt.

## 3. Grundsätze

Für das Deployment gelten:

- Joomla-Core-Dateien werden nicht verändert.
- Das Template wird als Erweiterung bereitgestellt.
- Vor der Bereitstellung werden die benötigten Frontend-Assets erzeugt.
- Build-Artefakte müssen Bestandteil der bereitgestellten Template-Version sein.
- Node.js und npm sind keine Laufzeitvoraussetzung des Produktivsystems.
- Änderungen auf dem Zielsystem erfolgen nicht durch manuelle Bearbeitung von Template-Dateien.
- Versionierte Releases werden über den vorgesehenen Joomla-Installationsprozess eingespielt.

## 4. Build vor Deployment

Vor einer Bereitstellung wird geprüft, ob alle benötigten Assets aktuell erzeugt wurden.

Vereinfacht:

```text
Quellcode
   │
   ▼
Build
   │
   ├── CSS
   └── minifiziertes JavaScript
   │
   ▼
Release / Installationspaket
   │
   ▼
Joomla
```

Der Build erfolgt in der Entwicklungsumgebung.

Der Produktivserver benötigt die Buildwerkzeuge nicht.

## 5. Versionsverwaltung

Git und GitHub bilden die Grundlage für die Versionierung.

Vor einem Release soll insbesondere geprüft werden:

- Git-Status
- Build-Artefakte
- funktionaler Frontend-Test
- Template-Manifest
- Versionsstand
- Dokumentation

## 6. Installation und Aktualisierung

Die Bereitstellung erfolgt über den Joomla-Erweiterungsmechanismus.

Dabei wird die neue Template-Version als Erweiterung installiert beziehungsweise aktualisiert.

Direkte Änderungen an Dateien auf dem Zielsystem werden vermieden.

## 7. Rollback

Ein Rollback soll grundsätzlich über eine zuvor bereitgestellte stabile Template-Version erfolgen.

Da die Entwicklung versioniert wird, können ältere Git-Stände beziehungsweise Releases als Grundlage für eine erneute Bereitstellung dienen.

Die konkrete Rollback-Strategie des späteren Produktivsystems wird bei Einführung eines tatsächlichen Deployments weiter spezifiziert.

## 8. Aktueller Entwicklungsstand

Das Deployment ist architektonisch definiert, aber noch kein automatisierter Releaseprozess.

Aktuell liegt der Schwerpunkt auf:

- lokaler Entwicklung
- Git-Versionierung
- GitHub
- reproduzierbarem Frontend-Build
- funktionaler Prüfung
- späterer standardkonformer Joomla-Bereitstellung

## 9. Verwandte Dokumente

- [🏗️ AR-002 Template-Architektur](./ar-002-template-architektur.md)
- [🏗️ AR-012 Build-Prozess](./ar-012-build-prozess.md)
- [🏗️ AR-013 Entwicklungsumgebung](./ar-013-entwicklungsumgebung.md)
- [🏗️ AR-014 Deployment](./ar-014-deployment.md)

## 10. Ergebnis

Das Deployment bleibt bewusst einfach und Joomla-konform.

Die aktuelle Architektur trennt:

```text
Entwicklung
    ↓
Git / GitHub
    ↓
Build
    ↓
Release-Paket
    ↓
Joomla-Installation / Aktualisierung
```

Ein automatisiertes Deployment wird erst dann eingeführt, wenn dafür im Projekt ein konkreter Bedarf besteht.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|----------|--------|--------------|
| 1.0 | 28.07.2026 | Erstversion erstellt. |
| 2.0 | 02.09.2026 | Buildprozess, Git/GitHub und Trennung von Entwicklungs- und Laufzeitumgebung ergänzt; Deploymentstatus präzisiert. |
