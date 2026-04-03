# Konzept

Die Cypress-Tests prüfen End-to-End-Flows der UI gegen eine laufende Instanz der Anwendung. Tests sind bewusst UI-orientiert und nutzen die reale Routing- und Rendering-Logik.

## Inhaltsverzeichnis
- [Testfokus](#testfokus)
- [Aufbau](#aufbau)
- [Best Practices](#best-practices)

## Testfokus
- Nutzerpfade (Navigation, Formular-Flows, Statusanzeigen)
- Integration mit Mock-APIs (WireMock) und dem Websocket-Mock
- Stabilität bei unterschiedlicher Datenlage

## Aufbau
- Testdateien folgen dem Muster `.cypress/e2e/**/*.cy.ts`
- Globale Hooks, Commands oder Helper liegen in `.cypress/support/e2e.ts`
- Die Tests greifen auf `CYPRESS_baseUrl` (in `docker-compose.yaml`) zu, damit lokale oder CI-Umgebungen identisch nutzbar sind

## Best Practices
- Tests sollen deterministisch sein (keine zufälligen Abhängigkeiten)
- API-Antworten kommen aus WireMock, damit die UI gegen feste Daten läuft
- UI-Elemente möglichst über stabile Selektoren ansprechen
