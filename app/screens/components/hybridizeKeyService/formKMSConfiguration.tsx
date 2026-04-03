import React, { useEffect } from 'react';
import type HybridizeKeyServiceFormAccordion from '~/screens/components/hybridizeKeyService/types/HybridizeKeyServiceFormAccordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Checkbox, FormControlLabel } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import type HybridizeKeyServiceFormKMSProps from '~/screens/components/hybridizeKeyService/types/HybridizeKeyServiceFormKMSProps';
import type { KeyExchangeMechanismState } from '~/features/keyExchangeMechanism/state/Initial';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import type { MessageAuthenticationCodeMechanismState } from '~/features/messageAuthenticationCodeMechanism/state/Initial';
import type { MessageAuthenticationCodeUnderlyingFunctionState } from '~/features/messageAuthenticationCodeUnderlyingFunction/state/Initial';
import { fetchKeyExchangeMechanism } from '~/features/keyExchangeMechanism/reducers/fetchKeyExchangeMechanism';
import { fetchMessageAuthenticationCodeMechanism } from '~/features/messageAuthenticationCodeMechanism/reducers/fetchMessageAuthenticationCodeMechanism';
import { fetchMessageAuthenticationCodeUnderlyingFunction } from '~/features/messageAuthenticationCodeUnderlyingFunction/reducers/fetchMessageAuthenticationCodeUnderlyingFunction';
import { useTranslations } from '~/i18n/useTranslations';
import FormKMSRemoveButton from '~/screens/components/hybridizeKeyService/formKMSRemoveButton';
import FormKMSDuplicateButton from '~/screens/components/hybridizeKeyService/formKMSDuplicateButton';

export default function FormKMSConfiguration({
    currentAccordion,
    setAccordions,
    accordions,
    setKMSErrorMessage,
}: HybridizeKeyServiceFormKMSProps) {
    const { hybridize } = useTranslations();
    const formTexts = hybridize.form;
    const keyExchangeMechanismState: KeyExchangeMechanismState = useAppSelector(
        (state) => state.keyExchangeMechanism,
    );
    const messageAuthenticationCodeMechanismState: MessageAuthenticationCodeMechanismState =
        useAppSelector((state) => state.messageAuthenticationCodeMechanism);
    const messageAuthenticationCodeUnderlyingFunctionState: MessageAuthenticationCodeUnderlyingFunctionState =
        useAppSelector((state) => state.messageAuthenticationCodeUnderlyingFunction);
    const dispatch = useAppDispatch();

    const updateAccordion = (id: number, fields: Partial<HybridizeKeyServiceFormAccordion>) => {
        setAccordions((prev: any) =>
            prev.map((accordionDetails: HybridizeKeyServiceFormAccordion) =>
                accordionDetails.id === id ? { ...accordionDetails, ...fields } : accordionDetails,
            ),
        );
    };

    useEffect(() => {
        dispatch(fetchKeyExchangeMechanism(undefined) as any);
        dispatch(fetchMessageAuthenticationCodeMechanism(undefined) as any);
        dispatch(fetchMessageAuthenticationCodeUnderlyingFunction(undefined) as any);
    }, [dispatch]);

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={'hybridize-key-service-form-kms-summary'}
            >
                <Typography component="span">
                    {formTexts.kmsHeadline} {currentAccordion.id}
                </Typography>
                <div className="hybridize-key-service-form-kms-actions">
                    <FormKMSDuplicateButton
                        currentAccordion={currentAccordion}
                        setAccordions={setAccordions}
                        accordions={accordions}
                        setKMSErrorMessage={setKMSErrorMessage}
                    />
                    <FormKMSRemoveButton
                        currentAccordion={currentAccordion}
                        setAccordions={setAccordions}
                        accordions={accordions}
                        setKMSErrorMessage={setKMSErrorMessage}
                    />
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div className="hybridize-key-service-form-container">
                    <div>
                        <label
                            htmlFor={`key-exchange-mechanism-${currentAccordion.id}`}
                            className="font-bold form-label"
                        >
                            {formTexts.fields.keyExchangeMechanism}
                            <span className="required-asterisk"> *</span>
                        </label>
                        <select
                            id={`key-exchange-mechanism-${currentAccordion.id}`}
                            required={true}
                            className="form-input-field"
                            value={currentAccordion.keyExchangeMechanism}
                            onChange={(event) =>
                                updateAccordion(currentAccordion.id, {
                                    keyExchangeMechanism: event.target.value,
                                })
                            }
                        >
                            {keyExchangeMechanismState.keyExchangeMechanism.map((item: string) => (
                                <option key={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor={`message-authentication-code-mechanism-${currentAccordion.id}`}
                            className="font-bold form-label"
                        >
                            {formTexts.fields.macMechanism}
                            <span className="required-asterisk"> *</span>
                        </label>
                        <select
                            id={`message-authentication-code-mechanism-${currentAccordion.id}`}
                            required={true}
                            value={currentAccordion.messageAuthenticationCodeMechanism}
                            className="form-input-field"
                            onChange={(event) =>
                                updateAccordion(currentAccordion.id, {
                                    messageAuthenticationCodeMechanism: event.target.value,
                                })
                            }
                        >
                            {messageAuthenticationCodeMechanismState.messageAuthenticationCodeMechanism.map(
                                (item: string) => (
                                    <option key={item}>{item}</option>
                                ),
                            )}
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor={`message-authentication-code-underlying-function-${currentAccordion.id}`}
                            className="font-bold form-label"
                        >
                            {formTexts.fields.macUnderlyingFunction}
                            <span className="required-asterisk"> *</span>
                        </label>
                        <select
                            id={`message-authentication-code-underlying-function-${currentAccordion.id}`}
                            required={true}
                            className="form-input-field"
                            value={currentAccordion.messageAuthenticationCodeUnderlyingFunction}
                            onChange={(event) =>
                                updateAccordion(currentAccordion.id, {
                                    messageAuthenticationCodeUnderlyingFunction: event.target.value,
                                })
                            }
                        >
                            {messageAuthenticationCodeUnderlyingFunctionState.messageAuthenticationCodeUnderlyingFunction.map(
                                (item: string) => (
                                    <option key={item}>{item}</option>
                                ),
                            )}
                        </select>
                    </div>

                    <div className="hybridize-key-service-form-checkbox-container">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    id={`use-hybridization-${currentAccordion.id}`}
                                    color="success"
                                    checked={currentAccordion.shouldUseHybridization}
                                    onChange={(event) =>
                                        updateAccordion(currentAccordion.id, {
                                            shouldUseHybridization: event.target.checked,
                                        })
                                    }
                                />
                            }
                            label={formTexts.hybridizationLabel}
                        />
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}
