import React, { useState, useEffect } from "react";
import Welcome from "./screen/welcome";
import Summary from "./screen/summary";
import { ScreenOne, ScreenTwo } from "./screen/main";

const defaultState = {
  name: "",
  lastname: "",
  username: "",
  password: ""
};

const App = () => {
  const [screen, setScreen] = useState("screen_1");
  const [user, setUserData] = useState(defaultState);
  const { name, lastname, username, password } = user;
  // ლოკალ სტორეჯი შლის ამჟამინდელ ობიექტს clear-ზე
  // defaultState-მა უშველა

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      // no data
      return;
    }
    const savedUser = localStorage.getItem("user");
    setUserData(JSON.parse(savedUser));
  }, []);

  const handleChange = e => {
    const { id, value } = e.target;
    setUserData(state => {
      return { ...state, [id]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !lastname) return;
    setScreen("screen_2");
  };

  const handleSubmit2 = e => {
    e.preventDefault();
    if (username && password) {
      setScreen("screen_3");
    }
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setScreen("registered");
  };

  const handleClear = () => {
    setUserData(defaultState);
    setScreen("screen_1");
    localStorage.clear();
  };

  const setNavigation = position => {
    setScreen(position);
  };

  return (
    <>
      <div className="container">
        {screen === "screen_2" ? (
          <ScreenTwo
            onSubmit={handleSubmit2}
            onChange={handleChange}
            goBack={setNavigation}
            userName={username}
            pwd={password}
          />
        ) : screen === "screen_3" ? (
          <Summary
            goBack={setNavigation}
            onSave={handleSave}
            onClear={handleClear}
            {...user}
          />
        ) : screen === "registered" ? (
          <Welcome name={name} goBack={setNavigation} />
        ) : (
          <ScreenOne
            onSubmit={handleSubmit}
            onChange={handleChange}
            name={name}
            lastName={lastname}
          />
        )}
      </div>
    </>
  );
};

export default App;
