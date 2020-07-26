import React from "react";

const Filters = ({ setFilter, onClear }) => {
  return (
    <>
      <button onClick={() => setFilter("SHOW_ALL")}>all</button>
      <button onClick={() => setFilter("SHOW_ACTIVE")}>active</button>
      <button onClick={() => setFilter("SHOW_COMPLETED")}>completed</button>
      <button onClick={onClear}>clear completed</button>
    </>
  );
};

export default Filters;
