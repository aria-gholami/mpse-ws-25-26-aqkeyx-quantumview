# React Flow Nodes

Diese README beschreibt die Node-Instanzen (konkrete Platzierungen) im React-Flow-Diagramm. Nodes sind die einzelnen Elemente, die im Diagramm positioniert und gerendert werden.

## Inhaltsverzeichnis
- [Wo liegen die Nodes?](#wo-liegen-die-nodes)
- [Beispiel: KeyCombinationNodes](#beispiel-keycombinationnodes)
- [Hinweise](#hinweise)

## Wo liegen die Nodes?
- Implementierung pro Node-Typ: `app/screens/components/reactFlowNodes/`
- Node-Arrays (Instanzen) liegen in den jeweiligen Dateien, z. B. `KeyCombinationNodes` in `KeyCombination.tsx`

## Beispiel: KeyCombinationNodes
Aus `app/screens/components/reactFlowNodes/KeyCombination.tsx`:

```tsx
export const KeyCombinationNodes = [
    {
        id: 'key-combination-1',
        position: { x: 200, y: 370 },
        type: 'KeyCombinationNode',
        data: { rotate180: false },
    },
    {
        id: 'key-combination-2',
        position: { x: 1150, y: 370 },
        type: 'KeyCombinationNode',
        data: { rotate180: true },
    },
];
```

## Hinweise
- `id` muss eindeutig sein und wird von Edges referenziert.
- `position` legt die absolute Position im Diagramm fest.
- `type` muss in der `nodeTypes`-Registry registriert sein.
- `data` enthält die Props, die der Node-Typ für die Darstellung braucht.
