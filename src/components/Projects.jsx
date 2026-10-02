import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'AI Agents', 'Automation', 'Full-Stack Development', 'Deep Learning', 'Machine Learning', 'Data Analysis', 'Database', 'Web Development', 'Python'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="project-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={`project-card glass-card ${project.featured ? 'featured' : ''}`}>
                            {project.featured && <span className="featured-badge">Featured</span>}

                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <span className="project-category">{project.category}</span>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub /> GitHub
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
