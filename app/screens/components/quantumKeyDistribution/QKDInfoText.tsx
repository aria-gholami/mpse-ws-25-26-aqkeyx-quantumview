import type QKDInfoTextProps from '~/screens/components/quantumKeyDistribution/types/QKDInfoTextProps';
import { useState } from 'react';
import { useTranslations } from '~/i18n/useTranslations';
import { qkdInfoTexts } from '~/i18n/qkdInfoTexts';
import { useAppSelector } from '~/redux/hooks';
import { Drawer } from '@mui/material';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

export default function QKDInfoText({
    isQKDModuleStarted,
    isPQCKeyExchangeStarted,
    isKeyCombinationStarted,
    isSharedSecretEncryptedStarted,
    isMultipleHopsStarted,
    mode,
}: QKDInfoTextProps) {
    const languageState = useAppSelector((state) => state.language);
    const { qkdInfo } = useTranslations();
    const qkdInfoTextTranslations = qkdInfoTexts[languageState.language];
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const texts = {
        beginner: [
            {
                step: qkdInfoTextTranslations.beginner[0].step,
                desc: qkdInfoTextTranslations.beginner[0].desc,
                more: qkdInfoTextTranslations.beginner[0].more,
            },
            {
                step: qkdInfoTextTranslations.beginner[1].step,
                desc: qkdInfoTextTranslations.beginner[1].desc,
                more: qkdInfoTextTranslations.beginner[1].more,
            },
            {
                step: qkdInfoTextTranslations.beginner[2].step,
                desc: qkdInfoTextTranslations.beginner[2].desc,
                more: qkdInfoTextTranslations.beginner[2].more,
            },
            {
                step: qkdInfoTextTranslations.beginner[3].step,
                desc: qkdInfoTextTranslations.beginner[3].desc,
                more: qkdInfoTextTranslations.beginner[3].more,
            },
            {
                step: qkdInfoTextTranslations.beginner[4].step,
                desc: qkdInfoTextTranslations.beginner[4].desc,
                more: qkdInfoTextTranslations.beginner[4].more,
            },
            {
                step: qkdInfoTextTranslations.beginner[5].step,
                desc: qkdInfoTextTranslations.beginner[5].desc,
                more: qkdInfoTextTranslations.beginner[5].more,
            },
        ],
        expert: [
            {
                step: qkdInfoTextTranslations.expert[0].step,
                desc: qkdInfoTextTranslations.expert[0].desc,
                more: qkdInfoTextTranslations.expert[0].more,
            },
            {
                step: qkdInfoTextTranslations.expert[1].step,
                desc: qkdInfoTextTranslations.expert[1].desc,
                more: qkdInfoTextTranslations.expert[1].more,
            },
            {
                step: qkdInfoTextTranslations.expert[2].step,
                desc: qkdInfoTextTranslations.expert[2].desc,
                more: qkdInfoTextTranslations.expert[2].more,
            },
            {
                step: qkdInfoTextTranslations.expert[3].step,
                desc: qkdInfoTextTranslations.expert[3].desc,
                more: qkdInfoTextTranslations.expert[3].more,
            },
            {
                step: qkdInfoTextTranslations.expert[4].step,
                desc: qkdInfoTextTranslations.expert[4].desc,
                more: qkdInfoTextTranslations.expert[4].more,
            },
            {
                step: qkdInfoTextTranslations.expert[5].step,
                desc: qkdInfoTextTranslations.expert[5].desc,
                more: qkdInfoTextTranslations.expert[5].more,
            },
        ],
    };

    let idx = 0;
    if (isQKDModuleStarted) {
        idx = 1;
    }
    if (isQKDModuleStarted && isPQCKeyExchangeStarted) {
        idx = 2;
    }
    if (isQKDModuleStarted && isPQCKeyExchangeStarted && isKeyCombinationStarted) {
        idx = 3;
    }
    if (
        isQKDModuleStarted &&
        isPQCKeyExchangeStarted &&
        isKeyCombinationStarted &&
        isSharedSecretEncryptedStarted
    ) {
        idx = 4;
    }
    if (
        isQKDModuleStarted &&
        isPQCKeyExchangeStarted &&
        isKeyCombinationStarted &&
        isSharedSecretEncryptedStarted &&
        isMultipleHopsStarted
    ) {
        idx = 5;
    }

    const activeMode = mode === 'expert' ? 'expert' : 'beginner';
    const entry = texts[activeMode][idx];

    return (
        <div className="info-text-container">
            <h3 className="mb-1">{entry.step}</h3>
            <div className="mx-10">
                <p className="line-clamp-1">{entry.desc}</p>
                <span
                    className="read-more-hint-container"
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                    {qkdInfo.button.more}
                    {isDrawerOpen ? (
                        <ChevronDownIcon className="read-more-hint-icon" />
                    ) : (
                        <ChevronUpIcon className="read-more-hint-icon" />
                    )}
                </span>
            </div>
            <Drawer
                anchor="bottom"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                ModalProps={{ keepMounted: true }}
            >
                <div className="read-more-hint">
                    <p className="whitespace-pre-line">{entry.desc}</p>
                    {entry.more !== '' ? (
                        <div className="mt-4">
                            <p className="whitespace-pre-line">{entry.more}</p>
                        </div>
                    ) : null}
                </div>
            </Drawer>
        </div>
    );
}
