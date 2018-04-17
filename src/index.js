import React from "react";
import ReactDOM from "react-dom";
// import "./normalize.css";
import App from "./App";

const styles = {
  container: {
    maxWidth: 800,
    margin: "0 auto",
    padding: "0 1em",
    lineHeight: 1.5,
    fontFamily: "segoe ui, sans-serif"
  }
};

ReactDOM.render(
  <App layout={styles.container} />,
  document.getElementById("root")
);
