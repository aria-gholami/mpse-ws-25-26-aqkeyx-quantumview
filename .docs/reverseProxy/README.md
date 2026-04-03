# Reverse Proxy (Produktion)

Diese README beschreibt die produktive Reverse-Proxy-Konfiguration für Quantumview.

## Inhaltsverzeichnis
- [Überblick](#überblick)
- [Docker Service](#docker-service)
- [Nginx Konfiguration](#nginx-konfiguration)
- [Routen und Weiterleitungen](#routen-und-weiterleitungen)
- [Authentifizierung](#authentifizierung)
- [Headers und CORS](#headers-und-cors)
- [Websocket Handling](#websocket-handling)
- [SSL & Zertifikatsmanagement](#ssl--zertifikatsmanagement)
- [Wichtige Dateien](#wichtige-dateien)

## Überblick
Der Reverse Proxy basiert auf Nginx und läuft als eigener Container im produktiven Deployment. Er nimmt HTTP-Traffic auf Port 80 an und leitet Requests an die internen Services weiter.

## Docker Service
Der Service ist im produktiven Compose definiert:
- **Datei**: `.deploy/roles/rollout-release/files/quantumview/docker-compose.yaml`
- **Service**: `reverse-proxy` (Image `nginx:alpine`)
- **Port Mapping**: `80:80`
- **Abhängigkeit**: `depends_on` auf `quantumview`
- **Volumes**:
  - `./reverse-proxy/default.conf` nach `/etc/nginx/conf.d/default.conf` (readonly)
  - `./reverse-proxy/.htpasswd` nach `/etc/nginx/.htpasswd`

## Nginx Konfiguration
Die Nginx-Config für die Produktion liegt hier:
- **Datei**: `.deploy/roles/rollout-release/files/quantumview/reverse-proxy/default.conf`

## Routen und Weiterleitungen
Die wichtigsten Location-Regeln:
- `/` -> `http://quantumview:8080` (React Frontend)
- `/cms/` -> `http://cms:8001/` (Sulu CMS)
- `/admin` und `/admin/` -> `301` nach `/cms/admin/` (Sulu CMS)
- `/build/` -> `rewrite` nach `/cms/build/` (Sulu CMS)
- `/api/v1/` -> `http://aqkeyx-benchmark-webservice:8000/` (Testumgebung Webservice)
- `/websocket/` -> `http://aqkeyx-benchmark-webservice:8000/` (Testumgebung Webservice für Websocketverbindung)

## Authentifizierung
Standardmäßig ist Basic Auth aktiv:
- `auth_basic` ist global im Server aktiviert.
- Für `/cms/`, `/admin/` und `/build/` ist `auth_basic off` gesetzt.
- Die Credentials kommen aus `.deploy/roles/rollout-release/files/quantumview/reverse-proxy/.htpasswd` (zurzeit hda:darmstadt)
- Im Rollout wird die Datei mit Leserechten für andere versehen.

## Headers und CORS
Folgende Header sind global gesetzt:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET`
- `Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization`

## Websocket Handling
Die Websocket-Route setzt Upgrade-Header und längere Timeouts:
- `proxy_http_version 1.1`
- `proxy_set_header Upgrade`
- `proxy_set_header Connection`
- `proxy_read_timeout 3600`
- `proxy_send_timeout 3600`
- `proxy_buffering off`

## SSL & Zertifikatsmanagement
Der Reverse Proxy wurde zusätzlich eingeführt, um das **SSL-Zertifikat zentral zu verwalten**.
Er sitzt vor allen internen Services und terminiert die HTTPS-Verbindungen.

Dadurch ergeben sich folgende Vorteile:
- **Zentrale Zertifikatsverwaltung:** Das SSL-Zertifikat muss nur noch an einer Stelle (dem Reverse Proxy) gepflegt, erneuert und ausgetauscht werden – nicht mehr in jedem einzelnen Service.
- **Vereinfachtes Deployment:** Interne Services können weiterhin über HTTP kommunizieren, was Konfiguration und Wartung vereinfacht.
- **Weiterhin sichere Architektur:** Die externe Kommunikation ist vollständig verschlüsselt, während die interne Kommunikation isoliert innerhalb des Docker-Netzwerks stattfindet.

Der Reverse Proxy fungiert somit als Single Entry Point für den gesamten produktiven Traffic und sorgt für eine saubere Trennung zwischen externer Absicherung und interner Service-Architektur.

Zum jetzigen Zeitpunkt ist noch kein SSL-Zertifikat gepflegt.

## Wichtige Dateien
- `.deploy/roles/rollout-release/files/quantumview/docker-compose.yaml`
- `.deploy/roles/rollout-release/files/quantumview/reverse-proxy/default.conf`
- `.deploy/roles/rollout-release/files/quantumview/reverse-proxy/.htpasswd`
