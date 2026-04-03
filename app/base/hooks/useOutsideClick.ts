import { useEffect } from 'react';

export const useOutsideClick = (ref: any, handler: (isOutside: boolean) => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler(false);
            } else {
                handler(true);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [ref, handler]);
};
