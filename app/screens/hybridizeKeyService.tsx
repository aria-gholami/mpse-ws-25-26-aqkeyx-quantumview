import React, { useEffect, useState } from 'react';
import Form from '~/screens/components/hybridizeKeyService/form';
import '../shared/styles/screens/hybridizeKeyService.css';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import type { HybridizeKeyServiceTestRunState } from '~/features/hybridizeKeyServiceTestRun/state/Initial';
import type { HybridizeKeyServiceTestRunStatusState } from '~/features/hybridizeKeyServiceTestRunStatus/state/Initial';
import { reset as resetTestRunStatus } from '~/features/hybridizeKeyServiceTestRunStatus/hybridizeKeyServiceTestRunStatusSlice';
import { reset as resetTestRunData } from '~/features/hybridizeKeyServiceTestRun/hybridizeKeyServiceTestRunSlice';
import { useTranslations } from '~/i18n/useTranslations';
import TestResults from '~/screens/components/hybridizeKeyService/testResults';
import OverlayLoadingSpinner from '~/screens/components/elements/overlayLoadingSpinner';
import ErrorOverlay from '~/screens/components/elements/errorOverlay';
import { useResetFailedTestRun } from '~/screens/components/hybridizeKeyService/hooks/useResetFailedTestRun';
import { useStartLoadingTestRunStatus } from '~/screens/components/hybridizeKeyService/hooks/useStartLoadingTestRunStatus';
import { useFetchTestResults } from '~/screens/components/hybridizeKeyService/hooks/useFetchTestResults';

export default function HybridizeKeyService() {
    const { hybridize } = useTranslations();
    const hybridizeKeyServiceTestRunState: HybridizeKeyServiceTestRunState = useAppSelector(
        (state) => state.hybridizeKeyServiceTestRun,
    );
    const hybridizeKeyServiceTestRunStatusState: HybridizeKeyServiceTestRunStatusState =
        useAppSelector((state) => state.hybridizeKeyServiceTestRunStatus);
    const dispatch = useAppDispatch();
    const [shouldDisplayTestResults, setShouldDisplayTestResults] = useState<boolean>(false);
    const [isPageInitialized, setPageIsInitialized] = useState<boolean>(false);
    useResetFailedTestRun();
    useStartLoadingTestRunStatus();
    useFetchTestResults(shouldDisplayTestResults, setShouldDisplayTestResults);
    useEffect(() => {
        setPageIsInitialized(true);
    });

    return (
        <div className="hybridize-key-service-container">
            <section className="mb-8">
                {((hybridizeKeyServiceTestRunStatusState.status === 'created' ||
                    hybridizeKeyServiceTestRunStatusState.status === 'running' ||
                    hybridizeKeyServiceTestRunStatusState.status === 'finished') &&
                    hybridizeKeyServiceTestRunState.id !== false &&
                    hybridizeKeyServiceTestRunState.id !== '') ||
                shouldDisplayTestResults ||
                !isPageInitialized ? null : (
                    <div>
                        <h1 className="mb-2">{hybridize.title}</h1>
                        <div className="mt-2">
                            <p className="mt-4">{hybridize.description.intro}</p>
                            <p className="mt-4">{hybridize.description.features}</p>
                            <p className="mt-4 quote">{hybridize.description.details}</p>
                        </div>
                    </div>
                )}
            </section>

            {hybridizeKeyServiceTestRunState.id === false && (
                <ErrorOverlay
                    title={hybridize.form.errorOverlay.title}
                    description={hybridize.form.errorOverlay.description}
                    onCloseClick={() => {
                        dispatch(resetTestRunData(undefined) as any);
                        dispatch(resetTestRunStatus(undefined) as any);
                    }}
                    closeButtonText={hybridize.form.errorOverlay.closeButton}
                    scrollable={false}
                />
            )}

            {(hybridizeKeyServiceTestRunStatusState.status === 'running' ||
                hybridizeKeyServiceTestRunStatusState.status === 'created') &&
            hybridizeKeyServiceTestRunState.id !== false &&
            hybridizeKeyServiceTestRunState.id !== '' &&
            !shouldDisplayTestResults ? (
                <OverlayLoadingSpinner
                    label={hybridize.form.loadingSpinner.running}
                    scrollable={false}
                />
            ) : shouldDisplayTestResults && isPageInitialized ? (
                <TestResults />
            ) : hybridizeKeyServiceTestRunStatusState.status !== 'finished' && isPageInitialized ? (
                <Form />
            ) : null}
        </div>
    );
}
