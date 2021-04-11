import React,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Done } from '../actions/actions';
import Deletetsk from './delete';
import Edit from './Edit';
import './tasck.css'
import {Button,InputGroup,FormControl, FormLabel } from "react-bootstrap";


const Tasck = ({el,choix}) => {
const dispatch=useDispatch()
const [chekdone ,setChekdone]=useState(false)

useEffect(() => {
 let ip=document.getElementById(el.id)
 console.log(ip)
 ip.checked=el.isDone
})
    const checkdone=(e)=> { 
       dispatch(Done(e.target.id))
    }
     
    return (
        <div className="task-style">
           <InputGroup style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <InputGroup.Append>
           <InputGroup.Checkbox id= {el.id} onChange={checkdone} value={chekdone} Checked  />
           
              { el.isDone?<FormLabel style={{textAlign:"center",display:"flex",alignItems:"center",marginBottom:"16px",color:"#05c3bc"}}> Done</FormLabel>:<FormLabel  style={{textAlign:"center",display:"flex",alignItems:"center",marginBottom:"16px",color:"#ef0873e6"}}> Undone</FormLabel>}
           </InputGroup.Append>
           {el.isDone? <div style={{textDecoration:"line-through"}}>  <Edit idel={el.id} desc= {el.description}/></div> :<div><Edit idel={el.id} desc= {el.description}/></div>}
           <InputGroup.Append>
           <Deletetsk idel={el.id} />
           </InputGroup.Append>
           </InputGroup> 

           {/* <input type="checkbox"  id= {el.id} onChange={checkdone} Checked={el.isDone} /> <label >Done</label> */}

       {/* {el.isDone? <div style={{textDecoration:"line-through"}}>  <Edit idel={el.id} desc= {el.description}/></div> :<div><Edit idel={el.id} desc= {el.description}/></div>}
        <Deletetsk idel={el.id} />
        <input type="checkbox"  id= {el.id} onChange={checkdone} Checked={el.isDone} /> <label >Done</label>
              
         */}
      
        
        
        </div>
    );
}

export default Tasck;
