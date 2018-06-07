import React from "react";

const Modal = props => {
  return (
    <div className="overlay" style={overlay}>
      <div className="message-box" style={message}>
        <p>
          Nemo molestiae totam a neque, fugiat eos animi sequi veritatis
          adipisci officia in numquam aspernatur optio harum beatae molestias
          minima debitis voluptatem, tenetur nulla voluptate. Eaque laudantium,
          omnis nulla reprehenderit saepe quo nisi optio aut ducimus. Vel,
          aliquam tenetur?
        </p>
        <p>
          <span role="img" aria-labelledby="cake">
            👌👌👌
          </span>
        </p>
        <button onClick={props.hideModal}>Hide</button>
      </div>
    </div>
  );
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const message = {
  maxWidth: 600,
  width: "100%",
  padding: "1rem",
  background: "#fff",
  borderRadius: 4
};

export default Modal;
