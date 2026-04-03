import React from 'react';
import type HybridizeKeyServiceFormKMSResetButtonProps from '~/screens/components/hybridizeKeyService/types/HybridizeKeyServiceFormKMSResetButtonProps';
import { useTranslations } from '~/i18n/useTranslations';
import type { KeyExchangeMechanismState } from '~/features/keyExchangeMechanism/state/Initial';
import { useAppSelector } from '~/redux/hooks';
import type { MessageAuthenticationCodeMechanismState } from '~/features/messageAuthenticationCodeMechanism/state/Initial';
import type { MessageAuthenticationCodeUnderlyingFunctionState } from '~/features/messageAuthenticationCodeUnderlyingFunction/state/Initial';

export default function FormResetButton({
    setAccordions,
    setShouldBeLogged,
}: HybridizeKeyServiceFormKMSResetButtonProps) {
    const { hybridize } = useTranslations();
    const formTexts = hybridize.form;
    const keyExchangeMechanismState: KeyExchangeMechanismState = useAppSelector(
        (state) => state.keyExchangeMechanism,
    );
    const messageAuthenticationCodeMechanismState: MessageAuthenticationCodeMechanismState =
        useAppSelector((state) => state.messageAuthenticationCodeMechanism);
    const messageAuthenticationCodeUnderlyingFunctionState: MessageAuthenticationCodeUnderlyingFunctionState =
        useAppSelector((state) => state.messageAuthenticationCodeUnderlyingFunction);
    const resetAccordion = () => {
        setAccordions([
            {
                id: 1,
                shouldUseHybridization: true,
                keyExchangeMechanism: keyExchangeMechanismState.keyExchangeMechanism[0],
                messageAuthenticationCodeMechanism:
                    messageAuthenticationCodeMechanismState.messageAuthenticationCodeMechanism[0],
                messageAuthenticationCodeUnderlyingFunction:
                    messageAuthenticationCodeUnderlyingFunctionState
                        .messageAuthenticationCodeUnderlyingFunction[0],
            },
            {
                id: 2,
                shouldUseHybridization: true,
                keyExchangeMechanism: keyExchangeMechanismState.keyExchangeMechanism[0],
                messageAuthenticationCodeMechanism:
                    messageAuthenticationCodeMechanismState.messageAuthenticationCodeMechanism[0],
                messageAuthenticationCodeUnderlyingFunction:
                    messageAuthenticationCodeUnderlyingFunctionState
                        .messageAuthenticationCodeUnderlyingFunction[0],
            },
        ]);
        setShouldBeLogged(true);
    };

    return (
        <button
            type="reset"
            className="secondary-button"
            onClick={resetAccordion}
            disabled={
                keyExchangeMechanismState.keyExchangeMechanism.length === 0 &&
                messageAuthenticationCodeMechanismState.messageAuthenticationCodeMechanism
                    .length === 0 &&
                messageAuthenticationCodeUnderlyingFunctionState
                    .messageAuthenticationCodeUnderlyingFunction.length === 0
            }
        >
            {formTexts.reset}
        </button>
    );
}
