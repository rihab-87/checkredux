import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {addTodo} from '../actions/actions'
import {Button ,InputGroup,FormControl} from "react-bootstrap";
const Add = ({handeltask}) => {
const dispatch = useDispatch()
const[todo,setTodo]= useState({
    description:"",
    id:"",
    isDone:false
})
const[add,setAdd]= useState(false)
 const handelchange=(e)=>{setTodo({id:Math.random(), description:e.target.value,isDone:false})
    setAdd(false)
   
}
const handeladd=()=>{setAdd(true)
    dispatch(addTodo(todo))
       setTodo({...todo,description:""}) 
}
    return (
        <div>
            {/* <input type="text" placeholder="task" value={todo.description} onChange={handelchange}/>
            <button onClick={handeladd}> add</button> */}
            
    <InputGroup className="mb-3">
    <FormControl
    type="text"
    style={{width:"400px",borderTopLeftRadius:"10px",borderBottomLeftRadius:10}}
      placeholder="Enter a todo task"
      value={todo.description}
      onChange={handelchange}
      required
    />
    <InputGroup.Append>
      <Button type="submit" variant="outline-light" style={{backgroundColor:" #ff8fc3" , color:"white",borderTopRightRadius:"10px",borderBottomRightRadius:10}}  onClick={handeladd}>ADD</Button>
    </InputGroup.Append>
  </InputGroup>
          
        </div>
    );
}

export default Add;
