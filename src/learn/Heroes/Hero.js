import React from "react";

export default ({ name, id, saying, onClick, onDelete }) => (
  <div className="hero-card" onClick={onClick}>
    <h3 style={{ marginTop: 0 }}>id: {id}</h3>
    <p>{name}</p>
    <p>{saying}</p>
    <button className="hero-delete" onClick={onDelete}>
      delete
    </button>
  </div>
);
