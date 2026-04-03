# Styling

Das Styling des React‑Flow‑Diagramms verteilt sich auf Basis‑ und Node‑spezifische Styles.

## Inhaltsverzeichnis
- [Basis‑Styles](#basisstyles)
- [Node‑spezifische Styles](#nodespezifische-styles)
- [React‑Flow Standard‑Styles](#reactflow-standardstyles)

## Basis‑Styles
- `app/shared/styles/components/reactFlow.css`
- Lädt Layout‑Regeln für Container, Controls und Hintergrund.

## Node‑spezifische Styles
- `app/shared/styles/components/reactFlowNodes/`
- Jede Node hat eine eigene CSS‑Datei (z. B. `qkdNode.css`).

## React‑Flow Standard‑Styles
- Werden in `agileQKeyExchange.tsx` importiert:
  - `@xyflow/react/dist/style.css`
