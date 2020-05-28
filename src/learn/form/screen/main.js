import React from "react";
import { Button, BackButton } from "../components/button";
import FormGroup from "../components/formGroup";

export const ScreenOne = ({ name, lastName, onSubmit, onChange }) => (
  <form className="form" onSubmit={onSubmit}>
    <FormGroup label="name" value={name} onChange={onChange} />
    <FormGroup label="lastname" value={lastName} onChange={onChange} />
    <Button>next</Button>
  </form>
);

export const ScreenTwo = ({ userName, pwd, onSubmit, onChange, goBack }) => (
  <form onSubmit={onSubmit}>
    <BackButton
      type="button"
      onClick={() => goBack("screen_1")}
      children={backIcon}
    />
    <FormGroup label="username" value={userName} onChange={onChange} />
    <FormGroup
      label="password"
      value={pwd}
      onChange={onChange}
      type="password"
    />
    <Button>next</Button>
  </form>
);

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
