import React, { useState, useEffect } from "react";

const App = () => {
  const [users, updateUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then(data => data.json())
      .then(users => {
        updateUsers(users);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Intro to React Hooks</h1>
      <ul>
        {loading ? (
          <p>loading...</p>
        ) : (
          users.map(user => <li key={user.id}>{user.title}</li>)
        )}
      </ul>
    </div>
  );
};

export default App;
