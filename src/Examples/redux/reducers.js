export function countReducer(state = { count: 10 }, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count + 5 };
    case "DEC":
      return { count: state.count - 5 };
    default:
      return state;
  }
}
