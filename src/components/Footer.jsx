import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-main">
                    <div className="footer-brand">
                        <h3 className="gradient-text">Mohammed Ehtesham</h3>
                        <p>Python Developer & AI/ML Engineer</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Connect</h4>
                            <div className="footer-social">
                                <a href="https://github.com/MdEhtesham2004" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/mohammed-ehtesham-94a043248" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                                    <FaLinkedin />
                                </a>
                                <a href="mailto:Ehteshammd089@gmail.com" className="footer-social-icon">
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Mohammed Ehtesham. All rights reserved.</p>
                    <p className="footer-love">
                        Made with <FaHeart className="heart-icon" /> using React & Vite
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
