import React from 'react'
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

function Header() {
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
                    </div>
                    <div className="search">
                        <SearchIcon />
                    </div>
                    <div className="location">
                        <FmdGoodIcon />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
