interface PQCKEYMNodeData {
    label: string;
}

export default interface PQCKEYMNodeProps {
    data: PQCKEYMNodeData;
    isQKDModuleStarted: boolean;
    isPQCKeyExchangeStarted: boolean;
}
