import React, { createContext, useContext, useState } from "react";

const AppContext = createContext("guest");

const FancyBorder = props => (
  <div style={{ border: "3px solid mediumseagreen", padding: " 1rem" }}>
    {props.children}
  </div>
);

// TODO: მემოიზაციაა დასამატებელი

export default () => {
  const [name, setName] = useState("David");
  return (
    <AppContext.Provider value={{ name, setName }}>
      <div className="container">
        <h2>ისე, აქაც რომ იყოს საინტერესო იქნება {name}</h2>
        <Main>
          <Sidebar widget={<Widget />}></Sidebar>
        </Main>
      </div>
    </AppContext.Provider>
  );
};

const Main = props => (
  <FancyBorder>
    <main>
      <h3>this is main component</h3>
      <p>this is main components paragraph</p>
      {props.children}
    </main>
  </FancyBorder>
);

const Sidebar = props => {
  return (
    <FancyBorder>
      <div>
        <h2>some sidebar header</h2>
        <p>some sidebar staff going on here, enjoy!</p>

        {props.widget}
      </div>
    </FancyBorder>
  );
};

const Widget = () => {
  const { name, setName } = useContext(AppContext);

  return (
    <FancyBorder>
      <div>
        <h3>cool widget</h3>
        <p> and it's very deep in there lalalalallaaaoh</p>
        <p>and of course context state: wait for it</p>
        <h1 className="dark-red">THE IT: {name}</h1>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
    </FancyBorder>
  );
};
