import React from 'react';
import bio from '../../../../bio/bio';
import './ProjectDetails.css';

function Tech(tech) {
    return (
        <div key={`Project Details Tech ${tech.name}`} className="tech">
            <h4>{tech.name}</h4>
            <div className="slide" />
        </div>
    )
}

function ProjectDetails({ project }) {
    project = bio.Projects.find(item => item.title === project)
    if (!project) return null
    return (
        <div className="project-details">
            <h1>{project.title}</h1>
            <h3>{project.subtitle}</h3>
            <div className="tech-list" >
                {
                    project.tech.map(Tech)
                }
            </div>
            <div className="description">
                {
                    project.description.map(desc => {
                        if (desc.slice(0, 2) === "# ") return (
                            <h4>{desc.slice(2)}</h4>
                        );
                        else if (typeof desc === 'string') return (
                            <p key={desc} >{desc}</p>
                        );
                        else if (Array.isArray(desc)) return (
                            <p key={JSON.stringify(desc)} >
                                {
                                    desc.map(item => {
                                        if (typeof item === 'string') return item;
                                        else if (typeof item === 'object') return (
                                            <a href={item.link} target="_blank" > {item.name} </a>
                                        );
                                    })
                                }
                            </p>
                        );
                    })
                }
            </div>
            <div className="description">
                <p>Click <a href={project.github} target="_blank" >here</a> to see this project on GitHub</p>
                <p>Click the image to view the hosted project</p>
            </div>
            <div className="image">
                <a href={project.url} target="_blank" >
                    <img src={project.img} />
                </a>
            </div>
        </div>
    )
}

export default ProjectDetails
