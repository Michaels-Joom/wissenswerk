# RM-002 – Releaseplan

**Status:** Aktiv  
**Version:** 2.0  
**Letzte Aktualisierung:** 02.09.2026  
**Projekt:** WissensWerk

## 1. Zweck

Der Releaseplan beschreibt die geplanten Entwicklungs- und Veröffentlichungsstufen von WissensWerk.

Die Versionsnummern dienen dabei als Orientierung für den Entwicklungsstand. Ein Release wird nicht allein aufgrund eines erreichten Funktionsumfangs erstellt, sondern erst nach der entsprechenden Prüfung und Dokumentation.

## 2. Versionsstrategie

WissensWerk orientiert sich an **Semantic Versioning (SemVer)**:

```text
MAJOR.MINOR.PATCH
```

Dabei gilt grundsätzlich:

- **MAJOR** – inkompatible Änderungen der veröffentlichten Schnittstellen oder Architektur
- **MINOR** – neue, abwärtskompatible Funktionen
- **PATCH** – Fehlerkorrekturen und kleinere technische Anpassungen

Die konkrete Versionsnummer wird anhand des tatsächlichen Entwicklungsstands festgelegt.

## 3. Entwicklungsstufen

| Version | Ziel | Status |
|---|---|---|
| 0.1.0 | Repository und Template-Grundgerüst | ✅ |
| 0.2.0 | Asset-Management und SCSS-Workflow | ✅ |
| 0.3.0 | Layoutsystem und Designsystem | 🔄 |
| 0.4.0 | Bootstrap- und Joomla-Integration | 🔄 |
| 0.5.0 | Header, Navigation, Footer und Offcanvas | 🔄 |
| 0.6.0 | Komponenten und benötigte Overrides | ⏳ |
| 0.7.0 | Responsive Ausarbeitung | ⏳ |
| 0.8.0 | Accessibility, SEO und Qualitätssicherung | ⏳ |
| 0.9.0 | Beta / Release Candidate | ⏳ |
| 1.0.0 | Erstes stabiles Release | ⏳ |

Die Tabelle beschreibt Entwicklungsziele und stellt keine Aussage darüber dar, dass jede Zwischenversion bereits veröffentlicht wurde.

## 4. Releasekriterien

Ein Release soll mindestens folgende Voraussetzungen erfüllen:

- Template installierbar
- Joomla-Core unverändert
- Assets korrekt registriert und ausgeliefert
- SCSS beziehungsweise CSS geprüft
- JavaScript-Build erfolgreich
- produktive JavaScript-Dateien syntaktisch geprüft
- Responsive Verhalten geprüft
- grundlegende Accessibility geprüft
- SEO-relevante Ausgaben geprüft
- Dokumentation auf aktuellem Stand
- Git-Repository sauber und nachvollziehbar

## 5. Build und Auslieferung

Die Entwicklungsumgebung und der Produktionsbetrieb werden getrennt betrachtet.

Während der Entwicklung werden unter anderem:

- SCSS über den Live Sass Compiler
- JavaScript über Node.js/npm und Terser

verarbeitet.

Für die Auslieferung werden die benötigten fertigen Assets bereitgestellt. Node.js und npm sind kein Bestandteil der produktiven Joomla-Laufzeit.

## 6. Releaseablauf

Ein Release folgt grundsätzlich diesem Ablauf:

1. Entwicklungsstand abschließen
2. Build durchführen
3. Funktion und Darstellung testen
4. Accessibility und SEO prüfen
5. Dokumentation aktualisieren
6. Git-Status prüfen
7. Release-Version festlegen
8. Commit und gegebenenfalls Tag erstellen
9. Release-Paket prüfen
10. Veröffentlichung

## 7. Releasephilosophie

WissensWerk veröffentlicht nicht möglichst früh eine Versionsnummer, sondern dokumentiert den tatsächlich erreichten Entwicklungsstand.

Ein Release ist daher immer auch ein dokumentierter Zustand des Projekts.

