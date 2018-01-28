import React from "react";

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <div
      className="recipe"
      style={{ borderBottom: "2px double orange", marginBottom: 10 }}
    >
      <h3>{name}</h3>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient.name}</li>
        ))}
      </ul>
      <h4>Cooking Steps</h4>
      {steps.map((step, i) => <p key={i}>{step}</p>)}
    </div>
  );
};

export default Recipe;
