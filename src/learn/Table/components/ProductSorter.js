import React from "react";
import SelectCarOption from "./SelectCarOption";
import FilterNewCheckbox from "./FilterNewCheckbox";

const ProductSorter = props => {
  const { value, options, checked, onSelectionChange, onCheckToggle } = props;

  return (
    <div className="sorter">
      <h2>Choose Options</h2>
      <FilterNewCheckbox checked={checked} onCheck={onCheckToggle} />

      <SelectCarOption
        value={value}
        options={options}
        onChange={onSelectionChange}
      />
    </div>
  );
};

export default ProductSorter;
