// @flow
import React from "react";
import Modal from "./modal";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./modal.css";

class App extends React.Component {
  state = { isOpen: false };

  handleModOpen = () => {
    this.setState({ isOpen: true });
  };

  handleModClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div className="container">
        <h3>
          Quidem ullam reprehenderit sint culpa facere cum labore, ipsum minima.
        </h3>
        <h3>
          Quo quae harum deserunt nihil placeat necessitatibus blanditiis nobis
          debitis!
        </h3>

        <button onClick={this.handleModOpen}>show modal</button>
        <ReactCSSTransitionGroup
          transitionName="modal"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.isOpen && (
            <Modal onClose={this.handleModClose}>Hello Dave!</Modal>
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
