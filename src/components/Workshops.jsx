import React from 'react';
import { FaChalkboardTeacher, FaUsers, FaCalendar, FaClock } from 'react-icons/fa';
import { workshops } from '../data/workshops';
import './Workshops.css';

const Workshops = () => {
    return (
        <section id="workshops" className="section">
            <div className="container">
                <h2 className="section-title">Workshops & Trainings</h2>

                <div className="workshops-grid">
                    {workshops.map((workshop) => (
                        <div key={workshop.id} className="workshop-card glass-card">
                            <div className="workshop-media">
                                {workshop.media.map((item) => (
                                    item.type === 'video' ? (
                                        <video key={item.src} src={item.src} poster={item.poster} controls preload="metadata" aria-label={item.alt} />
                                    ) : (
                                        <img key={item.src} src={item.src} alt={item.alt} loading="lazy" />
                                    )
                                ))}
                            </div>

                            <div className="workshop-body">
                                <span className="workshop-type">
                                    <FaChalkboardTeacher /> {workshop.type}
                                </span>
                                <h3>{workshop.title}</h3>
                                <p className="workshop-institution">{workshop.institution}</p>

                                <div className="workshop-meta">
                                    <span><FaUsers /> {workshop.audience}</span>
                                    {workshop.duration && <span><FaClock /> {workshop.duration}</span>}
                                    {workshop.date && <span><FaCalendar /> {workshop.date}</span>}
                                </div>

                                <p className="workshop-description">{workshop.description}</p>

                                <div className="workshop-topics">
                                    {workshop.topics.map((topic) => (
                                        <span key={topic} className="tech-tag">{topic}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workshops;
