import React from "react";
import "./css/todo.css";

class Todo extends React.Component {
  state = { things: ["coffee", "milk"], item: "", message: "" };

  handleSubmit = e => {
    e.preventDefault();
    const { things, item } = this.state;
    const alreadyExists = things.includes(item);

    if (item.length < 1) {
      this.setState({ message: "input is empty" });
      return "";
    } else if (alreadyExists) {
      this.setState({ message: `${item} - already in the list` });
      return "";
    }

    const newList = things.concat(item);
    this.setState({ things: newList, item: "", message: "" });
  };

  handleChange = e => {
    this.setState({ item: e.target.value });
  };

  handleRemove = thing => {
    const newArr = this.state.things.filter(ox => ox !== thing);
    this.setState({ things: newArr });
    if (newArr.length === 0) {
      this.setState({ message: "nothing left" });
    }
  };

  render() {
    const { things, item, message } = this.state;
    return (
      <div className="shoping-app">
        <h2>Shoping List</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={item}
            placeholder="cheese"
            onChange={this.handleChange}
          />
          <button>add</button>
        </form>
        <table className="table">
          <caption className="caption">
            <p>{message}</p>
            {things.length > 0 && <p>{things.length} items in the list</p>}
          </caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {things.map((thing, i) => {
              return (
                <tr key={thing}>
                  <td>{i + 1}</td>
                  <td>{thing}</td>
                  <td>
                    <button onClick={() => this.handleRemove(thing)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Todo;
