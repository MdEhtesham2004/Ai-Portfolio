import React, { useRef } from 'react';
import { gsap, useMotion } from '../lib/motion';
import RevealText from '../components/RevealText';
import { experience } from '../data/experience';
import { education } from '../data/education';
import { achievements, certifications } from '../data/certifications';
import './About.css';

const photoAwards = achievements.filter((a) => a.image);
const otherAwards = achievements.filter((a) => !a.image);
const degrees = education.filter((e) => /Bachelor|Master/.test(e.degree));

const About = () => {
    const ref = useRef(null);

    useMotion(ref, () => {
        gsap.utils.toArray('.about-block').forEach((block) => {
            gsap.from(block, { opacity: 0, y: 50, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: block, start: 'top 82%' } });
        });
    });

    return (
        <section id="about" className="about section" ref={ref}>
            <div className="container">
                <div className="about-intro">
                    <span className="label">About</span>
                    <RevealText as="h2" text="I'm Ehtesham, an AI/ML engineer and technical trainer who turns complex ideas into working systems, and into lessons people remember." />
                </div>

                <div className="about-start about-block">
                    <span className="label">My start</span>
                    <div className="about-story">
                        <p>
                            I became the youngest member of the Python R&amp;D team at AIMSCS, University of Hyderabad, working alongside
                            12 PhD researchers across Machine Learning, Data Science, NLP, IoT and Bioinformatics.
                        </p>
                        <p>
                            At Aim Technologies I built Flask and Django applications for international clients while running hands-on
                            AI/ML training. Today I train students and faculty at universities across Hyderabad, and build AI agents,
                            automations and data products, two of which are now in the market.
                        </p>
                    </div>
                </div>

                <div className="about-grid about-block">
                    <span className="label">Experience</span>
                    <ul className="about-list">
                        {experience.map((job) => (
                            <li key={job.id}>
                                <details className="xp">
                                    <summary>
                                        <span className="xp-period muted">{job.period}</span>
                                        <span className="xp-role">
                                            {job.role}
                                            {job.current && <em className="xp-now">Now</em>}
                                        </span>
                                        <span className="xp-company muted">{job.company}, {job.location}</span>
                                        <span className="xp-toggle" aria-hidden="true">+</span>
                                    </summary>
                                    <ul className="xp-points">
                                        {job.responsibilities.map((point) => <li key={point}>{point}</li>)}
                                    </ul>
                                </details>
                            </li>
                        ))}
                    </ul>
                </div>

                <div id="achievements" className="about-grid about-block">
                    <span className="label">Achievements</span>
                    <div>
                        <div className="awards">
                            {photoAwards.map((a) => (
                                <article key={a.id} className="award">
                                    <div className="award-media"><img src={a.image} alt={a.title} loading="lazy" /></div>
                                    <span className="award-badge">{a.award}</span>
                                    <h3>{a.title}</h3>
                                    <p className="muted">{a.organization} · {a.date}</p>
                                </article>
                            ))}
                        </div>
                        <ul className="about-notes">
                            {otherAwards.map((a) => (
                                <li key={a.id}><strong>{a.title}</strong><span className="muted">{a.organization} · {a.date}</span></li>
                            ))}
                            {certifications.map((c) => (
                                <li key={c.id}><strong>{c.title}</strong><span className="muted">{c.issuer} · {c.date}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="about-grid about-block">
                    <span className="label">Education</span>
                    <ul className="about-list">
                        {degrees.map((edu) => (
                            <li key={edu.id} className="edu">
                                <span className="xp-period muted">{edu.period}</span>
                                <span className="xp-role">{edu.degree}</span>
                                <span className="xp-company muted">{edu.institution}, {edu.location}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="about-cta about-block">
                    <p>Open to AI/ML engineering roles, freelance builds and training engagements.</p>
                    <a className="btn btn-solid magnetic" href="/assets/Mohammed_Ehtesham_Resume.pdf" download>Download resume</a>
                </div>
            </div>
        </section>
    );
};

export default About;
