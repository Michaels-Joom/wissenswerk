[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md)

# Projektphilosophie

**WissensWerk versteht sich nicht als fertiges Nachschlagewerk, sondern als offene Werkstatt. Jeder dokumentierte Schritt ist eine Einladung, mitzudenken, auszuprobieren und eigene Erfahrungen zu sammeln.**

> WissensWerk entstand aus dem Wunsch heraus, Softwareentwicklung nicht nur umzusetzen, sondern den gesamten Entwicklungsprozess nachvollziehbar zu dokumentieren und dabei Wissen systematisch aufzubauen.

---

## 1. Zielsetzung

WissensWerk verfolgt zwei miteinander verbundene Ziele:

- nachvollziehbare Softwareentwicklung
- systematischer und nachhaltiger Wissensaufbau

Dabei steht nicht allein das fertige Ergebnis im Mittelpunkt. Ebenso wichtig ist der Weg dorthin: Entscheidungen, Versuche, Probleme, Korrekturen und daraus gewonnene Erkenntnisse sollen nachvollziehbar bleiben.

---

## 2. Dokumentationsprinzip

Dokumentation ist Bestandteil der Entwicklung und kein nachträglicher Zusatz.

Daraus ergeben sich folgende Grundsätze:

- Entscheidungen werden begründet.
- Änderungen werden dokumentiert.
- Probleme und Fehlversuche werden nicht verschwiegen.
- Erkenntnisse werden festgehalten.
- Der dokumentierte Stand soll dem tatsächlich entwickelten System entsprechen.

Die Dokumentation soll nicht nur beschreiben, **was** umgesetzt wurde, sondern – soweit für das Verständnis relevant – auch erklären, **warum** eine bestimmte Lösung gewählt wurde.

---

## 3. Entwicklungsprinzip

Die technische Entwicklung orientiert sich an langfristiger Wartbarkeit und Updatefähigkeit.

Grundsätze:

- Joomla-Core-Dateien werden nicht verändert.
- Updatefähigkeit hat Vorrang vor kurzfristig einfachen Lösungen.
- Bevorzugt werden vorgesehene Erweiterungsmechanismen wie Templates, Template-Overrides, Plugins und Events.
- Architekturentscheidungen werden bewusst getroffen und dokumentiert.
- Funktionalität und Präsentation werden soweit sinnvoll voneinander getrennt.
- Drittanbieter-Komponenten und Bibliotheken werden über ihre vorgesehenen Schnittstellen integriert.

Eine schnelle Lösung ist nicht automatisch eine gute Lösung. Entscheidend ist, ob sie sich auch später nachvollziehen, warten und erweitern lässt.

---

## 4. Qualitätsprinzip

Lösungen werden nicht ausschließlich theoretisch entwickelt, sondern praktisch überprüft.

Dazu gehören:

- praktische Tests
- Überprüfung unterschiedlicher Bildschirmgrößen
- Prüfung der tatsächlichen Joomla-Ausgabe
- nachvollziehbare Build- und Entwicklungsprozesse
- Abgleich zwischen Dokumentation und implementiertem Stand

Beispiele sollen möglichst reproduzierbar sein.

Fehler und Fehlversuche dürfen Bestandteil der Dokumentation sein, wenn sie zu einer relevanten Erkenntnis geführt haben. Gerade dadurch wird nachvollziehbar, wie eine Architekturentscheidung entstanden ist.

---

## 5. Wissensprinzip

Wissen soll so dokumentiert werden, dass Zusammenhänge auch später nachvollzogen werden können.

Dafür gelten folgende Regeln:

- Ein Dokument behandelt grundsätzlich ein klar abgegrenztes Thema.
- Informationen werden strukturiert abgelegt.
- Wiederholungen werden vermieden.
- Zusammengehörige Entscheidungen werden miteinander verknüpft.
- Architekturentscheidungen werden als ADR dokumentiert.
- Architektur- und Entwicklungsdokumentation werden voneinander unterschieden.

Die Dokumentationsstruktur soll nicht nur Wissen speichern, sondern dessen Wiederauffindbarkeit unterstützen.

---

## 6. Architektur vor Umsetzung

WissensWerk verfolgt bewusst einen architekturorientierten Entwicklungsansatz.

Vor einer technischen Umsetzung wird – soweit die Bedeutung der Entscheidung dies rechtfertigt – zunächst geklärt:

1. Welches Problem soll gelöst werden?
2. Welche Verantwortung gehört an welche Stelle?
3. Welche vorhandenen Joomla- oder Bibliotheksfunktionen können genutzt werden?
4. Welche Lösung ist langfristig wartbar?
5. Welche Auswirkungen entstehen für andere Komponenten?

Dadurch soll verhindert werden, dass kurzfristige Einzelentscheidungen später zu unnötigen Abhängigkeiten oder umfangreichen Korrekturen führen.

---

## 7. Offenheit und Weiterentwicklung

Architekturentscheidungen sind nicht unveränderlich.

Neue Erkenntnisse können dazu führen, dass bestehende Annahmen überprüft und Lösungen weiterentwickelt werden.

Daher gilt:

- Entscheidungen dürfen sich ändern.
- Dokumentation wird kontinuierlich verbessert.
- Neue Erkenntnisse ersetzen veraltete Annahmen.
- Änderungen an grundlegenden Architekturentscheidungen werden nachvollziehbar dokumentiert.

Dabei wird zwischen einer **Weiterentwicklung der Implementierung** und einer **Änderung der eigentlichen Architekturentscheidung** unterschieden.

---

## 8. WissensWerk als offene Werkstatt

WissensWerk ist bewusst kein abgeschlossenes Produkt, dessen Entstehung verborgen bleibt.

Der Entwicklungsprozess selbst ist Bestandteil des Projekts.

Dokumentierte:

- Entscheidungen
- Lösungswege
- Fehler
- Tests
- Korrekturen
- Erkenntnisse

sollen anderen ermöglichen, die Entwicklung nachzuvollziehen und eigene Erfahrungen daraus abzuleiten.

Damit verbindet WissensWerk praktische Softwareentwicklung mit systematischem Wissensaufbau.

---

## 9. Leitgedanke

> **Nicht nur zeigen, was funktioniert – nachvollziehbar machen, warum es funktioniert.**

Dieser Leitgedanke verbindet Architektur, Entwicklung und Dokumentation des WissensWerk-Projekts.
