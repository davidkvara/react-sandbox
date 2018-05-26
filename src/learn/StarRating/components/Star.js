import React from "react";

const Star = ({ selected, onSelect, onMouseOver, onMouseOut, hoveredOver }) => {
  return (
    <div
      className={selected || hoveredOver ? "star selected" : "star"}
      onClick={onSelect}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
};

export default Star;
