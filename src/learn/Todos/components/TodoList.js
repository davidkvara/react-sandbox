import React from "react";
import TodoItem from "./TodoItem";
import TodoPanel from "./TodoPanel";

class TodoList extends React.Component {
  render() {
    // console.log("list rendered");
    const {
      todos,
      onCheck,
      onDelete,
      activeTodosLength,
      onFilterChange,
      handleClear
    } = this.props;
    return (
      <>
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
      </>
    );
  }
}

export default TodoList;
