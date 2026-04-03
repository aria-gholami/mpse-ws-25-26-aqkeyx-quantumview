import { createAsyncThunk } from '@reduxjs/toolkit';
import type { MessageAuthenticationCodeUnderlyingFunctionState } from '~/features/messageAuthenticationCodeUnderlyingFunction/state/Initial';
import type MessageAuthenticationCodeUnderlyingFunctionResponseBody from '~/features/messageAuthenticationCodeUnderlyingFunction/state/MessageAuthenticationCodeUnderlyingFunctionResponseBody';
import type { RootState } from '~/redux/store';

export const fetchMessageAuthenticationCodeUnderlyingFunction = createAsyncThunk<
    MessageAuthenticationCodeUnderlyingFunctionState,
    void,
    { state: RootState }
>(
    'messageAuthenticationCodeUnderlyingFunction/fetch',
    async () => {
        try {
            const url: string = `${import.meta.env.VITE_TEST_API_BASE_URL}/hks/macuf`;
            const response = await fetch(url, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(
                    'Response by message message authentication code underlying function api is invalid.',
                );
            }

            const responseAsJson: MessageAuthenticationCodeUnderlyingFunctionResponseBody =
                await response.json();
            const messageAuthenticationCodeUnderlyingFunctionState: MessageAuthenticationCodeUnderlyingFunctionState =
                {
                    messageAuthenticationCodeUnderlyingFunction: Array.isArray(
                        responseAsJson.options,
                    )
                        ? responseAsJson.options
                        : [],
                    isLoading: false,
                };

            return messageAuthenticationCodeUnderlyingFunctionState;
        } catch (error) {
            console.error(error);

            throw error;
        }
    },
    {
        condition: (_arg, { getState }) => {
            const { messageAuthenticationCodeUnderlyingFunction } = getState() as RootState;
            if (
                messageAuthenticationCodeUnderlyingFunction.isLoading ||
                messageAuthenticationCodeUnderlyingFunction
                    .messageAuthenticationCodeUnderlyingFunction.length > 0
            ) {
                return false;
            }
        },
    },
);
