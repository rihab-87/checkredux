import React from 'react';
import { useDispatch } from 'react-redux';
import { filterUndone } from '../actions/actions';
import {Button } from "react-bootstrap";
const Filterundone = ({handelfilterun}) => {
   
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <Button  style={{backgroundColor:" #ff8fc3" , color:"white",borderColor:"transparent"}} variant="outline-light" onClick={handelfilterun}>Undone</Button>
        </div>
    );
}

export default Filterundone;
