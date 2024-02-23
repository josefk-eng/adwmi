import React from 'react'

function MenuItems({submenus, dropdown}) {
    return (
        <ul className={`dropdown ${dropdown ? "show":""}`}>
            {
                submenus.map((submenu, index) => (
                    <li key={index}>
                        <a href="">{submenu.title}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default MenuItems
