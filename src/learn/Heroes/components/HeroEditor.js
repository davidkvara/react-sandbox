import React from "react";
import HeroInput from "./Input";

const HeroEditor = ({
  myRef,
  selectedHero,
  editingMode,
  onSave,
  onCancel,
  onChange,
  hint
}) => {
  if (!selectedHero) return null;
  return (
    <div className="overlay">
      <div className="hero-editor">
        {editingMode ? <h2>Edit Hero</h2> : <h2>Add Hero</h2>}
        <form onSubmit={onSave}>
          <HeroInput
            value={selectedHero.name}
            onChange={onChange}
            label="name"
            myRef={myRef}
          />
          <HeroInput
            value={selectedHero.saying}
            onChange={onChange}
            label="saying"
          />

          <div className="btn-container">
            <button onClick={onSave}>save</button>
            <button onClick={onCancel}>cancel</button>
          </div>
        </form>
        <p style={{ color: "orangered" }}>{hint}</p>
      </div>
    </div>
  );
};

export default HeroEditor;
