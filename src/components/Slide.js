import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import About from './views/About/About';
import Skills from './views/Skills/Skills';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';

const duration = 100

const defaultStyle = {
    transition: `opacity ${duration}ms`,
    background: 'black',
    opacity: 0
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: {},
    exited: {}
}

let views = [
    '',
    About,
    Skills,
    Projects,
    Contact,
    ''
]

class Slide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            in: false
        }
    }
    enter = () => {
        this.setState({
            in: true
        })
    }
    exit = () => {
        this.setState({
            in: false
        })
    }
    render = () => {
        console.log(this.state.in)
        let Current = this.props.current
        return (
            <div className="Slide">
                <Transition in={this.state.in} timeout={duration} >
                    {
                        state => {
                            console.log(state)
                            return (
                                <Current style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }} enter={this.enter} exit={this.exit} />
                            )
                        }
                    }
                </Transition>
            </div>
        )
    }
}

export default Slide
