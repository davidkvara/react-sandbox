// @flow
import * as React from "react";

type Props = {
  foo: number,
  bar?: string
};

class MyComponent extends React.Component<Props> {
  render() {
    return <div>{this.props.bar}</div>;
  }
}

export default () => (
  <div>
    <h3>flow typed</h3>
    <MyComponent foo={42} />
  </div>
);
