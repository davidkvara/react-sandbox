import React from "react";

const stil = {
  width: 260,
  background: "#fff",
  border: 0,
  boxShadow: "0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23)",
  padding: "1em",
  fontSize: 18
};

export class AverageBox extends React.Component {
  state = { value: "split this " };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <h2 style={{ marginTop: 14 }}>Example 2: {this.state.value}</h2>
        <input
          style={stil}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
