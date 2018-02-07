import React from "react";
import { combineReducers, createStore } from "redux";

const counter = (state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + action.amount };
  }
  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - action.amount };
  }
  return state;
};

const initialState = {
  name: "user",
  age: null
};

const user = (state = initialState, action) => {
  if (action.type === "CHANGE_NAME") {
    return { ...state, name: action.new_name };
  }
  if (action.type === "CHANGE_AGE") {
    return { ...state, age: action.new_age };
  }
  return state;
};

const reducer = combineReducers({
  counter: counter,
  user: user
});

const store = createStore(reducer);

store.dispatch({ type: "INCREMENT", amount: 5 });
store.dispatch({ type: "INCREMENT", amount: 15 });
store.dispatch({ type: "DECREMENT", amount: 10 });
store.dispatch({ type: "CHANGE_NAME", new_name: "David" });
store.dispatch({ type: "CHANGE_AGE", new_age: 26 });

const App = () => {
  console.log(store.getState());

  return (
    <div className="container">
      <h2>hello redux!</h2>
      <ul>
        <li>username: {store.getState().user.name}</li>
        <li>counter: {store.getState().counter.count}</li>
      </ul>
    </div>
  );
};

export default App;
