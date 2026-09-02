[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md) [🪜Roadmap](./rm-000-roadmap-uebersicht.md)

---

# RM-001 – Projekt-Roadmap

| Dokument | RM-001 |
|---|---|
| Titel | Projekt-Roadmap |
| Version | 2.0 |
| Status | Aktiv |
| Letzte Aktualisierung | 02.09.2026 |

## 1. Ziel

Dieses Dokument beschreibt den Entwicklungsverlauf des Projekts **WissensWerk**.

Die Roadmap verbindet:

- Architektur
- Designsystem
- Entwicklungsumgebung
- Entwicklungsrichtlinien
- Template-Implementierung
- Komponenten
- Qualitätssicherung
- Releases

Die Roadmap wird an den tatsächlich erreichten Projektstand angepasst. Abgeschlossene Arbeitspakete werden möglichst durch Dokumentation und Git-Commits nachvollziehbar gemacht.

## 2. Projektphasen

| Phase | Bezeichnung | Status |
|---|---|---|
| 0 | Projektgrundlagen | ✅ Abgeschlossen |
| 1 | Architektur | ✅ Abgeschlossen |
| 2 | Designsystem | ✅ Abgeschlossen |
| 3 | Entwicklungsumgebung und Build | ✅ Abgeschlossen |
| 4 | Template-Implementierung | 🔄 In Arbeit |
| 5 | Komponenten und Overrides | 🔄 In Arbeit |
| 6 | Qualität, Accessibility und SEO | ⏳ Geplant |
| 7 | Release und Veröffentlichung | ⏳ Geplant |

## 3. Abgeschlossene Grundlagen

Die ursprünglichen Grundlagen wurden inzwischen umgesetzt und bilden die Basis der weiteren Entwicklung:

- Projektstruktur und Dokumentationsarchitektur
- eigenständiges Joomla-Template
- Git und GitHub
- Laragon und Visual Studio Code
- Live Sass Compiler für die SCSS-Entwicklung
- Node.js/npm und Terser für den JavaScript-Build
- Designsystem und Design Tokens
- Bootstrap-Integration
- Joomla Web Asset API

## 4. Phase 4 – Template-Implementierung

| Status | Arbeitspaket |
|---|---|
| ✅ | Template-Grundgerüst |
| ✅ | Basislayout |
| ✅ | Header |
| ✅ | Footer |
| 🔄 | Navigation |
| 🔄 | Bootstrap Offcanvas |
| ⏳ | Breadcrumbs |
| ⏳ | erste Inhaltsseiten nach Mockups |

Die Navigation wurde technisch mit MetisMenu umgesetzt. Bootstrap stellt für das Offcanvas-Verhalten die technische Basis bereit; die visuelle Gestaltung erfolgt über das WissensWerk-Designsystem.

## 5. Phase 5 – Komponenten und Overrides

| Status | Arbeitspaket |
|---|---|
| ✅ | Branding-Komponente |
| ✅ | Header-Komponente |
| ✅ | Footer-Komponente |
| 🔄 | Navigationskomponente |
| 🔄 | Offcanvas |
| ⏳ | Breadcrumb-Override |
| ⏳ | weitere benötigte Modul-/Template-Overrides |

Neue Komponenten werden erst dann entwickelt, wenn sie sich aus den tatsächlichen Seitenanforderungen ergeben.

## 6. Phase 6 – Qualität

Nach Fertigstellung der wesentlichen Seiten und Komponenten folgen:

- Responsive Prüfung
- Tastaturbedienbarkeit
- Fokuszustände
- Kontrastprüfung
- semantische HTML-Struktur
- SEO-Prüfung
- Performance-Prüfung
- Prüfung der Joomla-Overrides
- Prüfung der Asset-Auslieferung
- Browser- und Gerätestests

## 7. Phase 7 – Release

Das Release erfolgt erst nach Abschluss der praktischen Prüfungen.

Vorgesehen sind:

1. Abschluss der benötigten Komponenten
2. Qualitätsprüfung
3. Dokumentationsabgleich
4. Versionsfestlegung
5. Release-Commit beziehungsweise Tag
6. Erstellung des Release-Pakets
7. abschließende Prüfung der installierbaren Template-Version

## 8. Internationalisierung

Die Internationalisierung wird als eigener Prüfbereich behandelt.

Zu prüfen sind insbesondere:

- Sprachstruktur
- Frontend-Sprachdateien
- Administrator-Sprachdateien
- Manifest-Sprachdateien
- Sprach-Overrides
- mehrsprachige Joomla-Installation
- unterschiedliche Textlängen im Responsive Layout

## 9. Fortschritt

Die Roadmap wird während der Entwicklung fortgeschrieben.

Ein Arbeitspaket gilt erst dann als abgeschlossen, wenn die praktische Umsetzung geprüft wurde. Die Dokumentation soll anschließend den tatsächlichen Stand widerspiegeln.

Damit dient die Roadmap nicht nur der Planung, sondern auch als nachvollziehbare Entwicklungshistorie.
