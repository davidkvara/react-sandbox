import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Modal = props => {
  const element = props.visibleImg ? (
    <div className="modal" onClick={props.onClose}>
      <button className="prev-close" onClick={props.onClose}>
        &times;
      </button>
      <div className="preview">
        <img src={props.visibleImg} alt="" onClick={e => e.stopPropagation()} />
      </div>
    </div>
  ) : null;
  return (
    <ReactCSSTransitionGroup
      transitionName="modal"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
      component="div"
    >
      {element}
    </ReactCSSTransitionGroup>
  );
};

export default Modal;
