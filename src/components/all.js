import React from 'react';
import {Button } from "react-bootstrap";
const all = ({handelall}) => {
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <Button style={{backgroundColor:" #ff8fc3" , color:"white",borderColor:"transparent" }} variant="outline-light" onClick= {handelall}>All tascks</Button>
        </div>
    );
}

export default all;
