import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bio from '../../../bio/bio';
import './Portfolio.css';
import NoProjectsHeader from './NoProjectsHeader/NoProjectsHeader';
import ProjectsHeader from './ProjectsHeader/ProjectsHeader';
import comingSoon from '../../../assets/Calendar Screenshot.PNG';

// PROJECT
function Project(project, i) {
    let key = `Project ${project.title}`
    let to = `/details/${project.title}`
    let alt = `GitHub Repository: ${project.github}`
    let imgMaxWidth = document.querySelector(".content")
    console.log({ imgMaxWidth })
    return (
        <Link to={to} key={key} className='project' style={{ transitionDelay: (i + 3.5) * 0.125 + 's' }} >
            <h3 style={{ transitionDelay: ((i + 3.5) * 0.125) + 's' }} >{project.title}</h3>
            <h4 style={{ transitionDelay: ((i + 4.5) * 0.125) + 's' }} >{project.subtitle}</h4>
            <div style={{ transitionDelay: ((i + 5.5) * 0.125) + 's' }} className="image" >
                <img
                    src={project.img || comingSoon}
                    alt={alt}
                    style={{
                        // opacity: Number(!!project.img)
                    }}
                />
                {!project.img &&
                    <div className="coming-soon" >
                        <h5>
                            Coming Soon!
                        </h5>
                    </div>}
            </div>
        </Link>
    )
}

// TECH
function Tech(item, i) {
    return (
        <Link to={item.to} key={item.key} className={item.className} style={{ transitionDelay: ((i + 5) * 0.02) + 's' }} >
            <h5>{item.name}</h5>
            <div className="slide" />
        </Link>
    )
}

// VIEW
export default class Portfolio extends Component {
    constructor(props) {
        let { search, searchString, current } = props;
        super(props);
        this.current = current;
        this.state = {
            search,
            searchString,
            current
        }
    }
    shouldComponentUpdate = ({ current, search, searchString }) => {
        // do not update when navigating from portfolio to another screen
        if (this.props.current === 'details') return false
        else if (this.props.current === 'portfolio' && current !== 'portfolio') return false
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

            let to = '/portfolio'
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

        // let featuredProject = projects.shift();

        const RESET = {
            name: "Reset",
            type: "reset",
            className: `tech tech-reset ${search.tag.length || search.skill.length ? 'selected-tech' : ''}`,
            key: "Project Tech Reset",
            selected: false,
            to: "/portfolio"
        }

        return (
            <div id="Portfolio" >
                {/* TITLE */}
                <h1>Portfolio</h1>
                {/* LIST */}
                <div className="tech-list">
                    {
                        fullList.map(Tech)
                    }
                    {
                        Tech(RESET, fullList.length)
                    }
                </div>
                {
                    // HEADER
                    projects.length ?
                        <ProjectsHeader
                            total={bio.Projects.length}
                            count={projects.length}
                            search={search}
                            delay={(fullList.length + 10) * 0.02 + 's'}
                        />
                        :
                        // NO PROJECTS
                        <NoProjectsHeader
                            search={search}
                        />
                }
                {/* PROJECTS */}
                <div className="projects-wrapper">
                    {
                        projects.map(Project)
                    }
                </div>
            </div>
        )
    }
}
