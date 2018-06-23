import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AnimatedText extends Component {
    constructor(props) {
        super(props)
        this.index = -1
        this.setletters = props.text.split('').map((l, i) => el => this.letters[i] = el)
        this.letters = []
    }

    componentDidMount = () => {
        console.log(this.props.text)
        console.log(this.letters)
        if (!this.props.hasOwnProperty('await') || this.props.await) {
            setTimeout(this.addLetter, this.props.delay)
        }
        this.letters.forEach((el, i) => {
            el.style.transitionDelay = ((i + 1) * 0.005) + 's'
        })
    }

    componentWillReceiveProps = newProps => {
        console.log(this.props.text, newProps.await)
        if (!this.props.await && newProps.await) {
            setTimeout(this.addLetter, this.props.delay)
        }
    }

    addLetter = () => {
        if (this.index < this.props.text.length) {
            let previous = this.letters[this.index - 1] || { style: {}, innerHTML: {} }
            let next = this.letters[this.index] || { style: {}, innerHTML: {} }
            let underscore = `<span id="underscore" class="transition-letter" style="transition-delay: ${((this.index + 1) * 0.005).toFixed(3)}s;" >_</span>`
            previous.innerHTML = (previous.innerHTML + '').slice(0, previous.innerHTML.length - underscore.length + 1)
            next.innerHTML += underscore
            next.style.opacity = 1

            setTimeout(this.addLetter, this.props.speed || 250)
            this.index++
        } else setTimeout(() => {
            if (!this.props.finalCursor) {
                this.letters[this.letters.length - 1].innerHTML = this.letters[this.letters.length - 1].innerHTML[0]
            }
            this.props.done()
        }, this.props.after)
    }

    goToProjects = () => this.props.history.push('/projects')

    render() {
        let flag = 0;
        return (
            typeof this.props.tag === 'string' ?
                (
                    <this.props.tag>
                        <span>&nbsp;</span>
                        {
                            this.props.text.split('')
                                .map((letter, i, arr) => {
                                    if (letter === '$') {
                                        flag++
                                        return ''
                                    } else if (arr[i - 1] === '.' && letter === ' ') {
                                        return <br key={i} />
                                    } else if (flag === 1) {
                                        return (
                                            <span
                                                key={i}
                                                ref={this.setletters[i]}
                                                className="transition-letter"
                                                style={{
                                                    opacity: 0,
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
                                            <span
                                                key={i}
                                                ref={this.setletters[i]}
                                                className="transition-letter"
                                                style={{
                                                    opacity: 0,
                                                    position: 'relative',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                {letter}
                                            </span>
                                        )
                                    } else return (
                                        <span
                                            key={i}
                                            ref={this.setletters[i]}
                                            className="transition-letter"
                                            style={{ opacity: 0, position: 'relative' }}
                                        >
                                            {letter}
                                        </span>
                                    )
                                })
                            // this.props.text.split('')
                            //     .map((letter, i) => (
                            //         ((!mounted && console.log(letter, i)) || true) &&
                            //             typeof letter === 'string'
                            //             ?
                            //             i < this.state.index
                            //                 ?
                            //                 <span key={i} >{letter}</span>
                            //                 :
                            //                 i === this.state.index
                            //                     &&
                            //                     this.state.index <= this.props.text.length
                            //                     ?
                            //                     <span key={i} className="underscore" style={{ animationDuration: this.props.speed }} >_</span>
                            //                     :
                            //                     <span key={i} style={{ opacity: 0 }} >{letter}</span>
                            //             :
                            //             letter
                            //     ))
                        }
                        <span>&nbsp;</span>
                    </this.props.tag>
                )
                :
                (
                    <this.props.Tag>

                    </this.props.Tag>
                )
        )
    }
}
