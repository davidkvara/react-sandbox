import React from "react";
import PropTypes from "prop-types";
import Recipe from "./recipe";

const App = ({ title, recipes }) => {
  return (
    <div className="menu" style={{ padding: "1em 2em" }}>
      <header style={{ textAlign: "center" }}>
        <h2>{title}</h2>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => <Recipe key={i} {...recipe} />)}
      </div>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isrequired,
  recipes: PropTypes.array.isRequired
};

export default App;
