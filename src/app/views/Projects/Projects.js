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

function Tech(item) {
    return (
        <Link to={item.to} key={item.key} className={item.className} >
            <h5>{item.name}</h5>
            <div className="slide" />
        </Link>
    )
}

export default class Projects extends Component {
    constructor({ search, searchString, current }) {
        super({ search, searchString, current })
        this.state = {
            search,
            searchString
        }
    }
    componentWillReceiveProps = ({ search, searchString, current }) => {
        console.log(search, current)
        if (search.skill || (current !== 'projects' && current !== 'details')) {
            this.setState({
                search,
                searchString
            })
        }
    }
    render = () => {
        let { search, searchString } = this.state

        console.log(search, searchString)

        const { front, back, other } = bio.Skills

        const techList = [...front, ...back, ...other].map(item => ({ ...item, type: "skill" }))
        const tagList = bio.Tags.map(item => ({ ...item, type: "tag" }))

        const fullList = [...tagList, ...techList].map(item => {

            if (!bio.Projects.some(project => project.tech.some(skill => skill.name === item.name) || project.tags.some(tag => tag.name === item.name))) return

            let key = `Projects ${item.type} ${item.name}`
            let selected = search[item.type].includes(item.name)
            let className = `tech ${item.type === 'tag' ? 'tag' : ''} ${selected ? 'selected-tech' : ''}`

            let to = '/projects'
            to += selected ? searchString.replace(`?${item.type}=${item.name}&`, "?").replace(`?${item.type}=${item.name}`, "").replace(`&${item.type}=${item.name}`, "") : searchString.includes('?') ? `${searchString}&${item.type}=${item.name}` : `${searchString}?${item.type}=${item.name}`

            console.log(to)

            return { ...item, key, to, className, selected }

        }).filter(item => item)



        // FILTER PROJECTS
        function filter(project) {
            if (!search.skill && !search.tag) return true
            if (!search.skill.length && !search.tag.length) return true
            if (search.tag[0] === 'any' || search.skill[0] === 'any') return true
            else
                return search.skill.every(skill => project.tech.some(tech => skill.includes(tech.name)))
                    &&
                    search.tag.every(stag => project.tags.some(tag => stag.includes(tag.name)))
        }

        let projects = bio.Projects.filter(filter)

        return (
            <div id="Projects" >
                <h1>Projects</h1>
                <div className="tech-list">
                    {
                        fullList.map(Tech)
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
