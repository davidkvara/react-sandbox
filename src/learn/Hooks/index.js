import React, { useState } from "react";

export default () => {
  const [todos, addTodo] = useState([{ text: "be cool", id: "aham" }]);
  const [value, updateValue] = useState("");

  function addOne(e) {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: value
    };
    addTodo(todos.concat(newTodo));
    updateValue("");
  }

  return (
    <div className="container">
      <h2>Todos</h2>
      <form onSubmit={addOne}>
        <input value={value} onChange={e => updateValue(e.target.value)} />
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <h3>{value}</h3>
    </div>
  );
};
