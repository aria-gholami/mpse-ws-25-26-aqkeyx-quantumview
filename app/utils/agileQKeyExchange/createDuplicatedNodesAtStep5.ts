export default function createDuplicatedNodesAtStep5(
    combinedNodes: any[],
    GENERAL_X_OFFSET: number,
    SMILEY_X_OFFSET: number,
    SMILEY_Y_OFFSET: number,
    isMultipleHopsStarted: boolean,
) {
    let duplicatedNodes: any[] = [];
    combinedNodes.forEach((node: any) => {
        let positionX: number = node.position.x + GENERAL_X_OFFSET;
        let positionY: number = node.position.y;
        let label: string = node.data.label;
        if (node.id === 'outside-left-hidden-2') {
            positionX -= SMILEY_X_OFFSET;
            positionY -= SMILEY_Y_OFFSET;
        }
        if (
            node.id === 'qkd-node-1' ||
            node.id === 'outside-left-hidden-1' ||
            node.id === 'key-management-system-1'
        ) {
            return;
        }
        if (node.id === 'qkd-node-2') {
            label = 'Node C';
        }

        duplicatedNodes.push({
            ...node,
            id: `${node.id}-copy`,
            position: {
                x: positionX,
                y: positionY,
            },
            data: {
                ...node.data,
                label,
                isMultipleHopsStarted,
            },
        });
    });

    return duplicatedNodes;
}
