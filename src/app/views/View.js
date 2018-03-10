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
    constructor(props) {
        super(props)
        this.scrollbar = {
            addEventListeners,
            removeEventListeners: () => { return this.scrollbar }
        }
        this.state = {
            open: false,
            slidePosition: 0,
            slideDirection: ''
        }
        let currentView = props.match.params.view
        let allowedViews = ['skills', 'projects', 'details', 'contact']
        if (currentView && !allowedViews.includes(currentView)) {
            if (i > 0) {
                props.history.push("/")
                i-- // infinite loop protection
            }
        }
        console.log(window)
    }
    componentDidMount = () => {
        setTimeout(this.componentDidUpdate, 50)
    }
    componentDidUpdate = () => {
        // console.log('updating View')
        this.scrollbar = this.scrollbar.removeEventListeners().addEventListeners().removeEventListeners().addEventListeners()
    }
    toggleMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }
    swipe = (direction, distance) => {
        console.log(direction, distance)
        this.setState({
            slidePosition: distance,
            slideDirection: direction
        })
    }
    render = () => {

        let open = this.state.open
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
        let projectsPosition = current === 'contact' ? 'previous' : current === 'projects' ? 'current' : current === 'details' ? 'current current-away' : 'next'
        let contactPosition = current === 'contact' ? 'current' : 'next'

        let aboutId = current === 'skills' ? 'previous-view' : ''
        let skillsId = !current ? 'next-view' : current === 'projects' ? 'previous-view' : ''
        let projectsId = current === 'skills' ? 'next-view' : current === 'contact' || current === 'details' ? 'previous-view' : ''
        let contactId = current === 'projects' ? 'next-view' : ''

        let { main, front, back, other } = bio.Skills
        let allSkills = [...main, ...front, ...back, ...other]

        return (
            <div id="View" >
                {/* PRIMARY VIEWS */}
                {/* ABOUT */}
                <Wrapper
                    open={open}
                    path="/"
                    id={aboutId}
                    position={aboutPosition}
                    slidePosition={this.state.slidePosition}
                    slideDirection={this.state.slideDirection}
                    swipe={this.swipe}
                    history={history}
                    child={About}
                />
                {/* SKILLS */}
                <Wrapper
                    open={open}
                    path="/skills"
                    id={skillsId}
                    position={skillsPosition}
                    slidePosition={this.state.slidePosition}
                    slideDirection={this.state.slideDirection}
                    swipe={this.swipe}
                    history={history}
                    child={Skills}
                />
                {/* PROJECTS */}
                <Wrapper
                    open={open}
                    path="/projects"
                    current={current}
                    id={projectsId}
                    position={projectsPosition}
                    slidePosition={this.state.slidePosition}
                    slideDirection={this.state.slideDirection}
                    swipe={this.swipe}
                    history={history}
                    child={Projects}
                    childProps={{ current, search, searchString }}
                />
                {/* CONTACT */}
                <Wrapper
                    open={open}
                    path="/contact"
                    id={contactId}
                    position={contactPosition}
                    slidePosition={this.state.slidePosition}
                    slideDirection={this.state.slideDirection}
                    swipe={this.swipe}
                    history={history}
                    child={Contact}
                />
                {/* SECONDARY VIEWS */}
                {/* PROJECT DETAILS */}
                {
                    bio.Projects.map(item => {
                        let detailPosition = details === item.title ? 'current' : 'next'
                        return (
                            <DetailWrapper history={history} swipe={this.swipe} open={open} position={detailPosition} key={`Project Details ${item.title}`} >
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
                    open={open}
                    history={history}
                    current={current}
                    details={details}
                    toggleMenu={this.toggleMenu}
                />
                {/* MENU  */}
                <Menu
                    open={open}
                    current={current}
                    toggleMenu={this.toggleMenu}
                />
            </div >
        )
    }
}

export default View
