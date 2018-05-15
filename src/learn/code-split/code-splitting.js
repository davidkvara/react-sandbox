// source: https://reactjs.org/docs/code-splitting.html
import React, { Component } from "react";

class App extends Component {
  state = { txt: null, box: null };

  handleClick = () => {
    import("./moduleA")
      .then(some => {
        this.setState({ txt: some.default });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleLoad = () => {
    import("./AverageBox")
      .then(es => {
        this.setState({ box: es.AverageBox });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { txt: Txt, box: AverageBox } = this.state;
    return (
      <div>
        <div className="container">
          <h2>Code Splitting</h2>
          <p>
            Code-Splitting is a feature supported by bundlers like Webpack and
            Browserify (via factor-bundle) which can create multiple bundles
            that can be dynamically loaded at runtime.
          </p>
          <p>
            Code-splitting your app can help you “lazy-load” just the things
            that are currently needed by the user, which can dramatically
            improve the performance of your app. While you haven’t reduced the
            overall amount of code in your app, you’ve avoided loading code that
            the user may never need, and reduced the amount of code needed
            during the initial load.
          </p>
          <button onClick={this.handleClick}>load new component</button>
          <button onClick={this.handleLoad}>load average box</button>
          {this.state.txt !== null && <Txt />}
          {this.state.box !== null && <AverageBox />}
        </div>
      </div>
    );
  }
}

export default App;
