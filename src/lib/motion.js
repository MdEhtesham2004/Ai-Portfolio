import { useLayoutEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MOTION_OK = '(prefers-reduced-motion: no-preference)';
let lenis = null;

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// The intro loader plays once per browser session, and never for reduced-motion users.
const INTRO_KEY = 'intro-played';
export const INTRO_DURATION = 2.1;
export const playIntro = (() => {
    if (prefersReducedMotion()) return false;
    try {
        return !sessionStorage.getItem(INTRO_KEY);
    } catch {
        return true;
    }
})();

export function markIntroPlayed() {
    try {
        sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
        // Storage unavailable (private mode): the intro just plays again next visit.
    }
}

// Buttons marked `.magnetic` lean toward the pointer. Mouse/trackpad only.
export function initMagnetic() {
    if (prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return () => {};
    let active = null;

    const release = () => {
        if (active) gsap.to(active, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
        active = null;
    };
    const onMove = (e) => {
        const el = e.target.closest?.('.magnetic');
        if (el !== active) release();
        if (!el) return;
        active = el;
        const r = el.getBoundingClientRect();
        gsap.to(el, {
            x: (e.clientX - (r.left + r.width / 2)) * 0.3,
            y: (e.clientY - (r.top + r.height / 2)) * 0.3,
            duration: 0.4,
            ease: 'power3.out'
        });
    };

    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', release);
    return () => {
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerleave', release);
    };
}

// Smooth scrolling, kept in sync with ScrollTrigger. Skipped entirely for reduced-motion users.
export function initSmoothScroll() {
    if (lenis || prefersReducedMotion()) return () => {};

    lenis = new Lenis();
    if (scrollLocked) lenis.stop();
    lenis.on('scroll', ScrollTrigger.update);
    // Keep Lenis's scroll limit in step with layout changes (fonts, archive filter, etc.).
    const resize = () => lenis?.resize();
    ScrollTrigger.addEventListener('refresh', resize);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    // Web fonts shift layout after first paint; re-measure trigger positions once they're in.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
        ScrollTrigger.removeEventListener('refresh', resize);
        gsap.ticker.remove(tick);
        lenis.destroy();
        lenis = null;
    };
}

// Lenis ignores `overflow: hidden`, so locking has to pause it too (and be remembered if Lenis starts later).
let scrollLocked = false;
export function setScrollLocked(locked) {
    scrollLocked = locked;
    document.documentElement.style.overflow = locked ? 'hidden' : '';
    if (lenis) {
        if (locked) lenis.stop();
        else lenis.start();
    }
}

export function scrollToTarget(href) {
    const target = href === '#top' ? 0 : document.querySelector(href);
    if (target === null) return;
    if (lenis) {
        lenis.scrollTo(target);
    } else if (target === 0) {
        window.scrollTo({ top: 0 });
    } else {
        target.scrollIntoView();
    }
}

// Runs GSAP setup scoped to `scope` only when motion is allowed; everything is reverted on unmount.
export function useMotion(scope, setup) {
    useLayoutEffect(() => {
        const mm = gsap.matchMedia(scope);
        mm.add(MOTION_OK, setup);
        return () => mm.revert();
        // Setup runs once per mount by design.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export { gsap, ScrollTrigger };
