import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";
import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => setIsOpen(true);
  const handleHide = () => setIsOpen(false);

  return (
    <div className="container">
      <h2>Modal example with csstransitiongroup</h2>
      <button onClick={handleShow}>show modal</button>

      <CSSTransition in={isOpen} unmountOnExit classNames="modal" timeout={500}>
        <div>
          <Modal onClose={handleHide} />
        </div>
      </CSSTransition>
    </div>
  );
};

export default App;
