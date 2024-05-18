import React from "react";

const ToDo = (props) => {
  return (
    <div className="todo">
      <div
        style={{
          textDecoration: props.toDo.complete ? "line-through" : "",
          fontSize: "30px",
          paddingRight: "100px",
        }}
        onClick={props.toggleComplete}
      >
        {props.toDo.text}
      </div>
      <button
        className="btn btn-[#6610f2]"
        onClick={props.onDelete}
        style={{ borderRadius: " 50%", height: "50px", width: "50px" }}
      >
        x
      </button>
    </div>
  );
};

export default ToDo;
