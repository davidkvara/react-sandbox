import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ label, value, onChange, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}:</label>
      <input
        value={value}
        id={label}
        onChange={onChange}
        className="form-input"
        {...rest}
      />
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default FormGroup;
