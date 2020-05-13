export function todosReducer(state, action) {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: state.todos.concat({
          text: state.input,
          id: Date.now(),
          completed: false
        }),
        input: ""
      };
    case "inputChange":
      return { ...state, input: action.value };
    case "toggleTodo":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case "removeTodo":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case "setFilter":
      return {
        ...state,
        filter_type: action.filter
      };
    case "clearTodos":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };

    default:
      break;
  }

  return state;
}
