import React from "react";

class SharedComponent extends React.Component {
  render() {
    return <div>{this.props.render({ name: "david" })}</div>;
  }
}

export default SharedComponent;
