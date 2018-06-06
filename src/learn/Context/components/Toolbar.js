import React from "react";
import ThemedButton from "./ThemedButton";

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.

// An intermediate component that uses the ThemedButton
export default function Toolbar(props) {
  return (
    <div className="container">
      <p>this button uses the theme from state </p>
      <ThemedButton onClick={props.changeTheme}>Toggle theme</ThemedButton>
    </div>
  );
}
