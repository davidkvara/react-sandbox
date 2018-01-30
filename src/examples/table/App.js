import React from "react";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import "./main.css";

class App extends React.Component {
  state = {
    carTypes: this.props.transport.map(tr => tr.name),
    value: "All",
    isChecked: false
  };

  // componentDidMount() {
  //   const cars =;
  //   this.setState({ carTypes: cars });
  // }

  handleOptionChange = value => {
    this.setState({ value });
  };

  handleCheckChange = check => {
    this.setState({ isChecked: check });
  };

  render() {
    const { title, transport } = this.props;
    const selectedTransport = transport.filter(trns => {
      if (this.state.value === "All") {
        return trns;
      }
      return trns.name === this.state.value;
    });

    const newTransport = selectedTransport.map(transport => {
      return {
        name: transport.name,
        collection: transport.collection.filter(car => car.year > 2013)
      };
    });

    let theData = this.state.isChecked ? newTransport : selectedTransport;
    return (
      <div className="market container">
        <h2>{title}</h2>
        <p style={{ fontSize: "large" }}>Best place to buy vehicles online</p>
        <ProductsFilter
          title="Choose Options"
          options={this.state.carTypes}
          value={this.state.value}
          checked={this.state.isChecked}
          onSelectionChange={this.handleOptionChange}
          onCheckBoxChange={this.handleCheckChange}
        />
        <div className="prod-list">
          {theData.map((car, i) => <ProductsList key={i} {...car} />)}
        </div>
      </div>
    );
  }
}

export default App;
