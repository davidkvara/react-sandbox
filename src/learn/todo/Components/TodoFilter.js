import React from "react";

const TodoFilter = props => (
  <div className="todo-filters">
    <button onClick={() => props.handleFilter("SHOW_ALL")}>show all</button>
    <button onClick={() => props.handleFilter("SHOW_COMPLETED")}>
      completed
    </button>
    <button onClick={() => props.handleFilter("SHOW_ACTIVE")}>active</button>
  </div>
);

export default TodoFilter;
