/* more at:
https://reactjs.org/docs/render-props.html
https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce
https://levelup.gitconnected.com/understanding-react-render-props-by-example-71f2162fd0f2
*/

import React from "react";
import SharedComponent from "./components/Fire";
import PositionTracker from "./components/MousePos";

export default class SayHello extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }} className="container">
        <PositionTracker
          render={({ x, y }) => (
            <h1 style={styles.circle}>
              x: {x}, y: {y}
            </h1>
          )}
        />
        <SharedComponent render={context => <h2>gimme some {context}</h2>} />
      </div>
    );
  }
}

const styles = {
  circle: {
    width: 300,
    height: 300,
    // borderRadius: "50%",
    background: "lightyellow",
    position: "fixed",
    top: "calc(50% - 150px)",
    left: "calc(50% - 150px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.1rem",
    border: "2px solid gold",
    boxShadow: "inset 0 0 20px rgba(0,0,0,0.15)"
  }
};
