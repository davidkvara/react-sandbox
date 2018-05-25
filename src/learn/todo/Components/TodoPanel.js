import React from "react";

const TodoPanel = props => (
  <div className="todo-filters">
    <span>
      {props.completed} {props.completed === 1 ? "item left" : "items left"}
    </span>
    <div>
      <button onClick={() => props.handleFilter("SHOW_ALL")}>all</button>
      <button onClick={() => props.handleFilter("SHOW_COMPLETED")}>
        completed
      </button>
      <button onClick={() => props.handleFilter("SHOW_ACTIVE")}>active</button>
    </div>
    <button onClick={props.clearCompleted}>Clear completed</button>
  </div>
);

export default TodoPanel;
