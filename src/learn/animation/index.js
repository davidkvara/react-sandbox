import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./css/some.css";

export default class TodoList extends React.Component {
  state = {
    items: [{ name: "Hello", id: 45 }, { name: "Universe", id: 22 }],
    value: ""
  };

  handleAdd = e => {
    e.preventDefault();
    const newItem = {
      name: this.state.value,
      id: Date.now()
    };
    this.setState({ items: [...this.state.items, newItem], value: "" });
  };

  handleRemove = id => {
    const items = this.state.items.filter(item => item.id !== id);
    this.setState({ items });
  };

  render() {
    return (
      <div className="wrapper">
        <h2>List of things</h2>
        <Input
          onSubmit={this.handleAdd}
          value={this.state.value}
          placeholder="add item"
          onChange={e => this.setState({ value: e.target.value })}
        />
        <ListItems items={this.state.items} handleRemove={this.handleRemove} />
      </div>
    );
  }
}

const Input = ({ onSubmit, ...rest }) => (
  <form onSubmit={onSubmit}>
    <input {...rest} className="input" />
  </form>
);

class ListItems extends React.PureComponent {
  render() {
    const todos = this.props.items.map(item => (
      <li
        key={item.id}
        className="item"
        onClick={() => this.props.handleRemove(item.id)}
      >
        {item.name}
      </li>
    ));
    return (
      <ReactCSSTransitionGroup
        component="ul"
        className="list"
        transitionName="list"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {todos}
      </ReactCSSTransitionGroup>
    );
  }
}
