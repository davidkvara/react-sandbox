import React from "react";

export default function TodoList(props) {
  return (
    <li className="todo-item">
      <label>
        <Checkbox onChange={props.onChange} checked={props.checked} />{" "}
        <span>{props.text}</span>
      </label>
      <CloseButton onClick={props.onClick}>&times;</CloseButton>
    </li>
  );
}

function Checkbox(props) {
  return <input type="checkbox" {...props} />;
}

function CloseButton(props) {
  return <button className="dlt" {...props} />;
}
