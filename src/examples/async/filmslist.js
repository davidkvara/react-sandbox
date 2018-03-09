import React from "react";

export default function FilmsList({ films }) {
  return (
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
  );
}
