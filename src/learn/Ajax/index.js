import React, { useState, useEffect } from "react";
import FilmsList from "./components/FilmsList";
import "./style.css";
import { mapPosts } from "./mapApiPosts";

const NewApp = () => {
  const [error, setError] = useState(null);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch("https://ghibliapi.herokuapp.com/films/");
        const results = await data.json();
        setFilms(mapPosts(results));
      } catch (err) {
        console.log(err);
        setError("error");
      }
    }
    getData();
  }, []);

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
};

export default NewApp;
