import React from 'react';
import { FaCertificate, FaTrophy } from 'react-icons/fa';
import { certifications, achievements } from '../data/certifications';
import './Certifications.css';

const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <h2 className="section-title">Certifications & Achievements</h2>

                <div className="cert-achievement-grid">
                    <div className="cert-section">
                        <h3 className="subsection-title">
                            <FaCertificate /> Certifications
                        </h3>
                        <div className="cert-grid">
                            {certifications.map((cert) => (
                                <div key={cert.id} className="cert-card glass-card">
                                    <h4>{cert.title}</h4>
                                    <p className="issuer">{cert.issuer}</p>
                                    <p className="description">{cert.description}</p>
                                    <span className="date">{cert.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="achievement-section">
                        <h3 className="subsection-title">
                            <FaTrophy /> Achievements & Awards
                        </h3>
                        <div className="achievement-grid">
                            {achievements.map((achievement) => (
                                <div key={achievement.id} className="achievement-card glass-card">
                                    <div className="achievement-badge">
                                        <FaTrophy />
                                    </div>
                                    <h4>{achievement.title}</h4>
                                    <p className="organization">{achievement.organization}</p>
                                    <p className="description">{achievement.description}</p>
                                    <div className="achievement-footer">
                                        <span className="award-badge">{achievement.award}</span>
                                        <span className="date">{achievement.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
