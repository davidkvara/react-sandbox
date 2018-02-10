// more at :: https://reactjs.org/docs/animation.html
import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./some.css";

class TodoList extends React.Component {
  state = { items: ["hello", "world", "click", "me"], value: "" };

  handleAdd = e => {
    e.preventDefault();
    const newItems = this.state.items.concat(this.state.value);
    this.setState({ items: newItems, value: "" });
  };

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleAdd}>
          <input
            type="text"
            style={{ padding: "4px 6px" }}
            value={this.state.value}
            placeholder="add item"
            onChange={e => this.setState({ value: e.target.value })}
          />
        </form>
        <ReactCSSTransitionGroup
          className="grid-container"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.items.map((item, i) => (
            <div
              key={item}
              className="item"
              onClick={() => this.handleRemove(i)}
            >
              {item}
            </div>
          ))}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default TodoList;
