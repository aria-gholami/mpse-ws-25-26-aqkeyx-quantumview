# React Flow Node Types

Node-Typen sind React-Komponenten, die das Aussehen und die Handles eines Knotens definieren. Sie werden über `nodeTypes` an React Flow übergeben.

## Inhaltsverzeichnis
- [Wo liegen die Node-Typen?](#wo-liegen-die-node-typen)
- [Beispiel: KeyCombinationNodeTypes](#beispiel-keycombinationnodetypes)
- [Hinweise](#hinweise)

## Wo liegen die Node-Typen?
- Implementierung: `app/screens/components/reactFlowNodes/`
- Registry pro Datei (z. B. `KeyCombinationNodeTypes`)

## Beispiel: KeyCombinationNodeTypes
Aus `app/screens/components/reactFlowNodes/KeyCombination.tsx`:

```tsx
import { Handle, Position } from '@xyflow/react';

function KeyCombinationNode({ data }) {
    return (
        <div className="key-combination-container">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Hybridize Key Service (HKS)">
                {data.rotate180 ? (
                    <polygon points="100,50 0,0 0,100" />
                ) : (
                    <polygon points="0,50 100,0 100,100" />
                )}
            </svg>
            <Handle id="key-combination-1-right" type="target" position={Position.Right} />
            <Handle id="key-combination-1-left" type="target" position={Position.Left} />
        </div>
    );
}

export const KeyCombinationNodeTypes = {
    KeyCombinationNode: (nodeProps) => <KeyCombinationNode {...nodeProps} />,
};
```

## Hinweise
- `Handle`-IDs müssen zu den `sourceHandle`/`targetHandle`-Werten in Edges passen.
- Die Props aus `data` werden in der Node-Komponente genutzt (z. B. `rotate180`).
