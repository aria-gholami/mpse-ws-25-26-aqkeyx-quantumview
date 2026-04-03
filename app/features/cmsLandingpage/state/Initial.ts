export interface NewsDetails {
    title: string;
    description: string;
    category: string;
    host: string;
    date: string;
    newsLink: string;
}

export interface CMSLandingpageState {
    news: NewsDetails[];
    isLoading: boolean;
}

const initialState: CMSLandingpageState = {
    news: [],
    isLoading: false,
};

export default initialState;
