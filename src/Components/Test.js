import React from "react";

const Test = props => {
  return (
    <div
      className="pro"
      style={{
        minHeight: "80px",
        background: "gainsboro",
        padding: "10px",
        margin: "20px auto"
      }}
    >
      <p>{props.who}</p>
    </div>
  );
};

export default Test;
