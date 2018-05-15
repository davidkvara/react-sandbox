import React from "react";

const sliderStyles = {
  maxWidth: 800,
  margin: "20px auto",
  padding: "0 1em",
  textAlign: "center"
};

const GuineaPigs = props => (
  <div style={sliderStyles}>
    <h2>Cute Guinea Pigs</h2>
    <img src={props.src} alt="" />
  </div>
);

export default GuineaPigs;
