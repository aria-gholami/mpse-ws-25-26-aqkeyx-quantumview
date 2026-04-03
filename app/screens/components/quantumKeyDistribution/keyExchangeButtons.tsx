import type KeyExchangeButtonsProps from '~/screens/components/quantumKeyDistribution/types/KeyExchangeButtonsProps';
import { useTranslations } from '~/i18n/useTranslations';

export default function KeyExchangeButtons({
    setQKDModuleStarted,
    isQKDModuleStarted,
    setPQCKeyExchangeStarted,
    isPQCKeyExchangeStarted,
    setKeyCombinationStarted,
    isKeyCombinationStarted,
    setSharedSecretEncryptedStarted,
    isSharedSecretEncryptedStarted,
    setMultipleHopsStarted,
    isMultipleHopsStarted,
    mode,
}: KeyExchangeButtonsProps) {
    const { keyExchangeButtons } = useTranslations();
    const isAtLastStep =
        isQKDModuleStarted &&
        isPQCKeyExchangeStarted &&
        isKeyCombinationStarted &&
        isSharedSecretEncryptedStarted &&
        isMultipleHopsStarted;
    if (isQKDModuleStarted) {
        const continueButtonClick = () => {
            if (
                isPQCKeyExchangeStarted &&
                isKeyCombinationStarted &&
                isSharedSecretEncryptedStarted &&
                !isMultipleHopsStarted
            ) {
                setMultipleHopsStarted(true);
            }
            if (
                isPQCKeyExchangeStarted &&
                isKeyCombinationStarted &&
                !isSharedSecretEncryptedStarted
            ) {
                setSharedSecretEncryptedStarted(true);
            }
            if (isPQCKeyExchangeStarted && !isKeyCombinationStarted) {
                setKeyCombinationStarted(true);
            }
            if (!isPQCKeyExchangeStarted) {
                setPQCKeyExchangeStarted(true);
            }
        };
        const backButtonClick = () => {
            if (
                isQKDModuleStarted &&
                isPQCKeyExchangeStarted &&
                isKeyCombinationStarted &&
                isSharedSecretEncryptedStarted &&
                isMultipleHopsStarted
            ) {
                setMultipleHopsStarted(false);
                return;
            }
            if (
                isQKDModuleStarted &&
                isPQCKeyExchangeStarted &&
                isKeyCombinationStarted &&
                isSharedSecretEncryptedStarted
            ) {
                setSharedSecretEncryptedStarted(false);
                return;
            }
            if (isQKDModuleStarted && isPQCKeyExchangeStarted && isKeyCombinationStarted) {
                setKeyCombinationStarted(false);
                return;
            }
            if (isQKDModuleStarted && isPQCKeyExchangeStarted) {
                setPQCKeyExchangeStarted(false);
                return;
            }
            if (isQKDModuleStarted) {
                setQKDModuleStarted(false);
                return;
            }
        };

        return (
            <div className="key-exchange-buttons-container">
                <button
                    className="mt-5 primary-button"
                    onClick={continueButtonClick}
                    disabled={isAtLastStep}
                >
                    {keyExchangeButtons.continue}
                </button>
                <button className="mt-5 secondary-button" onClick={backButtonClick}>
                    {keyExchangeButtons.back}
                </button>
            </div>
        );
    }

    return (
        <div className="key-exchange-buttons-container">
            <button
                className="mt-5 primary-button"
                onClick={() => setQKDModuleStarted(true)}
                disabled={!mode}
            >
                {keyExchangeButtons.start}
            </button>
            <button className="mt-5 secondary-button" disabled={true}>
                {keyExchangeButtons.back}
            </button>
        </div>
    );
}
