# DV-004 Git Workflow

## Zweck
Dieses Dokument beschreibt den Git-Workflow für das WissensWerk-Projekt. Ziel ist eine nachvollziehbare, saubere und wartbare Versionshistorie.
Der Workflow orientiert sich an bewährten Git-Praktiken und unterstützt eine strukturierte Entwicklung des Templates.

## Grundsätze
Für das Projekt gelten folgende Grundsätze:

- Jeder Commit stellt einen abgeschlossenen Arbeitsschritt dar
- Commits dokumentieren erreichte Ergebnisse, nicht den Arbeitsfortschritt
- Vor jedem Commit wird der Repository-Status überprüft.
- Nur bewusst ausgewählte Dateien werden versioniert.
- Änderungen werden möglichst klein und thematisch zusammenhängend gehalten.
- Standard-Workflow
- 
## 1. Repository-Status prüfen
Vor jeder Versionierung wird zunächst der aktuelle Status kontrolliert.

````
  git status
````

Dabei wird überprüft:

Welche Dateien geändert wurden
Welche Dateien neu sind
Welche Dateien noch nicht versioniert werden

## 2. Änderungen prüfen
Vor dem Hinzufügen der Dateien werden die Änderungen kontrolliert.
Einzelne Datei anzeigen:

````
````git diff <datei>
````

Alle Änderungen anzeigen:

````
  git diff
````

Ziel ist es, unbeabsichtigte Änderungen frühzeitig zu erkennen.

## 3. Änderungen zur Staging Area hinzufügen
Alle gewünschten Änderungen werden übernommen.
Gesamtes Projekt:

````
  git add .
````

Einzelne Datei:

````
  git add <datei>
````

## 4. Status erneut prüfen

Vor dem Commit erfolgt eine zweite Kontrolle.

````
  git status
````

Erwartetes Ergebnis:
Changes to be committed
Es sollten keine unbeabsichtigten Änderungen mehr vorhanden sein.

## 5. Commit erstellen
Das Projekt verwendet die Conventional Commits.

Beispiel:

````
  git commit -m "feat(template): initialize WissensWerk template foundation"
````

## 6. Commit kontrollieren
Nach dem Commit wird die Historie überprüft.

````
  git log --oneline
````

Dadurch wird sichergestellt, dass der Commit korrekt erstellt wurde.

## 7. Änderungen übertragen
Nach erfolgreicher Prüfung werden die Änderungen an das Remote Repository übertragen.

````
  git push
````

Beim ersten Push:

````
  git push -u origin main
````

## Commit-Regeln

Ein Commit sollte:

- eine abgeschlossene Änderung enthalten
- logisch zusammenhängende Änderungen umfassen
- keine temporären Dateien enthalten
- jederzeit wiederherstellbar sein

Nicht geeignet sind beispielsweise:

- halb fertige Funktionen
- Testdateien
Debug-Code
temporäre Experimente
Qualitätskontrolle vor jedem Commit

Vor jedem Commit sollte geprüft werden:

- Ist der Arbeitsabschnitt abgeschlossen?
- Enthält der Commit nur zusammengehörige Änderungen?
- Wurde git status kontrolliert?
- Sind keine temporären Dateien enthalten?
- Sind neue Dateien bewusst hinzugefügt worden?
- Entspricht die Commit-Nachricht den Commit-Konventionen?

## Erstes Repository

Für den ersten Commit eines neuen Projekts empfiehlt sich folgende Reihenfolge:

- git status
- git add .
- git status
- git commit -m "feat(template): initialize WissensWerk template foundation"
- git log --oneline
- git push -u origin main

## Verwandte Dokumente
- [🛠️ DV-001 Template erstellen](./dv-001-template-erstellen.md)
- [⚙️ TF-004 Commit Convention](./../technical-foundation/tf-004-commit-convention.md)
- [⚙️ TF-006 Release Management](./../technical-foundation/tf-006-release-management.md)
- [⚙️ TF-007 Versionierung](./../technical-foundation/tf-007-versionierung.md)

## Ergebnis
Der definierte Git-Workflow sorgt für eine nachvollziehbare und saubere Versionshistorie. Durch die konsequente Überprüfung des Repository-Status vor jedem Commit werden unbeabsichtigte Änderungen vermieden. Die Verwendung kleiner, thematisch abgeschlossener Commits verbessert die Wartbarkeit und erleichtert die Nachvollziehbarkeit der Projektentwicklung.
