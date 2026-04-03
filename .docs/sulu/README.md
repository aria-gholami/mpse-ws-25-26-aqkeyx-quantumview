# Sulu CMS in der lokalen Umgebung

Diese README beschreibt, wie das Sulu-CMS in dieser Codebasis lokal betrieben wird und wo die wichtigsten Bausteine liegen.

## Inhaltsverzeichnis
- [Konzept](concept/README.md)
- [Security](security/README.md)
- [Symfony](symfony/README.md)
- [Erstelle Admin Benutzer](createAdminUser/README.md)
- [Fixtures](fixtures/README.md)
- [Pages](pages/README.md)
- [Einordnung im Projekt](#einordnung-im-projekt)
- [Lokaler Betrieb (DDEV)](#lokaler-betrieb-ddev)
- [Sulu Admin Zugriff](#sulu-admin-zugriff)
- [Caddy/FrankenPHP-Konfiguration](#caddyfrankenphp-konfiguration)
- [Inhalte & Strukturen](#inhalte--strukturen)
- [Wichtige Pfade (Quicklinks)](#wichtige-pfade-quicklinks)
- [Typische Nutzung](#typische-nutzung)
- [Wichtige Credentials](#wichtige-credentials)

## Einordnung im Projekt
- **CMS-Code**: liegt unter `cms/` (Symfony + Sulu).
- **Zweck**: liefert Inhalte für die Headless-Website (Templates in `cms/config/templates`).
- **Headless-Ausgabe**: erfolgt über das Sulu-Headless-Controller-Setup (siehe `cms/config/templates/pages/homepage.xml`).

## Lokaler Betrieb (DDEV)
Das CMS wird lokal als eigener DDEV-Service gestartet.

- **Service-Definition**: `.ddev/docker-compose.cms.yaml`
- **Build-Image**: `cms/Dockerfile.dev`
- **Mount**: `cms/` wird nach `/var/www/cms` gemountet (Live-Reload der PHP-Dateien)
- **Runtime**: FrankenPHP (Caddy + PHP-FPM-Alternative)
- **Web-Root**: `cms/public`
- **Port**: 8003 (siehe `HTTP_EXPOSE`/`HTTPS_EXPOSE` in `.ddev/docker-compose.cms.yaml`)

## Sulu Admin Zugriff
Der Admin-Bereich von Sulu ist standardmaessig unter `/admin` erreichbar.

### Lokal (DDEV)
- **URL**: `https://quantumview.ddev.site:8003/admin`
- **Hinweis**: Der Port 8003 stammt aus `.ddev/docker-compose.cms.yaml` (`HTTP_EXPOSE`/`HTTPS_EXPOSE`).

### Produktion
- **URL**: `http://141.100.237.231/cms/admin`
- **Hinweis**: Der Benutzer `admin` (Passwort: `admin`) kann in der Prod Umgebung nicht verwendet werden. In der DDEV Umgebung kommt er standardmäßig hinzu.

## Caddy/FrankenPHP-Konfiguration
- **Datei**: `cms/Caddyfile.dev`
- **Wichtige Einstellungen**:
  - `root /var/www/cms/public` (Document Root)
  - `php_server` (FrankenPHP integriert)
  - CORS- und Security-Header für Headless-Zugriffe
  - Access-Logging nach `/var/log/caddy/access.log`

## Inhalte & Strukturen
- **Templates**: `cms/config/templates` (Seiten- und Snippet-Definitionen)
- **Beispiel**: `cms/config/templates/pages/homepage.xml` definiert die Startseite inkl. News-Block.
- **Fixtures**: `cms/src/DataFixtures` liefert Initialdaten, z. B. `LandingpageFixture.php`.

## Wichtige Pfade (Quicklinks)
- CMS-App: `cms/`
- Templates: `cms/config/templates`
- Fixtures: `cms/src/DataFixtures`
- Public Root: `cms/public`
- Lokales Caddyfile: `cms/Caddyfile.dev`

## Typische Nutzung
- Änderungen an PHP/Template-Dateien wirken durch das Mounting direkt im Container.
- CMS-Seitenstrukturen werden über XML-Templates (z. B. `homepage.xml`) definiert und in der Admin-Oberfläche gepflegt.
- Fixture-Daten dienen als Startinhalt für Entwicklungs- und Testumgebungen.

## Wichtige Credentials

| Service                      | Username                           | Passwort                                   |
|------------------------------|------------------------------------|--------------------------------------------|
| Admin Account (Produktiv)    | hda_admin                          | 123455678 (kann gerne umgeändert werden:)) |
| Admin Account (Dev Umgebung) | admin                              | admin                                      |
