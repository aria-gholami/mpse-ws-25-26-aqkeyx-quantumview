# Cypress

Cypress wird in diesem Projekt für End-to-End-Tests (E2E) genutzt. Die Tests liegen in einem separaten Node-Paket unter `.cypress` und werden gegen eine laufende Instanz der Anwendung ausgeführt.

## Inhaltsverzeichnis
- [Konzept](concept/README.md)
- [Docker und CI](#docker-und-ci)
- [Dateien und Ablage](#dateien-und-ablage)
- [Konfiguration](#konfiguration)

## Docker und CI
Die CI startet Cypress über Docker Compose. Dabei werden die Services `reverse-proxy`, `wiremock`, `websocketmock` und `quantumview` hochgefahren, bevor die Tests laufen.

Lokal kannst du das gleiche Setup nutzen:
```
cd .docker

docker compose up -d reverse-proxy wiremock websocketmock quantumview

docker compose run --rm cypress

docker compose down -v
```

Die Cypress-Container-Konfiguration liegt in `.docker/docker-compose.yaml` und nutzt `CYPRESS_baseUrl=https://quantumview.local`.

## Dateien und Ablage
- Tests: `.cypress/e2e/**/*.cy.ts`
- Support: `.cypress/support/e2e.ts`
- Screenshots: `.cypress/screenshots`
- Videos: `.cypress/videos` (in der aktuellen Konfiguration deaktiviert)

## Konfiguration
Die zentrale Konfiguration befindet sich in `.cypress/cypress.config.ts`.
- `baseUrl`: aus `CYPRESS_baseUrl`
- `specPattern`: `e2e/**/*.cy.{js,jsx,ts,tsx}`
- `supportFile`: `support/e2e.ts`
- `chromeWebSecurity`: `false`
- `video`: `false`
- Chrome-Startparameter: `--ignore-certificate-errors`
