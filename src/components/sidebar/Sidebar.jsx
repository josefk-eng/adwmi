import React from 'react'
import './sidebar.scss'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import map from '../../assets/images/imgmap.png'
import ContactForm from '../input/ContactForm';

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
                <div className="contacts">
                    <img src={map} alt="logo" />
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
