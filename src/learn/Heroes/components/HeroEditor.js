import React from "react";
import HeroInput from "./Input";

const HeroEditor = ({ selectedHero, onSave, onCancel, onChange, hint }) => {
  if (!selectedHero) return "";
  return (
    <div className="overlay">
      <div className="hero-editor">
        <HeroInput
          value={selectedHero.name}
          onChange={onChange}
          type="text"
          label="name"
        />
        <HeroInput
          value={selectedHero.saying}
          onChange={onChange}
          type="text"
          label="saying"
        />

        <div className="btn-container">
          <button onClick={onSave}>save</button>
          <button onClick={onCancel}>cancel</button>
        </div>
        <p style={{ color: "orangered" }}>{hint}</p>
      </div>
    </div>
  );
};

export default HeroEditor;
