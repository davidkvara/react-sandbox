import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import Game from "./examples/tictactoe";
import App from "./examples/recipe-app/App";
import data from "./examples/recipe-app/data";
import "./index.css";

ReactDOM.render(
  <App title="Delicious Recipes" recipes={data} />,
  document.getElementById("root")
);
