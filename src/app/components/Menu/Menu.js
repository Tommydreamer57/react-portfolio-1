import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

let i = 0;

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
    console.log(props.current)
    console.log(links)
    return (
        <div id="Menu" className={props.open ? 'menu open' : 'menu closed'} >
            {
                links.map(link => (
                    <Link
                        to={link.to}
                        key={`Menu Item ${link.label}`}
                        onClick={props.toggleMenu}
                        className={link.selected ? 'menu-link selected' : 'menu-link'}
                    >
                        <div className="slide slide-left" />
                        <div className="slide slide-right" />
                        <h3 className="menu-link-text">
                            {link.label}
                        </h3>
                    </Link>
                ))
            }
        </div>
    )
}

export default Menu
