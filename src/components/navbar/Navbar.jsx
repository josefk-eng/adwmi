import React from 'react'
import './navbar.scss'
import { NavbarData } from './NavbarData';
import Submenu from './Submenu';

function Navbar() {
    return (
        <nav className="desktop-nav">
            <ul className="menus">
                {
                    NavbarData.map((menu, index) => {
                        return <Submenu items={menu} />
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar
