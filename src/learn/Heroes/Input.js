import React from "react";

const Input = ({ label, ...props }) => (
  <p>
    <label htmlFor={"hero-" + label}>
      <span className="label-helper">{label}:</span>
      <input
        className="hero-input"
        name={label}
        placeholder={label}
        id={"hero-" + label}
        {...props}
      />
    </label>
  </p>
);

export default Input;
