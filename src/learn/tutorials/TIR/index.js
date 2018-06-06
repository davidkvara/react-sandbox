import React, { Component } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import { products } from "./API";
import "./style.css";

class App extends Component {
  state = { filterWord: "", isInStock: false };

  handleChange = e => {
    this.setState({ filterWord: e.target.value });
  };

  handleInStock = e => {
    this.setState({ isInStock: e.target.checked });
  };

  render() {
    return (
      <div>
        <Header>Thinking in React</Header>
        <SearchBar
          searchword={this.state.filterWord}
          isInStock={this.state.isInStock}
          onChange={this.handleChange}
          onCheck={this.handleInStock}
        />
        <ProductTable
          products={products}
          inStockOnly={this.state.isInStock}
          filterText={this.state.filterWord}
        />
      </div>
    );
  }
}

export default App;
