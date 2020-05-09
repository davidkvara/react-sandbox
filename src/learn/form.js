import React, { useState } from "react";

export default () => {
  const [{ username, pwd }, setValue] = useState({ username: "", pwd: "" });

  const handleChange = e => {
    const { name, value } = e.target;

    setValue(state => {
      return { ...state, [name]: value };
    });
  };

  return (
    <>
      <p>
        <input name="username" value={username} onChange={handleChange} />
        <span>{username}</span>
      </p>
      <p>
        <input name="pwd" value={pwd} onChange={handleChange} type="password" />
      </p>
    </>
  );
};
