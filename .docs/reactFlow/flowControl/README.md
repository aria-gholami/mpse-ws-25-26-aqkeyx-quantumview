# Flow-Steuerung

Die Visualisierung wird über lokale Zustände (Booleans) gesteuert. Diese Flags repräsentieren die Schritte des Ablaufs und beeinflussen die Darstellung der Nodes.

## Inhaltsverzeichnis
- [Typische Flags](#typische-flags)
- [Verhalten](#verhalten)
- [Ort der Umsetzung](#ort-der-umsetzung)

## Typische Flags
- `isQKDModuleStarted`
- `isPQCKeyExchangeStarted`
- `isKeyCombinationStarted`
- `isSharedSecretEncryptedStarted`
- `isMultipleHopsStarted`

## Verhalten
- Aktive Steps schalten Nodes visuell „an“.
- Bei `isMultipleHopsStarted` werden zusätzliche Node/Edge‑Instanzen für den Multi‑Hop‑Abschnitt verwendet.

## Ort der Umsetzung
- `app/screens/components/agileQKeyExchange.tsx`
- Hilfsfunktionen für Step-Updates: `app/utils/agileQKeyExchange/`
