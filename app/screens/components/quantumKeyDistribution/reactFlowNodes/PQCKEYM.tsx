import { Handle, Position } from '@xyflow/react';
import type PQCKEYMNodeProps from '~/screens/components/quantumKeyDistribution/reactFlowNodes/types/PQCKEYMNodeProps';

function PQCKEYMNode({ data, isQKDModuleStarted, isPQCKeyExchangeStarted }: PQCKEYMNodeProps) {
    if (!isQKDModuleStarted || !isPQCKeyExchangeStarted) {
        return;
    }

    return (
        <div className="key-exchange-mechanism-module-node-container">
            <Handle
                id="pqc-keym-2-left"
                type="target"
                position={Position.Left}
                className="react-flow-handle"
            />
            <Handle
                id="pqc-keym-2-right"
                type="source"
                position={Position.Right}
                className="react-flow-handle"
            />
            <div>{data.label}</div>
            <Handle
                id="pqc-keym-1-right"
                type="source"
                position={Position.Right}
                className="react-flow-handle"
            />
            <Handle
                id="pqc-keym-1-left"
                type="source"
                position={Position.Left}
                className="react-flow-handle"
            />
        </div>
    );
}

export const PQCKEYMNodes = [
    {
        id: 'pqc-keym-1',
        position: { x: 400, y: 340 },
        data: { label: 'PQC KEYM A' },
        type: 'PQCKEYMNode',
    },
    {
        id: 'pqc-keym-2',
        position: { x: 850, y: 340 },
        data: { label: 'PQC KEYM B' },
        type: 'PQCKEYMNode',
    },
];

export const PQCKEYMNodeTypes = {
    PQCKEYMNode: (nodeProps: any) => (
        <PQCKEYMNode
            {...nodeProps}
            isQKDModuleStarted={nodeProps.data.isQKDModuleStarted}
            isPQCKeyExchangeStarted={nodeProps.data.isPQCKeyExchangeStarted}
        />
    ),
};

export const PQCKEYMEdges = [
    {
        id: 'pqc-keym-1-pqc-keym-2-right-left',
        source: 'pqc-keym-1',
        target: 'pqc-keym-2',
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
];
