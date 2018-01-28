import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <section
      className="recipe"
      style={{ borderBottom: "2px double orange", marginBottom: 10 }}
    >
      <h3>{name}</h3>
      <IngredientsList list={ingredients} />
      <Instructions title="Cooking Steps" steps={steps} />
    </section>
  );
};

export default Recipe;
