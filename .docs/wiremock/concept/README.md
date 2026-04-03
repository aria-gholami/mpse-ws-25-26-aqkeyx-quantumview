# WireMock Konzept

WireMock trennt Request-Matching und Response-Daten:
- Die JSON-Dateien in `mappings/` definieren Pfad, Methode und das Mapping
- Die eigentlichen Antworten liegen in `__files/` und werden ueber `bodyFileName` referenziert

## Inhaltsverzeichnis
- [Neuen Endpoint anlegen](#neuen-endpoint-anlegen)
- [Bestehende Endpunkte](#bestehende-endpunkte)

## Neuen Endpoint anlegen
1. Mapping-Datei in `.wiremock/mappings/` erstellen
2. Response-JSON in `.wiremock/__files/` ablegen
3. `bodyFileName` im Mapping auf die Response-Datei setzen
4. WireMock neu starten, damit das Mapping geladen wird

## Bestehende Endpunkte
Aktuell sind u. a. folgende Bereiche gemockt:
- Key Exchange Mechanisms
- Message Authentication Code Mechanisms
- Hybridize Key Service (Run + Results)
- CMS Landingpage
