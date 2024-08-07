import React from 'react';
import Template1 from './image2.jpg';

import Template3 from './image3.jpg'
import './Content.css'
function Content(){
    return(
        <>
    <div className='content'>
    <div className='content-main'>
      <h3>Infinitive Journey</h3>
      {/* <img src={Worldimg} href=''alt='worldimage'/> */}
      <h1>Traveling opens door <br/>to creating memories</h1>
      <p>Discover the world's most breathtaking destinations and 
        unique experiences with Wanderlust Adventures. Whether you're 
        dreaming of exploring exotic beaches, vibrant cities, or serene 
        mountains, our curated travel guides and 
        personalized itineraries will help you plan the perfect trip.</p>
        </div>
        <div className='Templates'>
        <img className='template1' src={Template1}  alt='temp1' />
      
        <img className='template3' src={Template3}  alt='temp3' />
         </div>
         </div>
    </>
    )
}
export default Content;