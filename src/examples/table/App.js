import React from "react";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import "./main.css";

const App = ({ title, transport }) => {
  return (
    <div className="market container">
      <h2>{title}</h2>
      <p>come and go bro</p>
      <ProductsFilter title="Choose Options" />
      <div className="prod-list">
        {transport.map((car, i) => <ProductsList key={i} {...car} />)}
      </div>
    </div>
  );
};

export default App;
