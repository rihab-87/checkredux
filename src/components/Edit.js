
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './edit.css'
import { edit } from '../actions/actions';
import {Button,InputGroup,FormControl } from "react-bootstrap";

const Edit = ({idel ,desc}) => {
const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const [edittsk, setEdittsk] = useState({desc})
    console.log(edittsk)
    const handleShow = () => setShow(true);
    const handelchange=(e)=>{setEdittsk(e.target.value)
      dispatch(edit(idel,edittsk))}
    // const handleClose = () => {setShow(false);
    //     dispatch(edit(idel,edittsk))}
        // const fct=(e)=>e.target.value=desc
        const handelsave=(e)=>{
          console.log(e)
          console.log(edittsk)
         if( e.key==="Enter"){
          setShow(false)}
        }

    return (
        
       <div>
            {/* {show? <input type="text" onFocus={fct}  onChange={handelchange}/>:<p> {desc}</p>}
           <Button variant="primary" onClick={handleShow}>
        edit tasck
      </Button>
 <Button variant="primary" onClick={handleClose}>
 Save Changes
</Button> */}
<InputGroup>
  {show?
    <FormControl
    style={{width:"300px"}}
      defaultValue={desc}
      onChange={handelchange} onKeyPress={handelsave} />:<p style={{width:"300px",textAlign:"center", display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center",overflowWrap:"break-word"}}> {desc}</p>}
   <InputGroup.Append>
      <Button  style={{width:"40px",padding:"3px"}} variant="outline-light"onClick={handleShow}  > <img src="edit.svg"alt="edit" style={{width:"100%"}}/></Button>
      </InputGroup.Append>
      </InputGroup>  
          {/* <Button style={{width:"80px"}} variant="outline-secondary" ><img src="diskette.svg"alt="save" style={{width:"100%"}}/></Button> */}


</div>

    );
}

export default Edit;
