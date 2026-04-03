interface QKDNodeData {
    label: string;
}

export default interface QKDNodeProps {
    data: QKDNodeData;
    nodeId: string;
    isMultipleHopsStarted: boolean;
}
