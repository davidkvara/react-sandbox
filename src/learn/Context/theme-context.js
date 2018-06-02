import React from "react";

export const themes = {
  light: {
    color: "#434753",
    background: "#eee"
  },
  dark: {
    color: "#eee",
    background: "#434753"
  }
};

// * შეიქმნა
export const ThemeContext = React.createContext(
  themes.dark // default value
);
