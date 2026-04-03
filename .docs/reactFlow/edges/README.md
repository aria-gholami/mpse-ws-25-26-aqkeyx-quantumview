# React Flow Edges

Edges verbinden Nodes über `source`/`target` und optional über Handles. Styling und Animation werden hier definiert.

## Inhaltsverzeichnis
- [Wo liegen die Edges?](#wo-liegen-die-edges)
- [Beispiel: KeyCombinationEdges](#beispiel-keycombinationedges)
- [Hinweise](#hinweise)

## Wo liegen die Edges?
- In den jeweiligen Node-Dateien, z. B. `KeyCombinationEdges` in `app/screens/components/reactFlowNodes/KeyCombination.tsx`

## Beispiel: KeyCombinationEdges
Aus `app/screens/components/reactFlowNodes/KeyCombination.tsx`:

```tsx
export const KeyCombinationEdges = [
    {
        id: 'key-combination-1-pqc-keym-1-right-left',
        source: 'pqc-keym-1',
        target: 'key-combination-1',
        sourceHandle: 'pqc-keym-1-left',
        targetHandle: 'key-combination-1-right',
        type: 'default',
        animated: true,
        style: { stroke: '#ADD8E6', strokeDasharray: '10,6', strokeWidth: 4 },
        markerStart: { type: 'arrowclosed', color: '#ADD8E6' },
        markerEnd: { type: 'arrowclosed', color: '#ADD8E6' },
    },
];
```

## Hinweise
- `source` und `target` referenzieren Node-IDs.
- `sourceHandle` und `targetHandle` müssen exakt den Handle-IDs im Node entsprechen.
- `style` und `marker*` definieren Farbe, Linienstil und Pfeilspitzen.
