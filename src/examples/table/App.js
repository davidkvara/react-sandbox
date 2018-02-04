import React from "react";
import ProductsFilter from "./ProductsFilter";
import ProductList from "./ProductList";
import "./main.css";

class App extends React.Component {
  state = {
    value: "All",
    newOnly: false
  };

  handleOptionChange = value => {
    this.setState({ value });
  };

  handleCheckChange = check => {
    this.setState({ newOnly: check });
  };

  render() {
    const { title, transport } = this.props;
    const { newOnly, value } = this.state;

    return (
      <div className="market container">
        <h2>{title}</h2>
        <p style={{ fontSize: "large" }}>Best place to buy vehicles online</p>
        <ProductsFilter
          title="Choose Options"
          data={transport}
          value={value}
          checked={newOnly}
          onSelectionChange={this.handleOptionChange}
          onCheckBoxChange={this.handleCheckChange}
        />
        <ProductList
          products={transport}
          selectedValue={value}
          newOnly={newOnly}
        />
      </div>
    );
  }
}

export default App;
