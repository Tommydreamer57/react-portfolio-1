import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bio from '../../../bio/bio';
import './Projects.css';

// PROJECT
function Project(project) {
    let key = `Project ${project.title}`
    let to = `/details/${project.title}`
    let alt = `GitHub Repository: ${project.github}`
    return (
        <Link to={to} key={key} className='project'>
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
            <div className="image" >
                <img src={project.img} />
            </div>
        </Link>
    )
}

export default class Projects extends Component {
    constructor({ search }) {
        super({ search })
        this.state = {
            search
        }
    }
    componentWillReceiveProps = ({ search, current }) => {
        console.log(search, current)
        if (search.skill || (current !== 'projects' && current !== 'details')) {
            this.setState({
                search
            })
        }
    }
    render = () => {
        let { search } = this.state

        console.log(search)

        // TAG
        function Tag(tag) {
            let to = "/projects"
            // NO SEARCH TAG
            if (!search.tag || search.tag === 'any') {
                to = `/projects?tag=${tag.name}`
            }
            // ONE SEARCH
            if (!Array.isArray(search.tag))
                return (
                    <Link to={to} className="tech tag" >
                        <h5>{tag.name}</h5>
                        <div className="slide" />
                    </Link>
                )
        }

        // TECH
        function Tech(tech) {
            let to = "/projects"
            // NO SEARCH
            if ((!search.skill || !search.skill[0]) || search.skill[0] === 'any') {
                to = `/projects?skill=${tech.name}`
            }
            // ONE SEARCH
            else if (search.skill.length === 1 && tech.selected) {
                to = '/projects?skill=any'
            }
            // MULTIPLE SEARCHES    
            else {
                let other = search.skill.filter(skill => skill !== tech.name)
                if (tech.selected) {
                    to = [`/projects?skill=${other[0]}`, ...other.slice(1)].join("&skill=")
                }
                else {
                    to = [`/projects?skill=${other[0]}`, ...other.slice(1), tech.name].join("&skill=")
                }
            }
            console.log(to)
            let key = `Projects Tech ${tech.name}`
            let className = `tech ${tech.selected ? 'selected-tech' : ''}`
            return (
                <Link to={to} key={key} className={className}>
                    <h5>{tech.name}</h5>
                    <div className="slide" />
                </Link>
            )
        }

        // FILTER PROJECTS
        function filter(project) {
            if ((!search.skill || !search.skill[0]) || search.skill[0] === 'any') return true
            else return search.skill.every(skill => project.tech.some(tech => skill.includes(tech.name)))
        }

        const { main, front, back, other } = bio.Skills

        // FILTER TECH
        const fullTechList = [...main, ...front, ...back, ...other]
            .map(tech => {
                if (!bio.Projects.some(project => project.tech.some(skill => skill === tech)))
                    return
                if (search.skill && search.skill.includes(tech.name))
                    return Object.assign({ selected: true }, tech)
                else
                    return tech
            })
            .filter(item => item)

        // console.log(fullTechList)

        let projects = bio.Projects.filter(filter)

        return (
            <div id="Projects" >
                <h1>Projects</h1>
                <div className="tech-list">
                    {
                        bio.Tags.map(Tag)
                    }
                    {/* </div>
                <div className="tech-list"> */}
                    {
                        fullTechList.map(Tech)
                    }
                </div>
                <div className="projects-wrapper">
                    {
                        projects.map(Project)
                    }
                    {
                        !projects.length ?
                            <h4 id="no-projects">
                                No project uses
                                {search.skill.length === 2 ? " both " : " "}
                                {search.skill.map((skill, i, arr) => {
                                    return (
                                        [
                                            <span>{skill}</span>,
                                            i < arr.length - 2 ? ", " : i === arr.length - 2 ? " and " : ""
                                        ]
                                    )
                                })}
                            </h4>
                            :
                            null
                    }
                </div>
            </div>
        )

    }
}
