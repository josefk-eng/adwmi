import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import './navbar.scss'
import { TikTokIcon } from './Tiktok';

function Navbar() {
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
                
            </div>
        </header>
    )
}

export default Navbar
