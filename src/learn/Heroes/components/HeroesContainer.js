import React from "react";
import Hero from "./Hero";

const Heroes = ({ heroes, onClick, onDelete }) => (
  <div className="heroes-container">
    {heroes.map(hero => (
      <Hero
        key={hero.id}
        {...hero}
        onClick={() => onClick(hero)}
        onDelete={e => onDelete(e, hero.id)}
      />
    ))}
  </div>
);

export default Heroes;
