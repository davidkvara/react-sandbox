import React from "react";
import PropTypes from "prop-types";

export default class Input extends React.Component {
  state = { value: "" };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          className="input"
          placeholder="enter todo here"
        />
      </form>
    );
  }
}

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
