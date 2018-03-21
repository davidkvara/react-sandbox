import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { reducer } from "./reduxTodo/TodoList";
import App from "./reduxTodo/App";

// example from http://www.react.express/react_redux

const store = createStore(reducer);

// Pass the store into the app container
ReactDOM.render(<App store={store} />, document.querySelector("#root"));
