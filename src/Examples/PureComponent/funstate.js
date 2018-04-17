import React from "react";
import styled from "styled-components";

class App extends React.Component {
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
    // console.log(lapse);
    return (
      <Container>
        <h2>{lapse.toLocaleTimeString()}</h2>
        <Div
          style={{
            color: "darkcyan",
            borderBottom: "1px dotted",
            fontStyle: "italic"
          }}
        >
          check console
        </Div>
        <Main />
        <Footer />
      </Container>
    );
  }
}

const Container = styled.div`
  text-align: center;
  padding: 100px 20px;
  font-family: sans-serif;
  color: #434343;
  font-size: 36px;
`;

const Div = styled.div`
  font-weight: 600;
  padding: 1em 0;
  color: indianred;
  font-size: 32px;
  font-variant: small-caps;
  letter-spacing: 2px;
`;

class Footer extends React.PureComponent {
  render() {
    console.log("rendered PureComponent");
    return <Div>PureComponent</Div>;
  }
}

class Main extends React.Component {
  render() {
    console.log("rendered Component");
    return <Div>Component</Div>;
  }
}

export default App;
