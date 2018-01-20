import React, { Component } from 'react';
// import AnimatedWrap from '../AnimatedWrap';
import bio from '../../../bio';
// import addEventListeners from '../../event-listeners';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div id="About" style={{height: '150vh', background: 'red'}} >
                <h1>About</h1>
            </div>
        )
    }
}    

export default About // AnimatedWrap(About)
