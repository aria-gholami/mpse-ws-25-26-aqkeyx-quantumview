export interface ContactFormState {
    sentStatus: 'sent' | 'failed' | 'idle';
    isLoading: boolean;
}

const initialState: ContactFormState = {
    sentStatus: 'idle',
    isLoading: false,
};

export default initialState;
