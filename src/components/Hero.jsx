import React from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown } from 'react-icons/fa';
import { projects } from '../data/projects';
import { experience } from '../data/experience';
import { workshops } from '../data/workshops';
import './Hero.css';

const Hero = () => {
    const handleDownloadResume = () => {
        // Try to download theresume PDF
        const link = document.createElement('a');
        link.href = '/assets/Mohammed_Ehtesham_Resume.pdf';
        link.download = 'Mohammed_Ehtesham_Resume.pdf';
        link.style.display = 'none';

        // Add error handler - if file doesn't exist, open LinkedIn
        link.onerror = () => {
            window.open('https://www.linkedin.com/in/mohammed-ehtesham-94a043248', '_blank');
        };

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <p className="hero-greeting">Hi there! 👋 I'm</p>
                    <h1 className="hero-name">
                        Mohammed <span className="gradient-text">Ehtesham</span>
                    </h1>
                    <h2 className="hero-title">
                        Python Developer & <span className="gradient-text">AI/ML Engineer</span>
                    </h2>
                    <p className="hero-description">
                        Passionate about building intelligent systems and training the next generation of developers.
                        Currently delivering AI, Python and DSA workshops and faculty development programmes at universities
                        and engineering colleges. Previously Python Developer and AI/ML Trainer at Aim Technologies, collaborating
                        with the Python R&D team at University of Hyderabad.
                    </p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3 className="gradient-text">{projects.length}+</h3>
                            <p>Projects</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="gradient-text">{experience.length}</h3>
                            <p>Work Experiences</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="gradient-text">{workshops.length}</h3>
                            <p>Workshops & FDPs</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="gradient-text">300+</h3>
                            <p>Students Trained</p>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={scrollToProjects}>
                            View Projects <FaArrowDown />
                        </button>
                        <button className="btn btn-outline" onClick={handleDownloadResume}>
                            <FaDownload /> Download Resume
                        </button>
                        <button className="btn btn-outline" onClick={scrollToContact}>
                            Contact Me
                        </button>
                    </div>

                    <div className="hero-social">
                        <a href="https://github.com/MdEhtesham2004" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/mohammed-ehtesham-94a043248" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse"></div>
            </div>
        </section>
    );
};

export default Hero;
