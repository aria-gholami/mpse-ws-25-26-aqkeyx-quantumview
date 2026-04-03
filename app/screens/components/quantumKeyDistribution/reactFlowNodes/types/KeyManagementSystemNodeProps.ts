interface KeyManagementSystemData {
    label: string;
}

export default interface KeyManagementSystemNodeProps {
    data: KeyManagementSystemData;
    isKeyCombinationStarted: boolean;
    isSharedSecretEncryptedStarted: boolean;
}
