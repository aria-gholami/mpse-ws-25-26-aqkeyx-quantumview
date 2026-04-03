# WireMock

WireMock liefert die Mock-APIs für die UI. Alle gemockten Endpunkte liegen in `.wiremock` und werden über Docker Compose oder DDEV bereitgestellt.

## Inhaltsverzeichnis
- [Konzept](concept/README.md)
- [Lokaler Start](#lokaler-start)
- [Umgebungsvariablen](#umgebungsvariablen)
- [Struktur](#struktur)

## Lokaler Start
### Docker Compose (Preview-Setup)
```
cd .docker
docker compose up -d reverse-proxy wiremock websocketmock quantumview
docker compose down -v
```

### DDEV
WireMock ist in `.ddev/docker-compose.wiremock.yaml` integriert.
```
ddev start
```
Der Service läuft dann innerhalb der DDEV-Umgebung (Port 8000).

## Umgebungsvariablen
Die UI greift über `VITE_TEST_API_BASE_URL` und `VITE_CMS_BASE_URL` auf die Mock-APIs zu.
- Vorschau: `.env.preview` nutzt `https://wiremock.local`
- DDEV: `.env.dev` nutzt `https://quantumview.ddev.site:8000`

## Struktur
- `mappings/`: Request-Mappings und Routing-Definitionen
- `__files/`: Response-Bodies für die Mappings
