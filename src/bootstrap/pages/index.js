import React from "react";
import { Button } from "react-bootstrap";

export default () => (
  <div className="hero-container text-center">
    <div className="container">
      <h2>Welcome to my react.js playground</h2>
      <p style={{ fontSize: "large" }}>
        Place where I'll be posting examples of my code
      </p>
      <Button bsStyle="primary">Get Started</Button>
    </div>
  </div>
);
