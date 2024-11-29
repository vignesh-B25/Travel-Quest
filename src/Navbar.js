import React from 'react'
import Logo from './travel.jpeg';
import './Navbar.css';
import About from './about/About';
const Navbar = () => {
  return (
   
     <div className='Navcontainer'>
        <img src={Logo}  alt='log' />
            <div className='Navlist'>
                <div className='Navbar'>
                      <a href={About}> <div className='Navitems'>Home</div></a>
                       <div className='Navitems'>About</div>
                       <div className='Navitems'>Tour</div>
                       <div className='btn'>
                        <button>Login</button>
                        <button>Register</button>
                       </div>
                     
                </div>
               </div>

             
     </div>
  )
}

export default Navbar