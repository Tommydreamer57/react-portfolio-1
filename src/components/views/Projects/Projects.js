import React from 'react';
import { Link } from 'react-router-dom';
import bio from '../../../bio';
import './Projects.css';

let i = 200

function Project(project) {
    return (
        <div key={i++} className="project">
            <h2>
                {project.title}
            </h2>
            <a href={project.github} alt={`GitHub Repository: ${project.github}`} >
                <h3>
                    {
                        // window.innerWidth >= 500 ?
                        //     ` -- ${project.subtitle} -- `
                        //     :
                            project.subtitle
                    }
                </h3>
            </a>
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
                // project.description.map(desc => {
                //     return (
                //         <p key={i++} >{desc}</p>
                //     )
                // })
            }
        </div>
    )
}

function Tech(tech) {
    return (
        <Link to={`/projects?skill=${tech.name}`} key={i++} className={`tech ${tech.selected ? 'selected-tech' : ''}`}>
            <h4>{tech.name}</h4>
            <div className="slide" />
        </Link>
    )
}

function Projects({ search }) {
    console.log(search)

    function filter(project) {
        return !search.skill || project.tech.some(tech => search.skill === tech.name)
    }

    const { main, front, back, other } = bio.Skills

    const fullTechList = [...main, ...front, ...back, ...other].map(tech => {
        if (!bio.Projects.some(project => project.tech.some(skill => skill === tech))) {
            return
        }
        if (tech.name === search.skill) {
            return Object.assign({ selected: true }, tech)
        }
        else {
            return tech
        }
    }).filter(item => item)

    console.log(fullTechList)

    return (
        <div id="Projects" >
            <h1>Projects</h1>
            <div className="tech-list">
                {
                    fullTechList.map(Tech)
                }
            </div>
            <div className="projects-wrapper">
                {
                    bio.Projects.filter(filter).map(Project)
                }
            </div>
        </div>
    )
}

export default Projects
