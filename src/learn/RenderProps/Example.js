import React from "react";

class Provider extends React.Component {
  state = { magicNumber: 62, magicWord: "Disco" };

  handleChange = e => {
    this.setState({ magicWord: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.render({
          number: this.state.magicNumber,
          word: this.state.magicWord,
          onChange: this.handleChange
        })}
      </React.Fragment>
    );
  }
}

const App = props => {
  return (
    <div className="container">
      <h2>მთავარი აპი</h2>
      <Provider
        render={context => (
          <React.Fragment>
            <ul>
              <li>
                Magic Number is <strong>{context.number}</strong>
              </li>
              <li>
                Magic word is <strong>{context.word}</strong>
              </li>
            </ul>
            <input
              type="text"
              value={context.word}
              onChange={context.onChange}
            />
          </React.Fragment>
        )}
      />
    </div>
  );
};

export default App;
