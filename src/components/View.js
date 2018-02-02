import React, { Component } from 'react';
import About from './views/About/About';
import Skills from './views/Skills/Skills';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';

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

        return (
            <div id="View">
                <div>
                    <div scrolltop={0} className={!current ? 'current' : 'previous'} >
                        <div className="content">
                            <div className={!current ? 'current-left-margin' : 'previous-left-margin'} />
                            <About more={this.state.more} toggleMore={this.toggleMore} />
                            <div className={!current ? 'current-right-margin' : 'previous-right-margin'} />
                        </div>
                    </div>
                    <div scrolltop={0} className={!current ? 'next' : current === 'skills' ? 'current' : 'previous'} >
                        <div className="content">
                            <div className={!current ? 'next-left-margin' : current === 'skills' ? 'current-left-margin' : 'previous-left-margin'} />
                            <Skills />
                            <div className={!current ? 'next-right-margin' : current === 'skills' ? 'current-right-margin' : 'previous-right-margin'} />
                        </div>
                    </div>
                    <div scrolltop={0} className={current === 'contact' ? 'previous' : current === 'projects' ? 'current' : 'next'} >
                        <div className="content">
                            <div className={current === 'contact' ? 'previous-left-margin' : current === 'projects' ? 'current-left-margin' : 'next-left-margin'} />
                            <Projects />
                            <div className={current === 'contact' ? 'previous-right-margin' : current === 'projects' ? 'current-right-margin' : 'next-right-margin'} />
                        </div>
                    </div>
                    <div scrolltop={0} className={current === 'contact' ? 'current' : 'next'} >
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
