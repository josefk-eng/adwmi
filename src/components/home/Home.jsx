import React from 'react'
import './home.scss'
import vid from '../../assets/videos/intro.mp4'
import Navbar from '../navbar/Navbar'

function Home() {
    return (
        <div className="wrapper">
            <div className="intro">
            <div className="overlay"></div>
                <div className="content">
                    <p>Church Theme</p>
                    <p className='title'>JOIN THE PRAYER</p>
                    <span>Visit your local church and become part of the flock by contributing to the community in any way you posibly can</span>
                    <div className="btn">
                        <span>-</span>
                        <a href='#'>SEE MORE</a>
                    </div>
                </div>
                <div className="bar">
                    <Navbar  />
                </div>
                <video src={vid} autoPlay loop muted/>
            </div>
            <div className="middle">
                <h1>Extra Introduction</h1>
            </div>
        </div>
    )
}

export default Home
