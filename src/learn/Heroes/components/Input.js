import React from "react";

const Input = ({ label, myRef, ...props }) => (
  <p>
    <label htmlFor={"hero-" + label}>
      <span className="label-helper">{label}:</span>
      <input
        className="hero-input"
        name={label}
        id={"hero-" + label}
        ref={myRef}
        {...props}
      />
    </label>
  </p>
);

export default Input;
