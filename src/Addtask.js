import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Addtask } from './Redux/action'

function AddTask() {
 
    const [desc,setdesc]=useState('')
    const [isdone,setisdone]=useState(false)
    const disptach=useDispatch()
   
    return (
  <div >
        <p>add task</p>
        <label>Description:</label>
        <input type='text'   onChange={(e)=>setdesc(e.target.value)}  /> 
        <label>isDone</label>
        <input type='checkbox'   onChange={(e)=>setisdone(!isdone)} />
        <button  onClick={()=>disptach(Addtask(desc,isdone))}  >ADD task</button>
      
    </div>
  )
}

export default AddTask
