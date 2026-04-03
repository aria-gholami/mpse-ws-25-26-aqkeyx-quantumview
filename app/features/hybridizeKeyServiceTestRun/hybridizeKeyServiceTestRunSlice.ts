import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import initialState from '~/features/hybridizeKeyServiceTestRun/state/Initial';
import { sendHybridizeKeyServiceTestRunRequest } from '~/features/hybridizeKeyServiceTestRun/reducers/sendHybridizeKeyServiceTestRunRequest';
import type { HybridizeKeyServiceTestRunState } from '~/features/hybridizeKeyServiceTestRun/state/Initial';

const hybridizeKeyServiceTestRunSlice = createSlice({
    name: 'hybridizeKeyServiceTestRun',
    initialState,
    reducers: {
        reset(state: HybridizeKeyServiceTestRunState): void {
            state.id = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                sendHybridizeKeyServiceTestRunRequest.fulfilled,
                (
                    state: HybridizeKeyServiceTestRunState,
                    action: PayloadAction<HybridizeKeyServiceTestRunState>,
                ) => {
                    state.id = action.payload.id;
                },
            )
            .addCase(
                sendHybridizeKeyServiceTestRunRequest.rejected,
                (state: HybridizeKeyServiceTestRunState) => {
                    state.id = false;
                },
            );
    },
});

export const { reset } = hybridizeKeyServiceTestRunSlice.actions;

export default hybridizeKeyServiceTestRunSlice;
