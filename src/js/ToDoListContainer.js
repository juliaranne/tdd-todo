import React from "react";
import ReactDOM from "react-dom";

const ToDoListContainer = props => (
  <ul className="email-form__attachments">Hello</ul>
);
export default ToDoListContainer;

const mountElement = document.getElementById("todo-list");
mountElement ? ReactDOM.render(<ToDoListContainer />, mountElement) : false;
