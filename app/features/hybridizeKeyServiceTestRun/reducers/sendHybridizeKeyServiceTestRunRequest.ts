import { createAsyncThunk } from '@reduxjs/toolkit';
import type HybridizeKeyServiceTestRunRequestBody from '~/features/hybridizeKeyServiceTestRun/state/HybridizeKeyServiceTestRunRequestBody';
import type { RootState } from '~/redux/store';
import type { HybridizeKeyServiceTestRunState } from '~/features/hybridizeKeyServiceTestRun/state/Initial';

export const sendHybridizeKeyServiceTestRunRequest = createAsyncThunk<
    HybridizeKeyServiceTestRunState,
    HybridizeKeyServiceTestRunRequestBody,
    { state: RootState }
>(
    'hybridizeKeyServiceTestRun/request',
    async (hybridizeKeyServiceTestRunRequestBody: HybridizeKeyServiceTestRunRequestBody) => {
        try {
            const url: string = `${import.meta.env.VITE_TEST_API_BASE_URL}/run`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(hybridizeKeyServiceTestRunRequestBody),
            });
            if (!response.ok) {
                throw new Error('Response by hybridizeKeyServiceTestRun api is invalid.');
            }

            return (await response.json()) as HybridizeKeyServiceTestRunState;
        } catch (error) {
            console.error(error);

            throw error;
        }
    },
);
