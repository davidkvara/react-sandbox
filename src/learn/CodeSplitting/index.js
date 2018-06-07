// source: https://reactjs.org/docs/code-splitting.html
import React, { Component } from "react";

class App extends Component {
  state = { txt: null, box: null, modal: null };

  // TODO improve error handling

  handleClick = () => {
    // default import
    import("./components/ModuleA")
      .then(some => {
        this.setState({ txt: some.default });
      })
      .catch(err => {
        console.log(err);
      });
  };

  openModal = () => {
    // default import
    import("./components/Modal")
      .then(modal => {
        this.setState({ modal: modal.default, modalIsOpen: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  hideModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleLoad = () => {
    // named import
    import("./components/ModuleB")
      .then(es => {
        this.setState({ box: es.AverageBox });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { txt: Txt, box: AverageBox, modal: Modal } = this.state;
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
          <h3>Dynamically load</h3>
          <p>
            <em>see networks tab in devtools</em>
          </p>
          <button onClick={this.handleClick}>Module A</button>
          <button onClick={this.handleLoad}>Module B</button>
          <button onClick={this.openModal}>Modal</button>

          {/* TODO: refactore these */}
          {this.state.txt && <Txt />}
          {this.state.box && <AverageBox />}
          {this.state.modal &&
            this.state.modalIsOpen && <Modal hideModal={this.hideModal} />}
        </div>
      </div>
    );
  }
}

export default App;
