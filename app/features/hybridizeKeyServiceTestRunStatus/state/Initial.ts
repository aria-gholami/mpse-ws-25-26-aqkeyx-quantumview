export interface HybridizeKeyServiceTestRunStatusState {
    status: string;
    isWebsocketRunning: boolean;
}

const initialState: HybridizeKeyServiceTestRunStatusState = {
    status: '',
    isWebsocketRunning: false,
};

export default initialState;
