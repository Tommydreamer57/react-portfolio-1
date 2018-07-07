import React, { Component } from 'react';
import bio from '../../../bio/bio';
import './Home.css';
// import { MoreButton } from '../../components/Buttons/Buttons';
import AnimatedText from './AnimatedText';
import logo from '../../../assets/logo.svg';
import Text from '../../components/Text/Text';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            h1: false,
            h3: false,
            p: 0
        }
        this.renderCount = 0;
    }
    h1done = () => this.setState({ h1: true })
    h3done = () => this.setState({ h3: true })
    pdone = () => this.setState({ p: this.state.p + 1 })
    render() {
        this.renderCount++;
        return (
            <div id="Home">
                <div id="home-wrapper">
                    {/* <div id="mobile-logo" className="mobile-only">
                        <div id="mobile-logo-circle">
                        <img src={logo} />
                        </div>
                    </div> */}
                    <div className="landing" >
                        <AnimatedText
                            tag="h1"
                            text={bio.Home.greeting}
                            delay={0}
                            after={400}
                            pause={','}
                            pauseLength={210}
                            done={this.h1done}
                            speed={27}
                            history={this.props.history}
                        />
                        <AnimatedText
                            tag="h4"
                            text={bio.Home.intro}
                            delay={190}
                            await={this.state.h1}
                            done={this.h3done}
                            speed={18}
                            finalCursor={true}
                            history={this.props.history}
                        />
                        {/* <h1>{bio.Home.greeting}</h1> */}
                        {/* <h3>{bio.Home.intro}</h3> */}
                        {
                            // bio.Home.info.map((text, i) => {
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
                            //         // <p key={`Home: ${paragraph.slice(0, 25)}`}>{paragraph}</p>
                            //     )
                            // })
                        }
                    </div>
                    {/* <div className="more" >
                    {
                        bio.Home.more.map(paragraph => {
                            return (
                                <p key={`Home: ${paragraph.slice(0, 25)}`}>{paragraph}</p>
                            )
                        })
                    }
                </div> */}
                </div>
            </div>
        )
    }
}

export default Home
