import React, { Component } from "react";
import "./olnews/App.css";
import Header from "./olnews/Header";
import Greeting from "./olnews/Greeting";
import Main from "./olnews/Main";
import Footer from "./olnews/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Greeting />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
