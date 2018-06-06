import React from "react";

const SharedComponent = props =>
  props.render(
    <span role="img" aria-label="so cool">
      🔥🔥🔥
    </span>
  );

export default SharedComponent;
