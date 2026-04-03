import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import initialState, { type CMSRelatedWorksState } from '~/features/cmsRelatedWorks/state/Initial';
import { fetchCMSRelatedWorks } from '~/features/cmsRelatedWorks/reducers/fetchCMSRelatedWorks';

const cmsRelateWorksSlice = createSlice({
    name: 'cmsRelatedWorks',
    initialState,
    reducers: {
        reset(state: CMSRelatedWorksState): void {
            state.relatedWorks = [];
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCMSRelatedWorks.pending, (state: CMSRelatedWorksState) => {
                state.isLoading = true;
            })
            .addCase(
                fetchCMSRelatedWorks.fulfilled,
                (state: CMSRelatedWorksState, action: PayloadAction<CMSRelatedWorksState>) => {
                    state.relatedWorks = action.payload.relatedWorks;
                    state.isLoading = false;
                },
            )
            .addCase(fetchCMSRelatedWorks.rejected, (state: CMSRelatedWorksState) => {
                state.isLoading = false;
            });
    },
});

export const { reset } = cmsRelateWorksSlice.actions;

export default cmsRelateWorksSlice;
