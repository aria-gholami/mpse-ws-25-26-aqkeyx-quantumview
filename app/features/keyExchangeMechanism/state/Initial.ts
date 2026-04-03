export interface KeyExchangeMechanismState {
    keyExchangeMechanism: string[];
    isLoading: boolean;
}

const initialState: KeyExchangeMechanismState = {
    keyExchangeMechanism: [],
    isLoading: false,
};

export default initialState;
