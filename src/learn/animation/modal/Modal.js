import React from "react";
import styled from "styled-components";

const Modal = ({ onClose }) => (
  <Overlay>
    <div className="message">
      <CloseBtn onClick={onClose}>&times;</CloseBtn>
      <Title>Hello David!!</Title>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos
      totam tempore, sit cumque eveniet odit?
      <ButtonGroup>
        <Button>Agree</Button>
        <Button onClick={onClose}>cancel</Button>
      </ButtonGroup>
    </div>
  </Overlay>
);

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
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
  transition: 0.3s;

  &:hover,
  &:focus {
    color: #555;
  }
`;

const ButtonGroup = styled.div`
  margin: 20px 0 0;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background: #02b3e4;
  box-shadow: 8px 10px 20px 0 rgba(46, 61, 73, 0.2);
  color: #fff;
  border: 0;
  padding: 4px 20px;
  letter-spacing: 0;
  font-size: 0.875rem;
  text-transform: capitalize;
  font-family: sans-serif;
  height: 2.25rem;
  font-weight: 400;
  cursor: pointer;
  margin-left: 0.5rem;
  line-height: 0.9rem;
  transition: all 0.3s ease;
  border-radius: 4px;
  user-select: none;

  &:hover {
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.3);
  }
  &:focus {
    outline: 3px solid gold;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export default Modal;
