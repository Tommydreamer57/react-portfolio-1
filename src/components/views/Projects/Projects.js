import React, { Component } from 'react';
import bio from '../../../bio';

function Project(project) {
    return (
        <div className="project">
            <div className="info-wrapper">
                <div className="info">
                    <a href={project.url} ><h2>{project.title}</h2></a>
                    <h3>{project.subtitle}</h3>
                    {
                        project.description.map(Desc)
                    }
                </div>
                <div className="link">
                    <a href={project.url} className="image">
                        <img src={project.img} />
                    </a>
                    {/* <a className="visit" href={project.url} >
                        Visit Site
                    </a> */}
                </div>
            </div>
            <div className="tech-list">
                {
                    project.tech.map(Tech)
                }
            </div>
        </div>
    )
}

function Desc(desc) {
    return (
        <p>{desc}</p>
    )
}

function Tech(tech) {
    return (
        <div className="Tech">
            <h4>{tech.name}<div className="slide" /></h4>
        </div>
    )
}

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render = () => {
        return (
            <div className="content" id="Projects" >
                <h1>Projects</h1>
                {
                    bio.Projects.map(Project)
                }
            </div>
        )
    }
}

export default Projects
