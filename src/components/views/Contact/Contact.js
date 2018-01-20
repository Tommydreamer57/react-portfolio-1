import React, { Component } from 'react';
import bio from '../../../bio';

let i = 300

function Link(link) {
    return (
        <a key={i++} href={link.link} className="Link">
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
}

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render = () => {
        return (
            <div className="content" id="Contact" >
                <h1>Contact</h1>
                <div className="links">
                    {
                        bio.Contact.map(Link)
                    }
                </div>
            </div>
        )
    }
}

export default Contact
