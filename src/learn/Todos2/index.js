import React, { Component } from "react";
import TodosApp from "./App";

class Todo extends Component {
  state = { todos: [], input: "", filter_type: "SHOW_ALL" };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input.length < 1) return;

    const newTodoItem = {
      id: Date.now(),
      text: this.state.input,
      completed: false
    };
    this.setState({ todos: this.state.todos.concat(newTodoItem), input: "" });
  };

  handleToggleCheck = id => {
    const todos = this.state.todos.map(
      todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
    this.setState({ todos });
  };

  handleRemove = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };

  renderFilterButton(filterType, label) {
    return <button onClick={() => this.setFilter(filterType)}>{label}</button>;
  }

  setFilter = filter => {
    this.setState({ filter_type: filter });
  };

  hnadleClear = () => {
    const todos = this.state.todos.filter(todo => !todo.completed);

    this.setState({ todos });
  };

  render() {
    const theTODOS = filteredTODOS(this.state.todos, this.state.filter_type);

    return (
      <div className="container">
        <TodosApp
          todos={theTODOS}
          input={this.state.input}
          onInputChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onCheckboxChange={this.handleToggleCheck}
          onRemoveTodo={this.handleRemove}
          onClear={this.handleClear}
        />
        {this.renderFilterButton("SHOW_ALL", "all")}
        {this.renderFilterButton("SHOW_ACTIVE", "active")}
        {this.renderFilterButton("SHOW_COMPLETED", "completed")}
        <button onClick={this.hnadleClear}>clear completed</button>
      </div>
    );
  }
}

function filteredTODOS(todos, filterType) {
  if (filterType === "SHOW_COMPLETED") {
    return todos.filter(todo => todo.completed);
  } else if (filterType === "SHOW_ACTIVE") {
    return todos.filter(todo => !todo.completed);
  } else {
    return todos;
  }
}

export default Todo;
