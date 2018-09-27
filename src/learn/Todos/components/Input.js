import React from "react";
import PropTypes from "prop-types";

export default function Input({ onTodoSubmit, ...rest }) {
  return (
    <form onSubmit={onTodoSubmit}>
      <input className="input" placeholder="enter todo here" {...rest} />
    </form>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onTodoSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
