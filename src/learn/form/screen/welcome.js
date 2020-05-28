import React from "react";
import { Button } from "../components/button";

const Welcome = ({ name = "Guest", goBack }) => {
  return (
    <div className="form welcome">
      <h3 style={{ textAlign: "center" }}>Thank you and welcome {name}</h3>
      <Button onClick={() => goBack("screen_1")}>home</Button>
    </div>
  );
};

export default Welcome;
