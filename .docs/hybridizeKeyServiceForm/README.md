# Hybridize Key Service Form

Das Formular steuert die Testausführung für den Hybridize Key Service. Es sammelt KMS-Konfigurationen, validiert Eingaben und startet den Testlauf über die API.

## Inhaltsverzeichnis
- [Überblick](#überblick)
- [Datenmodell (Accordion)](#datenmodell-accordion)
- [Formularaufbau](#formularaufbau)
- [Validierung und Regeln](#validierung-und-regeln)
- [Datenfluss](#datenfluss)
- [Tests und Ergebnisse](#tests-und-ergebnisse)

## Überblick
- UI-Container: `app/screens/components/hybridizeKeyService/form.tsx`
- KMS-Accordion: `app/screens/components/hybridizeKeyService/formKMS.tsx`
- Buttons: `formKMSAddButton`, `formKMSDuplicateButton`, `formKMSRemoveButton`, `.formResetButton`, `formSubmitButton`
- Zustand: lokale Form-States + Redux-Selektoren für Optionslisten und Test-Status
- API-Basis: `VITE_TEST_API_BASE_URL`

## Datenmodell (Accordion)
`HybridizeKeyServiceFormAccordion` enthält:
- `id`
- `shouldUseHybridization`
- `keyExchangeMechanism`
- `messageAuthenticationCodeMechanism`
- `messageAuthenticationCodeUnderlyingFunction`

## Formularaufbau
- Experimentname (Pflichtfeld)
- KMS-Accordions mit je drei Selects:
  - Key Exchange Mechanism
  - Message Authentication Code Mechanism
  - MAC Underlying Function
- Checkbox: `Activate Logging`
- Buttons: Reset, Submit, Add, Duplicate, Remove

## Validierung und Regeln
- Mindestens 2 KMS-Konfigurationen (Entfernen unterhalb von 2 blockiert)
- Maximal 20 KMS-Konfigurationen (Add/Duplicate blockiert)
- Experimentname darf nicht leer sein
- Add/Reset/Submit sind deaktiviert, solange die Optionslisten leer sind
- Fehlertexte für KMS-Limits werden über `kmsErrorMessage` angezeigt

## Datenfluss
1. Beim Rendern eines KMS-Accordions werden die Optionslisten geladen:
   - `fetchKeyExchangeMechanism`
   - `fetchMessageAuthenticationCodeMechanism`
   - `fetchMessageAuthenticationCodeUnderlyingFunction`
2. Änderungen an Selects/Checkbox aktualisieren den lokalen Accordion-State.
3. Submit baut ein Request-Body mit `experiment_name`, `kms_configs` und `should_be_logged` und dispatcht
   `sendHybridizeKeyServiceTestRunRequest`.
4. Parallel wird der Test-Status auf `created` gesetzt, damit weitere Starts blockiert werden.

## Tests und Ergebnisse
Die Seite `app/screens/hybridizeKeyService.tsx` steuert den Ablauf:
- Startet den Testlauf und zeigt ein Loading-Overlay für `created/running`
- Öffnet die WebSocket-Überwachung und lädt nach `finished` die Ergebnisse
- Rendert `TestResults`, sobald die Resultate verfügbar sind