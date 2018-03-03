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

export default function Buttons(props) {
    let current = links.indexOf('/' + props.current)
    if (!props.current) {
        current = 1
    }
    let previous = links[current - 1]
    let previousLabel = labels[current - 1]
    let next = links[current + 1]
    let nextLabel = labels[current + 1]
    console.log(previous, links[current], next)
    if (props.project) {
        previous = '/projects'
        previousLabel = 'Projects'
        next = ""
        nextLabel = ""
    }
    return (
        <div id="Buttons">

            <button id="MenuButton" className={props.open ? 'close-menu' : 'open-menu'} onClick={props.toggleMenu} >
                <div id="menu-one" className="arrow" />
                <div id="menu-two" className="arrow" />
                <div id="menu-three" className="arrow" />
            </button>

            <Link
                to={previous}
                onClick={e => {
                    if (props.project) {
                        e.preventDefault();
                        props.history.goBack()
                    }
                }}
                id="LeftButton"
                className={props.project ? 'nav-button' : props.current ? 'nav-button' : 'nav-button left-away'}
            >
                <div className="arrow-wrapper">
                    <div id="left-one" className="arrow" />
                    {
                        labels.map((label, i) => (
                            <div key={`Left Button ${label} ${i}`} className={label === previousLabel ? 'nav-label nav-label-display' : 'nav-label'} >
                                {label}
                            </div>
                        ))
                    }
                    <div id="left-two" className="arrow" />
                </div>
            </Link>

            <Link
                to={next || "/contact"}
                id="RightButton"
                className={props.project ? 'nav-button right-away' : props.current !== "contact" ? 'nav-button' : 'nav-button right-away'}
            >
                <div className="arrow-wrapper">
                    <div id="right-one" className="arrow" />
                    {
                        labels.map((label, i) => (
                            <div key={`Right Button ${label} ${i}`} className={label === nextLabel ? 'nav-label nav-label-display' : 'nav-label'} >
                                {label}
                            </div>
                        ))
                    }
                    <div id="right-two" className="arrow" />
                </div>
            </Link>

        </div>
    )
}
