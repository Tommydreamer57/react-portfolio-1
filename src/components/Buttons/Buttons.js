import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

let i = 500

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

            <button id="MenuButton" className={props.open ? 'close-menu' : 'open-menu'} onClick={props.toggleMenu} >
                <div id="menu-one" className="arrow" />
                <div id="menu-two" className="arrow" />
                <div id="menu-three" className="arrow" />
            </button>

            <Link
                to={previous}
                id="LeftButton"
                className={props.current ? 'nav-button' : 'nav-button left-away'}
            >
                <div onClick={() => props.toggleMore(false)} className="arrow-wrapper">
                    <div id="left-one" className="arrow" />
                    {
                        // labels.map(label => (
                        //     <div key={i++} className={label === previousLabel ? 'nav-label nav-label-display' : 'nav-label'} >
                        //         {label}
                        //     </div>
                        // ))
                    }
                    {
                        // [].map() messes with DOM manipulation in react and prevents class-based transitions
                        // so... I have to hard code the menu-links in
                    }
                    <div className={previousLabel === "About" ? 'nav-label nav-label-display' : 'nav-label'} >
                        About
                    </div>
                    <div className={previousLabel === "Skills" ? 'nav-label nav-label-display' : 'nav-label'} >
                        Skills
                    </div>
                    <div className={previousLabel === "Projects" ? 'nav-label nav-label-display' : 'nav-label'} >
                        Projects
                    </div>
                    <div id="left-two" className="arrow" />
                </div>
            </Link>

            <Link
                to={next || "/contact"}
                id="RightButton"
                className={props.current !== "contact" ? 'nav-button' : 'nav-button right-away'}
            >
                <div onClick={() => props.toggleMore(false)} className="arrow-wrapper">
                    <div id="right-one" className="arrow" />
                    {
                        // labels.map(label => (
                        //     <div key={i++} className={label === nextLabel ? 'nav-label nav-label-display' : 'nav-label'} >
                        //         {label}
                        //     </div>
                        // ))
                    }
                    {
                        // [].map() messes with DOM manipulation in react and prevents class-based transitions
                        // so... I have to hard code the menu-links in
                    }
                    <div className={nextLabel === "Skills" ? 'nav-label nav-label-display' : 'nav-label'} >
                        Skills
                    </div>
                    <div className={nextLabel === "Projects" ? 'nav-label nav-label-display' : 'nav-label'} >
                        Projects
                    </div>
                    <div className={nextLabel === "Contact" ? 'nav-label nav-label-display' : 'nav-label'} >
                        Contact
                    </div>
                    <div id="right-two" className="arrow" />
                </div>
            </Link>

        </div>
    )
}

export default Buttons

export function MoreButton(props) {
    return (
        <button id="MoreButton" onClick={props.toggleMore} >
            <div className="arrow-wrapper">
                <div className="arrow" />
                <div className="more-label">
                    {props.more ? 'Less' : 'More'}
                </div>
                <div className="arrow" />
            </div>
        </button>
    )
}

