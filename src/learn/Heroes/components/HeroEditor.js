import React from "react";
import HeroInput from "./Input";

const HeroEditor = ({
  selectedHero,
  editingMode,
  onSave,
  onCancel,
  onChange,
  hint
}) => {
  if (!selectedHero) return "";
  return (
    <div className="overlay">
      <div className="hero-editor">
        {editingMode ? (
          <p>
            <label>
              <span className="label-helper">id:</span>
              {selectedHero.id}
            </label>
          </p>
        ) : (
          <HeroInput
            type="number"
            label="id"
            value={selectedHero.id}
            onChange={onChange}
          />
        )}
        <HeroInput
          type="text"
          label="name"
          value={selectedHero.name}
          onChange={onChange}
        />
        <HeroInput
          type="text"
          label="saying"
          value={selectedHero.saying}
          onChange={onChange}
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
