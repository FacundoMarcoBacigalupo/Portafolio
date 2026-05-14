import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import GitHub from '../../assets/icons/icons8-github.svg';
import Linkedin from '../../assets/icons/icons8-linkedin.svg';
import { smoothScrollToElement } from '../../utils/scroll';
import './Home.css';

const ICONS = {
    code: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    team: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    book: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    ),
    film: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="2.5" />
            <path d="M7 2v20" />
            <path d="M17 2v20" />
            <path d="M2 12h20" />
            <path d="M2 7h5" />
            <path d="M2 17h5" />
            <path d="M17 17h5" />
            <path d="M17 7h5" />
        </svg>
    ),
    rocket: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    ),
};

const renderRichText = (text) => {
    const parts = text.split(/(\{[a-z]+\})/g);
    return parts.map((part, i) => {
        const m = part.match(/^\{([a-z]+)\}$/);
        if (m && ICONS[m[1]]) {
            return (
                <span key={i} className="text-icon" aria-hidden="true">
                    {ICONS[m[1]]}
                </span>
            );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
    });
};

const useTypewriter = (
    words,
    { typing = 90, erasing = 45, holdFull = 1200, holdEmpty = 300 } = {}
) => {
    const [text, setText] = useState('');
    const wordsRef = useRef(words);
    wordsRef.current = words;
    const textRef = useRef('');
    const idxRef = useRef(0);
    const phaseRef = useRef('typing');

    useEffect(() => {
        let timer;
        let alive = true;
        const tick = () => {
            if (!alive) return;
            const current = wordsRef.current[idxRef.current];
            if (phaseRef.current === 'typing') {
                if (textRef.current.length < current.length) {
                    textRef.current = current.slice(0, textRef.current.length + 1);
                    setText(textRef.current);
                    timer = setTimeout(tick, typing);
                } else {
                    phaseRef.current = 'erasing';
                    timer = setTimeout(tick, holdFull);
                }
            } else {
                if (textRef.current.length > 0) {
                    textRef.current = textRef.current.slice(0, -1);
                    setText(textRef.current);
                    timer = setTimeout(tick, erasing);
                } else {
                    idxRef.current = (idxRef.current + 1) % wordsRef.current.length;
                    phaseRef.current = 'typing';
                    timer = setTimeout(tick, holdEmpty);
                }
            }
        };
        timer = setTimeout(tick, typing);
        return () => {
            alive = false;
            clearTimeout(timer);
        };
    }, [typing, erasing, holdFull, holdEmpty]);

    return text;
};

const Home = () => {
    const [t] = useTranslation(['global']);

    const heroName = useTypewriter(['Facundo Bacigalupo.'], {
        typing: 95,
        erasing: 48,
        holdFull: 3200,
        holdEmpty: 300,
    });

    const roleCycle = useTypewriter(
        ['Software Developer', 'Fullstack Web', 'Mobile Developer'],
        { typing: 75, erasing: 40, holdFull: 3100, holdEmpty: 250 }
    );

    const splitAt = 'Facundo '.length;
    const heroWhite = heroName.slice(0, splitAt);
    const heroAccent = heroName.slice(splitAt);

    return (
        <main id="home" className="hero section">
            <div className="container hero-grid">
                <section className="hero-main">
                    <div className="hero-tag intro-up" style={{ animationDelay: '0.05s' }}>
                        <span className="dot dot--accent" />
                        <span>{t('home.tag')}</span>
                    </div>

                    <h1 className="hero-title intro-up" style={{ animationDelay: '0.15s' }} aria-label="Facundo Bacigalupo">
                        <span className="hero-title__plain">{heroWhite}</span>
                        <span className="hero-title__accent has-caret">{heroAccent}</span>
                    </h1>

                    <p className="hero-role intro-up" style={{ animationDelay: '0.28s' }} aria-label={t('home.role')}>
                        <span className="hero-role__text has-caret">{roleCycle}</span>
                    </p>

                    <p className="hero-text intro-up" style={{ animationDelay: '0.4s' }}>
                        {renderRichText(t('home.text'))}
                    </p>

                    <div className="hero-actions intro-up" style={{ animationDelay: '0.5s' }}>
                        <a
                            className="btn btn--primary"
                            href="https://wa.me/+5401127398858"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t('home.contact')}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M7 17 17 7" />
                                <path d="M8 7h9v9" />
                            </svg>
                        </a>
                        <a
                            className="btn btn--ghost"
                            href="#proyects"
                            onClick={(e) => {
                                e.preventDefault();
                                smoothScrollToElement(document.getElementById('proyects'), { duration: 950 });
                            }}
                        >
                            {t('home.viewProjects')}
                        </a>
                    </div>

                    <div className="hero-socials intro-up" style={{ animationDelay: '0.6s' }}>
                        <a href="https://github.com/FacundoMarcoBacigalupo" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <img src={GitHub} alt="" loading="lazy" />
                        </a>
                        <a href="https://www.linkedin.com/in/facundomarcobacigalupo/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <img src={Linkedin} alt="" loading="lazy" />
                        </a>
                        <a href="mailto:marcofacundolucas@gmail.com" aria-label="Email">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <path d="m3 7 9 6 9-6" />
                            </svg>
                        </a>
                    </div>
                </section>

                <aside className="identity-card intro-up" style={{ animationDelay: '0.35s' }} aria-label={t('home.identity')}>
                    <div className="identity-header">
                        <span className="mono mute">// {t('home.identity')}</span>
                        <span className="live">
                            <span className="dot dot--live" />
                            {t('home.live')}
                        </span>
                    </div>

                    <dl className="identity-list">
                        <div className="identity-row">
                            <dt>{t('home.id.name')}</dt>
                            <dd>Facundo Marco Bacigalupo</dd>
                        </div>
                        <div className="identity-row">
                            <dt>{t('home.id.role')}</dt>
                            <dd>Software Developer</dd>
                        </div>
                        <div className="identity-row">
                            <dt>{t('home.id.focus')}</dt>
                            <dd>Fullstack Web · Mobile Developer</dd>
                        </div>
                        <div className="identity-row">
                            <dt>{t('home.id.location')}</dt>
                            <dd>Buenos Aires, AR</dd>
                        </div>
                        <div className="identity-row">
                            <dt>{t('home.id.status')}</dt>
                            <dd className="status-on">{t('home.id.statusValue')}</dd>
                        </div>
                    </dl>
                </aside>
            </div>
        </main>
    );
};

export default Home;
