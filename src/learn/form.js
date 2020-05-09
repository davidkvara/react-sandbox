import React, { useState } from "react";

export default () => {
  const [values, handleChange] = useForm({ username: "", pwd: "", email: "" });

  return (
    <>
      <p>
        <input
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <span>{values.username}</span>
      </p>
      <p>
        <input name="email" value={values.email} onChange={handleChange} />
        <span>{values.email}</span>
      </p>
      <p>
        <input
          name="pwd"
          value={values.pwd}
          onChange={handleChange}
          type="password"
        />
      </p>
    </>
  );
};

const useForm = obj => {
  const [state, setState] = useState(obj);

  return [
    state,
    e => {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  ];
};
