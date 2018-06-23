import React from 'react';
import bio from '../../../bio/bio';
import './Contact.css';
import AnimatedText from '../About/AnimatedText';

function Contact() {
    return (
        <div id="Contact" >
            <h1>Contact Me</h1>
            <div className="">
                <AnimatedText
                    tag="h4"
                    text={bio.Contact.text}
                    delay={0}
                    stagger={0.01}
                    speed={20}
                    finalCursor={true}
                    done={() => { }}
                />
            </div>
            <div className="links">
                {
                    bio.Contact.links.map((link, i) => {
                        return (
                            <a
                                key={i}
                                href={link.link}
                                target='_blank'
                                className="link"
                                style={{ transitionDelay: (i + 3) * 0.125 + 's' }}
                            >
                                {
                                    link.icon ?
                                        <i className={link.icon} />
                                        :
                                        link.svg ?
                                            <img src={link.svg} />
                                            :
                                            null
                                }
                                <h3>{link.name}</h3>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Contact
