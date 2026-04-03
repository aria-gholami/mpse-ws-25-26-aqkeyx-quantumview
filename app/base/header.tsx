import React, { useRef, useState } from 'react';
import BurgerMenu from 'react-burger-menu';
import LanguageSwitcher from '~/base/languageSwitcher';
import { useTranslations } from '~/i18n/useTranslations';
import { BURGER_MENU_STYLES } from '~/shared/styles/base/burgerMenuStyles';
import { useVibration } from '~/base/hooks/useVibration';
import { useBodyScrollLock } from '~/hooks/useBodyScrollLock';
import { useOutsideClick } from '~/base/hooks/useOutsideClick';
import NavLinks from '~/base/navLinks';

const { slide: Menu } = BurgerMenu;

export default function Header() {
    const { header } = useTranslations();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const burgerMenuRefBox = useRef<HTMLDivElement | null>(null);
    const { vibrate } = useVibration();
    useBodyScrollLock(isMenuOpen);
    useOutsideClick(burgerMenuRefBox, setIsMenuOpen);
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

    return (
        <header>
            <nav>
                <div className="logo-link-container">
                    <span className="sr-only">{header.srLabel}</span>
                    <a href="/">
                        <img alt="" src="/favicon.ico" />
                    </a>
                </div>

                <div className="desktop-nav">
                    <NavLinks variant="desktop" currentPath={currentPath} links={header.nav} />
                </div>
                <div className="language-switcher-desktop p-2">
                    <LanguageSwitcher />
                </div>
                {isMenuOpen && (
                    <div className="burger-menu-overlay" onClick={() => setIsMenuOpen(false)} />
                )}
                <div
                    ref={burgerMenuRefBox}
                    className="burger-menu-container"
                    onPointerDown={() => vibrate(25)}
                >
                    <Menu
                        right
                        styles={BURGER_MENU_STYLES}
                        isOpen={isMenuOpen}
                        onClose={() => {
                            setIsMenuOpen(false);
                        }}
                    >
                        <NavLinks variant="mobile" currentPath={currentPath} links={header.nav} />
                        <div className="burger-menu-language-switch-divider-container">
                            <div className="burger-menu-language-switch-divider" />
                        </div>
                        <LanguageSwitcher />
                    </Menu>
                </div>
            </nav>

            <div id="page-wrap">
                <div className="header-title-container">
                    <h1>{header.hero.title}</h1>
                    <p>{header.hero.subtitle}</p>
                </div>
            </div>
        </header>
    );
}
