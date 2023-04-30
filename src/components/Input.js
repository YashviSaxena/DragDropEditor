import React from 'react'
import { useDrag } from 'react-dnd'

function Input({id}) {

const [{isDragging}, drag] = useDrag(()=>({
      type:"input",
      item: {id:id},
      collect: (monitor)=>({
        isDragging: monitor.isDragging(),
      }),
}))


  return(
  <input 
  ref={drag}
  type='input' 
  id={id} 
  placeholder="smurfss" 
  className='flex  mt-32 mr-10 bg-blue-200 text-blue-900 p-3' 
  style={{border : isDragging ? "5px solid pink" : "0px"}}/>)
}

export default Input