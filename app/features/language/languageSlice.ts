import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import initialState from '~/features/language/state/Initial';
import type { LanguageState } from '~/features/language/state/Initial';

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        updateLanguage(state: LanguageState, action: PayloadAction<LanguageState>): void {
            state.language = action.payload.language;
        },
    },
});

export const { updateLanguage } = languageSlice.actions;

export default languageSlice;
