import React, { Component } from 'react';
import bio from '../../../bio';
import './About.css';
import { MoreButton } from '../../Buttons/Buttons';
import logo from '../../assets/logo.svg';

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
        let moreHeight = '1000'
        return (
            <div id="About" className="content" >
                <div id="about-wrapper">
                    <div id="mobile-logo" className="mobile-only">
                        <div id="mobile-logo-circle">
                            <img src={logo} />
                        </div>
                    </div>
                    <h1>{bio.About.greeting}</h1>
                    <h3>{bio.About.intro}</h3>
                    {
                        bio.About.info.map(Paragraph)
                    }
                    <div
                        className={this.state.more ? 'more show-more' : 'more hide-more'}
                        style={{
                            maxHeight: this.state.more ? moreHeight + 'px' : '1px',
                            transition: 'max-height 0.4s'
                        }}
                    >
                        <div className="ellipsis" onClick={this.toggleMore} >...</div>
                        {
                            bio.About.more.map(Paragraph)
                        }
                    </div>
                    <MoreButton more={this.state.more} toggleMore={this.toggleMore} />
                </div>
            </div>
        )
    }
}

export default About // AnimatedWrap(About)
