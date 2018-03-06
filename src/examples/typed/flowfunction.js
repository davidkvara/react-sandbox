// @flow
import * as React from "react";

type Props = {
  foo: number,
  bar?: string
};

function MyComponent(props: Props) {
  // props.doesNotExist;  Error! You did not define a `doesNotExist` prop.

  return <div>{props.foo}</div>;
}

// SECOND COMPONENT

type Props2 = {
  foo: number // foo is required.
};

function OtherComponent(props: Props2) {
  return <div>{props.foo}</div>;
}

OtherComponent.defaultProps = {
  foo: 42 // ...but we have a default prop for foo.
};

// DEFAULT EXPORT

export default () => (
  <div
    style={{
      width: 700,
      margin: "0 auto",
      padding: "1em"
    }}
  >
    <h3>flow typing functional component</h3>
    <MyComponent foo={142} />
    <OtherComponent />
  </div>
);

// So we don't need to include foo.
