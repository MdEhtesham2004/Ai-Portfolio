import React, { useRef } from 'react';
import { gsap, useMotion } from '../lib/motion';

// Large statement whose words light up one by one as it scrolls through the viewport.
const RevealText = ({ text, as = 'p', className = '' }) => {
    const ref = useRef(null);
    const Tag = as;

    useMotion(ref, () => {
        gsap.fromTo('.reveal-word',
            { opacity: 0.3 },
            {
                opacity: 1,
                ease: 'none',
                stagger: 0.1,
                scrollTrigger: { trigger: ref.current, start: 'top 80%', end: 'bottom 45%', scrub: true }
            }
        );
    });

    return (
        <Tag ref={ref} className={`reveal-text ${className}`}>
            {text.split(' ').map((word, i) => (
                <span key={i} className="reveal-word">{word} </span>
            ))}
        </Tag>
    );
};

export default RevealText;
