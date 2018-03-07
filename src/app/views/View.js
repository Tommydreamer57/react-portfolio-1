import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// view wrappers
import Wrapper, { DetailWrapper } from './Wrapper';
// primary views
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
// secondary view
import SkillDetails from './Skills/SkillDetails/SkillDetails';
import ProjectDetails from './Projects/ProjectDetails/ProjectDetails';
// data
import bio from '../../bio/bio';
// fixed components
import logo from '../../assets/logo.svg';
import Menu from '../components/Menu/Menu';
import Buttons from '../components/Buttons/Buttons';
// scrollbar controller
import addEventListeners from '../event-listeners';

let i = 10

class View extends Component {
    constructor() {
        super()
        this.scrollbar = {
            addEventListeners,
            removeEventListeners: () => { return this.scrollbar }
        }
        this.state = {
            open: false
        }
    }
    toggleMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }
    componentDidMount = () => {
        setTimeout(this.componentDidUpdate, 50)
    }
    componentDidUpdate = () => {
        console.log('updating View')
        this.scrollbar = this.scrollbar.removeEventListeners().addEventListeners().removeEventListeners().addEventListeners()
    }
    componentWillMount = () => {

        let history = this.props.history
        let current = this.props.match.params.view
        let allowedViews = ['skills', 'projects', 'details', 'contact']

        if (current && !allowedViews.includes(current)) {
            if (i > 0) {
                history.push("/")
                i-- // infinite loop protection
            }
        }
    }
    render = () => {

        let history = this.props.history
        let current = this.props.match.params.view
        let details = this.props.match.params.details // project or skill

        let searchString = this.props.location.search.replace(/%20/g, " ")

        let search = {
            skill: [],
            tag: []
        }

        searchString.split(/[\?\&]/g).forEach(item => {
            if (!item) return
            let arr = item.split(/=/)
            let key = arr[0]
            let val = arr[1].replace(/%20/g, " ")
            if (!search[key]) search[key] = [val]
            else search[key] = [...search[key], val]
        })

        let aboutPosition = !current ? 'current' : 'previous'
        let skillsPosition = !current ? 'next' : current === 'skills' ? 'current' : 'previous'
        let projectsPosition = current === 'contact' ? 'previous' : current === 'projects' ? 'current' : current === 'details' ? 'current current-beneath' : 'next'
        let contactPosition = current === 'contact' ? 'current' : 'next'

        let { main, front, back, other } = bio.Skills
        let allSkills = [...main, ...front, ...back, ...other]

        return (
            <div id="View">
                {/* PRIMARY VIEWS */}
                {/* ABOUT */}
                <Wrapper position={aboutPosition} >
                    <About />
                </Wrapper>
                {/* SKILLS */}
                <Wrapper position={skillsPosition} >
                    <Skills />
                </Wrapper>
                {/* PROJECTS */}
                <Wrapper position={projectsPosition} >
                    <Projects current={current} search={search} searchString={searchString} />
                </Wrapper>
                {/* CONTACT */}
                <Wrapper position={contactPosition} >
                    <Contact />
                </Wrapper>
                {/* SECONDARY VIEWS */}
                {/* PROJECT DETAILS */}
                {/* SKILL DETAILS */}
                {
                    // allSkills.map(item => {
                    //     let detailPosition = details === item.name ? 'current' : 'next'
                    //     return (
                    //         <DetailWrapper position={detailPosition} key={`Skill Details ${item.name}`} >
                    //             <SkillDetails skill={item.name} />
                    //         </DetailWrapper>
                    //     )
                    // })
                }
                {
                    bio.Projects.map(item => {
                        let detailPosition = details === item.title ? 'current' : 'next'
                        return (
                            <DetailWrapper position={detailPosition} key={`Project Details ${item.title}`} >
                                <ProjectDetails project={item.title} />
                            </DetailWrapper>
                        )
                    })
                }
                {/* LOGO */}
                <Link to="/" id="logo-wrapper">
                    <div id="logo-circle">
                        <img id="logo" src={logo} />
                    </div>
                </Link>
                {/* BUTTONS */}
                <Buttons
                    history={history}
                    current={current}
                    details={details}
                    toggleMenu={this.toggleMenu}
                />
                {/* MENU  */}
                <Menu
                    open={this.state.open}
                    current={current}
                    toggleMenu={this.toggleMenu}
                />
            </div>
        )
    }
}

export default View
