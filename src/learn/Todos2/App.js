import React, { Fragment } from "react";

const APP = ({
  todos,
  onSubmit,
  input,
  onInputChange,
  onCheckboxChange,
  onRemoveTodo
}) => {
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onInputChange} />
      </form>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onCheckboxChange(todo.id)}
                  style={{ marginRight: 10 }}
                />
                {todo.text}
              </label>
              <button
                onClick={() => onRemoveTodo(todo.id)}
                style={{ marginLeft: 10 }}
              >
                &times;
              </button>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default APP;
