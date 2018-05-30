import React from "react";

const ImageSearch = props => {
  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="beach"
        value={props.word}
        className="search-input"
        name="searchWord"
        onChange={props.onChange}
      />
      <select
        className="select-amount"
        value={props.amount}
        name="amount"
        onChange={props.onChange}
      >
        <option value="5">5</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default ImageSearch;
