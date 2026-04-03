export interface MessageAuthenticationCodeMechanismState {
    messageAuthenticationCodeMechanism: string[];
    isLoading: boolean;
}

const initialState: MessageAuthenticationCodeMechanismState = {
    messageAuthenticationCodeMechanism: [],
    isLoading: false,
};

export default initialState;
