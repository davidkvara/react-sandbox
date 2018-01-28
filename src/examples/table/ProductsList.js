import React from "react";
import TransportTable from "./TransportTable";

const ProductsList = ({ name, collection }) => {
  return (
    <div className="list">
      <h3>{name}</h3>
      {collection.map((one, i) => <TransportTable key={i} {...one} />)}
    </div>
  );
};

export default ProductsList;
