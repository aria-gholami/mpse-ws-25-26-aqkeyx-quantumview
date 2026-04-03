export default function createDuplicatedEdgesAtStep5(combinedEdges: any[]) {
    let duplicatedEdges: any[] = [];
    combinedEdges.forEach((edge) => {
        let edgeSource = `${edge.source}-copy`;
        let edgeSourceHandle = edge.sourceHandle;
        let edgeTarget = `${edge.target}-copy`;
        let edgeTargetHandle = edge.targetHandle;
        if (edge.id === 'key-management-system-1-key-combination-1-bottom-left') {
            edgeSource = 'key-management-system-2';
            edgeSourceHandle = 'key-management-system-bottom';
        }
        if (edge.id === 'key-management-system-1-key-management-system-2-left-right') {
            edgeSource = 'key-management-system-2';
            edgeSourceHandle = 'key-management-system-right';
        }

        duplicatedEdges.push({
            ...edge,
            id: `${edge.id}-copy`,
            source: edgeSource,
            target: edgeTarget,
            sourceHandle: edgeSourceHandle,
            targetHandle: edgeTargetHandle,
        });
    });

    return duplicatedEdges;
}
