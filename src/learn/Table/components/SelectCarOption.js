import React from "react";

export default ({ value, options, onChange }) => {
  return (
    <p>
      <select value={value} onChange={e => onChange(e.target.value)}>
        <option value="All">All</option>
        {options.map(val => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </p>
  );
};
