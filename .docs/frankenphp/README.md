# FrankenPHP
Diese README beschreibt, wie FrankenPHP in dieser Codebasis eingesetzt und konfiguriert wird. FrankenPHP dient hier als performante PHP‑Runtime auf Basis von Caddy und ersetzt den klassischen PHP‑FPM‑Betrieb für das Sulu CMS.

## Inhaltsverzeichnis
- [Einordnung im Projekt](#einordnung-im-projekt)
- [Architekturüberblick](#architekturüberblick)
- [Lokaler Betrieb (DDEV)](#lokaler-betrieb-ddev)
- [Caddy/FrankenPHP‑Konfiguration](#caddyfrankenphpkonfiguration)
- [Wichtige Pfade (Quicklinks)](#wichtige-pfade-quicklinks)
- [Typische Nutzung im Alltag](#typische-nutzung-im-alltag)
- [Troubleshooting & Tipps](#troubleshooting--tipps)
- [Weiterführende Links](#weiterführende-links)

## Einordnung im Projekt
- FrankenPHP betreibt das Symfony/Sulu‑CMS unter `cms/`.
- Es wird ausschließlich für das CMS (Headless‑Ausgabe) verwendet; die Frontend‑App läuft separat (Vite/React).
- Ziel: Schneller, einfacher lokaler Betrieb mit minimaler Konfiguration und soliden Defaults (CORS, Security‑Header, Opcache).

## Architekturüberblick
- Basis‑Image: `dunglas/frankenphp:php8.4-alpine` (siehe `cms/Dockerfile.dev`).
- Webserver: Caddy (über das FrankenPHP‑Image integriert).
- PHP‑Runtime: In FrankenPHP integriert; Start per `frankenphp run`.
- Document Root: `/var/www/cms/public`.
- Logging: Caddy Access‑Log unter `/var/log/caddy/access.log` (mit Log‑Rotation).

## Lokaler Betrieb (DDEV)
Das CMS samt FrankenPHP wird lokal als eigener DDEV‑Service gestartet.
- Service‑Definition: `.ddev/docker-compose.cms.yaml`
- Build‑Kontext: `cms/` mit `cms/Dockerfile.dev`
- Mount: `./cms -> /var/www/cms` (Live‑Reload bei Dateiänderungen)
- Exponierter Port: `8003` (HTTP und HTTPS in DDEV weitergeleitet)

Zugriff:
- Sulu Admin (lokal): `https://quantumview.ddev.site:8003/admin`
- Headless‑Endpoints: unter `:8003` gemäß Symfony/Sulu‑Routen verfügbar

Typische DDEV‑Befehle:
- Projekt starten: `ddev start`
- Logs des CMS‑Containers ansehen: `ddev logs -s cms`
- Shell im CMS‑Container: `ddev ssh -s cms`

Weitere DDEV‑Hinweise siehe `.docs/ddev/README.md` und `.docs/ddev/troubleshooting/README.md`.

## Caddy/FrankenPHP‑Konfiguration
Zentrale Konfiguration liegt im `cms/Caddyfile.dev`.

Wesentliche Punkte:
- Globale FrankenPHP‑Sektion mit PHP‑INI‑Tuning (u. a. Opcache, Upload‑Limits):
  - `opcache.memory_consumption 128`
  - `upload_max_filesize 50M`, `post_max_size 50M`
- Site‑Block auf Port `:8003` mit
  - `root /var/www/cms/public`
  - `try_files {path} index.php` (Front‑Controller)
  - `php_server` (Start der PHP Runtime)
- CORS & Security‑Header
  - `Access-Control-Allow-Origin *`
  - erlaubte Methoden/Headers inkl. `api-key`
  - Security‑Header wie `Referrer-Policy`, `X-Frame-Options`, `X-Content-Type-Options`
- Preflight‑Handling (OPTIONS) mit 204‑Antwort
- Access‑Log Rotation (Größe, Anzahl, Aufbewahrung)

Die Laufzeit wird im Container über den Befehl gestartet:
```
CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]
```
(siehe `cms/Dockerfile.dev`)

## Wichtige Pfade (Quicklinks)
- CMS‑App: `cms/`
- Dockerfile (Dev, FrankenPHP): `cms/Dockerfile.dev`
- Caddy/FrankenPHP‑Konfiguration: `cms/Caddyfile.dev`
- DDEV Compose für CMS‑Service: `.ddev/docker-compose.cms.yaml`

## Typische Nutzung im Alltag
- Änderungen an PHP/Symfony/Sulu‑Dateien wirken dank Bind‑Mount direkt im Container.
- CORS/Sicherheitsheader sind vordefiniert – Anpassungen bei Bedarf in `Caddyfile.dev`.
- Bei Routing‑/Rewrite‑Anpassungen stets `try_files` und `root` beachten.
- Logs prüfen bei Problemen: `ddev logs -s cms` bzw. `/var/log/caddy/access.log` im Container.

## Troubleshooting & Tipps
- Portkonflikte: Sicherstellen, dass auf dem Host nichts Anderes `8003` belegt (DDEV mapped den Port intern/extern).
- 404/Rewrite‑Probleme: `try_files {path} index.php` ist essenziell für Symfony Front‑Controller.
- CORS‑Fehler: Header‑Sektion im `Caddyfile.dev` prüfen; bei Bedarf Origins und erlaubte Header/Methode erweitern.
- Performance: Opcache ist aktiviert; bei Bedarf Werte in der `php_ini`‑Sektion erhöhen.
- Zertifikate/HTTPS in DDEV: Siehe `.docs/ddev/certificate/README.md`.

## Weiterführende Links
- Projektinterne Doku zu Sulu: `.docs/sulu/README.md`
- DDEV‑Doku im Projekt: `.docs/ddev/README.md`
- FrankenPHP (Upstream): https://frankenphp.dev/
- Caddy (Upstream): https://caddyserver.com/docs/