import React from "react";

const Instructions = ({ steps }) => {
  return (
    <div>
      <h4>Cooking Steps</h4>
      {steps.map((step, i) => <p key={i}>{step}</p>)}
    </div>
  );
};

export default Instructions;
