export default interface KeyExchangeButtonsProps {
    setQKDModuleStarted: (value: boolean) => void;
    isQKDModuleStarted: boolean;
    setPQCKeyExchangeStarted(value: boolean): void;
    isPQCKeyExchangeStarted: boolean;
    setKeyCombinationStarted(value: boolean): void;
    isKeyCombinationStarted: boolean;
    setSharedSecretEncryptedStarted: (value: boolean) => void;
    isSharedSecretEncryptedStarted: boolean;
    setMultipleHopsStarted: (value: boolean) => void;
    isMultipleHopsStarted: boolean;
    mode: 'expert' | 'beginner' | null;
}
