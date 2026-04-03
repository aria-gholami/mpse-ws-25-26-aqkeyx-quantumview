import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import initialState, {
    type KeyExchangeMechanismState,
} from '~/features/keyExchangeMechanism/state/Initial';
import { fetchKeyExchangeMechanism } from '~/features/keyExchangeMechanism/reducers/fetchKeyExchangeMechanism';

const keyExchangeMechanismSlice = createSlice({
    name: 'keyExchangeMechanism',
    initialState,
    reducers: {
        reset(state: KeyExchangeMechanismState): void {
            state.keyExchangeMechanism = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchKeyExchangeMechanism.pending, (state: KeyExchangeMechanismState) => {
                state.isLoading = true;
            })
            .addCase(
                fetchKeyExchangeMechanism.fulfilled,
                (
                    state: KeyExchangeMechanismState,
                    action: PayloadAction<KeyExchangeMechanismState>,
                ) => {
                    state.keyExchangeMechanism = action.payload.keyExchangeMechanism;
                    state.isLoading = false;
                },
            )
            .addCase(fetchKeyExchangeMechanism.rejected, (state: KeyExchangeMechanismState) => {
                state.isLoading = false;
            });
    },
});

export default keyExchangeMechanismSlice;
