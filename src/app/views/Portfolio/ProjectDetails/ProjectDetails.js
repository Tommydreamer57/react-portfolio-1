import React from 'react';
import bio from '../../../../bio/bio';
import './ProjectDetails.css';
import Text from '../../../components/Text/Text';

function Tech(tech, i, arr) {
    return (
        <div key={`Project Details Tech ${tech.name}`} className={tech.tech ? 'tech' : 'tech tag'} style={{ transitionDelay: ((i + 1) * 0.05) + 's' }} >
            <h4>{tech.name}</h4>
            <div className="slide" />
        </div>
    )
}

function ProjectDetails({ project }) {
    project = bio.Projects.find(item => item.title === project)
    if (!project) return null
    let tags = project.tags.map(tag => ({ ...tag, tag: true }))
    let tech = project.tech.map(tech => ({ ...tech, tech: true }))
    let fullList = [...tags, ...tech]
    return (
        <div className="project-details">
            <h1>{project.title}</h1>
            <h3 style={{ transitionDelay: 0.1 }} >{project.subtitle}</h3>
            <div className="tech-list" >
                {
                    tags.map(Tech)
                }
                <div
                    style={{
                        width: '100%',
                        height: 0
                    }}
                />
                {
                    tech.map(Tech)
                }
                {
                    // fullList.map(Tech)
                }
            </div>
            <div className="description">
                {
                    project.description.map((text, i) => (
                        <Text key={JSON.stringify(text)} text={text} transitionDelay={(i + 1) * 0.125} />
                    ))
                }
            </div>
            <div className="description">
                {project.github && <p style={{ transitionDelay: ((project.description.length + 1) * 0.125) + 's' }} >Click <a href={project.github} target="_blank" >here</a> to see this project on GitHub.</p>}
                {project.url && <p style={{ transitionDelay: ((project.description.length + 2) * 0.125) + 's' }} >Click the image to view the hosted project.</p>}
            </div>
            <div style={{ transitionDelay: ((project.description.length + 6) * 0.125) + 's' }} className="image">
                <a href={project.url} target="_blank" >
                    <img src={project.img} />
                </a>
            </div>
        </div>
    )
}

export default ProjectDetails
