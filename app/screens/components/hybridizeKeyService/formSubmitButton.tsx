import React, { useEffect, useState } from 'react';
import type HybridizeKeyServiceFormExperimentResetButtonProps from '~/screens/components/hybridizeKeyService/types/HybridizeKeyServiceFormKMSSubmitButtonProps';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { sendHybridizeKeyServiceTestRunRequest } from '~/features/hybridizeKeyServiceTestRun/reducers/sendHybridizeKeyServiceTestRunRequest';
import type HybridizeKeyServiceTestRunRequestBody from '~/features/hybridizeKeyServiceTestRun/state/HybridizeKeyServiceTestRunRequestBody';
import type { KMSConfigs } from '~/features/hybridizeKeyServiceTestRun/state/HybridizeKeyServiceTestRunRequestBody';
import { updateStatus } from '~/features/hybridizeKeyServiceTestRunStatus/hybridizeKeyServiceTestRunStatusSlice';
import { useTranslations } from '~/i18n/useTranslations';
import type { HybridizeKeyServiceTestRunStatusState } from '~/features/hybridizeKeyServiceTestRunStatus/state/Initial';

export default function FormSubmitButton({
    accordions,
    shouldBeLogged,
    experimentName,
}: HybridizeKeyServiceFormExperimentResetButtonProps) {
    const { hybridize } = useTranslations();
    const formTexts = hybridize.form;
    const [hasError, setHasError] = useState<boolean>(true);
    const hybridizeKeyServiceTestRunStatusState: HybridizeKeyServiceTestRunStatusState =
        useAppSelector((state) => state.hybridizeKeyServiceTestRunStatus);
    const dispatch = useAppDispatch();
    const submitHybridizeKeyServiceForm = () => {
        if (
            hasError ||
            hybridizeKeyServiceTestRunStatusState.status === 'created' ||
            hybridizeKeyServiceTestRunStatusState.status === 'running' ||
            hybridizeKeyServiceTestRunStatusState.status === 'finished'
        ) {
            return;
        }

        const kmsConfigs: KMSConfigs[] = accordions.map((accordion: any) => ({
            key_exchange_mechanism: accordion.keyExchangeMechanism,
            message_authentication_code_mechanism: accordion.messageAuthenticationCodeMechanism,
            message_authentication_code_underlying_function:
                accordion.messageAuthenticationCodeUnderlyingFunction,
            should_use_hybridization: accordion.shouldUseHybridization,
        }));
        const hybridizeKeyServiceTestRunRequestBody: HybridizeKeyServiceTestRunRequestBody = {
            experiment_name: experimentName,
            kms_configs: kmsConfigs,
            should_be_logged: shouldBeLogged,
        };
        dispatch(
            sendHybridizeKeyServiceTestRunRequest(hybridizeKeyServiceTestRunRequestBody) as any,
        );
        dispatch(updateStatus('created'));
    };

    useEffect(() => {
        const hasEmptyExperimentName: boolean = experimentName?.trim() === '';
        setHasError(hasEmptyExperimentName);
    }, [experimentName]);

    return (
        <button
            type="submit"
            className="primary-button"
            onClick={submitHybridizeKeyServiceForm}
            disabled={
                hasError &&
                (hybridizeKeyServiceTestRunStatusState.status === 'created' ||
                    hybridizeKeyServiceTestRunStatusState.status === 'running' ||
                    hybridizeKeyServiceTestRunStatusState.status === 'finished')
            }
        >
            {formTexts.submit}
        </button>
    );
}
