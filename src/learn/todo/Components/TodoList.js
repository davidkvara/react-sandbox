import React from "react";
import TodoItem from "./TodoItem";
import TodoPanel from "./TodoPanel";

function TodoList(props) {
  if (props.todoLengths.originalTodos === 0) return "";
  return (
    <React.Fragment>
      <ul>
        {props.todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              onChange={() => props.onCheck(todo.id)}
              onClick={() => props.onDelete(todo.id)}
              {...todo}
            />
          );
        })}
      </ul>
      <TodoPanel
        completed={props.todoLengths.activeTodos}
        handleFilter={props.onFilterChange}
        filterType={props.filter}
        clearCompleted={props.handleClear}
      />
    </React.Fragment>
  );
}

export default TodoList;
