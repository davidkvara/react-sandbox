import React from "react";

const HeroEditor = ({
  selectedHero: { id, name, saying },
  editingMode,
  onSave,
  onCancel,
  onChange,
  focused: autoFocus
}) => {
  return (
    <div className="overlay">
      <div className="hero-editor">
        {editingMode ? (
          <p>
            <label>
              <span className="label-helper">id:</span>
              {id}
            </label>
          </p>
        ) : (
          <p>
            <label>
              <span className="label-helper">id:</span>
              <input
                className="hero-input"
                autoFocus
                type="number"
                name="id"
                value={id}
                placeholder="id"
                onChange={onChange}
              />
            </label>
          </p>
        )}
        <p>
          <label>
            <span className="label-helper">name:</span>
            <input
              className="hero-input"
              type="text"
              name="name"
              value={name}
              placeholder="name"
              onChange={onChange}
            />
          </label>
        </p>
        <p>
          <label>
            <span className="label-helper">saying:</span>
            <input
              className="hero-input"
              type="text"
              name="saying"
              value={saying}
              placeholder="saying"
              onChange={onChange}
            />
          </label>
        </p>
        <div className="btn-container">
          <button onClick={onSave}>save</button>
          <button onClick={onCancel}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default HeroEditor;
