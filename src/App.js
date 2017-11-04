import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import Greeting from "./Components/Greeting";
import Main from "./Components/Main";
import Footer from "./Components/Footer";


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
