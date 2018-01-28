import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import Game from "./examples/tictactoe";
// import App from "./examples/recipe-app/App";
// import data from "./examples/recipe-app/data";
import App from "./examples/table/App";
import carsData from "./examples/table/data";
import "./index.css";

ReactDOM.render(
  <App title="React Transportation" transport={carsData} />,
  document.getElementById("root")
);
