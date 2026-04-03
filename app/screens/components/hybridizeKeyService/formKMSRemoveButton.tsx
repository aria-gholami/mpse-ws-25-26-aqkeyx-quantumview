import React from 'react';
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import type HybridizeKeyServiceFormAccordion from '~/screens/components/hybridizeKeyService/types/HybridizeKeyServiceFormAccordion';
import type HybridizeKeyServiceFormKMSProps from '~/screens/components/hybridizeKeyService/types/HybridizeKeyServiceFormKMSProps';
import { useTranslations } from '~/i18n/useTranslations';

export default function FormKMSRemoveButton({
    currentAccordion,
    accordions,
    setAccordions,
    setKMSErrorMessage,
}: HybridizeKeyServiceFormKMSProps) {
    const { hybridize } = useTranslations();
    const formTexts = hybridize.form;
    const removeAccordion = (id: number) => {
        setKMSErrorMessage('');
        if (accordions.length <= 2) {
            setKMSErrorMessage(formTexts.removeKMSError);
            return;
        }

        setAccordions((prev: HybridizeKeyServiceFormAccordion[]) =>
            prev
                .filter((accordionDetails) => accordionDetails.id !== id)
                .map((accordionDetails, index) => ({
                    ...accordionDetails,
                    id: index + 1,
                })),
        );
    };

    return (
        <IconButton
            component="span"
            aria-label={formTexts.removeKMSAriaLabel}
            size="small"
            className="hybridize-key-service-form-kms-remove-button"
            onClick={(event) => {
                event.stopPropagation();
                removeAccordion(currentAccordion.id);
            }}
            onFocus={(event) => event.stopPropagation()}
        >
            <DeleteOutlineIcon aria-hidden="true" />
        </IconButton>
    );
}
