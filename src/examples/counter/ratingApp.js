import React, { Component } from "react";

class RatingsApp extends Component {
  state = { total: 4, count: 2 };

  upVote = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      total: this.state.total + 1
    }));
  };
  downVote = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
      total: this.state.total + 1
    }));
  };

  render() {
    const { total, count } = this.state;
    return (
      <div
        style={{
          width: 700,
          margin: "30px auto",
          padding: "1em"
        }}
      >
        <div>
          <h3>rate my website</h3>
          <button onClick={this.upVote}>nice</button>{" "}
          <button onClick={this.downVote}>sucks</button>
        </div>
        <h3>
          <p>
            Score: {count} out of {total} total votes!
          </p>
        </h3>
        <p>average: {(count / total).toFixed(2)}</p>
      </div>
    );
  }
}

export default RatingsApp;
