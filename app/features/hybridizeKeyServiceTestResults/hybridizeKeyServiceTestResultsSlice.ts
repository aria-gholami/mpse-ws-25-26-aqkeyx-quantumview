import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import initialState, {
    type HybridizeKeyServiceTestResultsState,
} from '~/features/hybridizeKeyServiceTestResults/state/Initial';
import { fetchHybridizeKeyServiceTestResults } from '~/features/hybridizeKeyServiceTestResults/reducer/fetchHybridizeKeyServiceTestResults';

const hybridizeKeyServiceTestResultsSlice = createSlice({
    name: 'hybridizeKeyServiceTestResults',
    initialState,
    reducers: {
        reset(state: HybridizeKeyServiceTestResultsState): void {
            state.status = 'idle';
            state.ram_logs = [];
            state.timestamps_logs = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchHybridizeKeyServiceTestResults.pending,
                (state: HybridizeKeyServiceTestResultsState) => {
                    state.status = 'loading';
                },
            )
            .addCase(
                fetchHybridizeKeyServiceTestResults.fulfilled,
                (
                    state: HybridizeKeyServiceTestResultsState,
                    action: PayloadAction<HybridizeKeyServiceTestResultsState>,
                ) => {
                    state.status = 'succeeded';
                    state.ram_logs = action.payload.ram_logs;
                    state.timestamps_logs = action.payload.timestamps_logs;
                },
            )
            .addCase(
                fetchHybridizeKeyServiceTestResults.rejected,
                (state: HybridizeKeyServiceTestResultsState) => {
                    state.status = 'failed';
                },
            );
    },
});

export const { reset } = hybridizeKeyServiceTestResultsSlice.actions;

export default hybridizeKeyServiceTestResultsSlice;
