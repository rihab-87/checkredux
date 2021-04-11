import React from 'react';
import { useDispatch } from 'react-redux';
import { filterDone } from '../actions/actions';
import {Button } from "react-bootstrap";

const Filterdone = ({handelfilterdone}) => {
    
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
           <Button  style={{backgroundColor:" #ff8fc3" , color:"white" ,borderColor:"transparent"}} variant="outline-light" onClick= {handelfilterdone}>Done</Button> 
        </div>
    );
}

export default Filterdone;
