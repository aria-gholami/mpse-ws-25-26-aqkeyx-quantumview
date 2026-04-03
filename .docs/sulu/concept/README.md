# Konzept

Diese README beschreibt den produktiven Build- und Runtime-Stack für das Sulu-CMS.

## Inhaltsverzeichnis
- [Build-Pipeline (Docker)](#build-pipeline-docker)
- [Runtime](#runtime)
- [Caching & Performance](#caching--performance)
- [Inhalte & Templates](#inhalte--templates)
- [Relevante Dateien](#relevante-dateien)

## Build-Pipeline (Docker)
Der produktive Build erfolgt als Multi-Stage-Image in `cms/Dockerfile.prod`:

1) **Composer-Stage**
- Installiert PHP-Dependencies ohne Dev-Pakete.
- Optimierter Autoloader (`--optimize-autoloader`).

2) **Node-Stage**
- Baut die Admin-Assets unter `cms/assets/admin`.
- Output landet unter `public/build`.

3) **Runtime-Stage**
- Basierend auf `dunglas/frankenphp:php8.4-alpine`.
- Kopiert Quellcode, `vendor/` und `public/build` in das finale Image.

## Runtime
- **Webserver/Runtime**: FrankenPHP (Caddy + PHP) in einem Image.
- **Document Root**: `cms/public`.
- **Port**: 8001 (siehe `EXPOSE 8001` in `cms/Dockerfile.prod`).
- **Caddy-Konfiguration**: `cms/Caddyfile.prod`.

## Caching & Performance
- **Sulu-Cache-Lifetime**: wird pro Template gesetzt (z. B. `cacheLifetime` in `homepage.xml`).
- **Autoloader**: Composer-Optimierung ist aktiv und reduziert Runtime-Overhead.
- **Asset-Build**: Admin-Assets werden statisch vorgebaut und nicht zur Laufzeit kompiliert.

## Inhalte & Templates
- **Templates**: `cms/config/templates` definieren die Strukturen für Pages/Snippets.
- **Headless**: der Controller wird pro Template gebunden (z. B. in `homepage.xml`).

## Relevante Dateien
- Build-Definition: `cms/Dockerfile.prod`
- Caddy-Config (Prod): `cms/Caddyfile.prod`
- Templates: `cms/config/templates/pages/*.xml`
- Public Root: `cms/public`
