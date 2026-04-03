import React, { useEffect, useState } from 'react';
import type ErrorOverlayProps from '~/screens/components/elements/types/ErrorOverlayProps';
import { useBodyScrollLock } from '~/hooks/useBodyScrollLock';

export default function ErrorOverlay(props: ErrorOverlayProps) {
    useBodyScrollLock(!props.scrollable);
    const [isAnimationEnded, setIsAnimationEnded] = useState<boolean>(false);
    useEffect(() => {
        const id = requestAnimationFrame(() => setIsAnimationEnded(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <div
            className={[
                'error-overlay-container',
                isAnimationEnded ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
        >
            <div
                className={[
                    'error-overlay',
                    isAnimationEnded ? 'overlay-animation-end' : 'overlay-animation-start',
                ].join(' ')}
            >
                <h2 className="error-overlay-header">{props.title}</h2>
                <p className="error-overlay-description">{props.description}</p>

                <div className="error-overlay-button-container">
                    <button className="error-button" onClick={props.onCloseClick}>
                        {props.closeButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
}
