export interface CMSNewsState {
    title: string;
    text: string;
    isLoading: boolean;
}

const initialState: CMSNewsState = {
    title: '',
    text: '',
    isLoading: false,
};

export default initialState;
