import React from "react";
import ProductSorter from "./components/ProductSorter";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import { carsData } from "./API";
import "./style.css";

class MarketApp extends React.Component {
  state = { value: "All", newOnly: false };

  handleOptionChange = value => {
    this.setState({ value });
  };

  handleCheckboxToggle = check => {
    this.setState({ newOnly: check });
  };

  render() {
    const { value, newOnly } = this.state;

    const allOptions = carsData.map(x => x.name);

    return (
      <div className="MarketApp container">
        <Header title="React Transportation" />
        <ProductSorter
          value={value}
          options={allOptions}
          checked={newOnly}
          onCheckToggle={this.handleCheckboxToggle}
          onSelectionChange={this.handleOptionChange}
        />
        <ProductList data={carsData} currentValue={value} newOnly={newOnly} />
      </div>
    );
  }
}

export default MarketApp;
