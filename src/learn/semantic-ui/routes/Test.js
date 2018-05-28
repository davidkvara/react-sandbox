import React from "react";
import { Container } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";
import styled from "styled-components";

export default function Test({ match }) {
  return (
    <Wrapper>
      <Container>
        <h1>blah blah</h1>
        <GridContainer>
          <Card>
            <svg
              fill="#2196F3"
              viewBox="0 0 24 24"
              width="60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
            </svg>
          </Card>
          <Card>2</Card>
          <Card>3</Card>
          <Card>4</Card>
          <Card>5</Card>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </GridContainer>
      </Container>
    </Wrapper>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-auto-rows: minmax(130px, auto);
  grid-gap: 2rem;
`;

const Card = styled.div`
  border-radius: 12px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  color: darkorchid;
  font-size: 1.2rem;
  border: 2px solid mistyrose;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
