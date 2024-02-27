import React from 'react'
import './sidebar.scss'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Sidebar({toggleSidebar}) {
    return (
        <div className="side-wrapper">
            <div className="close" onClick={toggleSidebar}>
                <CloseOutlinedIcon className='icon'/>
            </div>
            <div className="content">
                <p>Where to find us</p>
                <br />
                <h2>ANOINTED DIVINE WORD MINISTRIES INTERNATIONAL</h2>
            </div>
        </div>
    )
}

export default Sidebar
