import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import './header.scss'
import { TikTokIcon } from './Tiktok';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Navbar from './Navbar';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
function Header({toggleSidebar}) {

    const [search, setSearch] = useState(false);
    const toggleSearch = () => setSearch(!search);
    return (
        <header className='header'>
            <div className="top">
                <div className="left">
                    <p>Follow Us</p>
                    <a href="#"><FacebookIcon className='icon'/></a>
                    <a href="#"><YouTubeIcon className='icon' /></a>
                    <a href="#"><TikTokIcon className='icon' /></a>
                </div>
                <a href="tel:+256704926930">
                    <PhoneIcon className='icon' />
                    <p>Call Us 0704926930</p>
                </a>
            </div>
            <hr />
            <div className="menubar">
                <a href="#" className='btn'>
                    <VolunteerActivismIcon />
                    <p>DONATE</p>
                </a>
                <Navbar />
                <div className="additions">
                    <div className="calendar">
                        <CalendarMonthIcon />
                        <p>0</p>
                    </div>
                    <div className="search-btn" onClick={toggleSearch}>
                        <SearchIcon />
                    </div>
                    <div className="location" onClick={toggleSidebar}>
                        <FmdGoodIcon />
                    </div>
                </div>

                <div className={`search ${search ? "show-search":""}`}>
                    <input type="text" placeholder='Search....' />
                <span onClick={toggleSearch}><HighlightOffOutlinedIcon /></span>
            </div>
            </div>
        </header>
    )
}

export default Header
