# Konzept

Der QKD-Flow wird als nicht-editierbares Diagramm gerendert. Die Schritte des Ablaufs steuern, welche Nodes aktiv sind und wie sie visuell dargestellt werden.

## Inhaltsverzeichnis
- [Ablaufsteuerung](#ablaufsteuerung)
- [Node- und Edge-Zusammenbau](#node--und-edge-zusammenbau)
- [React Flow Einstellungen](#react-flow-einstellungen)

## Ablaufsteuerung
Die Komponente `agileQKeyExchange.tsx` nutzt mehrere Booleans, um den Fortschritt zu tracken:
- `isQKDModuleStarted`
- `isPQCKeyExchangeStarted`
- `isKeyCombinationStarted`
- `isSharedSecretEncryptedStarted`
- `isMultipleHopsStarted`

Diese Werte werden über die Buttons im UI gesetzt und in den Node-States verarbeitet.

## Node- und Edge-Zusammenbau
- Die Nodes/Edges kommen aus den einzelnen Modulen (`QKDNode`, `QKDModule`, `PQCKEYM`, `KeyCombination`, `KeyManagementSystem`)
- `updateStatesInOriginalNodes` sorgt für die visuelle Aktivierung der Nodes je Schritt
- Bei `isMultipleHopsStarted` werden Nodes und Edges dupliziert, um den Multi-Hop-Teil darzustellen

## React Flow Einstellungen
- `nodesDraggable={false}`: Diagramm ist nicht editierbar
- `fitView={true}` und `fitView()` bei Änderungen
- Zoom begrenzt auf `minZoom={0.1}`
- Attribution wird ausgeblendet (`proOptions.hideAttribution`)
