import React, { Component } from 'react';

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
        let { text } = this.props;
        if (!Array.isArray(text)) return (
            <Text text={text} />
        )
        // let index = this.state.open ? text.length : 1;
        let index = text.length;
        return (
            <span>
                {
                    text.slice(0, index).map(item => <Text text={item} toggle={this.toggle} />)
                }
            </span>
        );
    }
}

export default DropDown;

function Text({ text, toggle }) {
    if (text.slice(0, 2) === "# ") return (
        <h4>
            {/* <button onClick={toggle} >+</button> */}
            {text.slice(2)}
        </h4>
    );
    else if (typeof text === 'string') return (
        <p>{text}</p>
    );
    else if (Array.isArray(text)) return (
        <p key={JSON.stringify(text)} >
            {
                text.map(item => {
                    if (typeof item === 'string') return item;
                    else if (typeof item === 'object') return (
                        <a key={item.link} href={item.link} target="_blank" > {item.name} </a>
                    );
                })
            }
        </p>
    );
}
