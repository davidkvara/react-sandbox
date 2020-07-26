import React, { useReducer } from "react";
import "./some.css";
import TodosForm from "./components/TodosForm";
import TodosList from "./components/TodosList";
import Filters from "./components/Filters";
import { todosReducer } from "./reducers";

const initialState = {
  todos: [],
  filter_type: "SHOW_ALL"
};

const App = () => {
  const [state, dispatch] = useReducer(todosReducer, initialState);
  const { todos, filter_type } = state;

  const handleSubmit = value => {
    if (value.trim().length < 1) return;
    dispatch({ type: "addTodo", value });
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

  const handleFilter = filter => {
    dispatch({ type: "setFilter", filter });
  };

  const theTODOS = filteredTODOS(todos, filter_type);

  return (
    <div className="container mt">
      <TodosForm addTodo={handleSubmit} />
      <TodosList
        todos={theTODOS}
        onCheckboxChange={handleToggleCheck}
        onRemoveTodo={handleRemove}
      />

      {todos.length > 0 && (
        <Filters setFilter={handleFilter} onClear={handleClear} />
      )}
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

export default App;
