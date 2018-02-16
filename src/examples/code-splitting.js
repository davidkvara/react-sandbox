import React, { Component } from "react";

class App extends Component {
  state = { greet: null };

  handleClick = () => {
    import("./moduleA")
      .then(({ moduleA }) => {
        this.setState({ greet: moduleA });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleClick2 = () => {
    import("./moduleA")
      .then(({ list }) => {
        this.setState({ list });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>imports greeting</button>
        <button onClick={this.handleClick2}>imports list</button>
        {this.state.greet && <h2>{this.state.greet}</h2>}
        {this.state.list && (
          <div>
            <p>here's your list: </p>
            <ul>{this.state.list.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
