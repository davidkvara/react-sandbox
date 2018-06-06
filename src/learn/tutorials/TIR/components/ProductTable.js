import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = props => {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  const rows = [];
  let lastCategory = null;

  props.products.forEach(product => {
    if (product.name.toLowerCase().indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
