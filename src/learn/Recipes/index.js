import React from "react";
import Recipes from "./components/Recipes";
import data from "./API";

const Menu = () => (
  <div className="menu" style={{ padding: "0 2em" }}>
    <h2>Delicious Recipes</h2>
    <Recipes recipes={data} />
  </div>
);

export default Menu;
