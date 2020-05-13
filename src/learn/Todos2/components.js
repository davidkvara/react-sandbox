import React from "react";

export const TodosInput = ({ onSubmit, input, onInputChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        value={input}
        onChange={onInputChange}
        className="input"
        placeholder="what todo?"
      />
    </form>
  );
};

export const TodosList = ({ todos, onCheckboxChange, onRemoveTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none"
            }}
          >
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
  );
};
