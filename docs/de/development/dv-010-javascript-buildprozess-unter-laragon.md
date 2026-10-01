# DV-010 JavaScript-Buildprozess unter Laragon

**Dokumenttyp:** Entwicklungsdokumentation\
**Projekt:** WissensWerk\
**Status:** Aktiv\
**Version:** 2.1\
**Stand:** 01.10.2026

------------------------------------------------------------------------

## 1. Zweck

Dieses Dokument beschreibt den Build-Prozess für JavaScript-Assets des
WissensWerk-Templates **unter Laragon**.

Ziel ist es, aus JavaScript-Quelldateien reproduzierbar minifizierte
Produktionsdateien zu erzeugen. Der Build erfolgt ausschließlich in der
lokalen Entwicklungsumgebung.

Auf dem Joomla-Produktivsystem wird keine Node.js-/npm-Umgebung für
diesen Build benötigt.

## 2. Entwicklungsumgebung unter Laragon

Node.js wird über die lokale Laragon-Installation bereitgestellt.

``` text
Node.js v22.22.0
C:\laragon\bin\nodejs\node-v22\
```

Darin befinden sich unter anderem `node.exe`, `npm.cmd` und `npx.cmd`.

Die verwendete npm-Version ist:

``` text
npm 10.9.4
```

Für npm und npx werden die Windows-Kommandodateien `npm.cmd` und
`npx.cmd` verwendet.

### PATH-Voraussetzung

Der Laragon-Node-Pfad muss für die PowerShell erreichbar sein. Wenn

``` powershell
node --version
```

nicht funktioniert, obwohl Node.js unter Laragon vorhanden ist, kann der
Pfad für die aktuelle PowerShell-Sitzung ergänzt werden:

``` powershell
$env:Path = "C:\laragon\bin\nodejs\node-v22;" + $env:Path
```

Danach:

``` powershell
where.exe node
node --version
npm.cmd --version
```

Erwartet werden:

``` text
C:\laragon\bin\nodejs\node-v22\node.exe
v22.22.0
10.9.4
```

Die PATH-Ergänzung gilt nur für die aktuelle PowerShell-Sitzung und
verändert die Windows-Systemkonfiguration nicht dauerhaft.

## 3. Projektverzeichnis

Der Build wird aus folgendem Verzeichnis gestartet:

``` text
C:\laragon\www\wissenswerk
```

``` powershell
cd C:\laragon\www\wissenswerk
```

## 4. Projektstruktur

``` text
C:\laragon\www\wissenswerk
├── package.json
├── package-lock.json
└── media/
    └── templates/
        └── site/
            └── wissenswerk/
                └── js/
                    └── mod_menu/
                        ├── menu-metismenu.js
                        └── menu-metismenu.min.js
```

`menu-metismenu.js` ist die maßgebliche Quelldatei.
`menu-metismenu.min.js` ist das erzeugte Produktions-Asset.

## 5. Terser und Build-Script

Terser wird als Development Dependency verwendet.

Das npm-Script lautet:

``` json
"build:js": "terser media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js -c -m -o media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
```

### Build starten

Nach dem Wechsel in das Projektverzeichnis und der Prüfung des PATH:

``` powershell
npm.cmd run build:js
```

Wenn npm nicht über den PATH erreichbar ist, kann es über den
vollständigen Laragon-Pfad aufgerufen werden:

``` powershell
& "C:\laragon\bin\nodejs\node-v22\npm.cmd" run build:js
```

Auch dieser Aufruf benötigt `node` im PATH, weil npm innerhalb des
Scripts Node.js benötigt.

## 6. Was der Build erzeugt

Terser verarbeitet:

``` text
media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js
```

und erzeugt:

``` text
media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js
```

Die `.min.js` wird nicht manuell bearbeitet.

## 7. Syntaxprüfung

Nach dem Build:

``` powershell
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.js"
```

und:

``` powershell
node --check "media/templates/site/wissenswerk/js/mod_menu/menu-metismenu.min.js"
```

Bei erfolgreicher Prüfung gibt `node --check` keine Meldung aus.

## 8. Vollständiger Build-Ablauf

``` text
PowerShell öffnen
        ↓
cd C:\laragon\www\wissenswerk
        ↓
node --version
        ↓
falls erforderlich: Laragon-Node-Pfad zum PATH hinzufügen
        ↓
npm.cmd --version
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

## 9. Git

Versioniert werden:

``` text
package.json
package-lock.json
menu-metismenu.js
menu-metismenu.min.js
```

Nicht versioniert wird:

``` text
node_modules/
```

## 10. Änderungsprozess

1.  Quelldatei bearbeiten.
2.  Projektverzeichnis öffnen.
3.  Node.js/npm-Verfügbarkeit prüfen.
4.  Falls erforderlich, Laragon-Node-Pfad temporär zum PATH hinzufügen.
5.  `npm.cmd run build:js` ausführen.
6.  Beide Dateien per `node --check` prüfen.
7.  Browser-Funktionstest durchführen.
8.  `git status` und `git diff` prüfen.
9.  Commit erstellen.
10. Push durchführen.

## 11. Aktueller Build-Stand

Der JavaScript-Build ist unter Laragon eingerichtet und funktionsfähig.

Die verwendete lokale Toolchain:

``` text
Laragon
   ↓
Node.js v22.22.0
   ↓
npm 10.9.4
   ↓
Terser
   ↓
menu-metismenu.min.js
```

Der Build wurde am 01.10.2026 erfolgreich ausgeführt, nachdem der
Laragon-Node-Pfad für die aktuelle PowerShell-Sitzung zum PATH
hinzugefügt wurde.

Der Build-Prozess selbst musste dafür nicht geändert werden.

## 12. Best Practices

-   Quelldateien bearbeiten.
-   Minified-Dateien nicht manuell bearbeiten.
-   Terser für die Minifizierung verwenden.
-   `package.json` und `package-lock.json` versionieren.
-   `node_modules/` nicht versionieren.
-   Vor dem Build prüfen, ob `node` erreichbar ist.
-   Bei fehlendem PATH den Laragon-Node-Pfad für die aktuelle Sitzung
    ergänzen.
-   Nach Änderungen Build und Syntaxprüfung durchführen.
-   Browser-Funktionstest vor dem Commit durchführen.
-   Keine Node.js-Buildabhängigkeit auf dem Produktivsystem
    voraussetzen.

------------------------------------------------------------------------

# Änderungshistorie

  ------------------------------------------------------------------------------
  Version                 Datum                   Beschreibung
  ----------------------- ----------------------- ------------------------------
  1.0                     02.09.2026              JavaScript-Buildprozess
                                                  dokumentiert.

  2.0                     02.09.2026              Dokument an den verwendeten
                                                  Node.js-/npm-/Terser-Prozess
                                                  und die MetisMenu-Einbindung
                                                  angepasst.

  2.1                     01.10.2026              Dokument auf die tatsächliche
                                                  Laragon-Umgebung angepasst;
                                                  Laragon-Node-Pfad,
                                                  PATH-Prüfung, PATH-Ergänzung
                                                  und vollständiger
                                                  PowerShell-Buildablauf
                                                  ergänzt.
  ------------------------------------------------------------------------------
