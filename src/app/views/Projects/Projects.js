import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bio from '../../../bio/bio';
import './Projects.css';

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

        function Tech(tech) {
            let to = ""
            // NO SEARCH
            if (!search.skill || search.skill === 'any') {
                to = `/projects?skill=${tech.name}`
            }
            // ONE SEARCH
            else if (!Array.isArray(search.skill)) {
                to = tech.selected ? '/projects?skill=any' : `/projects?skill=${search.skill}&skill=${tech.name}`
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

        function filter(project) {
            if (!search.skill || search.skill === "any") return true
            if (Array.isArray(search.skill))
                return search.skill.every(skill => project.tech.some(tech => skill.includes(tech.name)))
            else
                return project.tech.some(tech => search.skill.includes(tech.name))
        }

        const { main, front, back, other } = bio.Skills

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
                    {

                    }
                </div>
            </div>
        )

    }
}
