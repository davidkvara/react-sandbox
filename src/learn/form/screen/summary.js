import React from "react";
import { BackButton, Button } from "../components/button";

const Summary = props => {
  const { name, lastname, username, password, goBack, onSave, onClear } = props;
  return (
    <div className="form">
      <BackButton onClick={() => goBack("screen_2")} children={backIcon} />
      <p className="data-par">
        name: <span>{name}</span>
      </p>
      <p className="data-par">
        lastname: <span>{lastname}</span>
      </p>
      <p className="data-par">
        username: @<span>{username}</span>
      </p>
      <p className="data-par">
        password: <span>{password}</span>
      </p>
      <p>
        <Button onClick={onSave}>save</Button>&nbsp;
        <Button onClick={onClear}>clear</Button>
      </p>
    </div>
  );
};

const backIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
  >
    <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default Summary;
