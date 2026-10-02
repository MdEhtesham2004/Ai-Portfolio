import React, { useRef } from 'react';
import { gsap, useMotion, playIntro, INTRO_DURATION } from '../lib/motion';
import { trainings } from '../data/trainings';
import './Hero.css';

const EMAIL = 'Ehteshammd089@gmail.com';
// Trial: background portrait behind the headline. Set to false to go back to the glow-only hero.
const SHOW_PORTRAIT = true;

const Hero = () => {
    const ref = useRef(null);

    useMotion(ref, () => {
        // Start as the loader curtain lifts (or right away when there's no intro).
        const start = playIntro ? INTRO_DURATION - 0.45 : 0;
        gsap.from('.hero-line-inner', { yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.12, delay: start + 0.15 });
        gsap.from('.hero-tile', { opacity: 0, scale: 0.8, duration: 1, ease: 'expo.out', stagger: 0.1, delay: start + 0.6 });
        gsap.from('.hero-intro, .hero-corner', { opacity: 0, y: 16, duration: 1, ease: 'power3.out', stagger: 0.06, delay: start + 0.7 });
        gsap.from('.hero-glow', { opacity: 0, scale: 0.8, duration: 2, ease: 'expo.out', delay: start });
        gsap.to('.hero-glow', {
            yPercent: 20, opacity: 0.3, ease: 'none',
            scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true }
        });
        if (SHOW_PORTRAIT) {
            gsap.from('.hero-portrait', { scale: 1.12, opacity: 0, duration: 1.8, ease: 'expo.out', delay: start });
            gsap.to('.hero-portrait', {
                yPercent: 12, opacity: 0.2, ease: 'none',
                scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true }
            });
        }
    });

    return (
        <header id="top" className="hero" ref={ref}>
            <div className="hero-glow" aria-hidden="true" />
            {SHOW_PORTRAIT && (
                <>
                    <img className="hero-portrait" src="/media/portrait/hero.webp" alt="" aria-hidden="true" />
                    <div className="hero-shade" aria-hidden="true" />
                </>
            )}

            <div className="hero-top container">
                <a href="#top" className="hero-logo hero-corner" aria-label="Mohammed Ehtesham, home">
                    <span>Mohammed</span>
                    <span>Ehtesham</span>
                </a>
                <a href={`mailto:${EMAIL}`} className="hero-corner hero-email">{EMAIL}</a>
            </div>

            <div className="hero-body container">
                <div className="hero-headline">
                    <h1 className="hero-title">
                        <span className="hero-line">
                            <span className="hero-line-inner">AI Systems</span>
                            <span className="hero-tile" aria-hidden="true"><strong>1000+</strong><small>Students trained</small></span>
                            <span className="hero-line-inner">&amp;</span>
                        </span>
                        <span className="hero-line hero-line-right">
                            <span className="hero-line-inner">Tech</span>
                        </span>
                        <span className="hero-line hero-line-indent">
                            <span className="hero-line-inner">Training</span>
                            <span className="hero-tile" aria-hidden="true"><strong>{trainings.length}</strong><small>Universities</small></span>
                            <span className="hero-line-inner hero-arrow" aria-hidden="true">↓</span>
                        </span>
                    </h1>
                    <p className="hero-intro">
                        Hey, I'm Ehtesham. I train students and faculty at universities across Hyderabad, and build AI agents, automations and data products.
                    </p>
                </div>
                <p className="hero-stats-mobile hero-corner">
                    <span>1000+ students trained</span>
                    <span>{trainings.length} universities</span>
                </p>
            </div>

            <div className="hero-bottom container">
                <span className="hero-corner">Hyderabad, India</span>
                <span className="hero-corner">Scroll</span>
            </div>
        </header>
    );
};

export default Hero;
