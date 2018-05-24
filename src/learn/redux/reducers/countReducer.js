import { counter } from "../constants";

export function countReducer(state = 10, action) {
  switch (action.type) {
    case counter.INCREMENT:
      return state + 5;
    case counter.DECREMENT:
      return state - 5;
    default:
      return state;
  }
}
