import React from "react";
import "./todo.css";

class Todo extends React.Component {
  state = {
    value: "",
    todos: [
      { text: "sleep tight", completed: true },
      { text: "write code", completed: false },
      { text: "don't stop", completed: true }
    ]
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const todoKeys = this.state.todos.map(todo => todo.text);
    const alreadyExist = todoKeys.includes(this.state.value);
    if (!this.state.value || alreadyExist) {
      return;
    }
    const newItem = { text: this.state.value, completed: false };
    this.setState({ todos: this.state.todos.concat(newItem), value: "" });
  };

  handleToggleCheck = i => {
    const newTodos = this.state.todos.map((todo, index) => {
      if (index === i) {
        return {
          text: todo.text,
          completed: !todo.completed
        };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  handleDelete = it => {
    const newTodos = this.state.todos.filter(todo => todo.text !== it.text);
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="todo">
        <h1 className="td-title">todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
            placeholder="enter todo here"
            className="input"
          />
          <span className="focus-border" />
        </form>
        <ul>
          {this.state.todos.map((todo, i) => {
            return (
              <li key={todo.text} className="todo-item">
                <label>
                  <input
                    type="checkbox"
                    onChange={() => this.handleToggleCheck(i)}
                    checked={todo.completed}
                  />{" "}
                  <span>{todo.text}</span>
                </label>
                <button className="dlt" onClick={() => this.handleDelete(todo)}>
                  &times;
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
