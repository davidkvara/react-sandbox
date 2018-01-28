import React from "react";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import "./main.css";

class App extends React.Component {
  state = { carTypes: [], value: "All" };

  componentDidMount() {
    const cars = this.props.transport.map(tr => tr.name);
    this.setState({ carTypes: cars });
  }

  handleOptionChange = value => {
    this.setState({ value });
  };

  render() {
    const { title, transport } = this.props;
    const selectedTransport = transport.filter(trns => {
      if (this.state.value === "All") {
        return trns;
      }
      return trns.name === this.state.value;
    });
    return (
      <div className="market container">
        <h2>{title}</h2>
        <p>come and go bro</p>
        <ProductsFilter
          title="Choose Options"
          options={this.state.carTypes}
          onChange={this.handleOptionChange}
        />
        <div className="prod-list">
          {selectedTransport.map((car, i) => <ProductsList key={i} {...car} />)}
        </div>
      </div>
    );
  }
}

export default App;
