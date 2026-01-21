import React from 'react';
import { FaGraduationCap, FaCalendar } from 'react-icons/fa';
import { education } from '../data/education';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className="education-timeline">
                    {education.map((edu) => (
                        <div key={edu.id} className="education-card glass-card">
                            <div className="education-icon">
                                <FaGraduationCap />
                            </div>
                            <div className="education-content">
                                <h3>{edu.degree}</h3>
                                <p className="institution">{edu.institution}</p>
                                <div className="education-meta">
                                    <span>{edu.location}</span>
                                    <span><FaCalendar /> {edu.period}</span>
                                    {edu.current && <span className="current-badge">Current</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
