import React from 'react';
import bio from '../../../../bio/bio';
// import './ProjectDetails.css';

function Tech(tech) {
    return (
        <div key={`Project Details Tech ${tech.name}`} className="tech">
            <h4>{tech.name}</h4>
            <div className="slide" />
        </div>
    )
}

function ProjectDetails(props) {
    console.log(props)
    let { project } = props
    project = bio.Projects.find(item => item.title === project)
    if (!project) return null
    return (
        <div id="ProjectDetails">
            <h1>{project.title}</h1>
            <h2>{project.subtitle}</h2>
            <div className="tech-list" >
                {
                    project.tech.map(Tech)
                }
            </div>
            <div className="image">
                <a href={project.url}>
                    <img src={project.img} />
                </a>
            </div>
            {
                project.description.map(desc => <p key={desc} >{desc}</p>)
            }
        </div>
    )
}

export default ProjectDetails
