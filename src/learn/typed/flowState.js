// @flow
import * as React from "react";

type Props = {
  item?: string
};

type State = {
  count: number
};

// can be done inline React.Component<{ item: string }, { count: number }>
// first props, second state
class MyComponent extends React.Component<Props, State> {
  state = {
    count: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 1000);
  }

  render() {
    return (
      <div>
        Count: {this.state.count} {this.props.item}
      </div>
    );
  }
}

export default () => (
  <div
    style={{
      width: 700,
      margin: "0 auto",
      padding: "1em"
    }}
  >
    <h2>flow type component with state</h2>
    <MyComponent />
  </div>
);
