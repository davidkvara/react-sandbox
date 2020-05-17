import React, { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useLocalStorageState("name", "david");

  return (
    <div className="container">
      <input value={value} onChange={e => setValue(e.target.value)} />
      <h3>{value}</h3>
    </div>
  );
};

function useLocalStorageState(key, defaultName = "") {
  const [value, setValue] = useState(localStorage.getItem(key) || defaultName);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}

export default App;
