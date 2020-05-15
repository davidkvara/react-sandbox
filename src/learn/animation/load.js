import React from "react";
import styled, { keyframes } from "styled-components";

const App = () => (
  <Container>
    <h2>Maiores inventore ullam blanditiis aliquid distinctio reiciendis</h2>
    <p>
      Odio culpa tempore delectus id error voluptatem doloremque pariatur
      laborum laudantium voluptatibus saepe esse quis maxime optio quasi eum
      minima placeat odit atque quibusdam?
    </p>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero,
      quisquam voluptates suscipit sequi cupiditate, dolores deserunt officiis
      officia laboriosam natus dolorum quia sapiente at ut eum! Amet, et qui.
    </p>
    <ul>
      <li>Atque ut nostrum exercitationem ducimus!</li>
      <li>Quam asperiores ut nemo rerum!</li>
      <li>Itaque exercitationem deleniti hic consequatur!</li>
    </ul>
    <p>
      Quam quos sit cupiditate doloremque corrupti pariatur aperiam optio quod
      deleniti, aliquid neque laboriosam porro sint sapiente modi obcaecati
      repellendus ipsa itaque aut voluptatibus culpa est dolor. Unde, quo
      cupiditate!
    </p>
    <p>
      Architecto quae ex praesentium unde ab, temporibus fuga vero at ratione?
      Doloribus iste iure maiores dolor accusantium magni praesentium itaque ad
      beatae earum? Soluta maiores accusantium quod sapiente facere delectus!
    </p>
  </Container>
);

const fadeInBottom = keyframes`
  from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  transform: translateY(16px) scale(0.99);
  transform-origin: 50% 0;
  opacity: 0;
  animation: ${fadeInBottom} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export default App;
