import React from 'react';
import { FaBriefcase, FaAward } from 'react-icons/fa';
import { experience } from '../data/experience';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text glass-card">
                        <h3>Python Developer & AI/ML Trainer</h3>
                        <p>
                            I'm a passionate Python Developer and AI/ML Engineer with professional experience at <strong>Aim Technologies</strong>,
                            where I conducted hands-on training sessions and developed scalable web applications for international clients.
                            Today I deliver workshops and faculty development programmes on AI, Prompt Engineering, Python for Finance and
                            DSA at institutions including <strong>Malla Reddy University</strong> and <strong>Kaveri University</strong>.
                        </p>
                        <p>
                            I have the unique privilege of being the <strong className="gradient-text">youngest member of the Python R&D team</strong> at
                            AIMSCS, University of Hyderabad, collaborating with 12 PhD experts in Machine Learning, Data Science, NLP,
                            IoT, and Bioinformatics.
                        </p>
                        <p>
                            My expertise spans across Python development, Machine Learning, Deep Learning, Data Analysis, and Web Development.
                            I'm particularly passionate about building intelligent systems that solve real-world problems and sharing my
                            knowledge with aspiring developers.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <FaBriefcase className="highlight-icon" />
                                <div>
                                    <h4>Professional Experience</h4>
                                    <p>{experience.length} diverse roles spanning development, training, and research</p>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <FaAward className="highlight-icon" />
                                <div>
                                    <h4>Award Winner</h4>
                                    <p>Best Application Award, Academic Topper 2024, and National Level IT Exhibition winner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
