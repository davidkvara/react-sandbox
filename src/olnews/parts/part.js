import React from "react";

const Aside = props => {
  return (
    <div
      className="pro"
      style={{
        background: "gainsboro",
        padding: "1em",
        margin: "20px auto"
      }}
    >
      <p>{props.who}</p>
    </div>
  );
};

export default Aside;
