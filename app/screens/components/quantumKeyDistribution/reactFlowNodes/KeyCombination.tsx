import { Handle, Position } from '@xyflow/react';
import type KeyCombinationNodeProps from '~/screens/components/quantumKeyDistribution/reactFlowNodes/types/KeyCombinationNodeProps';

function KeyCombinationNode({ data }: KeyCombinationNodeProps) {
    return (
        <div className="key-combination-container">
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                role="img"
                aria-label="Hybridize Key Service (HKS)"
            >
                {data.rotate180 ? (
                    <>
                        <polygon
                            points="100,50 0,0 0,100"
                            fill="#FFFFFF"
                            stroke="#999999"
                            filter="url(#triangle-shadow)"
                        />
                        <text
                            x="40"
                            y="50"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="23"
                            fill="#000000"
                            fontFamily="sans-serif"
                        >
                            HKS
                        </text>
                    </>
                ) : (
                    <>
                        <polygon
                            points="0,50 100,0 100,100"
                            fill="#FFFFFF"
                            stroke="#999999"
                            filter="url(#triangle-shadow)"
                        />
                        <text
                            x="60"
                            y="50"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="23"
                            fill="#000000"
                            fontFamily="sans-serif"
                        >
                            HKS
                        </text>
                    </>
                )}
            </svg>
            <Handle
                id="key-combination-1-right"
                type="target"
                position={Position.Right}
                className="react-flow-handle"
            />
            <Handle
                id="key-combination-1-left"
                type="target"
                position={Position.Left}
                className="react-flow-handle"
            />
        </div>
    );
}

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

export const KeyCombinationNodeTypes = {
    KeyCombinationNode: (nodeProps: any) => <KeyCombinationNode {...nodeProps} />,
};

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
        markerStart: {
            type: 'arrowclosed',
            color: '#ADD8E6',
        },
        markerEnd: {
            type: 'arrowclosed',
            color: '#ADD8E6',
        },
    },
    {
        id: 'key-combination-1-qkd-module-2-right-left',
        source: 'qkd-module-2',
        target: 'key-combination-1',
        sourceHandle: 'qkd-module-2-left',
        targetHandle: 'key-combination-1-right',
        type: 'default',
        animated: true,
        style: { stroke: '#90EE90', strokeDasharray: '10,6', strokeWidth: 4 },
        markerStart: {
            type: 'arrowclosed',
            color: '#90EE90',
        },
        markerEnd: {
            type: 'arrowclosed',
            color: '#90EE90',
        },
    },
    {
        id: 'key-combination-2-pqc-keym-2-left-right',
        source: 'pqc-keym-2',
        target: 'key-combination-2',
        sourceHandle: 'pqc-keym-2-right',
        targetHandle: 'key-combination-1-left',
        type: 'default',
        animated: true,
        style: { stroke: '#ADD8E6', strokeDasharray: '10,6', strokeWidth: 4 },
        markerStart: {
            type: 'arrowclosed',
            color: '#ADD8E6',
        },
        markerEnd: {
            type: 'arrowclosed',
            color: '#ADD8E6',
        },
    },
    {
        id: 'key-combination-2-qkd-module-1-left-right',
        source: 'qkd-module-1',
        target: 'key-combination-2',
        sourceHandle: 'qkd-module-1-right',
        targetHandle: 'key-combination-1-left',
        type: 'default',
        animated: true,
        style: { stroke: '#90EE90', strokeDasharray: '10,6', strokeWidth: 4 },
        markerStart: {
            type: 'arrowclosed',
            color: '#90EE90',
        },
        markerEnd: {
            type: 'arrowclosed',
            color: '#90EE90',
        },
    },
];
