import React from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";

const Recipes = ({ recipes }) => (
  <div className="wrapper">
    {recipes.map((recipe, i) => <Recipe key={i} {...recipe} />)}
  </div>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default Recipes;
