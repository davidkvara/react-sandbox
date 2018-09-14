import React from "react";
import Film from "./Film";

const FilmsList = ({ films }) => (
  <ul style={{ paddingLeft: 0 }}>
    {films.map(film => <Film key={film.id} {...film} />)}
  </ul>
);

export default FilmsList;
