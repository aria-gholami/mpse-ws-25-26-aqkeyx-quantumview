import { createAsyncThunk } from '@reduxjs/toolkit';
import type { MessageAuthenticationCodeMechanismState } from '~/features/messageAuthenticationCodeMechanism/state/Initial';
import type MessageAuthenticationCodeMechanismResponseBody from '~/features/messageAuthenticationCodeMechanism/state/MessageAuthenticationCodeMechanismResponseBody';
import type { RootState } from '~/redux/store';

export const fetchMessageAuthenticationCodeMechanism = createAsyncThunk<
    MessageAuthenticationCodeMechanismState,
    void,
    { state: RootState }
>(
    'messageAuthenticationCodeMechanism/fetch',
    async () => {
        try {
            const url: string = `${import.meta.env.VITE_TEST_API_BASE_URL}/hks/macm`;
            const response = await fetch(url, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(
                    'Response by message authentication code mechanism api is invalid.',
                );
            }

            const responseAsJson: MessageAuthenticationCodeMechanismResponseBody =
                await response.json();
            const messageAuthenticationCodeMechanismState: MessageAuthenticationCodeMechanismState =
                {
                    messageAuthenticationCodeMechanism: Array.isArray(responseAsJson.options)
                        ? responseAsJson.options
                        : [],
                    isLoading: false,
                };

            return messageAuthenticationCodeMechanismState;
        } catch (error) {
            console.error(error);

            throw error;
        }
    },
    {
        condition: (_arg, { getState }) => {
            const { messageAuthenticationCodeMechanism } = getState() as RootState;
            if (
                messageAuthenticationCodeMechanism.isLoading ||
                messageAuthenticationCodeMechanism.messageAuthenticationCodeMechanism.length > 0
            ) {
                return false;
            }
        },
    },
);
