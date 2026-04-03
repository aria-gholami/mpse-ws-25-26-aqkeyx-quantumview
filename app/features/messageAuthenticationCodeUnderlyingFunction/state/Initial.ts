export interface MessageAuthenticationCodeUnderlyingFunctionState {
    messageAuthenticationCodeUnderlyingFunction: string[];
    isLoading: boolean;
}

const initialState: MessageAuthenticationCodeUnderlyingFunctionState = {
    messageAuthenticationCodeUnderlyingFunction: [],
    isLoading: false,
};

export default initialState;
