import React, { useReducer } from "react";
import "./style.css";
import HeroesContainer from "./components/HeroesContainer";
import HeroEditor from "./components/HeroEditor";
import { heroesReducer } from "./reducers";

const initialState = {
  heroes: [],
  editingMode: false,
  hint: "",
  selectedHero: null
};

const Heroes = () => {
  const [state, dispatch] = useReducer(heroesReducer, initialState);
  const { heroes, selectedHero, hint, editingMode } = state;
  const thisEl = React.useRef();

  const heroDelete = (e, heroID) => {
    e.stopPropagation();
    dispatch({ type: "deleteHero", heroID });
  };

  const handleEdit = hero => {
    dispatch({ type: "editHero", hero });
  };

  const addHero = e => {
    e.preventDefault();
    dispatch({
      type: "addHero",
      hero: { id: Date.now(), name: "", saying: "" }
    });
    // ???
    setTimeout(() => {
      thisEl.current.focus();
    }, 100);
  };

  const saveHero = e => {
    e.preventDefault();
    if (!selectedHero.name || !selectedHero.saying) {
      dispatch({ type: "displayHint" });
      return;
    }
    if (editingMode) {
      // გასაუმჯობესებელია აიდის მინიჭების პროცესი
      const editedHeros = heroes.map(hero =>
        hero.id === selectedHero.id
          ? { ...selectedHero, id: selectedHero.id }
          : hero
      );
      dispatch({ type: "saveEditedHero", editedHeros });
    } else {
      dispatch({ type: "saveNewHero" });
    }
  };

  const handleCancel = e => {
    e.preventDefault();
    dispatch({ type: "cancelAddHero" });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: "handleChange", name, value });
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
        myRef={thisEl}
      />
    </div>
  );
};

export default Heroes;
