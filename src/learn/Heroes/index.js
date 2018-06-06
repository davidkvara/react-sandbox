import React, { Component } from "react";
import HeroesContainer from "./components/HeroesContainer";
import HeroEditor from "./components/HeroEditor";
import "./style.css";

class Heroes extends Component {
  state = {
    heroes: [{ name: "AI bot", saying: "y'all stupid lol", id: 13 }],
    editingMode: false,
    hint: "",
    selectedHero: null
  };

  heroDelete = (e, heroID) => {
    e.stopPropagation();
    const heroes = this.state.heroes.filter(hero => hero.id !== heroID);
    this.setState({ heroes, selectedHero: null });
  };

  handleEdit = hero => {
    this.setState({ editingMode: true, selectedHero: hero });
  };

  addHero = hero => {
    this.setState({
      selectedHero: { id: "", name: "", saying: "" },
      editingMode: false
    });
  };

  saveHero = () => {
    const newHero = { ...this.state.selectedHero };
    if (newHero.id && newHero.name && newHero.saying) {
      const idExists = this.state.heroes.findIndex(
        hero => hero.id === Number(newHero.id)
      );
      if (idExists > -1) {
        const editedHeros = this.state.heroes.map(
          hero =>
            hero.id === Number(newHero.id)
              ? { ...newHero, id: Number(newHero.id) }
              : hero
        );
        this.setState({ heroes: editedHeros, selectedHero: null, hint: "" });
      } else {
        newHero.id = Number(newHero.id);
        this.setState({
          heroes: [...this.state.heroes, newHero],
          selectedHero: null,
          hint: ""
        });
      }
    } else {
      this.setState({ hint: "don't leave an empty input!!" });
    }
  };

  handleCancel = () => {
    this.setState({ selectedHero: null, editingMode: false, hint: "" });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
      let selectedHero = { ...prevState.selectedHero };
      selectedHero[name] = value;
      return { selectedHero };
    });
  };

  render() {
    const { heroes, selectedHero, editingMode, hint } = this.state;

    return (
      <div className="container">
        <h2>We can be heroes, just for one day</h2>
        <button onClick={this.addHero}>add new Hero</button>
        <HeroesContainer
          heroes={heroes}
          onClick={this.handleEdit}
          onDelete={this.heroDelete}
        />
        <HeroEditor
          selectedHero={selectedHero}
          editingMode={editingMode}
          onSave={this.saveHero}
          onCancel={this.handleCancel}
          onChange={this.handleChange}
          hint={hint}
        />
      </div>
    );
  }
}

export default Heroes;
