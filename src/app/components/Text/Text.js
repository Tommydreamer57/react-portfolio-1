import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DropDown extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({ open: !this.state.open });
    }
    render() {
        // console.log(this.props.transitionDelay)
        let { text } = this.props;
        if (!Array.isArray(text)) return (
            <Text text={text} transitionDelay={this.props.transitionDelay} />
        )
        // let index = this.state.open ? text.length : 1;
        let index = text.length;
        return (
            <span style={{ transitionDelay: this.props.transitionDelay + 's' }} >
                {
                    text.slice(0, index).map(item => <Text transitionDelay={this.props.transitionDelay} text={item} toggle={this.toggle} />)
                }
            </span>
        );
    }
}

export default DropDown;

function Text({ text, toggle, transitionDelay }) {
    if (text.slice(0, 2) === "# ") return (
        <h4 style={{ transitionDelay: transitionDelay + 's' }} >
            {/* <button onClick={toggle} >+</button> */}
            {text.slice(2)}
        </h4>
    );
    else if (typeof text === 'string') return (
        <p style={{ transitionDelay: transitionDelay + 's' }} >{text}</p>
    );
    else if (Array.isArray(text)) return (
        <p key={JSON.stringify(text)} style={{ transitionDelay: transitionDelay + 's' }} >
            {
                text.map((item, i, arr) => {
                    let next = arr[i + 1]
                    if (typeof item === 'string') return item;
                    else if (typeof item === 'object') return (
                        <span style={{ transitionDelay: transitionDelay + ((i + 1) * 0.05) + 's' }}>
                            {item.link ?
                                <a key={item.link} href={item.link} target="_blank" > {item.name}</a>
                                :
                                item.to ?
                                    <Link key={item.to} to={item.to} > {item.name}</Link>
                                    :
                                    null}
                            <span>{typeof next === 'object' ? ', ' : next[0] === '.' ? '' : ' '}</span>
                        </span>
                    );
                })
            }
        </p>
    );
}
