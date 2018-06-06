import React from "react";

export default ({ checked, onCheck }) => (
  <label>
    <input
      type="checkbox"
      checked={checked}
      onChange={e => onCheck(e.target.checked)}
    />
    new only
  </label>
);
