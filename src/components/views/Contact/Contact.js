import React from 'react';
import bio from '../../../bio';
import './Contact.css';

let i = 300

function Contact() {
    return (
        <div id="Contact" >
            <h1>Contact Me</h1>
            <div className="links">
                {
                    bio.Contact.map(link => {
                        return (
                            <a key={i++} href={link.link} className="link">
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
