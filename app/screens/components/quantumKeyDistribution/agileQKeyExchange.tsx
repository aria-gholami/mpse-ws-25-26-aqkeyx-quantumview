import '../../../shared/styles/components/agileQKeyExchange.css';
import '../../../shared/styles/components/reactFlow.css';
import { Background, Controls, ReactFlow, ReactFlowProvider, useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {
    QKDNodes,
    QKDNodeTypes,
} from '~/screens/components/quantumKeyDistribution/reactFlowNodes/QKDNode';
import {
    QKDModuleEdges,
    QKDModuleNodes,
    QKDModuleNodeTypes,
} from '~/screens/components/quantumKeyDistribution/reactFlowNodes/QKDModule';
import { useEffect, useState } from 'react';
import QKDInfoText from '~/screens/components/quantumKeyDistribution/QKDInfoText';
import KeyExchangeButtons from '~/screens/components/quantumKeyDistribution/keyExchangeButtons';
import {
    PQCKEYMEdges,
    PQCKEYMNodes,
    PQCKEYMNodeTypes,
} from '~/screens/components/quantumKeyDistribution/reactFlowNodes/PQCKEYM';
import {
    KeyCombinationEdges,
    KeyCombinationNodes,
    KeyCombinationNodeTypes,
} from '~/screens/components/quantumKeyDistribution/reactFlowNodes/KeyCombination';
import {
    KeyManagementSystemEdges,
    KeyManagementSystemNodes,
    KeyManagementSystemNodeTypes,
} from '~/screens/components/quantumKeyDistribution/reactFlowNodes/KeyManagementSystem';
import updateStatesInOriginalNodes from '~/utils/agileQKeyExchange/updateStatesInOriginalNodes';
import createDuplicatedNodesAtStep5 from '~/utils/agileQKeyExchange/createDuplicatedNodesAtStep5';
import createDuplicatedEdgesAtStep5 from '~/utils/agileQKeyExchange/createDuplicatedEdgesAtStep5';
import updateOriginalNodesAtStep5 from '~/utils/agileQKeyExchange/updateOriginalNodesAtStep5';
import { useTranslations } from '~/i18n/useTranslations';
import updateStatesInOriginalEdges from '~/utils/agileQKeyExchange/updateStatesInOriginalEdges';
import type AgileQKeyExchangeProps from '~/screens/components/quantumKeyDistribution/types/AgileQKeyExchangeProps';

export default function AgileQKeyExchange({ mode }: AgileQKeyExchangeProps) {
    const { agile } = useTranslations();
    const [isQKDModuleStarted, setQKDModuleStarted] = useState(false);
    const [isPQCKeyExchangeStarted, setPQCKeyExchangeStarted] = useState(false);
    const [isKeyCombinationStarted, setKeyCombinationStarted] = useState(false);
    const [isSharedSecretEncryptedStarted, setSharedSecretEncryptedStarted] = useState(false);
    const [isMultipleHopsStarted, setMultipleHopsStarted] = useState(false);
    const [combinedNodes, setCombinedNodes] = useState<any[]>([]);
    const [combinedEdges, setCombinedEdges] = useState<any[]>([]);
    const combinedNodeTypes = {
        ...QKDNodeTypes,
        ...QKDModuleNodeTypes,
        ...PQCKEYMNodeTypes,
        ...KeyCombinationNodeTypes,
        ...KeyManagementSystemNodeTypes,
    };

    useEffect((): void => {
        setCombinedNodes(
            updateStatesInOriginalNodes(
                QKDNodes,
                QKDModuleNodes,
                PQCKEYMNodes,
                KeyCombinationNodes,
                KeyManagementSystemNodes,
                isQKDModuleStarted,
                isPQCKeyExchangeStarted,
                isKeyCombinationStarted,
                isSharedSecretEncryptedStarted,
                isMultipleHopsStarted,
            ),
        );
        setCombinedEdges(
            updateStatesInOriginalEdges(
                QKDModuleEdges,
                PQCKEYMEdges,
                KeyCombinationEdges,
                KeyManagementSystemEdges,
                isKeyCombinationStarted,
                isSharedSecretEncryptedStarted,
            ),
        );

        if (isMultipleHopsStarted) {
            const GENERAL_X_OFFSET = 1200;
            const SMILEY_Y_OFFSET = 250;
            const SMILEY_X_OFFSET = 150;
            const KEY_MANAGEMENT_B_X_OFFSET = 250;
            const duplicatedNodes = createDuplicatedNodesAtStep5(
                combinedNodes,
                GENERAL_X_OFFSET,
                SMILEY_X_OFFSET,
                SMILEY_Y_OFFSET,
                isMultipleHopsStarted,
            );
            let duplicatedEdges: any[] = createDuplicatedEdgesAtStep5(combinedEdges);
            let newCombinedNodes: any[] = updateOriginalNodesAtStep5(
                combinedNodes,
                SMILEY_X_OFFSET,
                SMILEY_Y_OFFSET,
                KEY_MANAGEMENT_B_X_OFFSET,
                isMultipleHopsStarted,
            );
            setCombinedNodes([...newCombinedNodes, ...duplicatedNodes]);
            setCombinedEdges([...combinedEdges, ...duplicatedEdges]);
        }
    }, [
        isQKDModuleStarted,
        isPQCKeyExchangeStarted,
        isKeyCombinationStarted,
        isSharedSecretEncryptedStarted,
        isMultipleHopsStarted,
    ]);

    return (
        <div className="agile-q-key-exchange-container">
            <h1 className="text-center">{agile.title}</h1>
            <div className="react-flow-container">
                <ReactFlowProvider>
                    <ReactFlowWrapper
                        nodes={combinedNodes}
                        edges={combinedEdges}
                        nodeTypes={combinedNodeTypes}
                    />
                </ReactFlowProvider>
            </div>
            <QKDInfoText
                mode={mode}
                isQKDModuleStarted={isQKDModuleStarted}
                isPQCKeyExchangeStarted={isPQCKeyExchangeStarted}
                isKeyCombinationStarted={isKeyCombinationStarted}
                isSharedSecretEncryptedStarted={isSharedSecretEncryptedStarted}
                isMultipleHopsStarted={isMultipleHopsStarted}
            />
            <KeyExchangeButtons
                setQKDModuleStarted={setQKDModuleStarted}
                isQKDModuleStarted={isQKDModuleStarted}
                setPQCKeyExchangeStarted={setPQCKeyExchangeStarted}
                isPQCKeyExchangeStarted={isPQCKeyExchangeStarted}
                setKeyCombinationStarted={setKeyCombinationStarted}
                isKeyCombinationStarted={isKeyCombinationStarted}
                setSharedSecretEncryptedStarted={setSharedSecretEncryptedStarted}
                isSharedSecretEncryptedStarted={isSharedSecretEncryptedStarted}
                setMultipleHopsStarted={setMultipleHopsStarted}
                isMultipleHopsStarted={isMultipleHopsStarted}
                mode={mode}
            />
        </div>
    );
}

function ReactFlowWrapper({ nodes, edges, nodeTypes }: any) {
    const { fitView } = useReactFlow();

    useEffect(() => {
        fitView();
    }, [fitView, nodes, edges]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView={true}
            zoomOnScroll={false}
            proOptions={{ hideAttribution: true }}
            nodesDraggable={false}
            minZoom={0.1}
        >
            <Background />
            <Controls />
        </ReactFlow>
    );
}
