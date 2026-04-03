import { useEffect } from 'react';
import type { HybridizeKeyServiceTestRunState } from '~/features/hybridizeKeyServiceTestRun/state/Initial';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import type HybridizeKeyServiceTestResultsRequestBody from '~/features/hybridizeKeyServiceTestResults/state/HybridizeKeyServiceTestResultsRequestBody';
import { fetchHybridizeKeyServiceTestResults } from '~/features/hybridizeKeyServiceTestResults/reducer/fetchHybridizeKeyServiceTestResults';
import type { HybridizeKeyServiceTestRunStatusState } from '~/features/hybridizeKeyServiceTestRunStatus/state/Initial';
import type { HybridizeKeyServiceTestResultsState } from '~/features/hybridizeKeyServiceTestResults/state/Initial';

export const useFetchTestResults = (
    shouldDisplayTestResults: boolean,
    setShouldDisplayTestResults: (shouldDisplayTestResults: boolean) => void,
) => {
    const hybridizeKeyServiceTestRunState: HybridizeKeyServiceTestRunState = useAppSelector(
        (state) => state.hybridizeKeyServiceTestRun,
    );
    const hybridizeKeyServiceTestRunStatusState: HybridizeKeyServiceTestRunStatusState =
        useAppSelector((state) => state.hybridizeKeyServiceTestRunStatus);
    const hybridizeKeyServiceTestResultsState: HybridizeKeyServiceTestResultsState = useAppSelector(
        (state) => state.hybridizeKeyServiceTestResults,
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (
            hybridizeKeyServiceTestRunStatusState.status === 'finished' &&
            typeof hybridizeKeyServiceTestRunState.id === 'string' &&
            !shouldDisplayTestResults
        ) {
            const hybridizeKeyServiceTestResultsRequestBody: HybridizeKeyServiceTestResultsRequestBody =
                {
                    experiment_id: hybridizeKeyServiceTestRunState.id,
                };
            dispatch(
                fetchHybridizeKeyServiceTestResults(
                    hybridizeKeyServiceTestResultsRequestBody,
                ) as any,
            );
        }

        if (hybridizeKeyServiceTestResultsState.status === 'succeeded') {
            setShouldDisplayTestResults(true);
        }
    }, [
        hybridizeKeyServiceTestRunState.id,
        hybridizeKeyServiceTestRunStatusState.status,
        hybridizeKeyServiceTestResultsState.status,
    ]);
};
