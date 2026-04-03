interface KeyCombinationNodeData {
    rotate180: boolean;
}

export default interface KeyCombinationNodeProps {
    data: KeyCombinationNodeData;
    isQKDModuleStarted: boolean;
    isPQCKeyExchangeStarted: boolean;
}
