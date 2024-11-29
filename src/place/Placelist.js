import React from 'react';
import {useEffect, useRef, useState} from 'react';
import { FiPlay,  FiPause  } from "react-icons/fi";
import Madagascar from './Nosybe.jpg';
import './place.css';

function Place(){
   const pls=useRef(null);
   
   const [isPlay, setIsplay]=useState(true);
   const [pause,setPause]=useState(false);
   useEffect(()=>
{
    const plslst=pls.current;
    plslst.innerHTML+= plslst.innerHTML;
},[]);
    const Aninone=()=>{
        if(isPlay){
            pls.current.style.overflowX='visible'; 
          }
          else{
            pls.current.style.overflowX='hidden'; 
          }
      setIsplay(!isPlay);
      setPause(!pause);
    }
    
    return (
        <>
    <h2>JUST CHOOSE THE PLACE AND PACK THINGS</h2>
    <button className='vidply'  onClick={Aninone}>{isPlay? <FiPlay />:<FiPause />}</button>
    <div className='pls' ref={pls}>
        <div className={`plslst ${pause? 'ani':''}`}>
    <img src={Madagascar} alt='Madagascar' />
    <p><b style={{background:'none', fontSize:'20px'}}>Location1 : Madagascar</b><br />
    Madagascar offers diverse attractions, from unique wildlife at Andasibe-Mantadia National Park, home to the indri lemur, to the stunning beaches of Nosy Be. Avenue of the Baobabs showcases iconic trees, while Isalo National Park offers dramatic sandstone landscapes.
     The island’s biodiversity and rich culture make it a memorable destination for travelers.
    </p>
    <button>Book Ticket</button>
    </div>
    <div className={`plslst ${pause? 'ani':''}`}>
    <img src={Madagascar} alt='Madagascar' />
    <p><b style={{background:'none', fontSize:'20px'}}>Location2 : Madagascar</b><br />
    Madagascar offers diverse attractions, from unique wildlife at Andasibe-Mantadia National Park, home to the indri lemur, to the stunning beaches of Nosy Be. Avenue of the Baobabs showcases iconic trees, while Isalo National Park offers dramatic sandstone landscapes.
     The island’s biodiversity and rich culture make it a memorable destination for travelers.
    </p>
    <button>Book Ticket</button>
    </div>
    <div className={`plslst ${pause? 'ani':''}`}>
    <img src={Madagascar} alt='Madagascar' />
    <p><b style={{background:'none', fontSize:'20px'}}>Location3 : Madagascar</b><br />
    Madagascar offers diverse attractions, from unique wildlife at Andasibe-Mantadia National Park, home to the indri lemur, to the stunning beaches of Nosy Be. Avenue of the Baobabs showcases iconic trees, while Isalo National Park offers dramatic sandstone landscapes.
     The island’s biodiversity and rich culture make it a memorable destination for travelers.
    </p>
    <button>Book Ticket</button>
    </div>
    <div className={`plslst ${pause? 'ani':''}`}>
    <img src={Madagascar} alt='Madagascar' />
    <p><b style={{background:'none', fontSize:'20px'}}>Location4 : Madagascar</b><br />
    Madagascar offers diverse attractions, from unique wildlife at Andasibe-Mantadia National Park, home to the indri lemur, to the stunning beaches of Nosy Be. Avenue of the Baobabs showcases iconic trees, while Isalo National Park offers dramatic sandstone landscapes.
     The island’s biodiversity and rich culture make it a memorable destination for travelers.
    </p>
    <button>Book Ticket</button>
    </div>
    <div className={`plslst ${pause? 'ani':''}`}>
    <img src={Madagascar} alt='Madagascar' />
    <p><b style={{background:'none', fontSize:'20px'}}>Location5 : Madagascar</b><br />
    Madagascar offers diverse attractions, from unique wildlife at Andasibe-Mantadia National Park, home to the indri lemur, to the stunning beaches of Nosy Be. Avenue of the Baobabs showcases iconic trees, while Isalo National Park offers dramatic sandstone landscapes.
     The island’s biodiversity and rich culture make it a memorable destination for travelers.
    </p>
    <button>Book Ticket</button>
    </div>
    <div className={`plslst ${pause? 'ani':''}`}>
    <img src={Madagascar} alt='Madagascar' />
    <p><b style={{background:'none', fontSize:'20px'}}>Location6 : Madagascar</b><br />
    Madagascar offers diverse attractions, from unique wildlife at Andasibe-Mantadia National Park, home to the indri lemur, to the stunning beaches of Nosy Be. Avenue of the Baobabs showcases iconic trees, while Isalo National Park offers dramatic sandstone landscapes.
     The island’s biodiversity and rich culture make it a memorable destination for travelers.
    </p>
    <button>Book Ticket</button>
    </div>
    </div>
    </>
    )
}
export default Place;