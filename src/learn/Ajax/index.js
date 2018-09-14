import React, { Component } from "react";
import FilmsList from "./components/FilmsList";
import "./style.css";

class App extends Component {
  state = { films: [], error: "" };

  componentDidMount() {
    this.getAsyncData();
  }

  async getAsyncData() {
    try {
      const data = await fetch("https://ghibliapi.herokuapp.com/films/");
      const results = await data.json();
      const films = results.map(film => ({
        title: film.title,
        release_date: film.release_date,
        director: film.director,
        rt_score: film.rt_score,
        description: film.description,
        id: film.id
      }));

      this.setState({ films });
    } catch (err) {
      this.setState({ error: "Oops, error occured!" });
    }
  }

  render() {
    const { films, error } = this.state;

    return (
      <div className="demo">
        <h2>Welcome to PromiseLand!</h2>
        <h3>Studio Ghibli Films</h3>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <FilmsList films={films} />
        )}
      </div>
    );
  }
}

export default App;
