import React, { useEffect } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import type HybridizeKeyServiceFormKMSAddButtonProps from '~/screens/components/hybridizeKeyService/types/HybridizeKeyServiceFormKMSAddButtonProps';
import { useTranslations } from '~/i18n/useTranslations';
import type { KeyExchangeMechanismState } from '~/features/keyExchangeMechanism/state/Initial';
import { useAppSelector } from '~/redux/hooks';
import type { MessageAuthenticationCodeMechanismState } from '~/features/messageAuthenticationCodeMechanism/state/Initial';
import type { MessageAuthenticationCodeUnderlyingFunctionState } from '~/features/messageAuthenticationCodeUnderlyingFunction/state/Initial';

export default function FormKMSAddButton({
    accordions,
    setAccordions,
    kmsErrorMessage,
    setKMSErrorMessage,
}: HybridizeKeyServiceFormKMSAddButtonProps) {
    const accordionLimit = 20;
    const { hybridize } = useTranslations();
    const formTexts = hybridize.form;
    const keyExchangeMechanismState: KeyExchangeMechanismState = useAppSelector(
        (state) => state.keyExchangeMechanism,
    );
    const messageAuthenticationCodeMechanismState: MessageAuthenticationCodeMechanismState =
        useAppSelector((state) => state.messageAuthenticationCodeMechanism);
    const messageAuthenticationCodeUnderlyingFunctionState: MessageAuthenticationCodeUnderlyingFunctionState =
        useAppSelector((state) => state.messageAuthenticationCodeUnderlyingFunction);
    const addAccordion = () => {
        if (accordions.length >= accordionLimit) {
            setKMSErrorMessage(formTexts.addKMSError);
            return;
        }

        setKMSErrorMessage('');
        const newId = accordions.length + 1;
        setAccordions((prev: any) => [
            ...prev,
            {
                id: newId,
                keyExchangeMechanism: keyExchangeMechanismState.keyExchangeMechanism[0],
                messageAuthenticationCodeMechanism:
                    messageAuthenticationCodeMechanismState.messageAuthenticationCodeMechanism[0],
                messageAuthenticationCodeUnderlyingFunction:
                    messageAuthenticationCodeUnderlyingFunctionState
                        .messageAuthenticationCodeUnderlyingFunction[0],
                shouldUseHybridization: true,
            },
        ]);
    };

    useEffect(() => {
        if (accordions.length < accordionLimit) {
            setKMSErrorMessage('');
        }
    }, [accordions]);

    return (
        <div>
            <button
                type="button"
                onClick={addAccordion}
                className="secondary-button flex items-center gap-2"
                disabled={
                    keyExchangeMechanismState.keyExchangeMechanism.length === 0 &&
                    messageAuthenticationCodeMechanismState.messageAuthenticationCodeMechanism
                        .length === 0 &&
                    messageAuthenticationCodeUnderlyingFunctionState
                        .messageAuthenticationCodeUnderlyingFunction.length === 0
                }
            >
                <AddCircleOutlineIcon fontSize="small" aria-hidden="true" />
                {formTexts.addKMS}
            </button>
            {kmsErrorMessage && (
                <p role="alert" aria-live="assertive" className="text-red-600 font-semibold mt-2">
                    {kmsErrorMessage}
                </p>
            )}
        </div>
    );
}
