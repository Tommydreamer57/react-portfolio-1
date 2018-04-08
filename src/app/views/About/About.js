import React from 'react';
import bio from '../../../bio/bio';
import './About.css';
// import { MoreButton } from '../../components/Buttons/Buttons';
import logo from '../../../assets/logo.svg';

function About() {
    return (
        <div id="About">
            <div id="about-wrapper">
                <div id="mobile-logo" className="mobile-only">
                    <div id="mobile-logo-circle">
                        <img src={logo} />
                    </div>
                </div>
                <div className="landing" >
                    <h1>{bio.About.greeting}</h1>
                    <h3>{bio.About.intro}</h3>
                    {
                        bio.About.info.map(paragraph => {
                            return (
                                <p key={`About: ${paragraph.slice(0, 25)}`}>{paragraph}</p>
                            )
                        })
                    }
                </div>
                <div className="more" >
                    {
                        bio.About.more.map(paragraph => {
                            return (
                                <p key={`About: ${paragraph.slice(0, 25)}`}>{paragraph}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About
