import React from "react";
import ProductsFilter from "./ProductsFilter";
import ProductTable from "./ProductTable";
import "./main.css";

class App extends React.Component {
  state = {
    carTypes: this.props.transport.map(tr => tr.name),
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
    const { carTypes, newOnly, value } = this.state;

    return (
      <div className="market container">
        <h2>{title}</h2>
        <p style={{ fontSize: "large" }}>Best place to buy vehicles online</p>
        <ProductsFilter
          title="Choose Options"
          options={carTypes}
          value={value}
          checked={newOnly}
          onSelectionChange={this.handleOptionChange}
          onCheckBoxChange={this.handleCheckChange}
        />
        <ProductTable
          products={transport}
          selectedValue={value}
          newOnly={newOnly}
        />
      </div>
    );
  }
}

export default App;
