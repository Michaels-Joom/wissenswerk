[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [⚙️ Technische Grundlagen](./tf-000-technische-grundlagen.md)

---

# TF-001 GitHub Workflow

**Dokumenttyp:** Technische Grundlage  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## Ziel

Der GitHub-Workflow sorgt dafür, dass Änderungen nachvollziehbar, reproduzierbar und sauber dokumentiert werden.

Der aktuelle Workflow ist bewusst auf die Entwicklung durch eine einzelne Person ausgelegt.

---

## Grundprinzip

Der derzeitige Workflow lautet:

```text
Idee / Anforderung
        ↓
Issue
        ↓
Entwicklung
        ↓
Build / Prüfung
        ↓
Commit
        ↓
main
        ↓
GitHub
```

Nicht jede kleine Korrektur benötigt zwingend ein eigenes Issue. Größere oder fachlich abgegrenzte Änderungen werden über Issues dokumentiert.

---

## 1. Idee oder Anforderung

Neue Funktionen, Verbesserungen oder Fehler werden zunächst konkret beschrieben.

Dabei werden Ziel, Umfang und mögliche Auswirkungen betrachtet.

---

## 2. Issue

Ein Issue dient als fachlicher und organisatorischer Rahmen einer Änderung.

Es kann insbesondere dokumentieren:

- Ziel
- Ausgangssituation
- Umfang
- Akzeptanzkriterien
- Entscheidungen
- Ergebnis

Kleine offensichtliche Korrekturen können ohne separates Issue erfolgen.

---

## 3. Entwicklung

Die Umsetzung erfolgt lokal im Entwicklungsstand.

Dabei werden Änderungen möglichst logisch getrennt durchgeführt.

Bei SCSS- oder JavaScript-Änderungen wird anschließend der erforderliche Build ausgeführt.

---

## 4. Prüfung

Vor dem Commit wird geprüft, ob die Änderung technisch und funktional korrekt ist.

Je nach Änderung gehören dazu:

- SCSS-Build
- JavaScript-Build
- JavaScript-Syntaxprüfung
- Browserprüfung
- Responsive Prüfung
- Prüfung der betroffenen Joomla-Funktionen
- Prüfung der Dokumentation

---

## 5. Commit

Der Commit dokumentiert die technische Änderung.

WissensWerk verwendet strukturierte Commit-Nachrichten nach der im Projekt festgelegten Commit Convention.

Beispiel:

```text
feat(navigation): finalize MetisMenu navigation
```

---

## 6. Integration in main

Der aktuelle Entwicklungsworkflow arbeitet direkt mit `main`.

Nach erfolgreicher Prüfung wird der Commit nach `main` geschrieben und anschließend nach GitHub übertragen.

Feature Branches und Pull Requests sind derzeit nicht Bestandteil des aktiven Workflows.

---

## 7. Dokumentation

Dokumentation wird zusammen mit der Entwicklung aktualisiert, wenn sich Architektur, Design, Prozesse oder technische Grundlagen verändern.

Ziel ist, dass Dokumentation und tatsächlicher Projektstand nicht dauerhaft auseinanderlaufen.

---

## Build und Artefakte

JavaScript wird aus der nicht minifizierten Quelldatei gebaut.

Grundprinzip:

```text
menu-metismenu.js
       ↓
     Terser
       ↓
menu-metismenu.min.js
```

Der Build wird vor dem Commit durchgeführt, wenn die Quelldatei geändert wurde.

---

## Zukünftige Erweiterungen

Bei wachsender Projektgröße können ergänzt werden:

- Feature Branches
- Pull Requests
- Code Reviews
- automatisierte Tests
- Continuous Integration
- Continuous Deployment

Diese Erweiterungen werden erst eingeführt, wenn sie einen praktischen Mehrwert bieten.

---

## Verwandte Dokumente

- [⚙️ TF-002 Issue Management](./tf-002-issue-management.md)
- [⚙️ TF-003 Branching Strategy](./tf-003-branching-strategy.md)
- [⚙️ TF-004 Commit Convention](./tf-004-commit-convention.md)
- [⚙️ TF-005 Pull Request Process](./tf-005-pull-request-process.md)
- [⚙️ TF-006 Release Management](./tf-006-release-management.md)

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | Juli 2026 | Ursprünglichen GitHub-Workflow erstellt. |
| 2.0 | 02.09.2026 | Workflow an den aktuellen Single-Developer-, Build-, Prüf- und GitHub-Prozess angepasst. |
