interface QKDModuleNodeData {
    label: string;
}

export default interface QKDModuleNodeProps {
    data: QKDModuleNodeData;
    isQKDModuleStarted: boolean;
    isPQCKeyExchangeStarted: boolean;
}
