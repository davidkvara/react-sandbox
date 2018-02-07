import React from "react";
import "./todo.css";

class Todo extends React.Component {
  state = {
    value: "",
    todos: [
      { item: "sleep tight", completed: true },
      { item: "write code", completed: false },
      { item: "don't stop", completed: true }
    ],
    visibilityFilter: "SHOW_ALL"
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = { item: this.state.value, completed: false };
    this.setState({ todos: this.state.todos.concat(newItem), value: "" });
  };

  handleToggleCheck = i => {
    const newTodos = this.state.todos.map((todo, index) => {
      if (index === i) {
        return {
          item: todo.item,
          completed: !todo.completed
        };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };
  /*
  showComplete = () => {
    const completed = this.state.todos.filter(todo => todo.completed);
    this.setState({ todos: completed });
  };

  showActive = () => {
    const active = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos: active });
  };*/

  render() {
    return (
      <div className="todo">
        <h1 className="td-title">todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            placeholder="enter todo"
            className="input"
          />
          <span className="focus-border" />
        </form>
        <ul>
          {this.state.todos.map((todo, i) => {
            if (todo.completed) {
              return (
                <li key={todo.item + i} className="todo-item">
                  <strike>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => this.handleToggleCheck(i)}
                        checked={todo.completed}
                      />{" "}
                      {todo.item}
                    </label>
                  </strike>
                </li>
              );
            }
            return (
              <li key={todo.item + i} className="todo-item">
                <label>
                  <input
                    type="checkbox"
                    onChange={() => this.handleToggleCheck(i)}
                    checked={todo.completed}
                  />{" "}
                  {todo.item}
                </label>
              </li>
            );
          })}
        </ul>
        {/* <div>
          <button onClick={this.showComplete}>completed</button>
          <button onClick={this.showActive}>active</button>
          <button onClick={this.showAll}>all</button>
        </div> */}
      </div>
    );
  }
}

export default Todo;
