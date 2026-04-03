import { createAsyncThunk } from '@reduxjs/toolkit';
import type { KeyExchangeMechanismState } from '~/features/keyExchangeMechanism/state/Initial';
import type KeyExchangeMechanismResponseBody from '~/features/keyExchangeMechanism/state/KeyExchangeMechanismResponseBody';
import type { RootState } from '~/redux/store';

export const fetchKeyExchangeMechanism = createAsyncThunk<
    KeyExchangeMechanismState,
    void,
    { state: RootState }
>(
    'keyExchangeMechanism/fetch',
    async () => {
        try {
            const url: string = `${import.meta.env.VITE_TEST_API_BASE_URL}/hks/kem`;
            const response = await fetch(url, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Response by key exchange mechanism api is invalid.');
            }

            const responseAsJson: KeyExchangeMechanismResponseBody = await response.json();
            const keyExchangeMechanismState: KeyExchangeMechanismState = {
                keyExchangeMechanism: Array.isArray(responseAsJson.options)
                    ? responseAsJson.options
                    : [],
                isLoading: false,
            };

            return keyExchangeMechanismState;
        } catch (error) {
            console.error(error);

            throw error;
        }
    },
    {
        condition: (_arg, { getState }) => {
            const { keyExchangeMechanism } = getState() as RootState;
            if (
                keyExchangeMechanism.isLoading ||
                keyExchangeMechanism.keyExchangeMechanism.length > 0
            ) {
                return false;
            }
        },
    },
);
