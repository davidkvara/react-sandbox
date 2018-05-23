import React, { Component } from "react";
import "./style.css";
import Hero from "./Hero";
import HeroEditor from "./HeroEditor";

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
      editingMode: false,
      a11yfocus: true
    });
  };

  saveHero = () => {
    const newHero = this.state.selectedHero;
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
    let selectedHero = this.state.selectedHero;
    selectedHero[e.target.name] = e.target.value;

    this.setState({ selectedHero });
  };

  render() {
    const { heroes, selectedHero, editingMode, hint } = this.state;

    return (
      <div className="container">
        <h2>We can be heroes, just for one day</h2>
        <button onClick={this.addHero}>add new Hero</button>
        <div className="heroes-container">
          {heroes.map(hero => (
            <Hero
              key={hero.id}
              {...hero}
              onClick={() => this.handleEdit(hero)}
              onDelete={e => this.heroDelete(e, hero.id)}
            />
          ))}
        </div>
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
