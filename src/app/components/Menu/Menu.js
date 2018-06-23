import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

let i = 0;

function Menu({ current, open, toggleMenu }) {
    const links = [
        {
            to: '/#About',
            label: 'About',
            selected: !current
        },
        {
            to: '/skills#Skills',
            label: 'Skills',
            selected: current === 'skills'
        },
        {
            to: '/projects#Projects',
            label: 'Projects',
            selected: current === 'projects'
        },
        {
            to: '/contact#Contact',
            label: 'Contact',
            selected: current === 'contact'
        }
    ]
    // console.log(current)
    // console.log(links)
    return (
        <div id="Menu" className={open ? 'menu open' : 'menu closed'} >
            <div id="Menu-Backdrop" />
            {
                links.map(link => (
                    <Link
                        to={link.to}
                        key={`Menu Item ${link.label}`}
                        onClick={toggleMenu}
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
