import '../../../../shared/styles/components/reactFlowNodes/qkdNode.css';
import type QKDNodeProps from '~/screens/components/quantumKeyDistribution/reactFlowNodes/types/QKDNodeProps';

function QKDNode({ data, nodeId, isMultipleHopsStarted }: QKDNodeProps) {
    if (isMultipleHopsStarted && nodeId === 'qkd-node-2') {
        return (
            <div className="qkd-node-container">
                <h3>{data.label}</h3>
                <div className="qkd-node-big"></div>
            </div>
        );
    }

    return (
        <div className="qkd-node-container">
            <h3>{data.label}</h3>
            <div className="qkd-node-small"></div>
        </div>
    );
}

export const QKDNodes = [
    {
        id: 'qkd-node-1',
        position: { x: 100, y: 100 },
        data: { label: 'Node A' },
        type: 'QKDNode',
    },
    {
        id: 'qkd-node-2',
        position: { x: 800, y: 100 },
        data: { label: 'Node B' },
        type: 'QKDNode',
    },
];

export const QKDNodeTypes = {
    QKDNode: (nodeProps: any) => (
        <QKDNode
            {...nodeProps}
            isMultipleHopsStarted={nodeProps.data.isMultipleHopsStarted}
            nodeId={nodeProps.data.nodeId}
        />
    ),
};
