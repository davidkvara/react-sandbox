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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <path d="M0 0h48v48h-48z" fill="none" />
          <path d="M38 6h-8.37c-.82-2.32-3.02-4-5.63-4s-4.81 1.68-5.63 4h-8.37c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm-14 0c1.1 0 2 .89 2 2s-.9 2-2 2-2-.89-2-2 .9-2 2-2zm4 28h-14v-4h14v4zm6-8h-20v-4h20v4zm0-8h-20v-4h20v4z" fill="slategray" />
        </svg>

        <h2 className="todo-title">Shoping List</h2>
        <form onSubmit={this.handleSubmit}>
          <input
          className="inp"
            type="text"
            value={item}
            placeholder="cheese"
            onChange={this.handleChange}
          />
          <button className="sub">add</button>
        </form>
        <table className="tbl">
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
