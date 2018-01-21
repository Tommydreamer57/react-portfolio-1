import React, { Component } from 'react';
import bio from '../../../bio';
import './About.css';
import { MoreButton } from '../../Buttons/Buttons';

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
            more: false
        }
    }
    toggleMore = () => {
        this.setState({
            more: !this.state.more
        })
    }
    render() {
        return (
            <div id="About" className="content" >
                <h1>{bio.About.greeting}</h1>
                <h3>{bio.About.intro}</h3>
                {
                    bio.About.info.map(Paragraph)
                }
                <div className="ellipsis" onClick={this.toggleMore} >...</div>
                <div className={this.state.more ? 'more show-more' : 'more hide-more'}>
                    {
                        bio.About.more.map(Paragraph)
                    }
                </div>
                <MoreButton more={this.state.more} toggleMore={this.toggleMore} />
            </div>
        )
    }
}

export default About // AnimatedWrap(About)
