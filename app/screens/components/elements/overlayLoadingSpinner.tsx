import React, { useEffect, useState } from 'react';
import { useBodyScrollLock } from '~/hooks/useBodyScrollLock';
import type OverlayLoadingSpinnerProps from '~/screens/components/elements/types/OverlayLoadingSpinnerProps';

export default function OverlayLoadingSpinner(props: OverlayLoadingSpinnerProps) {
    useBodyScrollLock(!props.scrollable);
    const [isAnimationEnded, setIsAnimationEnded] = useState<boolean>(false);
    useEffect(() => {
        const id = requestAnimationFrame(() => setIsAnimationEnded(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <div
            className={[
                'overlay-loading-spinner-overlay-container',
                isAnimationEnded ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
        >
            <div
                className={[
                    'overlay-loading-spinner-container',
                    isAnimationEnded ? 'overlay-animation-end' : 'overlay-animation-start',
                ].join(' ')}
            >
                <span className="overlay-loading-spinner" aria-label={props.label} />
                <p className="overlay-loading-spinner-text">{props.label}</p>
            </div>
        </div>
    );
}
