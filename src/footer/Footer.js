import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
       <div className='footerhead'>
        <h2>Tourism</h2>
        <p>what are you waiting for,just start the journey</p>
        <ul className='footerlist'>
          <li>Home</li>
          <li>About</li>
          <li>Tour</li>
        </ul>
        <div className='icon'>
        <i id='insta'><AiFillInstagram /></i>
        <i id='face'><FaFacebook /></i>
        <i id='gmail'><BiLogoGmail /></i>
        <i id='linked'><FaLinkedin /></i>
        </div>
         </div>
  )
}

export default Footer