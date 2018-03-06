import React, { Component } from "react";
import "./film.css";

class App extends Component {
  state = { films: [] };

  componentDidMount() {
    this.getAsyncData();
  }

  getAsyncData() {
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then(res => res.json())
      .then(films =>
        films.map(film => ({
          title: film.title,
          description: film.description,
          rt_score: film.rt_score,
          release_date: film.release_date,
          id: film.id,
          director: film.director
        }))
      )
      .then(filmData => this.setState({ films: filmData }))
      .catch(err => console.log(err));
  }

  render() {
    const { films } = this.state;
    // console.log("rendered", films);

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
