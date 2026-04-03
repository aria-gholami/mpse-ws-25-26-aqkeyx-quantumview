import { Handle, Position } from '@xyflow/react';
import type QKDModuleNodeProps from '~/screens/components/quantumKeyDistribution/reactFlowNodes/types/QKDModuleNodeProps';

function QKDModuleNode({ data, isQKDModuleStarted }: QKDModuleNodeProps) {
    if (!isQKDModuleStarted) {
        return;
    }

    return (
        <div className="key-exchange-mechanism-module-node-container">
            <Handle
                id="qkd-module-1-left"
                type="target"
                position={Position.Left}
                className="react-flow-handle"
            />
            <Handle
                id="qkd-module-1-bottom"
                type="target"
                position={Position.Bottom}
                className="react-flow-handle"
            />
            <Handle
                id="qkd-module-1-right"
                type="source"
                position={Position.Right}
                className="react-flow-handle"
            />
            <div>{data.label}</div>
            <Handle
                id="qkd-module-2-right"
                type="source"
                position={Position.Right}
                className="react-flow-handle"
            />
            <Handle
                id="qkd-module-2-bottom"
                type="source"
                position={Position.Bottom}
                className="react-flow-handle"
            />
            <Handle
                id="qkd-module-2-left"
                type="source"
                position={Position.Left}
                className="react-flow-handle"
            />
        </div>
    );
}

export const QKDModuleNodes = [
    {
        id: 'qkd-module-2',
        position: { x: 400, y: 400 },
        data: { label: 'QKD-Modul A' },
        type: 'QKDModuleNode',
    },
    {
        id: 'qkd-module-1',
        position: { x: 850, y: 400 },
        data: { label: 'QKD-Modul B' },
        type: 'QKDModuleNode',
    },
];

export const QKDModuleNodeTypes = {
    QKDModuleNode: (nodeProps: any) => (
        <QKDModuleNode {...nodeProps} isQKDModuleStarted={nodeProps.data.isQKDModuleStarted} />
    ),
};

export const QKDModuleEdges = [
    {
        id: 'qkd-module-1-qkd-module-2-right-left',
        source: 'qkd-module-2',
        target: 'qkd-module-1',
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
        id: 'qkd-module-1-qkd-module-2-bottom-bottom',
        source: 'qkd-module-2',
        target: 'qkd-module-1',
        sourceHandle: 'qkd-module-2-bottom',
        targetHandle: 'qkd-module-1-bottom',
        type: 'default',
        animated: true,
        style: { stroke: '#90EE90', strokeWidth: 2 },
    },
];
