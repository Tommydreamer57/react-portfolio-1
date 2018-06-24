import React, { Component } from 'react';
import bio from '../../../bio/bio';
import './Contact.css';
import AnimatedText from '../About/AnimatedText';

let renderCount = 0;

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            enteredViewport: false
        }
    }
    componentDidMount() {
        if (window.innerWidth < 769) {
            this.calculateVisibility()
            window.addEventListener('scroll', this.calculateVisibility)
        }
    }
    calculateVisibility = () => {

        if (this.state.enteredViewport) return

        let $Contact = document.getElementById("Contact")

        if (!$Contact) return

        var top = $Contact.offsetTop
        var height = $Contact.offsetHeight

        while ($Contact.offsetParent) {
            $Contact = $Contact.offsetParent
            top += $Contact.offsetTop
        }

        let enteredViewport = (
            top >= window.pageYOffset
            &&
            (top + height) <= (window.pageYOffset + window.innerHeight)
        )
        if (enteredViewport && !this.state.enteredViewport) {
            this.setState({
                enteredViewport
            })
        }
    }
    render() {
        let { current } = this.props
        renderCount++
        return (
            <div id="Contact" >
                <h1>Contact Me</h1>
                <div className="">
                    <AnimatedText
                        tag="h4"
                        text={bio.Contact.text}
                        await={current === 'contact' || window.innerWidth < 769 && this.state.enteredViewport}
                        delay={renderCount === 1 && current === 'contact' || window.innerWidth < 769 ? 0 : 1000}
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
}

export default Contact
