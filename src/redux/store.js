import { createStore } from "redux";
import { countReducer } from "./reducers";

// const reducers = combineReducers({
//   text: textReducer,
//   count: countReducer
// });

const store = createStore(countReducer);

export default store;
