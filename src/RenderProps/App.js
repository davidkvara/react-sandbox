/* more at:
https://reactjs.org/docs/render-props.html
https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce
https://levelup.gitconnected.com/understanding-react-render-props-by-example-71f2162fd0f2
*/

import React from "react";
// import SharedComponent from "./Components/ModulaA";
import She from "./MousePos";

class SayHello extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <She
          render={({ x, y }) => (
            <h1>
              The mouse position is ({x}, {y})
            </h1>
          )}
        />
      </div>
    );
  }
}

export default SayHello;
