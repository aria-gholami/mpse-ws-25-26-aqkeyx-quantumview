export default function updateOriginalNodesAtStep5(
    combinedNodes: any[],
    SMILEY_X_OFFSET: number,
    SMILEY_Y_OFFSET: number,
    KEY_MANAGEMENT_B_X_OFFSET: number,
    isMultipleHopsStarted: boolean,
) {
    let newCombinedNodes: any[] = [];
    combinedNodes.forEach((node) => {
        let positionX: number = node.position.x;
        let positionY: number = node.position.y;
        if (node.id === 'outside-left-hidden-1') {
            positionX += SMILEY_X_OFFSET;
            positionY -= SMILEY_Y_OFFSET;
        }
        if (node.id === 'key-management-system-2') {
            positionX += KEY_MANAGEMENT_B_X_OFFSET;
        }
        if (node.id === 'outside-left-hidden-2') {
            return;
        }

        newCombinedNodes.push({
            ...node,
            position: {
                x: positionX,
                y: positionY,
            },
            data: {
                ...node.data,
                nodeId: node.id,
                isMultipleHopsStarted,
            },
        });
    });

    return newCombinedNodes;
}
