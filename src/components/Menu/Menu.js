import React from 'react';
import { Link } from 'react-router-dom';
// import './Menu.css';

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
        <div id="Menu" className={props.open ? 'open' : 'closed'}>
            {
                links.map(link => (
                    <Link
                        to={link.to}
                        key={i++}
                        onClick={props.toggleMenu}
                        className={link.selected ? 'menu-link selected' : 'menu-link'}
                    >
                        <div className="slide slide-left" />
                        <div className="slide slide-right" />
                        <div className="nav-text">{link.label}</div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Menu
