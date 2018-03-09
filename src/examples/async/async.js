import React, { Component } from "react";
import "./film.css";

import FilmsList from "./filmslist";

class App extends Component {
  state = { films: [] };

  componentDidMount() {
    this.getAsyncData();
  }

  async getAsyncData() {
    try {
      const data = await fetch("https://ghibliapi.herokuapp.com/films/");
      const results = await data.json();
      const films = results.map(film => ({
        title: film.title,
        description: film.description,
        rt_score: film.rt_score,
        release_date: film.release_date,
        id: film.id,
        director: film.director
      }));
      this.setState({ films });
    } catch (err) {
      console.log("error: ", err);
    }
  }

  render() {
    const { films } = this.state;

    return (
      <div className="demo">
        <h2>Welcome to PromiseLand!</h2>
        <h3>Studio Ghibli Films</h3>
        {films.length > 0 && <FilmsList films={films} />}
      </div>
    );
  }
}

export default App;
