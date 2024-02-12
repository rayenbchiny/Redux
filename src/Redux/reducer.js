import { add, edit, remove } from "./const"

const initialState={Todo:[
    {id:0,description:'abc',isDone:true},
    {id:1,description:'def',isDone:true},
    {id:2,description:'hij',isDone:false}
]}

export const TodoReducer=(state=initialState,action)=>{

switch (action.type) {
    case add:
        return {...state,Todo:[...state.Todo,{...action.payload,id:state.Todo.length}]}

     case remove:
        return {...state,Todo:state.Todo.filter((el)=>el.id!==action.payload)}

    case edit : 
    return     

    default:
        return state
}
        


}
