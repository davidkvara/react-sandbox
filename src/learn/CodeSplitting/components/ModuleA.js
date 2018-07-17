import React from "react";

export default class Widget extends React.Component {
  state = { number: 300 };

  increment = () => {
    this.setState(({ number }) => ({ number: number + 1 }));
  };

  decrement = () => {
    this.setState(({ number }) => ({ number: number - 1 }));
  };

  render() {
    return (
      <div style={{ border: "2px solid #eee", padding: 10, margin: "10px 0" }}>
        <h2 style={{ marginTop: 0 }}>
          Module A{" "}
          <span role="img" aria-labelledby="slice of pizza">
            🍕
          </span>
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22
          }}
        >
          <button style={button} onClick={this.increment}>
            +
          </button>
          <div style={{ minWidth: 100, textAlign: "center", fontWeight: 600 }}>
            <mark>{this.state.number}</mark>
          </div>
          <button style={button} onClick={this.decrement}>
            -
          </button>
        </div>
        <p>
          The best way to introduce code-splitting into your app is through the
          dynamic <code>import()</code> syntax.
        </p>
      </div>
    );
  }
}

const button = {
  fontSize: "1.5rem",
  padding: "10px 20px",
  background: "#fff",
  width: 60,
  border: "1px solid #ddd",
  borderRadius: 3
};
