import React, { Component } from "react";

import { actionCreators } from "./TodoList";
import List from "./List";
import Input from "./Input";
import Title from "./Title";

export default class App extends Component {
  state = {};

  componentWillMount() {
    const { store } = this.props;

    const { todos } = store.getState();
    this.setState({ todos });

    this.unsubscribe = store.subscribe(() => {
      const { todos } = store.getState();
      this.setState({ todos });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAddTodo = text => {
    const { store } = this.props;

    store.dispatch(actionCreators.add(text));
  };

  onRemoveTodo = index => {
    const { store } = this.props;

    store.dispatch(actionCreators.remove(index));
  };

  render() {
    const { todos } = this.state;

    return (
      <div style={styles.container}>
        <Title>To-Do List</Title>
        <Input
          placeholder={"Type a todo, then hit enter!"}
          onSubmitEditing={this.onAddTodo}
        />
        <List list={todos} onClickItem={this.onRemoveTodo} />
      </div>
    );
  }
}

const styles = {
  container: {
    width: "500px",
    margin: "20px auto",
    padding: "0 1em",
    display: "flex",
    flexDirection: "column"
  }
};
