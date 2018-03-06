import React, { Component } from "react";
import "./film.css";

class App extends Component {
  state = { films: [] };

  componentDidMount() {
    this.getAsyncData();
  }

  async getAsyncData() {
    try {
      const data = await fetch("https://ghibliapi.herokuapp.com/films/");
      const results = await data.json();
      // console.log(results);
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
      console.log("error", err);
    }
  }

  render() {
    const { films } = this.state;

    return (
      <div className="demo">
        <h2>Welcome to PromiseLand!</h2>
        <h3>Studio Ghibli Films</h3>
        {films ? (
          <ul style={{ paddingLeft: 0 }}>
            {films.map(film => (
              <li key={film.id} className="article">
                <h3>{film.title}</h3>
                <p>
                  <span>release date:</span> {film.release_date}
                </p>
                <p>
                  <span>director:</span> {film.director}
                </p>
                <p>
                  <span>rotten tomattoes:</span> {film.rt_score}
                </p>
                <p>
                  <span>description:</span> {film.description}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>list is currently not avialable</p>
        )}
      </div>
    );
  }
}

export default App;
