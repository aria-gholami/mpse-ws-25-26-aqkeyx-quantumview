# React Flow Visualisierung (ausführlich)

Diese Dokumentation beschreibt, wie die Visualisierung in Quantum View aufgebaut ist und wie die React‑Flow‑Komponenten zusammenspielen.

## Inhaltsverzeichnis
- [Einstieg](#einstieg)
- [Ziel](#ziel)
- [Aufbau in Kurzform](#aufbau-in-kurzform)
- [Weiterführend](#weiterführend)

## Einstieg
- Hauptkomponente: `app/screens/components/agileQKeyExchange.tsx`
- Node-Typen: `app/screens/components/reactFlowNodes/`
- Hilfsfunktionen/Steps: `app/utils/agileQKeyExchange/`

## Ziel
Das Diagramm ist nicht editierbar und zeigt einen geführten Ablauf des hybriden QKD‑Prozesses. Änderungen passieren ausschließlich über Zustandswechsel in der UI.

## Aufbau in Kurzform
1. Node-Typen definieren die Darstellung (SVG/Handles).
2. Node-Arrays platzieren konkrete Instanzen mit Positionen.
3. Edge-Arrays verbinden Nodes und definieren Styling/Animation.
4. `agileQKeyExchange.tsx` kombiniert alles und übergibt es an React Flow.

## Weiterführend
- Nodes: `.docs/reactFlow/nodes/README.md`
- Node Types: `.docs/reactFlow/nodeTypes/README.md`
- Edges: `.docs/reactFlow/edges/README.md`
- Flow-Steuerung: `.docs/reactFlow/flowControl/README.md`
- Composition: `.docs/reactFlow/composition/README.md`
- Styling: `.docs/reactFlow/styling/README.md`
