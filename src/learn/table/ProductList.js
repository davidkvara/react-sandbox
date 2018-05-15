import React from "react";
import TransportTable from "./TransportTable";

class ProductList extends React.Component {
  render() {
    const { selectedValue, newOnly, products } = this.props;

    const selectedTransport = products.filter(product => {
      if (selectedValue === "All") {
        return true;
      }
      return product.name === selectedValue;
    });

    const newTransport = selectedTransport.map(transport => {
      return {
        name: transport.name,
        collection: transport.collection.filter(car => car.year > 2013)
      };
    });

    let filteredData = newOnly ? newTransport : selectedTransport;

    return (
      <div className="prod-list">
        {filteredData.map((car, i) => <ProductSection key={i} {...car} />)}
      </div>
    );
  }
}

const ProductSection = ({ name, collection }) => {
  return (
    <div className="list">
      <h3>{name}</h3>
      {collection.map((one, i) => <TransportTable key={i} {...one} />)}
    </div>
  );
};

export default ProductList;
