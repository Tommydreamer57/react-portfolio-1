import React from 'react';
import bio from '../../../bio';
import './About.css';
import { MoreButton } from '../../Buttons/Buttons';
import logo from '../../assets/logo.svg';

function About(props) {
    return (
        <div id="About">
            <div id="about-wrapper">
                <div id="mobile-logo" className="mobile-only">
                    <div id="mobile-logo-circle">
                        <img src={logo} />
                    </div>
                </div>
                <h1>{bio.About.greeting}</h1>
                <h3>{bio.About.intro}</h3>
                {
                    bio.About.info.map(paragraph => {
                        return (
                            <p key={`About: ${paragraph.slice(0, 25)}`}>{paragraph}</p>
                        )
                    })
                }
                <div
                    className="more"
                    style={{
                        maxHeight: props.more ? '1250px' : '1px',
                        transition: 'max-height 0.4s',
                        overflow: 'hidden'
                    }}
                >
                    <div className="ellipsis" onClick={() => props.toggleMore()} >...</div>
                    {
                        bio.About.more.map(paragraph => {
                            return (
                                <p key={`About: ${paragraph.slice(0, 25)}`}>{paragraph}</p>
                            )
                        })
                    }
                </div>
                <MoreButton more={props.more} toggleMore={() => props.toggleMore()} />
            </div>
        </div>
    )
}

export default About
