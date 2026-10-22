import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { smoothScrollToElement } from '../../utils/scroll';
import './navBar.css';

const sections = ['home', 'knows', 'proyects', 'contact'];

const NavBar = () => {
    const [t, i18n] = useTranslation(['global']);
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const currentLang = i18n.language?.startsWith('en') ? 'en' : 'es';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 16);

            const scrollPos = window.scrollY + window.innerHeight * 0.35;
            let current = 'home';
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollPos) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const scrollToSection = useCallback((id) => {
        const el = document.getElementById(id);
        if (el) {
            setIsMenuOpen(false);
            const run = () => smoothScrollToElement(el, { duration: 950 });
            if (isMenuOpen) {
                setTimeout(run, 280);
            } else {
                run();
            }
        }
    }, [isMenuOpen]);

    const toggleLang = useCallback(() => {
        i18n.changeLanguage(currentLang === 'es' ? 'en' : 'es');
    }, [i18n, currentLang]);

    return (
        <header className={`nav-shell ${scrolled ? 'is-scrolled' : ''}`}>
            <div className="nav-inner">
                <button
                    type="button"
                    className="nav-logo"
                    onClick={() => scrollToSection('home')}
                    aria-label="Inicio"
                >
                    <span className="logo-mark">fb</span>
                    <span className="logo-dot" />
                </button>

                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} aria-label="Principal">
                    {sections.map((id, i) => (
                        <button
                            key={id}
                            type="button"
                            className={`nav-link ${activeSection === id ? 'active' : ''}`}
                            onClick={() => scrollToSection(id)}
                        >
                            <span className="nav-link__index">0{i + 1}</span>
                            <span>{t(`navbar.span-${id}`)}</span>
                        </button>
                    ))}
                </nav>

                <div className="nav-actions">
                    <button
                        type="button"
                        className="nav-lang"
                        onClick={toggleLang}
                        aria-label="Cambiar idioma"
                    >
                        <span className={currentLang === 'es' ? 'on' : ''}>ES</span>
                        <span className="sep">/</span>
                        <span className={currentLang === 'en' ? 'on' : ''}>EN</span>
                    </button>
                    <button
                        type="button"
                        className={`nav-burger ${isMenuOpen ? 'open' : ''}`}
                        onClick={() => setIsMenuOpen((v) => !v)}
                        aria-label="Menú"
                        aria-expanded={isMenuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
            {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)} />}
        </header>
    );
};

export default NavBar;
