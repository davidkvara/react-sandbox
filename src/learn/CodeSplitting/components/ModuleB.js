import React from "react";

export class AverageBox extends React.Component {
  state = { value: "Out of Space" };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div style={{ border: "2px solid #eee", padding: 10, margin: "10px 0" }}>
        <h2 style={{ marginTop: 0 }}>
          Module B{" "}
          <span role="img" aria-labelledby="slice of pizza">
            🍕
          </span>
        </h2>
        <p>
          <mark>{this.state.value}</mark>
        </p>
        <input
          style={styles}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const styles = {
  width: 250,
  border: "1px solid #ddd",
  borderRadius: 4,
  padding: 8,
  fontSize: 17
};
