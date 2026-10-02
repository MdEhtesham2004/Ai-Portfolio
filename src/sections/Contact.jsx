import React, { useRef, useState } from 'react';
import { gsap, useMotion, scrollToTarget } from '../lib/motion';
import './Contact.css';

const EMAIL = 'Ehteshammd089@gmail.com';
const PHONE = '+91 9700404029';

const LINKS = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-ehtesham-94a043248' },
    { label: 'GitHub', href: 'https://github.com/MdEhtesham2004' }
];

const NAV = [
    { label: 'Home', href: '#top' },
    { label: 'Trainings', href: '#trainings' },
    { label: 'Products', href: '#products' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' }
];

const Contact = () => {
    const ref = useRef(null);
    const [copied, setCopied] = useState(null);

    const copy = async (value) => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(value);
            setTimeout(() => setCopied(null), 1600);
        } catch {
            window.location.href = value.includes('@') ? `mailto:${value}` : `tel:${value.replace(/\s/g, '')}`;
        }
    };

    const go = (e, href) => {
        e.preventDefault();
        scrollToTarget(href);
    };

    useMotion(ref, () => {
        gsap.from('.wordmark span', {
            yPercent: 100, duration: 1.2, ease: 'expo.out', stagger: 0.05,
            scrollTrigger: { trigger: '.wordmark', start: 'top 95%' }
        });
        gsap.from('.cta-title > span', {
            yPercent: 100, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: 0.1,
            scrollTrigger: { trigger: '.cta', start: 'top 60%' }
        });
    });

    return (
        <footer id="contact" className="contact" ref={ref}>
            <div className="cta">
                <div className="cta-glow" aria-hidden="true" />
                <div className="cta-content">
                    <h2 className="cta-title"><span>Let's build something</span> <span>together.</span></h2>
                    <div className="cta-buttons">
                        <a className="btn btn-solid magnetic" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Hello from your portfolio')}`}>
                            Let's talk →
                        </a>
                        <a className="btn btn-ghost magnetic" href="#trainings" onClick={(e) => go(e, '#trainings')}>See my trainings</a>
                    </div>
                </div>
            </div>

            <div className="container contact-details">
                {[EMAIL, PHONE].map((value) => (
                    <div key={value} className="contact-row">
                        <a href={value === EMAIL ? `mailto:${EMAIL}` : `tel:${PHONE.replace(/\s/g, '')}`}>{value}</a>
                        <button className="copy-btn" onClick={() => copy(value)} aria-live="polite">
                            {copied === value ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                ))}
            </div>

            <div className="container footer">
                <nav className="footer-col" aria-label="Footer">
                    {NAV.map((item) => (
                        <a key={item.href} href={item.href} onClick={(e) => go(e, item.href)}>{item.label}</a>
                    ))}
                </nav>
                <div className="footer-col">
                    {LINKS.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>
                    ))}
                </div>
                <div className="footer-col footer-end">
                    <button onClick={() => scrollToTarget('#top')}>Back to top ↑</button>
                    <span className="muted">© {new Date().getFullYear()} Mohammed Ehtesham</span>
                </div>
            </div>

            <div className="wordmark" aria-hidden="true">
                {'EHTESHAM'.split('').map((ch, i) => <span key={i}>{ch}</span>)}
            </div>
        </footer>
    );
};

export default Contact;
