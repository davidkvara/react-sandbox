import React from "react";

const Modal = props => {
  return props.visibleImg ? (
    <div className="modal" onClick={props.onClose}>
      <div className="preview">
        <button className="prev-close" onClick={props.onClose}>
          &times;
        </button>
        <img src={props.visibleImg} alt="" onClick={e => e.stopPropagation()} />
      </div>
    </div>
  ) : null;
};

export default Modal;
