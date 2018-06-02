import React from "react";

const SharedComponent = props => {
  return <div>{props.render({ name: "\u2602" })}</div>;
};

export default SharedComponent;
