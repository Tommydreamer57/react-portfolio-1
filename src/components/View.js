import React, { Component } from 'react';
import About from './views/About/About';
import Skills from './views/Skills/Skills';
import Projects from './views/Projects/Projects';
import ProjectDetails from './views/Projects/ProjectDetails/ProjectDetails';
import Contact from './views/Contact/Contact';

import bio from '../bio';

import logo from './assets/logo.svg';
import Menu from './Menu/Menu';
import Buttons from './Buttons/Buttons';

import addEventListeners from './event-listeners';

class View extends Component {
    constructor(props) {
        super(props)
        this.removeEventListeners = () => { }
        this.state = {
            open: false,
            more: false
        }
    }
    toggleMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }
    toggleMore = more => { // FOR THE ABOUT PAGE ONLY
        console.log(more)
        if (more === undefined) more = !this.state.more
        console.log(more)
        this.setState({
            more: more
        })
    }
    componentDidMount = () => {
        this.removeEventListeners = addEventListeners()
    }
    componentDidUpdate = () => {
        this.removeEventListeners()
        this.componentDidMount()
    }
    render = () => {
        let current = this.props.match.params.view
        let project = this.props.match.params.project
        let search = {}
        this.props.location.search.split(/[\?\&]/g).forEach(item => {
            if (!item) return
            let arr = item.split(/=/)
            search[arr[0]] = arr[1]
        })
        console.log(search)
        console.log(this.props)
        return (
            <div id="View">
                <div>
                    {/* ABOUT */}
                    <div className={!current ? 'current' : 'previous'} >
                        <div className="content">
                            <div className={!current ? 'current-left-margin' : 'previous-left-margin'} />
                            <About more={this.state.more} toggleMore={this.toggleMore} />
                            <div className={!current ? 'current-right-margin' : 'previous-right-margin'} />
                        </div>
                    </div>
                    {/* SKILLS */}
                    <div className={!current ? 'next' : current === 'skills' ? 'current' : 'previous'} >
                        <div className="content">
                            <div className={!current ? 'next-left-margin' : current === 'skills' ? 'current-left-margin' : 'previous-left-margin'} />
                            <Skills />
                            <div className={!current ? 'next-right-margin' : current === 'skills' ? 'current-right-margin' : 'previous-right-margin'} />
                        </div>
                    </div>
                    {/* PROJECTS */}
                    <div className={project ? 'previous' : current === 'contact' ? 'previous' : current === 'projects' ? 'current' : 'next'} >
                        <div className="content">
                            <div className={project ? 'previous-left-margin' : current === 'contact' ? 'previous-left-margin' : current === 'projects' ? 'current-left-margin' : 'next-left-margin'} />
                            <Projects search={search} />
                            <div className={project ? 'previous-right-margin' : current === 'contact' ? 'previous-right-margin' : current === 'projects' ? 'current-right-margin' : 'next-right-margin'} />
                        </div>
                    </div>
                    {/* PROJECT DETAILS */}
                    {
                        bio.Projects.map(item => {
                            return (
                                <div className={project === item.title ? 'current' : 'next'} key={`Project Details ${item.title}`} >
                                    <div className="content">
                                        <div className={project === item.title ? 'current-left-margin' : 'next-left-margin'} />
                                        <ProjectDetails project={item.title} />
                                        <div className={`details-right-margin ${project === item.title ? 'current-right-margin' : 'next-right-margin'}`} />
                                    </div>
                                </div>

                            )
                        })
                    }
                    {/* CONTACT */}
                    <div className={current === 'contact' ? 'current' : 'next'} >
                        <div className="content">
                            <div className={current === 'contact' ? 'current-left-margin' : 'next-left-margin'} />
                            <Contact />
                            <div className={current === 'contact' ? 'current-right-margin' : 'next-right-margin'} />
                        </div>
                    </div>
                </div>
                <div id="logo-wrapper">
                    <div id="logo-circle">
                        <img id="logo" src={logo} />
                    </div>
                </div>
                <Buttons
                    current={current}
                    project={project}
                    open={this.state.open}
                    toggleMenu={this.toggleMenu}
                    toggleMore={this.toggleMore}
                />
                <Menu
                    current={current}
                    open={this.state.open}
                    toggleMenu={this.toggleMenu}
                />
            </div>
        )
    }
}

export default View
