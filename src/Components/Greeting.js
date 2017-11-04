import React from "react";
import logo from "../logo.svg";

class Greeting extends React.Component {
  render() {
    return (
      <div className="greet">
        <img src={logo} draggable="false" className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to my React App</h1>
        <h3 className="app-stitle">Let's Start With Simple Grid Component</h3>
      </div>
    );
  }
}

export default Greeting;
