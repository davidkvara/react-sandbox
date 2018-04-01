/*export function textReducer(state = { text: "Initial text" }, action) {
  switch (action.type) {
    case "CHANGE_TEXT":
      return { ...state, text: action.NEW_TEXT };
    default:
      return state;
  }
}*/

const initialState = {
  count: 0
};

export function countReducer(state = initialState, action) {
  switch (action.type) {
    case "INC_COUNT":
      return { count: state.count + action.by };
    case "DEC_COUNT":
      return { count: state.count - action.by };
    default:
      return state;
  }
}
