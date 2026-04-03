export type Language = 'en' | 'de';

export interface LanguageState {
    language: Language;
}

const initialState: LanguageState = {
    language: 'en',
};

export default initialState;
