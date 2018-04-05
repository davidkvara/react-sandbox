import React from "react";

const sliderStyles = {
  maxWidth: 800,
  margin: "20px auto",
  padding: "0 1em",
  textAlign: "center"
};

const GuineaPigs = props => (
  <div style={sliderStyles}>
    <h1>Cute Guinea Pigs</h1>
    <img src={props.src} alt="" />
  </div>
);

export default GuineaPigs;
