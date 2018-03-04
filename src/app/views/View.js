import React, { Component } from 'react';
// view wrappers
import Wrapper, { DetailWrapper } from './Wrapper';
// primary views
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
// secondary view
import ProjectDetails from './Projects/ProjectDetails/ProjectDetails';
// data
import bio from '../../bio/bio';
// fixed components
import logo from '../../assets/logo.svg';
import Menu from '../components/Menu/Menu';
import Buttons from '../components/Buttons/Buttons';
// scrollbar controller
import addEventListeners from '../event-listeners';

class View extends Component {
    constructor(props) {
        super(props)
        this.scrollbar = {
            addEventListeners,
            removeEventListeners() { },
            resetTransition() { }
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
        setTimeout(function () {
            this.scrollbar = this.scrollbar.addEventListeners()//.resetTransition()
        }.bind(this), 50)
    }
    componentDidUpdate = () => {
        this.scrollbar = this.scrollbar.removeEventListeners().addEventListeners()      
    }
    render = () => {

        let history = this.props.history
        let current = this.props.match.params.view
        let project = this.props.match.params.project
        let search = {}

        this.props.location.search.split(/[\?\&]/g).forEach(item => {
            if (!item) return
            let arr = item.split(/=/)
            search[arr[0]] = arr[1]
        })

        // console.log(search)
        // console.log(this.props)

        let aboutPosition = !current ? 'current' : 'previous'
        let skillsPosition = !current ? 'next' : current === 'skills' ? 'current' : 'previous'
        let projectsPosition = current === 'contact' ? 'previous' : current === 'projects' || current === 'details' ? 'current' : 'next'
        let contactPosition = current === 'contact' ? 'current' : 'next'

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
                    <Projects current={current} search={search} />
                </Wrapper>
                {/* CONTACT */}
                <Wrapper position={contactPosition} >
                    <Contact />
                </Wrapper>
                {/* SECONDARY VIEWS */}
                {/* PROJECT DETAILS */}
                {
                    bio.Projects.map(item => {
                        let detailPosition = project === item.title ? 'current' : 'next'
                        return (
                            <DetailWrapper position={detailPosition} key={`Project Details ${item.title}`} >
                                <ProjectDetails project={item.title} />
                            </DetailWrapper>
                        )
                    })
                }
                {/* LOGO */}
                <div id="logo-wrapper">
                    <div id="logo-circle">
                        <img id="logo" src={logo} />
                    </div>
                </div>
                {/* BUTTONS */}
                <Buttons
                    history={history}
                    current={current}
                    project={project}
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
