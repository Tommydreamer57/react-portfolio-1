import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AnimatedText extends Component {
    constructor(props) {
        super(props)
        this.index = -1
        this.setletters = props.text.split('').map((l, i) => el => this.letters[i] = el)
        this.letters = []
        this.done = window.innerWidth < 769
    }

    componentDidMount = () => {
        if (window.innerWidth > 768) {
            if (!this.props.hasOwnProperty('await') || this.props.await) {
                setTimeout(this.addLetter, this.props.delay)
            }
        }
        this.letters.forEach((el, i) => {
            el.style.transitionDelay = ((i + 1) * (this.props.stagger || 0.005)) + 's'
        })
    }

    componentWillReceiveProps = newProps => {
        // console.log(this.props.text, newProps.await)
        if (!this.props.await && newProps.await) {
            setTimeout(this.addLetter, this.props.delay)
        }
    }

    addLetter = () => {
        if (this.index < this.props.text.length) {
            let previous = this.letters[this.index - 1] || { style: {}, innerHTML: {} }
            let current = this.letters[this.index] || { style: {}, innerHTML: {} }
            let next = this.letters[this.index + 1] || { innerHTML: {} }
            let underscore = `<span id="underscore" class="transition-letter" style="transition-delay: ${((this.index + 1) * (this.props.stagger || 0.005)).toFixed(3)}s;" >_</span>`
            previous.innerHTML = (previous.innerHTML + '').slice(0, previous.innerHTML.length - underscore.length + 1)
            current.innerHTML += underscore
            current.style.opacity = 1

            // if (current.innerHTML[0] === '.') {
            //     console.log({ next })
            // }

            setTimeout(this.addLetter, (
                (current.innerHTML[0] === '.'
                    &&
                    next.innerHTML[0] === ' '
                    ||
                    next.tagName === 'BR')
                    ?
                    this.props.delay
                    :
                    current.innerHTML[0] === this.props.pause
                        ?
                        this.props.pauseLength
                        :
                        this.props.speed || 250
            ))

            this.index++
        } else setTimeout(() => {
            if (!this.props.finalCursor) {
                this.letters[this.letters.length - 1].innerHTML = this.letters[this.letters.length - 1].innerHTML[0]
            }
            this.props.done()
            this.done = true
        }, this.props.after)
    }

    goToProjects = () => this.props.history.push('/projects' + (window.innerWidth < 769 ? '#Projects' : ''))

    render() {
        let flag = 0
        let opacity = window.innerWidth < 769 || this.done ? 1 : 0
        return (
            <this.props.tag>
                {
                    this.props.text.split('')
                        .map((letter, i, arr) => {
                            if (letter === '$') {
                                flag++
                                return (
                                    <span
                                        key={i}
                                        ref={this.setletters[i]}
                                        style={{
                                            position: 'relative'
                                        }}
                                    />
                                )
                            } else if (arr[i - 1] === '.' && letter === ' ') {
                                return (
                                    <br
                                        key={i}
                                        ref={this.setletters[i]}
                                    />
                                )
                            } else if (flag === 1) {
                                return (
                                    <span
                                        key={i}
                                        ref={this.setletters[i]}
                                        className="transition-letter bold"
                                        style={{
                                            opacity,
                                            position: 'relative',
                                            fontWeight: 'bold'
                                        }}
                                        onClick={this.goToProjects}
                                    >
                                        {letter}
                                    </span>
                                )
                            } else if (flag === 3) {
                                return (
                                    <a
                                        href="mailto:minilao94@yahoo.com"
                                        key={i}
                                        ref={this.setletters[i]}
                                        className="transition-letter"
                                        style={{
                                            opacity,
                                            position: 'relative',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {letter}
                                    </a>
                                )
                            } else return (
                                <span
                                    key={i}
                                    ref={this.setletters[i]}
                                    className="transition-letter"
                                    style={{ opacity, position: 'relative' }}
                                >
                                    {letter}
                                </span>
                            )
                        })
                }
                <span>&nbsp;</span>
            </this.props.tag>
        )
    }
}
