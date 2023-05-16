import React from "react";
import "../App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todobody() {
  return (
    <div className="todoBody">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default Todobody;
