import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import initialState from '~/features/cmsNews/state/Initial';
import type { CMSNewsState } from '~/features/cmsNews/state/Initial';
import { fetchCMSNews } from '~/features/cmsNews/reducers/fetchCMSNews';

const cmsNewsSlice = createSlice({
    name: 'cmsNews',
    initialState,
    reducers: {
        reset(state: CMSNewsState): void {
            state.title = '';
            state.text = '';
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCMSNews.pending, (state: CMSNewsState) => {
                state.isLoading = true;
            })
            .addCase(
                fetchCMSNews.fulfilled,
                (state: CMSNewsState, action: PayloadAction<CMSNewsState>) => {
                    state.title = action.payload.title;
                    state.text = action.payload.text;
                    state.isLoading = false;
                },
            )
            .addCase(fetchCMSNews.rejected, (state: CMSNewsState) => {
                state.isLoading = false;
            });
    },
});

export const { reset } = cmsNewsSlice.actions;

export default cmsNewsSlice;
