import React from "react";

// TODO: Analyze

const DataComponent = (ComposedComponent, url) =>
  class DataComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: false,
        loaded: false
      };
    }
    componentDidMount() {
      this.setState({ loading: true });
      fetch(url)
        .then(response => response.json())
        .then(data =>
          this.setState({
            loaded: true,
            loading: false,
            data
          })
        );
    }
    render() {
      return (
        <div className="data-component">
          {this.state.loading ? (
            <div>Loading...</div>
          ) : (
            <ComposedComponent {...this.state} {...this.props} />
          )}
        </div>
      );
    }
  };

const CountryNames = ({ data, selected = "" }) => (
  <select className="people-list" defaultValue={selected}>
    {data.map(({ name }, i) => (
      <option key={i} value={name}>
        {name}
      </option>
    ))}
  </select>
);

const CountryDropDown = DataComponent(
  CountryNames,
  "https://restcountries.eu/rest/v1/all"
);

export default CountryDropDown;
