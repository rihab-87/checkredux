import { ADD_TASCK,DELETE_TASCK,FILTER_DONE_TASCK, FILTER_UNDONE_TASCK,EDIT_TASCK,CHECK_DONE_TASCK} from "./actionsTypes"

export const addTodo=(newtasck)=>{
    return{
        type:ADD_TASCK,
        payload:newtasck
    }
        
    
}
export const Delete=(id)=>{
    return{
        type:DELETE_TASCK,
        payload:id
        
    }
}
export const Done=(id)=>{
    return{
        type:CHECK_DONE_TASCK,
        payload:id
        
    }
}
export const filterDone=()=>{
    return{
     type:FILTER_DONE_TASCK
 }
}
 export const filterUndone=()=>{
     return{
    type:FILTER_UNDONE_TASCK
}
}
export const edit=(id,editTasck)=>{
    return{
    type:EDIT_TASCK,
    payload:{id:id,editTasck}
    }
}
