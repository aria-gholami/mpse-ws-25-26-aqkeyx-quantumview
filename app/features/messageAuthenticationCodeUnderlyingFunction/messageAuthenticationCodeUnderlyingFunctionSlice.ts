import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import initialState, {
    type MessageAuthenticationCodeUnderlyingFunctionState,
} from '~/features/messageAuthenticationCodeUnderlyingFunction/state/Initial';
import { fetchMessageAuthenticationCodeUnderlyingFunction } from '~/features/messageAuthenticationCodeUnderlyingFunction/reducers/fetchMessageAuthenticationCodeUnderlyingFunction';

const messageAuthenticationCodeUnderlyingFunctionSlice = createSlice({
    name: 'messageAuthenticationCodeUnderlyingFunction',
    initialState,
    reducers: {
        reset(state: MessageAuthenticationCodeUnderlyingFunctionState): void {
            state.messageAuthenticationCodeUnderlyingFunction = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchMessageAuthenticationCodeUnderlyingFunction.pending,
                (state: MessageAuthenticationCodeUnderlyingFunctionState) => {
                    state.isLoading = true;
                },
            )
            .addCase(
                fetchMessageAuthenticationCodeUnderlyingFunction.fulfilled,
                (
                    state: MessageAuthenticationCodeUnderlyingFunctionState,
                    action: PayloadAction<MessageAuthenticationCodeUnderlyingFunctionState>,
                ) => {
                    state.messageAuthenticationCodeUnderlyingFunction =
                        action.payload.messageAuthenticationCodeUnderlyingFunction;
                    state.isLoading = false;
                },
            )
            .addCase(
                fetchMessageAuthenticationCodeUnderlyingFunction.rejected,
                (state: MessageAuthenticationCodeUnderlyingFunctionState) => {
                    state.isLoading = false;
                },
            );
    },
});

export default messageAuthenticationCodeUnderlyingFunctionSlice;
