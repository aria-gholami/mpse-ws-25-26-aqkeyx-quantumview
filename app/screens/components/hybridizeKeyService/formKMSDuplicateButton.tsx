import React from 'react';
import { IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import type HybridizeKeyServiceFormKMSProps from '~/screens/components/hybridizeKeyService/types/HybridizeKeyServiceFormKMSProps';
import { useTranslations } from '~/i18n/useTranslations';

export default function FormKMSDuplicateButton({
    currentAccordion,
    accordions,
    setAccordions,
    setKMSErrorMessage,
}: HybridizeKeyServiceFormKMSProps) {
    const accordionLimit = 20;
    const { hybridize } = useTranslations();
    const formTexts = hybridize.form;

    const duplicateAccordion = (id: number) => {
        setKMSErrorMessage('');
        if (accordions.length >= accordionLimit) {
            setKMSErrorMessage(formTexts.addKMSError);
            return;
        }

        setAccordions((prev: any) => [
            ...prev,
            {
                ...currentAccordion,
                id: prev.length + 1,
            },
        ]);
    };

    return (
        <IconButton
            component="span"
            aria-label={formTexts.duplicateKMSAriaLabel}
            size="small"
            className="hybridize-key-service-form-kms-duplicate-button"
            onClick={(event) => {
                event.stopPropagation();
                duplicateAccordion(currentAccordion.id);
            }}
            onFocus={(event) => event.stopPropagation()}
        >
            <ContentCopyIcon aria-hidden="true" fontSize="small" />
        </IconButton>
    );
}
