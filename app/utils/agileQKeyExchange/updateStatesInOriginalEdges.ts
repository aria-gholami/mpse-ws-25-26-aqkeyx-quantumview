export default function updateStatesInOriginalEdges(
    QKDModuleEdges: any[],
    PQCKEYMEdges: any[],
    KeyCombinationEdges: any[],
    KeyManagementSystemEdges: any[],
    isKeyCombinationStarted: boolean,
    isSharedSecretEncryptedStarted: boolean,
) {
    const hasBottomHandle = isKeyCombinationStarted || isSharedSecretEncryptedStarted;
    const hasSideHandles = isSharedSecretEncryptedStarted;
    const newKeyManagementSystemEdges = KeyManagementSystemEdges.filter((edge: any) => {
        const isBottomEdge = edge.sourceHandle === 'key-management-system-bottom';
        const isSideEdge =
            edge.sourceHandle === 'key-management-system-right' ||
            edge.targetHandle === 'key-management-system-left';
        if (isBottomEdge && !hasBottomHandle) {
            return false;
        }

        return !(isSideEdge && !hasSideHandles);
    });

    return [
        ...QKDModuleEdges,
        ...PQCKEYMEdges,
        ...KeyCombinationEdges,
        ...newKeyManagementSystemEdges,
    ];
}
