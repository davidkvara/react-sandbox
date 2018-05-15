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
            <h1 style={styles.circle}>
              x: {x}, y: {y}
            </h1>
          )}
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
    opacity: 0.9,
    border: "2px solid gold",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    fontWeight: 400
  }
};

export default SayHello;
