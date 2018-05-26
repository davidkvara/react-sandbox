import React from "react";
import Star from "./Star";

const Stars = ({
  selected,
  stars,
  onSelect,
  onHover,
  onMouseOut,
  hoveredStars
}) => {
  return (
    <React.Fragment>
      {stars.map((star, i) => (
        <Star
          key={i}
          selected={selected > i}
          onSelect={() => onSelect(i + 1)}
          onMouseOver={() => onHover(i + 1)}
          onMouseOut={onMouseOut}
          hoveredOver={hoveredStars > i}
        />
      ))}
    </React.Fragment>
  );
};

export default Stars;
