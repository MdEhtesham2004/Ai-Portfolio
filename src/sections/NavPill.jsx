import React, { useEffect, useState } from 'react';
import { scrollToTarget } from '../lib/motion';
import './NavPill.css';

const LINKS = [
    { label: 'Trainings', href: '#trainings' },
    { label: 'Products', href: '#products' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' }
];

const NavPill = () => {
    const [active, setActive] = useState(null);

    // Highlight whichever section crosses the middle of the viewport.
    useEffect(() => {
        const ids = [...LINKS.map((l) => l.href), '#contact'];
        const sections = ids.map((id) => document.querySelector(id)).filter(Boolean);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(`#${entry.target.id}`);
            });
        }, { rootMargin: '-50% 0px -50% 0px' });
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const go = (e, href) => {
        e.preventDefault();
        scrollToTarget(href);
    };

    return (
        <nav className="nav-pill" aria-label="Main">
            {LINKS.map((link) => (
                <a key={link.href} className={`nav-pill-link ${active === link.href ? 'active' : ''}`} href={link.href}
                    aria-current={active === link.href ? 'true' : undefined} onClick={(e) => go(e, link.href)}>
                    {link.label}
                </a>
            ))}
            <a className="nav-pill-cta magnetic" href="#contact" onClick={(e) => go(e, '#contact')}>
                <span className="nav-pill-mark" aria-hidden="true">ME</span> Let's talk
            </a>
        </nav>
    );
};

export default NavPill;
