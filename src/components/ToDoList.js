import React, { useState } from 'react'
import shortid from 'shortid';

const ToDoList = (props) => {
const [text, setText] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
        id: shortid.generate(),
        text: text,
        complete: false
    })
    setText("");
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text'  value={text} onChange={(e) => setText(e.target.value)}/>
            <button className='btn btn-[#afeeee]' onClick={handleSubmit}>add todo</button>
        </form>
    </div>
  )
}

export default ToDoList