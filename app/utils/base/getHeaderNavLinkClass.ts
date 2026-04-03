export const getHeaderNavLinkClass = (
    currentPath: string,
    href: string,
    variant: 'desktop' | 'mobile',
) => {
    const baseClass = 'text-lg transition-all duration-300 p-2';
    const isActive = currentPath === href;
    if (variant === 'desktop') {
        return `${baseClass} ${
            isActive ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'
        }`;
    }

    return `${baseClass} ${
        isActive
            ? 'text-indigo-400 font-semibold'
            : 'text-white touch-manipulation active:text-indigo-400'
    }`;
};
