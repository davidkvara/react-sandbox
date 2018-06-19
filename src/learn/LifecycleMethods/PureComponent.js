import React from "react";
import styled from "styled-components";

export default class App extends React.Component {
  state = { lapse: new Date() };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.timeStart();
    }, 1000);
  }

  timeStart() {
    this.setState({ lapse: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { lapse } = this.state;
    console.log("App rendered");
    return (
      <Container>
        <h3>{lapse.toLocaleTimeString()}</h3>
        check console
        <Main />
        <Footer />
      </Container>
    );
  }
}

class Footer extends React.PureComponent {
  render() {
    console.log("rendered PureComponent");
    return <Div>PureComponent</Div>;
  }
}

const Main = () => {
  console.log("component 2");
  return <Div>Component 2</Div>;
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 100px 20px;
  font-family: sans-serif;
  color: #434343;
  font-size: 36px;
  border: 2px solid salmon;
`;

const Div = styled.div`
  font-weight: 600;
  padding: 1em 0;
  margin: 1rem 0;
  color: indianred;
  font-size: 32px;
  font-variant: small-caps;
  letter-spacing: 2px;
  border: 1px solid orange;
`;
