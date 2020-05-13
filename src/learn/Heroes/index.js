import React, { useState } from "react";
import "./style.css";
import HeroesContainer from "./components/HeroesContainer";
import HeroEditor from "./components/HeroEditor";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [editingMode, setEditingMode] = useState(false);
  const [hint, setHint] = useState("");
  const [selectedHero, setSelectedHero] = useState(null);

  const heroDelete = (e, heroID) => {
    e.stopPropagation();
    const newHeroes = heroes.filter(hero => hero.id !== heroID);
    setHeroes(newHeroes);
    setSelectedHero(null);
  };

  const handleEdit = hero => {
    setEditingMode(true);
    setSelectedHero(hero);
  };

  const addHero = () => {
    setEditingMode(false);
    setSelectedHero({ id: Date.now(), name: "", saying: "" });
  };

  const saveHero = () => {
    if (selectedHero.name && selectedHero.saying) {
      const idExists = heroes.findIndex(
        hero => hero.id === Number(selectedHero.id)
      );
      if (idExists > -1) {
        const editedHeros = heroes.map(hero =>
          hero.id === Number(selectedHero.id)
            ? { ...selectedHero, id: Number(selectedHero.id) }
            : hero
        );
        setHeroes(editedHeros);
      } else {
        setHeroes(heroes.concat(selectedHero));
      }
      setSelectedHero(null);
      setHint("");
    } else {
      setHint("don't leave an empty input!!");
    }
  };

  const handleCancel = () => {
    setSelectedHero(null);
    setEditingMode(false);
    setHint("");
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setSelectedHero(state => {
      return { ...state, [name]: value };
    });
  };

  return (
    <div className="container">
      <h2>We can be heroes, just for one day</h2>
      <button onClick={addHero}>add new Hero</button>
      <HeroesContainer
        heroes={heroes}
        onClick={handleEdit}
        onDelete={heroDelete}
      />
      <HeroEditor
        selectedHero={selectedHero}
        editingMode={editingMode}
        onSave={saveHero}
        onCancel={handleCancel}
        onChange={handleChange}
        hint={hint}
      />
    </div>
  );
};

export default Heroes;
