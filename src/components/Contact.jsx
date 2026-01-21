import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Client-side only - opens email client
        const mailtoLink = `mailto:Ehteshammd089@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Connect!</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="contact-details">
                            <a href="mailto:Ehteshammd089@gmail.com" className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <div>
                                    <h4>Email</h4>
                                    <p>Ehteshammd089@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+919700404029" className="contact-item">
                                <FaPhone className="contact-icon" />
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 9700404029</p>
                                </div>
                            </a>

                            <a href="https://github.com/MdEhtesham2004" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <FaGithub className="contact-icon" />
                                <div>
                                    <h4>GitHub</h4>
                                    <p>@MdEhtesham2004</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/mohammed-ehtesham-94a043248" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <FaLinkedin className="contact-icon" />
                                <div>
                                    <h4>LinkedIn</h4>
                                    <p>mohammed-ehtesham</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <h3>Send a Message</h3>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            <FaPaperPlane /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
