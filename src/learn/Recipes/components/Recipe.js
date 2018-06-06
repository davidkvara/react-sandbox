import React from "react";

const Recipe = ({ name, ingredients, steps }) => (
  <div className="recipe">
    <h3>{name}</h3>
    <ul>
      {ingredients.map(ingredient => (
        <li key={ingredient.name}>{ingredient.name}</li>
      ))}
    </ul>
    <h3>Cooking Instructions</h3>
    {steps.map((step, i) => <p key={i}>{step}</p>)}
  </div>
);

export default Recipe;
