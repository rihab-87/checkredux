import { ADD_TASCK,DELETE_TASCK,FILTER_DONE_TASCK, FILTER_UNDONE_TASCK,EDIT_TASCK,CHECK_DONE_TASCK} from "../actions/actionsTypes"


const initialState=
   [] 

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
  case ADD_TASCK : return [...state,action.payload]
   case  DELETE_TASCK: return [...state].filter((el)=>el.id!=action.payload)
//  case CHECK_DONE_TASCK : return [...state].filter((el)=>el.id==action.payload).map((el)=>{return{...el, isDone:!el.isDone}})

    case CHECK_DONE_TASCK: return state.map((el)=> el.id == action.payload ? {...el,isDone:!el.isDone}:el)

    case EDIT_TASCK : return state.map((el)=>el.id==action.payload.id? {...el,description:action.payload.editTasck}:el)
default :return state;
    
}
}
export default todoReducer;