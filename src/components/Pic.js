import React from 'react'
import { useDrag } from 'react-dnd'

function Pic({id,url}) {

  const [{isDragging}, drag] = useDrag(()=>({
    type:"image",
    item: {id:id},
    collect: (monitor)=>({
      isDragging: monitor.isDragging(),
    }),
}))



  return (
  <img
  ref={drag} 
  src={url} 
  id={id} 
  alt='smurfs' 
  style={{border : isDragging ? "5px solid pink" : "0px"}}/>
  )
}

export default Pic