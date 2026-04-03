export interface KMSConfigs {
    key_exchange_mechanism: string;
    message_authentication_code_mechanism: string;
    message_authentication_code_underlying_function: string;
    should_use_hybridization: boolean;
}

export default interface HybridizeKeyServiceTestRunRequestBody {
    experiment_name: string;
    kms_configs: KMSConfigs[];
    should_be_logged: boolean;
}
