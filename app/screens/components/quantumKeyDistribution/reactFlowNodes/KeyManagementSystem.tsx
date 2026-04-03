import { Handle, Position } from '@xyflow/react';
import type OutsideLeftHiddenNodeProps from '~/screens/components/quantumKeyDistribution/reactFlowNodes/types/OutsideLeftHiddenNodeProps';
import type KeyManagementSystemNodeProps from '~/screens/components/quantumKeyDistribution/reactFlowNodes/types/KeyManagementSystemNodeProps';

function OutsideLeftHiddenNode({ nodeId, isMultipleHopsStarted }: OutsideLeftHiddenNodeProps) {
    if (nodeId === 'outside-left-hidden-1' && isMultipleHopsStarted) {
        return (
            <div>
                <Handle id="outside-left-hidden-1-right" type="source" position={Position.Right} />
                <p className="text-8xl">👱🏼‍♀️️</p>
            </div>
        );
    }
    if (nodeId === 'outside-left-hidden-2-copy' && isMultipleHopsStarted) {
        return (
            <div>
                <Handle id="outside-left-hidden-1-left" type="target" position={Position.Left} />
                <p className="text-8xl">👱🏼</p>
            </div>
        );
    }
    return (
        <div className="key-exchange-mechanism-module-node-container opacity-0">
            <Handle id="outside-left-hidden-1-right" type="source" position={Position.Right} />
            <Handle id="outside-left-hidden-1-left" type="target" position={Position.Left} />
            <p aria-hidden="true">hidden</p>
        </div>
    );
}

function KeyManagementSystemNode({
    data,
    isKeyCombinationStarted,
    isSharedSecretEncryptedStarted,
}: KeyManagementSystemNodeProps) {
    if (isSharedSecretEncryptedStarted) {
        return (
            <div className="key-exchange-mechanism-module-node-container">
                <Handle
                    id="key-management-system-bottom"
                    type="source"
                    position={Position.Bottom}
                    className="react-flow-handle"
                />
                <Handle
                    id="key-management-system-left"
                    type="target"
                    position={Position.Left}
                    className="react-flow-handle"
                />
                <Handle
                    id="key-management-system-right"
                    type="source"
                    position={Position.Right}
                    className="react-flow-handle"
                />
                <p>{data.label}</p>
            </div>
        );
    }

    return (
        <div className="key-exchange-mechanism-module-node-container">
            {isKeyCombinationStarted ? (
                <Handle
                    id="key-management-system-bottom"
                    type="source"
                    position={Position.Bottom}
                    className="react-flow-handle"
                />
            ) : null}
            <p>{data.label}</p>
        </div>
    );
}

export const KeyManagementSystemNodes = [
    {
        id: 'key-management-system-1',
        position: { x: 250, y: 200 },
        data: { label: 'Key Management System A' },
        type: 'KeyManagementSystemNode',
    },
    {
        id: 'key-management-system-2',
        position: { x: 950, y: 200 },
        data: { label: 'Key Management System B' },
        type: 'KeyManagementSystemNode',
    },
    {
        id: 'outside-left-hidden-1',
        position: { x: -100, y: 200 },
        type: 'OutsideLeftHiddenNode',
        selectable: false,
    },
    {
        id: 'outside-left-hidden-2',
        position: { x: 1400, y: 200 },
        type: 'OutsideLeftHiddenNode',
        selectable: false,
    },
];

export const KeyManagementSystemNodeTypes = {
    KeyManagementSystemNode: (nodeProps: any) => (
        <KeyManagementSystemNode
            {...nodeProps}
            isSharedSecretEncryptedStarted={nodeProps.data.isSharedSecretEncryptedStarted}
            isKeyCombinationStarted={nodeProps.data.isKeyCombinationStarted}
        />
    ),
    OutsideLeftHiddenNode: (nodeProps: any) => (
        <OutsideLeftHiddenNode
            nodeId={nodeProps.id}
            isMultipleHopsStarted={nodeProps.data.isMultipleHopsStarted}
        />
    ),
};

export const KeyManagementSystemEdges = [
    {
        id: 'key-management-system-1-key-combination-1-bottom-left',
        source: 'key-management-system-1',
        target: 'key-combination-1',
        sourceHandle: 'key-management-system-bottom',
        targetHandle: 'key-combination-1-left',
        type: 'default',
        animated: true,
        style: { stroke: '#FFD700', strokeDasharray: '10,6', strokeWidth: 4 },
        markerStart: {
            type: 'arrowclosed',
            color: '#FFD700',
        },
        markerEnd: {
            type: 'arrowclosed',
            color: '#FFD700',
        },
    },
    {
        id: 'key-management-system-2-key-combination-2-bottom-right',
        source: 'key-management-system-2',
        target: 'key-combination-2',
        sourceHandle: 'key-management-system-bottom',
        targetHandle: 'key-combination-1-right',
        type: 'default',
        animated: true,
        style: { stroke: '#FFD700', strokeDasharray: '10,6', strokeWidth: 4 },
        markerStart: {
            type: 'arrowclosed',
            color: '#FFD700',
        },
        markerEnd: {
            type: 'arrowclosed',
            color: '#FFD700',
        },
    },
    {
        id: 'key-management-system-1-key-management-system-2-left-right',
        source: 'key-management-system-1',
        target: 'key-management-system-2',
        sourceHandle: 'key-management-system-right',
        targetHandle: 'key-management-system-left',
        type: 'default',
        animated: true,
        style: { stroke: '#DC143C', strokeDasharray: '10,6', strokeWidth: 4 },
        label: 'Encryption with Hybrid-Key',
        labelStyle: { fill: '#DC143C', fontWeight: 600 },
        labelBgStyle: { fill: '#fff', fillOpacity: 0.8, stroke: '#DC143C', strokeWidth: 0.5 },
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        markerEnd: {
            type: 'arrowclosed',
            color: '#DC143C',
        },
    },
    {
        id: 'key-management-system-1-outside-left-hidden-1-left-right',
        source: 'outside-left-hidden-1',
        target: 'key-management-system-1',
        sourceHandle: 'outside-left-hidden-1-right',
        targetHandle: 'key-management-system-left',
        type: 'default',
        animated: true,
        style: { stroke: '#DC143C', strokeDasharray: '10,6', strokeWidth: 4 },
        markerEnd: {
            type: 'arrowclosed',
            color: '#DC143C',
        },
    },
    {
        id: 'key-management-system-2-outside-left-hidden-2-right-left',
        source: 'key-management-system-2',
        target: 'outside-left-hidden-2',
        sourceHandle: 'key-management-system-right',
        targetHandle: 'outside-left-hidden-1-left',
        type: 'default',
        animated: true,
        style: { stroke: '#DC143C', strokeDasharray: '10,6', strokeWidth: 4 },
        markerEnd: {
            type: 'arrowclosed',
            color: '#DC143C',
        },
    },
];
