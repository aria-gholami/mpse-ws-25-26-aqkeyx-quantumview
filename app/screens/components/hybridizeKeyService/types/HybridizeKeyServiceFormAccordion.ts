export default interface HybridizeKeyServiceFormAccordion {
    id: number;
    shouldUseHybridization: boolean;
    keyExchangeMechanism: string;
    messageAuthenticationCodeMechanism: string;
    messageAuthenticationCodeUnderlyingFunction: string;
}
