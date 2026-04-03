import React from 'react';
import '../../../shared/styles/components/experienceChangeModeSwitcher.css';
import { useTranslations } from '~/i18n/useTranslations';
import type ExperienceChangeModeSwitcherProps from '~/screens/components/quantumKeyDistribution/types/ExperienceChangeModeSwitcherProps';

export default function ExperienceChangeModeSwitcher({
    selectedMode,
    setSelectMode,
}: ExperienceChangeModeSwitcherProps) {
    const { modes } = useTranslations();

    return (
        <div className="experience-change-mode-toggle-container">
            <button
                className={`${selectedMode === 'beginner' ? 'primary-button' : 'secondary-button'}`}
                onClick={() => setSelectMode('beginner')}
            >
                {modes.beginner.label}
            </button>
            <button
                className={`${selectedMode === 'expert' ? 'primary-button' : 'secondary-button'}`}
                onClick={() => setSelectMode('expert')}
            >
                {modes.expert.label}
            </button>
        </div>
    );
}
