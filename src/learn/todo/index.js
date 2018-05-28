import React from "react";
import uuidv1 from "uuid";
import "./todo.css";
import Input from "./Components/Input";
import TodoList from "./Components/TodoList";

class Todo extends React.Component {
  state = {
    value: "",
    todos: [
      { text: "sleep tight", completed: true, id: 1 },
      { text: "write code", completed: false, id: 2 },
      { text: "don't stop", completed: true, id: 3 }
    ],
    visibility_filter: "SHOW_ALL"
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    if (e.key === "Enter") {
      if (!this.state.value.trim()) return;

      const id = uuidv1();
      const newTodo = { text: this.state.value, completed: false, id };
      this.setState({
        todos: [...this.state.todos, newTodo],
        value: ""
      });
    }
  };

  handleToggleCheck = todoID => {
    const todos = this.state.todos.map(
      todo =>
        todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos });
  };

  handleDelete = todoID => {
    const newTodos = this.state.todos.filter(todo => todo.id !== todoID);
    this.setState({ todos: newTodos });
  };

  handleFilter = filterType => {
    this.setState({ visibility_filter: filterType });
  };

  clearCompleted = () => {
    const activeTodos = this.state.todos.filter(todo => !todo.completed);

    this.setState({ todos: activeTodos });
  };

  render() {
    // displayed todos
    const todos = filter(this.state.visibility_filter, this.state.todos);
    // pass these lengths for displaying stats in panel
    // I know I could pass the whole todos,
    // but i'm not sure if that's a good idea
    // TODO: check compatibility with best practices
    const lengthOf = {
      activeTodos: filter("SHOW_ACTIVE", this.state.todos).length,
      originalTodos: this.state.todos.length
    };
    return (
      <div className="todo">
        <h1 className="td-title">todos</h1>
        <Input
          onChange={this.handleChange}
          value={this.state.value}
          onKeyPress={this.handleSubmit}
        />
        <TodoList
          todos={todos}
          onDelete={this.handleDelete}
          onCheck={this.handleToggleCheck}
          filter={this.state.visibility_filter}
          onFilterChange={this.handleFilter}
          todoLengths={lengthOf}
          handleClear={this.clearCompleted}
        />
      </div>
    );
  }
}

function filter(filterType, arr) {
  switch (filterType) {
    case "SHOW_COMPLETED":
      return arr.filter(todos => todos.completed);
    case "SHOW_ACTIVE":
      return arr.filter(todos => !todos.completed);
    default:
      return arr;
  }
}

export default Todo;
