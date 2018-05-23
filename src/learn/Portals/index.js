// https://codepen.io/gaearon/pen/yzMaBd?editors=0010
import React from "react";
import Modal from "./Modal";
import "./style.css";

class App extends React.Component {
  state = { showModal: false };

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleHide = () => {
    this.setState({ showModal: false });
  };

  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Modal>
        <div className="overlay">
          <div className="modal">
            <div>
              With a portal, we can render content into a different part of the
              DOM, as if it were any other React child.
            </div>
            <p>This is being rendered inside the #modal-container div.</p>
            <button onClick={this.handleHide}>Hide modal</button>
          </div>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app">
        <h3 style={{ marginTop: 0 }}>Example: Portals</h3>

        <p>This div has overflow: hidden</p>
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
