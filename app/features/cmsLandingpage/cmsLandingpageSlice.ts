import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import initialState, { type CMSLandingpageState } from '~/features/cmsLandingpage/state/Initial';
import { fetchCMSLandingpage } from '~/features/cmsLandingpage/reducers/fetchCMSLandingpage';

const cmsLandingpageSlice = createSlice({
    name: 'cmsLandingpage',
    initialState,
    reducers: {
        reset(state: CMSLandingpageState): void {
            state.news = [];
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCMSLandingpage.pending, (state: CMSLandingpageState) => {
                state.isLoading = true;
            })
            .addCase(
                fetchCMSLandingpage.fulfilled,
                (state: CMSLandingpageState, action: PayloadAction<CMSLandingpageState>) => {
                    state.news = action.payload.news;
                    state.isLoading = false;
                },
            )
            .addCase(fetchCMSLandingpage.rejected, (state: CMSLandingpageState) => {
                state.isLoading = false;
            });
    },
});

export const { reset } = cmsLandingpageSlice.actions;

export default cmsLandingpageSlice;
