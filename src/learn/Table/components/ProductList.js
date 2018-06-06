import React from "react";

const OneTable = ({ year, model, price }) => (
  <table>
    <thead>
      <tr>
        <th>Year</th>
        <th>Model</th>
        <th>Price</th>
        <th>Buy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{year}</td>
        <td>{model}</td>
        <td>{price}</td>
        <td>
          <button>Buy Now</button>
        </td>
      </tr>
    </tbody>
  </table>
);

const ProductBlock = ({ name, collection }) => {
  if (!collection.length) return null;
  return (
    <div>
      <h3>{name}</h3>
      {collection.map((product, i) => <OneTable key={i} {...product} />)}
    </div>
  );
};

class ProductList extends React.Component {
  render() {
    const { newOnly, currentValue, data } = this.props;
    const selectedTransport = data.filter(now => {
      if (currentValue === "All") {
        return true;
      }
      return now.name === currentValue;
    });

    const newTransport = selectedTransport.map(trans => {
      return {
        name: trans.name,
        collection: trans.collection.filter(tr => tr.year > 2013)
      };
    });

    const filteredData = newOnly ? newTransport : selectedTransport;

    return (
      <div className="products">
        {filteredData.map((x, i) => <ProductBlock key={i} {...x} />)}
      </div>
    );
  }
}

export default ProductList;
