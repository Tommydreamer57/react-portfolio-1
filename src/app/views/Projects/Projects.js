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

// TECH
function Tech(item) {
    return (
        <Link to={item.to} key={item.key} className={item.className} >
            <h5>{item.name}</h5>
            <div className="slide" />
        </Link>
    )
}

// VIEW
export default class Projects extends Component {
    constructor({ search, searchString, current }) {
        super({ search, searchString, current })
        this.current = current
        this.state = {
            search,
            searchString,
            current
        }
    }
    shouldComponentUpdate = ({ current, search, searchString }) => {
        // do not update when navigating from projects to another screen
        if (this.props.current === 'projects' && current !== 'projects') return false
        else return true
    }
    render = () => {
        let { search, searchString } = this.props

        // console.log(search, searchString)

        const { front, back, other } = bio.Skills

        const techList = [...front, ...back, ...other].map(item => ({ ...item, type: "skill" }))
        const tagList = bio.Tags.map(item => ({ ...item, type: "tag" }))

        const fullList = [...tagList, ...techList].map(item => {

            if (!bio.Projects.some(project => project.tech.some(skill => skill.name === item.name) || project.tags.some(tag => tag.name === item.name))) return

            let key = `Projects ${item.type} ${item.name}`
            let selected = search[item.type].includes(item.name)
            let className = `tech ${item.type === 'tag' ? 'tag' : ''} ${selected ? 'selected-tech' : ''}`

            // console.log(searchString.replace(new RegExp(`(\\?{0,1})(${item.type}=${item.name})(&){0,1}|(&{0,1})(${item.type}=${item.name})`), "$1"))

            let to = '/projects'
            // to += selected ? searchString.replace(`?${item.type}=${item.name}&`, "?").replace(`?${item.type}=${item.name}`, "").replace(`&${item.type}=${item.name}`, "") : searchString.includes('?') ? `${searchString}&${item.type}=${item.name}` : `${searchString}?${item.type}=${item.name}`

            let regex = new RegExp(`(\\?{0,1})(&{0,1})(${item.type}=${item.name})(&{0,1})`)

            function replace(match, p1, p2, p3, p4, offset, string) {
                if (p4) return p1 + p2
                else return ''
            }

            to += selected ? searchString.replace(regex, replace) : searchString.includes('?') ? `${searchString}&${item.type}=${item.name}` : `${searchString}?${item.type}=${item.name}`

            // console.log(to)

            return { ...item, key, to, className, selected }

        }).filter(item => item)



        // FILTERED PROJECTS
        let projects = bio.Projects.filter(project => {
            if (!search.skill && !search.tag) return true
            if (!search.skill.length && !search.tag.length) return true
            if (search.tag[0] === 'any' || search.skill[0] === 'any') return true
            else return search.skill.every(skill => project.tech.some(tech => skill.includes(tech.name)))
                &&
                search.tag.every(stag => project.tags.some(tag => stag.includes(tag.name)))
        })

        // 
        let noProjectsHeader = (
            <h4 id="no-projects">
                {

                }
                No
                {search.tag.map((tag, i, arr) => {
                    return (
                        <span key={`No Projects ${tag}`} > {tag.toLowerCase()} </span>
                    )
                })}
                project uses
                {search.skill.length === 2 ? " both " : " "}
                {search.skill.map((skill, i, arr) => {
                    return (
                        [
                            <span key={`No Projects ${skill}`} >{skill}</span>,
                            i < arr.length - 2 ? ", " : i === arr.length - 2 ? " and " : ""
                        ]
                    )
                })}
            </h4>
        )

        return (
            <div id="Projects" >
                {/* TITLE */}
                <h1>Projects</h1>
                {/* LIST */}
                <div className="tech-list">
                    {
                        fullList.map(Tech)
                    }
                </div>
                {/* PROJECTS */}
                <div className="projects-wrapper">
                    {
                        projects.length ?
                            // PROJECTS
                            projects.map(Project)
                            :
                            // NO PROJECTS
                            noProjectsHeader
                    }
                </div>
            </div>
        )
    }
}
