/* https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2 */

import React, { Component } from "react";

export default class App extends Component {
  state = {
    newItem: "",
    list: []
  };

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    window.addEventListener("beforeunload", this.saveStateToLocalStorage);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.saveStateToLocalStorage);

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage = () => {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  };

  saveStateToLocalStorage = () => {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  };

  updateInput = e => {
    this.setState({ newItem: e.target.value });
  };

  addItem = e => {
    e.preventDefault();
    if (!this.state.newItem.trim()) return;

    const newItem = {
      id: Date.now(),
      value: this.state.newItem
    };

    this.setState({
      list: [...this.state.list, newItem],
      newItem: ""
    });
  };

  deleteItem = id => {
    const updatedList = this.state.list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  };

  render() {
    return (
      <div className="container">
        <h1>React LocalStorage Tutorial</h1>

        <div
          style={{
            padding: "2rem",
            background: "beige"
          }}
        >
          <form onSubmit={this.addItem}>
            <label htmlFor="input">
              <p>Add an item to the list</p>
            </label>
            <input
              type="text"
              placeholder="Type item here"
              value={this.state.newItem}
              id="input"
              onChange={this.updateInput}
            />
            <button>add item</button>
          </form>
          <List items={this.state.list} onDelete={this.deleteItem} />
        </div>
      </div>
    );
  }
}

const List = props => (
  <ul>
    {props.items.map(item => (
      <li key={item.id}>
        {item.value}{" "}
        <button onClick={() => props.onDelete(item.id)}>remove</button>
      </li>
    ))}
  </ul>
);
