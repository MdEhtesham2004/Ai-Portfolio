import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap, playIntro, markIntroPlayed, setScrollLocked, INTRO_DURATION } from '../lib/motion';
import './Loader.css';

// Full-screen intro: name rises in while a counter runs to 100, then the curtain lifts.
const Loader = () => {
    const ref = useRef(null);
    const countRef = useRef(null);
    const [done, setDone] = useState(!playIntro);

    useLayoutEffect(() => {
        if (done) return undefined;
        setScrollLocked(true);
        const counter = { value: 0 };
        const ctx = gsap.context(() => {
            gsap.timeline({
                onComplete: () => {
                    markIntroPlayed();
                    setScrollLocked(false);
                    setDone(true);
                }
            })
                .from('.loader-word span', { yPercent: 110, duration: 0.9, ease: 'expo.out', stagger: 0.04 }, 0)
                .to(counter, {
                    value: 100, duration: INTRO_DURATION - 0.8, ease: 'power2.inOut',
                    // Guarded: ctx.revert() on unmount re-renders this tween after the node is gone.
                    onUpdate: () => {
                        if (countRef.current) countRef.current.textContent = String(Math.round(counter.value)).padStart(3, '0');
                    }
                }, 0)
                .to('.loader-bar i', { scaleX: 1, duration: INTRO_DURATION - 0.8, ease: 'power2.inOut' }, 0)
                .to('.loader-word span', { yPercent: -110, duration: 0.6, ease: 'expo.in', stagger: 0.02 }, INTRO_DURATION - 0.9)
                .to(ref.current, { yPercent: -100, duration: 0.8, ease: 'expo.inOut' }, INTRO_DURATION - 0.6);
        }, ref);
        return () => {
            ctx.revert();
            setScrollLocked(false);
        };
    }, [done]);

    if (done) return null;

    return (
        <div className="loader" ref={ref} aria-hidden="true">
            <div className="loader-word">
                {'EHTESHAM'.split('').map((ch, i) => <span key={i}>{ch}</span>)}
            </div>
            <div className="loader-foot">
                <span>AI systems &amp; tech training</span>
                <span className="loader-bar"><i /></span>
                <span ref={countRef}>000</span>
            </div>
        </div>
    );
};

export default Loader;
