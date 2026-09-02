[[[ Inhaltsverzeichnis ]](./../table-of-contents.md) [🛠️ Entwicklungsübersicht](./dv-000-entwicklunguebersicht.md)

---

# DV-010 JavaScript-Buildprozess

**Dokumenttyp:** Entwicklungsdokumentation  
**Projekt:** WissensWerk  
**Status:** Aktiv  
**Version:** 2.0  
**Stand:** 02.09.2026

---

## 1. Zweck

Dieses Dokument beschreibt den Build-Prozess für JavaScript-Assets des WissensWerk-Templates.

Ziel ist es, aus lesbaren JavaScript-Quelldateien reproduzierbar minifizierte Produktionsdateien zu erzeugen.

Der Build erfolgt ausschließlich in der lokalen Entwicklungsumgebung.

Auf dem Joomla-Produktivsystem wird keine Node.js-/npm-Umgebung für diesen Build benötigt.

---

## 2. Grundprinzip

```text
JavaScript-Quelldatei
        │
        ▼
Entwicklung / Änderung
        │
        ▼
Terser
        │
        ▼
minifizierte Produktionsdatei
        │
        ▼
Joomla Template
```

---

## 3. Entwicklungsumgebung

### Node.js

Node.js wird in der lokalen Entwicklungsumgebung über Laragon bereitgestellt.

Aktueller Entwicklungsstand:

```text
Node.js v22.22.0
```

Lokaler Pfad:

```text
C:\laragonin
odejs
ode-v22```

### npm

Aktueller Entwicklungsstand:

```text
npm 10.9.4
```

Da die PowerShell-Ausführungsrichtlinie auf dem Entwicklungsrechner die entsprechenden `.ps1`-Aufrufe blockiert, werden für npm und npx die Windows-Kommandodateien verwendet:

```powershell
npm.cmd
npx.cmd
```

Beispiel:

```powershell
npm.cmd run build:js
```

### Terser

Terser wird als Development Dependency verwendet.

In `package.json` ist derzeit vorgesehen:

```json
"devDependencies": {
    "terser": "^5.51.2"
}
```

`package-lock.json` hält die konkret installierte Abhängigkeit fest.

---

## 4. Projektstruktur

```text
media/
└── templates/
    └── site/
        └── wissenswerk/
            └── js/
                └── mod_menu/
                    ├── menu-metismenu.js
                    └── menu-metismenu.min.js
```

### Dateien

| Datei | Bedeutung |
|---|---|
| `menu-metismenu.js` | maßgebliche Entwicklungs-/Quelldatei |
| `menu-metismenu.min.js` | erzeugtes Produktions-Asset |

---

## 5. package.json

Die Projektdatei `package.json` definiert die npm-Skripte und Entwicklungsabhängigkeiten.

Das Projekt ist kein npm-Paket:

```json
"private": true
```

Dadurch wird eine unbeabsichtigte Veröffentlichung als npm-Paket verhindert.

---

## 6. Build-Script

Das Projekt verwendet das Script:

```json
"build:js": "terser media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js -c -m -o media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
```

Build:

```powershell
npm.cmd run build:js
```

---

## 7. Entwicklungs- und Produktionsdateien

### Quelldatei

`menu-metismenu.js` ist die maßgebliche Entwicklungsdatei.

Änderungen werden ausschließlich hier vorgenommen.

### Minifizierte Datei

`menu-metismenu.min.js` wird aus der Quelldatei erzeugt.

Sie wird nicht manuell bearbeitet.

---

## 8. Syntaxprüfung

Quelldatei:

```powershell
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js"
```

Produktionsdatei:

```powershell
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
```

Bei erfolgreicher Prüfung gibt `node --check` keine Meldung aus.

---

## 9. Entwicklungsworkflow

```text
JavaScript bearbeiten
        ↓
npm.cmd run build:js
        ↓
node --check Quelldatei
        ↓
node --check Minified-Datei
        ↓
Browser-Funktionstest
        ↓
git status
        ↓
git diff
        ↓
Commit
        ↓
Push
```

---

## 10. Git und Build-Dateien

Versioniert werden:

```text
package.json
package-lock.json
menu-metismenu.js
menu-metismenu.min.js
```

Nicht versioniert wird:

```text
node_modules/
```

Das Verzeichnis ist Bestandteil der `.gitignore`.

---

## 11. Build-Artefakte

Die minifizierte JavaScript-Datei wird versioniert, weil sie Bestandteil der auszuliefernden Template-Assets ist.

Damit bleiben Quelldatei und Produktionsdatei im Repository nachvollziehbar.

---

## 12. Änderungen

Bei einer Änderung an einer JavaScript-Quelldatei gilt:

1. Quelldatei bearbeiten.
2. JavaScript testen.
3. `npm.cmd run build:js` ausführen.
4. Beide Dateien per `node --check` prüfen.
5. Funktion im Browser testen.
6. `git status` und `git diff` prüfen.
7. Commit erstellen.
8. Push durchführen.

Eine manuelle Bearbeitung der `.min.js` ist zu vermeiden.

---

## 13. MetisMenu

Der aktuelle Buildprozess wurde im Zusammenhang mit der Finalisierung der MetisMenu-Navigation eingeführt.

Das JavaScript enthält die projektspezifische Logik für:

- Header-Navigation
- Sidebar-Navigation
- aktive Menüpfade
- MetisMenu-Initialisierung
- Öffnen und Schließen von Untermenüs
- unterschiedliche Initialisierungslogik von Header und Sidebar

---

## 14. Wartung

Bei Änderungen muss immer die Quelldatei als Ausgangspunkt verwendet werden.

```text
menu-metismenu.js
        ↓
Terser
        ↓
menu-metismenu.min.js
```

Dadurch bleiben Entwicklungs- und Produktionsdatei synchron.

---

## 15. Best Practices

- Quelldateien bearbeiten.
- Minified-Dateien nicht manuell bearbeiten.
- Terser für die Minifizierung verwenden.
- `package.json` versionieren.
- `package-lock.json` versionieren.
- `node_modules/` nicht versionieren.
- Nach Änderungen Build und Syntaxprüfung durchführen.
- Browser-Funktionstest vor dem Commit durchführen.
- Keine Node.js-Buildabhängigkeit auf dem Produktivsystem voraussetzen.

---

## 16. Aktueller Build-Stand

Der JavaScript-Build ist eingerichtet und funktionsfähig.

Die MetisMenu-Navigation wird über die minifizierte Produktionsdatei geladen.

Die Build-Infrastruktur umfasst:

```text
Node.js
   ↓
npm
   ↓
Terser
   ↓
menu-metismenu.min.js
```

---

## 17. Weiterentwicklung

Der aktuelle npm-Build konzentriert sich auf JavaScript.

Eine spätere Erweiterung auf weitere Assets ist möglich.

Dies soll jedoch nur erfolgen, wenn dadurch ein konkreter Wartungs- oder Buildvorteil entsteht.

Der aktuelle Prozess bleibt bewusst schlank.

---

# Änderungshistorie

| Version | Datum | Beschreibung |
|---|---|---|
| 1.0 | 02.09.2026 | JavaScript-Buildprozess dokumentiert. |
| 2.0 | 02.09.2026 | Dokument an den aktuell verwendeten Node.js-/npm-/Terser-Prozess und die produktive MetisMenu-Einbindung angepasst. |
