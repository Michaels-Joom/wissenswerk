[⋮⋮⋮ Inhaltsverzeichnis](./../table-of-contents.md)

---

# TS-001 – Troubleshooting: Navigation und Cassiopeia-Menütyp

## Zweck

Dieses Dokument hält eine typische Fehlersuche aus der Entwicklung von WissensWerk fest.

Der konkrete Fall ist besonders relevant, weil zunächst ein technischer Fehler in der eigenen Navigation vermutet wurde. Die Untersuchung zeigte jedoch, dass die Implementierung korrekt arbeitete und lediglich eine Joomla-Menüeinstellung aus dem Cassiopeia-Umfeld das beobachtete Verhalten verursachte.

Die Dokumentation soll damit nicht nur die Lösung festhalten, sondern auch den Diagnoseweg: **Nicht jedes ungewöhnliche Verhalten im Template ist ein Fehler der eigenen Implementierung.**

---

## 1. Ausgangssituation

Während der Entwicklung der Navigation trat ein Verhalten auf, das zunächst wie ein Fehler in der eigenen Menüimplementierung wirkte.

Da WissensWerk eine eigene Navigation auf Basis von Joomla-Menüstrukturen, MetisMenu und Bootstrap verwendet, lag der Verdacht nahe, dass

- die Menüstruktur,
- die MetisMenu-Initialisierung,
- die Collapse-Logik,
- das JavaScript oder
- die eigenen SCSS-Regeln

die Ursache sein könnten.

Die Fehlersuche wurde deshalb zunächst auf der Template-Seite angesetzt.

---

## 2. Untersuchung

Bei der Analyse wurde schrittweise geprüft, ob die eigene Implementierung das beobachtete Verhalten verursacht.

Dabei zeigte sich, dass die Navigation technisch korrekt arbeitete.

Insbesondere waren keine Änderungen am Joomla-Core erforderlich und auch die eigene JavaScript- bzw. MetisMenu-Logik musste nicht als Fehlerursache korrigiert werden.

Die entscheidende Ursache lag stattdessen in der **Menütyp-Konfiguration in Joomla**.

---

## 3. Ursache

Die betreffende Menüposition bzw. der Menüpunkt war noch mit einer Einstellung verbunden, die aus dem **Cassiopeia-Dropdown-Konzept** stammte bzw. dessen Verhalten beeinflusste.

Damit entstand ein wichtiger Unterschied zwischen:

1. der technischen Implementierung der WissensWerk-Navigation und
2. der Konfiguration des Joomla-Menüs.

Die Navigation selbst war also nicht fehlerhaft.

Die vorhandene Menüeinstellung führte lediglich dazu, dass Joomla die Menüstruktur bzw. deren Ausgabe anders behandelte als für das WissensWerk-Konzept vorgesehen.

### Erkenntnis

> Die beobachtete Abweichung war kein Fehler in der WissensWerk-Navigation, sondern eine nicht passende Joomla-Menüeinstellung.

---

## 4. Lösung

Die betreffende Menüeinstellung wurde auf die für WissensWerk vorgesehene Konfiguration angepasst.

Anschließend verhielt sich die Navigation wie erwartet.

Es war **keine Änderung am Joomla-Core** und keine grundlegende Änderung an MetisMenu oder der eigenen JavaScript-Implementierung erforderlich.

---

## 5. Technische Erkenntnis

Dieser Fall zeigt eine wichtige Besonderheit bei der Entwicklung eines eigenständigen Joomla-Templates:

Joomla liefert nicht nur HTML aus. Das tatsächliche Verhalten einer Navigation entsteht aus dem Zusammenspiel von

- Menüstruktur,
- Menütyp,
- Menüparametern,
- Template,
- Template-Overrides,
- JavaScript,
- CSS/SCSS und
- gegebenenfalls Bootstrap- bzw. MetisMenu-Verhalten.

Deshalb muss bei einem unerwarteten Verhalten zunächst zwischen **Implementierungsfehler** und **Konfigurationsfehler** unterschieden werden.

---

## 6. Troubleshooting-Regel für WissensWerk

Bei zukünftigen Problemen mit Joomla-Menüs sollte die Fehlersuche möglichst in dieser Reihenfolge erfolgen:

1. **Menüstruktur prüfen**
   - Ist der Menüpunkt korrekt angelegt?
   - Stimmen Eltern-/Kindbeziehungen?
   - Ist der Menüpunkt veröffentlicht?

2. **Menütyp und Menüparameter prüfen**
   - Welcher Joomla-Menütyp wird verwendet?
   - Sind noch Einstellungen aus Cassiopeia oder einem anderen Template aktiv?
   - Beeinflussen Menüparameter die Ausgabe?

3. **Generierte HTML-Struktur prüfen**
   - Welche Klassen und Attribute liefert Joomla?
   - Entspricht die Struktur der erwarteten MetisMenu-Struktur?

4. **Template-Override prüfen**
   - Verändert ein Override die von Joomla erzeugte Struktur?
   - Ist die Ausgabe mit der vorgesehenen Architektur kompatibel?

5. **JavaScript prüfen**
   - Wird MetisMenu korrekt initialisiert?
   - Gibt es JavaScript-Fehler?
   - Werden Collapse-Zustände korrekt gesetzt?

6. **SCSS/CSS prüfen**
   - Greifen eigene Regeln?
   - Werden Bootstrap-, Joomla- oder MetisMenu-Regeln überschrieben?

Erst wenn diese Punkte geprüft wurden, sollte die eigene Implementierung geändert werden.

---

## 7. Architekturprinzip

Der Vorfall bestätigt ein grundsätzliches Architekturprinzip von WissensWerk:

**Konfiguration, Joomla-Ausgabe und Template-Verhalten müssen getrennt betrachtet werden.**

Eine Änderung am eigenen Code ist nicht automatisch die richtige Lösung für ein beobachtetes Problem.

Gerade bei Joomla ist deshalb vor einer Codeänderung zu prüfen, ob das Verhalten bereits durch die Menü- oder Template-Konfiguration bestimmt wird.

---

## 8. Fazit

Die Fehlersuche war letztlich erfolgreich, obwohl kein Fehler im eigenen Code gefunden wurde.

Das ist für die Entwicklung ebenso wertvoll wie die Behebung eines tatsächlichen Programmierfehlers:

> **Ein Problem zu diagnostizieren bedeutet nicht zwingend, Code zu ändern. Manchmal besteht die richtige Lösung darin, festzustellen, dass der Code bereits korrekt arbeitet.**

Der konkrete Fall mit der Cassiopeia-Dropdown-Einstellung wird deshalb als Troubleshooting-Beispiel in der WissensWerk-Dokumentation festgehalten.
