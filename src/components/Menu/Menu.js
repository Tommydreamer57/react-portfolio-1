import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

let i = 400

function Menu(props) {
    const links = [
        {
            to: '/',
            label: 'About',
            selected: !props.current
        },
        {
            to: '/skills',
            label: 'Skills',
            selected: props.current === 'skills'
        },
        {
            to: '/projects',
            label: 'Projects',
            selected: props.current === 'projects'
        },
        {
            to: '/contact',
            label: 'Contact',
            selected: props.current === 'contact'
        }
    ]
    return (
        <div id="Menu" className={props.open ? 'menu open' : 'menu closed'} >
            {
                // links.map(link => (
                //     <Link
                //         to={link.to}
                //         key={i++}
                //         onClick={props.toggleMenu}
                //         className={link.selected ? 'menu-link selected' : 'menu-link'}
                //     >
                //         <div className="slide slide-left" />
                //         <div className="slide slide-right" />
                //         <div className="menu-link-text">
                //             {link.label}
                //         </div>
                //     </Link>
                // ))
            }
            {
                // [].map() messes with DOM manipulation in react and prevents class-based transitions
                // so... I have to hard code the menu-links in
            }
            <Link
                to="/"
                onClick={props.toggleMenu}
                className={!props.current ? 'menu-link selected' : 'menu-link'}
            >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                <div className="menu-link-text">
                    About
                </div>
            </Link>
            <Link
                to="/skills"
                onClick={props.toggleMenu}
                className={props.current === "skills" ? 'menu-link selected' : 'menu-link'}
            >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                <div className="menu-link-text">
                    Skills
                </div>
            </Link>
            <Link
                to="/projects"
                onClick={props.toggleMenu}
                className={props.current === "projects" ? 'menu-link selected' : 'menu-link'}
            >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                <div className="menu-link-text">
                    Projects
                </div>
            </Link>
            <Link
                to="/contact"
                onClick={props.toggleMenu}
                className={props.current === "contact" ? 'menu-link selected' : 'menu-link'}
            >
                <div className="slide slide-left" />
                <div className="slide slide-right" />
                <div className="menu-link-text">
                    Contact
                </div>
            </Link>
        </div>
    )
}

export default Menu
