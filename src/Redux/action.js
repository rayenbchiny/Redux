import { add, edit, remove } from "./const"

export const Addtask=(desc,isdone)=>{
    return {type:add ,payload:{description:desc ,isDone:isdone } }
}
export const DeleteTask=(id)=>{
    return{type:remove , payload:id}
}
export const Edit =()=>{
   return{type:edit,payload:}
}
