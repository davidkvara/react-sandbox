import React from "react";

export const withData = (ComposedComponent, url) => {
  return class DataComponent extends React.Component {
    state = { data: [], loading: false };

    componentDidMount() {
      this.setState({ loading: true });
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ loading: false, data }));
    }

    render() {
      return (
        <div className="data-component">
          <ComposedComponent {...this.state} {...this.props} />
        </div>
      );
    }
  };
};
