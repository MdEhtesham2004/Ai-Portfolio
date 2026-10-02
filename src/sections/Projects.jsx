import React, { useEffect, useState } from 'react';
import { ScrollTrigger } from '../lib/motion';
import { projects, PROJECT_CATEGORIES } from '../data/projects';
import './Projects.css';

const GITHUB_PROFILE = 'https://github.com/MdEhtesham2004';
const PREVIEW = 6;
const categories = ['All', ...PROJECT_CATEGORIES];

// Only link to repos that are specific to the project; the profile link lives in the toolbar.
const ProjectLinks = ({ project }) => (
    <>
        {project.githubUrl && project.githubUrl !== GITHUB_PROFILE && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        )}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live ↗</a>}
    </>
);

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [expanded, setExpanded] = useState(false);
    const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
    const shown = expanded ? filtered : filtered.slice(0, PREVIEW);
    const count = (cat) => (cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length);

    // The list changes the page height; re-measure every scroll-linked animation below it.
    useEffect(() => {
        ScrollTrigger.refresh();
    }, [filter, expanded]);

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="projects-head">
                    <span className="label">Projects</span>
                    <h2 className="projects-title">Everything I've built</h2>
                </div>

                <div className="projects-toolbar">
                    <div className="projects-filters" role="group" aria-label="Filter projects by category">
                        {categories.map((cat) => (
                            <button key={cat} className={`chip ${filter === cat ? 'active' : ''}`}
                                aria-pressed={filter === cat} onClick={() => { setFilter(cat); setExpanded(false); }}>
                                {cat} <sup>{count(cat)}</sup>
                            </button>
                        ))}
                    </div>
                    <a className="projects-repos" href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">All repositories ↗</a>
                </div>

                <ul className="projects-list">
                    {shown.map((project, i) => (
                        <li key={project.id} className="project-row">
                            <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
                            <div className="project-main">
                                <h3>
                                    {project.title}
                                    {project.product && <span className="project-live">In market</span>}
                                </h3>
                                <p>{project.description}</p>
                            </div>
                            <span className="project-category">{project.category}</span>
                            <div className="project-links"><ProjectLinks project={project} /><span className="project-arrow" aria-hidden="true">→</span></div>
                        </li>
                    ))}
                </ul>

                {filtered.length > PREVIEW && (
                    <button className="btn btn-ghost projects-more magnetic" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
                        {expanded ? 'Show less' : `Show all ${filtered.length}`}
                    </button>
                )}
            </div>
        </section>
    );
};

export default Projects;
