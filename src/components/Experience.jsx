import React, { useState } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { experience } from '../data/experience';
import './Experience.css';

const Experience = () => {
    const [expandedId, setExpandedId] = useState(null);

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>

                <div className="experience-timeline">
                    {experience.map((job) => (
                        <div key={job.id} className="experience-item glass-card">
                            <div className="experience-header" onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}>
                                <div className="experience-icon">
                                    <FaBriefcase />
                                </div>
                                <div className="experience-title-section">
                                    <h3>{job.role}</h3>
                                    <p className="company-name">{job.company}</p>
                                    <div className="experience-meta">
                                        <span><FaMapMarkerAlt /> {job.location}</span>
                                        <span><FaCalendar /> {job.period}</span>
                                        {job.current && <span className="current-badge">Current</span>}
                                    </div>
                                </div>
                            </div>

                            <div className={`experience-details ${expandedId === job.id ? 'expanded' : ''}`}>
                                <ul>
                                    {job.responsibilities.map((resp, index) => (
                                        <li key={index}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
