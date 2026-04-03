import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import initialState, {
    type MessageAuthenticationCodeMechanismState,
} from '~/features/messageAuthenticationCodeMechanism/state/Initial';
import { fetchMessageAuthenticationCodeMechanism } from '~/features/messageAuthenticationCodeMechanism/reducers/fetchMessageAuthenticationCodeMechanism';

const messageAuthenticationCodeMechanismSlice = createSlice({
    name: 'messageAuthenticationCodeMechanism',
    initialState,
    reducers: {
        reset(state: MessageAuthenticationCodeMechanismState): void {
            state.messageAuthenticationCodeMechanism = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchMessageAuthenticationCodeMechanism.pending,
                (state: MessageAuthenticationCodeMechanismState) => {
                    state.isLoading = true;
                },
            )
            .addCase(
                fetchMessageAuthenticationCodeMechanism.fulfilled,
                (
                    state: MessageAuthenticationCodeMechanismState,
                    action: PayloadAction<MessageAuthenticationCodeMechanismState>,
                ) => {
                    state.messageAuthenticationCodeMechanism =
                        action.payload.messageAuthenticationCodeMechanism;
                    state.isLoading = false;
                },
            )
            .addCase(
                fetchMessageAuthenticationCodeMechanism.rejected,
                (state: MessageAuthenticationCodeMechanismState) => {
                    state.isLoading = false;
                },
            );
    },
});

export default messageAuthenticationCodeMechanismSlice;
