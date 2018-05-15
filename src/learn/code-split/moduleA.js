import React from "react";
import styled from "styled-components";

export default class Widget extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <Header>Example1 - dynamic import </Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22
          }}
        >
          <Button onClick={this.increment}>+</Button>
          <div style={{ minWidth: 100, textAlign: "center", fontWeight: 600 }}>
            {this.state.count}
          </div>
          <Button onClick={this.decrement}>-</Button>
        </div>
        <p>
          The best way to introduce code-splitting into your app is through the
          dynamic <code>import()</code> syntax.
        </p>
      </div>
    );
  }
}

const Button = styled.button`
  font-size: 24px;
  padding: 10px 20px;
  background: #fff;
  width: 60px;
  border: 1px solid #ddd;
  &:focus {
    background: #f9f9f9;
  }
`;

const Header = props => <h2 style={{ marginTop: 10 }}>{props.children}</h2>;
