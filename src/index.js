import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Layout from "./Router/main";
import { BrowserRouter as Router } from "react-router-dom";
// import "./index.css";

ReactDOM.render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById("root")
);
