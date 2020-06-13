import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Box = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>box component</h2>
      <h3>
        USER: <mark>{user}</mark>
      </h3>
      <input value={user} onChange={e => setUser(e.target.value)} />
      <ul>
        <li>Nemo fugiat deserunt veniam quasi molestias.</li>
        <li>Neque fuga cupiditate incidunt dolorem illo.</li>
        <li>Iste, autem. Natus sapiente non accusamus.</li>
        <li>Voluptatum at vitae voluptas recusandae quae!</li>
      </ul>
    </div>
  );
};

export default Box;
