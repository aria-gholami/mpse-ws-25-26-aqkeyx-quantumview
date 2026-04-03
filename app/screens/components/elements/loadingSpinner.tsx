import React from 'react';
import type LoadingSpinnerProps from '~/screens/components/elements/types/LoadingSpinnerProps';

export default function LoadingSpinner(props: LoadingSpinnerProps) {
    return (
        <div className="loading-spinner-container">
            <div className="loading-spinner" />
            <p className="loading-spinner-text">{props.label}</p>
        </div>
    );
}
