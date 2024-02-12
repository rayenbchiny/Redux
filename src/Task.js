import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteTask } from './Redux/action'

function Task({el}) {
    const disptach=useDispatch()
const [boolean,setboolean]=useState()
const [EditTask,setEditTask]=useState()

  return (
    <div style={{display:"flex",gap:"50px"}}    >
      <p>id:{el.id}</p>
      <p>{el.description}</p>
      <input type="checkbox"   checked={el.isDone}  />

      <button onClick={()=>disptach(DeleteTask(el.id))}   >x</button>
   { boolean ? <> <input type='text' onChange={(e)=>setEditTask(e.target.value)}     /> <button onClick={()}    >save</button></>: null}
      <button  onClick={()=>setboolean(!boolean)}  >Edit</button>
    </div>
  )
}

export default Task

