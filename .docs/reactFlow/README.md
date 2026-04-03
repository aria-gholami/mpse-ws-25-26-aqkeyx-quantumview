# React Flow

Die Visualisierung des QKD-Ablaufs basiert auf `@xyflow/react` (React Flow). Die UI kombiniert vordefinierte Nodes und Edges mit einem schrittweisen Ablauf, der per Zustand gesteuert wird.

## Inhaltsverzeichnis
- [Konzept](concept/README.md)
- [Visualisierung (ausführlich)](visualization/README.md)
- [Nodes](nodes/README.md)
- [Node Types](nodeTypes/README.md)
- [Edges](edges/README.md)
- [Flow-Steuerung](flowControl/README.md)
- [Composition](composition/README.md)
- [Styling](styling/README.md)
- [Ablage](#ablage)
- [Wichtige Dateien](#wichtige-dateien)
- [Styling (kurz)](#styling-kurz)

## Ablage
- Hauptkomponente: `app/screens/components/agileQKeyExchange.tsx`
- Node-Definitionen: `app/screens/components/reactFlowNodes/`
- Hilfsfunktionen für Steps: `app/utils/agileQKeyExchange/`

## Wichtige Dateien
- `agileQKeyExchange.tsx`: baut Nodes/Edges zusammen und steuert den Ablauf
- `reactFlowNodes/*`: einzelne Node-Typen (QKD, PQC, KMS, Key Combination)
- `reactFlow.css` und `reactFlowNodes/*.css`: Layout und Node-Styles

## Styling (kurz)
- Basis-Styles: `app/shared/styles/components/reactFlow.css`
- Node-spezifische Styles: `app/shared/styles/components/reactFlowNodes/`
- React Flow Standard-Styles werden in der Komponente importiert (`@xyflow/react/dist/style.css`)
