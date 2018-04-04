import React from "react";

export default function TodoList(props) {
  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          onChange={props.onChange}
          checked={props.checked}
        />{" "}
        <span>{props.text}</span>
      </label>
      <button className="dlt" onClick={props.onClick}>
        &times;
      </button>
    </li>
  );
}
