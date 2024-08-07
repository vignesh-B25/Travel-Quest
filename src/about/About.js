import React from 'react';
import Travel from './travel.mp4';
import './about.css';
function About(){
    return (
        <>
        <div className='about'>
        <div className='aboutus'>
        <h2>About us</h2>
        <p>Welcome to Tourism , your gateway to unforgettable 
            travel experiences. Our passion for exploration and adventure drives
            us to create unique journeys that connect you with the world's most 
            fascinating destinations. Whether 
            you're a solo traveler, a couple, or a family, 
            we have something special for everyone.</p>
            </div>
            </div>
            <video autoPlay muted>
                <source src={Travel} type='video/mp4'>
                </source>
                </video>
            </>
    )
}
export default About;