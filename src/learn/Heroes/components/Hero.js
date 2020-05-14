import React from "react";

export default ({ name, saying, onClick, onDelete }) => (
  <div className="hero-card" onClick={onClick}>
    <h3 style={{ marginTop: 0 }}>{name}</h3>
    <p>{saying}</p>
    <button className="hero-delete" onClick={onDelete}>
      delete
    </button>
  </div>
);
