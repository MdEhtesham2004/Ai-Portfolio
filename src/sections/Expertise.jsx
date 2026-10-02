import React, { useRef } from 'react';
import { gsap, useMotion } from '../lib/motion';
import RevealText from '../components/RevealText';
import { expertise } from '../data/skills';
import './Expertise.css';

const Expertise = () => {
    const ref = useRef(null);

    useMotion(ref, () => {
        gsap.from('.expertise-row', {
            opacity: 0, y: 40, duration: 1, ease: 'power3.out', stagger: 0.08,
            scrollTrigger: { trigger: '.expertise-list', start: 'top 80%' }
        });
    });

    return (
        <section id="expertise" className="expertise section" ref={ref}>
            <div className="container">
                <div className="expertise-intro">
                    <span className="label">What I'm good at</span>
                    <RevealText as="h2" text="Data, AI and the Python backends that put them to work, from the first query to an automated product." />
                </div>

                <ol className="expertise-list">
                    {expertise.map((area, i) => (
                        <li key={area.title} className="expertise-row">
                            <span className="expertise-index">{String(i + 1).padStart(2, '0')}</span>
                            <div className="expertise-main">
                                <h3>{area.title}</h3>
                                <p>{area.line}</p>
                            </div>
                            <ul className="expertise-tools">
                                {area.tools.map((tool) => <li key={tool}>{tool}</li>)}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Expertise;
