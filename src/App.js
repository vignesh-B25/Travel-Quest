import React from 'react'
import Navbar from './Navbar.js'
import Content from './content/Content.js'
import Trip from './trip/Trip.js';
import About from './about/About.js'
import Footer from './footer/Footer.js';
import Place from './place/Placelist.js';
import './App.css';
const App = () => {
  return (
    <>
    <Navbar />
    <Content />
    <Trip />
    <About />
    <Place />
    <Footer />
    
    </>
  )
}

export default App;
