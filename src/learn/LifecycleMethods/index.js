import React from "react";
import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "component lifecycle", number: 10 };
    console.log("App CONSTRUCTOR");
  }

  componentDidMount() {
    console.log("App COMPONENT DID MOUNT");
  }

  componentWillUnmount() {
    console.log("COMPONENT WILL UNMOUNT");
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  increment = () => {
    this.setState(state => ({ number: state.number + 1 }));
  };

  render() {
    console.log("%cAPP renders", "color: hotpink");

    const { name, number } = this.state;
    return (
      <div className="app">
        <span className="up">App component</span>
        <h2>თანმიმდევრობა</h2>
        <p>კომპონენტების "სიცოცხლის ციკლი" ?!</p>
        <h3>იხილე კონსოლი</h3>
        {/* შეცვალე სტეიტი და ნახე კომპონენტები როგორ დარენდერდება */}
        <h3>{name}</h3>
        <input type="text" value={name} onChange={this.handleChange} />
        <h3>{number}</h3>
        <button onClick={this.increment}>Incerement</button>
        <Example name={name} />
        <Box num={this.state.number} />
      </div>
    );
  }
}

class Example extends React.PureComponent {
  // pure component is short version for scu
  /*   shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState);
    if (nextProps.name !== this.props.name) {
      return true;
    }
    return false;
  } */

  render() {
    console.log("%cEXAMPLE renders", "color: green");

    return (
      <div className="example">
        {/* რეაქტ 16-მდე ასე არენდერებდნენ კომპონენტებს ვრაპერი რომ არ ჰქონოდათ! */}
        {[
          <span key="0" className="up">
            Example component
          </span>,
          <h2 key="45">Pure Component</h2>,
          <p key="1">
            will only rerender (if props value changes) on input change. see
            console.
          </p>,
          <h3 key="26">check console</h3>,
          <h2 key="13" style={red}>
            {this.props.name}
          </h2>
        ]}
      </div>
    );
  }
}

const Box = props => {
  console.log("%cBOX renders", "color: blue");

  return (
    <div className="box">
      <span className="up">Box component</span>
      <h2>Normal Component</h2>
      <p>
        <span role="img" aria-labelledby="box">
          🎁👀
        </span>
      </p>
      <p>Will always rerender</p>
      <h2 style={red}>{props.num}</h2>
    </div>
  );
};

const red = {
  color: "red"
};
