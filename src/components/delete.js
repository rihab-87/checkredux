import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Delete} from '../actions/actions';
import {Button } from "react-bootstrap";
const Deletetsk = ({idel}) => {
  const dispatch=useDispatch();
   const  handelclick=(e)=>{
     dispatch(Delete(e.target.id))
    console.log(e.target.id)
}
    return (
        <div>
     <Button  style={{width:"40px",padding:"3px"}} variant="outline-light" id={idel} onClick={handelclick}><img src="delete.svg"alt="delete"  id={idel} style={{width:"100%"}}/> </Button>       
        </div>
    );
    // <img src="delete.svg"alt="delete" style={{width:"100%"}}/
}

export default Deletetsk;
