export default function updateStatesInOriginalNodes(
    QKDNodes: any[],
    QKDModuleNodes: any[],
    PQCKEYMNodes: any[],
    KeyCombinationNodes: any[],
    KeyManagementSystemNodes: any[],
    isQKDModuleStarted: boolean,
    isPQCKeyExchangeStarted: boolean,
    isKeyCombinationStarted: boolean,
    isSharedSecretEncryptedStarted: boolean,
    isMultipleHopsStarted: boolean,
) {
    return [
        ...QKDNodes.map((node: any) => ({
            ...node,
            data: {
                ...node.data,
                isMultipleHopsStarted,
            },
        })),
        ...QKDModuleNodes.map((node: any) => ({
            ...node,
            data: {
                ...node.data,
                isQKDModuleStarted,
                isPQCKeyExchangeStarted,
            },
        })),
        ...PQCKEYMNodes.map((node: any) => ({
            ...node,
            data: {
                ...node.data,
                isPQCKeyExchangeStarted,
                isQKDModuleStarted,
            },
        })),
        ...KeyCombinationNodes.map((node: any) => ({
            ...node,
            data: {
                ...node.data,
                isQKDModuleStarted,
                isPQCKeyExchangeStarted,
            },
        })),
        ...KeyManagementSystemNodes.map((node: any) => ({
            ...node,
            data: {
                ...node.data,
                isKeyCombinationStarted,
                isSharedSecretEncryptedStarted,
                isMultipleHopsStarted,
            },
        })),
    ];
}
