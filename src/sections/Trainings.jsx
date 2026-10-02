import React, { useRef } from 'react';
import { gsap, useMotion } from '../lib/motion';
import { trainings } from '../data/trainings';
import './Trainings.css';

const programCount = trainings.reduce((n, u) => n + u.programs.length, 0);

const Media = ({ item }) => (
    item.type === 'video' ? (
        <video className={item.crop ? 'is-cropped' : ''} src={item.src} poster={item.poster}
            controls preload="none" playsInline aria-label={item.alt} />
    ) : (
        <img src={item.src} alt={item.alt} loading="lazy" style={item.focus ? { objectPosition: item.focus } : undefined} />
    )
);

const Trainings = () => {
    const ref = useRef(null);

    useMotion(ref, () => {
        gsap.from('.trainings-title span', {
            yPercent: 100, duration: 1.2, ease: 'expo.out', stagger: 0.08,
            scrollTrigger: { trigger: '.trainings-title', start: 'top 85%' }
        });
        gsap.utils.toArray('.program').forEach((program) => {
            gsap.from(program, { opacity: 0, y: 60, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: program, start: 'top 85%' } });
        });
    });

    return (
        <section id="trainings" className="trainings section" ref={ref} aria-labelledby="trainings-title">
            <div className="container">
                <div className="trainings-head">
                    <span className="label">Featured trainings</span>
                    <h2 id="trainings-title" className="trainings-title">
                        <span>Teaching at</span> <span>top universities</span>
                    </h2>
                    <p className="trainings-summary">
                        <strong>1000+</strong> students trained through <strong>{programCount}</strong> programmes
                        at <strong>{trainings.length}</strong> universities.
                    </p>
                </div>

                {trainings.map((uni, i) => (
                    <div key={uni.id} className="uni" id={`training-${uni.id}`}>
                        <header className="uni-head">
                            <span className="uni-index">{String(i + 1).padStart(2, '0')}</span>
                            <h3 className="uni-name">{uni.university}</h3>
                            <p className="uni-meta">{uni.shortName} · {uni.location} · {uni.programs.length} {uni.programs.length === 1 ? 'programme' : 'programmes'}</p>
                        </header>

                        <div className="uni-programs">
                            {uni.programs.map((program) => (
                                <article key={program.id} className="program">
                                    <div className={`program-media count-${program.media.length}`}>
                                        {program.media.map((item) => <Media key={item.src} item={item} />)}
                                    </div>
                                    <div className="program-body">
                                        <p className="program-role">{program.role}</p>
                                        <h4 className="program-title">{program.title}</h4>
                                        <p className="program-institution">{program.institution}</p>
                                        <ul className="program-meta">
                                            {program.meta.map((m) => <li key={m}>{m}</li>)}
                                        </ul>
                                        <p className="program-desc">{program.description}</p>
                                        {program.topics && (
                                            <ul className="program-topics">
                                                {program.topics.map((t) => <li key={t}>{t}</li>)}
                                            </ul>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Trainings;
