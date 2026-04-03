import { useEffect } from 'react';
import { reset as resetTestRunStatus } from '~/features/hybridizeKeyServiceTestRunStatus/hybridizeKeyServiceTestRunStatusSlice';
import { reset as resetResults } from '~/features/hybridizeKeyServiceTestResults/hybridizeKeyServiceTestResultsSlice';
import type { HybridizeKeyServiceTestRunState } from '~/features/hybridizeKeyServiceTestRun/state/Initial';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';

export const useResetFailedTestRun = () => {
    const hybridizeKeyServiceTestRunState: HybridizeKeyServiceTestRunState = useAppSelector(
        (state) => state.hybridizeKeyServiceTestRun,
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (hybridizeKeyServiceTestRunState.id === false) {
            dispatch(resetTestRunStatus(undefined) as any);
            dispatch(resetResults(undefined) as any);
        }
    }, [hybridizeKeyServiceTestRunState.id]);
};
