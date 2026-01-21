import React from 'react';
import { FaPython, FaJava, FaJs, FaDatabase, FaDocker, FaChartBar, FaBrain, FaRocket, FaLanguage, FaChartLine, FaProjectDiagram, FaCogs, FaTable, FaChartArea } from 'react-icons/fa';
import { SiDjango, SiFlask, SiPandas, SiScikitlearn, SiPostgresql, SiStreamlit, SiNumpy, SiTensorflow } from 'react-icons/si';
import { skills } from '../data/skills';
import './Skills.css';

const iconMap = {
    FaPython, FaJava, FaJs, FaDatabase, FaDocker, FaChartBar, FaBrain, FaRocket, FaLanguage, FaChartLine, FaProjectDiagram, FaCogs, FaTable, FaChartArea,
    SiDjango, SiFlask, SiPandas, SiScikitlearn, SiPostgresql, SiStreamlit, SiNumpy, SiTensorflow,
    // Icon aliases for skills.js
    SiPowerbi: FaChartArea,
    SiPlotly: FaChartArea,
    SiMicrosoftexcel: FaTable
};

const Skills = () => {
    const getIcon = (iconName) => {
        const Icon = iconMap[iconName] || FaDatabase;
        return <Icon />;
    };

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-container">
                    <div className="skill-category">
                        <h3 className="category-title">Programming Languages</h3>
                        <div className="skills-grid">
                            {skills.programmingLanguages.map((skill) => (
                                <div key={skill.name} className="skill-card glass-card">
                                    <div className="skill-icon">{getIcon(skill.icon)}</div>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3 className="category-title">Technologies & Tools</h3>
                        <div className="skills-grid">
                            {skills.technologies.map((skill) => (
                                <div key={skill.name} className="skill-card glass-card">
                                    <div className="skill-icon">{getIcon(skill.icon)}</div>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3 className="category-title">Domain Knowledge</h3>
                        <div className="skills-grid">
                            {skills.domains.map((skill) => (
                                <div key={skill.name} className="skill-card glass-card">
                                    <div className="skill-icon">{getIcon(skill.icon)}</div>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
