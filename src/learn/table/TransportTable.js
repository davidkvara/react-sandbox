import React from "react";

const TransportTable = ({ year, model, price }) => {
  return (
    <table className="tabl">
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
          <td>${price}</td>
          <td>
            <button>buy now</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransportTable;
