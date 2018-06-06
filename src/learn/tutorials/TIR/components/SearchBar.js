import React from "react";

const SearchBar = props => {
  return (
    <div className="search-section">
      <div>
        <input
          type="text"
          className="search-input"
          value={props.searchWord}
          onChange={props.onChange}
        />
        <label className="check-label">
          <input
            type="checkbox"
            checked={props.newOnly}
            onChange={props.onCheck}
            className="search-new"
          />
          Only show products in stock
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
