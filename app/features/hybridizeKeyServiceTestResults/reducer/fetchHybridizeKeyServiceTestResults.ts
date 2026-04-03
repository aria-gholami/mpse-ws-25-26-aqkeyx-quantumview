import { createAsyncThunk } from '@reduxjs/toolkit';
import type { HybridizeKeyServiceTestResultsState } from '~/features/hybridizeKeyServiceTestResults/state/Initial';
import type HybridizeKeyServiceTestResultsRequestBody from '~/features/hybridizeKeyServiceTestResults/state/HybridizeKeyServiceTestResultsRequestBody';
import type { RootState } from '~/redux/store';

export const fetchHybridizeKeyServiceTestResults = createAsyncThunk<
    HybridizeKeyServiceTestResultsState,
    HybridizeKeyServiceTestResultsRequestBody,
    { state: RootState }
>(
    'hybridizeKeyServiceTestResults/fetch',
    async (
        hybridizeKeyServiceTestResultsRequestBody: HybridizeKeyServiceTestResultsRequestBody,
    ) => {
        try {
            const url: string = `${import.meta.env.VITE_TEST_API_BASE_URL}/results/${hybridizeKeyServiceTestResultsRequestBody.experiment_id}`;
            const response = await fetch(url, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Response by hybridize key service test results api is invalid.');
            }

            return (await response.json()) as HybridizeKeyServiceTestResultsState;
        } catch (error) {
            console.error(error);

            throw error;
        }
    },
    {
        condition: (_arg, { getState }) => {
            const { hybridizeKeyServiceTestResults } = getState() as RootState;
            if (
                hybridizeKeyServiceTestResults.status === 'loading' ||
                hybridizeKeyServiceTestResults.status === 'succeeded'
            ) {
                return false;
            }
        },
    },
);
