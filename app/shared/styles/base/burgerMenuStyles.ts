import type { Styles } from 'react-burger-menu';

export const BURGER_MENU_STYLES = {
    bmBurgerButton: {
        position: 'relative',
        width: '26px',
        height: '20px',
    },
    bmBurgerBars: { background: '#314158' },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        top: '0',
        zIndex: '2000',
    },
    bmMenu: {
        background: '#273446',
        fontSize: '1.1rem',
        display: 'block',
        overflow: 'hidden',
    },
    bmItemList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '1rem',
        background: '#273446',
        overflow: 'auto',
        marginTop: '4rem',
        marginBottom: '4rem',
        paddingBottom: '6rem',
    },
    bmOverlay: {
        background: '#273446',
    },
    bmCrossButton: {
        height: '32px',
        width: '32px',
        top: '20px',
        right: '20px',
    },
    bmCross: {
        background: '#ffffff',
        height: '5px',
        width: '32px',
        right: '-15px',
        top: '7px',
    },
} as Partial<Styles>;
