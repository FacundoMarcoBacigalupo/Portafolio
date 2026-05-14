import React, { Fragment, useEffect } from 'react';
import BackgroundField from './components/BackgroundField/BackgroundField.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import Knows from './components/Knows/Knows.jsx';
import Proyects from './components/Proyects/Proyects.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
    useEffect(() => {
        const reduce =
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduce || !('IntersectionObserver' in window)) {
            document.querySelectorAll('[data-reveal]').forEach((el) => {
                el.classList.add('is-revealed');
            });
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        el.classList.add('is-revealed');
                        // Stagger uses inline transitionDelay; clear it after the reveal
                        // ends so hover transitions use the global delay, not the stagger.
                        if (el.style.transitionDelay) {
                            setTimeout(() => {
                                el.style.transitionDelay = '';
                            }, 1400);
                        }
                        io.unobserve(el);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        );

        const observeAll = () => {
            document
                .querySelectorAll('[data-reveal]:not(.is-revealed)')
                .forEach((el) => io.observe(el));
        };

        observeAll();
        const mo = new MutationObserver(observeAll);
        mo.observe(document.body, { childList: true, subtree: true });

        return () => {
            io.disconnect();
            mo.disconnect();
        };
    }, []);

    return (
        <Fragment>
            <BackgroundField />
            <NavBar />
            <Home />
            <Knows />
            <Proyects />
            <Contact />
        </Fragment>
    );
}

export default App;
