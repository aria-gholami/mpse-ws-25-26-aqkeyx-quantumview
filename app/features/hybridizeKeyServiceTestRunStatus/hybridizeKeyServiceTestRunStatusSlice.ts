import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import initialState from '~/features/hybridizeKeyServiceTestRunStatus/state/Initial';

const hybridizeKeyServiceTestRunStatusSlice = createSlice({
    name: 'hybridizeKeyServiceTestRunStatus',
    initialState,
    reducers: {
        updateStatus(state, action: PayloadAction<string>): void {
            state.status = action.payload;
        },
        updateIsWebsocketRunning(state, action: PayloadAction<boolean>): void {
            state.isWebsocketRunning = action.payload;
        },
        reset(state): void {
            state.status = '';
            state.isWebsocketRunning = false;
        },
    },
});

export const { updateStatus, updateIsWebsocketRunning, reset } =
    hybridizeKeyServiceTestRunStatusSlice.actions;

export default hybridizeKeyServiceTestRunStatusSlice;
