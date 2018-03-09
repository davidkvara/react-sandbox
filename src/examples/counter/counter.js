import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  max-width: 620px;
  width: 100%;
  margin: 30px auto;
  padding: 1em;
  background: #fff;
  box-shadow: 0 0 8px -2px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.h3`
  font-weight: 400;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #444;
  margin-top: 14px;
`;

const Span = styled.span`
  font-weight: 600;
  color: red;
`;

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    const { count, total } = this.props;
    const average = count / total;
    return (
      <Container>
        <h2>rate our app</h2>
        <button onClick={this.increment}>Nice</button>{" "}
        <button onClick={this.decrement}>Meh</button>
        <Heading>
          Rating: <Span>{count}</Span> out of <Span>{total}</Span> total votes!
        </Heading>
        {total > 0 && (
          <Heading>
            <strong>average rating:</strong> <Span> {average.toFixed(2)} </Span>
          </Heading>
        )}
        <span>state managed with redux</span>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
    total: state.total
  };
}

export default connect(mapStateToProps)(Counter);
