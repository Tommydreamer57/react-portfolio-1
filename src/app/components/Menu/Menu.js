import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu({ current, open, toggleMenu }) {
    const links = [
        {
            to: '/',
            label: 'Home',
            selected: !current
        },
        {
            to: '/skills',
            label: 'Skills',
            selected: current === 'skills'
        },
        {
            to: '/portfolio',
            label: 'Portfolio',
            selected: current === 'portfolio'
        },
        {
            to: '/contact',
            label: 'Contact',
            selected: current === 'contact'
        }
    ]
    return (
        <div id="Menu" className={open ? 'menu open' : 'menu closed'} >
            <div id="Menu-Backdrop" />
            {
                links.map(link => (
                    <Link
                        to={link.to + (window.innerWidth < 769 ? `#${link.label}` : '')}
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
