import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";

const App = ({ count, increment, decrement }) => (
  <div style={{ textAlign: "center" }}>
    <h2>{count}</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
  </div>
);

function mapStateToProps(state) {
  return { count: state };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
