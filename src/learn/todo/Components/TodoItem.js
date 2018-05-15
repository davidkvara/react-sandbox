import React from "react";
import PropTypes from "prop-types";

export default function TodoList(props) {
  return (
    <li className="todo-item">
      <label>
        <Checkbox onChange={props.onChange} checked={props.completed} />{" "}
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

TodoList.propTypes = {
  completed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
