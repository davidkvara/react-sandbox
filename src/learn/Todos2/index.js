import React, { useReducer } from "react";
import "./some.css";
import { TodosInput, TodosList } from "./components";
import { todosReducer } from "./reducers";

const initialState = {
  todos: [],
  input: "",
  filter_type: "SHOW_ALL"
};

const Todo = () => {
  const [state, dispatch] = useReducer(todosReducer, initialState);
  const { todos, input, filter_type } = state;

  const handleChange = e => {
    dispatch({ type: "inputChange", value: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim().length < 1) return;
    dispatch({ type: "addTodo" });
  };

  const handleToggleCheck = id => {
    dispatch({ type: "toggleTodo", id });
  };

  const handleRemove = id => {
    dispatch({ type: "removeTodo", id });
  };

  const handleClear = () => {
    dispatch({ type: "clearTodos" });
  };

  const setFilter = filter => {
    dispatch({ type: "setFilter", filter });
  };

  const renderFilterButton = (filterType, label) => {
    // returns filter buttons
    return <button onClick={() => setFilter(filterType)}>{label}</button>;
  };

  const theTODOS = filteredTODOS(todos, filter_type);

  return (
    <div className="container mt">
      <TodosInput
        input={input}
        onInputChange={handleChange}
        onSubmit={handleSubmit}
      />
      <TodosList
        todos={theTODOS}
        onCheckboxChange={handleToggleCheck}
        onRemoveTodo={handleRemove}
      />
      {/* filter buttons */}
      {renderFilterButton("SHOW_ALL", "all")}
      {renderFilterButton("SHOW_ACTIVE", "active")}
      {renderFilterButton("SHOW_COMPLETED", "completed")}
      <button onClick={handleClear}>clear completed</button>
      {/* filter buttons */}
    </div>
  );
};

function filteredTODOS(todos, filterType) {
  if (filterType === "SHOW_COMPLETED") {
    return todos.filter(todo => todo.completed);
  } else if (filterType === "SHOW_ACTIVE") {
    return todos.filter(todo => !todo.completed);
  } else {
    return todos;
  }
}

export default Todo;
