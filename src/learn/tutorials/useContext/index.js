import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Box from "./Box";

const App = () => {
  const [user, setUser] = useState("david");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="container">
        <h3>title or else</h3>
        <p>
          Quod, rerum. Rerum, a. Magni at quas doloremque autem. Rerum
          doloremque pariatur error fugit fuga quibusdam, necessitatibus,
          accusantium earum voluptas reiciendis molestiae quidem vero aut
          similique animi aliquam officia sapiente?
        </p>
        <Sidebar></Sidebar>
      </div>
    </UserContext.Provider>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>sidebar</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime ut nemo
        quaerat dolorum accusamus repudiandae laudantium labore, ratione neque
        provident tenetur nostrum doloribus reprehenderit? Aliquam incidunt
        minima ex laudantium atque?
      </p>
      <Box />
    </div>
  );
};

export default App;
