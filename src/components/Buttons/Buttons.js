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

let labels = [
    '',
    'About',
    'Skills',
    'Projects',
    'Contact',
    ''
]

function Buttons(props) {
    let current = links.indexOf('/' + props.current)
    if (!props.current) {
        current = 1
    }
    let previous = links[current - 1]
    let previousLabel = labels[current - 1]
    let next = links[current + 1]
    let nextLabel = labels[current + 1]
    console.log(previous, links[current], next)
    return (
        <div id="Buttons">

            <div id="MenuButton" className={props.open ? 'close-menu' : 'open-menu'} onClick={props.toggleMenu} >
                <div id="menu-one" className="arrow" />
                <div id="menu-two" className="arrow" />
                <div id="menu-three" className="arrow" />
            </div>

            <Link
                to={previous}
                id="LeftButton"
                className={props.current ? 'nav-button' : 'nav-button left-away'}
            >
                <div className="arrow-wrapper">
                    <div id="left-one" className="arrow" />
                    <div className="nav-label" >{previousLabel}</div>
                    <div id="left-two" className="arrow" />
                </div>
            </Link>

            <Link
                to={next || "/contact"}
                id="RightButton"
                className={props.current !== "contact" ? 'nav-button' : 'nav-button right-away'}
            >
                <div className="arrow-wrapper">
                    <div id="right-one" className="arrow" />
                    <div className="nav-label" >{nextLabel}</div>
                    <div id="right-two" className="arrow" />
                </div>
            </Link>

        </div>
    )
}

export default Buttons
