export const useVibration = () => {
    const vibrate = (pattern: number | number[] = 30) => {
        if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
            navigator.vibrate(pattern);
        }
    };

    return { vibrate };
};
