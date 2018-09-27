import React, { PureComponent, Fragment } from "react";
import TodoItem from "./TodoItem";
import TodoPanel from "./TodoPanel";

class TodoList extends PureComponent {
  render() {
    const {
      todos,
      onCheck,
      onDelete,
      activeTodosLength,
      onFilterChange,
      handleClear
    } = this.props;
    return (
      <Fragment>
        <ul>
          {todos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                onCheck={() => onCheck(todo.id)}
                onDelete={() => onDelete(todo.id)}
                {...todo}
              />
            );
          })}
        </ul>
        <TodoPanel
          completed={activeTodosLength}
          handleFilter={onFilterChange}
          clearCompleted={handleClear}
        />
      </Fragment>
    );
  }
}

export default TodoList;
