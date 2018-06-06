import React from "react";

class MousePos extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = e => {
    const rect = e.target.getBoundingClientRect();
    const x = parseInt(e.clientX - rect.left, 10);
    const y = parseInt(e.clientY - rect.top, 10);

    this.setState({ x, y });
  };

  render() {
    return (
      <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default MousePos;
