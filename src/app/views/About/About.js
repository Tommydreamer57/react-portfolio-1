import React, { Component } from 'react';
import bio from '../../../bio/bio';
import './About.css';
// import { MoreButton } from '../../components/Buttons/Buttons';
import AnimatedText from './AnimatedText';
import logo from '../../../assets/logo.svg';
import Text from '../../components/Text/Text';

class About extends Component {
    constructor() {
        super()
        this.state = {
            h1: false,
            h3: false,
            p: 0
        }

    }
    h1done = () => this.setState({ h1: true })
    h3done = () => this.setState({ h3: true })
    pdone = () => this.setState({ p: this.state.p + 1 })
    render() {
        return (
            <div id="About">
                <div id="about-wrapper">
                    <div id="mobile-logo" className="mobile-only">
                        <div id="mobile-logo-circle">
                            <img src={logo} />
                        </div>
                    </div>
                    <div className="landing" >
                        <AnimatedText
                            tag="h1"
                            text={bio.About.greeting}
                            delay={0}
                            after={20}
                            done={this.h1done}
                            speed={20}
                        />
                        <AnimatedText
                            tag="h4"
                            text={bio.About.intro}
                            await={this.state.h1}
                            done={this.h3done}
                            speed={20}
                            finalCursor={true}
                        />
                        {/* <h1>{bio.About.greeting}</h1> */}
                        {/* <h3>{bio.About.intro}</h3> */}
                        {
                            // bio.About.info.map((text, i) => {
                            //     return (
                            //         <AnimatedText
                            //             key={i}
                            //             tag="p"
                            //             text={text}
                            //             await={i === 0 ? this.state.h3 : this.state.p >= i}
                            //             done={this.pdone}
                            //             speed={30}
                            //         />
                            //         // <Text key={JSON.stringify(text)} text={text} />
                            //         // <p key={`About: ${paragraph.slice(0, 25)}`}>{paragraph}</p>
                            //     )
                            // })
                        }
                    </div>
                    {/* <div className="more" >
                    {
                        bio.About.more.map(paragraph => {
                            return (
                                <p key={`About: ${paragraph.slice(0, 25)}`}>{paragraph}</p>
                            )
                        })
                    }
                </div> */}
                </div>
            </div>
        )
    }
}

export default About
