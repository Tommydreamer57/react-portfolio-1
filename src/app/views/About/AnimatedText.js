import React, { Component } from 'react';

let mounted = false

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
        mounted = true
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
            previous.innerHTML = previous.innerHTML[0]
            next.innerHTML += '<span id="underscore" style="position:absolute;top:0;" >_</span>'
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

    render() {
        return (
            typeof this.props.tag === 'string' ?
                (
                    <this.props.tag>
                        <span>&nbsp;</span>
                        {
                            this.props.text.split('')
                                .map((letter, i) => (
                                    <span key={i} ref={this.setletters[i]} style={{ opacity: 0, position: 'relative' }} >{letter}</span>
                                ))
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
