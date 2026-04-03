export default interface QKDInfoTextProps {
    isQKDModuleStarted: boolean;
    isPQCKeyExchangeStarted: boolean;
    isKeyCombinationStarted: boolean;
    isSharedSecretEncryptedStarted: boolean;
    isMultipleHopsStarted: boolean;
    mode: 'expert' | 'beginner' | null;
}
