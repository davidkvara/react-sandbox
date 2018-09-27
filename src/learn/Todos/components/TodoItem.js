import React from "react";
import PropTypes from "prop-types";

export default function TodoList({ onCheck, completed, text, onDelete }) {
  return (
    <li className="todo-item">
      <label>
        <Checkbox onChange={onCheck} checked={completed} /> <span>{text}</span>
      </label>
      <CloseButton onClick={onDelete}>&times;</CloseButton>
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
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
