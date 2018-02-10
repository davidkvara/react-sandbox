import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.25);
`;

const Message = styled.div`
  width: 100%;
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f6f6f6;
  border-radius: 3px;
  padding: 1.2em 2em 2em;
  border-left: 9px solid slateblue;
`;

const CloseBtn = styled.button`
  background: none;
  border: 0;
  position: absolute;
  top: 0;
  right: 2px;
  color: gray;
  font-size: 24px;
  cursor: pointer;
  transition: 0.2s;

  &:hover,
  &:focus {
    color: #555;
  }
`;

const Modal = props => {
  return (
    <Overlay>
      <Message>
        <CloseBtn onClick={props.onClose}>&times;</CloseBtn>
        <h3 style={{ marginTop: 0 }} className="title">
          {props.children}
        </h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos
        totam tempore, sit cumque eveniet odit?
      </Message>
    </Overlay>
  );
};

export default Modal;
