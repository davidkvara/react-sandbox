import React from "react";
import PropTypes from "prop-types";

export default function Input(props) {
  return (
    <div>
      <input
        type="text"
        className="input"
        placeholder="enter todo here"
        {...props}
      />
    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
