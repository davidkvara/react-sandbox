import React from "react";

const ProductsList = ({ name, collection }) => {
  return (
    <div className="list">
      <h3>{name}</h3>
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
          {collection.map(col => {
            return (
              <tr key={col.year + col.price}>
                {/* დროებით */}
                <td>{col.year}</td>
                <td>{col.model}</td>
                <td>${col.price}</td>
                <td>
                  <button>buy now</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
