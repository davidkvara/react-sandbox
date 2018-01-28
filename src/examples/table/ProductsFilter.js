import React from "react";

const ProductsFilter = ({ title }) => {
  return (
    <div className="filter-data">
      <h3>{title}</h3>
      <label htmlFor="newCheck">
        New Only <input type="checkbox" id="newCheck" />
      </label>
      <label htmlFor="car-type" className="select-opt">
        Select Type{" "}
        <select id="car-type">
          <option value="All">All</option>
          <option value="Cars">Cars</option>
          <option value="Vehicles">Vehicles</option>
          <option value="Trucks">Trucks</option>
        </select>
      </label>
    </div>
  );
};

export default ProductsFilter;
