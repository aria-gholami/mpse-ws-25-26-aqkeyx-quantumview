import { useEffect } from 'react';
import { updateIsWebsocketRunning } from '~/features/hybridizeKeyServiceTestRunStatus/hybridizeKeyServiceTestRunStatusSlice';
import type { HybridizeKeyServiceTestRunState } from '~/features/hybridizeKeyServiceTestRun/state/Initial';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import type { HybridizeKeyServiceTestRunStatusState } from '~/features/hybridizeKeyServiceTestRunStatus/state/Initial';

export const useStartLoadingTestRunStatus = () => {
    const hybridizeKeyServiceTestRunState: HybridizeKeyServiceTestRunState = useAppSelector(
        (state) => state.hybridizeKeyServiceTestRun,
    );
    const hybridizeKeyServiceTestRunStatusState: HybridizeKeyServiceTestRunStatusState =
        useAppSelector((state) => state.hybridizeKeyServiceTestRunStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (
            hybridizeKeyServiceTestRunState.id !== '' &&
            typeof hybridizeKeyServiceTestRunState.id === 'string' &&
            !hybridizeKeyServiceTestRunStatusState.isWebsocketRunning
        ) {
            dispatch(updateIsWebsocketRunning(true) as any);
            dispatch({
                type: 'hybridizeKeyServiceTestRunStatus/load',
                payload: {
                    id: hybridizeKeyServiceTestRunState.id,
                },
            });
        }
    }, [hybridizeKeyServiceTestRunState.id, hybridizeKeyServiceTestRunStatusState]);
};
