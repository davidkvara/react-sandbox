import React from "react";

const IngredientsList = ({ list }) => {
  return (
    <ul>
      {list.map(ingredient => (
        <li key={ingredient.name}>
          {ingredient.name}: {ingredient.amount} {ingredient.measurement}
        </li>
      ))}
    </ul>
  );
};

export default IngredientsList;
