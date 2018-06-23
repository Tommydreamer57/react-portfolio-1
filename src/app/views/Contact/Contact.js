import React from 'react';
import bio from '../../../bio/bio';
import './Contact.css';

function Contact() {
    return (
        <div id="Contact" >
            <h1>Contact Me</h1>
            <div className="links">
                {
                    bio.Contact.map((link, i)=> {
                        return (
                            <a
                                key={i}
                                href={link.link}
                                target='_blank'
                                className="link"
                                style={{ transitionDelay: (i + 1) * 0.125 + 's' }}
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
