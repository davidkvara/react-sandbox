import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Modal = props => {
  const element = props.visibleImg ? (
    <div className="modal" onClick={props.onClose}>
      <div className="preview">
        <button className="prev-close" onClick={props.onClose}>
          &times;
        </button>
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
