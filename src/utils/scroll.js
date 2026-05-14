const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const smoothScrollTo = (targetY, duration = 950) => {
    if (typeof window === 'undefined') return;

    const reduce =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const clampedY = Math.max(
        0,
        Math.min(
            targetY,
            document.documentElement.scrollHeight - window.innerHeight
        )
    );

    if (reduce) {
        window.scrollTo(0, clampedY);
        return;
    }

    const startY = window.scrollY;
    const distance = clampedY - startY;
    if (Math.abs(distance) < 2) return;

    const start = performance.now();
    let cancelled = false;

    const onUserInterrupt = () => {
        cancelled = true;
    };

    window.addEventListener('wheel', onUserInterrupt, { passive: true, once: true });
    window.addEventListener('touchstart', onUserInterrupt, { passive: true, once: true });
    window.addEventListener('keydown', onUserInterrupt, { once: true });

    const step = (now) => {
        if (cancelled) return cleanup();
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            cleanup();
        }
    };

    const cleanup = () => {
        window.removeEventListener('wheel', onUserInterrupt);
        window.removeEventListener('touchstart', onUserInterrupt);
        window.removeEventListener('keydown', onUserInterrupt);
    };

    requestAnimationFrame(step);
};

export const smoothScrollToElement = (el, { offset, duration = 950 } = {}) => {
    if (!el) return;
    const navEl = document.querySelector('.nav-shell');
    const navOffset = offset ?? (navEl ? navEl.offsetHeight + 16 : 80);
    const rect = el.getBoundingClientRect();
    const targetY = rect.top + window.scrollY - navOffset;
    smoothScrollTo(targetY, duration);
};
