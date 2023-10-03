import React from 'react'

const ToDo = (props) => {
  return (
    <div className='todo'>
        <div style={{textDecoration: props.toDo.complete ? "line-through" : ""}} onClick={props.toggleComplete}>{props.toDo.text}</div>
        <button className='btn btn-[#6610f2]' onClick={props.onDelete}>x</button>
    </div>
  )
}

export default ToDo;