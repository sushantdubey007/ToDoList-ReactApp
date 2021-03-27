import React, { useState } from "react";
/*
function ToDoItem(prop) {
  const [isDone, setDone] = useState(false);
  function handleText() {
    setDone((preval) => {
      return !preval;
    });
  }

  return (
    <div onClick={handleText}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {prop.text}
      </li>
    </div>
  );
}
*/
function ToDoItem(prop) {
  return (
    <div
      onClick={() => {
        prop.onChecked(prop.id);
      }}
    >
      <li>{prop.text}</li>
    </div>
  );
}
export default ToDoItem;
