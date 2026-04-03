export default interface ExperienceChangeModeSwitcherProps {
    selectedMode: 'expert' | 'beginner' | null;
    setSelectMode: (mode: 'expert' | 'beginner') => void;
}
