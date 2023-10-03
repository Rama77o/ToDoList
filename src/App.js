import React, { useState } from 'react';
import "./App.css"
import ToDoList from './components/ToDoList';
import ToDo from './components/ToDo';

function App() {
  let [toDos, setToDos] = useState([]);
  const [toDoToShow, setToDoToShow] = useState("all")
  const [toggle, setToggle] = useState(true);

  const addItem = (toDo) => {
    setToDos([toDo, ...toDos])
  }

  const handleDelete = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id))
  }

  const handleUpdate = (ch) => {
    setToDoToShow(ch)
  }

  const toggleComplete = (id) => {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id === id) {
          return {
            ...toDo,
            complete: !toDo.complete
          }
        } else {
          return toDo
        }
      })
    )
  }

  const removeAllComleteToDo = () => {
    setToDos(toDos.filter((toDo) => !toDo.complete))
  }

  const removeActiveToDo = () => {
    setToDos(toDos.filter((toDo) => toDo.complete))
  }

  if (toDoToShow === "active") {
    toDos = toDos.filter((toDo) => !toDo.complete)
  }
  else if (toDoToShow === "complete") {
    toDos = toDos.filter((toDo) => toDo.complete)
  }
  return (
    <div className='App container'>
      <ToDoList onSubmit={addItem} />
      {
        toDos.map((toDo =>
          <ToDo
            key={toDo.id}
            toDo={toDo}
            onDelete={() => handleDelete(toDo.id)}
            toggleComplete={() => toggleComplete(toDo.id)}
          />))
      }
      <div className='three'>
        <button className='btn btn-[#afeeee]' onClick={() => handleUpdate("all")}>all</button>
        <button className='btn btn-[#afeeee]' onClick={() => handleUpdate("active")}>active</button>
        <button className='btn btn-[#afeeee]' onClick={() => handleUpdate("complete")}>complete</button>
      </div>
      <button className='btn btn-[#afeeee]' onClick={removeAllComleteToDo}>remove all complete todos</button>
      <button className='btn btn-[#afeeee]' onClick={removeActiveToDo}>remove all active todos</button>
      <button className='btn btn-[#afeeee]' onClick={() => {
        setToDos(toDos.map((toDo) => (
          {
            ...toDo,
            complete: toggle
          }
        ))
        )
        setToggle(!toggle)
      }}>toggle all complete{`${toggle}`}</button>
    </div>
  );
}

export default App;


