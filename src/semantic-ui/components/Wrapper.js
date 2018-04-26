import React from "react";
import styled from "styled-components";

export default function Wrapper(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  width: 100%;
  padding: 100px 0;
  background: ghostwhite;
`;
