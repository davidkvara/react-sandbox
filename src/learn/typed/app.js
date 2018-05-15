// type checking with prop-types
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class MyComponent extends React.Component {
  static propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string
  };

  render() {
    return (
      <div>
        <ul>
          <li>{this.props.bar}</li>
          <li>{this.props.foo}</li>
        </ul>
      </div>
    );
  }
}

const Container = styled.div`
  max-width: 780px;
  width: 100%;
  margin: 0 auto;
  background: white;
  padding: 1em;
  border: 1px solid #eee;
`;

export default () => (
  <Container>
    <h3>bring in prop-types</h3>
    {/* error: foo should be number */}
    <MyComponent foo={"asd"} bar="hey" />
  </Container>
);
