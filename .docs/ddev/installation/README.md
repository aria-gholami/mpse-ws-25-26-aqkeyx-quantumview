# Installation

## Inhaltsverzeichnis
- [Voraussetzungen](#voraussetzungen)
- [DDEV installieren](#ddev-installieren)
- [Hosts-Datei anpassen](#hosts-datei-anpassen)
- [Umgebungsvariablen konfigurieren](#umgebungsvariablen-konfigurieren)
- [Weitere Informationen](#weitere-informationen)

## Voraussetzungen
- Docker Desktop (Windows/Mac) oder Docker Engine (Linux)
- WSL2 (für Windows-Benutzer empfohlen)

## DDEV installieren
Windows (mit WSL2):
````
curl -fsSL https://ddev.com/install.sh | bash
````

## Hosts-Datei anpassen

Füge folgende Zeile zu deiner hosts-Datei hinzu:
````
127.0.0.1 quantumview.ddev.site
````

**Speicherort der hosts-Datei:**
- **Windows:** `C:\Windows\System32\drivers\etc\hosts`

> ⚠️ **Achtung:**  
Die hosts-Datei muss mit Administratorrechten bearbeitet werden.

## Umgebungsvariablen konfigurieren
Kopiere die Datei `.env.dev` nach `.env.local`:
````bash
cp .env.dev .env.local
````

## Weitere Informationen
Eine ausführliche und stets aktuelle Installationsanleitung findest du in der offiziellen DDEV-Dokumentation:

👉 https://ddev.readthedocs.io/en/stable/