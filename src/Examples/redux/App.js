import React from "react";
import { connect } from "react-redux";

class App extends React.Component {

  handleClickUp = () => {
    this.props.dispatch({type: "INC"})
  };
  handleClickDown = () => {
    this.props.dispatch({type: "DEC"})
  };

  render() {
    return (
      <div className="myContainer">
        <h2>{this.props.count}</h2>
        <button onClick={this.handleClickUp}>increment</button>
        <button onClick={this.handleClickDown}>decrement</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(App);
