# Composition (Nodes + Edges)

Die Flow-Komposition fasst Node- und Edge-Arrays aus mehreren Modulen zusammen und registriert die Node-Typen.

## Inhaltsverzeichnis
- [Zusammensetzen in `agileQKeyExchange.tsx`](#zusammensetzen-in-agileqkeyexchangetsx)
- [Warum modular?](#warum-modular)
- [Hinweise](#hinweise)

## Zusammensetzen in `agileQKeyExchange.tsx`
- `nodes`: kombiniert Arrays aus QKD, PQC, KMS, KeyCombination, ...
- `edges`: kombiniert alle Edge-Arrays
- `nodeTypes`: Merge aus `QKDNodeTypes`, `KeyCombinationNodeTypes`, ...

## Warum modular?
- Jeder Node-Typ ist isoliert und wartbar.
- Neue Knoten/Verbindungen können ohne Umbau des gesamten Flows ergänzt werden.

## Hinweise
- Node-IDs müssen eindeutig sein.
- Edge‑IDs sollten eindeutig und sprechend benannt sein.
- Handle‑IDs müssen exakt zu `sourceHandle`/`targetHandle` passen.
