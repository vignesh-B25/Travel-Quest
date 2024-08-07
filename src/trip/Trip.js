import {useState} from 'react';
import { FaWpforms } from "react-icons/fa6";
import './trip.css'
function Trip(){
        const [Showform,setShowform]=useState(false);
         const Mouseon=()=>setShowform(true);
         //formdata
         const [Forminfo,setForminfo] =useState({Username:'',Uemail:'',Unum:''});
         const SaveForm=(e)=>{
            const name=e.target.name;
            const value=e.target.value;
            setForminfo(values=>({...values,[name]:value}))
        }
        const Formhandler=(e)=>{
         e.preventDefault();
         const{Username,Uemail,Unum}=Forminfo;
         if(Username && Uemail && Unum){
            setShowform(false);
            setForminfo({Username:'',Uemail:'',Unum:''});
            alert(`Hi ${Forminfo.Username},we are welcome you to start journey `);
           
         } else{
            alert('please fil all the details');
         }
        };
      
            
    return(
        <>
        <div className='formcontainer' > 
        <i style={{fontSize:'20px'}} onMouseEnter={Mouseon} >
            <FaWpforms style={{color:'orange'}} className='icon' />
         Fill the details here</i>
         {Showform &&(
        <form className='trip' onSubmit={Formhandler} >
            <label>Enter name:<br/>
            <input type='text' placeholder='EX:Ram'
            name='Username'
            value={Forminfo.Username}
            onChange={SaveForm}/>
            </label>
            <label>Enter email:<br/>
            <input type='email' placeholder='EX:vigneshbala2504@gmail.com' 
             name='Uemail'
             value={Forminfo.Uemail}
             onChange={SaveForm}/>
            </label>
            <label>Enter number:<br/>
            <input type='number' placeholder='EX:1234567890' 
             name='Unum'
             value={Forminfo.Unum}
             onChange={SaveForm}/> 
            </label><br/>
            <input type='submit'  />
        </form>)
        }
        
        </div>
     
        </>
       
        
)

}

export default Trip;