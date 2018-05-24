import React from "react";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";

function TodoList(props) {
  if (props.todos.length === 0) return "";
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
      <TodoFilter handleFilter={props.onFilter} filterType={props.filter} />
    </React.Fragment>
  );
}

export default TodoList;
