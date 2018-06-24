import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

export default function Buttons({ open, current, details, history, toggleMenu }) {

    let previous, previousLabel, next, nextLabel

    function LeftLabel(label, i) {
        let key = `Left Button ${label} ${i}`
        let className = label === previousLabel ? 'nav-label nav-label-display' : 'nav-label'
        return (
            <h6 key={key} className={className} >
                {label}
            </h6>
        )
    }

    function RightLabel(label, i) {
        let key = `Right Button ${label} ${i}`
        let className = label === nextLabel ? 'nav-label nav-label-display' : 'nav-label'
        return (
            <h6 key={key} className={className} >
                {label}
            </h6>
        )
    }

    // function leftClick(e) {
    //     if (details) {
    //         e.preventDefault();
    //         history.goBack()
    //     }
    // }

    switch (current) {
        case undefined:
            next = "/skills"
            nextLabel = "Skills"
            break;
        case "skills":
            previous = "/"
            previousLabel = "About"
            next = "/projects"
            nextLabel = "Projects"
            break;
        case "projects":
            previous = "/skills"
            previousLabel = "Skills"
            next = "/contact"
            nextLabel = "Contact"
            break;
        case "details":
        case "contact":
            previous = "/projects"
            previousLabel = "Projects"
            break;
    }

    let menuClass = open ? 'close-menu' : 'open-menu'
    let leftClass = (details || current) && !open ? 'nav-button' : 'nav-button left-away'
    let rightClass = (!details && current !== "contact") && !open ? 'nav-button' : 'nav-button right-away'

    let links = ['About', 'Skills', 'Projects', 'Contact']
    let left = links.slice(0, 3)
    let right = links.slice(1)

    return (
        <div id="Buttons" className={open ? "buttons-away" : ""}>

            <button id="MenuButton" className={menuClass} onClick={toggleMenu} >
                <div id="menu-one" className="arrow" />
                <div id="menu-two" className="arrow" />
                <div id="menu-three" className="arrow" />
            </button>

            <Link to={previous || "/"} id="LeftButton" className={leftClass} >
                <div className="arrow-wrapper">
                    <div id="left-one" className="arrow" />
                    {
                        left.map(LeftLabel)
                    }
                    <div id="left-two" className="arrow" />
                </div>
            </Link>

            <Link to={next || "/contact"} id="RightButton" className={rightClass} >
                <div className="arrow-wrapper">
                    <div id="right-one" className="arrow" />
                    {
                        right.map(RightLabel)
                    }
                    <div id="right-two" className="arrow" />
                </div>
            </Link>

        </div>
    )
}
