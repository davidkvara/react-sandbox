import React from "react";

const Film = ({ title, release_date, director, rt_score, description }) => (
  <li className="article">
    <h3>{title}</h3>
    <p>
      <span>release date:</span> {release_date}
    </p>
    <p>
      <span>director:</span> {director}
    </p>
    <p>
      <span>rotten tomattoes:</span> {rt_score}
    </p>
    <p>
      <span>description:</span> {description}
    </p>
  </li>
);

export default Film;
