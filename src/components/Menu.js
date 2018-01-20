import React from 'react';
import { Link } from 'react-router-dom';

let i = 400

function MenuLink(link) {
    return (
        <Link to={link.to} key={i++} className={link.selected ? 'MenuLink selected' : 'MenuLink' } >
            <div className="slide slide-left" />
            <div className="slide slide-right" />
            <div className="nav-text">{link.label}</div>
        </Link>
    )
}

function Menu(props) {
    let links = [
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
                links.map(MenuLink)
            }
        </div>
    )
}

export default Menu
