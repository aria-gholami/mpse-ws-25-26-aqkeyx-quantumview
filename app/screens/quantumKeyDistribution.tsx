import React, { useState } from 'react';
import ExperienceChangeModeSwitcher from '~/screens/components/quantumKeyDistribution/experienceChangeModeSwitcher';
import Start from '~/screens/components/quantumKeyDistribution/start';
import AgileQKeyExchange from '~/screens/components/quantumKeyDistribution/agileQKeyExchange';
import '../shared/styles/screens/quantumKeyDistribution.css';
import { useTranslations } from '~/i18n/useTranslations';

export default function QuantumKeyDistribution() {
    const [mode, setMode] = useState<'beginner' | 'expert' | null>(null);
    const { modes } = useTranslations();

    const renderContent = () => {
        if (mode === 'beginner') {
            return (
                <div className="experience-change-mode-description">
                    <h2 className="mb-2">{modes.beginner.label}</h2>
                    <p>{modes.beginner.description}</p>
                </div>
            );
        } else if (mode === 'expert') {
            return (
                <div className="experience-change-mode-description">
                    <h2 className="mb-2">{modes.expert.label}</h2>
                    <p>{modes.expert.description}</p>
                </div>
            );
        } else {
            return (
                <p className="experience-change-mode-description-placeholder">
                    {modes.placeholder}
                </p>
            );
        }
    };

    return (
        <div className="screen-container">
            <div className="main-container mt-6 mb-6">
                <div className="card-container changemode-card">
                    <ExperienceChangeModeSwitcher selectedMode={mode} setSelectMode={setMode} />
                    <div className="min-h-[120px]">{renderContent()}</div>
                </div>
            </div>

            <Start mode={mode} />
            <AgileQKeyExchange mode={mode} />
        </div>
    );
}
