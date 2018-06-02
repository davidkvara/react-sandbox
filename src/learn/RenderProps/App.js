/* more at:
https://reactjs.org/docs/render-props.html
https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce
https://levelup.gitconnected.com/understanding-react-render-props-by-example-71f2162fd0f2
*/

import React from "react";
import SharedComponent from "./ModulaA";
import PositionTracker from "./MousePos";

class SayHello extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <PositionTracker
          render={({ x, y }) => (
            <h1 style={styles.circle}>
              x: {x}, y: {y}
            </h1>
          )}
        />
        <SharedComponent
          render={({ name }) => <h2>simple example - {name}</h2>}
        />
      </div>
    );
  }
}

const styles = {
  circle: {
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: "lightyellow",
    position: "fixed",
    top: "calc(50% - 150px)",
    left: "calc(50% - 150px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.1rem",
    border: "2px solid gold",
    boxShadow: "inset 0 0 14px rgba(0,0,0,0.18)",
    fontWeight: 400
  }
};

export default SayHello;
