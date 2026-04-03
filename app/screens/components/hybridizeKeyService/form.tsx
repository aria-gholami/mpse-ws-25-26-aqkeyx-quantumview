import React, { useEffect, useState } from 'react';
import '../../../shared/styles/components/hybridizeKeyServiceForm.css';
import type HybridizeKeyServiceFormAccordion from '~/screens/components/hybridizeKeyService/types/HybridizeKeyServiceFormAccordion';
import { Checkbox, FormControlLabel } from '@mui/material';
import FormKMSConfiguration from '~/screens/components/hybridizeKeyService/formKMSConfiguration';
import FormKMSAddButton from '~/screens/components/hybridizeKeyService/formKMSAddButton';
import FormResetButton from '~/screens/components/hybridizeKeyService/formResetButton';
import FormSubmitButton from '~/screens/components/hybridizeKeyService/formSubmitButton';
import { useTranslations } from '~/i18n/useTranslations';
import type { KeyExchangeMechanismState } from '~/features/keyExchangeMechanism/state/Initial';
import { useAppSelector } from '~/redux/hooks';
import type { MessageAuthenticationCodeMechanismState } from '~/features/messageAuthenticationCodeMechanism/state/Initial';
import type { MessageAuthenticationCodeUnderlyingFunctionState } from '~/features/messageAuthenticationCodeUnderlyingFunction/state/Initial';
import InputField from '~/screens/components/elements/inputField';

export default function Form() {
    const { hybridize, form } = useTranslations();
    const formTexts = hybridize.form;
    const keyExchangeMechanismState: KeyExchangeMechanismState = useAppSelector(
        (state) => state.keyExchangeMechanism,
    );
    const messageAuthenticationCodeMechanismState: MessageAuthenticationCodeMechanismState =
        useAppSelector((state) => state.messageAuthenticationCodeMechanism);
    const messageAuthenticationCodeUnderlyingFunctionState: MessageAuthenticationCodeUnderlyingFunctionState =
        useAppSelector((state) => state.messageAuthenticationCodeUnderlyingFunction);
    const [accordions, setAccordions] = useState<HybridizeKeyServiceFormAccordion[]>([
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
    const [hasExperimentNameError, setHasExperimentNameError] = React.useState(false);
    const [hasTypedExperimentName, setHasTypedExperimentName] = useState(false);
    const [experimentName, setExperimentName] = useState('');
    const [shouldBeLogged, setShouldBeLogged] = useState(true);
    const [kmsErrorMessage, setKMSErrorMessage] = useState<string>('');

    useEffect(() => {
        if (
            keyExchangeMechanismState.keyExchangeMechanism.length > 0 &&
            messageAuthenticationCodeMechanismState.messageAuthenticationCodeMechanism.length > 0 &&
            messageAuthenticationCodeUnderlyingFunctionState
                .messageAuthenticationCodeUnderlyingFunction.length > 0
        ) {
            setAccordions([
                {
                    id: 1,
                    shouldUseHybridization: true,
                    keyExchangeMechanism: keyExchangeMechanismState.keyExchangeMechanism[0],
                    messageAuthenticationCodeMechanism:
                        messageAuthenticationCodeMechanismState
                            .messageAuthenticationCodeMechanism[0],
                    messageAuthenticationCodeUnderlyingFunction:
                        messageAuthenticationCodeUnderlyingFunctionState
                            .messageAuthenticationCodeUnderlyingFunction[0],
                },
                {
                    id: 2,
                    shouldUseHybridization: true,
                    keyExchangeMechanism: keyExchangeMechanismState.keyExchangeMechanism[0],
                    messageAuthenticationCodeMechanism:
                        messageAuthenticationCodeMechanismState
                            .messageAuthenticationCodeMechanism[0],
                    messageAuthenticationCodeUnderlyingFunction:
                        messageAuthenticationCodeUnderlyingFunctionState
                            .messageAuthenticationCodeUnderlyingFunction[0],
                },
            ]);
        }
    }, [
        keyExchangeMechanismState,
        messageAuthenticationCodeMechanismState,
        messageAuthenticationCodeUnderlyingFunctionState,
    ]);

    return (
        <form
            className="card-container"
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <div className="hybridize-key-service-form-container">
                <FormKMSAddButton
                    accordions={accordions}
                    setAccordions={setAccordions}
                    kmsErrorMessage={kmsErrorMessage}
                    setKMSErrorMessage={setKMSErrorMessage}
                />
                <div>
                    <InputField
                        id="experiment-name"
                        type="text"
                        label={formTexts.experimentName}
                        required={true}
                        placeholder={formTexts.experimentNamePlaceholder}
                        onChange={(event) => {
                            const value = event.target.value;
                            setExperimentName(value);
                            if (!hasTypedExperimentName) {
                                setHasTypedExperimentName(true);
                            }

                            setHasExperimentNameError(false);
                            if (value.trim() === '') {
                                setHasExperimentNameError(true);
                            }
                        }}
                        hasInputFieldTyped={hasTypedExperimentName}
                        error={formTexts.experimentNameError}
                        hasError={hasExperimentNameError}
                    />
                </div>
                {accordions.map((accordion) => (
                    <FormKMSConfiguration
                        key={accordion.id}
                        currentAccordion={accordion}
                        setAccordions={setAccordions}
                        accordions={accordions}
                        setKMSErrorMessage={setKMSErrorMessage}
                    />
                ))}

                <div className="hybridize-key-service-form-checkbox-container">
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="should-be-logged-checkbox"
                                color="success"
                                checked={shouldBeLogged}
                                onChange={() => setShouldBeLogged(!shouldBeLogged)}
                            />
                        }
                        label={formTexts.loggingLabel}
                    />
                </div>

                <div className="hybridize-key-service-form-buttons-container">
                    <FormResetButton
                        setAccordions={setAccordions}
                        setShouldBeLogged={setShouldBeLogged}
                    />
                    <FormSubmitButton
                        accordions={accordions}
                        shouldBeLogged={shouldBeLogged}
                        experimentName={experimentName}
                    />
                </div>
                <span className="mt-2">
                    {form.requiredNote} <span className="required-asterisk">*</span>
                </span>
            </div>
        </form>
    );
}
