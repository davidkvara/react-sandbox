import React from "react";
import Modal from "./Modal";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./style.css";

class App extends React.Component {
  state = { isOpen: false };

  handleShow = () => {
    this.setState({ isOpen: true });
  };

  handleHide = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const modal = this.state.isOpen && <Modal onClose={this.handleHide} />;
    return (
      <div className="container">
        <h2>Modal example with csstransitiongroup</h2>
        <button onClick={this.handleShow}>show modal</button>

        <ReactCSSTransitionGroup
          transitionName="modal"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="div"
        >
          {modal}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
