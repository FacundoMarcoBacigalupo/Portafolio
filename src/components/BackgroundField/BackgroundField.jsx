import React, { useEffect, useRef } from 'react';
import './BackgroundField.css';

const BackgroundField = () => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reduce =
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) return;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const lowPower =
            (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
            isMobile;

        const range = isMobile ? 14 : 38;
        const lerp = lowPower ? 0.06 : 0.09;

        const target = { x: 0, y: 0 };
        const current = { x: 0, y: 0 };
        let raf = 0;
        let running = false;
        let lastMove = 0;
        const moveThrottle = lowPower ? 32 : 8;

        const setTarget = (clientX, clientY) => {
            const now = performance.now();
            if (now - lastMove < moveThrottle) return;
            lastMove = now;

            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const dx = (clientX - cx) / Math.max(cx, 1);
            const dy = (clientY - cy) / Math.max(cy, 1);
            target.x = -dx * range;
            target.y = -dy * range;
            if (!running) {
                running = true;
                raf = requestAnimationFrame(tick);
            }
        };

        const tick = () => {
            current.x += (target.x - current.x) * lerp;
            current.y += (target.y - current.y) * lerp;
            el.style.transform = `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0)`;

            if (
                Math.abs(target.x - current.x) > 0.15 ||
                Math.abs(target.y - current.y) > 0.15
            ) {
                raf = requestAnimationFrame(tick);
            } else {
                running = false;
            }
        };

        const onMouseMove = (e) => setTarget(e.clientX, e.clientY);
        const onTouchMove = (e) => {
            const t = e.touches[0];
            if (t) setTarget(t.clientX, t.clientY);
        };
        const onTouchStart = (e) => {
            const t = e.touches[0];
            if (t) setTarget(t.clientX, t.clientY);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchstart', onTouchStart, { passive: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchstart', onTouchStart);
            cancelAnimationFrame(raf);
        };
    }, []);

    return <div ref={ref} className="bg-field" aria-hidden="true" />;
};

export default BackgroundField;
