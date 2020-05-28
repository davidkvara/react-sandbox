import styled from "styled-components";

export const Button = styled.button`
  background-color: #02b3e4;
  color: #fff;
  border: 0.125rem solid transparent;
  box-shadow: 8px 10px 20px 0 rgba(46, 61, 73, 0.15);
  font-size: 0.8rem;
  margin-top: 0.5rem;
  padding: 8px 16px;
  border-radius: 0.25rem;
  letter-spacing: 0.125rem;
  transition: all 0.3s ease;
  text-transform: capitalize;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  &:hover,
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
    background-color: #029fcb;
  }
`;

export const BackButton = styled.button`
  all: initial;
  margin-bottom: 1rem;
  cursor: pointer;
`;
