import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Delete from './delete';
import Tasck from './tasck';
import {Container,Row} from "react-bootstrap";
const Listtasck = ({choix}) => {
    const tascks=useSelector(state=>state.todoReducer)
const affiche=(choix)=>{
    switch(choix){
        case "done" :return (tascks.filter((el)=>el.isDone===true)).map((el)=><Tasck el={el} choix={choix} />);break;
        case "undone" :return (tascks.filter((el)=>el.isDone===false)).map((el)=><Tasck el={el} choix={choix} />);break;
        default : return tascks.map((el,idx)=><Tasck el={el} />)
    }
}


    return (
    <Container>
        {affiche(choix)}
       
  </Container>
    );
}

export default Listtasck;
