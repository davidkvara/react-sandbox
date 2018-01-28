import React from "react";
import Recipe from "./recipe";

const App = ({ title, recipes }) => {
  return (
    <div className="menu" style={{ padding: "1em 2em" }}>
      <h2>{title}</h2>
      {recipes.map((recipe, i) => <Recipe key={i} {...recipe} />)}
    </div>
  );
};

export default App;
