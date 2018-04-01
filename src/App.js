import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  clickCountUp = () => {
    this.props.dispatch({ type: "DEC_COUNT", by: 1 });
  };

  clickCountDown = () => {
    this.props.dispatch({ type: "INC_COUNT", by: 1 });
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.clickCountDown}>Dec Count</button>
        <button onClick={this.clickCountUp}>Inc Count</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(App);
