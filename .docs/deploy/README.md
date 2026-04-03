# Deployment 📦

## Inhaltsverzeichnis
- [Stages](stages/README.md)
- [🔑 Authentifizierung](#-authentifizierung)
- [🗄️ Datenbank-Konfiguration (MySQL)](#-datenbank-konfiguration-mysql)
- [🐳 Docker-in-Docker (DinD)](#-docker-in-docker-dind)
- [Troubleshooting](troubleshooting/README.md)

## 🔑 Authentifizierung
Für die Authentifizierung wird der SSH-Private-Key aus der GitLab-Variable **`SSH_PRIVATE_KEY`** verwendet.  
Der zugehörige Public-Key muss auf dem Zielserver in der Datei `~/.ssh/authorized_keys` hinterlegt sein, um einen passwortlosen SSH-Zugang zu ermöglichen.

## 🗄️ Datenbank-Konfiguration (MySQL)
Für den Betrieb der Anwendung werden sensible Zugangsdaten für die MySQL-Datenbank benötigt.
Diese dürfen nicht im Repository hinterlegt werden und müssen daher als GitLab CI/CD Variablen konfiguriert sein.

Erforderliche CI/CD Variablen:
- `MYSQL_ROOT_PASSWORD` – Root-Passwort für den MySQL-Server
- `MYSQL_QUANTUMVIEW_PASSWORD` – Passwort für den Datenbank-Benutzer der Anwendung

## 🐳 Docker-in-Docker (DinD)
Das Projekt nutzt Docker-in-Docker, um Docker-Images innerhalb der CI/CD-Pipeline zu bauen.  
**Wichtig:** Damit der Build erfolgreich ist, muss der GitLab Runner im **privilegierten Modus (privileged mode)** laufen.
Da die GitLab Runner der Hochschule Darmstadt diesen Modus derzeit nicht unterstützen, ist es notwendig, einen eigenen Runner lokal zu betreiben.

### Anforderungen für den eigenen Runner:
- Der Runner muss auf einem eigenen Rechner installiert werden (z. B. privater Laptop oder Server).
- Der Runner muss mit der Option `privileged = true` konfiguriert sein.
- Der Runner sollte mit dem Tag **`quantumview`** versehen sein, damit die Pipeline ihn korrekt nutzt.

Weitere Informationen zum Registrieren und Ausführen eines eigenen Runners findest du in der offiziellen GitLab-Dokumentation: [GitLab Runner](https://docs.gitlab.com/runner/register/)