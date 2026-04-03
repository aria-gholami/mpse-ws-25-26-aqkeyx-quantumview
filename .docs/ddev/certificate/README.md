# Certificate

## Inhaltsverzeichnis
- [DDEV - Zertifikate einrichten](#ddev---zertifikate-einrichten)

## DDEV - Zertifikate einrichten
Diese Anleitung beschreibt die Einrichtung von SSL-Zertifikaten für DDEV unter Windows mit WSL.
### Voraussetzungen
- DDEV installiert
- WSL (Windows Subsystem for Linux) eingerichtet
- `mkcert` installiert
### Installationsschritte
**1. Lokale Certificate Authority installieren**

Öffne ein Terminal in WSL und führe folgenden Befehl aus:
````
mkcert -install
````
Dieser Befehl erstellt eine lokale Certificate Authority (CA) und installiert sie in deinem System.

**2. CA-Pfad ermitteln**

Ermittle den Speicherort der Root-CA:
````
mkcert -CAROOT
````
Notiere dir den angezeigten Pfad für den nächsten Schritt.

**3. Zertifikat in Windows importieren**
- Drücke `Win + R` und gib ein: `certmgr.msc`
- Navigiere zu: **Vertrauenswürdige Stammzertifizierungsstellen → Zertifikate**
- Rechtsklick auf **Zertifikate → Alle Aufgaben → Importieren...**
- Klicke auf **Durchsuchen** und navigiere zum WSL-Pfad

**4. WSL-Pfad im Windows Explorer**

Gib in der Adresszeile des Datei-Explorers ein:
````
\\wsl$\Ubuntu\home\username\.local\share\mkcert
````
Wähle die Datei rootCA.pem aus und schließe den Import-Assistenten ab.

**5. Browser neu starten**

Starte alle geöffneten Browser neu, damit die Zertifikate erkannt werden.

### Fertig!
Deine DDEV-Projekte sollten nun mit gültigen SSL-Zertifikaten laufen, ohne Browserwarnungen anzuzeigen.