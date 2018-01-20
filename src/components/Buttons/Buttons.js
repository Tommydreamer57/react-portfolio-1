import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

let links = [
    '',
    '/',
    '/skills',
    '/projects',
    '/contact',
    ''
]

function Buttons(props) {
    let current = links.indexOf('/' + props.current)
    if (!props.current) {
        current = 1
    }
    let previous = links[current - 1]
    let next = links[current + 1]
    console.log(previous, current, next)
    return (
        <div id="Buttons">
            <div id="MenuButton">
                <div id="menu-one" className="arrow" />
                <div id="menu-two" className="arrow" />
                <div id="menu-three" className="arrow" />
            </div>
            <Link to={previous} id="LeftButton" className={props.current ? '' : ''} >
                <div id="left-one" className="arrow" />
                <div id="left-two" className="arrow" />
            </Link>
            <Link to={next} id="RightButton" className={props.current !== "contact" ? '' : ''} >
                <div id="right-one" className="arrow" />
                <div id="right-two" className="arrow" />
            </Link>
        </div>
    )
}

export default Buttons
