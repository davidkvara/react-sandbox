// @flow
import * as React from "react";

type Props = {
  foo: number // foo is required.
};

class MyComponent extends React.Component<Props> {
  static defaultProps = {
    foo: 42 // ...but we have a default prop for foo.
  };
}

// So we don't need to include foo.

export default () => (
  <div>
    <h3>flow typing default props</h3>
    <MyComponent />
  </div>
);
