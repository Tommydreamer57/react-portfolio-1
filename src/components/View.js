import React, { Component } from 'react';
import About from './views/About/About';
import Skills from './views/Skills/Skills';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';

import addEventListeners from './event-listeners';

class View extends Component {
    constructor(props) {
        super(props)
        this.removeEventListeners = function() { }
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
                <div className={!current ? 'current' : 'previous'} >
                    <About />
                </div>
                <div className={!current ? 'next' : current === 'skills' ? 'current' : 'previous'} >
                    <Skills />
                </div>
                <div className={current === 'contact' ? 'previous' : current === 'projects' ? 'current' : 'next'} >
                    <Projects />
                </div>
                <div className={current === 'contact' ? 'current' : 'next'} >
                    <Contact />
                </div>
            </div>
        )
    }
}

export default View
