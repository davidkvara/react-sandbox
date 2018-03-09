import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./examples/counter/counter";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer);

function reducer(state = { count: 0, total: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, total: state.total + 1 };
    case "DECREMENT":
      return { count: state.count - 1, total: state.total + 1 };
    default:
      return state;
  }
}

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
