import React, { useState } from "react";

const TodosForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        className="input"
        placeholder="what todo?"
      />
    </form>
  );
};

export default TodosForm;
