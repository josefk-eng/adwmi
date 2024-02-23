import React, { useState } from 'react'
import MenuItems from './MenuItems'
import logo from '../../assets/images/transparentlogo.png'

function Submenu({items}) {
    const [dropdown, setDropdown] = useState(false);
    const toggleHover = () => setDropdown(!dropdown);
    return (
        <li className="menu-items"  onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            {
                items.submenu ? (
                    <>
                        <button type='button' aria-haspopup="menu" aria-expanded={dropdown ? "true":"false"}>
                            {items.title}
                        </button>
                        <MenuItems submenus={items.submenu} dropdown={dropdown} />
                    </>
                ):(
                    <a href={items.url}>
                        {
                            items.imageUrl ? (
                                <img src={logo} alt="logo" />
                            ):(
                                <a href="">
                                    {items.title}
                                </a>
                            )
                        }
                    </a>
                )
            }
        </li>
    )
}

export default Submenu
