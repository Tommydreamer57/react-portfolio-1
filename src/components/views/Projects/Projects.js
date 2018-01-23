import React, { Component } from 'react';
import bio from '../../../bio';
import './Projects.css';

let i = 200

function Project(project) {
    return (
        <div key={i++} className="project">
            <h2>{project.title}</h2>
            <a href={project.github} alt={`GitHub Repository: ${project.github}`} ><h3>
                {
                    window.innerWidth >= 500 ?
                        ` -- ${project.subtitle} -- `
                        :
                        project.subtitle
                }
            </h3></a>
            <div className="image">
                <a href={project.url} >
                    <img src={project.img} />
                </a>
            </div>
            <div className="tech-list">
                {
                    project.tech.map(Tech)
                }
            </div>
            {
                // project.description.map(Desc)
            }
        </div>
    )
}

function Desc(desc) {
    return (
        <p key={i++} >{desc}</p>
    )
}

function Tech(tech) {
    return (
        <div key={i++} className="tech">
            <h4>{tech.name}</h4>
            <div className="slide" />
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
