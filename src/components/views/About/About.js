import React, { Component } from 'react';
import bio from '../../../bio';

let i = 0

function Paragraph(paragraph) {
    return (
        <p key={i++}>{paragraph}</p>
    )
}

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div id="About" className="content" >
                <h1>{bio.About.greeting}</h1>
                <h3>{bio.About.intro}</h3>
                {
                    bio.About.more.map(Paragraph)
                }
            </div>
        )
    }
}

export default About // AnimatedWrap(About)
