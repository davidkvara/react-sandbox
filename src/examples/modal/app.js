import React from "react";
import Modal from "./modal";

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
      <div>
        <h3>
          Quidem ullam reprehenderit sint culpa facere cum labore, ipsum minima.
        </h3>
        <h3>
          Quo quae harum deserunt nihil placeat necessitatibus blanditiis nobis
          debitis!
        </h3>

        <button onClick={this.handleModOpen}>show modal</button>

        <Modal show={this.state.isOpen} onClose={this.handleModClose}>
          Hello to you!
        </Modal>
      </div>
    );
  }
}

export default App;
