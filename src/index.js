import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import Layout from "./bootstrap/layout/app";
import { BrowserRouter as Router } from "react-router-dom";
// import Example from "./examples/animation/initial";

ReactDOM.render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById("root")
);
